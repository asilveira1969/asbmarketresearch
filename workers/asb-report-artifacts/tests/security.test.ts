import assert from "node:assert/strict";
import test from "node:test";
import { artifactEtag, artifactHeaders, handleArtifact, ifNoneMatchMatches, type ArtifactObjectMetadata, type ArtifactRecord, type Env } from "../src/index";
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
  sha256: "95A475D281D33C3B497AB1E2349C24D1D019659762DA0EE0617F60F342050F94",
};

function objectMetadata(overrides: Partial<ArtifactObjectMetadata> = {}): ArtifactObjectMetadata {
  return {
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
  const etag = artifactEtag(artifact.sha256)!;
  const getHeaders = artifactHeaders(object, artifact, etag);
  const headHeaders = artifactHeaders(object, artifact, etag);
  const rangeHeaders = artifactHeaders(object, artifact, etag, { contentRange: "bytes 0-99/188595" });

  assert.equal(getHeaders.get("content-type"), artifact.content_type);
  assert.equal(getHeaders.get("content-disposition"), artifact.content_disposition);
  assert.equal(getHeaders.get("etag"), '"sha256-95a475d281d33c3b497ab1e2349c24d1d019659762da0ee0617f60f342050f94"');
  assert.equal(getHeaders.get("last-modified"), object.uploaded.toUTCString());
  assert.equal(headHeaders.get("etag"), getHeaders.get("etag"));
  assert.equal(rangeHeaders.get("etag"), getHeaders.get("etag"));
  assert.equal(rangeHeaders.get("content-range"), "bytes 0-99/188595");
  assert.equal(ifNoneMatchMatches(getHeaders.get("etag"), getHeaders.get("etag")), true);
  const notModified = new Response(null, { status: 304, headers: getHeaders });
  assert.equal((await notModified.arrayBuffer()).byteLength, 0);
});

test("derives deterministic validators and supports weak conditional requests", () => {
  const etag = artifactEtag(artifact.sha256)!;
  const headers = artifactHeaders(objectMetadata(), artifact, etag);

  assert.equal(etag, '"sha256-95a475d281d33c3b497ab1e2349c24d1d019659762da0ee0617f60f342050f94"');
  assert.equal(artifactEtag(undefined), null);
  assert.equal(artifactEtag("not-a-sha256"), null);
  assert.equal(ifNoneMatchMatches(`W/${etag}`, etag), true);
  assert.equal(ifNoneMatchMatches(`"different", ${etag}`, etag), true);
  assert.equal(ifNoneMatchMatches("*", etag), true);
  assert.equal(ifNoneMatchMatches('"different"', etag), false);
  assert.equal(ifNoneMatchMatches("invalid", etag), false);
  assert.equal(ifNoneMatchMatches(`invalid, ${etag}`, etag), false);
  assert.equal(headers.get("etag"), etag);
  assert.equal(headers.get("content-type"), artifact.content_type);
  assert.equal(headers.get("content-disposition"), artifact.content_disposition);
});

function conditionalEnv(record: ArtifactRecord): Env {
  const metadata = objectMetadata();
  return {
    ASB_ARTIFACT_ORIGIN_SECRET: secret,
    ASB_REPORTS_DB: {
      prepare() {
        return { bind: () => ({ first: async () => record }) };
      },
    } as unknown as D1Database,
    ASB_REPORTS_BUCKET: {
      head: async () => metadata,
      get: async () => { throw new Error("Conditional requests must not fetch an object body"); },
    } as unknown as R2Bucket,
  };
}

test("returns 304 without a body for every deterministic artifact validator", async () => {
  const etag = artifactEtag(artifact.sha256)!;
  for (const format of ["html", "pdf", "markdown", "json"]) {
    const pathname = `/internal/v1/reports/smartphone-sales-in-spain/artifacts/${format}`;
    const request = await signedRequest(pathname);
    request.headers.set("if-none-match", etag);
    const response = await handleArtifact(request, conditionalEnv(artifact));
    assert.equal(response.status, 304);
    assert.equal(response.headers.get("etag"), etag);
    assert.equal((await response.arrayBuffer()).byteLength, 0);
  }
});

test("returns a generic 500 when an artifact checksum is missing or invalid", async () => {
  const pathname = "/internal/v1/reports/smartphone-sales-in-spain/artifacts/html";
  for (const sha256 of ["", "not-a-sha256"]) {
    const response = await handleArtifact(await signedRequest(pathname), conditionalEnv({ ...artifact, sha256 }));
    assert.equal(response.status, 500);
    assert.equal(await response.text(), "Internal server error");
  }
});
