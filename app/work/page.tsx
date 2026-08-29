import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, ArrowUpRight } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export const metadata: Metadata = {
  title: "Selected Concept Work | Veltris",
  description:
    "Explore selected Veltris concept studies demonstrating clear positioning, refined visual direction, and purposeful enquiry journeys.",
  alternates: {
    canonical: "https://www.veltris.uk/work",
  },
  openGraph: {
    title: "Selected Concept Work | Veltris",
    description:
      "Explore selected Veltris concept studies demonstrating clear positioning, refined visual direction, and purposeful enquiry journeys.",
    url: "https://www.veltris.uk/work",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Concept Work | Veltris",
    description:
      "Explore selected Veltris concept studies demonstrating clear positioning, refined visual direction, and purposeful enquiry journeys.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Selected Concept Work | Veltris",
  "url": "https://www.veltris.uk/work",
  "description":
    "Explore selected Veltris concept studies demonstrating clear positioning, refined visual direction, and purposeful enquiry journeys.",
};

const conceptStudies = [
  {
    tag: "CONCEPT STUDY 01",
    title: "Hartley & Co. Builders",
    category: "Construction & Commercial Build",
    description:
      "A focused single-page digital experience for a UK construction contractor, designed around clear service presentation, strong trust signals, and direct fixed-price quote requests.",
    href: "/hartley",
    features: [
      "Fixed-price quote enquiry flow",
      "Clear service categorisation",
      "Credibility and project proof",
    ],
  },
  {
    tag: "CONCEPT STUDY 02",
    title: "Sterling Industrial Flooring",
    category: "Specialist Industrial Contracting",
    description:
      "A commercial website concept for an industrial flooring specialist, built around technical system specifications, sector accreditation, and friction-free site survey bookings.",
    href: "/sterling",
    features: [
      "Site survey booking path",
      "Technical floor system breakdowns",
      "Accreditation & compliance proof",
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
                Explore concept studies created to demonstrate how positioning, visual hierarchy, responsive design, and intuitive enquiry routes come together in practice.
              </p>
            </FadeInUp>
          </div>

          {/* =========================================================================
              SHOWCASE CONCEPTS GRID
          ========================================================================== */}
          <section className="mb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {conceptStudies.map((study, idx) => (
                <FadeInUp key={study.tag} delay={idx * 0.1}>
                  <Link
                    href={study.href}
                    className="bg-surface/50 border border-border-subtle rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full transition-all group hover:bg-surface-raised/60 hover:border-accent/40 cursor-pointer block shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono text-accent font-semibold tracking-widest">
                          {study.tag}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#70785B] bg-[#70785B]/10 border border-[#70785B]/30 px-2.5 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#70785B]" />
                          Showcase Concept
                        </span>
                      </div>

                      <span className="text-[11px] font-mono uppercase tracking-wider text-ink-dim block mb-2">
                        {study.category}
                      </span>

                      <h3 className="font-playfair text-2xl md:text-3xl font-medium mb-4 text-ink group-hover:text-accent transition-colors flex items-center justify-between">
                        <span>{study.title}</span>
                        <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                      </h3>

                      <p className="text-ink-muted text-sm sm:text-base font-light leading-relaxed mb-8">
                        {study.description}
                      </p>

                      <div className="space-y-2 mb-8 pt-6 border-t border-border-subtle">
                        {study.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-xs font-light text-ink-muted">
                            <span className="w-1 h-1 rounded-full bg-accent" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs font-mono pt-6 border-t border-border-subtle flex items-center justify-between">
                      <span className="text-ink-dim">Interactive Study</span>
                      <span className="font-semibold flex items-center gap-1 text-accent group-hover:underline underline-offset-4">
                        View Concept <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </FadeInUp>
              ))}
            </div>
          </section>

          {/* =========================================================================
              WHAT EACH STUDY SHOWCASES
          ========================================================================== */}
          <section className="py-20 border-t border-border-subtle mb-24">
            <FadeInUp>
              <div className="max-w-3xl">
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-3">
                  Design &amp; Strategy Focus
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-ink mb-6">
                  What each concept demonstrates
                </h2>
                <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-6">
                  Each concept study demonstrates the Veltris approach in practice: clear messaging, responsive layouts, purposeful enquiry routes, and high standards of typography and visual hierarchy.
                </p>
                <div className="p-6 rounded-2xl bg-surface/50 border border-border-subtle">
                  <div className="flex items-start gap-4">
                    <Layers className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-1 font-mono">
                        Concept Transparency
                      </h3>
                      <p className="text-xs text-ink-muted font-light leading-relaxed">
                        Concept studies are developed by Veltris to demonstrate strategic structure, interface quality, and user journey flow. They are clearly labelled as concept explorations.
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

