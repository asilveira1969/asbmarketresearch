import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  ArtifactUnavailableError,
  createArtifactSignature,
  isPilotArtifactRequest,
  loadSpainDownloadArtifact,
} from "../lib/report-artifacts/spain-downloads";

const workerUrl = "https://asb-report-artifacts-pilot.example.workers.dev";
const secret = "test-origin-secret";
const originalFetch = globalThis.fetch;
const artifactEnvironmentKeys = [
  "ASB_REPORTS_STORAGE_MODE",
  "ASB_REPORTS_FALLBACK_LOCAL",
  "ASB_REPORTS_WORKER_URL",
  "ASB_ARTIFACT_ORIGIN_SECRET",
] as const;

function responseHeaders(format: "markdown" | "json", length: number) {
  const extension = format === "markdown" ? "md" : "json";
  const contentType = format === "markdown" ? "text/markdown; charset=utf-8" : "application/json; charset=utf-8";
  return {
    "content-type": contentType,
    "content-disposition": `attachment; filename="smartphone-sales-in-spain-v1.0.0.${extension}"`,
    etag: '"sha256-test"',
    "last-modified": "Mon, 01 Sep 2026 12:00:00 GMT",
    "cache-control": "public, max-age=31536000, immutable, no-transform",
    "content-length": String(length),
  };
}

