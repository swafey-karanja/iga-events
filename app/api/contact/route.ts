import { NextResponse } from "next/server";
import { validateContact } from "@/src/lib/validation/contact";
import { getWriteClient } from "@/src/lib/sanity/writeClient";

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

  const result = validateContact(input);
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
  try {
    await getWriteClient().create({
      _type: "contactEnquiry",
      // Skip empty optional fields so Sanity doesn't store blank strings
      ...Object.fromEntries(
        Object.entries(result.data).filter(([, v]) => v !== ""),
      ),
      status: "new",
      receivedAt: new Date().toISOString(),
    });
  } catch {
    // Deliberately not logging the error, as it could include personal data
    return NextResponse.json(
      {
        ok: false,
        message: "We couldn't send your enquiry. Please try again.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
