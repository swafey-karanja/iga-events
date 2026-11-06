import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CONTENT } from "@/src/lib/constants/layout";
import { SOCIAL_LINKS } from "@/src/lib/constants/footer";
import Image from "next/image";

const SOCIAL_ICONS = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
} as const;

export default function ContactHero() {
  return (
    <section aria-labelledby="contact-heading" className="text-white">
      <Image
        src="https://plus.unsplash.com/premium_photo-1661645672144-de1e08be7473?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
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

        <ul className="mt-8 flex gap-3">
          {SOCIAL_LINKS.map(({ label, href }) => {
            const Icon = SOCIAL_ICONS[label];
            return (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="grid size-8 md:size-11 place-items-center border border-white/30 transition-colors hover:border-white hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                >
                  <Icon fontSize="small" aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
