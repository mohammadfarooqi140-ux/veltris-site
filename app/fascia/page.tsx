"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  Lock
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function FasciaAestheticsPage() {
  // Concierge Form State
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "",
    concern: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contactMethod.trim() || !formData.concern.trim()) {
      setFormError("Please provide your name, contact, and brief concern.");
      return;
    }
    setFormError("");
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-[#d49a37]/20 selection:text-[#f3c87a]">
      {/* =========================================================================
          PERSISTENT CONCEPT NOTICE
      ========================================================================== */}
      <div className="bg-zinc-900/95 backdrop-blur-md text-zinc-400 py-2.5 px-6 text-[11px] leading-[16px] font-mono border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3 sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d49a37]" />
          <span>Veltris Concept Study • Medical Aesthetics &amp; Clinical Restorations</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <Link
            href="/work/fascia"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Case Study
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-[#d49a37] hover:text-[#f3c87a] transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> Veltris Portfolio
          </Link>
        </div>
      </div>

      {/* =========================================================================
          MINIMAL HEADER
      ========================================================================== */}
      <header className="w-full border-b border-white/[0.05] bg-zinc-950/80 backdrop-blur-xl sticky top-[37px] z-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[17px] font-sans font-medium tracking-tight text-white">
              Fascia Aesthetics
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
              Weybridge
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-400">
            <button
              onClick={() => scrollToSection("treatments")}
              className="hover:text-white transition-colors"
            >
              Treatments
            </button>
            <button
              onClick={() => scrollToSection("practitioner")}
              className="hover:text-white transition-colors"
            >
              About Katie
            </button>
            <button
              onClick={() => scrollToSection("consultation")}
              className="hover:text-[#d49a37] transition-colors"
            >
              Consultation
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("consultation")}
            className="text-[11px] font-mono uppercase tracking-[0.14em] px-4 py-2 rounded-full border border-[#d49a37]/50 text-[#d49a37] hover:bg-[#d49a37] hover:text-zinc-950 transition-all duration-200"
          >
            Enquire
          </button>
        </div>
      </header>

      {/* =========================================================================
          HERO: MINIMALIST EDITORIAL (SPACIOUS & ELEGANT)
          - Clear hierarchy: Headline, natural results narrative, clean CTAs
          - Right: Authentic, serene portrait of Katie (no sci-fi wireframes)
      ========================================================================== */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-36 px-6 sm:px-8 overflow-hidden">
        {/* Warm ambient backlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#d49a37]/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 cols) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <motion.div variants={fadeIn} className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-[11px] font-mono text-[#d49a37] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d49a37]" />
                  Weybridge Private Clinic
                </span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-[38px] sm:text-[48px] md:text-[56px] font-sans font-medium tracking-[-0.03em] leading-[1.12] text-white mb-6"
              >
                Subtle, undetectable <br className="hidden sm:inline" />
                <span className="text-[#d49a37]">anti-ageing.</span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-8"
              >
                Led by Nurse Prescriber &amp; Clinic Owner Katie with 8+ years refining natural results. Every procedure is thoughtfully calibrated to enhance your facial harmony without looking altered.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
              >
                <button
                  onClick={() => scrollToSection("consultation")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#d49a37] text-zinc-950 font-medium text-xs uppercase tracking-[0.14em] hover:bg-[#e4a844] transition-all duration-200 shadow-[0_8px_24px_rgba(212,154,55,0.2)]"
                >
                  Request Consultation
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => scrollToSection("treatments")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] text-xs uppercase tracking-[0.14em] transition-all duration-200"
                >
                  Explore Treatments
                </button>
              </motion.div>

              {/* Minimal Trust Line */}
              <motion.div
                variants={fadeIn}
                className="pt-6 border-t border-white/[0.06] w-full flex flex-wrap items-center gap-6 text-[11px] font-mono text-zinc-400"
              >
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d49a37]" />
                  Nurse Prescriber Led
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#d49a37]" />
                  8+ Yrs Natural Results
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#d49a37]" />
                  Weybridge, Surrey
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column: Serene Editorial Portrait of Katie (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/[0.08] bg-zinc-900 p-2 shadow-2xl">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-950">
                  <Image
                    src="/Katie.png"
                    alt="Katie, Nurse Prescriber and Clinic Owner at Fascia Aesthetics Weybridge"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Clean Caption Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-white/[0.08]">
                    <span className="text-white text-xs font-medium block">
                      Katie
                    </span>
                    <span className="text-zinc-400 text-[11px] font-mono block">
                      Nurse Prescriber &amp; Clinic Owner • Weybridge
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          QUIET TRUST STRIP (NO BULKY SAAS BOXES)
      ========================================================================== */}
      <section className="border-y border-white/[0.06] bg-zinc-900/20 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6 text-[12px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d49a37]" />
            <span className="text-zinc-200">NMC Registered</span>
            <span className="text-zinc-500">Nurse Prescriber</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d49a37]" />
            <span className="text-zinc-200">Save Face Accredited</span>
            <span className="text-zinc-500">Clinical Register</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d49a37]" />
            <span className="text-zinc-200">Private Weybridge Suite</span>
            <span className="text-zinc-500">Confidential</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d49a37]" />
            <span className="text-zinc-200">Continuous Care</span>
            <span className="text-zinc-500">Treated by Katie</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TREATMENTS: 3 MINIMALIST PILLARS
          - Clean cards, generous padding, zero tech wireframe clutter
      ========================================================================== */}
      <section id="treatments" className="py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-mono text-[#d49a37] uppercase tracking-wider block mb-2">
              Clinical Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight mb-4">
              Precision treatments. Balanced restraint.
            </h2>
            <p className="text-zinc-400 text-base font-light">
              We focus on enhancing your natural features rather than creating dramatic alterations. Subtle adjustments designed to integrate seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Treatment 1 */}
            <div className="rounded-3xl border border-white/[0.08] bg-zinc-900/30 p-8 flex flex-col justify-between hover:border-white/[0.16] transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#d49a37] uppercase tracking-wider block mb-4">
                  01 / RESTORATION
                </span>
                <h3 className="text-xl font-sans font-medium text-white mb-3">
                  Anti-Wrinkle Treatments
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  Targeted micro-dosing to soften expression lines across the forehead, glabella, and crow’s feet while keeping your natural facial movement intact.
                </p>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d49a37]" />
                    Softens lines without freezing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d49a37]" />
                    Preserves natural emotive expression
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d49a37]" />
                    Follow-up review included
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-8">
                <span className="text-[11px] font-mono text-zinc-500">
                  Treatment time: ~30 mins
                </span>
              </div>
            </div>

            {/* Treatment 2 */}
            <div className="rounded-3xl border border-white/[0.08] bg-zinc-900/30 p-8 flex flex-col justify-between hover:border-white/[0.16] transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#d49a37] uppercase tracking-wider block mb-4">
                  02 / STRUCTURE
                </span>
                <h3 className="text-xl font-sans font-medium text-white mb-3">
                  Dermal Support &amp; Contour
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  Carefully placed hyaluronic acid support to subtly restore lost mid-face volume, refine the jawline, or hydrate lips with absolute moderation.
                </p>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d49a37]" />
                    Restores natural cheek support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d49a37]" />
                    Gentle jawline &amp; chin definition
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d49a37]" />
                    Conservative, step-by-step approach
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-8">
                <span className="text-[11px] font-mono text-zinc-500">
                  Premium reversible dermal fillers
                </span>
              </div>
            </div>

            {/* Treatment 3 */}
            <div className="rounded-3xl border border-white/[0.08] bg-zinc-900/30 p-8 flex flex-col justify-between hover:border-white/[0.16] transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#d49a37] uppercase tracking-wider block mb-4">
                  03 / REJUVENATION
                </span>
                <h3 className="text-xl font-sans font-medium text-white mb-3">
                  Skin Longevity &amp; Bio-Remodeling
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  Profhilo® bio-remodeling, skin boosters, and polynucleotides to deeply hydrate, stimulate collagen, and restore skin luminosity from within.
                </p>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d49a37]" />
                    Improves skin firmness &amp; elasticity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d49a37]" />
                    Targets fine crepey texture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d49a37]" />
                    Deep hydration without volume change
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-8">
                <span className="text-[11px] font-mono text-zinc-500">
                  Course of 2 sessions recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT PRACTITIONER: EDITORIAL & HUMAN
          - Spacious, uncluttered narrative
      ========================================================================== */}
      <section id="practitioner" className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06] bg-zinc-900/20">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-mono text-[#d49a37] uppercase tracking-wider block mb-4">
            Practitioner &amp; Clinic Owner
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-medium text-white tracking-tight leading-snug mb-8">
            “The highest compliment a patient can receive is when friends say they look well-rested — never asking what treatment they had done.”
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-400 font-light leading-relaxed text-sm sm:text-base mb-12">
            <p>
              As an NMC-registered Nurse Prescriber with over eight years refining natural aesthetic results, Katie founded Fascia Aesthetics in Weybridge to offer a private, unhurried alternative to high-street cosmetic clinics.
            </p>
            <p>
              Every patient is seen, assessed, and treated directly by Katie. This ensures seamless clinical continuity, complete honesty about what treatments will and will not achieve, and aftercare you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
            <div>
              <span className="text-white block font-medium mb-1">Nurse Prescriber</span>
              <span>Fully qualified independent medical prescriber</span>
            </div>
            <div>
              <span className="text-white block font-medium mb-1">8+ Years Experience</span>
              <span>Dedicated exclusively to subtle facial aesthetics</span>
            </div>
            <div>
              <span className="text-white block font-medium mb-1">Direct Aftercare</span>
              <span>Direct communication with Katie after every treatment</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONSULTATION: CLEAN, LOW-FRICTION CONCIERGE
      ========================================================================== */}
      <section id="consultation" className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-mono text-[#d49a37] uppercase tracking-wider block mb-3">
            Private Enquiry
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight mb-4">
            Request a Consultation
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light mb-10">
            Consultations take place at our private clinic in Weybridge. You will meet directly with Katie for an unhurried, no-pressure assessment.
          </p>

          <div className="rounded-3xl border border-white/[0.08] bg-zinc-900/40 p-8 sm:p-10 text-left">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      placeholder="e.g. Sarah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/[0.08] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#d49a37] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-method"
                      className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2"
                    >
                      Email Address or Phone Number
                    </label>
                    <input
                      id="contact-method"
                      type="text"
                      placeholder="e.g. sarah@example.com or 07123 456789"
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/[0.08] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#d49a37] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="core-concern"
                      className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2"
                    >
                      What would you like to discuss?
                    </label>
                    <textarea
                      id="core-concern"
                      rows={3}
                      placeholder="e.g. Subtle anti-ageing around eyes and forehead"
                      value={formData.concern}
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/[0.08] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#d49a37] transition-colors resize-none"
                    />
                  </div>

                  {formError && (
                    <p className="text-xs text-red-400 font-mono">{formError}</p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#d49a37] hover:bg-[#e4a844] text-zinc-950 font-medium text-xs uppercase tracking-[0.14em] transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-zinc-500 border-t border-white/[0.05]">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-[#d49a37]" /> Confidential
                    </span>
                    <span>Direct response within 24 hours</span>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#d49a37]/10 text-[#d49a37] flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-sans font-medium text-white">
                    Request Received
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto font-light">
                    Thank you, {formData.name}. Katie will review your note and get in touch via {formData.contactMethod} to arrange a suitable consultation time at the Weybridge clinic.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", contactMethod: "", concern: "" });
                    }}
                    className="text-xs font-mono text-[#d49a37] hover:underline underline-offset-4 mt-2"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MINIMAL FOOTER
      ========================================================================== */}
      <footer className="border-t border-white/[0.06] py-12 px-6 sm:px-8 text-zinc-500 text-[11px] font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-zinc-300 font-medium font-sans text-sm">
              Fascia Aesthetics
            </span>
            <span>•</span>
            <span>Katie, Nurse Prescriber • Weybridge, Surrey</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/work/fascia" className="hover:text-white transition-colors">
              Concept Breakdown
            </Link>
            <Link href="/work" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/" className="hover:text-[#d49a37] transition-colors">
              Veltris
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
