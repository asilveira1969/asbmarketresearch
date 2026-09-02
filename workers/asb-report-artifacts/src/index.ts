import { parseArtifactPath, parseSingleRange, verifyHmacSignature } from "./security";

export interface Env {
  ASB_REPORTS_BUCKET: R2Bucket;
  ASB_REPORTS_DB: D1Database;
  ASB_ARTIFACT_ORIGIN_SECRET: string;
}

export type ArtifactRecord = {
  r2_key: string;
  content_type: string;
  content_disposition: string;
  byte_size: number;
};

export type ArtifactObjectMetadata = {
  writeHttpMetadata(headers: Headers): void;
  httpEtag?: string | null;
  etag?: string | null;
  uploaded: Date;
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

export function resolveHttpEtag(object: ArtifactObjectMetadata): string | null {
  if (object.httpEtag) return object.httpEtag;
  if (object.etag) return `"${object.etag.replaceAll('"', "")}"`;
  return null;
}

export function artifactHeaders(object: ArtifactObjectMetadata, artifact: ArtifactRecord, range?: { contentRange: string }): Headers {
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  const etag = resolveHttpEtag(object);
  headers.set("content-type", artifact.content_type);
  headers.set("content-disposition", artifact.content_disposition);
  headers.set("cache-control", "private, no-store");
  if (etag) headers.set("etag", etag);
  headers.set("last-modified", object.uploaded.toUTCString());
  headers.set("accept-ranges", "bytes");
  headers.set("x-robots-tag", "noindex, nofollow");
  if (range) headers.set("content-range", range.contentRange);
  return headers;
}

export function ifNoneMatchMatches(value: string | null, etag: string | null): boolean {
  return Boolean(etag && value && (value === "*" || value.split(",").map((candidate) => candidate.trim()).includes(etag)));
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
    return new Response(null, { status: range ? 206 : 200, headers: artifactHeaders(object, artifact, range ?? undefined) });
  }

  const object = await env.ASB_REPORTS_BUCKET.get(artifact.r2_key, range ? { range: { offset: range.offset, length: range.length } } : undefined);
  if (!object) return notFound();
  const headers = artifactHeaders(object, artifact, range ?? undefined);
  const ifNoneMatch = request.headers.get("if-none-match");
  if (!range && ifNoneMatchMatches(ifNoneMatch, resolveHttpEtag(object))) {
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
