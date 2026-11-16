import type { EventListing } from "@/src/lib/data/event-listings";

const fmt = (opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", ...opts });

export function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  if (Number.isNaN(start.getTime())) return startDate;

  const full = (d: Date) =>
    fmt({ day: "numeric", month: "long", year: "numeric" }).format(d);

  const end = endDate ? new Date(endDate) : undefined;
  if (!end || Number.isNaN(end.getTime())) return full(start);

  const sameYear = start.getUTCFullYear() === end.getUTCFullYear();
  const sameMonth = sameYear && start.getUTCMonth() === end.getUTCMonth();
  const sameDay = sameMonth && start.getUTCDate() === end.getUTCDate();

  if (sameDay) return full(start);
  if (sameMonth) return `${start.getUTCDate()} – ${full(end)}`;
  if (sameYear) {
    const dayMonth = fmt({ day: "numeric", month: "long" });
    return `${dayMonth.format(start)} – ${full(end)}`;
  }
  return `${full(start)} – ${full(end)}`;
}

export function formatLocation(
  { venue, city, country }: Pick<EventListing, "venue" | "city" | "country">,
  includeVenue = true,
): string {
  return [includeVenue ? venue : undefined, city, country]
    .filter(Boolean)
    .join(", ");
}
