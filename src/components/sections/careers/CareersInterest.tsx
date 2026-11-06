import InterestForm from "@/src/components/sections/careers/InterestForm";
import { CONTENT } from "@/src/lib/constants/layout";

export default function CareersInterest({ hasJobs }: { hasJobs: boolean }) {
  return (
    <section
      id="interest"
      aria-labelledby="interest-heading"
      className="bg-cream py-8 md:py-16"
    >
      <div
        className={`${CONTENT} grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16`}
      >
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
            <span aria-hidden className="size-1.5 bg-primary" />
            Register your interest
          </p>
          <h2
            id="interest-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            {hasJobs ? "Don’t see the right role?" : "Let’s stay in touch"}
          </h2>
          <p className="mt-3 max-w-md text-xs md:text-base leading-relaxed text-black/70">
            Tell us a little about yourself and the work you’d love to do. We’ll
            keep your details in mind for future opportunities.
          </p>
        </div>

        <InterestForm />
      </div>
    </section>
  );
}
