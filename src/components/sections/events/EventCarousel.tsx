"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type EventCarouselProps = {
  title: string;
  count: number;
  children: ReactNode;
};

const buttonClass =
  "grid size-10 place-items-center border border-primary text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-30 motion-reduce:transition-none";

export default function EventCarousel({
  title,
  count,
  children,
}: EventCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const start = el.scrollLeft <= 1;
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
    setEdges((prev) =>
      prev.start === start && prev.end === end ? prev : { start, end },
    );
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [update]);

  const scrollPage = (direction: 1 | -1) => {
    const el = trackRef.current;
    el?.scrollBy({ left: direction * el.clientWidth });
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={title}>
      <div className="flex items-end justify-between gap-4 border-t-2 border-primary pt-4">
        <div className="flex flex-wrap items-baseline gap-x-4">
          <h3 className="font-heading text-2xl font-semibold text-primary lg:text-3xl">
            {title}
          </h3>
          <span className="text-sm text-black/70">
            {count} {count === 1 ? "event" : "events"}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollPage(-1)}
            disabled={edges.start}
            aria-label={`Previous ${title.toLowerCase()}`}
            className={buttonClass}
          >
            <ChevronLeftIcon aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollPage(1)}
            disabled={edges.end}
            aria-label={`Next ${title.toLowerCase()}`}
            className={buttonClass}
          >
            <ChevronRightIcon aria-hidden />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  );
}
