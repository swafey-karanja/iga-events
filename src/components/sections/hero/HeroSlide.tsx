import Image from "next/image";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { ArrowLinkExternal } from "@/src/components/ui/ArrowLink";
import type { EventListing } from "@/src/lib/data/event-listings";
import { formatDateRange } from "@/src/lib/utils/event-format";

type HeroSlideProps = {
  event: EventListing;
  Heading: "h1" | "h2" | "p";
};

export default function HeroSlide({ event, Heading }: HeroSlideProps) {
  const name = event.title ?? event.name;
  const location = [event.venue, event.city, event.country]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="mx-auto max-w-10/12 flex min-h-[40svh] items-center py-14">
      <div className="mx-auto flex w-fit flex-col items-center gap-3 text-center xl:mx-0 xl:ml-[15%]">
        {event.featured && (
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-white">
            <span aria-hidden className="size-3 shrink-0 bg-secondary" />
            Featured upcoming event
          </p>
        )}

        {location && (
          <p className="flex items-center gap-1.5 text-sm sm:text-[16px] font-semibold">
            <PlaceOutlinedIcon fontSize="small" aria-hidden />
            {location}
          </p>
        )}

        {/* Logo is the slide heading, so the accessible name is the event name */}
        {event.logo && (
          <div className="backdrop-blur-xl p-2">
            <Image
              src={event.logo}
              alt={name}
              width={300}
              height={48}
              className="h-auto w-36 sm:w-44 lg:w-72"
            />
          </div>
        )}

        <p className="text-sm font-bold sm:text-base">
          {formatDateRange(event.startDate, event.endDate)}
        </p>

        <ArrowLinkExternal
          href={event.websiteUrl}
          variant="secondary"
          className="mt-2"
        >
          Explore event
        </ArrowLinkExternal>
      </div>
    </div>
  );
}
