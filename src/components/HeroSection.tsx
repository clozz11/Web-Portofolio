"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

const GITHUB_URL = "https://github.com/clozz11";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-center pt-24 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Hero radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 40% 50%, rgba(0,232,122,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">

        {/* ══════════ LEFT: Text content ══════════ */}
        <div className="order-2 lg:order-1 w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* ── Availability Badge ── */}
          <div className="animate-badge inline-flex items-center gap-2.5 mb-7 sm:mb-9 px-4 py-2 rounded-full border border-green-400/25 bg-green-400/5 text-green-400 text-xs sm:text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-400 dot-pulse" />
            Available for Internship &amp; Collaboration
          </div>

          {/* ── University line ── */}
          <div className="text-sm text-slate-500 leading-relaxed mb-5">
            <span className="text-slate-300 font-semibold">Computer Science</span>
            &nbsp;·&nbsp;
            <span className="text-green-400 font-semibold">BINUS University</span>
            <br />
            <span className="text-slate-600 text-xs">Malang, East Java, Indonesia · GMT+7</span>
          </div>

          {/* ── Hero Name ── */}
          <h1
            className="font-heading font-extrabold leading-[0.88] tracking-tighter text-white mb-6 sm:mb-7"
            style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)" }}
          >
            <span className="hero-line"><span>CARLOS</span></span>
            <span className="hero-line text-green-400"><span>ACHANTA</span></span>
            <span className="hero-line"><span>ZAKKY</span></span>
          </h1>

          {/* ── Subtitle ── */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10">
            Backend Developer focused on building{" "}
            <span className="text-slate-200 font-medium">robust RESTful APIs</span>,
            scalable backend architectures, and efficient relational database systems.
          </p>

          {/* ── CTA Buttons ── */}
          <div className="hero-cta-group flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 sm:mb-12">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-green-400 text-black font-bold text-sm hover:bg-green-500 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
              style={{ boxShadow: "0 0 30px rgba(0,232,122,0.3)" }}
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:carloszakky27@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-green-400/25 text-green-400 font-semibold text-sm hover:bg-green-400/8 hover:border-green-400/45 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </div>

          {/* ── Stats — centered & balanced ── */}
          <div className="pt-8 border-t border-white/5">
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-10">
              <div className="animate-stats stats-delay-1 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold font-heading stat-number">2+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-widest">Projects</div>
              </div>

              <div className="w-px h-8 bg-white/8" />

              <div className="animate-stats stats-delay-2 text-center relative group cursor-default">
                <div className="text-3xl sm:text-4xl font-extrabold font-heading stat-number">20+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-widest">API Endpoints</div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 px-3 py-2 rounded-lg bg-forest-800 border border-green-400/15 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
                  Auth, product, cart, order, stock &amp; AI detection endpoints
                </div>
              </div>

              <div className="w-px h-8 bg-white/8" />

              <div className="animate-stats stats-delay-3 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold font-heading stat-number">3+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-widest">Leadership</div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════ RIGHT: Photo + decorative ornaments ══════════ */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end items-center">
          {/* Decorative ornaments */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* Soft radial glow behind photo */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(0,232,122,0.14) 0%, transparent 70%)" }}
            />
            {/* Rotating dashed ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] sm:w-[23rem] sm:h-[23rem] rounded-full border border-dashed border-green-400/15 hero-ring-slow" />
            {/* Inner thin ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16rem] h-[16rem] sm:w-[18rem] sm:h-[18rem] rounded-full border border-green-400/10" />
            {/* Floating accent dots */}
            <span className="hidden sm:block absolute top-6 right-10 w-3 h-3 rounded-full bg-green-400/70 particle" style={{ ["--duration" as string]: "7s", ["--delay" as string]: "0s" }} />
            <span className="hidden sm:block absolute bottom-10 left-6 w-2 h-2 rounded-full bg-green-400/50 particle" style={{ ["--duration" as string]: "6s", ["--delay" as string]: "1.2s" }} />
            <span className="hidden sm:block absolute bottom-20 right-4 w-1.5 h-1.5 rounded-full bg-green-400/60 particle" style={{ ["--duration" as string]: "8s", ["--delay" as string]: "0.6s" }} />
            {/* Small square accent */}
            <span className="hidden lg:block absolute top-14 left-2 w-5 h-5 rounded-md border border-green-400/25 rotate-12 particle" style={{ ["--duration" as string]: "9s", ["--delay" as string]: "0.3s" }} />
          </div>

          {/* Photo frame */}
          <div className="relative animate-float">
            <div
              className="relative w-52 h-60 sm:w-64 sm:h-72 lg:w-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-green-400/35 glow-pulse-img"
              style={{ boxShadow: "0 0 50px rgba(0,232,122,0.28), 0 0 100px rgba(0,232,122,0.12)" }}
            >
              <Image
                src="/profile-avatar.jpg"
                alt="Carlos Achanta Zakky"
                fill
                priority
                sizes="(max-width: 1024px) 16rem, 18rem"
                className="object-cover object-top"
              />
            </div>

            {/* Online indicator */}
            <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-forest-950/80 border border-green-400/25 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 dot-pulse" />
              Online
            </span>

            {/* Source Code button — bottom right of photo */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="View source code on GitHub"
              className="absolute -bottom-4 right-2 sm:right-3 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest-900/90 border border-green-400/30 text-green-400 text-xs font-bold backdrop-blur-sm hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/60 active:scale-[0.97] transition-all duration-200 shadow-lg"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Source Code
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
