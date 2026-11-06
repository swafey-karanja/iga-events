import Image from "next/image";
import { ABOUT } from "@/src/lib/data/about";
import { CONTENT } from "@/src/lib/constants/layout";

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-primary text-white"
    >
      <Image
        src="https://images.unsplash.com/photo-1711390811443-ae5a33144f7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-black/70 via-primary/70 to-primary/90"
      />

      <div
        className={`${CONTENT} pb-14 pt-28 sm:pb-20 sm:pt-36 xl:pb-24 xl:pt-48 backdrop-blur-xs`}
      >
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          <span aria-hidden className="size-1.5 bg-secondary" />
          About us
        </p>
        <h1
          id="about-heading"
          className="mt-4 max-w-4xl text-balance font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="block">People first.</span>
          <span className="block">Possibilities everywhere.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-white/85 sm:text-lg">
          {ABOUT.tagline}
        </p>
      </div>
    </section>
  );
}
