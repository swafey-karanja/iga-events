import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import type { EventListing } from "@/src/lib/data/event-listings";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

type Props = { event: EventListing };

export default function EventAgendaCard({ event }: Props) {
  const { name, date, location, image, imageAlt, href, description } = event;

  return (
    <article className="flex h-full flex-col rounded-3xl border border-back bg-white/70 px-3.5 py-4">
      <div className="relative aspect-3/2 overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
        <h3 className="font-heading text-2xl font-semibold text-black">
          {name}
        </h3>
        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-primary font-medium">
          <span className="inline-flex items-center gap-1.5">
            <CalendarMonthIcon fontSize="inherit" aria-hidden />
            {date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LocationOnIcon fontSize="inherit" aria-hidden />
            {location}
          </span>
        </p>
        {description && (
          <p className="mt-4 text-[13px] leading-relaxed text-black/70">
            {description}
          </p>
        )}
        {/*mt-auto keeps the buttons aligned across cards of different heights*/}
        <div className="mt-auto pt-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline decoration-dotted underline-offset-4 text-blue-500 font-semibold transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            href={href}
          >
            Explore the Event <ArrowOutwardIcon fontSize="small" />
          </a>
        </div>
      </div>
    </article>
  );
}
