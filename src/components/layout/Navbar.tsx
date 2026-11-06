"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NAV_LINKS } from "@/src/lib/constants/navigation";
import EventsSubmenu from "@/src/components/layout/EventsSubmenu";
import ArrowLink from "@/src/components/ui/ArrowLink";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const linkBase =
  "rounded-full px-5 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-[#109F5D]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const activeStyle = "bg-[#109F5D]/60";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const eventsRef = useRef<HTMLLIElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!eventsRef.current?.contains(e.target as Node)) setEventsOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setEventsOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeAll = () => {
    setEventsOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 isolate text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 border-b border-white/10 bg-black/50 backdrop-blur-xl"
      />
      <div className="mx-auto flex w-full max-w-10/12 items-center justify-between py-5">
        {/* Logo placeholder – replace with your logo */}
        <Link
          href="/"
          className="font-heading text-xl font-semibold text-white"
        >
          LOGO
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1 rounded-full bg-white/10 py-3 px-4">
            {NAV_LINKS.map(({ label, href }) =>
              label === "Events" ? (
                <li
                  key={label}
                  ref={eventsRef}
                  className="relative"
                  onMouseEnter={() => setEventsOpen(true)}
                  onMouseLeave={() => setEventsOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={eventsOpen}
                    aria-controls="events-menu"
                    onClick={() => setEventsOpen((o) => !o)}
                    className={`${linkBase} inline-flex items-center gap-1 ${
                      eventsOpen ? activeStyle : ""
                    }`}
                  >
                    {label}
                    <KeyboardArrowDownIcon
                      fontSize="small"
                      className={`transition-transform ${eventsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {eventsOpen && (
                    <div
                      id="events-menu"
                      className="absolute left-0 top-full min-w-64 rounded-2xl bg-black/50 p-2 backdrop-blur-xl"
                    >
                      <EventsSubmenu onNavigate={closeAll} />
                    </div>
                  )}
                </li>
              ) : (
                <li key={label}>
                  <Link
                    href={href}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`${linkBase} block ${isActive(href) ? activeStyle : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <ArrowLink
          href="#contact"
          variant="secondary"
          className="hidden xl:inline-flex"
        >
          Plan an event
        </ArrowLink>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="rounded-full p-2 text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white xl:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="xl:hidden">
          <ul className="mx-auto flex w-full max-w-10/12 flex-col gap-1 pb-6">
            {NAV_LINKS.map(({ label, href }) =>
              label === "Events" ? (
                <li key={label}>
                  <span className="block px-4 py-2 text-sm font-semibold text-white/70">
                    {label}
                  </span>
                  <div className="ml-4">
                    <EventsSubmenu onNavigate={closeAll} />
                  </div>
                </li>
              ) : (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={closeAll}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`${linkBase} block ${isActive(href) ? activeStyle : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ),
            )}
            <ArrowLink
              href="#contact"
              variant="secondary"
              className="inline-flex"
            >
              Plan an event
            </ArrowLink>
          </ul>
        </nav>
      )}
    </header>
  );
}
