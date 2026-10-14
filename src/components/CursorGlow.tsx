"use client";

import { useEffect, useRef } from "react";

/**
 * Follows the mouse cursor with a soft radial glow.
 * Hidden on touch/mobile devices.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const el = glowRef.current;
    if (!el) return;

    let rafId: number;
    let mouseX = -500;
    let mouseY = -500;
    let curX = -500;
    let curY = -500;

    const animate = () => {
      curX += (mouseX - curX) * 0.08;
      curY += (mouseY - curY) * 0.08;
      el.style.left = `${curX}px`;
      el.style.top  = `${curY}px`;
      rafId = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="hidden md:block cursor-glow"
    />
  );
}
