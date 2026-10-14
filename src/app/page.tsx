import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      {/* Fixed Navigation */}
      <HeaderNav />

      {/* Main Content — full-width centered, responsive padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Hero — above the fold */}
        <HeroSection />

        {/* ── Content Sections ── */}
        <div className="section-divider" />
        <AboutSection />

        <div className="section-divider" />
        <ProjectsSection />

        <div className="section-divider" />
        <ActivitiesSection />

        <div className="section-divider" />
        <EducationSection />

        <div className="section-divider" />
        <SkillsSection />

        <div className="section-divider" />
        <ContactSection />

        {/* ── Footer ── */}
        <footer className="py-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Carlos Achanta Zakky.
            Built with Next.js, React &amp; TypeScript.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/clozz11"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-slate-600 hover:text-green-400 transition-colors duration-200"
            >
              github.com/clozz11
            </a>
            <a
              href="#hero"
              className="text-xs text-green-400/40 hover:text-green-400 transition-colors duration-200"
            >
              Back to Top ↑
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
