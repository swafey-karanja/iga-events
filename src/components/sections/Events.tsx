import Image from "next/image";
import ArrowLink from "@/src/components/ui/ArrowLink";
import EventGroup from "@/src/components/sections/events/EventGroup";
import { getEventListings } from "@/src/lib/data/event-listings";

const BG_IMAGE_SRC = "/events-bg.jpg";

export default async function Events() {
  const events = await getEventListings();
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="relative isolate bg-white py-16 text-primary [clip-path:inset(0)] lg:py-24"
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

      <div className="mx-auto w-full max-w-10/12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
              <span aria-hidden className="size-1.5 bg-secondary" />
              Events
            </p>
            <h2
              id="events-heading"
              className="mt-3 font-heading text-4xl font-semibold tracking-tight lg:text-5xl"
            >
              Our events
            </h2>
          </div>
          {/* TODO: point to the all-events page once it exists */}
          <ArrowLink href="/events" variant="secondary">
            View all events
          </ArrowLink>
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
