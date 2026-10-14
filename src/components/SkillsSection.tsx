import { Code2, Server, Database, Wrench } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript (ES6+)", "C / C++", "SQL"],
  },
  {
    title: "Backend & Frameworks",
    icon: Server,
    skills: ["Node.js", "Express.js", "FastAPI", "Sequelize ORM", "JWT & Auth"],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Relational Modeling", "Migrations & Indexing"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git & GitHub", "Postman API Testing", "VS Code", "Linux / PowerShell"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 scroll-mt-20">
      {/* ── Section Header ── */}
      <div className="mb-14 reveal-on-scroll">
        <span className="text-green-400 text-xs font-extrabold uppercase tracking-[0.35em]">
          05 / Skills
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 font-heading leading-tight">
          Skills &amp; Technologies
        </h2>
      </div>

      {/* ── Bento Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = group.icon;
          const delays = ["delay-1", "delay-2", "delay-3", "delay-4"];
          return (
            <div
              key={group.title}
              className={`group p-6 sm:p-7 rounded-3xl card-glow card-tilt reveal-on-scroll ${delays[i]}`}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center group-hover:bg-green-400/15 group-hover:border-green-400/35 transition-all duration-300">
                  <Icon className="w-[18px] h-[18px] text-green-400" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.25em] text-green-400">
                  {group.title}
                </h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/4 text-slate-300 border border-white/8 hover:border-green-400/30 hover:text-green-400 hover:bg-green-400/5 transition-all duration-200 cursor-default stagger-item"
                    style={{ animationDelay: `${j * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom Note ── */}
      <p className="mt-8 text-center text-xs text-slate-600 reveal-on-scroll delay-5">
        Always learning &amp; exploring new technologies —{" "}
        <span className="text-green-400/60">currently exploring Docker &amp; CI/CD pipelines</span>
      </p>
    </section>
  );
}
