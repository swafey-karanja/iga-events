"use client";

import { useState } from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowLink from "@/src/components/ui/ArrowLink";
import { useScrolled } from "@/src/hooks/useScrolled";
import { NAV_LINKS } from "@/src/lib/constants/navigation";

const ACTIVE_HREF = "#home"; // TODO: replace with scroll-spy once more sections exist

const linkClass =
  "relative font-heading text-lg text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-1 after:origin-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100 aria-[current=true]:font-semibold aria-[current=true]:after:scale-x-100 motion-reduce:after:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 isolate text-white">
      {/* Dark fade over the video, and a solid brand layer that fades in on scroll */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-linear-to-b from-black/60 to-transparent"
      />
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 bg-primary transition-opacity duration-300 motion-reduce:transition-none ${
          solid ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="max-w-10/12 mx-auto flex h-20 items-center justify-between gap-6">
        <Link
          href="#home"
          aria-label="Convene home"
          className="flex items-center gap-1.5 font-heading text-3xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          convene
          <span aria-hidden className="mt-3 size-2 bg-secondary" />
        </Link>

        <ArrowLink
          href="#contact"
          variant="secondary"
          className="hidden lg:inline-flex"
        >
          Plan an event
        </ArrowLink>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="p-2 lg:hidden focus-visible:outline-2 focus-visible:outline-white"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <nav
        aria-label="Main"
        className="hidden border-t border-white/15 lg:block h-16"
      >
        <ul className="container mx-auto flex h-12 items-center justify-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={linkClass}
                aria-current={href === ACTIVE_HREF ? "true" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-white/15 lg:hidden"
      >
        <ul className="container mx-auto flex flex-col gap-5 py-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="font-heading text-lg"
                aria-current={href === ACTIVE_HREF ? "true" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <ArrowLink
              href="#contact"
              variant="secondary"
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
