"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HeroSlide from "@/src/components/sections/hero/HeroSlide";
import { useCarousel } from "@/src/hooks/useCarousel";
import type { HeroEvent } from "@/src/lib/data/events";
import { toLoopItems } from "@/src/lib/utils/loop";

const controlClass =
  "z-10 grid size-10 place-items-center bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-secondary hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none";

export default function HeroCarousel({ events }: { events: HeroEvent[] }) {
  const {
    index,
    position,
    animate,
    isPlaying,
    next,
    prev,
    goTo,
    toggle,
    pauseProps,
  } = useCarousel(events.length);
  const slides = toLoopItems(events);

  return (
    <div
      className="relative flex-1"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured events"
      {...pauseProps}
    >
      <div className="overflow-hidden">
        <div
          className={`flex ${
            animate
              ? "transition-transform duration-700 ease-in-out motion-reduce:transition-none"
              : ""
          }`}
          style={{ transform: `translateX(-${position * 100}%)` }}
          aria-live={isPlaying ? "off" : "polite"}
        >
          {slides.map(({ item: event, key, realIndex, isClone }) => {
            const active = !isClone && realIndex === index;
            // Clones never render headings, to avoid duplicate headings in the HTML.
            const Heading = isClone ? "p" : realIndex === 0 ? "h1" : "h2";
            return (
              <div
                key={key}
                role="group"
                aria-roledescription="slide"
                aria-label={`${realIndex + 1} of ${events.length}`}
                aria-hidden={!active}
                inert={!active}
                className="w-full shrink-0"
              >
                <HeroSlide event={event} Heading={Heading} />
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className={`${controlClass} absolute bottom-4 left-4 lg:bottom-auto lg:left-3 lg:top-1/2 lg:-translate-y-1/2`}
      >
        <ChevronLeftIcon aria-hidden />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className={`${controlClass} absolute bottom-4 right-4 lg:bottom-auto lg:right-3 lg:top-1/2 lg:-translate-y-1/2`}
      >
        <ChevronRightIcon aria-hidden />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center">
        <button
          type="button"
          onClick={toggle}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          className="grid size-8 place-items-center focus-visible:outline-2 focus-visible:outline-white"
        >
          {isPlaying ? (
            <PauseIcon fontSize="small" aria-hidden />
          ) : (
            <PlayArrowIcon fontSize="small" aria-hidden />
          )}
        </button>
        {events.map((event, i) => (
          <button
            key={event.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className="group p-2 focus-visible:outline-2 focus-visible:outline-white"
          >
            <span
              className={`block h-1 transition-all duration-300 motion-reduce:transition-none ${
                i === index
                  ? "w-250 bg-secondary"
                  : "w-80 bg-white/60 group-hover:bg-white"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
