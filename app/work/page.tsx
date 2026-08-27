import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export const metadata: Metadata = {
  title: "Concept Website Work and Design Studies | Veltris",
  description:
    "Explore selected Veltris concept studies and design explorations for clinics, property brands, interior design businesses, and premium digital experiences.",
  alternates: {
    canonical: "https://www.veltris.uk/work",
  },
  openGraph: {
    title: "Concept Website Work and Design Studies | Veltris",
    description:
      "Explore selected Veltris concept studies and design explorations for clinics, property brands, interior design businesses, and premium digital experiences.",
    url: "https://www.veltris.uk/work",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concept Website Work and Design Studies | Veltris",
    description:
      "Explore selected Veltris concept studies and design explorations for clinics, property brands, interior design businesses, and premium digital experiences.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Concept Website Work and Design Studies | Veltris",
  "url": "https://www.veltris.uk/work",
  "description":
    "Explore selected Veltris concept studies and design explorations for clinics, property brands, interior design businesses, and premium digital experiences.",
};

const conceptStudies = [
  {
    tag: "CONCEPT STUDY 01",
    badge: "Not commissioned · Visual exploration by Veltris",
    title: "Claudia Dorsch Interior Design",
    description:
      "An independent 3D narrative concept for a residential interior design studio exploring city, coast, and mountain living.",
    href: "/work/claudia-dorsch-concept",
    status: "Independent concept study",
  },
  {
    tag: "CONCEPT STUDY 02",
    badge: "Independent concept study",
    title: "Luxury property or interior design brand",
    description:
      "An image led editorial experience designed to present spaces, materials, and expertise with more impact.",
    status: "Curating Study",
  },
  {
    tag: "CONCEPT STUDY 03",
    badge: "Independent concept study",
    title: "Veltris digital flagship",
    description:
      "An experimental concept exploring three dimensional interaction, motion, and premium art direction while preserving usability.",
    status: "Curating Study",
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
                SELECTED CONCEPT STUDIES
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-medium tracking-tight mb-6 leading-[1.08] text-ink">
                Concept work created to explore what a stronger digital presence could become.
              </h1>

              <p className="text-ink-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                The public Work section is currently being curated. The first studies will explore premium digital experiences for private aesthetics, property, interior design, and other selected businesses.
              </p>
            </FadeInUp>
          </div>

          {/* =========================================================================
              CONCEPT WORK COMING SOON
          ========================================================================== */}
          <section className="mb-28">
            <FadeInUp>
              <div className="bg-surface/40 border border-border-subtle rounded-3xl p-8 md:p-14 mb-16 text-center max-w-4xl mx-auto">
                <span className="text-[11px] font-mono uppercase tracking-widest text-accent mb-4 inline-flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> Concept Studies In Development
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-ink mb-6">
                  Concept work coming soon
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-ink-muted font-light leading-relaxed max-w-2xl mx-auto">
                  <p>
                    Veltris is developing a small collection of detailed concept projects that show how strategy, visual direction, responsive design, and three dimensional work can come together in a useful digital experience.
                  </p>
                  <p>
                    Every study will be clearly labelled as concept work. The purpose is to demonstrate the thinking, design quality, and technical capability behind the work.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Concept Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {conceptStudies.map((study, idx) => {
                const CardInner = (
                  <div className="bg-surface/50 border border-border-subtle rounded-3xl p-8 flex flex-col justify-between h-full hover:bg-surface-raised/40 transition-colors group">
                    <div>
                      <div className="flex flex-col gap-1 mb-4">
                        <span className="text-xs font-mono text-accent font-semibold tracking-widest">
                          {study.tag}
                        </span>
                        <span className="text-[10px] font-mono text-ink-dim tracking-wider uppercase">
                          {study.badge}
                        </span>
                      </div>
                      <h3 className="font-playfair text-2xl font-medium mb-4 text-ink group-hover:text-accent transition-colors flex items-center justify-between">
                        <span>{study.title}</span>
                        {study.href && <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </h3>
                      <p className="text-ink-muted text-sm sm:text-base font-light leading-relaxed mb-8">
                        {study.description}
                      </p>
                    </div>

                    <div className="text-xs font-mono text-ink-dim pt-6 border-t border-border-subtle flex items-center justify-between">
                      <span>Status</span>
                      <span className={study.href ? "text-accent font-medium" : "text-ink"}>
                        {study.status}
                      </span>
                    </div>
                  </div>
                );

                return (
                  <FadeInUp key={study.tag} delay={idx * 0.1}>
                    {study.href ? (
                      <Link href={study.href} className="block h-full">
                        {CardInner}
                      </Link>
                    ) : (
                      CardInner
                    )}
                  </FadeInUp>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              WHAT EACH STUDY WILL SHOW
          ========================================================================== */}
          <section className="py-20 border-t border-border-subtle mb-24">
            <FadeInUp>
              <div className="max-w-3xl">
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-3">
                  Design Transparency
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-ink mb-6">
                  What each study will show
                </h2>
                <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed">
                  Each concept will include the business context, the design direction, the page structure, responsive layouts, the intended enquiry journey, and the reasoning behind the major decisions.
                </p>
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
                  Discuss a Project
                </h2>
                <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                  If your website needs more clarity, stronger presentation, or a smoother path to enquiry, submit the details for a private project review.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold px-9 py-4 rounded-full text-xs uppercase tracking-[0.18em] hover:bg-zinc-200 transition-colors shadow-lg"
                >
                  Discuss a Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInUp>
          </section>
        </div>
      </main>
    </>
  );
}

