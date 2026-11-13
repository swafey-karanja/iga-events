import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "Not configured." }, { status: 500 });
  }

  // The signature is computed over the raw body, so read it as text first
  const raw = await request.text();
  const signature = request.headers.get(SIGNATURE_HEADER_NAME) ?? "";
  if (!(await isValidSignature(raw, signature, secret))) {
    return NextResponse.json(
      { message: "Invalid signature." },
      { status: 401 },
    );
  }

  let type: unknown;
  try {
    type = (JSON.parse(raw) as { _type?: unknown })._type;
  } catch {
    type = undefined;
  }
  if (typeof type !== "string") {
    return NextResponse.json({ message: "Bad payload." }, { status: 400 });
  }

  revalidateTag(type, "max"); // on Next 15 or earlier: revalidateTag(type)
  return NextResponse.json({ ok: true });
}
