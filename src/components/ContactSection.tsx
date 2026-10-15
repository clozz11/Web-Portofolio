"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, Mail, AlertCircle, Loader2 } from "lucide-react";

/* ────────────────────────────────────────────────────────────
   EmailJS SETUP:
   1. Go to https://www.emailjs.com/ → Sign up free (200 emails/month)
   2. Dashboard → "Email Services" → Add New Service → connect Gmail/Outlook
      → Copy Service ID → paste into EMAILJS_SERVICE_ID
   3. Dashboard → "Email Templates" → Create New Template
      → Use variables: {{from_name}}, {{from_email}}, {{message}}
      → Copy Template ID → paste into EMAILJS_TEMPLATE_ID
   4. Dashboard → "Account" → General → Copy Public Key
      → paste into EMAILJS_PUBLIC_KEY
   ──────────────────────────────────────────────────────────── */

const EMAILJS_SERVICE_ID  = "service_1hl7ver";
const EMAILJS_TEMPLATE_ID = "template_y7pe9ig";
const EMAILJS_PUBLIC_KEY  = "AW6OTvtnN-k5Kg3G4";

const CORRECT_EMAIL = "carloszakky27@gmail.com";
const GITHUB_URL    = "https://github.com/clozz11";
const LINKEDIN_URL  = "https://www.linkedin.com/in/carlos-achanta-zakky-9b69aa325/";
const WHATSAPP_URL  = "https://wa.me/6285748097300";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus]     = useState<Status>("idle");
  const [errMsg, setErrMsg]     = useState("");

  const isConfigured =
    !EMAILJS_SERVICE_ID.includes("REPLACE") &&
    !EMAILJS_TEMPLATE_ID.includes("REPLACE") &&
    !EMAILJS_PUBLIC_KEY.includes("HERE");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    if (!isConfigured) {
      const mailtoUrl = `mailto:${CORRECT_EMAIL}?subject=${encodeURIComponent(
        "Portfolio Message from " + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setStatus("success");
      setTimeout(() => { window.open(mailtoUrl, "_blank"); }, 600);
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
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setErrMsg("Failed to send message. Please reach out directly via email below.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const inputClass =
    "w-full rounded-xl bg-white/3 border border-white/8 px-4 py-3.5 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/30 transition-all duration-200";

  return (
    <section id="contact" className="py-24 scroll-mt-20">
      {/* ── Section Header ── */}
      <div className="mb-14 text-center reveal-on-scroll">
        <span className="text-green-400 text-xs font-extrabold uppercase tracking-[0.35em] label-pop">
          06 / Contact
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-3 font-heading leading-tight">
          Let&apos;s Work Together
        </h2>
        <p className="mt-5 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Interested in collaborating, discussing a backend project, or have a job / internship opportunity?
          Send me a message — I&apos;ll get back to you as soon as possible.
        </p>

        {/* ── Direct Contact Options ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8 reveal-on-scroll delay-2">
          <a
            href={`mailto:${CORRECT_EMAIL}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-green-400/25 bg-green-400/5 text-green-400 text-sm font-semibold hover:bg-green-400/10 hover:border-green-400/40 hover:scale-[1.03] transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">{CORRECT_EMAIL}</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/8 bg-white/3 text-slate-400 text-sm font-semibold hover:text-green-400 hover:border-green-400/20 hover:scale-[1.03] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/8 bg-white/3 text-slate-400 text-sm font-semibold hover:text-green-400 hover:border-green-400/20 hover:scale-[1.03] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/8 bg-white/3 text-slate-400 text-sm font-semibold hover:text-green-400 hover:border-green-400/20 hover:scale-[1.03] transition-all duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      {/* ── Contact Form ── */}
      <div
        className="max-w-2xl mx-auto p-6 sm:p-10 rounded-3xl card-glow reveal-on-scroll delay-3"
        style={{ boxShadow: "0 0 60px rgba(0,232,122,0.04), 0 0 0 1px rgba(0,232,122,0.08)" }}
      >
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <div className="w-2 h-2 rounded-full bg-green-400 dot-pulse" />
          <h3 className="text-lg font-bold text-white font-heading">
            Send a Direct Message
          </h3>
          <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 uppercase tracking-wider">
            Direct to Inbox
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
              placeholder="Tell me about your project, collaboration idea, or opportunity..."
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
              <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
            ) : (
              <>Send Message <Send className="w-4 h-4" /></>
            )}
          </button>
        </form>

        {/* Success */}
        {status === "success" && (
          <div className="mt-5 p-4 rounded-xl bg-green-950/40 border border-green-400/25 text-green-200 text-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
            <span>
              {isConfigured
                ? <>Message sent successfully! I&apos;ll reply to <strong>{formData.email || "your email"}</strong> as soon as possible.</>
                : <>Your email client has been opened. Please send the message to <strong>{CORRECT_EMAIL}</strong>.</>
              }
            </span>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="mt-5 p-4 rounded-xl bg-red-950/40 border border-red-400/25 text-red-200 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <span>
              {errMsg}{" "}
              <a href={`mailto:${CORRECT_EMAIL}`} className="text-green-400 hover:underline">
                {CORRECT_EMAIL}
              </a>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
