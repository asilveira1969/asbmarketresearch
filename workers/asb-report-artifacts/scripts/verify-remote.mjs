import { createHash, createHmac } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const workerUrl = process.env.ASB_WORKER_URL ?? process.env.ASB_REPORTS_WORKER_URL;
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
  const url = new URL(pathname, workerUrl);
  const response = await fetch(url, {
    method,
    headers: signed ? { "x-asb-timestamp": String(timestamp), "x-asb-signature": signatureValue ?? signature(method, url.pathname, timestamp), ...headers } : headers,
  });
  return { name, response };
}

let failures = 0;
const observedEtags = new Map();

function check(name, status, condition, details = "") {
  if (condition) {
    console.log(`${name} status=${status} PASS`);
    return true;
  }
  failures += 1;
  console.log(`${name} status=${status} FAIL${details ? ` ${details}` : ""}`);
  return false;
}

function skip(name, reason) {
  console.log(`${name} status=SKIP ${reason}`);
}

const sourceFile = (relativePath) => new URL(relativePath, rootUrl);
const sourceHash = async (relativePath) => createHash("sha256").update(await readFile(sourceFile(relativePath))).digest("hex");

try {
  const unsigned = await request("unsigned", "GET", `${reportPath}/json`, { signed: false });
  check("unsigned", unsigned.response.status, unsigned.response.status === 401);
  const invalid = await request("invalid-signature", "GET", `${reportPath}/json`, { signatureValue: "invalid" });
  check("invalid-signature", invalid.response.status, invalid.response.status === 401);
  const expired = await request("expired", "GET", `${reportPath}/json`, { timestamp: 1 });
  check("expired", expired.response.status, expired.response.status === 401);

  for (const [format, source, contentType, disposition] of formats) {
    const pathname = `${reportPath}/${format}`;
    const result = await request(`get-${format}`, "GET", pathname);
    const body = Buffer.from(await result.response.arrayBuffer());
    const actualType = result.response.headers.get("content-type");
    const actualDisposition = result.response.headers.get("content-disposition");
    const actualEtag = result.response.headers.get("etag");
    const actualLastModified = result.response.headers.get("last-modified");
    const actualCacheControl = result.response.headers.get("cache-control");
    const actualContentEncoding = result.response.headers.get("content-encoding");
    const actualVary = result.response.headers.get("vary");
    const actualHash = createHash("sha256").update(body).digest("hex");
    const expectedHash = await sourceHash(source);
    const etagStrength = /^"sha256-[0-9a-f]{64}"$/.test(actualEtag ?? "") ? "strong" : actualEtag?.startsWith("W/") ? "weak" : "missing";
    console.log(`representation-${format}-default status=${result.response.status} etag=${actualEtag ?? "missing"} strength=${etagStrength} content-encoding=${actualContentEncoding ?? "identity"} vary=${actualVary ?? "none"} cache-control=${actualCacheControl ?? "missing"} sha256=${actualHash}`);
    check(`get-${format}`, result.response.status, result.response.status === 200);
    check(`get-${format}-content-type`, result.response.status, actualType === contentType, `header=content-type observed=${actualType ?? "missing"} expected=${contentType}`);
    check(`get-${format}-content-disposition`, result.response.status, actualDisposition?.startsWith(disposition), `header=content-disposition observed=${actualDisposition ?? "missing"} expected-prefix=${disposition}`);
    check(`get-${format}-etag`, result.response.status, Boolean(actualEtag), "header=etag observed=missing expected=present");
    check(`get-${format}-etag-format`, result.response.status, /^"sha256-[0-9a-f]{64}"$/.test(actualEtag ?? ""), `header=etag observed=${actualEtag ?? "missing"} expected=\"sha256-<64-lowercase-hex>\"`);
    check(`get-${format}-last-modified`, result.response.status, Boolean(actualLastModified), "header=last-modified observed=missing expected=present");
    check(`get-${format}-cache-control`, result.response.status, actualCacheControl?.includes("no-transform"), `header=cache-control observed=${actualCacheControl ?? "missing"} expected=no-transform`);
    check(`get-${format}-content-encoding`, result.response.status, !actualContentEncoding || actualContentEncoding === "identity", `header=content-encoding observed=${actualContentEncoding ?? "missing"} expected=identity-or-absent`);
    check(`get-${format}-body`, result.response.status, body.byteLength > 0, `body-bytes=${body.byteLength} expected=>0`);
    check(`get-${format}-sha256`, result.response.status, actualHash === expectedHash, `sha256-observed=${actualHash} sha256-expected=${expectedHash}`);
    observedEtags.set(format, actualEtag);
    const head = await request(`head-${format}`, "HEAD", pathname);
    const headBody = await head.response.arrayBuffer();
    check(`head-${format}`, head.response.status, head.response.status === 200);
    check(`head-${format}-body`, head.response.status, headBody.byteLength === 0, `body-bytes=${headBody.byteLength} expected=0`);
    check(`head-${format}-content-type`, head.response.status, head.response.headers.get("content-type") === contentType, `header=content-type observed=${head.response.headers.get("content-type") ?? "missing"} expected=${contentType}`);
    check(`head-${format}-content-disposition`, head.response.status, head.response.headers.get("content-disposition") === actualDisposition, "header=content-disposition observed=not-equivalent-to-get expected=equivalent-to-get");
    check(`head-${format}-etag`, head.response.status, head.response.headers.get("etag") === actualEtag && Boolean(actualEtag), "header=etag observed=missing-or-not-equivalent-to-get expected=equivalent-to-get");
    check(`head-${format}-last-modified`, head.response.status, head.response.headers.get("last-modified") === actualLastModified && Boolean(actualLastModified), "header=last-modified observed=missing-or-not-equivalent-to-get expected=equivalent-to-get");
    check(`head-${format}-cache-control`, head.response.status, head.response.headers.get("cache-control") === actualCacheControl && actualCacheControl?.includes("no-transform"), "header=cache-control observed=missing-or-not-equivalent-to-get expected=equivalent-to-get-with-no-transform");

    if (actualEtag) {
      const cached = await request(`not-modified-${format}`, "GET", pathname, { headers: { "if-none-match": actualEtag } });
      const cachedBody = await cached.response.arrayBuffer();
      check(`not-modified-${format}`, cached.response.status, cached.response.status === 304);
      check(`not-modified-${format}-body`, cached.response.status, cachedBody.byteLength === 0, `body-bytes=${cachedBody.byteLength} expected=0`);
      check(`not-modified-${format}-cache-control`, cached.response.status, cached.response.headers.get("cache-control") === actualCacheControl && actualCacheControl?.includes("no-transform"), "header=cache-control observed=missing-or-not-equivalent-to-get expected=equivalent-to-get-with-no-transform");
    } else {
      skip(`not-modified-${format}`, "missing-get-etag");
    }
  }

  for (const [format, source] of formats.filter(([format]) => format !== "pdf")) {
    const pathname = `${reportPath}/${format}`;
    const representations = [["identity", "identity"], ["gzip-br", "gzip, br"]];
    const representationEtags = new Map();
    for (const [representation, acceptEncoding] of representations) {
      const result = await request(`representation-${format}-${representation}`, "GET", pathname, { headers: { "accept-encoding": acceptEncoding } });
      const body = Buffer.from(await result.response.arrayBuffer());
      const etag = result.response.headers.get("etag");
      const encoding = result.response.headers.get("content-encoding");
      const vary = result.response.headers.get("vary");
      const cacheControl = result.response.headers.get("cache-control");
      const actualHash = createHash("sha256").update(body).digest("hex");
      const expectedHash = await sourceHash(source);
      const strength = /^"sha256-[0-9a-f]{64}"$/.test(etag ?? "") ? "strong" : etag?.startsWith("W/") ? "weak" : "missing";
      console.log(`representation-${format}-${representation} status=${result.response.status} etag=${etag ?? "missing"} strength=${strength} content-encoding=${encoding ?? "identity"} vary=${vary ?? "none"} cache-control=${cacheControl ?? "missing"} sha256=${actualHash}`);
      check(`representation-${format}-${representation}`, result.response.status, result.response.status === 200);
      check(`representation-${format}-${representation}-etag`, result.response.status, /^"sha256-[0-9a-f]{64}"$/.test(etag ?? ""), `header=etag observed=${etag ?? "missing"} expected=strong-sha256`);
      check(`representation-${format}-${representation}-content-encoding`, result.response.status, !encoding || encoding === "identity", `header=content-encoding observed=${encoding ?? "missing"} expected=identity-or-absent`);
      check(`representation-${format}-${representation}-cache-control`, result.response.status, cacheControl?.includes("no-transform"), `header=cache-control observed=${cacheControl ?? "missing"} expected=no-transform`);
      check(`representation-${format}-${representation}-sha256`, result.response.status, actualHash === expectedHash, `sha256-observed=${actualHash} sha256-expected=${expectedHash}`);
      representationEtags.set(representation, etag);
    }
    check(`representation-${format}-etag-equivalence`, 200, representationEtags.get("identity") === representationEtags.get("gzip-br") && /^"sha256-[0-9a-f]{64}"$/.test(representationEtags.get("identity") ?? ""), "header=etag observed=not-equivalent-or-not-strong expected=identical-strong-etag");
  }

  const range = await request("pdf-range", "GET", `${reportPath}/pdf`, { headers: { range: "bytes=0-99" } });
  const pdfSize = (await stat(sourceFile("public/pdfs/reports/smartphone-sales-in-spain.pdf"))).size;
  const rangeBody = await range.response.arrayBuffer();
  check("pdf-range", range.response.status, range.response.status === 206);
  check("pdf-range-content-range", range.response.status, range.response.headers.get("content-range") === `bytes 0-99/${pdfSize}`, `header=content-range observed=${range.response.headers.get("content-range") ?? "missing"} expected=bytes 0-99/${pdfSize}`);
  check("pdf-range-body", range.response.status, rangeBody.byteLength === 100, `body-bytes=${rangeBody.byteLength} expected=100`);
  check("pdf-range-etag", range.response.status, Boolean(range.response.headers.get("etag")), "header=etag observed=missing expected=present");
  check("pdf-range-etag-equivalence", range.response.status, range.response.headers.get("etag") === observedEtags.get("pdf"), "header=etag observed=not-equivalent-to-full-pdf expected=equivalent-to-full-pdf");
  check("pdf-range-cache-control", range.response.status, range.response.headers.get("cache-control")?.includes("no-transform"), `header=cache-control observed=${range.response.headers.get("cache-control") ?? "missing"} expected=no-transform`);
  for (const [name, pathname] of [["missing-slug", "/internal/v1/reports/no-report/artifacts/json"], ["missing-format", `${reportPath}/zip`], ["traversal", "/internal/v1/reports/../artifacts/json"], ["encoded-traversal", "/internal/v1/reports/%2e%2e/artifacts/json"]]) {
    const result = await request(name, "GET", pathname);
    check(name, result.response.status, result.response.status === 404);
  }
} catch (error) {
  failures += 1;
  console.log(`request-execution status=ERROR FAIL ${error.message}`);
}

if (failures > 0) process.exitCode = 1;
