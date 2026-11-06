import Image from "next/image";
import { getStats } from "@/src/lib/data/stats";

// PLACEHOLDERS: replace with real assets
const BG_VIDEO_SRC =
  "https://res.cloudinary.com/odxuv15g/video/upload/f_auto,w_auto/Summit-banner_myub6h_raozif.mp4";
const BG_POSTER_SRC =
  "https://res.cloudinary.com/odxuv15g/image/upload/v1793960320/Screenshot_20261106_131715_k8jgp8.png";

export default async function Stats() {
  const stats = await getStats();
  const hasPlaceholders = stats.some((s) => !s.value);

  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="relative isolate py-8 md:py-16 text-white [clip-path:inset(0)]"
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
          className="fixed inset-0 size-full object-cover block motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={BG_POSTER_SRC}
          src={BG_VIDEO_SRC}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      <div className="mx-auto grid w-full backdrop-blur-sm gap-12 px-5 sm:px-6 lg:grid-cols-5 lg:gap-16 xl:max-w-9/12 xl:px-0">
        {/* Left: heading and quote */}
        <div className="flex flex-col justify-between gap-12 lg:col-span-2">
          <div>
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest">
              <span aria-hidden className="size-1.5 bg-secondary" />A broader
              perspective
            </p>
            <h2
              id="stats-heading"
              className="max-w-2xl mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              The scale behind
              <span className="block text-white/80">the experience.</span>
            </h2>
          </div>

          {/* Placeholder quote – replace with a verified quote, or delete this block */}
          <figure className="border-l border-white/40 bg-linear-to-r from-white/10 to-transparent px-6 py-8">
            <blockquote className="text-[13px] md:text-[15px] leading-relaxed text-white/90">
              <p>Placeholder: a short, verified press or client quote.</p>
            </blockquote>
            <figcaption className="mt-6 text-xs font-semibold uppercase tracking-widest">
              — Source name
            </figcaption>
          </figure>
        </div>

        {/* Right: three columns, two rows. Borders are drawn only between cells */}
        <dl className="grid grid-cols-3 [counter-reset:stat] lg:col-span-3">
          {stats.map(({ id, label, value }) => (
            <div
              key={id}
              className="relative flex min-h-36 flex-col-reverse justify-end gap-2 border-white/25 p-3 pt-8 [counter-increment:stat] [&:not(:nth-child(3n))]:border-r [&:nth-child(n+4)]:border-t after:absolute after:right-2 after:top-2 after:text-[10px] after:tracking-widest after:text-white/80 after:content-[counter(stat,decimal-leading-zero)] sm:min-h-44 sm:gap-3 sm:p-6 sm:pt-10 sm:after:right-4 sm:after:top-4 sm:after:text-xs"
            >
              <dt className="text-balance text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-white/90 sm:text-xs">
                {label}
              </dt>
              <dd>
                {value ? (
                  <span className="font-heading text-2xl font-semibold sm:text-4xl xl:text-6xl">
                    {value}
                  </span>
                ) : (
                  <>
                    <span
                      aria-hidden
                      className="block h-1 w-12 bg-white sm:w-20"
                    />
                    <span className="sr-only">Figure to be added</span>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>

        {hasPlaceholders && (
          <p className="text-xs text-white/80 lg:col-span-5">
            Verified company figures to be added
          </p>
        )}
      </div>
    </section>
  );
}
