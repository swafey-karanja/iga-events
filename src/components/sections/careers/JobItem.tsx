import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { Job } from "@/src/lib/data/careers";

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
        {title}
      </h4>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs md:text-sm leading-relaxed text-black/70">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function JobItem({ job }: { job: Job }) {
  const {
    title,
    department,
    location,
    type,
    summary,
    responsibilities,
    requirements,
    applyUrl,
    isSample,
  } = job;

  return (
    <li className="relative">
      <details className="job-details group rounded-2xl border border-black/10 bg-white">
        <summary className="flex cursor-pointer list-none items-start gap-4 rounded-2xl p-5 pr-28 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary sm:p-6 sm:pr-40 [&::-webkit-details-marker]:hidden">
          <ExpandMoreIcon
            aria-hidden
            className="mt-0.5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
          />
          <div>
            <h3 className="font-heading text-md font-semibold text-primary sm:text-xl">
              {title}
            </h3>
            <p className="mt-1 text-xs md:text-sm text-black/60">
              {department} · {location} · {type}
            </p>
            {isSample && (
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-black/50">
                Sample role
              </p>
            )}
          </div>
        </summary>

        <div className="space-y-6 px-5 pb-6 pl-15 sm:px-6 sm:pb-8 sm:pl-16">
          <p className="text-xs md:text-sm leading-relaxed text-black/70">
            {summary}
          </p>
          <List title="Responsibilities" items={responsibilities} />
          <List title="Requirements" items={requirements} />
        </div>
      </details>

      <a
        href={applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 top-4 z-10 rounded-3xl bg-secondary px-4 py-2 text-xs md:text-sm font-semibold text-white transition-colors hover:bg-[#0e8a50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:right-6 sm:top-5 sm:px-5 motion-reduce:transition-none"
      >
        Apply
        <span className="sr-only"> for {title} (opens in a new tab)</span>
      </a>
    </li>
  );
}
