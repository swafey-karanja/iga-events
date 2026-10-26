import Image from "next/image";
import ArrowLink from "@/src/components/ui/ArrowLink";

// PLACEHOLDERS: replace with real asset and copy
const ABOUT_IMAGE_SRC =
  "https://images.unsplash.com/photo-1743119844808-fefd446de533?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const ABOUT_IMAGE_ALT = "[Description of the about photo]";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="grid bg-[#e8e8e1] lg:grid-cols-2 min-h-[90vh]"
    >
      <div className="relative min-h-80 sm:min-h-112 lg:min-h-full">
        <Image
          src={ABOUT_IMAGE_SRC}
          alt={ABOUT_IMAGE_ALT}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute bottom-6 left-6 bg-cream px-3 py-1.5 text-xs text-primary">
          Illustrative photography
        </span>
      </div>

      <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 lg:py-24 xl:px-24">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          <span aria-hidden className="size-1.5 bg-primary" />
          About us
        </p>

        <h2
          id="about-heading"
          className="mt-3 text-4xl font-medium tracking-tight text-primary lg:text-7xl"
        >
          <span className="block">People first.</span>
          <span className="block">Possibilities everywhere.</span>
        </h2>

        <h3 className="mt-10 text-xs font-semibold uppercase tracking-wide text-primary">
          Provisional company introduction
        </h3>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-black/70">
          We bring people, industries and ideas together through conferences,
          summits and exhibitions. Our approach connects strategic thinking with
          creative production and thoughtful delivery, wherever the conversation
          takes us.
        </p>

        <h3 className="mt-10 text-xs font-semibold uppercase tracking-wide text-primary">
          Our mission
        </h3>
        <p className="mt-4 max-w-xl font-heading text-lg leading-snug text-primary sm:text-xl">
          To create the conditions for meaningful connection — across
          industries, places and perspectives.
        </p>

        {/* TODO: point to the about page once it exists */}
        <ArrowLink href="/about" className="mt-10 self-start">
          About us
        </ArrowLink>
      </div>
    </section>
  );
}
