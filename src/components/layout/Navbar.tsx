"use client";

import { useState } from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowLink from "@/src/components/ui/ArrowLink";
import { NAV_LINKS } from "@/src/lib/constants/navigation";

const ACTIVE_HREF = "#home"; // TODO: replace with scroll-spy once more sections exist

const linkClass =
  "relative font-heading text-sm text-primary after:absolute after:inset-x-0 after:-bottom-1.5 after:h-1 after:origin-left after:scale-x-0 after:bg-secondary after:transition-transform hover:after:scale-x-100 aria-[current=true]:font-semibold aria-[current=true]:after:scale-x-100 motion-reduce:after:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream">
      <div className="mx-auto container flex h-20 items-center justify-between gap-6">
        <Link
          href="#home"
          aria-label="Convene home"
          className="flex items-center gap-1.5 font-heading text-3xl font-semibold tracking-tight text-primary"
        >
          convene
          <span aria-hidden className="mt-3 size-2 bg-secondary" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
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

        <ArrowLink href="#contact" className="hidden lg:inline-flex">
          Plan an event
        </ArrowLink>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="p-2 text-primary lg:hidden focus-visible:outline-2 focus-visible:outline-primary"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-black/5 bg-cream lg:hidden"
      >
        <ul className="container-page flex flex-col gap-5 py-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="font-heading text-lg text-primary"
                aria-current={href === ACTIVE_HREF ? "true" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <ArrowLink href="#contact" onClick={() => setOpen(false)}>
              Plan an event
            </ArrowLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
