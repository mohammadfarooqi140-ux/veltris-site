import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldAlert, Layers } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export const metadata: Metadata = {
  title: "Selected Concept Work | Veltris",
  description:
    "Explore independent Veltris concept studies demonstrating clear positioning, refined visual direction, and purposeful enquiry journeys.",
  alternates: {
    canonical: "https://www.veltris.uk/work",
  },
  openGraph: {
    title: "Selected Concept Work | Veltris",
    description:
      "Explore independent Veltris concept studies demonstrating clear positioning, refined visual direction, and purposeful enquiry journeys.",
    url: "https://www.veltris.uk/work",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Concept Work | Veltris",
    description:
      "Explore independent Veltris concept studies demonstrating clear positioning, refined visual direction, and purposeful enquiry journeys.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Selected Concept Work | Veltris",
  "url": "https://www.veltris.uk/work",
  "description":
    "Explore independent Veltris concept studies demonstrating clear positioning, refined visual direction, and purposeful enquiry journeys.",
};

const conceptStudies = [
  {
    tag: "INDEPENDENT CONCEPT STUDY 01",
    title: "Hartley & Co. Builders",
    category: "Construction & Commercial Build",
    label: "Independent concept study for a mainstream construction business",
    description:
      "Hartley explores how a construction business can present its services with more clarity, confidence, and commercial credibility. The concept is structured around understandable service categories, visible trust signals, project context, and a direct route to request a quote.",
    breakdownHref: "/work/hartley",
    prototypeHref: "/hartley",
    decisions: [
      "Fixed-price quote enquiry flow",
      "Clear service categorisation",
      "Immediate trust & accreditation signals",
      "Dedicated project management reassurance",
    ],
  },
  {
    tag: "INDEPENDENT CONCEPT STUDY 02",
    title: "Sterling Industrial Flooring",
    category: "Specialist Industrial Contracting",
    label: "Independent concept study for an industrial trade business",
    description:
      "Sterling explores how a technical industrial business can make complex services easier to understand and easier to enquire about. The concept uses structured service information, technical specifications, accreditation and compliance signals, and a focused site survey booking path.",
    breakdownHref: "/work/sterling",
    prototypeHref: "/sterling",
    decisions: [
      "Frictionless site survey booking path",
      "Technical floor system breakdowns",
      "Accreditation & compliance proof",
      "Operational downtime & weekend scheduling messaging",
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-paper text-ink pt-32 pb-24 relative selection:bg-surface-raised selection:text-ink">
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          {/* =========================================================================
              HEADER
          ========================================================================== */}
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <FadeInUp>
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-dim block mb-6">
                SELECTED CONCEPT WORK
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-medium tracking-tight mb-6 leading-[1.08] text-ink">
                Concept work designed for clarity, trust, and conversion.
              </h1>

              <p className="text-ink-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                Explore independent Veltris concept studies created to demonstrate how positioning, visual hierarchy, responsive layout, and purposeful enquiry routes come together in practice.
              </p>
            </FadeInUp>
          </div>

          {/* =========================================================================
              SHOWCASE CONCEPTS GRID
          ========================================================================== */}
          <section className="mb-28" aria-label="Selected Concept Studies">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {conceptStudies.map((study, idx) => (
                <FadeInUp key={study.tag} delay={idx * 0.1}>
                  <div className="bg-surface/50 border border-border-subtle rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full transition-all group hover:bg-surface-raised/60 hover:border-border shadow-lg">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                        <span className="text-[10px] font-mono text-accent font-semibold tracking-widest">
                          {study.tag}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#70785B] bg-[#70785B]/10 border border-[#70785B]/30 px-2.5 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#70785B]" />
                          Independent Concept
                        </span>
                      </div>

                      <span className="text-[11px] font-mono uppercase tracking-wider text-ink-dim block mb-2">
                        {study.category}
                      </span>

                      <h2 className="font-playfair text-2xl md:text-3xl font-medium mb-3 text-ink">
                        {study.title}
                      </h2>

                      <p className="text-xs font-mono text-ink-dim mb-4 leading-relaxed">
                        {study.label}
                      </p>

                      <p className="text-ink-muted text-sm sm:text-base font-light leading-relaxed mb-8">
                        {study.description}
                      </p>

                      <div className="space-y-2 mb-8 pt-6 border-t border-border-subtle">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-dim block mb-3">
                          Website Decisions Demonstrated:
                        </span>
                        {study.decisions.map((decision) => (
                          <div key={decision} className="flex items-center gap-2 text-xs font-light text-ink-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span>{decision}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <Link
                        href={study.breakdownHref}
                        className="inline-flex items-center justify-center gap-1.5 bg-surface-raised border border-border-subtle text-ink hover:bg-surface-raised/90 text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-full transition-colors group-hover:border-accent/40"
                      >
                        Read Concept Breakdown <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <Link
                        href={study.prototypeHref}
                        className="inline-flex items-center justify-center gap-1 text-xs font-mono uppercase tracking-wider text-ink-dim hover:text-accent transition-colors py-2 px-3"
                      >
                        Interactive Prototype <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </section>

          {/* =========================================================================
              WHAT EACH STUDY SHOWCASES
          ========================================================================== */}
          <section className="py-16 border-t border-border-subtle mb-20">
            <FadeInUp>
              <div className="max-w-3xl">
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-3">
                  Design &amp; Strategy Focus
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-ink mb-6">
                  What each concept demonstrates
                </h2>
                <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-8">
                  Each independent concept study demonstrates the Veltris approach in practice: clear messaging, responsive layouts, purposeful enquiry routes, and high standards of typography and visual hierarchy.
                </p>
                <div className="p-6 rounded-2xl bg-surface/50 border border-border-subtle">
                  <div className="flex items-start gap-4">
                    <ShieldAlert className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xs font-semibold text-ink uppercase tracking-wider mb-1 font-mono">
                        Concept Transparency Note
                      </h3>
                      <p className="text-xs text-ink-muted font-light leading-relaxed">
                        This is an independent concept study created by Veltris. It is not commissioned client work and does not represent an existing company.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </section>

          {/* =========================================================================
              CTA SECTION
          ========================================================================== */}
          <section className="py-12 relative z-10 text-center">
            <FadeInUp>
              <div className="bg-surface border border-border-subtle rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto">
                <h2 className="font-playfair text-3xl sm:text-5xl font-medium mb-6 text-ink leading-tight">
                  Discuss your website
                </h2>
                <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                  If your website needs more clarity, stronger presentation, or an easier enquiry journey, submit the details for a private project review.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold px-9 py-4 rounded-full text-xs uppercase tracking-[0.18em] hover:bg-zinc-200 transition-colors shadow-lg"
                >
                  Discuss your website <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInUp>
          </section>
        </div>
      </main>
    </>
  );
}
