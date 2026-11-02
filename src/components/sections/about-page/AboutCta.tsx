import ArrowLink from "@/src/components/ui/ArrowLink";
import { CONTENT } from "@/src/lib/constants/layout";

export default function AboutCta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-primary py-16 text-white lg:py-24"
    >
      <div
        className={`${CONTENT} flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between`}
      >
        <h2
          id="cta-heading"
          className="max-w-2xl text-balance text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
        >
          Let’s plan something worth gathering for.
        </h2>
        <ArrowLink href="/#contact" variant="secondary">
          Plan an event
        </ArrowLink>
      </div>
    </section>
  );
}
