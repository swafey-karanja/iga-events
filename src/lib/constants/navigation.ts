export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "#" },
  { label: "About Us", href: "/about" },
  { label: "News", href: "/#news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
] as const;

export type ExternalLink = { label: string; href: string };
export type EventCategory = { label: string; items: readonly ExternalLink[] };

export const EVENT_LINKS: readonly EventCategory[] = [
  {
    label: "Upcoming Events",
    items: [
      { label: "Upcoming Event 1", href: "https://example.com/upcoming-1" },
      { label: "Upcoming Event 2", href: "https://example.com/upcoming-2" },
    ],
  },
  {
    label: "Past Events",
    items: [
      { label: "Past Event 1", href: "https://example.com/past-1" },
      { label: "Past Event 2", href: "https://example.com/past-2" },
    ],
  },
];
