import CapabilitiesAccordion from "@/src/components/sections/capabilities/CapabilitiesAccordion";
import { CAPABILITIES } from "@/src/lib/data/capablities";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="bg-cream py-8 md:py-16 text-black"
    >
      <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-9/12 xl:px-0">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
          <span aria-hidden className="size-1.5 bg-secondary" />
          Our capabilities
        </p>

        <div className="mt-2 md:mt-6 grid gap-6 sm:gap-8 xl:grid-cols-[1fr_22rem] xl:items-end xl:gap-16">
          <h2
            id="capabilities-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block">Every detail</span>
            <span className="block">One connected vision.</span>
          </h2>

          <p className="text-sm leading-relaxed text-black/70">
            From the first strategic conversation to the final moment on stage,
            an integrated approach keeps the whole experience connected.
          </p>
        </div>

        <CapabilitiesAccordion items={CAPABILITIES} />
      </div>
    </section>
  );
}
