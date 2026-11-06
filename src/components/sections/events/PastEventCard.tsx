import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import type { EventListing } from "@/src/lib/data/event-listings";

const chip =
  "rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm";

type Props = { event: EventListing };

export default function PastEventCard({ event }: Props) {
  const {
    name,
    date,
    location,
    image,
    imageAlt,
    href,
    description,
    category,
    guests,
  } = event;

  return (
    <article className="group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-black p-6 text-white sm:p-8 lg:p-10">
      {/* Opaque background, so the card underneath never shows through */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-black">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 75vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/20" />
      </div>

      {category && (
        <span
          className={`${chip} absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-10 lg:top-10`}
        >
          {category}
        </span>
      )}

      <h3 className="max-w-md text-balance font-heading text-2xl font-medium leading-tight sm:text-4xl">
        {/* The link stretches over the whole card */}
        <Link
          href={href}
          className="after:absolute after:inset-0 focus-visible:outline-none"
        >
          {name}
        </Link>
      </h3>

      {description && (
        <p className="mt-4 max-w-xl text-[13px] md:text-[15px] leading-relaxed text-white/80">
          {description}
        </p>
      )}

      <ul className="mt-6 flex flex-wrap gap-2 pr-16">
        <li className={chip}>{location}</li>
        {guests !== undefined && <li className={chip}>{guests} guests</li>}
        <li className={chip}>{date}</li>
      </ul>

      <span
        aria-hidden
        className="absolute bottom-6 right-6 grid size-10 place-items-center rounded-full bg-secondary text-white transition-transform group-hover:scale-110 sm:bottom-8 sm:right-8 sm:size-14 lg:bottom-10 lg:right-10 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      >
        <ArrowOutwardIcon fontSize="small" />
      </span>

      {/* Keyboard focus ring for the whole card */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl group-has-[a:focus-visible]:outline-2 group-has-[a:focus-visible]:-outline-offset-4 group-has-[a:focus-visible]:outline-white"
      />
    </article>
  );
}
