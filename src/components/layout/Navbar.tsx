"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowLink from "@/src/components/ui/ArrowLink";
import { useScrolled } from "@/src/hooks/useScrolled";
import { NAV_LINKS } from "@/src/lib/constants/navigation";
import type { EventListing } from "@/src/lib/data/event-listings";

const ACTIVE_HREF = "/"; // TODO: replace with scroll-spy once more sections exist
const EVENTS_HREF = "#"; // the nav item that gets the dropdown

// Side gutters below xl, your 10/12 width from xl up
const GUTTER = "mx-auto w-full px-4 sm:px-6 xl:max-w-10/12 xl:px-0";

const linkClass =
  "relative font-heading text-base 2xl:text-lg text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-1 after:origin-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100 aria-[current=true]:font-semibold aria-[current=true]:after:scale-x-100 motion-reduce:after:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const GROUPS = [
  { title: "Upcoming events", status: "upcoming" },
  { title: "Past events", status: "past" },
] as const;

export type NavEvent = Pick<EventListing, "id" | "name" | "href" | "status">;

type EventGroupsProps = {
  events: NavEvent[];
  linkClassName: string;
  onNavigate?: () => void;
};

// The two sub-menus: upcoming and past events, each listing its own events
function EventGroups({ events, linkClassName, onNavigate }: EventGroupsProps) {
  return (
    <>
      {GROUPS.map(({ title, status }) => {
        const items = events.filter((e) => e.status === status);
        if (items.length === 0) return null;
        return (
          <div key={status}>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-white/60">
              {title}
            </p>
            <ul className="mt-2">
              {items.map((event) => (
                <li key={event.id}>
                  <Link
                    href={event.href}
                    onClick={onNavigate}
                    className={linkClassName}
                  >
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default function Navbar({ events }: { events: NavEvent[] }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const hasEvents = events.length > 0;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Solid after scrolling, or while the mobile menu is open (below xl only)
  const solidClass = scrolled
    ? "opacity-100"
    : open
      ? "opacity-100 xl:opacity-0"
      : "opacity-0";

  return (
    <header className="fixed inset-x-0 top-0 z-50 isolate text-white">
      {/* Dark fade over the video, and a solid brand layer that fades in on scroll */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-linear-to-b from-black/60 to-transparent"
      />
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 bg-primary transition-opacity duration-300 motion-reduce:transition-none ${solidClass}`}
      />

      <div
        className={`${GUTTER} flex h-16 items-center justify-between gap-6 sm:h-20 xl:h-25`}
      >
        <Link
          href="/"
          aria-label="Convene home"
          className="flex items-center gap-1.5 font-heading text-2xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-3xl"
        >
          convene
          <span aria-hidden className="mt-2 size-2 bg-secondary sm:mt-3" />
        </Link>

        <nav
          aria-label="Main"
          className="hidden h-16 border-t border-white/45 xl:block"
        >
          <ul className="flex h-16 items-center justify-center gap-6 2xl:gap-10">
            {NAV_LINKS.map(({ label, href }) =>
              href === EVENTS_HREF && hasEvents ? (
                <li
                  key={href}
                  className="group/menu relative flex h-16 items-center"
                >
                  <Link
                    href={href}
                    className={`${linkClass} inline-flex items-center gap-0.5`}
                  >
                    {label}
                    <ExpandMoreIcon
                      fontSize="small"
                      aria-hidden
                      className="transition-transform duration-200 group-hover/menu:rotate-180 group-focus-within/menu:rotate-180 motion-reduce:transition-none"
                    />
                  </Link>

                  {/* Opens on hover or keyboard focus. The top padding bridges the gap so hover isn't lost. */}
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-5 opacity-0 transition-[opacity,visibility] duration-200 group-hover/menu:visible group-hover/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:opacity-100 motion-reduce:transition-none">
                    <div className="grid max-h-[70svh] w-[min(25rem,90vw)] auto-cols-fr grid-flow-col gap-8 overflow-y-auto bg-primary p-6 ring-1 ring-white/15">
                      <EventGroups
                        events={events}
                        linkClassName="block py-1.5 text-sm text-white transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                      />
                    </div>
                  </div>
                </li>
              ) : (
                <li key={href}>
                  <Link
                    href={href}
                    className={linkClass}
                    aria-current={href === ACTIVE_HREF ? "true" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <ArrowLink
          href="/contact"
          variant="secondary"
          className="hidden xl:inline-flex"
        >
          Plan an event
        </ArrowLink>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 grid size-11 place-items-center focus-visible:outline-2 focus-visible:outline-white xl:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-white/15 xl:hidden"
      >
        <ul className={`${GUTTER} flex flex-col py-4`}>
          {NAV_LINKS.map(({ label, href }) =>
            href === EVENTS_HREF && hasEvents ? (
              <li key={href}>
                <details className="group/acc">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-heading text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                    {label}
                    <ExpandMoreIcon
                      aria-hidden
                      className="transition-transform duration-200 group-open/acc:rotate-180 motion-reduce:transition-none"
                    />
                  </summary>
                  <div className="flex flex-col gap-5 pb-3 pl-4">
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="py-2 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      All events
                    </Link>
                    <EventGroups
                      events={events}
                      onNavigate={() => setOpen(false)}
                      linkClassName="block py-2.5 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    />
                  </div>
                </details>
              </li>
            ) : (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-heading text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-current={href === ACTIVE_HREF ? "true" : undefined}
                >
                  {label}
                </Link>
              </li>
            ),
          )}
          <li className="pb-2 pt-4">
            <ArrowLink
              href="/contact"
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => setOpen(false)}
            >
              Plan an event
            </ArrowLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
