import Image from "next/image";
import HeroCarousel from "@/src/components/sections/hero/HeroCarousel";
import { getHeroEvents } from "@/src/lib/data/events";

// PLACEHOLDERS: replace with real assets
const HERO_VIDEO_SRC =
  "https://res.cloudinary.com/odxuv15g/video/upload/f_auto,q_auto/2026-iga-summit_ndjdc4_p3oq7y.mp4";
const HERO_POSTER_SRC = "/placeholders/hero-poster.jpg";

export default async function Hero() {
  const events = await getHeroEvents();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-primary text-white"
    >
      {/* Poster is the LCP image and the fallback for reduced motion */}
      <Image
        src={HERO_POSTER_SRC}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <video
        className="absolute inset-0 -z-10 size-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_POSTER_SRC}
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-black/60 via-black/80 to-black/70"
      />

      <HeroCarousel events={events} />
    </section>
  );
}
