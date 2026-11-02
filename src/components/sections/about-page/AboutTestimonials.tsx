import { TESTIMONIALS } from "@/src/lib/data/about";
import { CONTENT } from "@/src/lib/constants/layout";

export default function AboutTestimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-cream py-16 lg:py-24"
    >
      <div className={CONTENT}>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          <span aria-hidden className="size-1.5 bg-primary" />
          In their words
        </p>
        <h2
          id="testimonials-heading"
          className="mt-3 text-3xl font-medium tracking-tight text-primary sm:text-4xl lg:text-5xl"
        >
          What people say
        </h2>

        <ul className="mt-10 grid gap-10 sm:mt-12 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map(({ id, quote, name, role }) => (
            <li key={id}>
              <figure className="h-full border-l-4 border-secondary pl-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-black/50">
                  Sample testimonial
                </p>
                <blockquote className="mt-3 text-lg leading-relaxed text-black/80">
                  “{quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="block font-semibold text-primary">
                    {name}
                  </span>
                  <span className="text-black/60">{role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
