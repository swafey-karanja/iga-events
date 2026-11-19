import { NextResponse } from "next/server";
import { validateContact } from "@/src/lib/validation/contact";
import { getWriteClient } from "@/src/lib/sanity/writeClient";
import { clientKey, isRateLimited } from "@/src/lib/server/rateLimit";
import { sendEnquiryEmail } from "@/src/lib/server/notify";

const invalid = () =>
  NextResponse.json(
    { ok: false, message: "Invalid request." },
    { status: 400 },
  );

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return invalid();
  }
  if (typeof body !== "object" || body === null) return invalid();
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

  const ipHash = clientKey(request);
  try {
    if (await isRateLimited(ipHash, result.data.email)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Too many submissions. Please try again later.",
        },
        { status: 429, headers: { "Retry-After": "3600" } },
      );
    }

    await getWriteClient().create({
      _type: "contactEnquiry",
      // Skip empty optional fields so Sanity doesn't store blank strings
      ...Object.fromEntries(
        Object.entries(result.data).filter(([, v]) => v !== ""),
      ),
      ...(ipHash && { ipHash }),
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

  // The enquiry is already saved, so a failed email must not fail the form
  try {
    await sendEnquiryEmail(result.data);
  } catch (e) {
    console.error(
      "Enquiry saved, but the notification email failed:",
      e instanceof Error ? e.message : "unknown error",
    );
  }

  return NextResponse.json({ ok: true });
}
