"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-center pt-24 pb-20 overflow-hidden"
    >
      {/* Hero radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 40% 50%, rgba(0,232,122,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl">
        {/* ── Availability Badge ── */}
        <div className="animate-badge inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-green-400/25 bg-green-400/5 text-green-400 text-sm font-semibold">
          <span className="w-2 h-2 rounded-full bg-green-400 dot-pulse" />
          Available for Internship &amp; Collaboration
        </div>

        {/* ── Profile Photo + University ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
          <div className="relative flex-shrink-0 animate-float">
            <div
              className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden border-2 border-green-400/35"
              style={{ boxShadow: "0 0 50px rgba(0,232,122,0.3), 0 0 100px rgba(0,232,122,0.12)" }}
            >
              <Image
                src="/profile-avatar.jpg"
                alt="Carlos Achanta Zakky"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            {/* Online indicator */}
            <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-green-400 border-2 border-forest-950 dot-pulse" />
          </div>

          <div className="text-sm text-slate-500 leading-relaxed">
            <span className="text-slate-300 font-semibold">Computer Science</span>
            &nbsp;·&nbsp;
            <span className="text-green-400 font-semibold">BINUS University</span>
            <br />
            <span className="text-slate-600 text-xs">Malang, East Java, Indonesia · GMT+7</span>
          </div>
        </div>

        {/* ── Hero Name (line-by-line reveal animation) ── */}
        <h1 className="font-heading font-extrabold leading-[0.88] tracking-tighter text-white mb-8"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}>
          <span className="hero-line"><span>CARLOS</span></span>
          <span className="hero-line text-green-400"><span>ACHANTA</span></span>
          <span className="hero-line"><span>ZAKKY</span></span>
        </h1>

        {/* ── Subtitle ── */}
        <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-10">
          Backend Developer focused on building{" "}
          <span className="text-slate-200 font-medium">robust RESTful APIs</span>,
          scalable backend architectures, and efficient relational database systems.
        </p>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-400 text-black font-bold text-sm hover:bg-green-500 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            style={{ boxShadow: "0 0 30px rgba(0,232,122,0.3)" }}
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:carloszakky27@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-green-400/25 text-green-400 font-semibold text-sm hover:bg-green-400/8 hover:border-green-400/45 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </a>
        </div>

        {/* ── Stats Row ── */}
        <div className="flex flex-wrap items-center gap-8 sm:gap-12 pt-8 border-t border-white/5">
          <div className="animate-stats stats-delay-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading stat-number">2+</div>
            <div className="text-xs text-slate-500 mt-1.5 uppercase tracking-widest">Full-Stack Projects</div>
          </div>

          <div className="w-px h-10 bg-white/8 hidden sm:block" />

          <div className="animate-stats stats-delay-2 relative group cursor-default">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading stat-number">20+</div>
            <div className="text-xs text-slate-500 mt-1.5 uppercase tracking-widest">API Endpoints</div>
            {/* Tooltip on hover */}
            <div className="absolute bottom-full left-0 mb-2 w-64 px-3 py-2 rounded-lg bg-forest-800 border border-green-400/15 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
              Auth, product, cart, order, stock, &amp; AI detection endpoints built across multiple projects
            </div>
          </div>

          <div className="w-px h-10 bg-white/8 hidden sm:block" />

          <div className="animate-stats stats-delay-3">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading stat-number">3+</div>
            <div className="text-xs text-slate-500 mt-1.5 uppercase tracking-widest">Leadership Roles</div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2 ml-auto">
            <a
              href="https://github.com/clozz11"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl border border-white/8 text-slate-500 hover:text-green-400 hover:border-green-400/25 hover:bg-green-400/5 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/carlos-achanta"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl border border-white/8 text-slate-500 hover:text-green-400 hover:border-green-400/25 hover:bg-green-400/5 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
