import { ExternalLink } from "lucide-react";
import ProjectSlider, { SlideItem } from "./ProjectSlider";
import Image from "next/image";

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

/* ── DB Laundry — App screenshots only (for the main slider) ── */
const DB_LAUNDRY_APP_SLIDES: SlideItem[] = [
  {
    src: "/db-laundry-1.png",
    alt: "LaundryYuk — Halaman Utama",
    caption: "Halaman Utama — LaundryYuk",
  },
  {
    src: "/db-laundry-7.png",
    alt: "LaundryYuk — Form Buat Pesanan",
    caption: "Form Buat Pesanan dengan Kalender Penjemputan",
  },
  {
    src: "/db-laundry-6.png",
    alt: "LaundryYuk — Pesanan Dalam Proses",
    caption: "Halaman Pesanan Dalam Proses",
  },
  {
    src: "/db-laundry-2.png",
    alt: "LaundryYuk — Daftar Layanan",
    caption: "Daftar Layanan Cuci",
  },
  {
    src: "/db-laundry-3.jpg",
    alt: "LaundryYuk — Detail Transaksi",
    caption: "Detail Transaksi & Riwayat",
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
      <div className="mb-14 reveal-on-scroll">
        <span className="text-green-400 text-xs font-extrabold uppercase tracking-[0.35em]">
          02 / Projects
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 font-heading leading-tight">
          Featured Projects
        </h2>
      </div>

      <div className="space-y-8">
        {/* ── Projects 01 & 02 ── */}
        {PROJECTS.map((project, i) => (
          <article
            key={project.index}
            className={`group p-5 sm:p-8 rounded-3xl card-glow reveal-on-scroll delay-${i + 1}`}
          >
            {/* Top row: index + year + role + link */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <div className="flex items-center gap-2 flex-wrap">
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-heading group-hover:text-green-400 transition-colors duration-300">
                {project.title}
                <span className="text-slate-600 font-normal text-base sm:text-lg ml-2 sm:ml-3 block sm:inline mt-1 sm:mt-0">
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

        {/* ── Project 03 — DB Laundry (custom layout) ── */}
        <article className="group p-5 sm:p-8 rounded-3xl card-glow reveal-on-scroll delay-3">
          {/* Top row */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-extrabold text-slate-600 uppercase tracking-widest">(03)</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-green-400/20 bg-green-400/5 text-green-400">
                2025
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-white/8 text-slate-500">
                Database Designer
              </span>
            </div>
            <a
              href="https://github.com/clozz11"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub — DB Laundry"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/8 text-slate-500 hover:text-green-400 hover:border-green-400/25 hover:bg-green-400/5 text-xs font-semibold transition-all duration-200"
            >
              Source Code <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* App screenshot slider */}
          <ProjectSlider slides={DB_LAUNDRY_APP_SLIDES} />

          {/* Database Diagrams grid — ERD + Normalization */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* ERD */}
            <div
              className="relative rounded-2xl overflow-hidden border border-green-400/15 bg-forest-900"
              style={{ minHeight: "200px" }}
            >
              <div className="relative w-full" style={{ paddingBottom: "62%" }}>
                <Image
                  src="/db-laundry-erd.jpg"
                  alt="DB Laundry — Entity Relationship Diagram (ERD)"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-green-400/15 text-green-400 border border-green-400/25">
                  Entity Relationship Diagram (ERD)
                </span>
              </div>
            </div>

            {/* Normalization */}
            <div
              className="relative rounded-2xl overflow-hidden border border-green-400/15 bg-forest-900"
              style={{ minHeight: "200px" }}
            >
              <div className="relative w-full" style={{ paddingBottom: "62%" }}>
                <Image
                  src="/db-laundry-norm.jpg"
                  alt="DB Laundry — Proses Normalisasi UNF hingga 3NF"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-green-400/15 text-green-400 border border-green-400/25">
                  Normalisasi UNF → 1NF → 2NF → 3NF
                </span>
              </div>
            </div>
          </div>

          {/* DB extra screenshots grid */}
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["/db-laundry-4.png", "/db-laundry-5.png"].map((src, idx) => (
              <div
                key={src}
                className="relative rounded-xl overflow-hidden border border-white/6 bg-forest-900"
                style={{ paddingBottom: "70%" }}
              >
                <Image
                  src={src}
                  alt={`DB Laundry — screenshot ${idx + 4}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-contain"
                />
              </div>
            ))}
            {["/db-laundry-2.jpg", "/db-laundry-3.jpg"].map((src, idx) => (
              <div
                key={src}
                className="relative rounded-xl overflow-hidden border border-white/6 bg-forest-900"
                style={{ paddingBottom: "70%" }}
              >
                <Image
                  src={src}
                  alt={`DB Laundry — screenshot ${idx + 6}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-heading group-hover:text-green-400 transition-colors duration-300">
              DB Laundry
              <span className="text-slate-600 font-normal text-base sm:text-lg ml-2 sm:ml-3 block sm:inline mt-1 sm:mt-0">
                — Relational Database Design &amp; Normalization System
              </span>
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-3xl">
              A MySQL relational database project developed collaboratively with BINUS University students to manage
              retail purchase transaction systems. Covers functional dependency analysis, normalization stages from
              Unnormalized Form (UNF) to Third Normal Form (3NF) to eliminate data anomalies and redundancy,
              and ERD design across four main tables: Pelanggan, Barang, Nota, and Detail Pesanan. Also implements
              advanced SQL programming including Stored Procedures for purchase history, User-Defined Functions
              for calculations, Aggregate Queries with JOIN, and Triggers for real-time automatic transaction total updates.
            </p>

            {/* Tech Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["MySQL", "Stored Procedures", "Triggers", "User-Defined Functions", "ERD", "Normalization (3NF)", "Aggregate Queries"].map((t) => (
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
      </div>
    </section>
  );
}
