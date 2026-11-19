export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "#events" },
  { label: "About Us", href: "/about" },
  // { label: "News", href: "/#news" },
  // { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
] as const;

export type ExternalLink = { label: string; href: string };
export type EventCategory = { label: string; items: readonly ExternalLink[] };
