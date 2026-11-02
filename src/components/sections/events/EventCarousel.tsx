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
  "grid size-11 place-items-center border border-secondary text-black transition-colors hover:bg-secondary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-30 sm:size-10 motion-reduce:transition-none";

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

  // Hide the arrows when every card already fits on screen
  const canScroll = !(edges.start && edges.end);

  return (
    <div role="region" aria-roledescription="carousel" aria-label={title}>
      <div className="flex flex-wrap items-baseline justify-start gap-x-4 gap-y-1 md:justify-center">
        <h3 className="font-heading text-xl font-semibold text-primary sm:text-2xl lg:text-3xl">
          {title}
        </h3>
        <span className="text-sm text-black/70">
          {count} {count === 1 ? "event" : "events"}
        </span>
      </div>

      <ul
        ref={trackRef}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>

      <div
        className={`justify-end gap-2 pt-6 sm:pt-8 ${canScroll ? "flex" : "hidden"}`}
      >
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
  );
}
