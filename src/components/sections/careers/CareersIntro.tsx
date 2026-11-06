import DoneIcon from "@mui/icons-material/Done";
import { BENEFITS } from "@/src/lib/data/careers";
import { CONTENT } from "@/src/lib/constants/layout";

export default function CareersIntro() {
  return (
    <section aria-labelledby="life-heading" className="bg-cream py-8 md:py-16">
      <div className={`${CONTENT} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
            <span aria-hidden className="size-1.5 bg-primary" />
            Life with us
          </p>
          <h2
            id="life-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            The people behind the experience
          </h2>
          <p className="mt-6 max-w-xl text-xs md:text-base leading-relaxed text-black/70">
            Interested in the people behind the experience? We welcome
            expressions of interest for future opportunities. Share your profile
            and the kind of work you’d love to be part of.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
            Benefits{" "}
            <span className="font-normal text-black/50">(placeholders)</span>
          </h3>
          <ul className="mt-4 space-y-3">
            {BENEFITS.map(({ id, title }) => (
              <li
                key={id}
                className="flex items-center gap-3 text-xs md:text-base"
              >
                <DoneIcon
                  aria-hidden
                  fontSize="small"
                  className="text-secondary"
                />
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
