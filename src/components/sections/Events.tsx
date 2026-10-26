import ArrowLink from "@/src/components/ui/ArrowLink";
import EventGroup from "@/src/components/sections/events/EventGroup";
import { getEventListings } from "@/src/lib/data/event-listings";

export default async function Events() {
  const events = await getEventListings();
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="bg-cream py-16 lg:py-24"
    >
      <div className="mx-auto max-w-10/12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <span aria-hidden className="size-1.5 bg-secondary" />
              Events
            </p>
            <h2
              id="events-heading"
              className="mt-3 text-4xl font-medium tracking-tight text-primary lg:text-7xl"
            >
              Different Industries,
              <br /> One Shared Ambition.
            </h2>
          </div>
          {/* TODO: point to the all-events page once it exists */}
          <ArrowLink href="/events">View all events</ArrowLink>
        </div>

        <EventGroup
          title="Upcoming events"
          events={upcoming}
          className="mt-12"
        />
        <EventGroup
          title="Past events"
          events={past}
          className="mt-16 lg:mt-24"
        />
      </div>
    </section>
  );
}
