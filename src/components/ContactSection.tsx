"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, Mail, AlertCircle, Loader2 } from "lucide-react";

/* -- EmailJS credentials --------------------------------------
   1. Daftar di https://www.emailjs.com/ (gratis 200 email/bln)
   2. Buat Service  ? dapat SERVICE_ID
   3. Buat Template ? dapat TEMPLATE_ID  (variabel: from_name, from_email, message)
   4. Copy Public Key ? ganti PUBLIC_KEY di bawah
   ------------------------------------------------------------ */
const EMAILJS_SERVICE_ID  = "service_REPLACE_ME";   // ? ganti
const EMAILJS_TEMPLATE_ID = "template_REPLACE_ME";  // ? ganti
const EMAILJS_PUBLIC_KEY  = "PUBLIC_KEY_HERE";       // ? ganti

const CORRECT_EMAIL = "carloszakky27@gmail.com";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus]     = useState<Status>("idle");
  const [errMsg, setErrMsg]     = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    /* If EmailJS is not configured yet, fall back to mailto */
    if (
      EMAILJS_SERVICE_ID.includes("REPLACE") ||
      EMAILJS_TEMPLATE_ID.includes("REPLACE") ||
      EMAILJS_PUBLIC_KEY.includes("HERE")
    ) {
      const mailtoUrl = `mailto:${CORRECT_EMAIL}?subject=${encodeURIComponent(
        "Portfolio Message from " + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      setStatus("success");
      setTimeout(() => { window.location.href = mailtoUrl; }, 700);
      setFormData({ name: "", email: "", message: "" });
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setErrMsg("Gagal mengirim pesan. Coba hubungi langsung via email.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl bg-white/3 border border-white/8 px-4 py-3.5 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/30 transition-all duration-200";

  return (
    <section id="contact" className="py-24 scroll-mt-20">
      {/* -- Section Header -- */}
      <div className="mb-14 text-center reveal">
        <span className="text-green-400 text-xs font-extrabold uppercase tracking-[0.35em] label-pop">
          06 / Contact
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-3 font-heading leading-tight">
          Let&apos;s Work Together
        </h2>
        <p className="mt-5 text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
          Tertarik berkolaborasi, mendiskusikan proyek backend, atau punya peluang kerja / internship?
          Kirim pesan langsung — saya akan menerima email-mu ke inbox saya.
        </p>

        {/* -- Direct Contact Options -- */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 reveal delay-200">
          <a
            href={`mailto:${CORRECT_EMAIL}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-green-400/25 bg-green-400/5 text-green-400 text-sm font-semibold hover:bg-green-400/10 hover:border-green-400/40 hover:scale-[1.03] transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            {CORRECT_EMAIL}
          </a>
          <a
            href="https://github.com/clozz11"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/8 bg-white/3 text-slate-400 text-sm font-semibold hover:text-green-400 hover:border-green-400/20 hover:scale-[1.03] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/carlos-achanta"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/8 bg-white/3 text-slate-400 text-sm font-semibold hover:text-green-400 hover:border-green-400/20 hover:scale-[1.03] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* -- Contact Form -- */}
      <div
        className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl card-glow reveal delay-300"
        style={{ boxShadow: "0 0 60px rgba(0,232,122,0.04), 0 0 0 1px rgba(0,232,122,0.08)" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-green-400 dot-pulse" />
          <h3 className="text-lg font-bold text-white font-heading">
            Send a Direct Message
          </h3>
          <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 uppercase tracking-wider">
            Pesan langsung ke inbox
          </span>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="from_name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="from_email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Ceritakan tentang proyek, kolaborasi, atau peluang yang kamu tawarkan..."
              className={inputClass + " resize-none"}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-green-400 text-black text-sm font-extrabold uppercase tracking-wider hover:bg-green-500 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer glow-ripple"
            style={{ boxShadow: "0 0 25px rgba(0,232,122,0.25)" }}
          >
            {status === "loading" ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
            ) : (
              <>Send Message <Send className="w-4 h-4" /></>
            )}
          </button>
        </form>

        {/* Success */}
        {status === "success" && (
          <div className="mt-5 p-4 rounded-xl bg-green-950/40 border border-green-400/25 text-green-200 text-sm flex items-center gap-3 reveal">
            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
            <span>
              Pesan berhasil dikirim! Saya akan membalas ke <strong>{formData.email || "email kamu"}</strong> secepatnya.
            </span>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="mt-5 p-4 rounded-xl bg-red-950/40 border border-red-400/25 text-red-200 text-sm flex items-center gap-3 reveal">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            <span>{errMsg}</span>
          </div>
        )}
      </div>
    </section>
  );
}
