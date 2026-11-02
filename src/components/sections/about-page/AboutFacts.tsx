import { FACTS } from "@/src/lib/data/about";
import { CONTENT } from "@/src/lib/constants/layout";

export default function AboutFacts() {
  const hasPlaceholders = FACTS.some((f) => !f.value);

  return (
    <section
      aria-labelledby="facts-heading"
      className="bg-primary py-16 text-white lg:py-24"
    >
      <div className={CONTENT}>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          <span aria-hidden className="size-1.5 bg-secondary" />
          At a glance
        </p>
        <h2
          id="facts-heading"
          className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
        >
          The people and places behind us
        </h2>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:mt-12 lg:grid-cols-4">
          {FACTS.map(({ id, label, value }) => (
            <div key={id} className="flex flex-col-reverse justify-end gap-3">
              <dt className="text-sm font-semibold sm:text-base ">{label}</dt>
              <dd>
                {value ? (
                  <span className="font-heading text-3xl font-semibold text-secondary sm:text-4xl">
                    {value}
                  </span>
                ) : (
                  <>
                    <span
                      aria-hidden
                      className="block h-1 w-16 bg-white sm:w-20"
                    />
                    <span className="sr-only">Figure to be added</span>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>

        {hasPlaceholders && (
          <p className="mt-10 text-xs text-white/80">
            Verified company details to be added
          </p>
        )}
      </div>
    </section>
  );
}
