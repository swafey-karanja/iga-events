"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

// Must exceed the slide transition (700ms) plus the longest info-bar stagger (225ms).
const SNAP_DELAY = 1000;

function subscribe(callback: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

export function useCarousel(length: number, interval = 5000) {
  // Track position: 1..length are real slides, 0 and length + 1 are clones.
  const [position, setPosition] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [userPlaying, setUserPlaying] = useState<boolean | null>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const index = (position - 1 + length) % length; // real slide index
  const isPlaying = userPlaying ?? !reducedMotion;
  const autoplay = isPlaying && !hovered && !focused && length > 1;

  const move = useCallback(
    (delta: number) => {
      // Ignore input while resting on a clone, until it snaps back.
      setPosition((p) => (p < 1 || p > length ? p : p + delta));
      setAnimate(true);
    },
    [length],
  );

  const next = useCallback(() => move(1), [move]);
  const prev = useCallback(() => move(-1), [move]);
  const goTo = useCallback((i: number) => {
    setPosition(i + 1);
    setAnimate(true);
  }, []);

  // After landing on a clone, jump (without animation) to the identical real slide.
  useEffect(() => {
    if (position >= 1 && position <= length) return;
    const id = window.setTimeout(() => {
      setAnimate(false);
      setPosition(position === 0 ? length : 1);
    }, SNAP_DELAY);
    return () => window.clearTimeout(id);
  }, [position, length]);

  // Keyed on `position`, so manual navigation restarts the 5s timer.
  useEffect(() => {
    if (!autoplay) return;
    const id = window.setTimeout(next, interval);
    return () => window.clearTimeout(id);
  }, [autoplay, position, interval, next]);

  return {
    index,
    position,
    animate,
    isPlaying,
    next,
    prev,
    goTo,
    toggle: () => setUserPlaying(!isPlaying),
    pauseProps: {
      onPointerEnter: () => setHovered(true),
      onPointerLeave: () => setHovered(false),
      // Only keyboard focus pauses, so a mouse click on an arrow doesn't freeze autoplay.
      onFocus: (e: React.FocusEvent) =>
        setFocused(e.target.matches(":focus-visible")),
      onBlur: () => setFocused(false),
    },
  };
}
