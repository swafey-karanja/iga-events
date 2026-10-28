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
    title: "iGaming AFRIKA Summit 2027",
    tagline: "Africa's largest gaming show",
    description:
      "After a groundbreaking inaugural event, iGaming AFRIKA Summit 2027 continues its journey as Africa’s gateway to global gaming business, innovation, and investment.\n" +
      "\n" +
      "Where else to gather the industry’s gaming operators, regulators, service providers and investors, apart from Nairobi? Let’s connect and make business at the Heart of Gaming in Africa!",
    href: "https://igasummit.com/",
    date: "4 - 6 May 2027",
    venue: "Sarit Expo Centre",
    city: "Nairobi",
    country: "Kenya",
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
