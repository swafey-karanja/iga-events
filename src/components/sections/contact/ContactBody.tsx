import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ContactForm from "@/src/components/sections/contact/ContactForm";
import { CONTENT } from "@/src/lib/constants/layout";
import { SITE } from "@/src/lib/constants/footer";
import { OFFICE_MAP_URL } from "@/src/lib/data/contact";

export default function ContactBody() {
  return (
    <section
      id="enquiry"
      aria-labelledby="enquiry-heading"
      className="bg-cream py-8 md:py-16"
    >
      <div
        className={`${CONTENT} grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16`}
      >
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
            Our office
          </h2>
          <dl className="mt-6 flex flex-col gap-5">
            {SITE.contact.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {label}
                </dt>
                <dd className="mt-1.5 text-xs md:text-base text-black/70">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={OFFICE_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            View larger map
            <span className="sr-only">(opens in a new tab)</span>
            <ArrowOutwardIcon
              fontSize="inherit"
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </a>

          {/* TODO: replace with a map embed once the address is known */}
          <div className="mt-6 grid aspect-[4/3] place-items-center bg-[#e8e8e1] text-sm text-black/50">
            [Map to be added]
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2
            id="enquiry-heading"
            className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl"
          >
            Send us a message
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
