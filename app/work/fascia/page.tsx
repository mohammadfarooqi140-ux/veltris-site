import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldAlert, Sparkles, ShieldCheck, Microscope, UserCheck, Lock } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export const metadata: Metadata = {
  title: "Fascia Aesthetics — Independent Concept Breakdown | Veltris",
  description:
    "An independent concept study exploring how an elite medical aesthetics practice replaces generic booking calendars with high-trust clinical positioning and a bespoke concierge enquiry journey.",
  alternates: {
    canonical: "https://www.veltris.uk/work/fascia",
  },
  openGraph: {
    title: "Fascia Aesthetics — Independent Concept Breakdown | Veltris",
    description:
      "An independent concept study exploring how an elite medical aesthetics practice replaces generic booking calendars with high-trust clinical positioning and a bespoke concierge enquiry journey.",
    url: "https://www.veltris.uk/work/fascia",
    siteName: "Veltris",
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fascia Aesthetics — Independent Concept Breakdown | Veltris",
    description:
      "An independent concept study exploring how an elite medical aesthetics practice replaces generic booking calendars with high-trust clinical positioning and a bespoke concierge enquiry journey.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Fascia Aesthetics — Independent Concept Breakdown",
  "description":
    "Fascia Aesthetics explores how a premium medical aesthetic clinic positions clinical authority, safe anatomical restoration, and frictionless concierge access.",
  "author": {
    "@type": "Person",
    "name": "Muhammad",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Veltris",
    "url": "https://www.veltris.uk/",
  },
};

export default function FasciaConceptBreakdownPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-paper text-ink pt-32 pb-24 relative selection:bg-surface-raised selection:text-ink">
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          {/* =========================================================================
              BACK NAVIGATION & HEADER
          ========================================================================== */}
          <div className="mb-12">
            <FadeInUp>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted hover:text-ink transition-colors mb-8"
              >
                ← Back to Selected Work
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-mono text-[#d49a37] font-semibold tracking-widest uppercase">
                  Flagship Concept Study 01
                </span>
                <span className="text-zinc-600 font-mono text-xs">•</span>
                <span className="text-xs font-mono uppercase tracking-wider text-ink-dim">
                  Medical Aesthetics &amp; Clinical Restorations
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-playfair font-medium tracking-tight mb-6 text-ink leading-[1.08]">
                Fascia Aesthetics
              </h1>

              <div className="inline-block rounded-full bg-surface-raised border border-border-subtle px-4 py-1.5 text-xs font-mono text-ink-muted mb-8">
                Independent concept study for an ultra-premium medical aesthetics clinic
              </div>

              <p className="text-ink-muted text-lg sm:text-xl font-light leading-relaxed max-w-3xl">
                Fascia Aesthetics explores how a practitioner-led clinic solves the central friction in high-end aesthetic medicine: patient apprehension surrounding overfilled, unnatural results. By replacing generic automated booking engines with high-trust anatomical positioning and an elite concierge entry, the clinic builds clinical authority and pre-qualifies discerning patients.
              </p>
            </FadeInUp>
          </div>

          {/* =========================================================================
              HERO PREVIEW CARD / INTERACTIVE LINK
          ========================================================================== */}
          <section className="mb-20">
            <FadeInUp delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden border border-border-subtle bg-surface shadow-2xl p-6 sm:p-10">
                {/* Preview Banner Container */}
                <div className="relative min-h-[320px] sm:min-h-[380px] w-full rounded-2xl overflow-hidden mb-8 border border-white/[0.08] bg-zinc-950 flex flex-col justify-between p-6 sm:p-8">
                  {/* Visual Wireframe / Vector Atmosphere */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d49a37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d49a37]/[0.06] rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d49a37] bg-[#d49a37]/10 border border-[#d49a37]/30 px-3 py-1 rounded-full">
                      Interactive Prototype Available
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      Mobile-First Architecture
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 my-6">
                    <div className="max-w-md">
                      <span className="text-xs font-mono text-zinc-400 block mb-1">
                        PRACTITIONER-LED CLINICAL RESTORATIONS
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-[-0.03em] text-white leading-tight mb-4">
                        “Subtle, undetectable anti-ageing.”
                      </h2>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden relative border border-white/[0.08] bg-zinc-900 flex-shrink-0">
                          <Image
                            src="/Katie.png"
                            alt="Katie, Founder & Registered Nurse"
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-white block">Katie</span>
                          <span className="text-[11px] font-mono text-zinc-400 block">Nurse Prescriber | Clinic Owner • Weybridge</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/fascia"
                      className="inline-flex items-center justify-center gap-2 bg-[#d49a37] hover:bg-[#e4a844] text-zinc-950 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all self-start md:self-auto shadow-[0_10px_30px_rgba(212,154,55,0.25)] hover:scale-105"
                    >
                      Launch Live Prototype <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-ink-muted">
                  <div className="p-4 rounded-xl bg-surface-raised/60 border border-border-subtle">
                    <span className="text-ink-dim block mb-1">Clinic Archetype</span>
                    <span className="text-ink font-sans font-medium">Nurse Prescriber Aesthetic Clinic (Weybridge)</span>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-raised/60 border border-border-subtle">
                    <span className="text-ink-dim block mb-1">Core Positioning</span>
                    <span className="text-ink font-sans font-medium">Subtle, Undetectable Anti-Ageing</span>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-raised/60 border border-border-subtle">
                    <span className="text-ink-dim block mb-1">Clinical Provenance</span>
                    <span className="text-ink font-sans font-medium">8+ Yrs Refining Natural Results</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </section>

          {/* =========================================================================
              CONCEPT BREAKDOWN SECTIONS
          ========================================================================== */}
          <div className="space-y-16 border-t border-border-subtle pt-16">
            {/* 1. Market Context & The Medical Dilemma */}
            <section>
              <FadeInUp>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-2">
                      01 / Market Context
                    </span>
                    <h2 className="text-2xl font-playfair font-medium text-ink">
                      The Aesthetic Dilemma
                    </h2>
                  </div>
                  <div className="md:col-span-8 space-y-4 text-ink-muted text-base font-light leading-relaxed">
                    <p>
                      The aesthetic medicine market in the UK is heavily saturated with high-volume, discount-driven clinics that compete on syringe pricing (e.g. &ldquo;£99 per ml&rdquo;). This commoditization repels discerning, high-net-worth clients who are terrified of looking overfilled, distorted, or &ldquo;done&rdquo;.
                    </p>
                    <p>
                      For highly skilled medical practitioners like Katie (an NMC-registered Nurse Prescriber and Weybridge Clinic Owner with 8+ years refining natural results), a standard cosmetic website with generic booking widgets diminishes perceived value and fails to communicate medical safety, diagnostic precision, and anatomical restraint.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </section>

            {/* 2. Positioning Strategy */}
            <section className="border-t border-border-subtle pt-16">
              <FadeInUp>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-2">
                      02 / Positioning
                    </span>
                    <h2 className="text-2xl font-playfair font-medium text-ink">
                      Positioning Authority
                    </h2>
                  </div>
                  <div className="md:col-span-8 space-y-4 text-ink-muted text-base font-light leading-relaxed">
                    <p>
                      Veltris structured Fascia Aesthetics around <strong className="text-ink font-medium">“Clinical Restorations”</strong> rather than superficial enhancement. The central thesis is that the highest aesthetic standard is undetectable—vitality and natural geometry restored without erasing individual character.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-surface/50 border border-border-subtle">
                        <span className="text-xs font-mono text-[#d49a37] block mb-2">Conventional Clinic Trap</span>
                        <p className="text-xs text-ink-muted font-light leading-relaxed">
                          Automated calendar widgets that treat complex medical procedures like haircut appointments, encouraging spontaneous impulse buys without adequate pre-consultation screening.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-surface/50 border border-border-subtle">
                        <span className="text-xs font-mono text-ink block mb-2">The Fascia Standard</span>
                        <p className="text-xs text-ink-muted font-light leading-relaxed">
                          A curated concierge assessment request that initiates a 1-on-1 clinical dialogue with Katie, backed by mandatory cooling-off periods and emergency complication readiness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </section>

            {/* 3. UX & Visual Architecture */}
            <section className="border-t border-border-subtle pt-16">
              <FadeInUp>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-2">
                      03 / Architecture
                    </span>
                    <h2 className="text-2xl font-playfair font-medium text-ink">
                      Design System &amp; Craft
                    </h2>
                  </div>
                  <div className="md:col-span-8 space-y-4 text-ink-muted text-base font-light leading-relaxed">
                    <p>
                      The interface design rejects generic SaaS trends and overly feminine pink pastel cliches in favor of a strictly calibrated, ultra-premium medical luxury dark mode:
                    </p>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#d49a37] flex-shrink-0 mt-0.5" />
                        <span><strong className="text-ink font-medium">Deep Matte Zinc-950 Canvas:</strong> Provides clinical intimacy, reduces eye strain, and elevates the perceived luxury of private practice medicine.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#d49a37] flex-shrink-0 mt-0.5" />
                        <span><strong className="text-ink font-medium">Selective Amber/Gold Accent:</strong> Used with extreme discipline (oklch(0.65 0.12 75)) solely for primary conversion actions, avoiding gaudy or distracting visual noise.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#d49a37] flex-shrink-0 mt-0.5" />
                        <span><strong className="text-ink font-medium">8-Point Spacing Grid:</strong> Mathematical layout consistency throughout all sections, providing generous vertical breathing room that conveys calm confidence.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#d49a37] flex-shrink-0 mt-0.5" />
                        <span><strong className="text-ink font-medium">Service Architecture:</strong> Organizes anti-wrinkle treatments, structural dermal support, and cellular skincare into a clean, minimalist hierarchy with generous negative space.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInUp>
            </section>

            {/* 4. Transparency Note */}
            <section className="border-t border-border-subtle pt-16">
              <FadeInUp>
                <div className="p-6 rounded-2xl bg-surface/50 border border-border-subtle flex items-start gap-4">
                  <ShieldAlert className="w-5 h-5 text-[#d49a37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs font-semibold text-ink uppercase tracking-wider mb-1 font-mono">
                      Concept Transparency Note
                    </h3>
                    <p className="text-xs text-ink-muted font-light leading-relaxed">
                      Fascia Aesthetics is an independent concept study engineered by Veltris to demonstrate how elite healthcare and aesthetic medicine clinics can elevate digital positioning and conversion without compromising medical ethics or regulatory dignity.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </section>

            {/* 5. Next Actions */}
            <section className="border-t border-border-subtle pt-16">
              <FadeInUp>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-surface border border-border-subtle">
                  <div>
                    <h3 className="text-xl font-playfair font-medium text-ink mb-2">
                      Experience the Live Prototype
                    </h3>
                    <p className="text-sm text-ink-muted font-light">
                      Interact with the responsive mobile-first landing page and concierge flow.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/fascia"
                      className="inline-flex items-center gap-2 bg-ink text-paper font-semibold px-6 py-3.5 rounded-full text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-lg"
                    >
                      Open Prototype <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/work"
                      className="text-xs font-mono uppercase tracking-wider text-ink-dim hover:text-ink transition-colors"
                    >
                      All Studies
                    </Link>
                  </div>
                </div>
              </FadeInUp>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
