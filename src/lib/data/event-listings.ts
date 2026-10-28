export type EventStatus = "upcoming" | "past";

export type EventListing = {
  id: string;
  name: string;
  date: string;
  location: string;
  image: string;
  imageAlt: string;
  /** Internal event page, which the whole card links to */
  href: string;
  /** External website with the event's details */
  websiteUrl: string;
  status: EventStatus;
};

// PLACEHOLDERS: replace with real events and assets
const PLACEHOLDER_IMAGE =
  "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/IGA_Safari-135_hwblya_rep4to.webp";

function placeholder(n: number, status: EventStatus): EventListing {
  return {
    id: `${status}-${n}`,
    name: `[Event name ${n}]`,
    date: "[Date to be confirmed]",
    location: "[City, Country]",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "[Event photo description]",
    href: "#events", // TODO: event page route
    websiteUrl: "https://example.com", // TODO: real event website
    status,
  };
}

const PLACEHOLDER_EVENTS: EventListing[] = [
  ...Array.from({ length: 6 }, (_, i) => placeholder(i + 1, "upcoming")),
  ...Array.from({ length: 3 }, (_, i) => placeholder(i + 1, "past")),
];

export async function getEventListings(): Promise<EventListing[]> {
  return PLACEHOLDER_EVENTS; // later: fetch from CMS/API with revalidation
}
