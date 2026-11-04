import ArrowLink from "@/src/components/ui/ArrowLink";
import { CONTENT } from "@/src/lib/constants/layout";

export default function ContactCta() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="bg-primary py-16 text-white lg:py-24"
    >
      <div
        className={`${CONTENT} flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between`}
      >
        <h2
          id="contact-cta-heading"
          className="max-w-2xl text-balance text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
        >
          Not sure where to start? See what we can do.
        </h2>
        <ArrowLink href="/#capabilities" variant="secondary">
          Explore our capabilities
        </ArrowLink>
      </div>
    </section>
  );
}
