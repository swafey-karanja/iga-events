import Link from "next/link";
import { CONTENT } from "@/src/lib/constants/layout";
import Image from "next/image";

export default function CareersHero() {
  return (
    <section aria-labelledby="careers-heading" className=" text-white">
      <Image
        src="https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
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
        className={`${CONTENT} pb-14 pt-28 sm:pb-20 sm:pt-36 xl:pb-24 xl:pt-44`}
      >
        <nav aria-label="Breadcrumb" className="text-xs text-white/70">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page">Careers</li>
          </ol>
        </nav>

        <h1
          id="careers-heading"
          className="mt-6 max-w-4xl text-balance font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="block">Great gatherings.</span>
          <span className="block">Start with great people.</span>
        </h1>
        <p className="mt-6 text-base text-white/85 sm:text-lg">
          Curiosity. Collaboration. Craft.
        </p>
      </div>
    </section>
  );
}
