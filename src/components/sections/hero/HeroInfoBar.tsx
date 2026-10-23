import type { HeroEvent } from "@/src/lib/data/events";
import { toLoopItems } from "@/src/lib/utils/loop";

const FIELDS = [
  { label: "Date", key: "date" },
  { label: "Venue", key: "venue" },
  { label: "City", key: "city" },
  { label: "Country", key: "country" },
] as const satisfies readonly { label: string; key: keyof HeroEvent }[];

type HeroInfoBarProps = {
  events: readonly HeroEvent[];
  index: number;
  position: number;
  animate: boolean;
};

export default function HeroInfoBar({
  events,
  index,
  position,
  animate,
}: HeroInfoBarProps) {
  const slides = toLoopItems(events);

  return (
    <div className="bg-primary">
      <dl className="mx-auto container grid grid-cols-2 gap-x-6 gap-y-5 py-7 lg:grid-cols-4">
        {FIELDS.map(({ label, key }, col) => (
          <div key={key}>
            <dt className="text-xs uppercase tracking-wide text-white/80">
              {label}
            </dt>
            <dd className="mt-2 overflow-hidden">
              <div
                className={`flex ${
                  animate
                    ? "transition-transform duration-700 ease-in-out motion-reduce:transition-none"
                    : ""
                }`}
                style={{
                  transform: `translateX(-${position * 100}%)`,
                  transitionDelay: animate ? `${col * 75}ms` : undefined,
                }}
              >
                {slides.map(({ item, key: slideKey, realIndex, isClone }) => (
                  <span
                    key={slideKey}
                    aria-hidden={isClone || realIndex !== index}
                    className="w-full shrink-0 text-sm"
                  >
                    {item[key]}
                  </span>
                ))}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
