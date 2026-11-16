import { ArrowLinkExternal } from "@/src/components/ui/ArrowLink";
import type { EventListing } from "@/src/lib/data/event-listings";
import { formatDateRange } from "@/src/lib/utils/event-format";

type Detail = { label: string; value: string };

type HeroSlideProps = {
  event: EventListing;
  Heading: "h1" | "h2" | "p";
};

export default function HeroSlide({ event, Heading }: HeroSlideProps) {
  // Optional fields (e.g. venue) are skipped when empty
  const details = [
    { label: "Date", value: formatDateRange(event.startDate, event.endDate) },
    { label: "Venue", value: event.venue },
    { label: "City", value: event.city },
    { label: "Country", value: event.country },
  ].filter((d): d is Detail => Boolean(d.value));

  return (
    <div className="container-page flex min-h-svh flex-col items-center justify-center pb-24 pt-24 text-center sm:pt-28 xl:pb-16 xl:pt-40">
      {event.featured && (
        <p className="flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-wide text-secondary sm:text-lg">
          <span
            aria-hidden
            className="size-3 shrink-0 bg-secondary sm:size-3.5"
          />
          Featured upcoming event
        </p>
      )}

      <Heading className="mt-6 max-w-7xl text-balance font-heading text-[clamp(2.25rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-tight sm:mt-8">
        {event.title ?? event.name}
      </Heading>

      {event.tagline && (
        <p className="mt-4 max-w-3xl text-balance text-lg text-tertiary sm:mt-5 sm:text-2xl md:font-bold lg:text-3xl">
          {event.tagline}
        </p>
      )}

      <dl className="mt-6 grid w-full max-w-md grid-cols-2 gap-x-6 gap-y-4 sm:mt-8 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-12">
        {details.map(({ label, value }) => (
          <div key={label}>
            <dt className="text-xs uppercase tracking-wide text-white/80">
              {label}
            </dt>
            <dd className="mt-1 text-sm font-semibold sm:text-base">{value}</dd>
          </div>
        ))}
      </dl>

      {event.description && (
        <p className="mt-6 max-w-4xl text-xs leading-relaxed sm:mt-8 sm:text-base">
          {event.description}
        </p>
      )}

      <ArrowLinkExternal
        href={event.websiteUrl}
        variant="secondary"
        className="mt-8"
      >
        Explore event
      </ArrowLinkExternal>
    </div>
  );
}
