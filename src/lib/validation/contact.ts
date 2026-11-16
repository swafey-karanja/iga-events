import {
  ATTENDANCE,
  BUDGETS,
  EVENT_DURATIONS,
  EVENT_TYPES,
  INDUSTRIES,
  SERVICES,
} from "@/src/lib/data/contact";

export type ContactField =
  | "name"
  | "organisation"
  | "email"
  | "phone"
  | "jobTitle"
  | "eventName"
  | "eventType"
  | "industry"
  | "location"
  | "attendance"
  | "eventDate"
  | "duration"
  | "services"
  | "budget"
  | "message"
  | "consent";

export type ContactFormValues = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  jobTitle: string;
  eventName: string;
  eventType: string;
  industry: string;
  location: string[];
  attendance: string;
  eventDate: string;
  duration: string;
  services: string[];
  budget: string;
  message: string;
  consent: boolean;
  /** Honeypot: real users never fill this in */
  website: string;
};

export type ContactPayload = Omit<ContactFormValues, "website" | "consent"> & {
  consent: true;
};

export type ContactRequest = ContactPayload & { website?: string };
export type ContactErrors = Partial<Record<ContactField, string>>;
export type ContactResult =
  { ok: true; data: ContactPayload } | { ok: false; errors: ContactErrors };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+[1-9]\d{7,14}$/; // E.164
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const LOCATION_RE = /^[^,]{2,}, [^,]{2,}$/; // "City, Country"

const str = (v: unknown) => (typeof v === "string" ? v : "");
const oneLine = (v: unknown) => str(v).trim().replace(/\s+/g, " ");
const list = (v: unknown) =>
  Array.isArray(v) ? [...new Set(v.map(oneLine).filter(Boolean))] : [];

const isDate = (d: string) =>
  DATE_RE.test(d) &&
  !Number.isNaN(Date.parse(`${d}T00:00:00Z`)) &&
  new Date(`${d}T00:00:00Z`).toISOString().startsWith(d);

export function validateContact(input: Record<string, unknown>): ContactResult {
  const errors: ContactErrors = {};

  const text = (
    field: ContactField,
    required: boolean,
    message: string,
    max = 100,
  ) => {
    const v = oneLine(input[field]);
    if ((required && v.length < 2) || v.length > max) errors[field] = message;
    return v;
  };

  const choice = (
    field: ContactField,
    options: readonly string[],
    required: boolean,
    message: string,
  ) => {
    const v = str(input[field]);
    if (v ? !options.includes(v) : required) errors[field] = message;
    return v;
  };

  const name = text("name", true, "Enter your full name (2–100 characters).");
  const organisation = text(
    "organisation",
    true,
    "Enter your organisation or company.",
  );
  const jobTitle = text("jobTitle", false, "Job title is too long.");
  const eventName = text("eventName", false, "Event name is too long.", 150);

  const email = oneLine(input.email).toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email))
    errors.email = "Enter a valid email address.";

  const phone = oneLine(input.phone)
    .replace(/[\s().-]/g, "")
    .replace(/^00/, "+");
  if (!PHONE_RE.test(phone))
    errors.phone =
      "Enter a phone number with country code, e.g. +254 700 000000.";

  const eventType = choice(
    "eventType",
    EVENT_TYPES,
    true,
    "Select an event type.",
  );
  const industry = choice(
    "industry",
    INDUSTRIES,
    true,
    "Select an industry or sector.",
  );
  const attendance = choice(
    "attendance",
    ATTENDANCE,
    true,
    "Select the expected attendance.",
  );
  const duration = choice(
    "duration",
    EVENT_DURATIONS,
    false,
    "Select a valid duration.",
  );
  const budget = choice("budget", BUDGETS, false, "Select a valid budget.");

  const location = list(input.location).map((l) => l.replace(/\s*,\s*/g, ", "));
  if (
    location.length === 0 ||
    location.length > 10 ||
    !location.every((l) => l.length <= 100 && LOCATION_RE.test(l))
  )
    errors.location =
      "Add at least one location as “City, Country”, e.g. Nairobi, Kenya.";

  const eventDate = str(input.eventDate);
  if (
    eventDate &&
    (!isDate(eventDate) || eventDate < new Date().toLocaleDateString("en-CA"))
  )
    errors.eventDate = "Choose a valid date that isn’t in the past.";

  const services = list(input.services);
  if (!services.every((s) => (SERVICES as readonly string[]).includes(s)))
    errors.services = "Choose from the listed services.";

  const message = str(input.message).trim();
  if (message.length > 2000)
    errors.message = "Keep this under 2,000 characters.";

  if (input.consent !== true)
    errors.consent =
      "Please agree to be contacted so we can respond to your enquiry.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return {
    ok: true,
    data: {
      name,
      organisation,
      email,
      phone,
      jobTitle,
      eventName,
      eventType,
      industry,
      location,
      attendance,
      eventDate,
      duration,
      services,
      budget,
      message,
      consent: true,
    },
  };
}
