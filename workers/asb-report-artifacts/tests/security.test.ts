import assert from "node:assert/strict";
import test from "node:test";
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
