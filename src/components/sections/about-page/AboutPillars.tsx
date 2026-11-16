import { CONTENT } from "@/src/lib/constants/layout";
import CapabilitiesAccordion from "@/src/components/sections/capabilities/CapabilitiesAccordion";
import { CAPABILITIES } from "@/src/lib/data/capablities";

export default function AboutPillars() {
  return (
    <section
      aria-labelledby="pillars-heading"
      className="bg-white py-8 md:py-16"
    >
      <div className={CONTENT}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <span aria-hidden className="size-1.5 bg-primary" />
              What we do
            </p>
            <h2
              id="pillars-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl"
            >
              Every detail. One connected vision.
            </h2>
          </div>
        </div>

        <ul className="mt-10 ">
          {/*{PILLARS.map(({ id, title, description, image, imageAlt }) => (*/}
          {/*  <li key={id}>*/}
          {/*    <div className="relative aspect-[4/3] overflow-hidden bg-primary/10">*/}
          {/*      <Image*/}
          {/*        src={image}*/}
          {/*        alt={imageAlt}*/}
          {/*        fill*/}
          {/*        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 33vw, 100vw"*/}
          {/*        className="object-cover"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <h3 className="mt-5 font-heading text-xl font-semibold text-primary">*/}
          {/*      {title}*/}
          {/*    </h3>*/}
          {/*    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-black/70">*/}
          {/*      {description}*/}
          {/*    </p>*/}
          {/*  </li>*/}
          {/*))}*/}
          <CapabilitiesAccordion items={CAPABILITIES} />
        </ul>
      </div>
    </section>
  );
}
