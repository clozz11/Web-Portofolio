"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal initializer.
 * Must be rendered inside the page (client boundary).
 * Observes ALL .reveal / .reveal-left / .reveal-right elements
 * and adds .revealed when they enter the viewport.
 */
export default function ScrollRevealInit() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right";

    const runObserver = () => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>(selectors)
      );

      if (targets.length === 0) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("revealed");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -20px 0px" }
      );

      targets.forEach((el) => io.observe(el));
      return io;
    };

    // Run once DOM is fully painted
    let io = runObserver();

    // Also re-run after a short delay to catch any late-hydrated elements
    const timer = setTimeout(() => {
      io?.disconnect();
      io = runObserver();
    }, 200);

    return () => {
      clearTimeout(timer);
      io?.disconnect();
    };
  }, []);

  return null;
}
