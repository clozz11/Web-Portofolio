"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SlideItem {
  src: string;
  alt: string;
  caption: string;
}

interface ProjectSliderProps {
  slides: SlideItem[];
}

export default function ProjectSlider({ slides }: ProjectSliderProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-forest-900 group/slider"
         style={{ border: "1px solid rgba(0,232,122,0.1)" }}>
      {/* ── Slides ── */}
      <div className="relative h-64 sm:h-[22rem] lg:h-[26rem] w-full overflow-hidden bg-black">
        {slides.map((slide, idx) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === current
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain"
            />
            {/* Caption overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 z-10">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-green-400/15 text-green-400 border border-green-400/25">
                {idx + 1} / {slides.length} — {slide.caption}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Prev / Next Buttons ── */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Foto Sebelumnya"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-xl bg-black/60 hover:bg-green-400 text-white hover:text-black border border-white/10 hover:border-green-400 backdrop-blur-sm transition-all duration-200 cursor-pointer opacity-0 group-hover/slider:opacity-100"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Foto Selanjutnya"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-xl bg-black/60 hover:bg-green-400 text-white hover:text-black border border-white/10 hover:border-green-400 backdrop-blur-sm transition-all duration-200 cursor-pointer opacity-0 group-hover/slider:opacity-100"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* ── Dot Indicators ── */}
      <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-[3px] px-1.5 py-0.5 rounded-full bg-black/50 border border-white/8 backdrop-blur-sm">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            aria-label={`Ke slide ${idx + 1}`}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? "w-2.5 h-[5px] bg-green-400"
                : "w-[5px] h-[5px] bg-slate-600 hover:bg-green-400/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
