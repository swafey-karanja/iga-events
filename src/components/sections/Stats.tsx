import { getStats } from "@/src/lib/data/stats";

export default async function Stats() {
  const stats = await getStats();
  const hasPlaceholders = stats.some((s) => !s.value);

  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="bg-black/95 py-16 text-white"
    >
      <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-9/12 xl:px-0">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          <span aria-hidden className="size-1.5 bg-secondary" />A broader
          perspective
        </p>
        <h2
          id="stats-heading"
          className="mt-3 text-2xl font-medium tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          The scale behind <br className="hidden md:block" />
          the experience.
        </h2>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:mt-14 sm:grid-cols-3 sm:gap-y-12 lg:mt-20 2xl:grid-cols-6">
          {stats.map(({ id, label, value }) => (
            <div
              key={id}
              className="flex flex-col-reverse justify-end gap-3 sm:gap-4"
            >
              <dd className="flex justify-center">
                {value ? (
                  <span className="font-heading text-3xl font-semibold text-secondary sm:text-4xl xl:text-5xl">
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
              <dt className="text-balance text-center text-sm font-semibold sm:text-lg">
                {label}
              </dt>
            </div>
          ))}
        </dl>

        {hasPlaceholders && (
          <p className="mt-10 text-xs text-white/80 sm:mt-12">
            Verified company figures to be added
          </p>
        )}
      </div>
    </section>
  );
}
