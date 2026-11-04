import type { ContactRequest } from "@/src/lib/validation/contact";

export async function submitContact(body: ContactRequest): Promise<void> {
  let response: Response;
  try {
    response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error("Network error. Check your connection and try again.");
  }

  if (!response.ok) {
    const data: unknown = await response.json().catch(() => null);
    const message =
      typeof data === "object" && data !== null && "message" in data
        ? String((data as { message: unknown }).message)
        : "";
    throw new Error(message || "Something went wrong. Please try again.");
  }
}
