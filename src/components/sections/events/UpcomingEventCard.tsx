import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowLink from "@/src/components/ui/ArrowLink";
import type { EventListing } from "@/src/lib/data/event-listings";

type Props = { event: EventListing };

export default function UpcomingEventCard({ event }: Props) {
  const { name, date, location, image, imageAlt, href, description } = event;

  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-3.5 sm:p-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>

      <h3 className="mt-6 font-heading text-2xl font-medium text-black">
        {name}
      </h3>

      <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-secondary">
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
        <p className="mt-4 text-[15px] leading-relaxed text-black/70">
          {description}
        </p>
      )}

      {/* mt-auto keeps buttons aligned across cards of different heights */}
      <div className="mt-auto pt-6">
        <ArrowLink href={href} variant="secondary">
          View event
        </ArrowLink>
      </div>
    </article>
  );
}
