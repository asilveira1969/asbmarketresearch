import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "../app/api/forms/route";

const originalFetch = globalThis.fetch;
const payload = { name: " Ana ", email: "ana@example.com", industry: "Research", consent: "on" };
const valid = { formType: "newsletter", locale: "en", turnstileToken: "token", payload };
function makeRequest(body: unknown, extraHeaders: Record<string, string> = {}) {
  return new Request("http://localhost:3000/api/forms", { method: "POST", headers: { origin: "http://localhost:3000", host: "localhost:3000", "content-type": "application/json", ...extraHeaders }, body: typeof body === "string" ? body : JSON.stringify(body) });
}
async function submit(body: unknown, outcomes: Array<Response | Error> = [new Response(JSON.stringify({ success: true })), new Response("ok")], extraHeaders?: Record<string, string>) {
  let calls = 0; const oldSecret = process.env.TURNSTILE_SECRET_KEY; const oldWebhook = process.env.FORM_WEBHOOK_URL;
  globalThis.fetch = (async () => { const outcome = outcomes[calls++]; if (outcome instanceof Error) throw outcome; return outcome; }) as typeof fetch;
  process.env.TURNSTILE_SECRET_KEY = "test-secret"; process.env.FORM_WEBHOOK_URL = "https://webhook.example/forms";
  try { return { response: await POST(makeRequest(body, extraHeaders)), calls }; } finally { globalThis.fetch = originalFetch; if (oldSecret === undefined) delete process.env.TURNSTILE_SECRET_KEY; else process.env.TURNSTILE_SECRET_KEY = oldSecret; if (oldWebhook === undefined) delete process.env.FORM_WEBHOOK_URL; else process.env.FORM_WEBHOOK_URL = oldWebhook; }
}
test("valid submission calls Turnstile then webhook exactly once", async () => { const { response, calls } = await submit(valid); assert.equal(response.status, 200); assert.equal(calls, 2); assert.equal(response.headers.get("cache-control"), "no-store"); });
test("missing Turnstile token is rejected without a webhook", async () => { const { response, calls } = await submit({ ...valid, turnstileToken: "" }); assert.equal(response.status, 400); assert.equal(calls, 0); });
test("invalid Turnstile is rejected without a webhook", async () => { const { response, calls } = await submit(valid, [new Response(JSON.stringify({ success: false }))]); assert.equal(response.status, 400); assert.equal(calls, 1); });
test("Turnstile verification failure is rejected without a webhook", async () => { const { response, calls } = await submit(valid, [new Error("network")]); assert.equal(response.status, 400); assert.equal(calls, 1); });
test("honeypot is generic and does not call external services", async () => { const { response, calls } = await submit({ ...valid, payload: { ...payload, website_url: "spam" } }); assert.equal(response.status, 200); assert.equal(calls, 0); });
test("invalid formType is rejected", async () => { const { response, calls } = await submit({ ...valid, formType: "invalid" }); assert.equal(response.status, 400); assert.equal(calls, 0); });
test("invalid locale is rejected", async () => { const { response, calls } = await submit({ ...valid, locale: "fr" }); assert.equal(response.status, 400); assert.equal(calls, 0); });
test("invalid email is rejected", async () => { const { response, calls } = await submit({ ...valid, payload: { ...payload, email: "invalid" } }); assert.equal(response.status, 400); assert.equal(calls, 0); });
test("newsletter without consent is rejected", async () => { const { response, calls } = await submit({ ...valid, payload: { ...payload, consent: "" } }); assert.equal(response.status, 400); assert.equal(calls, 0); });
test("oversized payload is rejected", async () => { const { response, calls } = await submit("x".repeat(17 * 1024)); assert.equal(response.status, 413); assert.equal(calls, 0); });
test("unexpected payload field is rejected", async () => { const { response, calls } = await submit({ ...valid, payload: { ...payload, unexpected: "x" } }); assert.equal(response.status, 400); assert.equal(calls, 0); });
test("wrong Content-Type is rejected", async () => { const { response, calls } = await submit(valid, undefined, { "content-type": "text/plain" }); assert.equal(response.status, 415); assert.equal(calls, 0); });
test("invalid JSON is rejected", async () => { const { response, calls } = await submit("{"); assert.equal(response.status, 400); assert.equal(calls, 0); });
test("rejected validation never invokes webhook", async () => { const { calls } = await submit({ ...valid, payload: {} }); assert.equal(calls, 0); });
test("valid request invokes webhook exactly once", async () => { const { calls } = await submit(valid); assert.equal(calls, 2); });
