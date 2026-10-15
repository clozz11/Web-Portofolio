"use client";

import { useEffect } from "react";

/**
 * SmoothScroll — intercepts anchor href="#..." clicks.
 * Nav links use a snappy 800ms ease, other anchors use 1200ms.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const scrollTo = (targetY: number, duration: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      let startTime: number | null = null;

      const step = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (elapsed < duration) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();

      const targetY = el.getBoundingClientRect().top + window.scrollY - 80;

      // Nav bar links → snappy 800ms, other anchors (CTA buttons etc) → 1200ms
      const isNavLink = anchor.closest("header") !== null;
      scrollTo(targetY, isNavLink ? 800 : 1200);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
