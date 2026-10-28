import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { CAPABILITIES } from "@/src/lib/data/capablities";

// PLACEHOLDERS: replace with real assets
const BG_VIDEO_SRC =
  "https://res.cloudinary.com/odxuv15g/video/upload/f_auto,w_auto/Summit-banner_myub6h_raozif.mp4";
const BG_POSTER_SRC = "/placeholders/capabilities-poster.jpg";

// Hover panels alternate between the two brand colours, with readable text on each
const HOVER_TONES = [
  "bg-secondary/70 text-white",
  "bg-secondary/70 text-white",
] as const;

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative isolate py-16 text-white [clip-path:inset(0)]"
    >
      {/* Parallax background: the fixed video is clipped to this section */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={BG_POSTER_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <video
          className="fixed inset-0 size-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={BG_POSTER_SRC}
          src={BG_VIDEO_SRC}
        />
        {/*  <source src={BG_VIDEO_SRC} type="video/mp4" />*/}
        {/*</video>*/}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-primary/30 to-black/40" />
      </div>

      <div className="mx-auto w-full max-w-10/12">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          <span aria-hidden className="size-1.5 bg-secondary" />
          Our capabilities
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end lg:gap-16">
          <h2
            id="capabilities-heading"
            className="font-heading text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block">Every detail.</span>
            <span className="block">One connected vision.</span>
          </h2>

          <div>
            <p className="text-sm leading-relaxed text-white/85">
              From the first strategic conversation to the final moment on
              stage, an integrated approach keeps the whole experience
              connected.
            </p>
            {/* TODO: point to the capabilities page once it exists */}
            <Link
              href="/capabilities"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore our capabilities
              <ArrowOutwardIcon
                fontSize="inherit"
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-4 lg:mt-16">
          {CAPABILITIES.map(
            ({ id, title, description, image, imageAlt }, i) => (
              <li
                key={id}
                className="basis-full sm:basis-[calc((100%_-_1rem)/2)] lg:basis-[calc((100%_-_4rem)/5)]"
              >
                <article className="group relative isolate flex aspect-square flex-col justify-end overflow-hidden rounded-3xl bg-primary text-white">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 21vw, (min-width: 640px) 42vw, 83vw"
                    className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-linear-to-t from-black/70 via-black/10 to-transparent"
                  />

                  {/* Hover panel: slides in from the right */}
                  <div
                    className={`absolute inset-0 flex translate-x-full items-center justify-center p-8 text-center transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus-within:translate-x-0 motion-reduce:translate-x-0 motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:duration-500 motion-reduce:group-hover:opacity-60 ${HOVER_TONES[i % HOVER_TONES.length]}`}
                  >
                    <p className="text-base leading-relaxed">{description}</p>
                  </div>

                  <h3 className="relative p-6 font-heading text-xl font-semibold leading-snug">
                    {title}
                  </h3>
                </article>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
