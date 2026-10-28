import { ArrowLinkExternal } from "@/src/components/ui/ArrowLink";
import type { HeroEvent } from "@/src/lib/data/events";

const DETAILS = [
  { label: "Date", key: "date" },
  { label: "Venue", key: "venue" },
  { label: "City", key: "city" },
  { label: "Country", key: "country" },
] as const satisfies readonly { label: string; key: keyof HeroEvent }[];

type HeroSlideProps = {
  event: HeroEvent;
  Heading: "h1" | "h2" | "p";
};

export default function HeroSlide({ event, Heading }: HeroSlideProps) {
  return (
    <div className="container-page flex min-h-svh flex-col items-center justify-center pb-24 pt-32 text-center lg:pb-16 lg:pt-44">
      <p className="flex items-center gap-3 text-lg  font-medium text-secondary uppercase tracking-wide">
        <span aria-hidden className="size-3.5 bg-secondary" />
        Featured upcoming event
        {/*<span className="bg-secondary px-3 py-1.5 text-black">*/}
        {/*  {event.badge}*/}
        {/*</span>*/}
      </p>

      <Heading className="mt-8 max-w-7xl font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-tight">
        {event.title}
      </Heading>
      <p className="mt-5 text-xl sm:text-3xl text-tertiary md:font-bold">
        {event.tagline}
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-12">
        {DETAILS.map(({ label, key }) => (
          <div key={key}>
            <dt className="text-xs uppercase tracking-wide text-white/80">
              {label}
            </dt>
            <dd className="mt-1 text-base font-semibold">{event[key]}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 max-w-4xl text-base leading-relaxed">
        {event.description}
      </p>
      <ArrowLinkExternal href={event.href} variant="secondary" className="mt-8">
        Explore event
      </ArrowLinkExternal>
    </div>
  );
}
