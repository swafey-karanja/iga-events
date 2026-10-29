import Image from "next/image";
import { ButtonLInk } from "@/src/components/ui/ArrowLink";

// PLACEHOLDERS: replace with real asset and copy
const ABOUT_IMAGE_SRC =
  "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const ABOUT_IMAGE_ALT = "[Description of the about photo]";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-primary text-white"
    >
      {/* Photo fills the right side and fades into the green on the left */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-3/5">
        <Image
          src={ABOUT_IMAGE_SRC}
          alt={ABOUT_IMAGE_ALT}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-primary/85 lg:bg-transparent lg:bg-linear-to-r lg:from-primary lg:via-primary/50 lg:to-primary/10"
        />
      </div>

      <div className="mx-auto w-full max-w-10/12 flex min-h-96 flex-col justify-center py-16 lg:py-24">
        <div className="max-w-4xl">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
            <span aria-hidden className="size-1.5 bg-secondary" />
            About us
          </p>

          <h2
            id="about-heading"
            className="mt-3 text-4xl font-medium tracking-tight text-white lg:text-7xl"
          >
            <span className="block">People first.</span>
            <span className="block">Possibilities everywhere.</span>
          </h2>

          <h3 className="mt-8 text-xs font-semibold uppercase tracking-wide text-white/80">
            Provisional company introduction
          </h3>
          <p className="mt-3 text-lg font-medium leading-snug max-w-3xl">
            We bring people, industries and ideas together through conferences,
            summits and exhibitions. Our approach connects strategic thinking
            with creative production and thoughtful delivery, wherever the
            conversation takes us.
          </p>

          <h3 className="mt-8 text-xs font-semibold uppercase tracking-wide text-white/80">
            Our mission
          </h3>
          <p className="mt-3 text-lg font-medium leading-snug max-w-3xl">
            To create the conditions for meaningful connection — across
            industries, places and perspectives.
          </p>

          {/* TODO: point to the about page once it exists */}
          <ButtonLInk
            href="/about"
            className="mt-10 inline-block rounded-full bg-secondary px-8 py-4 font-heading text-xs font-semibold tracking-widest text-white transition-colors duration-200 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
          >
            About us
          </ButtonLInk>
        </div>
      </div>
    </section>
  );
}
