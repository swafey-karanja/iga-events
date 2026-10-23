export type HeroEvent = {
  id: string;
  badge: string;
  featured?: boolean;
  title: string;
  tagline: string;
  description: string;
  href: string;
  date: string;
  venue: string;
  city: string;
  country: string;
};

// PLACEHOLDERS: replace with real events
const PLACEHOLDER_EVENTS: HeroEvent[] = [
  {
    id: "event-1",
    badge: "Sample event",
    featured: true,
    title: "The Next Industry Forum",
    tagline: "Where industries meet. What’s next begins.",
    description:
      "An editorial concept for a cross-industry gathering of ideas, meaningful connections and conversations that move business forward.",
    href: "https://igasummit.com/",
    date: "[Date to be confirmed]",
    venue: "[Venue to be confirmed]",
    city: "[City to be confirmed]",
    country: "[Country to be confirmed]",
  },
  {
    id: "event-2",
    badge: "Sample event",
    title: "[Event Title Two]",
    tagline: "[Event tagline two]",
    description: "[Short event description to be added.]",
    href: "#events",
    date: "[Date two]",
    venue: "[Venue two]",
    city: "[City two]",
    country: "[Country two]",
  },
  {
    id: "event-3",
    badge: "Sample event",
    title: "[Event Title Three]",
    tagline: "[Event tagline three]",
    description: "[Short event description to be added.]",
    href: "#events",
    date: "[Date three]",
    venue: "[Venue three]",
    city: "[City three]",
    country: "[Country three]",
  },
];

export async function getHeroEvents(): Promise<HeroEvent[]> {
  return PLACEHOLDER_EVENTS; // later: fetch from CMS/API with revalidation
}
