export default function AboutSection() {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      {/* ── Section Header ── */}
      <div className="mb-14 reveal-on-scroll">
        <span className="text-green-400 text-xs font-extrabold uppercase tracking-[0.35em]">
          01 / About
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 font-heading leading-tight">
          Background &amp; Story
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
        {/* ── Story Text ── */}
        <div className="lg:col-span-3 space-y-5 text-slate-400 leading-relaxed text-sm sm:text-base reveal-on-scroll from-left delay-1">
          <p>
            Hi! I am a Computer Science student with a deep passion for
            server-side software engineering (
            <span className="text-green-400 font-medium">backend development</span>
            ). I enjoy designing clean business logic, robust relational
            database architectures, and high-performance, secure APIs.
          </p>
          <p>
            In web application development, my primary focus includes building
            RESTful API endpoints, implementing token-based authentication (
            <span className="text-green-400 font-medium">JWT &amp; bcrypt</span>
            ), managing multi-role authorization (RBAC), and ORM modeling
            using Sequelize on{" "}
            <span className="text-green-400 font-medium">
              PostgreSQL &amp; MySQL
            </span>{" "}
            databases.
          </p>
          <p>
            I am comfortable collaborating in development teams, following
            structured coding principles, and am always enthusiastic about
            learning new technologies to deliver real, impactful digital
            solutions.
          </p>
        </div>

        {/* ── Info Cards ── */}
        <div className="lg:col-span-2 space-y-3 reveal-on-scroll from-right delay-2">
          {[
            {
              label: "Focus Area",
              title: "Backend Development",
              sub: "RESTful API · Database Design · Auth Systems",
            },
            {
              label: "Currently Studying",
              title: "BINUS University",
              sub: "S1 Computer Science · 2024 — 2028",
            },
            {
              label: "Location",
              title: "Malang, East Java",
              sub: "Indonesia · GMT+7 · Open to Remote",
            },
            {
              label: "Status",
              title: "Active & Available",
              sub: "Open for Internship & Project Collaboration",
              highlight: true,
            },
          ].map((card) => (
            <div
              key={card.label}
              className={`p-5 rounded-2xl border transition-all duration-300 card-tilt ${
                card.highlight
                  ? "border-green-400/30 bg-green-400/5 hover:border-green-400/50"
                  : "card-glow"
              }`}
            >
              <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-green-400 mb-1.5">
                {card.label}
              </div>
              <div className="text-white font-semibold text-sm">{card.title}</div>
              <div className="text-slate-500 text-xs mt-1 leading-relaxed">{card.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
