import { NextResponse } from "next/server";

type FormRequest = { formType?: string; locale?: string; payload?: Record<string, string> };

export async function POST(request: Request) {
  const body = (await request.json()) as FormRequest;
  if (!body.formType || !body.payload) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const webhookUrl = process.env.FORM_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("FORM_WEBHOOK_URL is not configured.");
    return NextResponse.json({ error: "Form service is not configured." }, { status: 500 });
  }

  const sourceUrl = request.headers.get("referer") || "";
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...body, sourceUrl }),
  });

  if (!response.ok) {
    console.error("ASB form webhook failed", { status: response.status, statusText: response.statusText });
    return NextResponse.json({ error: "Form submission failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
