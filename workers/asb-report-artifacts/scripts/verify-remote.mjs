import { createHash, createHmac } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const workerUrl = process.env.ASB_WORKER_URL;
const secret = process.env.ASB_ARTIFACT_ORIGIN_SECRET;
if (!workerUrl || !secret) {
  console.error("configuration status=FAIL");
  process.exit(1);
}

const root = fileURLToPath(new URL("../../../", import.meta.url));
const rootUrl = new URL(`file:///${root.replaceAll("\\", "/")}`);
const reportPath = "/internal/v1/reports/smartphone-sales-in-spain/artifacts";
const formats = [
  ["html", "content/reports/smartphone-sales-in-spain/en/report.html", "text/html; charset=utf-8", "attachment"],
  ["pdf", "public/pdfs/reports/smartphone-sales-in-spain.pdf", "application/pdf", "inline"],
  ["markdown", "content/reports/smartphone-sales-in-spain/en/report.md", "text/markdown; charset=utf-8", "attachment"],
  ["json", "content/reports/smartphone-sales-in-spain/en/report.json", "application/json; charset=utf-8", "attachment"],
];

function signature(method, pathname, timestamp) {
  return createHmac("sha256", secret).update(`${timestamp}\n${method}\n${pathname}`).digest("base64url");
}

async function request(name, method, pathname, { signed = true, timestamp = Math.floor(Date.now() / 1000), signatureValue, headers = {} } = {}) {
  const response = await fetch(new URL(pathname, workerUrl), {
    method,
    headers: signed ? { "x-asb-timestamp": String(timestamp), "x-asb-signature": signatureValue ?? signature(method, pathname, timestamp), ...headers } : headers,
  });
  return { name, response };
}

function assert(name, status, condition) {
  if (!condition) throw new Error(`${name} status=${status} FAIL`);
  console.log(`${name} status=${status} PASS`);
}

const sourceFile = (relativePath) => new URL(relativePath, rootUrl);
const sourceHash = async (relativePath) => createHash("sha256").update(await readFile(sourceFile(relativePath))).digest("hex");

try {
  const unsigned = await request("unsigned", "GET", `${reportPath}/json`, { signed: false });
  assert("unsigned", unsigned.response.status, unsigned.response.status === 401);
  const invalid = await request("invalid-signature", "GET", `${reportPath}/json`, { signatureValue: "invalid" });
  assert("invalid-signature", invalid.response.status, invalid.response.status === 401);
  const expired = await request("expired", "GET", `${reportPath}/json`, { timestamp: 1 });
  assert("expired", expired.response.status, expired.response.status === 401);

  for (const [format, source, contentType, disposition] of formats) {
    const pathname = `${reportPath}/${format}`;
    const result = await request(`get-${format}`, "GET", pathname);
    const body = Buffer.from(await result.response.arrayBuffer());
    assert(`get-${format}`, result.response.status, result.response.status === 200 && body.byteLength > 0 && result.response.headers.get("content-type") === contentType && result.response.headers.get("content-disposition")?.startsWith(disposition) && Boolean(result.response.headers.get("etag")) && Boolean(result.response.headers.get("last-modified")) && createHash("sha256").update(body).digest("hex") === await sourceHash(source));
    const etag = result.response.headers.get("etag");
    const head = await request(`head-${format}`, "HEAD", pathname);
    assert(`head-${format}`, head.response.status, head.response.status === 200 && (await head.response.arrayBuffer()).byteLength === 0 && head.response.headers.get("content-type") === contentType && head.response.headers.get("content-disposition") === result.response.headers.get("content-disposition") && head.response.headers.get("etag") === etag && head.response.headers.get("last-modified") === result.response.headers.get("last-modified"));
    const cached = await request(`not-modified-${format}`, "GET", pathname, { headers: { "if-none-match": etag } });
    assert(`not-modified-${format}`, cached.response.status, cached.response.status === 304 && (await cached.response.arrayBuffer()).byteLength === 0);
  }

  const range = await request("pdf-range", "GET", `${reportPath}/pdf`, { headers: { range: "bytes=0-99" } });
  const pdfSize = (await stat(sourceFile("public/pdfs/reports/smartphone-sales-in-spain.pdf"))).size;
  assert("pdf-range", range.response.status, range.response.status === 206 && range.response.headers.get("content-range") === `bytes 0-99/${pdfSize}` && (await range.response.arrayBuffer()).byteLength === 100);
  for (const [name, pathname] of [["missing-slug", "/internal/v1/reports/no-report/artifacts/json"], ["missing-format", `${reportPath}/zip`], ["traversal", "/internal/v1/reports/../artifacts/json"], ["encoded-traversal", "/internal/v1/reports/%2e%2e/artifacts/json"]]) {
    const result = await request(name, "GET", pathname);
    assert(name, result.response.status, result.response.status === 404);
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
