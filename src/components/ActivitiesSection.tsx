const ACTIVITIES = [
  {
    period: "2025 — 2026",
    role: "Basic Leadership Training Participant (LDKA)",
    organization: "UKM Futsal BINUS University Malang",
    description:
      "Participated in a foundational activist leadership training program aimed at building integrity, organizational discipline, tactical problem-solving skills, and team management within the campus environment.",
  },
  {
    period: "2026",
    role: "Person in Charge (PIC) — Internal Bonding Program",
    organization: "Informatics Engineering Student Association",
    description:
      "Led the coordination and planning of monthly team-bonding activities to strengthen cross-division communication, improve team cohesion, and boost the productivity of all organizational members.",
  },
  {
    period: "2025",
    role: "Instructor & Speaker — UI/UX & Web Development Workshop",
    organization: "Student Association Community Outreach Program",
    description:
      "Served as a workshop speaker for high school students, introducing the fundamentals of web programming logic, basic internet architecture, and user experience design principles.",
  },
];

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-24 scroll-mt-20">
      {/* ── Section Header ── */}
      <div className="mb-14 reveal-on-scroll">
        <span className="text-green-400 text-xs font-extrabold uppercase tracking-[0.35em]">
          03 / Activities
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 font-heading leading-tight">
          Activities &amp; Leadership
        </h2>
      </div>

      {/* ── Timeline ── */}
      <div className="relative">
        {/* Vertical green line */}
        <div className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-green-400/50 via-green-400/20 to-transparent" />

        <div className="space-y-10 pl-8 sm:pl-10">
          {ACTIVITIES.map((act, i) => (
            <div
              key={act.role}
              className={`relative group reveal-on-scroll delay-${i + 1}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-8 sm:-left-10 top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  i === 0
                    ? "bg-green-400 border-green-400 dot-active"
                    : "bg-forest-950 border-green-400/40 group-hover:border-green-400 group-hover:bg-green-400/20"
                }`}
              />

              {/* Card */}
              <div className="p-5 sm:p-6 rounded-2xl card-glow card-tilt">
                {/* Period */}
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-green-400 mb-3">
                  {act.period}
                </span>

                {/* Role */}
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white font-heading leading-snug group-hover:text-green-400 transition-colors duration-200">
                  {act.role}
                </h3>

                {/* Organization */}
                <p className="text-xs font-semibold text-green-400/70 mt-1">
                  {act.organization}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
