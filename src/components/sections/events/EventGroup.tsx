import EventCard from "@/src/components/sections/events/EventCard";
import EventCarousel from "@/src/components/sections/events/EventCarousel";
import type { EventListing } from "@/src/lib/data/event-listings";

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
      <EventCarousel title={title} count={events.length}>
        {events.map((event) => (
          <li
            key={event.id}
            className="shrink-0 basis-full snap-start sm:basis-[calc((100%_-_1rem)/2)] lg:basis-[calc((100%_-_3rem)/4)]"
          >
            <EventCard event={event} />
          </li>
        ))}
      </EventCarousel>
    </div>
  );
}
