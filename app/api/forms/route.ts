import { NextResponse } from "next/server";

type FormRequest = { formType?: string; locale?: string; payload?: Record<string, string> };

export async function POST(request: Request) {
  const body = (await request.json()) as FormRequest;
  if (!body.formType || !body.payload) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  console.log("ASB form submission", { formType: body.formType, locale: body.locale, payload: body.payload });
  return NextResponse.json({ ok: true });
}
