import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export const metadata: Metadata = {
  title: "Website Strategy, Design and Build for UK Brands | Veltris",
  description:
    "Veltris provides website strategy, visual direction, responsive design, website build, conversion improvement, and SEO foundations for selected UK brands.",
  alternates: {
    canonical: "https://www.veltris.uk/services",
  },
  openGraph: {
    title: "Website Strategy, Design and Build for UK Brands | Veltris",
    description:
      "Veltris provides website strategy, visual direction, responsive design, website build, conversion improvement, and SEO foundations for selected UK brands.",
    url: "https://www.veltris.uk/services",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Strategy, Design and Build for UK Brands | Veltris",
    description:
      "Veltris provides website strategy, visual direction, responsive design, website build, conversion improvement, and SEO foundations for selected UK brands.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Website Strategy, Design and Build for UK Brands | Veltris",
  "url": "https://www.veltris.uk/services",
  "description":
    "Veltris provides website strategy, visual direction, responsive design, website build, conversion improvement, and SEO foundations for selected UK brands.",
  "hasPart": [
    {
      "@type": "Service",
      "name": "Strategy and page structure",
      "description":
        "Clarifying what the website needs to say, who it needs to reach, and how the pages should guide the visitor.",
    },
    {
      "@type": "Service",
      "name": "Visual direction and website build",
      "description":
        "Creating a distinctive digital experience that reflects the quality of the business without sacrificing clarity or usability.",
    },
    {
      "@type": "Service",
      "name": "Search and quality foundations",
      "description":
        "Improving the technical and structural details that help the website remain understandable, usable, and ready for organic search.",
    },
  ],
};

const serviceGroups = [
  {
    num: "01",
    title: "Strategy and page structure",
    copy: "Clarifying what the website needs to say, who it needs to reach, and how the pages should guide the visitor.",
    items: [
      "Website structure",
      "Page hierarchy",
      "Positioning review",
      "Audience and offer clarity",
      "Enquiry journey planning",
    ],
  },
  {
    num: "02",
    title: "Visual direction and website build",
    copy: "Creating a distinctive digital experience that reflects the quality of the business without sacrificing clarity or usability.",
    items: [
      "Visual direction",
      "Website design",
      "Responsive layout",
      "Front end build",
      "Interaction and motion direction",
      "Content presentation",
    ],
  },
  {
    num: "03",
    title: "Search and quality foundations",
    copy: "Improving the technical and structural details that help the website remain understandable, usable, and ready for organic search.",
    items: [
      "Page titles and descriptions",
      "Open Graph metadata",
      "Internal linking",
      "Mobile review",
      "Form and interaction review",
      "Launch quality checks",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-paper text-ink pt-32 pb-24 relative selection:bg-surface-raised selection:text-ink">
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          {/* =========================================================================
              HERO SECTION
          ========================================================================== */}
          <section className="mb-24 md:mb-32">
            <FadeInUp className="text-center md:text-left">
              <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-6">
                STRATEGY, DESIGN, BUILD, AND REVIEW
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-medium tracking-tight mb-8 max-w-4xl leading-[1.08] text-ink">
                A clearer digital presence for businesses with something valuable to protect.
              </h1>
              <p className="text-ink-muted text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 font-light">
                Veltris brings together website strategy, visual direction, responsive build, enquiry journey improvement, and SEO foundations in one focused process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold min-h-[52px] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-zinc-200 active:scale-[0.98] w-full sm:w-auto shadow-lg"
                >
                  Discuss a Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center bg-surface border border-border-subtle text-ink font-semibold min-h-[52px] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-surface-raised active:scale-[0.98] w-full sm:w-auto"
                >
                  View Selected Work
                </Link>
              </div>
            </FadeInUp>
          </section>

          {/* =========================================================================
              SERVICE GROUPS
          ========================================================================== */}
          <section className="mb-28">
            <FadeInUp>
              <div className="flex items-center justify-between border-b border-border-subtle pb-6 mb-12">
                <h2 className="font-playfair text-2xl sm:text-4xl font-medium text-ink">
                  Core Practice Areas
                </h2>
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase">
                  Comprehensive Delivery
                </span>
              </div>
            </FadeInUp>

            <div className="space-y-12">
              {serviceGroups.map((group, idx) => (
                <FadeInUp key={group.num} delay={idx * 0.08}>
                  <div className="border-t border-border-subtle pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5">
                      <span className="text-xs font-mono text-accent block mb-2">
                        {group.num}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-playfair font-medium text-ink mb-4">
                        {group.title}
                      </h3>
                      <p className="text-ink-muted text-sm sm:text-base font-light leading-relaxed">
                        {group.copy}
                      </p>
                    </div>

                    <div className="lg:col-span-7">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="p-4 rounded-xl bg-surface/50 border border-border-subtle text-xs text-ink-muted font-light flex items-center gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </section>

          {/* =========================================================================
              A FOCUSED TEN WORKING DAY PROCESS
          ========================================================================== */}
          <section className="py-20 border-t border-border-subtle mb-24">
            <FadeInUp>
              <div className="max-w-3xl">
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-3">
                  Delivery Framework
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-ink mb-6">
                  A focused ten working day process
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-ink-muted font-light leading-relaxed mb-8">
                  <p>
                    Most projects are delivered in around ten working days from approved direction and receipt of the required content. Where the scope allows, delivery may happen sooner.
                  </p>
                  <p>
                    The first stage establishes the structure and visual direction. The build then brings the approved experience to life across responsive layouts, followed by review, refinement, and launch preparation.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </section>

          {/* =========================================================================
              THE RIGHT FIT & CTA
          ========================================================================== */}
          <section className="pt-20 border-t border-border-subtle text-center">
            <FadeInUp>
              <div className="max-w-3xl mx-auto">
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-4">
                  Alignment &amp; Capacity
                </span>
                <h2 className="font-playfair text-3xl sm:text-5xl font-medium text-ink mb-6 leading-tight">
                  The right fit
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-ink-muted font-light leading-relaxed mb-6">
                  <p>
                    Veltris is best suited to selected businesses where trust, presentation, and the quality of the enquiry journey directly influence commercial decisions.
                  </p>
                  <p>
                    Every enquiry is reviewed for fit before a project is offered.
                  </p>
                </div>
                <p className="text-xs font-mono text-ink-dim mb-10">
                  Veltris accepts a maximum of three selected new engagements each month. Every enquiry is reviewed for fit before a project is offered.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold min-h-[52px] px-10 py-4 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-zinc-200 active:scale-[0.98] shadow-lg"
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

