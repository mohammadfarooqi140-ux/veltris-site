import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

const About3D = dynamic(() => import("@/components/ui/About3D"), { ssr: false });

export const metadata: Metadata = {
  title: "About Veltris | Clear Websites for High-Trust Decisions",
  description:
    "Veltris is a UK based digital studio led by Muhammad, Founder and Principal, creating clear, high-trust websites for businesses where credibility and conversion matter.",
  alternates: {
    canonical: "https://www.veltris.uk/about",
  },
  openGraph: {
    title: "About Veltris | Clear Websites for High-Trust Decisions",
    description:
      "Veltris is a UK based digital studio led by Muhammad, Founder and Principal, creating clear, high-trust websites for businesses where credibility and conversion matter.",
    url: "https://www.veltris.uk/about",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Veltris | Clear Websites for High-Trust Decisions",
    description:
      "Veltris is a UK based digital studio led by Muhammad, Founder and Principal, creating clear, high-trust websites for businesses where credibility and conversion matter.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Veltris",
  "url": "https://www.veltris.uk/about",
  "description":
    "Veltris is a UK based digital studio led by Muhammad, Founder and Principal, creating clear, high-trust websites for businesses where credibility and conversion matter.",
  "mainEntity": {
    "@type": "ProfessionalService",
    "name": "Veltris",
    "email": "muhammad@veltris.uk",
    "url": "https://www.veltris.uk/",
    "areaServed": "United Kingdom",
    "founder": {
      "@type": "Person",
      "name": "Muhammad",
    },
  },
};

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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="bg-paper min-h-screen text-ink overflow-hidden pb-24 selection:bg-surface-raised selection:text-ink">
        {/* =========================================================================
            HERO SECTION
        ========================================================================== */}
        <section className="relative w-full min-h-[78vh] flex items-center pt-32 pb-16 border-b border-border-subtle">
          <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-[60%] flex flex-col justify-center">
              <FadeInUp>
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-6">
                  THE VELTRIS STANDARD
                </span>
                <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl leading-[1.08] font-medium tracking-tight mb-8 text-ink">
                  Considered design for businesses where trust and clarity matter.
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <div className="space-y-6 text-base sm:text-lg md:text-xl text-ink-muted max-w-2xl font-light leading-relaxed">
                  <p>
                    Veltris is a UK based digital studio led by Muhammad, Founder and Principal.
                  </p>
                  <p>
                    We handle strategy, visual direction, website design, responsive build, and enquiry journey improvement for every engagement.
                  </p>
                  <p>
                    Veltris was created for businesses where the quality of the first digital impression affects whether a valuable prospect continues, enquires, or moves on.
                  </p>
                </div>
              </FadeInUp>
            </div>

            <div className="w-full lg:w-[40%] h-[350px] lg:h-[480px] relative rounded-3xl overflow-hidden border border-border-subtle bg-surface/40 flex items-center justify-center">
              <About3D />
            </div>
          </div>
        </section>

        {/* =========================================================================
            WHY CLARITY & CREDIBILITY MATTER
        ========================================================================== */}
        <section className="py-24 bg-paper relative z-10 border-b border-border-subtle">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <FadeInUp>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-ink mb-8 leading-tight">
                Why clarity and credibility matter
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-ink-muted font-light leading-relaxed">
                <p>
                  In competitive markets, trust is formed before the first conversation takes place. Prospective clients evaluate your standard of work, reliability, and attention to detail through your website.
                </p>
                <p>
                  When a website is confusing, outdated, or hard to navigate, it creates unnecessary doubt. A clear, well-structured digital presence removes friction and gives people the confidence to take the next step.
                </p>
                <p className="text-ink font-normal">
                  Veltris focuses on the point where visual quality, commercial clarity, and easy enquiry journeys meet.
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* =========================================================================
            HOW I WORK
        ========================================================================== */}
        <section className="py-24 bg-paper relative z-10 border-b border-border-subtle">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <FadeInUp>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-ink mb-8 leading-tight">
                How I work
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-ink-muted font-light leading-relaxed">
                <p>
                  I begin by understanding the business, the audience, the offer, and the most important action the website needs to support.
                </p>
                <p>
                  From there, I shape the page structure, visual direction, user journey, and responsive experience before refining the details that affect confidence and usability.
                </p>
                <p className="text-ink font-normal">
                  The work is personal because the responsibility is personal. Every project receives direct involvement from the Founder and Principal.
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* =========================================================================
            WHAT EVERY PROJECT IS MEASURED AGAINST
        ========================================================================== */}
        <section className="py-28 bg-paper relative z-10">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <FadeInUp>
              <div className="max-w-3xl mb-16">
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-3">
                  Quality Standard
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-ink leading-tight mb-6">
                  What every project is measured against
                </h2>
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
            A CONSIDERED TEN WORKING DAY PROCESS
        ========================================================================== */}
        <section className="py-24 px-6 relative z-10 bg-paper-subtle border-y border-border-subtle">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="text-center">
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-4">
                  Timeline &amp; Delivery
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-ink leading-tight mb-6">
                  A considered ten working day process
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-ink-muted font-light leading-relaxed max-w-2xl mx-auto mb-8">
                  <p>
                    Most projects are delivered in around ten working days from approved direction and receipt of the required content. Where the scope allows, delivery may happen sooner.
                  </p>
                  <p>
                    The first stage establishes the structure and visual direction. The build then brings the approved experience to life across responsive layouts, followed by review, refinement, and launch preparation.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-surface border border-border-subtle max-w-2xl mx-auto text-center">
                  <p className="text-xs text-ink leading-relaxed">
                    We work with a limited number of businesses at a time so each project receives focused attention. Every enquiry is reviewed for fit before a project is offered.
                  </p>
                </div>
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
                className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold px-9 py-4 rounded-full text-xs uppercase tracking-[0.18em] hover:bg-zinc-200 transition-all duration-300 shadow-lg"
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

