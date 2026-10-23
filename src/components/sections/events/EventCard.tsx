import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import type { EventListing } from "@/src/lib/data/event-listings";

export default function EventCard({ event }: { event: EventListing }) {
  const { name, date, location, image, imageAlt, href, websiteUrl } = event;

  return (
    <article className="group relative isolate flex h-full flex-col justify-end overflow-hidden bg-primary text-white has-[a:focus-visible]:outline-2 has-[a:focus-visible]:-outline-offset-4 has-[a:focus-visible]:outline-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-t from-black/70 via-black/20 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-primary/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
      />

      <div className="p-5 lg:p-6">
        <div className="flex items-end justify-between gap-4">
          <h4 className="font-heading text-lg font-semibold leading-snug lg:text-xl">
            <Link
              href={href}
              className="after:absolute after:inset-0 focus-visible:outline-none"
            >
              {name}
            </Link>
          </h4>
          <ArrowForwardIcon
            aria-hidden
            className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
          />
        </div>

        {/* Details expand on hover or keyboard focus */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 motion-reduce:transition-none">
          <div className="-mx-1 overflow-hidden px-1 pb-1">
            <p className="mt-3 flex items-center gap-2 text-sm">
              <CalendarMonthIcon fontSize="inherit" aria-hidden />
              {date}
            </p>
            <p className="mt-1.5 flex items-center gap-2 text-sm">
              <LocationOnIcon fontSize="inherit" aria-hidden />
              {location}
            </p>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-4 inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Event website
              <ArrowOutwardIcon fontSize="inherit" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
