import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { CAPABILITIES } from "@/src/lib/data/capablities";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="bg-cream py-16 lg:py-24"
    >
      <div className="mx-auto max-w-10/12">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          <span aria-hidden className="size-1.5 bg-primary" />
          Our capabilities
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end lg:gap-16">
          <h2
            id="capabilities-heading"
            className="mt-3 text-4xl font-medium tracking-tight text-primary lg:text-7xl"
          >
            <span className="block">Every detail.</span>
            <span className="block">One connected vision.</span>
          </h2>

          <div>
            <p className="text-sm leading-relaxed text-black/70">
              From the first strategic conversation to the final moment on
              stage, an integrated approach keeps the whole experience
              connected.
            </p>
            {/* TODO: point to the capabilities page once it exists */}
            <Link
              href="/capabilities"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Explore our capabilities
              <ArrowOutwardIcon
                fontSize="inherit"
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-3 lg:gap-y-3">
          {CAPABILITIES.map(({ id, title, description, Icon }) => (
            <li
              key={id}
              className="min-h-40 border border-primary/60 p-6 lg:min-h-44"
            >
              <Icon aria-hidden className="text-primary" />
              <h3 className="mt-6 font-heading text-lg font-semibold text-primary lg:text-xl">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
