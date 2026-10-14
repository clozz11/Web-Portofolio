"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Activities", href: "#activities" },
  { label: "Education",  href: "#education" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export default function HeaderNav() {
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("hero");
  const [menuOpen,       setMenuOpen]       = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPos = window.scrollY + 120;
      const sections = ["hero", ...NAV_ITEMS.map(i => i.href.slice(1))]
        .map(id => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPos >= sections[i].offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-green-400/10 backdrop-blur-xl bg-forest-950/95 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        {/* ── Logo ── */}
        <a
          href="#hero"
          className="font-heading font-extrabold text-xl text-white tracking-tight hover:text-green-400 transition"
        >
          CAZ<span className="text-green-400">.</span>
        </a>

        {/* ── Desktop Navigation ── */}
        <nav aria-label="Navigasi Utama" className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  isActive
                    ? "text-green-400 bg-green-400/10"
                    : "text-slate-500 hover:text-green-400 hover:bg-green-400/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* ── Desktop CTA + Socials ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/carlosachanta"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-500 hover:text-green-400 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/carlos-achanta"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-500 hover:text-green-400 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* CTA Button */}
          <a
            href="#contact"
            className="ml-1 px-5 py-2.5 rounded-xl bg-green-400 text-black text-xs font-extrabold uppercase tracking-widest hover:bg-green-500 transition-all duration-200"
            style={{ boxShadow: "0 0 20px rgba(0,232,122,0.25)" }}
          >
            Get in Touch
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-green-400 hover:bg-green-400/5 transition"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-b border-green-400/10" : "max-h-0"
        } backdrop-blur-xl bg-forest-950/98`}
      >
        <nav className="flex flex-col p-4 gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:text-green-400 hover:bg-green-400/5 transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl bg-green-400 text-black text-sm font-extrabold text-center hover:bg-green-500 transition"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
