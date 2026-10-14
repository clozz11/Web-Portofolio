import { ExternalLink } from "lucide-react";
import ProjectSlider, { SlideItem } from "./ProjectSlider";

/* ── Edja Corner slides — real app screenshots ── */
const EDJA_SLIDES: SlideItem[] = [
  {
    src: "/edja-new-1.png",
    alt: "Edja Corner — Multi-Role Login Portal",
    caption: "Multi-Role Login Portal",
  },
  {
    src: "/edja-new-7.png",
    alt: "Edja Corner — Owner Dashboard & Analytics",
    caption: "Owner Dashboard & Analytics",
  },
  {
    src: "/edja-new-8.png",
    alt: "Edja Corner — Inventaris Stok",
    caption: "Inventaris Stok",
  },
  {
    src: "/edja-new-5.png",
    alt: "Edja Corner — Daftar Produk",
    caption: "Daftar Produk",
  },
  {
    src: "/edja-new-2.png",
    alt: "Edja Corner — Manajemen Pesanan Online",
    caption: "Manajemen Pesanan Online",
  },
  {
    src: "/edja-new-3.png",
    alt: "Edja Corner — Barang Masuk",
    caption: "Barang Masuk",
  },
  {
    src: "/edja-new-4.png",
    alt: "Edja Corner — Form Tambah Barang Masuk",
    caption: "Form Tambah Barang Masuk",
  },
  {
    src: "/edja-new-6.png",
    alt: "Edja Corner — Form Tambah Produk",
    caption: "Form Tambah Produk",
  },
];

/* ── Nusa Fauna slides ── */
const NUSA_SLIDES: SlideItem[] = [
  {
    src: "/nusa-1.png",
    alt: "Nusa Fauna — Halaman Utama Deteksi Hewan Langka",
    caption: "Halaman Utama — Deteksi Hewan Langka",
  },
  {
    src: "/nusa-3.png",
    alt: "Nusa Fauna — YOLOv8 AI Bounding Box Detection",
    caption: "YOLOv8 Bounding Box Detection",
  },
  {
    src: "/nusa-4.png",
    alt: "Nusa Fauna — Hasil Deteksi & Status Konservasi",
    caption: "Hasil Deteksi & Status Konservasi",
  },
  {
    src: "/nusa-2.png",
    alt: "Nusa Fauna — Form Upload Gambar Hewan",
    caption: "Form Upload Gambar Hewan",
  },
];

const PROJECTS = [
  {
    index: "01",
    year: "2026",
    slides: EDJA_SLIDES,
    title: "Edja Corner",
    subtitle: "Minimarket & POS Backend System",
    role: "Backend Developer",
    description:
      "A comprehensive minimarket management system integrating a multi-role login portal, Point of Sale (POS) cashier with automatic transaction calculation, and an owner analytics dashboard. Served as the primary Backend Developer: designed the relational database schema with Sequelize ORM, implemented JWT authentication and bcrypt hashing, and built standardized RESTful API endpoints.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Sequelize ORM", "JWT & bcrypt", "RESTful API"],
    github: "https://github.com/carlosachanta/edja-corner",
  },
  {
    index: "02",
    year: "2025",
    slides: NUSA_SLIDES,
    title: "Nusa Fauna",
    subtitle: "AI Rare Animal Detection & Conservation System",
    role: "AI & Backend Developer",
    description:
      "An intelligent web application for automatically detecting rare endemic Indonesian fauna and classifying their conservation status (IUCN Red List). Utilizes the Ultralytics YOLOv8 Computer Vision model deployed via a FastAPI microservice with interactive bounding-box rendering on an HTML5 canvas.",
    tech: ["Python", "Ultralytics YOLOv8", "FastAPI", "PyTorch", "HTML5 Canvas", "JavaScript"],
    github: "https://github.com/carlosachanta/nusa-fauna",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 scroll-mt-20">
      {/* ── Section Header ── */}
      <div className="mb-14 reveal">
        <span className="text-green-400 text-xs font-extrabold uppercase tracking-[0.35em]">
          02 / Projects
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 font-heading leading-tight">
          Featured Projects
        </h2>
      </div>

      <div className="space-y-8">
        {PROJECTS.map((project, i) => (
          <article
            key={project.index}
            className={`group p-6 sm:p-8 rounded-3xl card-glow reveal ${i % 2 === 0 ? "delay-100" : "delay-200"}`}
          >
            {/* Top row: index + year + role + link */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-extrabold text-slate-600 uppercase tracking-widest">
                  ({project.index})
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-green-400/20 bg-green-400/5 text-green-400">
                  {project.year}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-white/8 text-slate-500">
                  {project.role}
                </span>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`GitHub — ${project.title}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/8 text-slate-500 hover:text-green-400 hover:border-green-400/25 hover:bg-green-400/5 text-xs font-semibold transition-all duration-200"
              >
                Source Code <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Slider */}
            <ProjectSlider slides={project.slides} />

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading group-hover:text-green-400 transition-colors duration-300">
                {project.title}
                <span className="text-slate-600 font-normal text-lg sm:text-xl ml-3">
                  — {project.subtitle}
                </span>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-3xl">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border border-green-400/15 text-green-400 bg-green-400/5 hover:border-green-400/35 hover:bg-green-400/10 transition-all duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
