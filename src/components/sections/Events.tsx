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
      className="relative isolate bg-white py-16 text-primary [clip-path:inset(0)]"
    >
      {/* Parallax background: the fixed image is clipped to this section */}
      {/*<div aria-hidden className="absolute inset-0 -z-10">*/}
      {/*  <div className="fixed inset-0 motion-reduce:absolute">*/}
      {/*    <Image*/}
      {/*      src={BG_IMAGE_SRC}*/}
      {/*      alt=""*/}
      {/*      fill*/}
      {/*      sizes="100vw"*/}
      {/*      className="object-cover"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="absolute inset-0 bg-black/60" />*/}
      {/*</div>*/}

      <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-9/12 xl:px-0">
        <div className="flex flex-wrap items-end justify-between gap-2 lg:gap-6">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
              <span aria-hidden className="size-1.5 bg-secondary" />
              Events
            </p>
            <h2
              id="events-heading"
              className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Our events
            </h2>
          </div>
          {/* TODO: point to the all-events page once it exists */}
          {/*<ArrowLink href="/events" variant="secondary">*/}
          {/*  View all events*/}
          {/*</ArrowLink>*/}
        </div>

        <EventGroup
          title="Upcoming events"
          events={upcoming}
          className="mt-6 lg:mt-12"
        />
        <EventGroup
          title="Past events"
          events={past}
          className="mt-6 lg:mt-12"
        />
      </div>
    </section>
  );
}
