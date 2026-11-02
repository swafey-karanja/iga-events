import Image from "next/image";
import Link from "next/link";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import type { EventListing } from "@/src/lib/data/event-listings";

// Frames alternate between the secondary green and cream
const FRAMES = ["bg-secondary/85", "bg-back"] as const;

type EventCardProps = { event: EventListing; index: number };

export default function EventCard({ event, index }: EventCardProps) {
  const { name, date, location, image, imageAlt, href, websiteUrl } = event;

  return (
    <article
      className={`group relative p-4 lg:p-5 ${FRAMES[index % FRAMES.length]} has-[a:focus-visible]:outline-2 has-[a:focus-visible]:-outline-offset-4 has-[a:focus-visible]:outline-black`}
    >
      <div className="relative isolate flex aspect-square flex-col items-center justify-center p-5 text-center text-white sm:p-6">
        {/* Backgrounds are clipped here, so the link below can reach the frame */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 overflow-hidden bg-black"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1536px) 18vw, (min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          {/* Darker on touch screens, where the details are always shown */}
          <div className="absolute inset-0 bg-black/40 pointer-coarse:bg-black/65" />
          <div className="absolute inset-0 bg-primary/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none" />
        </div>

        <ArrowCircleUpOutlinedIcon aria-hidden className="rotate-45" />
        <h4 className="mt-3 text-balance break-words font-heading text-lg font-semibold uppercase leading-snug sm:text-xl xl:text-2xl 2xl:text-xl">
          {/* The link stretches over the whole card, including the frame */}
          <Link
            href={href}
            className="after:absolute after:-inset-4 lg:after:-inset-5 focus-visible:outline-none"
          >
            {name}
          </Link>
        </h4>

        {/* Details expand on hover or keyboard focus, and are always open on touch screens */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 pointer-coarse:grid-rows-[1fr] pointer-coarse:opacity-100 motion-reduce:transition-none">
          <div className="-mx-1 overflow-hidden px-1 pb-1">
            <p className="mt-3 flex items-center justify-center gap-2 text-sm">
              <CalendarMonthIcon fontSize="inherit" aria-hidden />
              {date}
            </p>
            <p className="mt-1.5 flex items-center justify-center gap-2 text-sm">
              <LocationOnIcon fontSize="inherit" aria-hidden />
              {location}
            </p>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-2 inline-flex items-center gap-1.5 py-2 text-sm font-semibold underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
