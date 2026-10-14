"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches IntersectionObserver to all `.reveal`, `.reveal-left`, `.reveal-right`
 * children inside the container ref, adding the `.revealed` class when they
 * enter the viewport.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}
