import { NextResponse } from "next/server";
import { validateInterest } from "@/src/lib/validation/interest";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }
  const input = body as Record<string, unknown>;

  // Honeypot: bots fill it in. Pretend success and do nothing.
  if (typeof input.website === "string" && input.website !== "") {
    return NextResponse.json({ ok: true });
  }

  const result = validateInterest(input);
  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the form and try again.",
        errors: result.errors,
      },
      { status: 422 },
    );
  }

  // TODO: send result.data to your email service or CRM, using server-only
  // env vars. Until then submissions are accepted and discarded.

  return NextResponse.json({ ok: true });
}
