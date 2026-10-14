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

      {/* Main Content — full-width centered */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
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
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Carlos Achanta Zakky.
            Built with Next.js, React &amp; TypeScript.
          </p>
          <a
            href="#hero"
            className="text-xs text-green-400/40 hover:text-green-400 transition-colors duration-200"
          >
            Back to Top ↑
          </a>
        </footer>
      </div>
    </>
  );
}
