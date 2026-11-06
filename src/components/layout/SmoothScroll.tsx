"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const start = () => {
      // Reuse the CSS scroll-padding so anchor links clear the fixed navbar
      const padding =
        parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop,
        ) || 0;

      lenis = new Lenis({
        autoRaf: true,
        anchors: { offset: -padding },
        prevent: (node) => node.closest(".MuiModal-root") !== null,

        // --- tuning ---
        lerp: 0.08, // smoothness / inertia
        wheelMultiplier: 1, // wheel speed
        // syncTouch: false,   // leave off to keep native touch momentum
      });
    };

    const stop = () => {
      lenis?.destroy();
      lenis = null;
    };

    // Off for reduced-motion users, and reacts if the setting changes
    const sync = () => {
      stop();
      if (!query.matches) start();
    };

    sync();
    query.addEventListener("change", sync);
    return () => {
      query.removeEventListener("change", sync);
      stop();
    };
  }, []);

  return null;
}
