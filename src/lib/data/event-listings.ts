import { sanityClient } from "@/src/lib/sanity/client";
import { cacheLife, cacheTag } from "next/cache";
import type { EventCategory } from "@/src/lib/constants/navigation";

export type EventStatus = "upcoming" | "past";

export type EventListing = {
  id: string;
  name: string;
  badge?: string;
  title?: string;
  tagline?: string;
  description?: string;
  image: string;
  logo: string;
  imageAlt: string;
  startDate: string;
  endDate?: string;
  venue?: string;
  city: string;
  country: string;
  websiteUrl: string;
  featured?: boolean;
  status: EventStatus;
};

// status is derived from the dates, so events move to "past" automatically
const EVENTS_QUERY = `*[_type == "event" && defined(image) && defined(startDate)] | order(startDate asc) {
  "id": _id,
  name, badge, title, tagline, description,
  image,
  logo,
  "imageAlt": coalesce(imageAlt, name),
  startDate, endDate, venue, city, country, websiteUrl, featured, status
}`;

// GROQ returns null for empty fields, but the type uses optional (undefined)
const dropNulls = (e: object) =>
  Object.fromEntries(
    Object.entries(e).filter(([, v]) => v !== null),
  ) as EventListing;

export async function getEventListings(): Promise<EventListing[]> {
  "use cache";
  cacheLife("hours"); // refreshes hourly, as a safety net
  cacheTag("event"); // the webhook revalidates this tag

  // const today = new Date().toISOString().slice(0, 10);
  const raw = await sanityClient.fetch<object[]>(EVENTS_QUERY);
  // const types = await sanityClient.fetch(`array::unique(*[]._type)`);
  // const total = await sanityClient.fetch(`count(*[_type == "event"])`);
  // const sample = await sanityClient.fetch(
  //   `*[_type == "event"][0...2]{_id, _type, startDate, image}`,
  // );
  // console.log({ types, total, sample });
  // console.log({ raw });
  const events = raw.map(dropNulls);
  console.log({ events });

  // Upcoming soonest first, past most recent first
  return [
    ...events.filter((e) => e.status === "upcoming"),
    ...events.filter((e) => e.status === "past").reverse(),
  ];
}

export async function getEventNavLinks(): Promise<EventCategory[]> {
  const events = await getEventListings();
  const group = (label: string, status: EventStatus): EventCategory => ({
    label,
    items: events
      .filter((e) => e.status === status)
      .map((e) => ({ label: e.name, href: e.websiteUrl })),
  });

  // Hide a group when it has no events
  return [
    group("Upcoming Events", "upcoming"),
    group("Past Events", "past"),
  ].filter((g) => g.items.length > 0);
}

/** Hero shows featured upcoming events first, max 3 */
export async function getHeroEvents(): Promise<EventListing[]> {
  const events = await getEventListings();
  return events
    .filter((e) => e.status === "upcoming")
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
    .slice(0, 3);
}
