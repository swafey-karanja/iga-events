import EventAgendaCard from "@/src/components/sections/events/EventAgendaCard";
import { getEventListings } from "@/src/lib/data/event-listings";

export default async function Events() {
  const events = await getEventListings();
  const upcoming = events.filter((e) => e.status === "upcoming");

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="scroll-mt-24 bg-cream py-8 md:py-16"
    >
      <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-9/12 xl:px-0">
        {/*<div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-12">*/}
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
          <span aria-hidden className="size-1.5 bg-secondary" />
          The future
        </p>
        <div className="mt-2 md:mt-6 grid gap-6 sm:gap-8 xl:grid-cols-[1fr_22rem] xl:items-end xl:gap-16">
          <h2
            id="events-heading"
            className="max-w-2xl mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {/* Placeholder heading – replace with your own */}
            Explore our Upcoming events
          </h2>
          {/* Placeholder copy – replace with your own */}
          <p className="max-w-sm text-[13px] md:text-[15px] leading-relaxed text-black/70 md:pt-3 font-medium">
            Placeholder: a short line introducing the events people can join.
          </p>
          {/*</div>*/}
        </div>

        {upcoming.length > 0 ? (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {upcoming.map((event) => (
              <li key={event.id}>
                <EventAgendaCard event={event} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-black/70">
            No upcoming events at the moment. Please check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
