import { NextResponse } from "next/server";
import { z } from "zod";

const MAX_BODY_BYTES = 16 * 1024;
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const headers = { "Cache-Control": "no-store" };
const text = (min: number, max: number) => z.string().trim().min(min).max(max);
const optionalText = (max: number) => z.string().trim().max(max).optional();
const shared = { website_url: z.string().trim().max(200).optional() };
const payloadSchemas = {
  newsletter: z.object({ ...shared, name: text(1, 100), email: z.email().trim().max(254), industry: optionalText(120), consent: z.literal("on") }).strict(),
  contact: z.object({ ...shared, fullName: text(1, 120), company: optionalText(160), email: z.email().trim().max(254), phone: optionalText(40), message: text(10, 4000) }).strict(),
  "report-request": z.object({ ...shared, fullName: text(1, 120), company: text(1, 160), email: z.email().trim().max(254), phoneNumber: text(3, 40), country: text(2, 100), industry: text(2, 120), objective: text(10, 4000), competitors: optionalText(2000), timeline: text(1, 80), budget: text(1, 80), notes: optionalText(4000) }).strict(),
} as const;
const requestSchema = z.object({ formType: z.enum(["newsletter", "contact", "report-request"]), locale: z.enum(["es", "en", "pt"]), turnstileToken: text(1, 2048), payload: z.unknown() }).strict();
const reply = (body: object, status: number) => NextResponse.json(body, { status, headers });

function allowedOrigin(request: Request) {
  const origin = request.headers.get("origin"); if (!origin) return false;
  if (process.env.NODE_ENV === "production") return origin === "https://asbmarketresearch.com" || origin === "https://www.asbmarketresearch.com";
  try { const url = new URL(origin); return url.host === request.headers.get("host") || ["localhost", "127.0.0.1"].includes(url.hostname) || url.hostname.endsWith(".vercel.app"); } catch { return false; }
}
async function validTurnstile(token: string, remoteip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY; if (!secret) return false;
  const body = new URLSearchParams({ secret, response: token }); if (remoteip) body.set("remoteip", remoteip);
  try { const response = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString(), cache: "no-store" }); return response.ok && (await response.json() as { success?: boolean }).success === true; } catch { return false; }
}
export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return reply({ error: "Invalid request." }, 415);
  const length = Number(request.headers.get("content-length")); if (Number.isFinite(length) && length > MAX_BODY_BYTES) return reply({ error: "Invalid request." }, 413);
  if (!allowedOrigin(request)) return reply({ error: "Invalid request." }, 403);
  let textBody: string; try { textBody = await request.text(); } catch { return reply({ error: "Invalid request." }, 400); }
  if (new TextEncoder().encode(textBody).byteLength > MAX_BODY_BYTES) return reply({ error: "Invalid request." }, 413);
  let raw: unknown; try { raw = JSON.parse(textBody); } catch { return reply({ error: "Invalid request." }, 400); }
  const requestData = requestSchema.safeParse(raw); if (!requestData.success) return reply({ error: "Invalid request." }, 400);
  const payload = payloadSchemas[requestData.data.formType].safeParse(requestData.data.payload); if (!payload.success) return reply({ error: "Invalid request." }, 400);
  if (payload.data.website_url) return reply({ ok: true }, 200);
  const remoteip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
  if (!await validTurnstile(requestData.data.turnstileToken, remoteip)) return reply({ error: "Unable to submit form." }, 400);
  const webhookUrl = process.env.FORM_WEBHOOK_URL;
  if (!webhookUrl) { console.error("FORM_WEBHOOK_URL is not configured."); return reply({ error: "Form service is unavailable." }, 503); }
  try {
    const webhook = await fetch(webhookUrl, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ formType: requestData.data.formType, locale: requestData.data.locale, payload: payload.data, sourceUrl: request.headers.get("referer") || "", userAgent: request.headers.get("user-agent") || "", notificationEmail: process.env.FORM_NOTIFICATION_EMAIL || "" }), cache: "no-store" });
    if (!webhook.ok) { console.error("ASB form webhook failed", { status: webhook.status }); return reply({ error: "Form submission failed." }, 502); }
  } catch { console.error("ASB form webhook request failed"); return reply({ error: "Form submission failed." }, 502); }
  return reply({ ok: true }, 200);
}