async function withEnvironment<T>(values: Partial<Record<(typeof artifactEnvironmentKeys)[number], string>>, callback: () => Promise<T>) {
  const saved = new Map(artifactEnvironmentKeys.map((key) => [key, process.env[key]]));
  for (const key of artifactEnvironmentKeys) {
    const value = values[key];
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }

  try {
    return await callback();
  } finally {
    for (const key of artifactEnvironmentKeys) {
      const value = saved.get(key);
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

test("uses the canonical local Markdown bytes by default", { concurrency: false }, async () => {
  let fetchCalls = 0;
  globalThis.fetch = (async () => {
    fetchCalls += 1;
    throw new Error("Cloudflare must not be called in local mode");
  }) as typeof fetch;

  try {
    await withEnvironment({}, async () => {
      const artifact = await loadSpainDownloadArtifact("markdown", "GET", null);
      const source = await readFile("content/reports/smartphone-sales-in-spain/en/report.md");
      assert.equal(artifact.status, 200);
      assert.deepEqual(Buffer.from(artifact.body!), source);
      assert.equal(artifact.headers.get("content-type"), "text/markdown; charset=utf-8");
      assert.equal(artifact.headers.get("cache-control"), "private, no-store");
      assert.match(artifact.headers.get("etag")!, /^"sha256-[0-9a-f]{64}"$/);
      assert.equal(artifact.headers.get("x-robots-tag"), "noindex, nofollow");
      assert.equal(fetchCalls, 0);
    });
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("local HEAD is bodyless and honors If-None-Match", { concurrency: false }, async () => {
  await withEnvironment({}, async () => {
    const head = await loadSpainDownloadArtifact("json", "HEAD", null);
    assert.equal(head.status, 200);
    assert.equal(head.body, null);
    const notModified = await loadSpainDownloadArtifact("json", "GET", head.headers.get("etag"));
    assert.equal(notModified.status, 304);
    assert.equal(notModified.body, null);
    assert.equal(notModified.headers.get("content-length"), null);
  });
});

test("cloudflare-pilot signs Markdown requests server-side and returns the Worker response", { concurrency: false }, async () => {
  const body = new TextEncoder().encode("remote markdown");
  globalThis.fetch = (async (input, init) => {
    const requestUrl = new URL(String(input));
    const headers = new Headers(init?.headers);
    const timestamp = Number(headers.get("x-asb-timestamp"));
    assert.equal(requestUrl.pathname, "/internal/v1/reports/smartphone-sales-in-spain/artifacts/markdown");
    assert.equal(headers.get("x-asb-signature"), createArtifactSignature(secret, timestamp, "GET", requestUrl.pathname));
    assert.equal(init?.cache, "no-store");
    return new Response(body, { status: 200, headers: responseHeaders("markdown", body.byteLength) });
  }) as typeof fetch;

  try {
    await withEnvironment(
      {
        ASB_REPORTS_STORAGE_MODE: "cloudflare-pilot",
        ASB_REPORTS_FALLBACK_LOCAL: "true",
        ASB_REPORTS_WORKER_URL: workerUrl,
        ASB_ARTIFACT_ORIGIN_SECRET: secret,
      },
      async () => {
        const artifact = await loadSpainDownloadArtifact("markdown", "GET", null);
        assert.equal(artifact.status, 200);
        assert.deepEqual(artifact.body, body);
        assert.equal(artifact.headers.get("content-disposition"), 'attachment; filename="smartphone-sales-in-spain-v1.0.0.md"');
        assert.equal(JSON.stringify({ headers: [...artifact.headers], body: new TextDecoder().decode(artifact.body!) }).includes(secret), false);
      },
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("cloudflare-pilot supports JSON HEAD and 304", { concurrency: false }, async () => {
  globalThis.fetch = (async (_input, init) => {
    const headers = new Headers(init?.headers);
    const method = init?.method;
    if (headers.get("if-none-match")) return new Response(null, { status: 304, headers: responseHeaders("json", 0) });
    return new Response(null, { status: method === "HEAD" ? 200 : 200, headers: responseHeaders("json", 123) });
  }) as typeof fetch;

  try {
    await withEnvironment(
      {
        ASB_REPORTS_STORAGE_MODE: "cloudflare-pilot",
        ASB_REPORTS_FALLBACK_LOCAL: "true",
        ASB_REPORTS_WORKER_URL: workerUrl,
        ASB_ARTIFACT_ORIGIN_SECRET: secret,
      },
      async () => {
        const head = await loadSpainDownloadArtifact("json", "HEAD", null);
        assert.equal(head.status, 200);
        assert.equal(head.body, null);
        const notModified = await loadSpainDownloadArtifact("json", "GET", head.headers.get("etag"));
        assert.equal(notModified.status, 304);
        assert.equal(notModified.body, null);
      },
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

for (const failure of ["network", "timeout", "401", "404", "500", "invalid-content-type"] as const) {
  test(`cloudflare ${failure} falls back to the local JSON artifact`, { concurrency: false }, async () => {
    globalThis.fetch = (async () => {
      if (failure === "network") throw new TypeError("network failed");
      if (failure === "timeout") throw new DOMException("aborted", "AbortError");
      if (failure === "invalid-content-type") return new Response("bad", { status: 200, headers: responseHeaders("markdown", 3) });
      return new Response(null, { status: Number(failure) });
    }) as typeof fetch;

    try {
      await withEnvironment(
        {
          ASB_REPORTS_STORAGE_MODE: "cloudflare-pilot",
          ASB_REPORTS_FALLBACK_LOCAL: "true",
          ASB_REPORTS_WORKER_URL: workerUrl,
          ASB_ARTIFACT_ORIGIN_SECRET: secret,
        },
        async () => {
          const artifact = await loadSpainDownloadArtifact("json", "GET", null);
          const source = await readFile("content/reports/smartphone-sales-in-spain/en/report.json");
          assert.deepEqual(Buffer.from(artifact.body!), source);
        },
      );
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
}

test("missing pilot variables fall back locally, while disabled fallback returns a generic error", { concurrency: false }, async () => {
  await withEnvironment(
    { ASB_REPORTS_STORAGE_MODE: "cloudflare-pilot", ASB_REPORTS_FALLBACK_LOCAL: "true" },
    async () => {
      const artifact = await loadSpainDownloadArtifact("markdown", "GET", null);
      assert.equal(artifact.status, 200);
    },
  );

  await withEnvironment(
    { ASB_REPORTS_STORAGE_MODE: "cloudflare-pilot", ASB_REPORTS_FALLBACK_LOCAL: "false" },
    async () => {
      await assert.rejects(() => loadSpainDownloadArtifact("markdown", "GET", null), ArtifactUnavailableError);
    },
  );
});

test("only Spain Markdown and JSON can use the pilot", () => {
  assert.equal(isPilotArtifactRequest("smartphone-sales-in-spain", "markdown"), true);
  assert.equal(isPilotArtifactRequest("smartphone-sales-in-spain", "json"), true);
  assert.equal(isPilotArtifactRequest("smartphone-sales-in-spain", "html"), false);
  assert.equal(isPilotArtifactRequest("smartphone-sales-in-spain", "pdf"), false);
  assert.equal(isPilotArtifactRequest("smartphone-sales-in-germany", "markdown"), false);
});
