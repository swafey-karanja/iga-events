import type { ContactPayload } from "@/src/lib/validation/contact";

export async function sendEnquiryEmail(data: ContactPayload): Promise<void> {
  const { RESEND_API_KEY, CONTACT_NOTIFY_EMAIL, CONTACT_FROM_EMAIL } =
    process.env;
  if (!RESEND_API_KEY || !CONTACT_NOTIFY_EMAIL || !CONTACT_FROM_EMAIL) {
    throw new Error("Email is not configured.");
  }

  const details = [
    ["Name", data.name],
    ["Organisation", data.organisation],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Job title", data.jobTitle],
    ["Event name", data.eventName],
    ["Event type", data.eventType],
    ["Industry", data.industry],
    ["Location(s)", data.location.join("; ")],
    ["Attendance", data.attendance],
    ["Proposed date", data.eventDate],
    ["Duration", data.duration],
    ["Services", data.services.join("; ")],
    ["Budget", data.budget],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_NOTIFY_EMAIL.split(",").map((e) => e.trim()),
      reply_to: data.email, // replying goes straight to the enquirer
      subject: `New enquiry: ${data.eventName || data.organisation}`,
      text: `${details}\n\nMessage:\n${data.message || "(none)"}`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Email provider responded ${response.status}`);
  }
}
