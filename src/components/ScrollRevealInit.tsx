"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal initializer.
 * Observes ALL .reveal-on-scroll elements and adds .is-visible
 * when they enter the viewport → triggers CSS transition.
 */
export default function ScrollRevealInit() {
  useEffect(() => {
    const selector = ".reveal-on-scroll";

    const runObserver = () => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>(selector)
      );
      if (targets.length === 0) return undefined;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );

      targets.forEach((el) => io.observe(el));
      return io;
    };

    let io = runObserver();

    // Re-run after hydration to catch late-mounted elements
    const timer = setTimeout(() => {
      io?.disconnect();
      io = runObserver();
    }, 150);

    return () => {
      clearTimeout(timer);
      io?.disconnect();
    };
  }, []);

  return null;
}
