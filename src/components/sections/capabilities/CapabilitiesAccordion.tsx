"use client";

import Image from "next/image";
import { useState } from "react";
import type { CAPABILITIES } from "@/src/lib/data/capablities";

type Props = { items: typeof CAPABILITIES };

export default function CapabilitiesAccordion({ items }: Props) {
  // First card is open on load. Nothing resets it on mouse leave, so the last one stays open.
  const [active, setActive] = useState(0);

  return (
    <ul className="mt-10 flex flex-col gap-3 sm:mt-12 lg:mt-16 lg:h-128 lg:flex-row">
      {items.map(({ id, title, description, image, imageAlt }, i) => {
        const open = i === active;
        const descId = `capability-${id}`;
        const open_ = () => setActive(i);

        return (
          <li
            key={id}
            className={`relative overflow-hidden rounded-3xl bg-primary text-white transition-[height,flex-grow] duration-500 ease-out motion-reduce:transition-none lg:h-auto lg:basis-0 ${
              open ? "h-80 lg:grow-[6]" : "h-20 lg:grow-[1]"
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/30"
            />

            <span
              aria-hidden
              className="absolute right-5 top-4 font-heading text-3xl lg:left-6 lg:right-auto lg:top-5 lg:text-4xl"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Collapsed label: horizontal on mobile, vertical on desktop */}
            <span
              aria-hidden
              className={`absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap font-heading text-lg font-semibold transition-opacity duration-300 lg:inset-x-0 lg:bottom-6 lg:left-0 lg:top-auto lg:mx-auto lg:w-fit lg:translate-y-0 lg:rotate-180 lg:text-xl lg:[writing-mode:vertical-rl] ${
                open ? "opacity-0" : "opacity-100"
              }`}
            >
              {title}
            </span>

            {/* Expanded content. Fixed width on desktop so text doesn't reflow while resizing */}
            <div
              className={`absolute bottom-0 left-0 w-full p-5 transition-opacity duration-300 lg:w-[26rem] lg:p-6 ${
                open ? "opacity-100 delay-200" : "pointer-events-none opacity-0"
              }`}
            >
              <span
                aria-hidden
                className="block font-heading text-2xl font-semibold lg:text-3xl"
              >
                {title}
              </span>
              <p
                id={descId}
                aria-hidden={!open}
                className="mt-2 text-sm leading-relaxed text-white/85"
              >
                {description}
              </p>
            </div>

            {/* Whole card is the control: hover, focus and tap all open it */}
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={descId}
                onMouseEnter={open_}
                onFocus={open_}
                onClick={open_}
                className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
              >
                <span className="sr-only">{title}</span>
              </button>
            </h3>
          </li>
        );
      })}
    </ul>
  );
}
