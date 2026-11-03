import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { PILLARS } from "@/src/lib/data/about";
import { CONTENT } from "@/src/lib/constants/layout";

export default function AboutPillars() {
  return (
    <section
      aria-labelledby="pillars-heading"
      className="bg-white py-16 lg:py-24"
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
              className="mt-3 text-3xl font-medium tracking-tight text-primary sm:text-4xl lg:text-5xl"
            >
              Every detail. One connected vision.
            </h2>
          </div>
          {/*<Link*/}
          {/*  href="/#capabilities"*/}
          {/*  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"*/}
          {/*>*/}
          {/*  Explore our capabilities*/}
          {/*  <ArrowOutwardIcon*/}
          {/*    fontSize="inherit"*/}
          {/*    aria-hidden*/}
          {/*    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"*/}
          {/*  />*/}
          {/*</Link>*/}
        </div>

        <ul className="mt-10 grid gap-10 sm:mt-12 md:grid-cols-3 md:gap-8">
          {PILLARS.map(({ id, title, description, image, imageAlt }) => (
            <li key={id}>
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/10">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
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
