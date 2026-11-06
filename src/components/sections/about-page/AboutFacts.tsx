import { FACTS } from "@/src/lib/data/about";
import { CONTENT } from "@/src/lib/constants/layout";
import Image from "next/image";

const BG_VIDEO_SRC =
  "https://res.cloudinary.com/odxuv15g/video/upload/f_auto,w_auto/Summit-banner_myub6h_raozif.mp4";
const BG_POSTER_SRC =
  "https://res.cloudinary.com/odxuv15g/image/upload/v1793960320/Screenshot_20261106_131715_k8jgp8.png";

export default function AboutFacts() {
  const hasPlaceholders = FACTS.some((f) => !f.value);

  return (
    <section
      aria-labelledby="facts-heading"
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
      <div
        className={`${CONTENT} grid gap-12 lg:grid-cols-5 lg:gap-16 backdrop-blur-md`}
      >
        {/* Left: eyebrow and heading */}
        <div className="lg:col-span-2">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
            <span aria-hidden className="size-1.5 bg-secondary" />
            At a glance
          </p>
          <h2
            id="facts-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            The people and places
            <span className="block text-white/70">behind us</span>
          </h2>
        </div>

        {/* Right: two columns, borders drawn only between cells */}
        <dl className="grid grid-cols-2 [counter-reset:fact] lg:col-span-3">
          {FACTS.map(({ id, label, value }) => (
            <div
              key={id}
              className="relative flex min-h-36 flex-col-reverse justify-end gap-2 border-white/25 p-4 pt-10 [counter-increment:fact] [&:not(:nth-child(2n))]:border-r [&:nth-child(n+3)]:border-t after:absolute after:right-3 after:top-3 after:text-[10px] after:tracking-widest after:text-white/80 after:content-[counter(fact,decimal-leading-zero)] sm:min-h-44 sm:gap-3 sm:p-6 sm:pt-12 sm:after:right-4 sm:after:top-4 sm:after:text-xs"
            >
              <dt className="text-balance text-[9px] md:text-[10px] font-semibold uppercase tracking-widest text-white/90 sm:text-xs">
                {label}
              </dt>
              <dd>
                {value ? (
                  <span className="font-heading text-2xl font-normal sm:text-4xl xl:text-5xl">
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
            Verified company details to be added
          </p>
        )}
      </div>
    </section>
  );
}
