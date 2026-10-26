import { getStats } from "@/src/lib/data/stats";

export default async function Stats() {
  const stats = await getStats();
  const hasPlaceholders = stats.some((s) => !s.value);

  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="bg-primary py-16 text-white lg:py-24"
    >
      <div className="mx-auto max-w-10/12">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          <span aria-hidden className="size-1.5 bg-secondary" />A broader
          perspective
        </p>
        <h2
          id="stats-heading"
          className="mt-3 text-4xl font-medium tracking-tight lg:text-7xl"
        >
          The scale behind <br />
          the experience.
        </h2>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:mt-20 lg:grid-cols-3 lg:gap-y-16">
          {stats.map(({ id, label, value }) => (
            <div key={id} className="flex flex-col-reverse justify-end gap-4">
              <dt className="text-sm">{label}</dt>
              <dd>
                {value ? (
                  <span className="font-heading text-4xl font-semibold lg:text-5xl">
                    {value}
                  </span>
                ) : (
                  <>
                    <span aria-hidden className="block h-1 w-20 bg-white" />
                    <span className="sr-only">Figure to be added</span>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>

        {hasPlaceholders && (
          <p className="mt-12 text-xs text-white/80">
            Verified company figures to be added
          </p>
        )}
      </div>
    </section>
  );
}
