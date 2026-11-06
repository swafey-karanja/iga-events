import ArrowLink from "@/src/components/ui/ArrowLink";
import PastEventCard from "@/src/components/sections/events/PastEventCard";
import { getEventListings } from "@/src/lib/data/event-listings";

export default async function PastEvents() {
  const events = await getEventListings();
  const past = events.filter((e) => e.status === "past");

  if (past.length === 0) return null;

  return (
    <section
      id="past-events"
      aria-labelledby="past-events-heading"
      className="scroll-mt-24 bg-[#15110e] py-8 md:py-16 text-white"
    >
      <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-9/12 xl:px-0">
        {/*<div className="flex flex-wrap items-end justify-between gap-2">*/}
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-white">
          <span aria-hidden className="size-1.5 bg-white" />
          The future
        </p>
        <div className="mt-2 md:mt-6 grid gap-6 sm:gap-8 xl:grid-cols-[1fr_22rem] xl:items-end xl:gap-16">
          <h2
            id="past-events-heading"
            className="max-w-5xl mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {/* Placeholder heading – replace with your own */}
            Events we have delivered
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-white md:pt-3 font-medium">
            Placeholder: a short line introducing the events people can join.
          </p>
          {/*</div>*/}
        </div>

        {/* Every card sticks at the same offset, so each one scrolls over the last */}
        <ul className="mt-10 lg:mt-14 [&>li+li]:mt-8">
          {past.map((event) => (
            <li
              key={event.id}
              className="sticky top-24 h-[min(45rem,calc(100svh-7rem))]"
            >
              <PastEventCard event={event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
