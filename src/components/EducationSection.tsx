import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    period: "2024 — 2028",
    institution: "BINUS University",
    degree: "Bachelor of Computer Science / Informatics Engineering",
    description:
      "Studying core Computer Science subjects including Algorithms & Programming, Data Structures, Database Design & Management Systems, Object-Oriented Programming (OOP), Computer Networking, and Software Engineering.",
    current: true,
  },
  {
    period: "2020 — 2023",
    institution: "MAN 1 Mojokerto",
    degree: "Natural Sciences (IPA)",
    description:
      "Built a strong foundation in systematic logical thinking, basic computational science, and solid mathematical analysis skills.",
    current: false,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 scroll-mt-20">
      {/* ── Section Header ── */}
      <div className="mb-14 reveal">
        <span className="text-green-400 text-xs font-extrabold uppercase tracking-[0.35em]">
          04 / Education
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 font-heading leading-tight">
          Educational Background
        </h2>
      </div>

      <div className="space-y-5">
        {EDUCATION.map((edu, i) => (
          <div
            key={edu.institution}
            className={`group p-6 sm:p-8 rounded-3xl transition-all duration-300 reveal delay-${(i + 1) * 100} ${
              edu.current
                ? "border border-green-400/25 bg-green-400/3 hover:border-green-400/40"
                : "card-glow"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    edu.current
                      ? "bg-green-400/15 border border-green-400/30 group-hover:bg-green-400/20"
                      : "bg-white/4 border border-white/8 group-hover:border-green-400/20"
                  }`}
                >
                  <GraduationCap
                    className={`w-5 h-5 transition-colors duration-300 ${
                      edu.current
                        ? "text-green-400"
                        : "text-slate-500 group-hover:text-green-400/60"
                    }`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-extrabold uppercase tracking-widest ${
                      edu.current ? "text-green-400" : "text-slate-500"
                    }`}
                  >
                    {edu.period}
                  </span>
                  {edu.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-400/10 border border-green-400/25 text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 dot-pulse" />
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading group-hover:text-green-400/90 transition-colors duration-200">
                  {edu.institution}
                </h3>

                <p className="text-sm font-semibold text-green-400/80 mt-1">
                  {edu.degree}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
