import assert from "node:assert/strict";
import test from "node:test";
import { artifactHeaders, ifNoneMatchMatches, resolveHttpEtag, type ArtifactObjectMetadata, type ArtifactRecord } from "../src/index";
import { parseArtifactPath, parseSingleRange, signaturePayload, verifyHmacSignature } from "../src/security";

const secret = "unit-test-secret";

async function signedRequest(pathname: string, timestamp = Math.floor(Date.now() / 1000), signatureOverride?: string) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signature = new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(signaturePayload(timestamp, "GET", pathname))));
  const value = signatureOverride ?? Buffer.from(signature).toString("base64url");
  return new Request(`https://example.workers.dev${pathname}`, { headers: { "x-asb-timestamp": String(timestamp), "x-asb-signature": value } });
}

test("accepts only the internal artifact path and known formats", () => {
  assert.deepEqual(parseArtifactPath("/internal/v1/reports/smartphone-sales-in-spain/artifacts/json"), { slug: "smartphone-sales-in-spain", format: "json" });
  assert.equal(parseArtifactPath("/internal/v1/reports/../artifacts/json"), null);
  assert.equal(parseArtifactPath("/internal/v1/reports/a%2fb/artifacts/json"), null);
  assert.equal(parseArtifactPath("/internal/v1/reports/smartphone-sales-in-spain/artifacts/exe"), null);
});

test("validates HMAC signatures and rejects invalid or expired requests", async () => {
  const pathname = "/internal/v1/reports/smartphone-sales-in-spain/artifacts/json";
  assert.equal(await verifyHmacSignature(await signedRequest(pathname), secret), true);
  assert.equal(await verifyHmacSignature(await signedRequest(pathname, Math.floor(Date.now() / 1000), "invalid"), secret), false);
  assert.equal(await verifyHmacSignature(await signedRequest(pathname, Math.floor(Date.now() / 1000) - 301), secret), false);
});

test("parses a single bounded PDF range", () => {
  assert.deepEqual(parseSingleRange("bytes=10-19", 100), { offset: 10, length: 10, contentRange: "bytes 10-19/100" });
  assert.deepEqual(parseSingleRange("bytes=-10", 100), { offset: 90, length: 10, contentRange: "bytes 90-99/100" });
  assert.equal(parseSingleRange("bytes=100-101", 100), "invalid");
});

const artifact: ArtifactRecord = {
  r2_key: "reports/rpt_spain_smartphone_sales/versions/1.0.0/html/en/index.html",
  content_type: "text/html; charset=utf-8",
  content_disposition: 'attachment; filename="smartphone-sales-in-spain-v1.0.0.html"',
  byte_size: 16889,
};

function objectMetadata(overrides: Partial<ArtifactObjectMetadata> = {}): ArtifactObjectMetadata {
  return {
    httpEtag: '"http-etag"',
    etag: "raw-etag",
    uploaded: new Date("2026-07-14T00:00:00.000Z"),
    writeHttpMetadata(headers) {
      headers.set("content-type", "application/octet-stream");
      headers.set("content-disposition", "inline");
      headers.set("etag", '"metadata-etag"');
    },
    ...overrides,
  };
}

test("builds stable artifact headers for GET, HEAD, 304, and Range", async () => {
  const object = objectMetadata();
  const getHeaders = artifactHeaders(object, artifact);
  const headHeaders = artifactHeaders(object, artifact);
  const rangeHeaders = artifactHeaders(object, artifact, { contentRange: "bytes 0-99/188595" });

  assert.equal(getHeaders.get("content-type"), artifact.content_type);
  assert.equal(getHeaders.get("content-disposition"), artifact.content_disposition);
  assert.equal(getHeaders.get("etag"), '"http-etag"');
  assert.equal(getHeaders.get("last-modified"), object.uploaded.toUTCString());
  assert.equal(headHeaders.get("etag"), getHeaders.get("etag"));
  assert.equal(rangeHeaders.get("etag"), getHeaders.get("etag"));
  assert.equal(rangeHeaders.get("content-range"), "bytes 0-99/188595");
  assert.equal(ifNoneMatchMatches(getHeaders.get("etag"), getHeaders.get("etag")), true);
  const notModified = new Response(null, { status: 304, headers: getHeaders });
  assert.equal((await notModified.arrayBuffer()).byteLength, 0);
});

test("uses a quoted R2 etag fallback and overwrites metadata headers", () => {
  const object = objectMetadata({ httpEtag: undefined, etag: "fallback-etag" });
  const headers = artifactHeaders(object, artifact);

  assert.equal(resolveHttpEtag(object), '"fallback-etag"');
  assert.equal(headers.get("etag"), '"fallback-etag"');
  assert.equal(headers.get("content-type"), artifact.content_type);
  assert.equal(headers.get("content-disposition"), artifact.content_disposition);
});
