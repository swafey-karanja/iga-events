import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NAV_LINKS } from "@/src/lib/constants/navigation";
import { SITE, SOCIAL_LINKS } from "@/src/lib/constants/footer";

const SOCIAL_ICONS = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
} as const;

const headingClass = "text-sm uppercase tracking-wide text-white/60";
const focusClass =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function Footer() {
  return (
    <footer className="bg-black/95 text-white">
      <div className="mx-auto w-full max-w-10/12 grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_1fr] lg:py-16">
        <div>
          <Link
            href="#home"
            aria-label="Convene home"
            className={`inline-flex items-center gap-1.5 font-heading text-4xl font-semibold tracking-tight lg:text-5xl ${focusClass}`}
          >
            convene
            <span aria-hidden className="mt-4 size-2.5 bg-secondary" />
          </Link>
          <p className="mt-8 max-w-56 text-lg leading-snug">{SITE.tagline}</p>
          <a
            href={SITE.profilePdf}
            download
            className={`group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary ${focusClass}`}
          >
            Download company profile
            <span className="sr-only">(PDF)</span>
            <ArrowOutwardIcon
              fontSize="inherit"
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </a>
          <p className="mt-6 text-xs text-white/60">
            Placeholder document · PDF to be supplied
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className={headingClass}>Explore</h2>
          <ul className="mt-6 flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-colors hover:text-secondary motion-reduce:transition-none ${focusClass}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Get in touch</h2>
          <dl className="mt-6 flex flex-col gap-5">
            {SITE.contact.map(({ label, value }) => (
              <div key={label}>
                <dt className={headingClass}>{label}</dt>
                <dd className="mt-1.5 text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className={headingClass}>Follow</h2>
          <ul className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map(({ label, href }) => {
              const Icon = SOCIAL_ICONS[label];
              return (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="grid size-11 place-items-center border border-white/15 transition-colors hover:border-secondary hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                  >
                    <Icon fontSize="small" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-white/60">
            LinkedIn · Instagram
            <br />
            [URLs to be added]
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-10/12 flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>{SITE.copyright}</p>
          <p>Brand and contact details are editable placeholders.</p>
        </div>
      </div>
    </footer>
  );
}
