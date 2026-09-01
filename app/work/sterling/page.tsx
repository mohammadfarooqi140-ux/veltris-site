import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldAlert } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export const metadata: Metadata = {
  title: "Sterling — Independent Concept Breakdown | Veltris",
  description:
    "An independent concept study exploring how an industrial trade contractor can make complex technical services and compliance specifications easy to understand and enquire about.",
  alternates: {
    canonical: "https://www.veltris.uk/work/sterling",
  },
  openGraph: {
    title: "Sterling — Independent Concept Breakdown | Veltris",
    description:
      "An independent concept study exploring how an industrial trade contractor can make complex technical services and compliance specifications easy to understand and enquire about.",
    url: "https://www.veltris.uk/work/sterling",
    siteName: "Veltris",
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sterling — Independent Concept Breakdown | Veltris",
    description:
      "An independent concept study exploring how an industrial trade contractor can make complex technical services and compliance specifications easy to understand and enquire about.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Sterling Industrial Flooring — Independent Concept Breakdown",
  "description":
    "Sterling explores how a technical industrial business can make complex services easier to understand and easier to enquire about.",
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

export default function SterlingConceptBreakdownPage() {
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
                <span className="text-xs font-mono text-accent font-semibold tracking-widest uppercase">
                  Concept Breakdown 02
                </span>
                <span className="text-zinc-600 font-mono text-xs">•</span>
                <span className="text-xs font-mono uppercase tracking-wider text-ink-dim">
                  Industrial Contracting
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-playfair font-medium tracking-tight mb-6 text-ink leading-[1.08]">
                Sterling Industrial Flooring
              </h1>

              <div className="inline-block rounded-full bg-surface-raised border border-border-subtle px-4 py-1.5 text-xs font-mono text-ink-muted mb-8">
                Independent concept study for an industrial trade business
              </div>

              <p className="text-ink-muted text-lg sm:text-xl font-light leading-relaxed max-w-3xl">
                Sterling explores how a technical industrial business can make complex services easier to understand and easier to enquire about. The concept uses structured service information, technical specifications, accreditation and compliance signals, and a focused site survey booking path.
              </p>
            </FadeInUp>
          </div>

          {/* =========================================================================
              HERO PREVIEW CARD / INTERACTIVE LINK
          ========================================================================== */}
          <section className="mb-20">
            <FadeInUp delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden border border-border-subtle bg-surface shadow-2xl p-6 sm:p-10">
                <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 border border-border-subtle">
                  <Image
                    src="/images/hero.jpg"
                    alt="Sterling Industrial Flooring Concept Preview"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#c75b2a] bg-[#c75b2a]/10 border border-[#c75b2a]/30 px-2.5 py-1 rounded-full mb-2 inline-block">
                        Interactive Study Available
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">
                        Live Concept Experience
                      </h2>
                    </div>
                    <Link
                      href="/sterling"
                      className="inline-flex items-center justify-center gap-2 bg-[#c75b2a] hover:bg-[#a64920] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors self-start sm:self-auto shadow-lg"
                    >
                      View Interactive Concept <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-ink-muted">
                  <div className="p-4 rounded-xl bg-surface-raised/60 border border-border-subtle">
                    <span className="text-ink-dim block mb-1">Target Sector</span>
                    <span className="text-ink font-sans font-medium">UK Logistics, Warehousing &amp; Manufacturing</span>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-raised/60 border border-border-subtle">
                    <span className="text-ink-dim block mb-1">Primary Decision</span>
                    <span className="text-ink font-sans font-medium">Book a Free On-Site Survey</span>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-raised/60 border border-border-subtle">
                    <span className="text-ink-dim block mb-1">Assessment Window</span>
                    <span className="text-ink font-sans font-medium">48-Hour Technical Assessment</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </section>

          {/* =========================================================================
              CONCEPT BREAKDOWN SECTIONS
          ========================================================================== */}
          <div className="space-y-16 border-t border-border-subtle pt-16">
            {/* 1. Business Context */}
            <section>
              <FadeInUp>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-2">
                      01 / Context
                    </span>
                    <h2 className="text-2xl font-playfair font-medium text-ink">
                      Business Context
                    </h2>
                  </div>
                  <div className="md:col-span-8 space-y-4 text-ink-muted text-base font-light leading-relaxed">
                    <p>
                      Specialist industrial contractors often operate in high-value, high-consequence environments (warehouses, factories, pharmaceutical plants). A facility shut down for flooring installation costs thousands of pounds per day in operational downtime.
                    </p>
                    <p>
                      Operations managers require fast, reliable clarity on material durability, compliance standards, chemical resistance, and installation speed before they will agree to a site survey.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </section>

            {/* 2. Strategic Problem Explored */}
            <section className="border-t border-border-subtle pt-16">
              <FadeInUp>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-2">
                      02 / Strategy
                    </span>
                    <h2 className="text-2xl font-playfair font-medium text-ink">
                      Strategic Problem Explored
                    </h2>
                  </div>
                  <div className="md:col-span-8 space-y-4 text-ink-muted text-base font-light leading-relaxed">
                    <p>
                      How can a highly technical contractor communicate industrial-grade capability without overwhelming non-technical procurement stakeholders or losing technical buyers who need hard specifications?
                    </p>
                    <p>
                      The exploration focused on balancing technical precision with commercial usability: categorising flooring chemistry clearly while streamlining the route to an on-site survey.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </section>

            {/* 3. Structural & Messaging Decisions */}
            <section className="border-t border-border-subtle pt-16">
              <FadeInUp>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-2">
                      03 / Architecture
                    </span>
                    <h2 className="text-2xl font-playfair font-medium text-ink">
                      Structural &amp; Messaging Decisions
                    </h2>
                  </div>
                  <div className="md:col-span-8 space-y-6 text-ink-muted text-base font-light leading-relaxed">
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-surface/50 border border-border-subtle flex gap-4 items-start">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-playfair text-lg font-medium text-ink mb-1">
                            Technical System Classification
                          </h3>
                          <p className="text-sm">
                            Flooring solutions are structured into clear application types: Epoxy Flooring Systems, Heavy-Duty Resin, and Concrete Polishing.
                          </p>
                        </div>
                      </div>

                      <div className="p-5 rounded-2xl bg-surface/50 border border-border-subtle flex gap-4 items-start">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-playfair text-lg font-medium text-ink mb-1">
                            Operational Downtime Framing
                          </h3>
                          <p className="text-sm">
                            Direct messaging addresses the client&apos;s biggest operational risk: rapid installation turnarounds designed around weekend schedules to protect production continuity.
                          </p>
                        </div>
                      </div>

                      <div className="p-5 rounded-2xl bg-surface/50 border border-border-subtle flex gap-4 items-start">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-playfair text-lg font-medium text-ink mb-1">
                            Accreditation &amp; Compliance Bar
                          </h3>
                          <p className="text-sm">
                            Industry accreditations (CHAS, SafeContractor, ISO standards) are prominently positioned to satisfy procurement and health &amp; safety requirements immediately.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </section>

            {/* 4. Visual Direction */}
            <section className="border-t border-border-subtle pt-16">
              <FadeInUp>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-2">
                      04 / Visual System
                    </span>
                    <h2 className="text-2xl font-playfair font-medium text-ink">
                      Visual Direction
                    </h2>
                  </div>
                  <div className="md:col-span-8 space-y-4 text-ink-muted text-base font-light leading-relaxed">
                    <p>
                      The aesthetic leans into industrial precision: clean monochrome surfaces, high-contrast typography, crisp borders, and dark industrial photography showing material textures and equipment.
                    </p>
                    <p>
                      A warm amber accent color provides decisive visual hierarchy for CTAs and status signals without looking playful or decorative.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </section>

            {/* 5. Enquiry or Conversion Path */}
            <section className="border-t border-border-subtle pt-16">
              <FadeInUp>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-2">
                      05 / Conversion
                    </span>
                    <h2 className="text-2xl font-playfair font-medium text-ink">
                      Enquiry &amp; Conversion Path
                    </h2>
                  </div>
                  <div className="md:col-span-8 space-y-4 text-ink-muted text-base font-light leading-relaxed">
                    <p>
                      Rather than asking for generic contact messages, every section drives toward booking a free on-site survey.
                    </p>
                    <p>
                      This directly fits the commercial workflow of industrial contracting, where an on-site moisture and substrate test is the necessary precursor to any formal commercial proposal.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </section>

            {/* 6. Responsive Considerations */}
            <section className="border-t border-border-subtle pt-16">
              <FadeInUp>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-2">
                      06 / Mobile &amp; Usability
                    </span>
                    <h2 className="text-2xl font-playfair font-medium text-ink">
                      Responsive Considerations
                    </h2>
                  </div>
                  <div className="md:col-span-8 space-y-4 text-ink-muted text-base font-light leading-relaxed">
                    <p>
                      Technical specifications and service cards wrap into intuitive vertical stacks on narrow viewports, preventing horizontal clipping on standard mobile devices.
                    </p>
                    <p>
                      Form fields and survey triggers maintain prominent touch targets and accessible contrast ratios for fast on-the-go submission.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </section>
          </div>

          {/* =========================================================================
              CONCEPT TRANSPARENCY NOTICE
          ========================================================================== */}
          <section className="my-20 p-8 rounded-3xl bg-surface/60 border border-border-subtle">
            <FadeInUp>
              <div className="flex items-start gap-4">
                <ShieldAlert className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-ink font-semibold mb-2">
                    Concept Transparency Note
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed font-light">
                    This is an independent concept study created by Veltris. It is not commissioned client work and does not represent an existing company.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </section>

          {/* =========================================================================
              BOTTOM ACTION BAR / CTA
          ========================================================================== */}
          <section className="border-t border-border-subtle pt-16 text-center">
            <FadeInUp>
              <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-ink mb-4">
                Explore a similar direction for your business
              </h2>
              <p className="text-ink-muted text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
                If your business needs a clearer structure, stronger presentation, or a more intuitive enquiry journey, discuss your website challenge with Veltris.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-zinc-200 active:scale-[0.98] shadow-lg"
                >
                  Discuss your website <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/sterling"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-surface border border-border-subtle text-ink font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-surface-raised active:scale-[0.98]"
                >
                  Launch Interactive Prototype
                </Link>
              </div>
            </FadeInUp>
          </section>
        </div>
      </main>
    </>
  );
}
