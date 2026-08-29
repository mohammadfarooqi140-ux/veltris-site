import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("@/components/ui/Hero3D"), { ssr: false });

export const metadata: Metadata = {
  title: "A Clearer Website for the Decisions That Matter | Veltris",
  description:
    "Veltris is a focused digital studio for businesses whose website has to earn trust, explain value clearly, and turn attention into enquiries.",
  alternates: {
    canonical: "https://www.veltris.uk/",
  },
  openGraph: {
    title: "A Clearer Website for the Decisions That Matter | Veltris",
    description:
      "Veltris is a focused digital studio for businesses whose website has to earn trust, explain value clearly, and turn attention into enquiries.",
    url: "https://www.veltris.uk/",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Clearer Website for the Decisions That Matter | Veltris",
    description:
      "Veltris is a focused digital studio for businesses whose website has to earn trust, explain value clearly, and turn attention into enquiries.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.veltris.uk/#website",
      "url": "https://www.veltris.uk/",
      "name": "Veltris",
      "description":
        "Veltris is a focused digital studio for businesses whose website has to earn trust, explain value clearly, and turn attention into enquiries.",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.veltris.uk/#organization",
      "name": "Veltris",
      "email": "muhammad@veltris.uk",
      "url": "https://www.veltris.uk/",
      "areaServed": "United Kingdom",
      "founder": {
        "@type": "Person",
        "name": "Muhammad",
      },
      "description":
        "Veltris is a focused digital studio for businesses whose website has to earn trust, explain value clearly, and turn attention into enquiries.",
    },
  ],
};

const commonFrictionPoints = [
  {
    title: "Outdated or weak presentation",
    description:
      "A visual identity or website layout that fails to reflect the current standard and credibility of your business.",
  },
  {
    title: "No proper or complete website",
    description:
      "Relying on temporary landing pages, incomplete information, or fragmented touchpoints that could be weakening enquiry flow.",
  },
  {
    title: "Confusing structure and navigation",
    description:
      "Pages where visitors struggle to find essential details, creating doubt before they reach a decision point.",
  },
  {
    title: "Unclear positioning or services",
    description:
      "Valuable expertise that is not explained clearly, making it harder for the right people to understand your offer.",
  },
  {
    title: "Poor mobile presentation",
    description:
      "Desktop-first layouts that feel cramped, difficult to read, or awkward to navigate on mobile devices.",
  },
  {
    title: "Difficult enquiry journeys",
    description:
      "Weak calls to action or cumbersome contact forms that act as a visible conversion risk when prospects are ready to get in touch.",
  },
];

