"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

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

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">

        {/* ══════════ LEFT: Text content ══════════ */}
        <div className="order-2 lg:order-1 w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* ── Availability Badge ── */}
          <div className="animate-badge inline-flex items-center gap-2.5 mb-7 sm:mb-9 px-4 py-2 rounded-full border border-green-400/25 bg-green-400/5 text-green-400 text-xs sm:text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-400 dot-pulse" />
            Available for Internship &amp; Collaboration
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
          <div className="hero-cta-group flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
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
        </div>

        {/* ══════════ RIGHT: Photo cutout + ornaments ══════════ */}
        <div className="order-1 lg:order-2 relative flex justify-center items-end py-0 lg:py-0">
          {/* Decorative ornaments layer */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* Big gradient glow blob */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] sm:w-[26rem] sm:h-[26rem] rounded-full opacity-70"
              style={{ background: "radial-gradient(circle, rgba(0,232,122,0.12) 0%, rgba(0,232,122,0.04) 40%, transparent 70%)" }}
            />
            {/* Rotating dashed hexagonal ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[19rem] h-[19rem] sm:w-[24rem] sm:h-[24rem] rounded-full border border-dashed border-green-400/20 hero-ring-slow" />
            {/* Static inner ring with gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14rem] h-[14rem] sm:w-[18rem] sm:h-[18rem] rounded-full border border-green-400/10" />
            {/* Cross hair lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[22rem] sm:w-[28rem] h-px bg-gradient-to-r from-transparent via-green-400/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 h-[22rem] sm:h-[28rem] w-px bg-gradient-to-b from-transparent via-green-400/10 to-transparent" />
            {/* Corner brackets — top left */}
            <div className="absolute top-[8%] left-[8%] sm:top-[5%] sm:left-[10%] w-8 h-8 border-l-2 border-t-2 border-green-400/25 rounded-tl-md" />
            {/* Corner brackets — bottom right */}
            <div className="absolute bottom-[8%] right-[8%] sm:bottom-[5%] sm:right-[10%] w-8 h-8 border-r-2 border-b-2 border-green-400/25 rounded-br-md" />
            {/* Corner brackets — top right */}
            <div className="hidden sm:block absolute top-[5%] right-[10%] w-6 h-6 border-r-2 border-t-2 border-green-400/15 rounded-tr-md" />
            {/* Corner brackets — bottom left */}
            <div className="hidden sm:block absolute bottom-[5%] left-[10%] w-6 h-6 border-l-2 border-b-2 border-green-400/15 rounded-bl-md" />
            {/* Floating dots */}
            <span className="absolute top-[15%] right-[15%] w-2.5 h-2.5 rounded-full bg-green-400/60 particle" style={{ "--duration": "7s", "--delay": "0s" } as React.CSSProperties} />
            <span className="absolute bottom-[20%] left-[12%] w-2 h-2 rounded-full bg-green-400/40 particle" style={{ "--duration": "6s", "--delay": "1.5s" } as React.CSSProperties} />
            <span className="absolute bottom-[30%] right-[8%] w-1.5 h-1.5 rounded-full bg-green-400/50 particle" style={{ "--duration": "8s", "--delay": "0.8s" } as React.CSSProperties} />
            <span className="hidden sm:block absolute top-[25%] left-[5%] w-1.5 h-1.5 rounded-full bg-green-400/35 particle" style={{ "--duration": "9s", "--delay": "2s" } as React.CSSProperties} />
            {/* Small rotating square accents */}
            <span className="hidden sm:block absolute top-[18%] left-[20%] w-4 h-4 rounded-sm border border-green-400/20 rotate-45 particle" style={{ "--duration": "10s", "--delay": "0.5s" } as React.CSSProperties} />
            <span className="hidden lg:block absolute bottom-[15%] right-[20%] w-3 h-3 rounded-sm border border-green-400/15 rotate-12 particle" style={{ "--duration": "11s", "--delay": "1s" } as React.CSSProperties} />
            {/* Code-like text decoration */}
            <span className="hidden lg:block absolute top-[10%] right-[25%] text-[10px] font-mono text-green-400/15 select-none">&lt;/&gt;</span>
            <span className="hidden lg:block absolute bottom-[12%] left-[22%] text-[10px] font-mono text-green-400/15 select-none">&#123;&#125;</span>
          </div>

          {/* Photo — crop at arms, bottom aligns with ornament bracket */}
          <div className="relative z-10 self-end">
            <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-[22rem] lg:h-[24rem] overflow-hidden">
              <Image
                src="/profile-avatar.png"
                alt="Carlos Achanta Zakky"
                fill
                priority
                sizes="(max-width: 640px) 18rem, (max-width: 1024px) 20rem, 22rem"
                className="object-cover object-[center_15%]"
              />
            </div>
          </div>
        </div>

      </div>

      {/* ── Stats — full width, perfectly centered ── */}
      <div className="relative z-10 mt-12 sm:mt-16 pt-8 border-t border-white/5">
        <div className="flex items-center justify-center gap-8 sm:gap-14 lg:gap-20">
          <div className="animate-stats stats-delay-1 text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading stat-number">2+</div>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-1.5 uppercase tracking-widest">Projects</div>
          </div>

          <div className="w-px h-10 bg-white/8" />

          <div className="animate-stats stats-delay-2 text-center relative group cursor-default">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading stat-number">20+</div>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-1.5 uppercase tracking-widest">API Endpoints</div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 px-3 py-2 rounded-lg bg-forest-800 border border-green-400/15 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
              Auth, product, cart, order, stock &amp; AI detection endpoints
            </div>
          </div>

          <div className="w-px h-10 bg-white/8" />

          <div className="animate-stats stats-delay-3 text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading stat-number">3+</div>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-1.5 uppercase tracking-widest">Leadership</div>
          </div>
        </div>
      </div>
    </section>
  );
}
