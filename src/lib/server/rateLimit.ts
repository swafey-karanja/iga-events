import { createHash } from "node:crypto";
import { getWriteClient } from "@/src/lib/sanity/writeClient";

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const LIMITS = { ip: 3, email: 3, all: 40 }; // max enquiries per window

const QUERY = `{
  "ip": count(*[_type == "contactEnquiry" && ipHash == $ipHash && receivedAt > $since]),
  "email": count(*[_type == "contactEnquiry" && email == $email && receivedAt > $since]),
  "all": count(*[_type == "contactEnquiry" && receivedAt > $since])
}`;

/** Salted hash of the visitor's IP, so we never store the address itself */
export function clientKey(request: Request): string {
  const ip =
    request.headers.get("x-nf-client-connection-ip") ?? // set by Netlify
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "";
  if (!ip) return "";
  return createHash("sha256")
    .update(ip + (process.env.RATE_LIMIT_SALT ?? ""))
    .digest("hex");
}

export async function isRateLimited(
  ipHash: string,
  email: string,
): Promise<boolean> {
  const since = new Date(Date.now() - WINDOW_MS).toISOString();
  const counts = await getWriteClient().fetch<{
    ip: number;
    email: number;
    all: number;
  }>(QUERY, { ipHash, email, since });

  return (
    counts.ip >= LIMITS.ip ||
    counts.email >= LIMITS.email ||
    counts.all >= LIMITS.all
  );
}
