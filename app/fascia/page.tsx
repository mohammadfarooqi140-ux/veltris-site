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
  Lock,
  Calendar,
  PhoneCall
} from "lucide-react";

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
      setFormError("Please provide your name, contact details, and a short message.");
      return;
    }
    setFormError("");
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans antialiased selection:bg-[#967243]/15 selection:text-[#7A5C30] overflow-x-clip">
      {/* =========================================================================
          0. VELTRIS STUDY NOTICE (NATURAL DOCUMENT FLOW - NEVER CLOBBERS MOBILE HEADER)
      ========================================================================== */}
      <aside aria-label="Concept Disclaimer" className="w-full bg-[#EFECE6] border-b border-[#E3DDD2] text-[#6E675F] py-2 px-4 sm:px-6 text-[11px] leading-[16px] font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#967243] flex-shrink-0" />
            <span className="truncate">
              Veltris Concept Study • Medical Aesthetics &amp; Clinical Restorations
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium flex-shrink-0">
            <Link
              href="/work/fascia"
              className="text-[#6E675F] hover:text-[#1C1917] transition-colors"
            >
              Case Study
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-[#967243] hover:text-[#7A5C30] transition-colors"
            >
              <ArrowLeft className="w-3 h-3" /> Veltris Portfolio
            </Link>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          1. CLEAN STICKY CLINIC NAVIGATION
          - Sticky top-0 with zero overlapping offset issues
          - Height-calibrated for mobile (h-16) and desktop (h-20)
      ========================================================================== */}
      <header className="w-full border-b border-[#EAE5DD] bg-[#FAF8F5]/90 backdrop-blur-md sticky top-0 z-40 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F3EFE8] border border-[#DDD7CC] flex items-center justify-center text-[#967243] font-serif text-xs sm:text-sm font-semibold tracking-wider">
              FA
            </div>
            <div>
              <span className="text-[16px] sm:text-[17px] font-sans font-medium tracking-tight text-[#1C1917] block leading-tight">
                Fascia Aesthetics
              </span>
              <span className="text-[10px] font-mono text-[#8C8479] uppercase tracking-wider block">
                Weybridge, Surrey
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.16em] text-[#6E675F]">
            <button
              onClick={() => scrollToSection("treatments")}
              className="hover:text-[#1C1917] transition-colors"
            >
              Treatments
            </button>
            <button
              onClick={() => scrollToSection("practitioner")}
              className="hover:text-[#1C1917] transition-colors"
            >
              About Katie
            </button>
            <button
              onClick={() => scrollToSection("consultation")}
              className="hover:text-[#967243] transition-colors"
            >
              Consultation
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("consultation")}
            className="text-[11px] font-mono uppercase tracking-[0.14em] px-4 py-2 rounded-full border border-[#967243] text-[#967243] bg-[#FAF8F5] hover:bg-[#967243] hover:text-white transition-all duration-200"
          >
            Enquire
          </button>
        </div>
      </header>

      {/* =========================================================================
          2. HERO: WARM ALABASTER & EDITORIAL LUXURY
          - Mobile-First: No weird layout squeezing, fluid responsive typography
          - Warm, inviting clinic atmosphere with Katie's authentic portrait
      ========================================================================== */}
      <section className="relative pt-8 pb-16 sm:pt-16 sm:pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 md:px-8">
        {/* Soft sunlit warm glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[300px] bg-[#967243]/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
              {/* Location pill */}
              <div className="mb-4 sm:mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E2D6] text-[10px] sm:text-[11px] font-mono text-[#967243] uppercase tracking-wider shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#967243]" />
                  Weybridge Private Clinic
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[32px] sm:text-[44px] md:text-[54px] font-sans font-medium tracking-[-0.03em] leading-[1.12] text-[#1C1917] mb-5 sm:mb-6">
                Subtle, undetectable <br className="hidden sm:inline" />
                <span className="text-[#967243]">anti-ageing.</span>
              </h1>

              {/* Lead copy */}
              <p className="text-[#57534E] text-[15px] sm:text-[17px] font-light leading-relaxed max-w-xl mb-6 sm:mb-8">
                Led by Nurse Prescriber &amp; Clinic Owner Katie with 8+ years refining natural results. Every procedure is thoughtfully calibrated to enhance your facial harmony without looking altered.
              </p>

              {/* Action buttons (mobile full-width stacked, desktop inline) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
                <button
                  onClick={() => scrollToSection("consultation")}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 rounded-full bg-[#967243] text-white font-medium text-[12px] uppercase tracking-[0.14em] hover:bg-[#826135] active:scale-[0.98] transition-all duration-200 shadow-sm"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => scrollToSection("treatments")}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-full bg-white hover:bg-[#F3EFE8] text-[#1C1917] border border-[#DDD7CC] text-[12px] uppercase tracking-[0.14em] transition-all duration-200 shadow-sm"
                >
                  Explore Treatments
                </button>
              </div>

              {/* Credentials Trust Strip */}
              <div className="pt-6 border-t border-[#EAE5DD] w-full grid grid-cols-1 xs:grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6 text-[11px] font-mono text-[#6E675F]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#967243] flex-shrink-0" />
                  Nurse Prescriber Led
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#967243] flex-shrink-0" />
                  8+ Yrs Natural Results
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#967243] flex-shrink-0" />
                  Weybridge, Surrey
                </span>
              </div>
            </div>

            {/* Right Column: Editorial Portrait of Katie (5 cols) */}
            <div className="lg:col-span-5 order-1 lg:order-2 w-full">
              <div className="relative max-w-[300px] sm:max-w-[360px] lg:max-w-none mx-auto rounded-3xl overflow-hidden border border-[#E8E2D6] bg-white p-2 sm:p-2.5 shadow-[0_8px_30px_rgba(28,25,23,0.06)]">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#F3EFE8]">
                  <Image
                    src="/Katie.png"
                    alt="Katie, Nurse Prescriber and Clinic Owner at Fascia Aesthetics Weybridge"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 450px"
                    priority
                  />
                  {/* Subtle lower vignette for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Clean Caption Tag */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#EAE5DD] shadow-sm">
                    <span className="text-[#1C1917] text-xs sm:text-sm font-medium block leading-tight">
                      Katie
                    </span>
                    <span className="text-[#6E675F] text-[10px] sm:text-[11px] font-mono block mt-0.5">
                      Nurse Prescriber &amp; Clinic Owner • Weybridge
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. STANDARDS TRUST STRIP (WARM IVORY / STONE)
      ========================================================================== */}
      <section className="border-y border-[#EAE5DD] bg-[#F5F2EC] py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-[11px] sm:text-[12px] font-mono text-[#57534E]">
          <div className="flex items-start sm:items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#967243] flex-shrink-0 mt-1.5 sm:mt-0" />
            <div>
              <span className="text-[#1C1917] font-medium block sm:inline">NMC Registered </span>
              <span className="text-[#78716C] block sm:inline">Prescriber</span>
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#967243] flex-shrink-0 mt-1.5 sm:mt-0" />
            <div>
              <span className="text-[#1C1917] font-medium block sm:inline">Save Face </span>
              <span className="text-[#78716C] block sm:inline">Accredited</span>
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#967243] flex-shrink-0 mt-1.5 sm:mt-0" />
            <div>
              <span className="text-[#1C1917] font-medium block sm:inline">Weybridge Clinic </span>
              <span className="text-[#78716C] block sm:inline">Private</span>
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#967243] flex-shrink-0 mt-1.5 sm:mt-0" />
            <div>
              <span className="text-[#1C1917] font-medium block sm:inline">Personal Care </span>
              <span className="text-[#78716C] block sm:inline">Treated by Katie</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. TREATMENTS: 3 MINIMALIST WARM CARDS
      ========================================================================== */}
      <section id="treatments" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-10 sm:mb-16">
            <span className="text-xs font-mono text-[#967243] uppercase tracking-wider block mb-2">
              Clinical Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-medium text-[#1C1917] tracking-tight mb-3 sm:mb-4">
              Precision treatments. Balanced restraint.
            </h2>
            <p className="text-[#57534E] text-sm sm:text-base font-light leading-relaxed">
              We emphasize subtle balance over noticeable alterations. Every treatment is designed to restore natural facial geometry and skin health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Treatment 1 */}
            <div className="rounded-3xl border border-[#EAE5DD] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(28,25,23,0.03)] hover:border-[#D6CEC2] transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#967243] uppercase tracking-wider block mb-3">
                  01 / RESTORATION
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-medium text-[#1C1917] mb-3">
                  Anti-Wrinkle Micro-Treatments
                </h3>
                <p className="text-sm text-[#57534E] font-light leading-relaxed mb-6">
                  Targeted micro-dosing to soften expression lines across the forehead, glabella, and crow’s feet while fully preserving your emotive expression.
                </p>
                <ul className="space-y-2.5 text-xs text-[#57534E] font-light">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#967243]" />
                    Softens lines without freezing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#967243]" />
                    Preserves natural emotive expression
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#967243]" />
                    Complimentary 2-week review
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#F0EBE2] mt-6 sm:mt-8">
                <span className="text-[11px] font-mono text-[#8C8479]">
                  Treatment time: ~30 mins
                </span>
              </div>
            </div>

            {/* Treatment 2 */}
            <div className="rounded-3xl border border-[#EAE5DD] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(28,25,23,0.03)] hover:border-[#D6CEC2] transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#967243] uppercase tracking-wider block mb-3">
                  02 / STRUCTURE
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-medium text-[#1C1917] mb-3">
                  Dermal Support &amp; Contour
                </h3>
                <p className="text-sm text-[#57534E] font-light leading-relaxed mb-6">
                  Carefully placed hyaluronic acid support to subtly restore lost mid-face volume, refine the jawline, or hydrate lips with absolute moderation.
                </p>
                <ul className="space-y-2.5 text-xs text-[#57534E] font-light">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#967243]" />
                    Natural cheek &amp; tear-trough support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#967243]" />
                    Gentle jawline &amp; chin definition
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#967243]" />
                    Reversible, premium dermal products
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#F0EBE2] mt-6 sm:mt-8">
                <span className="text-[11px] font-mono text-[#8C8479]">
                  Treatment time: 45–60 mins
                </span>
              </div>
            </div>

            {/* Treatment 3 */}
            <div className="rounded-3xl border border-[#EAE5DD] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(28,25,23,0.03)] hover:border-[#D6CEC2] transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#967243] uppercase tracking-wider block mb-3">
                  03 / REJUVENATION
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-medium text-[#1C1917] mb-3">
                  Skin Longevity &amp; Profhilo®
                </h3>
                <p className="text-sm text-[#57534E] font-light leading-relaxed mb-6">
                  Profhilo® bio-remodeling, skin boosters, and polynucleotides to deeply hydrate, stimulate collagen, and restore luminous skin quality from within.
                </p>
                <ul className="space-y-2.5 text-xs text-[#57534E] font-light">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#967243]" />
                    Improves skin firmness &amp; elasticity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#967243]" />
                    Smooths fine crepey texture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#967243]" />
                    Deep hydration with zero added volume
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#F0EBE2] mt-6 sm:mt-8">
                <span className="text-[11px] font-mono text-[#8C8479]">
                  Course of 2 sessions recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ABOUT PRACTITIONER: EDITORIAL ESSAY
      ========================================================================== */}
      <section id="practitioner" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 border-t border-[#EAE5DD] bg-[#F5F2EC]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-mono text-[#967243] uppercase tracking-wider block mb-3 sm:mb-4">
            Practitioner &amp; Clinic Owner
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-medium text-[#1C1917] tracking-tight leading-snug mb-6 sm:mb-8">
            “The highest compliment a patient can receive is when friends say they look well-rested — never asking what treatment they had done.”
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-[#57534E] font-light leading-relaxed text-sm sm:text-base mb-10 sm:mb-12">
            <p>
              As an NMC-registered Nurse Prescriber with over eight years refining natural aesthetic results, Katie founded Fascia Aesthetics in Weybridge to offer a private, unhurried alternative to commercial cosmetic clinics.
            </p>
            <p>
              Every patient is seen, assessed, and treated directly by Katie. This ensures seamless continuity of medical care, complete transparency on outcomes, and aftercare you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[#E2DDD3] text-xs font-mono text-[#57534E]">
            <div className="p-4 rounded-2xl bg-white border border-[#EAE5DD]">
              <span className="text-[#1C1917] block font-medium mb-1">Nurse Prescriber</span>
              <span className="text-[#78716C]">V300 independent medical prescriber</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#EAE5DD]">
              <span className="text-[#1C1917] block font-medium mb-1">8+ Years Experience</span>
              <span className="text-[#78716C]">Dedicated exclusively to subtle aesthetics</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#EAE5DD]">
              <span className="text-[#1C1917] block font-medium mb-1">Direct Aftercare</span>
              <span className="text-[#78716C]">Direct follow-up communication with Katie</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CONSULTATION: CLEAN, LOW-FRICTION CONCIERGE
          - Inputs with 16px text-base on mobile to completely prevent iOS auto-zoom
      ========================================================================== */}
      <section id="consultation" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 border-t border-[#EAE5DD]">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-xs font-mono text-[#967243] uppercase tracking-wider block mb-2 sm:mb-3">
            Private Enquiry
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-medium text-[#1C1917] tracking-tight mb-3 sm:mb-4">
            Request a Consultation
          </h2>
          <p className="text-[#57534E] text-sm sm:text-base font-light mb-8 sm:mb-10">
            Consultations take place at our private clinic in Weybridge. You will meet directly with Katie for an unhurried, no-pressure discussion.
          </p>

          <div className="rounded-3xl border border-[#EAE5DD] bg-white p-6 sm:p-10 text-left shadow-[0_8px_30px_rgba(28,25,23,0.04)]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-[11px] font-mono text-[#57534E] uppercase tracking-wider mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      placeholder="e.g. Sarah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD7CC] text-[#1C1917] placeholder-[#A8A29E] text-base focus:outline-none focus:border-[#967243] focus:ring-1 focus:ring-[#967243] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-method"
                      className="block text-[11px] font-mono text-[#57534E] uppercase tracking-wider mb-1.5"
                    >
                      Email or Phone Number
                    </label>
                    <input
                      id="contact-method"
                      type="text"
                      placeholder="e.g. sarah@example.com or 07123 456789"
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD7CC] text-[#1C1917] placeholder-[#A8A29E] text-base focus:outline-none focus:border-[#967243] focus:ring-1 focus:ring-[#967243] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="core-concern"
                      className="block text-[11px] font-mono text-[#57534E] uppercase tracking-wider mb-1.5"
                    >
                      What would you like to discuss?
                    </label>
                    <textarea
                      id="core-concern"
                      rows={3}
                      placeholder="e.g. Subtle anti-ageing around eyes and forehead"
                      value={formData.concern}
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD7CC] text-[#1C1917] placeholder-[#A8A29E] text-base focus:outline-none focus:border-[#967243] focus:ring-1 focus:ring-[#967243] transition-colors resize-none"
                    />
                  </div>

                  {formError && (
                    <p className="text-xs text-red-600 font-mono">{formError}</p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#967243] hover:bg-[#826135] text-white font-medium text-xs uppercase tracking-[0.14em] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-[#8C8479] border-t border-[#F0EBE2]">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-[#967243]" /> Confidential
                    </span>
                    <span>Direct response within 24h</span>
                  </div>
                </form>
              ) : (
                <div className="py-6 sm:py-8 text-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#967243]/10 text-[#967243] flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-sans font-medium text-[#1C1917]">
                    Request Received
                  </h3>
                  <p className="text-sm text-[#57534E] max-w-sm mx-auto font-light leading-relaxed">
                    Thank you, {formData.name}. Katie will review your note and contact you privately via {formData.contactMethod} to arrange your appointment at our Weybridge clinic.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", contactMethod: "", concern: "" });
                    }}
                    className="text-xs font-mono text-[#967243] hover:underline underline-offset-4 mt-2"
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
          7. MINIMAL FOOTER
      ========================================================================== */}
      <footer className="border-t border-[#EAE5DD] py-10 sm:py-12 px-4 sm:px-6 md:px-8 text-[#78716C] text-[11px] font-mono bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span className="text-[#1C1917] font-medium font-sans text-sm">
              Fascia Aesthetics
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Katie, Nurse Prescriber • Weybridge, Surrey</span>
          </div>

          <div className="flex items-center gap-5 sm:gap-6">
            <Link href="/work/fascia" className="hover:text-[#1C1917] transition-colors">
              Concept Breakdown
            </Link>
            <Link href="/work" className="hover:text-[#1C1917] transition-colors">
              Portfolio
            </Link>
            <Link href="/" className="hover:text-[#967243] transition-colors">
              Veltris Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
