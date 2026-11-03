export type InterestField =
  | "fullName"
  | "email"
  | "phone"
  | "areaOfInterest"
  | "message"
  | "profileUrl"
  | "consent";

export type InterestFormValues = {
  fullName: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  message: string;
  profileUrl: string;
  consent: boolean;
  /** Honeypot: real users never fill this in */
  website: string;
};

export type InterestPayload = {
  fullName: string;
  email: string;
  phone?: string;
  areaOfInterest: string;
  message: string;
  profileUrl?: string;
  consent: true;
};

export type InterestRequest = InterestPayload & { website?: string };
export type InterestErrors = Partial<Record<InterestField, string>>;
export type InterestResult =
  { ok: true; data: InterestPayload } | { ok: false; errors: InterestErrors };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9]{7,15}$/;

const str = (v: unknown) => (typeof v === "string" ? v : "");
const oneLine = (v: unknown) => str(v).trim().replace(/\s+/g, " ");

function normaliseUrl(value: string): string | null {
  const withScheme = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(withScheme);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.href
      : null;
  } catch {
    return null;
  }
}

export function validateInterest(
  input: Record<string, unknown>,
): InterestResult {
  const errors: InterestErrors = {};

  const fullName = oneLine(input.fullName);
  if (fullName.length < 2 || fullName.length > 100)
    errors.fullName = "Enter your full name (2–100 characters).";

  const email = oneLine(input.email).toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email))
    errors.email = "Enter a valid email address.";

  const phone = str(input.phone).replace(/[\s().-]/g, "");
  if (phone && !PHONE_RE.test(phone))
    errors.phone = "Enter a valid phone number, e.g. +254 700 000 000.";

  const areaOfInterest = oneLine(input.areaOfInterest);
  if (areaOfInterest.length < 2 || areaOfInterest.length > 100)
    errors.areaOfInterest = "Tell us the area you're interested in.";

  const message = str(input.message).trim();
  if (message.length < 10 || message.length > 1500)
    errors.message = "Write between 10 and 1,500 characters.";

  let profileUrl: string | undefined;
  const rawUrl = oneLine(input.profileUrl);
  if (rawUrl) {
    const normalised = rawUrl.length <= 300 ? normaliseUrl(rawUrl) : null;
    if (normalised) profileUrl = normalised;
    else
      errors.profileUrl = "Enter a valid link, e.g. linkedin.com/in/your-name.";
  }

  if (input.consent !== true)
    errors.consent = "Please agree so we can contact you about opportunities.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      fullName,
      email,
      phone: phone || undefined,
      areaOfInterest,
      message,
      profileUrl,
      consent: true,
    },
  };
}
