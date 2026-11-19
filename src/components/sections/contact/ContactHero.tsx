import Link from "next/link";
import { CONTENT } from "@/src/lib/constants/layout";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-primary text-white"
    >
      <Image
        src="https://images.unsplash.com/photo-1768839720467-90cc32edeb26?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-black/70 via-primary/70 to-primary/90"
      />
      <div
        className={`${CONTENT} pb-12 pt-28 sm:pb-16 sm:pt-36 xl:pb-20 xl:pt-44 backdrop-blur-xs`}
      >
        <nav aria-label="Breadcrumb" className="text-xs text-white/70">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page">Contact us</li>
          </ol>
        </nav>

        <h1
          id="contact-heading"
          className="mt-6 font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Contact us
        </h1>
      </div>
    </section>
  );
}
