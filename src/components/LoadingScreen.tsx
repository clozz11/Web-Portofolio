"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.2s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    // Fully remove after 1.8s (1.2s wait + 0.6s fade)
    const removeTimer = setTimeout(() => setVisible(false), 1800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-forest-950 transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        {/* Logo animation */}
        <div className="relative">
          <span
            className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight loading-logo-reveal"
          >
            CAZ<span className="text-green-400">.</span>
          </span>
          {/* Glow behind logo */}
          <div
            className="absolute inset-0 -z-10 blur-2xl opacity-60"
            style={{ background: "radial-gradient(circle, rgba(0,232,122,0.3) 0%, transparent 70%)" }}
          />
        </div>

        {/* Loading bar */}
        <div className="w-32 h-0.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-green-400 rounded-full loading-bar" />
        </div>
      </div>
    </div>
  );
}
