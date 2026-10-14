import Image from "next/image";

export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-16 lg:w-5/12 lg:self-start mb-14 lg:mb-0">
      <div className="space-y-6">
        {/* Foto Profil */}
        <div className="relative inline-block group">
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-teal-400/40 shadow-2xl shadow-teal-500/10 group-hover:border-teal-400 transition duration-300">
            <Image
              src="/profile-avatar.jpg"
              alt="Foto Profil Carlos Achanta Zakky"
              width={160}
              height={160}
              priority
              className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
          </div>
          <span className="absolute -bottom-2 -right-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900 border border-teal-400/40 text-teal-300 shadow-md">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Backend Dev
          </span>
        </div>

        {/* Nama Lengkap & Title */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 font-heading">
            Carlos Achanta Zakky
          </h1>
          <h2 className="mt-3 text-lg sm:text-xl font-semibold tracking-tight text-teal-300 font-heading">
            Computer Science Student &amp; Backend Developer
          </h2>
        </div>

        {/* Bio Singkat */}
        <p className="max-w-md text-sm sm:text-base leading-relaxed text-slate-400">
          Mahasiswa Teknik Informatika yang berfokus membangun sistem backend yang tangguh, merancang arsitektur RESTful API yang aman, serta mengelola basis data relasional yang efisien dan terstruktur.
        </p>
      </div>
    </header>
  );
}
