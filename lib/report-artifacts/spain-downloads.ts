import { createHash, createHmac } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const SPAIN_REPORT_SLUG = "smartphone-sales-in-spain";
const PILOT_STORAGE_MODE = "cloudflare-pilot";
const REQUEST_TIMEOUT_MS = 7_000;

export const spainDownloadFormats = ["markdown", "json"] as const;
export type SpainDownloadFormat = (typeof spainDownloadFormats)[number];

type ArtifactSpec = {
  contentType: string;
  filename: string;
  localPath: string;
};

export type DownloadArtifact = {
  status: 200 | 304;
  body: Uint8Array | null;
  headers: Headers;
};

export class ArtifactUnavailableError extends Error {
  constructor() {
    super("Report artifact is temporarily unavailable.");
  }
}

const artifactSpecs: Record<SpainDownloadFormat, ArtifactSpec> = {
  markdown: {
    contentType: "text/markdown; charset=utf-8",
    filename: "smartphone-sales-in-spain-v1.0.0.md",
    localPath: path.join(process.cwd(), "content", "reports", SPAIN_REPORT_SLUG, "en", "report.md"),
  },
  json: {
    contentType: "application/json; charset=utf-8",
    filename: "smartphone-sales-in-spain-v1.0.0.json",
    localPath: path.join(process.cwd(), "content", "reports", SPAIN_REPORT_SLUG, "en", "report.json"),
  },
};

function isFormat(value: string): value is SpainDownloadFormat {
  return spainDownloadFormats.includes(value as SpainDownloadFormat);
}

export function isPilotArtifactRequest(slug: string, format: string): format is SpainDownloadFormat {
  return slug === SPAIN_REPORT_SLUG && isFormat(format);
}

function ifNoneMatchMatches(value: string | null, etag: string): boolean {
  if (!value) return false;
  if (value.trim() === "*") return true;

  return value.split(",").some((candidate) => candidate.trim().replace(/^W\//, "") === etag);
}

function publicHeaders(source: Headers, fallback: Headers): Headers {
  const headers = new Headers();
  for (const header of ["content-type", "content-disposition", "etag", "last-modified", "cache-control", "content-length"]) {
    const value = source.get(header) ?? fallback.get(header);
    if (value) headers.set(header, value);
  }

  const acceptRanges = source.get("accept-ranges");
  if (acceptRanges === "bytes") headers.set("accept-ranges", acceptRanges);
  headers.set("x-robots-tag", "noindex, nofollow");
  return headers;
}

function localHeaders(spec: ArtifactSpec, bytes: Uint8Array, modifiedAt: Date): Headers {
  const sha256 = createHash("sha256").update(bytes).digest("hex");
  return new Headers({
    "content-type": spec.contentType,
    "content-disposition": `attachment; filename="${spec.filename}"`,
    etag: `"sha256-${sha256}"`,
    "last-modified": modifiedAt.toUTCString(),
    "cache-control": "public, max-age=31536000, immutable, no-transform",
    "content-length": String(bytes.byteLength),
  });
}

async function loadLocalArtifact(format: SpainDownloadFormat, method: "GET" | "HEAD", ifNoneMatch: string | null): Promise<DownloadArtifact> {
  const spec = artifactSpecs[format];
  const [bytes, metadata] = await Promise.all([readFile(spec.localPath), stat(spec.localPath)]);
  const headers = publicHeaders(new Headers(), localHeaders(spec, bytes, metadata.mtime));

  if (ifNoneMatchMatches(ifNoneMatch, headers.get("etag")!)) {
    headers.delete("content-length");
    return { status: 304, body: null, headers };
  }

  return { status: 200, body: method === "HEAD" ? null : bytes, headers };
}

export function createArtifactSignature(secret: string, timestamp: number, method: "GET" | "HEAD", pathname: string): string {
  return createHmac("sha256", secret)
    .update(`${timestamp}\n${method}\n${pathname}`)
    .digest("base64url");
}

function remoteResponseIsValid(response: Response, spec: ArtifactSpec): boolean {
  const contentType = response.headers.get("content-type");
  const contentDisposition = response.headers.get("content-disposition");
  const etag = response.headers.get("etag");
  const lastModified = response.headers.get("last-modified");
  const cacheControl = response.headers.get("cache-control");

  return (
    contentType === spec.contentType &&
    contentDisposition === `attachment; filename="${spec.filename}"` &&
    Boolean(etag && !etag.startsWith("W/")) &&
    Boolean(lastModified && !Number.isNaN(Date.parse(lastModified))) &&
    Boolean(cacheControl)
  );
}

async function loadRemoteArtifact(
  format: SpainDownloadFormat,
  method: "GET" | "HEAD",
  ifNoneMatch: string | null,
  workerUrl: string,
  secret: string,
): Promise<DownloadArtifact> {
  const spec = artifactSpecs[format];
  const endpoint = new URL(`/internal/v1/reports/${SPAIN_REPORT_SLUG}/artifacts/${format}`, workerUrl);
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = createArtifactSignature(secret, timestamp, method, endpoint.pathname);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const headers = new Headers({
      "x-asb-timestamp": String(timestamp),
      "x-asb-signature": signature,
    });
    if (ifNoneMatch) headers.set("if-none-match", ifNoneMatch);

    const response = await fetch(endpoint, {
      method,
      headers,
      cache: "no-store",
      redirect: "error",
      signal: controller.signal,
    });

    if (response.status === 304 && ifNoneMatch && remoteResponseIsValid(response, spec)) {
      const publicResponseHeaders = publicHeaders(response.headers, new Headers());
      publicResponseHeaders.delete("content-length");
      return { status: 304, body: null, headers: publicResponseHeaders };
    }

    if (response.status !== 200 || !remoteResponseIsValid(response, spec)) throw new ArtifactUnavailableError();

    if (method === "HEAD") {
      return { status: 200, body: null, headers: publicHeaders(response.headers, new Headers()) };
    }

    const body = new Uint8Array(await response.arrayBuffer());
    const contentLength = response.headers.get("content-length");
    if (!body.byteLength || (contentLength !== null && Number(contentLength) !== body.byteLength)) {
      throw new ArtifactUnavailableError();
    }

    return { status: 200, body, headers: publicHeaders(response.headers, new Headers()) };
  } finally {
    clearTimeout(timeout);
  }
}

export async function loadSpainDownloadArtifact(
  format: SpainDownloadFormat,
  method: "GET" | "HEAD",
  ifNoneMatch: string | null,
): Promise<DownloadArtifact> {
  const fallbackEnabled = process.env.ASB_REPORTS_FALLBACK_LOCAL === "true";
  const cloudflarePilotEnabled = process.env.ASB_REPORTS_STORAGE_MODE === PILOT_STORAGE_MODE;

  if (!cloudflarePilotEnabled) return loadLocalArtifact(format, method, ifNoneMatch);

  const workerUrl = process.env.ASB_REPORTS_WORKER_URL;
  const secret = process.env.ASB_ARTIFACT_ORIGIN_SECRET;
  if (!workerUrl || !secret) {
    if (fallbackEnabled) return loadLocalArtifact(format, method, ifNoneMatch);
    throw new ArtifactUnavailableError();
  }

  try {
    return await loadRemoteArtifact(format, method, ifNoneMatch, workerUrl, secret);
  } catch {
    if (fallbackEnabled) return loadLocalArtifact(format, method, ifNoneMatch);
    throw new ArtifactUnavailableError();
  }
}
