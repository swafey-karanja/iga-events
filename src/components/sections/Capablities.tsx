import Image from "next/image";
import { CAPABILITIES } from "@/src/lib/data/capablities";

// PLACEHOLDERS: replace with real assets
const BG_VIDEO_SRC =
  "https://res.cloudinary.com/odxuv15g/video/upload/f_auto,w_auto/Summit-banner_myub6h_raozif.mp4";
const BG_POSTER_SRC = "/placeholders/capabilities-poster.jpg";

const HOVER_TONE = "bg-secondary/70 text-white";

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
        {/* Hidden below lg: no fixed video on phones and tablets */}
        <video
          className="fixed inset-0 hidden size-full object-cover lg:block motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={BG_POSTER_SRC}
          src={BG_VIDEO_SRC}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-primary/30 to-black/40" />
      </div>

      <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-9/12 xl:px-0">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          <span aria-hidden className="size-1.5 bg-secondary" />
          Our capabilities
        </p>

        <div className="mt-6 grid gap-6 sm:gap-8 xl:grid-cols-[1fr_22rem] xl:items-end xl:gap-16">
          <h2
            id="capabilities-heading"
            className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl xl:text-6xl 2xl:text-7xl"
          >
            <span className="block">Every detail</span>
            <span className="block">One connected vision.</span>
          </h2>

          <div>
            <p className="text-sm leading-relaxed text-white/85">
              From the first strategic conversation to the final moment on
              stage, an integrated approach keeps the whole experience
              connected.
            </p>
            {/* TODO: "Explore our capabilities" link, hidden until the page exists */}
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-4 sm:mt-12 lg:mt-16">
          {CAPABILITIES.map(({ id, title, description, image, imageAlt }) => (
            <li
              key={id}
              className="basis-full sm:basis-[calc((100%_-_1rem)/2)] lg:basis-[calc((100%_-_2rem)/3)] xl:basis-[calc((100%_-_3rem)/4)] 2xl:basis-[calc((100%_-_4rem)/5)]"
            >
              <article className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-3xl bg-primary text-white sm:aspect-square">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1536px) 18vw, (min-width: 1280px) 20vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                {/* Stronger on touch screens, where the description sits over the image */}
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-linear-to-t from-black/70 via-black/10 to-transparent pointer-coarse:from-black/90 pointer-coarse:via-black/50"
                />

                {/* Mouse: slides in from the right. Touch: sits under the title instead. */}
                <div
                  className={`absolute inset-0 flex translate-x-full items-center justify-center p-6 text-center transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus-within:translate-x-0 motion-reduce:translate-x-0 motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:duration-500 motion-reduce:group-hover:opacity-60 pointer-coarse:static pointer-coarse:order-last pointer-coarse:translate-x-0 pointer-coarse:justify-start pointer-coarse:bg-transparent pointer-coarse:p-0 pointer-coarse:px-5 pointer-coarse:pb-5 pointer-coarse:text-left pointer-coarse:motion-reduce:opacity-100 ${HOVER_TONE}`}
                >
                  <p className="text-base leading-relaxed xl:text-sm">
                    {description}
                  </p>
                </div>

                <h3 className="relative text-balance break-words p-5 font-heading text-xl font-semibold leading-snug pointer-coarse:pb-2">
                  {title}
                </h3>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
