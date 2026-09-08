import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldAlert, Sparkles, ShieldCheck } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export const metadata: Metadata = {
  title: "Berkshire Dental Suite — Independent Concept Breakdown | Veltris",
  description:
    "An independent concept study exploring how a private dental and implant clinic replaces broken template links and generic clinical blue with warm modern clinical positioning, verified clinician credentials, and a frictionless mobile consultation journey.",
  alternates: {
    canonical: "https://www.veltris.uk/work/berkshire",
  },
  openGraph: {
    title: "Berkshire Dental Suite — Independent Concept Breakdown | Veltris",
    description:
      "An independent concept study exploring how a private dental and implant clinic replaces broken template links and generic clinical blue with warm modern clinical positioning, verified clinician credentials, and a frictionless mobile consultation journey.",
    url: "https://www.veltris.uk/work/berkshire",
    siteName: "Veltris",
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berkshire Dental Suite — Independent Concept Breakdown | Veltris",
    description:
      "An independent concept study exploring how a private dental and implant clinic replaces broken template links and generic clinical blue with warm modern clinical positioning, verified clinician credentials, and a frictionless mobile consultation journey.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Berkshire Dental Suite — Independent Concept Breakdown",
  "description":
    "Berkshire Dental Suite explores how an elite dental clinic led by Restorative and Implant Specialist Dr Ismael Khan establishes clinical authority, patient trust, and seamless mobile appointment booking.",
  "author": {
    "@type": "Person",
    "name": "Veltris",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Veltris",
    "url": "https://www.veltris.uk/",
  },
};

export default function BerkshireConceptBreakdownPage() {
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
                <span className="text-xs font-mono text-[#5E5EEE] font-semibold tracking-widest uppercase">
                  Concept Breakdown 04
                </span>
                <span className="text-zinc-600 font-mono text-xs">•</span>
                <span className="text-xs font-mono uppercase tracking-wider text-ink-dim">
                  Private Dentistry &amp; Implants
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-playfair font-medium tracking-tight mb-6 text-ink leading-[1.08]">
                Berkshire Dental Suite
              </h1>

              <div className="inline-block rounded-full bg-surface-raised border border-border-subtle px-4 py-1.5 text-xs font-mono text-ink-muted mb-8">
                Independent concept study for an elite private dental clinic in Slough
              </div>

              <p className="text-ink-muted text-lg sm:text-xl font-light leading-relaxed max-w-3xl">
                Berkshire Dental Suite explores how a private clinic led by Restorative and Implant Specialist Dr Ismael Khan solves the critical issues of the live website: broken external demo theme links, mislabelled treatment cards, and generic clinical blue clichés. By leaning into an authentic warm cream palette, verified clinician credentials, and a mobile-first consultation enquiry journey, the concept elevates patient trust and conversion.
              </p>
            </FadeInUp>
          </div>

          {/* =========================================================================
              HERO PREVIEW CARD / INTERACTIVE LINK
          ========================================================================== */}
          <section className="mb-20">
            <FadeInUp delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden border border-border-subtle bg-surface shadow-2xl p-6 sm:p-10">
                <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 border border-border-subtle bg-[#1D1D1D]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://berkshiredentalsuite.co.uk/wp-content/uploads/2026/09/berikshire-dental-practice.jpg"
                    alt="Berkshire Dental Suite Concept Preview"
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5E5EEE] bg-[#5E5EEE]/15 border border-[#5E5EEE]/30 px-2.5 py-1 rounded-full mb-2 inline-block">
                        Interactive Mobile-First Concept
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">
                        Live Clinic Prototype
                      </h2>
                    </div>
                    <Link
                      href="/berkshire"
                      className="inline-flex items-center justify-center gap-2 bg-[#5E5EEE] hover:bg-[#4d4de0] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors self-start sm:self-auto shadow-lg"
                    >
                      View Live Prototype <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-ink-muted">
                  <div className="p-4 rounded-xl bg-surface-raised/60 border border-border-subtle">
                    <span className="text-ink-dim block mb-1">Clinic Focus</span>
                    <span className="text-ink font-sans font-medium">Restorative, Implants &amp; Cosmetic Dentistry</span>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-raised/60 border border-border-subtle">
                    <span className="text-ink-dim block mb-1">Clinical Leadership</span>
                    <span className="text-ink font-sans font-medium">Dr Ismael Khan DMD, PGCert, PGDip</span>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-raised/60 border border-border-subtle">
                    <span className="text-ink-dim block mb-1">Location Strategy</span>
                    <span className="text-ink font-sans font-medium">Cornwall House, Slough, Berkshire</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </section>

          {/* =========================================================================
              THE STRATEGIC CONTEXT & PROBLEMS SOLVED
          ========================================================================== */}
          <section className="mb-20">
            <FadeInUp>
              <div className="border-t border-border-subtle pt-16">
                <span className="text-xs font-mono text-ink-dim uppercase tracking-widest block mb-4">
                  01 / Strategic Audit
                </span>
                <h2 className="text-3xl sm:text-4xl font-playfair font-medium text-ink mb-6">
                  Resolving friction in the patient enquiry journey
                </h2>
                <div className="prose prose-invert max-w-none text-ink-muted font-light leading-relaxed space-y-4 text-base sm:text-lg mb-12">
                  <p>
                    A clinical audit of the live WordPress website identified strong underlying trust assets (24 5-star reviews on Google, modern facilities, and a qualified clinician team led by Visiting Implantologist Dr Ismael Khan). However, several structural issues undermined conversion:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-surface border border-border-subtle">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-ink font-semibold mb-3">
                      1. Broken External Demo Links
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed font-light">
                      Several homepage treatment cards pointed to an external theme developer URL (<code className="text-xs bg-surface-raised px-1.5 py-0.5 rounded text-ink">demo.awaikenthemes.com/primecare/...</code>). The concept replaces this with clear in-page modals, keeping patients immersed on the site.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-border-subtle">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-ink font-semibold mb-3">
                      2. Clinical Identity &amp; Palette
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed font-light">
                      Rather than falling back on sterile, cold dental blue, the concept leverages the clinic&apos;s existing warm cream (<code className="text-xs bg-surface-raised px-1.5 py-0.5 rounded text-ink">#F1E7D8</code>) and charcoal palette, establishing a calm, approachable, and premium environment.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-border-subtle">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-ink font-semibold mb-3">
                      3. Buried Doctor Authority
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed font-light">
                      Dr Ismael Khan&apos;s extensive surgical education (including international implant training in Brazil) and role as a Visiting Implantologist were under-emphasised. The concept elevates his exact verified credential string and roles clearly.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface border border-border-subtle">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-ink font-semibold mb-3">
                      4. Touch-Friendly Clinical Evidence
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed font-light">
                      The before-and-after cases are presented with intuitive horizontal touch sliders and discrete before/after tabs, accompanied by a transparent disclaimer confirming that exact clinical plans depend on individual diagnosis.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </section>

          {/* =========================================================================
              KEY WEBSITE DECISIONS DEMONSTRATED
          ========================================================================== */}
          <section className="mb-20">
            <FadeInUp>
              <div className="border-t border-border-subtle pt-16">
                <span className="text-xs font-mono text-ink-dim uppercase tracking-widest block mb-4">
                  02 / Architecture &amp; Decisions
                </span>
                <h2 className="text-3xl sm:text-4xl font-playfair font-medium text-ink mb-6">
                  Key design decisions demonstrated
                </h2>

                <div className="space-y-4 mb-12">
                  <div className="p-5 rounded-2xl bg-surface border border-border-subtle flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#5E5EEE] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm font-semibold text-ink mb-1">
                        Warm Modern Clinical Brand System
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                        Combines warm cream (#F1E7D8), charcoal (#292929), near-black (#1D1D1D), and restrained blue-violet accents (#5E5EEE) with clean geometric Montserrat typography to deliver patient reassurance without aggressive cosmetic advertising.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface border border-border-subtle flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#5E5EEE] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm font-semibold text-ink mb-1">
                        Clear Clinician Authority
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                        Features Dr Ismael Khan DMD, PGCert, PGDip with verified roles as Principal Dentist, Founder, Restorative &amp; Implant Dentistry Specialist, and Visiting Implantologist, with neutral facts about his training in the UK and Brazil.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface border border-border-subtle flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#5E5EEE] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm font-semibold text-ink mb-1">
                        4 Interactive Before-and-After Cases
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                        Preserves all 4 comparisons from the source website with interactive touch-enabled split sliders, clear case descriptions, and a transparent medical disclaimer.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface border border-border-subtle flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#5E5EEE] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm font-semibold text-ink mb-1">
                        Transparent Opening Hours &amp; Frictionless Enquiry Journey
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                        Highlights key patient scheduling advantages (Monday &amp; Wednesday evening care until 8pm, Friday to Sunday weekend appointments), coupled with a 4-field consultation enquiry prototype and direct click-to-call links.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-surface/50 border border-border-subtle">
                  <div className="flex items-start gap-4">
                    <ShieldAlert className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xs font-semibold text-ink uppercase tracking-wider mb-1 font-mono">
                        Concept Transparency Note
                      </h3>
                      <p className="text-xs text-ink-muted font-light leading-relaxed">
                        This is an independent concept study created by Veltris to demonstrate mobile-first design, trust architecture, and appointment conversion for private dental practices. It is not an official client deployment and does not replace Berkshire Dental Suite&apos;s live services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </section>

          {/* =========================================================================
              BOTTOM CTA / LAUNCH PROTOTYPE
          ========================================================================== */}
          <section className="py-12 border-t border-border-subtle text-center">
            <FadeInUp>
              <div className="bg-surface border border-border-subtle rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-3xl mx-auto">
                <span className="text-xs font-mono text-[#5E5EEE] uppercase tracking-widest block mb-3">
                  Experience the Prototype
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl font-medium mb-6 text-ink leading-tight">
                  Explore Berkshire Dental Suite
                </h2>
                <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl mx-auto">
                  View the full single-page mobile-first prototype with interactive treatment drawers, before-and-after sliders, and consultation enquiry flow.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/berkshire"
                    className="inline-flex items-center justify-center gap-2 bg-[#5E5EEE] hover:bg-[#4d4de0] text-white font-semibold px-8 py-4 rounded-full text-xs uppercase tracking-[0.18em] transition-colors shadow-lg"
                  >
                    View Live Prototype <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center gap-2 bg-surface-raised hover:bg-surface-raised/80 text-ink font-semibold px-8 py-4 rounded-full text-xs uppercase tracking-[0.18em] transition-colors border border-border-subtle"
                  >
                    All Concept Studies
                  </Link>
                </div>
              </div>
            </FadeInUp>
          </section>
        </div>
      </main>
    </>
  );
}
