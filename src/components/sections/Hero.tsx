import Image from "next/image";
import HeroCarousel from "@/src/components/sections/hero/HeroCarousel";
import { getHeroEvents } from "@/src/lib/data/event-listings";

// PLACEHOLDER: replace with real asset
const HERO_BG_SRC =
  "https://images.unsplash.com/photo-1669127300649-940337f1487e?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

export default async function Hero() {
  const events = await getHeroEvents();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[40svh] flex-col overflow-hidden bg-blue bg-linear-to-r from-primary/80 to-secondary text-white"
    >
      {/* Image: full width on mobile, 65% of the section from lg up */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-20 w-full xl:w-[60%] xl:mask-[linear-gradient(to_right,transparent,black_80%)]"
      >
        <Image
          src={HERO_BG_SRC}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 65vw, 100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 z-10 bg-primary/50" />
      </div>

      {/* Mobile only: darkens the full-width image so text stays readable */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-black/50 xl:hidden"
      />

      <HeroCarousel events={events} />
    </section>
  );
}