const standardPrinciples = [
  {
    num: "01",
    title: "Clarity before design",
    text: "A strong website begins with a clear understanding of the business, the audience, the offer, and the action the visitor should take.",
  },
  {
    num: "02",
    title: "Considered visual direction",
    text: "The visual system should feel distinctive and appropriate to the brand, not copied from a template or disconnected from the business it represents.",
  },
  {
    num: "03",
    title: "Purposeful enquiry journeys",
    text: "Every important page should make the next step clear, whether that is making an enquiry, requesting a consultation, or exploring a service.",
  },
  {
    num: "04",
    title: "Thorough mobile and launch review",
    text: "The finished experience is reviewed across responsive layouts, navigation, forms, content, links, metadata, and the details that affect trust.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-paper text-ink selection:bg-surface-raised selection:text-ink">
        {/* =========================================================================
            HERO SECTION
        ========================================================================== */}
        <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden border-b border-border-subtle">
          <div className="absolute inset-0 z-0">
            <Hero3D />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20 md:pt-44 md:pb-28">
            <FadeInUp>
              <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-6">
                WEBSITE CLARITY FOR BUSINESSES THAT NEED TO BE TRUSTED
              </span>

              <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1] text-ink">
                A clearer website for the decisions that matter.
              </h1>

              <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-ink-muted mb-10 font-light leading-relaxed">
                Veltris helps businesses improve the websites people rely on before they enquire, book, buy, or get in touch. We find the points that create doubt or friction, then build a clearer, more credible digital experience around the value you already offer.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-zinc-200 active:scale-[0.98] shadow-lg"
                >
                  Discuss your website <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-surface border border-border-subtle text-ink font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-surface-raised active:scale-[0.98]"
                >
                  See how we work
                </Link>
              </div>

              <p className="text-xs text-ink-dim font-light max-w-xl mx-auto leading-relaxed">
                We work with a limited number of businesses at a time so each project receives focused attention.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* =========================================================================
            FRICTION & CHALLENGES SECTION
        ========================================================================== */}
        <section className="py-28 px-6 relative z-10 bg-paper border-b border-border-subtle">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="max-w-3xl mb-16">
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-3">
                  Where Websites Fall Short
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-ink leading-tight mb-6">
                  Turning an underperforming website into a credible business asset
                </h2>
                <p className="text-ink-muted text-base md:text-lg font-light leading-relaxed">
                  Many businesses provide exceptional service, yet their online presence fails to reflect their real standard. When a website is incomplete, confusing, or outdated, it may be making it harder for the right people to take the next step.
                </p>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonFrictionPoints.map((point, idx) => (
                <FadeInUp key={point.title} delay={idx * 0.06}>
                  <div className="p-8 rounded-2xl bg-surface/50 border border-border-subtle h-full flex flex-col justify-between hover:bg-surface-raised/40 transition-colors">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-surface-raised border border-border-subtle flex items-center justify-center text-accent mb-5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h3 className="font-playfair text-xl font-medium text-ink mb-3">
                        {point.title}
                      </h3>
                      <p className="text-ink-muted text-sm font-light leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            THE VELTRIS STANDARD
        ========================================================================== */}
        <section className="py-28 px-6 relative z-10 bg-paper">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="max-w-3xl mb-16">
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-3">
                  Quality Standard
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-ink leading-tight mb-6">
                  The Veltris Standard
                </h2>
                <p className="text-ink-muted text-base md:text-lg font-light leading-relaxed">
                  The Veltris Standard is the quality framework applied to every engagement. It guides how your positioning is clarified, your visual direction is shaped, your enquiry journey is simplified, and your website is prepared for launch.
                </p>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {standardPrinciples.map((principle, idx) => (
                <FadeInUp key={principle.num} delay={idx * 0.08}>
                  <div className="border-t border-border-subtle pt-8 pb-4">
                    <span className="text-xs font-mono text-accent block mb-3">
                      {principle.num}
                    </span>
                    <h3 className="text-2xl font-playfair font-medium text-ink mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-ink-muted text-sm md:text-base font-light leading-relaxed">
                      {principle.text}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            A FOCUSED PROCESS
        ========================================================================== */}
        <section className="py-24 px-6 relative z-10 bg-paper-subtle border-y border-border-subtle">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="text-center">
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-4">
                  Direct Involvement
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-ink leading-tight mb-6">
                  A focused process for businesses that value quality
                </h2>
                <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-6">
                  We work with a limited number of businesses at a time so each project receives focused attention. Every engagement is led directly by Muhammad, Founder and Principal, from initial direction through to final review.
                </p>
                <p className="text-xs font-mono text-ink-dim">
                  Project scope and investment are discussed privately.
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* =========================================================================
            FINAL CTA
        ========================================================================== */}
        <section className="py-24 px-6 relative z-10 bg-paper">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h2 className="font-playfair text-3xl sm:text-5xl font-medium text-ink mb-6 leading-tight">
                Discuss your website
              </h2>
              <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                If your website needs more clarity, stronger presentation, or an easier enquiry journey, submit the details for a private project review.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold px-9 py-4 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-zinc-200 active:scale-[0.98] shadow-lg"
              >
                Discuss your website <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInUp>
          </div>
        </section>
      </main>
    </>
  );
}

