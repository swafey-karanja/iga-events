import JobItem from "@/src/components/sections/careers/JobItem";
import type { Job } from "@/src/lib/data/careers";
import { CONTENT } from "@/src/lib/constants/layout";

export default function CareersJobs({ jobs }: { jobs: Job[] }) {
  return (
    <section
      id="roles"
      aria-labelledby="roles-heading"
      className="bg-white py-16 lg:py-24"
    >
      <div className={CONTENT}>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          <span aria-hidden className="size-1.5 bg-primary" />
          Open roles
        </p>
        <h2
          id="roles-heading"
          className="mt-3 text-3xl font-medium tracking-tight text-primary sm:text-4xl lg:text-5xl"
        >
          {jobs.length > 0 ? "Find your place" : "No current vacancies listed"}
        </h2>

        {jobs.length > 0 ? (
          <ul className="mt-8 space-y-4 sm:mt-10">
            {jobs.map((job) => (
              <JobItem key={job.id} job={job} />
            ))}
          </ul>
        ) : (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-black/70">
            We don’t have any open roles right now, but we’d still love to hear
            from you. Register your interest below.
          </p>
        )}
      </div>
    </section>
  );
}
