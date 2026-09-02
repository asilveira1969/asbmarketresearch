import { parseArtifactPath, parseSingleRange, verifyHmacSignature } from "./security";

export interface Env {
  ASB_REPORTS_BUCKET: R2Bucket;
  ASB_REPORTS_DB: D1Database;
  ASB_ARTIFACT_ORIGIN_SECRET: string;
}

type ArtifactRecord = {
  r2_key: string;
  content_type: string;
  content_disposition: string;
  byte_size: number;
};

const artifactQuery = `
  SELECT artifact.r2_key, artifact.content_type, artifact.content_disposition, artifact.byte_size
  FROM reports AS report
  INNER JOIN report_versions AS version ON version.report_id = report.report_id
  INNER JOIN report_artifacts AS artifact ON artifact.report_version_id = version.report_version_id
  WHERE report.canonical_slug = ?1
    AND report.publication_status = 'published'
    AND version.publication_status = 'published'
    AND artifact.publication_status = 'published'
    AND artifact.locale = report.primary_language
    AND artifact.format = ?2
  LIMIT 1
`;

function notFound() { return new Response("Not found", { status: 404 }); }
function unauthorized() { return new Response("Unauthorized", { status: 401 }); }

function objectHeaders(object: R2Object, artifact: ArtifactRecord, range?: { contentRange: string }): Headers {
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("content-type", artifact.content_type);
  headers.set("content-disposition", artifact.content_disposition);
  headers.set("cache-control", "private, no-store");
  headers.set("etag", object.httpEtag);
  headers.set("last-modified", object.uploaded.toUTCString());
  headers.set("accept-ranges", "bytes");
  headers.set("x-robots-tag", "noindex, nofollow");
  if (range) headers.set("content-range", range.contentRange);
  return headers;
}

async function findArtifact(env: Env, slug: string, format: string): Promise<ArtifactRecord | null> {
  return env.ASB_REPORTS_DB.prepare(artifactQuery).bind(slug, format).first<ArtifactRecord>();
}

async function handleArtifact(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const parsed = parseArtifactPath(url.pathname);
  if (!parsed) return notFound();
  if (!(await verifyHmacSignature(request, env.ASB_ARTIFACT_ORIGIN_SECRET.trim()))) return unauthorized();

  const artifact = await findArtifact(env, parsed.slug, parsed.format);
  if (!artifact) return notFound();

  const range = parsed.format === "pdf" ? parseSingleRange(request.headers.get("range"), artifact.byte_size) : null;
  if (range === "invalid") return new Response(null, { status: 416, headers: { "content-range": `bytes */${artifact.byte_size}` } });

  if (request.method === "HEAD") {
    const object = await env.ASB_REPORTS_BUCKET.head(artifact.r2_key);
    if (!object) return notFound();
    return new Response(null, { status: range ? 206 : 200, headers: objectHeaders(object, artifact, range ?? undefined) });
  }

  const object = await env.ASB_REPORTS_BUCKET.get(artifact.r2_key, range ? { range: { offset: range.offset, length: range.length } } : undefined);
  if (!object) return notFound();
  const headers = objectHeaders(object, artifact, range ?? undefined);
  const ifNoneMatch = request.headers.get("if-none-match");
  if (!range && ifNoneMatch && (ifNoneMatch === "*" || ifNoneMatch.split(",").map((value) => value.trim()).includes(object.httpEtag))) {
    return new Response(null, { status: 304, headers });
  }
  return new Response(object.body, { status: range ? 206 : 200, headers });
}

export default {
  async fetch(request, env): Promise<Response> {
    if (request.method !== "GET" && request.method !== "HEAD") return notFound();
    return handleArtifact(request, env);
  },
} satisfies ExportedHandler<Env>;
