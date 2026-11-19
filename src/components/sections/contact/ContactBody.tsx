import { CONTENT } from "@/src/lib/constants/layout";
import { SITE } from "@/src/lib/constants/footer";

export default function ContactBody() {
  return (
    <section
      id="enquiry"
      aria-labelledby="enquiry-heading"
      className="bg-cream py-8 md:py-16"
    >
      <div
        className={`${CONTENT} grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16`}
      >
        {/* Office details - Left */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-4xl">
            Our office
          </h2>

          <dl className="mt-6 flex flex-col gap-5">
            {SITE.contact.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {label}
                </dt>
                <dd className="mt-1.5 text-xs text-black/70 md:text-base">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Map - Right */}
        <div>
          <div className="aspect-[2/1] w-full overflow-hidden rounded-sm bg-[#e8e8e1]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.799644250128!2d36.76993397623802!3d-1.2947572986929274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bc88a8581b9%3A0xe6a8ed978ecd84ef!2sCatholic%20Nurses%20Association%20Building!5e0!3m2!1sen!2ske!4v1794816103996!5m2!1sen!2ske"
              title="IGA Events office location"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
