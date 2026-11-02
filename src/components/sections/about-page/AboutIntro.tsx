import { ABOUT } from "@/src/lib/data/about";
import { CONTENT } from "@/src/lib/constants/layout";

export default function AboutIntro() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="bg-cream py-16 lg:py-24"
    >
      <div className={`${CONTENT} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
            <span aria-hidden className="size-1.5 bg-primary" />
            Provisional company introduction
          </p>
          <h2
            id="intro-heading"
            className="mt-3 text-3xl font-medium tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            Who we are
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-black/70">
            {ABOUT.introduction}
          </p>
        </div>

        <div className="border-l-4 border-secondary pl-6 lg:self-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Our mission
          </p>
          <p className="mt-4 font-heading text-xl font-medium leading-snug text-primary sm:text-2xl lg:text-3xl">
            {ABOUT.mission}
          </p>
        </div>
      </div>
    </section>
  );
}
