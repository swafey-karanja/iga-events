import { CONTACT_TOPICS } from "@/src/lib/data/contact";

export type ContactField = "name" | "email" | "topic" | "message";

export type ContactFormValues = {
  name: string;
  email: string;
  topic: string;
  message: string;
  /** Honeypot: real users never fill this in */
  website: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export type ContactRequest = ContactPayload & { website?: string };
export type ContactErrors = Partial<Record<ContactField, string>>;
export type ContactResult =
  { ok: true; data: ContactPayload } | { ok: false; errors: ContactErrors };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const str = (v: unknown) => (typeof v === "string" ? v : "");
const oneLine = (v: unknown) => str(v).trim().replace(/\s+/g, " ");

export function validateContact(input: Record<string, unknown>): ContactResult {
  const errors: ContactErrors = {};

  const name = oneLine(input.name);
  if (name.length < 2 || name.length > 100)
    errors.name = "Enter your name (2–100 characters).";

  const email = oneLine(input.email).toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email))
    errors.email = "Enter a valid email address.";

  const topic = str(input.topic);
  if (!CONTACT_TOPICS.some((t) => t.value === topic))
    errors.topic = "Choose a topic so we can route your message.";

  const message = str(input.message).trim();
  if (message.length < 10 || message.length > 2000)
    errors.message = "Write between 10 and 2,000 characters.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, data: { name, email, topic, message } };
}







