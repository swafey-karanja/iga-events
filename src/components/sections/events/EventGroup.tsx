import EventCard from "@/src/components/sections/events/EventCard";
import type { EventListing } from "@/src/lib/data/event-listings";
import { getMosaicSpanClass } from "@/src/lib/utils/mosaic";

type EventGroupProps = {
  title: string;
  events: EventListing[];
  className?: string;
};

export default function EventGroup({
  title,
  events,
  className = "",
}: EventGroupProps) {
  if (events.length === 0) return null;

  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-4 border-t-2 border-primary pt-4">
        <h3 className="font-heading text-2xl font-semibold text-primary lg:text-3xl">
          {title}
        </h3>
        <span className="text-sm text-black/70">
          {events.length} {events.length === 1 ? "event" : "events"}
        </span>
      </div>

      <ul className="mt-6 grid auto-rows-[15rem] grid-cols-1 gap-0.5 sm:grid-cols-2 lg:auto-rows-[16rem] lg:grid-cols-4">
        {events.map((event, i) => (
          <li key={event.id} className={getMosaicSpanClass(i, events.length)}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}
