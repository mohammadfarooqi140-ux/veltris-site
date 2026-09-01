import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldAlert } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("@/components/ui/Hero3D"), { ssr: false });

export const metadata: Metadata = {
  title: "A Clearer Website for the Decisions That Matter | Veltris",
  description:
    "Veltris creates clear, high trust websites for businesses whose real standard is stronger than their current online presence.",
  alternates: {
    canonical: "https://www.veltris.uk/",
  },
  openGraph: {
    title: "A Clearer Website for the Decisions That Matter | Veltris",
    description:
      "Veltris creates clear, high trust websites for businesses whose real standard is stronger than their current online presence.",
    url: "https://www.veltris.uk/",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Clearer Website for the Decisions That Matter | Veltris",
    description:
      "Veltris creates clear, high trust websites for businesses whose real standard is stronger than their current online presence.",
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
        "Veltris creates clear, high trust websites for businesses whose real standard is stronger than their current online presence.",
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
        "Veltris creates clear, high trust websites for businesses whose real standard is stronger than their current online presence.",
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
      "Valuable expertise that is not explained clearly, making it harder for prospective clients and partners to understand your offer.",
  },
  {
    title: "Poor mobile presentation",
    description:
      "Desktop-first layouts that feel cramped, difficult to read, or awkward to navigate on mobile devices.",
  },
  {
    title: "Difficult enquiry journeys",
    description:
      "Weak calls to action or cumbersome contact forms that create unnecessary friction when prospects are ready to get in touch.",
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
    text: "Every important page should make the next step clear, whether that is making an enquiry, booking an assessment, or exploring a service.",
  },
  {
    num: "04",
    title: "Thorough mobile and launch review",
    text: "The finished experience is reviewed across responsive layouts, navigation, forms, content, links, metadata, and the details that affect trust.",
  },
];

const homepageConcepts = [
  {
    tag: "INDEPENDENT CONCEPT STUDY",
    title: "Hartley & Co. Builders",
    category: "Mainstream Construction Business",
    description:
      "Hartley explores how a construction business can present its services with more clarity, confidence, and commercial credibility. Structured around understandable service categories, visible trust signals, project context, and a direct route to request a quote.",
    breakdownHref: "/work/hartley",
    prototypeHref: "/hartley",
  },
  {
    tag: "INDEPENDENT CONCEPT STUDY",
    title: "Sterling Industrial Flooring",
    category: "Industrial Trade Business",
    description:
      "Sterling explores how a technical industrial business can make complex services easier to understand and easier to enquire about. Uses structured service information, technical specifications, accreditation and compliance signals, and a focused site survey booking path.",
    breakdownHref: "/work/sterling",
    prototypeHref: "/sterling",
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
            STAGE 1: HERO & CORE POSITIONING
        ========================================================================== */}
        <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden border-b border-border-subtle">
          <div className="absolute inset-0 z-0">
            <Hero3D />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20 md:pt-44 md:pb-28">
            <FadeInUp>
              <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-6">
                WEBSITE CLARITY FOR HIGH-TRUST DECISIONS
              </span>

              <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1] text-ink">
                A clearer website for the decisions that matter.
              </h1>

              <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-ink-muted mb-10 font-light leading-relaxed">
                Veltris creates clear, high trust websites for businesses whose real standard is stronger than their current online presence. We bring together positioning, structure, visual direction, responsive build, and enquiry journeys into one focused process.
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
            STAGE 2: WHERE WEBSITES FALL SHORT & CREATE DOUBT
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
                  Many businesses provide exceptional service, yet their online presence fails to reflect their real standard. When a website is incomplete, confusing, or outdated, it creates unnecessary doubt and makes it harder for the right people to take the next step.
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
            STAGE 3: THE VELTRIS STANDARD
        ========================================================================== */}
        <section className="py-28 px-6 relative z-10 bg-paper border-b border-border-subtle">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="max-w-3xl mb-16">
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-3">
                  Quality Framework
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
            STAGE 4: A FOCUSED PROCESS & DIRECT LEADERSHIP
        ========================================================================== */}
        <section className="py-24 px-6 relative z-10 bg-paper-subtle border-b border-border-subtle">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-4">
                Direct Involvement &amp; Delivery
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-ink leading-tight mb-6">
                A focused process for businesses that value quality
              </h2>
              <div className="space-y-4 text-ink-muted text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
                <p>
                  We work with a limited number of businesses at a time so each project receives focused attention. Every engagement is led directly by Muhammad, Founder and Principal, from initial direction through to final review.
                </p>
                <p>
                  Most projects are delivered in around ten working days from approved direction and receipt of the required content. Where the scope allows, delivery may happen sooner.
                </p>
              </div>
              <p className="text-xs font-mono text-ink-dim">
                Project scope and investment are discussed privately.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* =========================================================================
            STAGE 5: DEMONSTRATING THE STANDARD THROUGH CONCEPT WORK
        ========================================================================== */}
        <section className="py-28 px-6 relative z-10 bg-paper border-b border-border-subtle">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="max-w-2xl">
                  <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-3">
                    Demonstrating the Standard
                  </span>
                  <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-ink leading-tight">
                    Independent concept studies
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-accent hover:underline underline-offset-4"
                >
                  View All Selected Work <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {homepageConcepts.map((concept, idx) => (
                <FadeInUp key={concept.title} delay={idx * 0.1}>
                  <div className="p-8 md:p-10 rounded-3xl bg-surface/50 border border-border-subtle flex flex-col justify-between h-full hover:bg-surface-raised/60 hover:border-border transition-all shadow-lg">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] font-mono text-accent font-semibold tracking-widest">
                          {concept.tag}
                        </span>
                        <span className="text-[11px] font-mono text-ink-dim uppercase tracking-wider">
                          {concept.category}
                        </span>
                      </div>

                      <h3 className="font-playfair text-2xl font-medium text-ink mb-3">
                        {concept.title}
                      </h3>

                      <p className="text-ink-muted text-sm font-light leading-relaxed mb-6">
                        {concept.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3">
                      <Link
                        href={concept.breakdownHref}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-ink hover:text-accent transition-colors"
                      >
                        Read Concept Breakdown <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={concept.prototypeHref}
                        className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-ink-dim hover:text-ink transition-colors"
                      >
                        Interactive Study <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>

            <FadeInUp>
              <div className="p-6 rounded-2xl bg-surface/40 border border-border-subtle max-w-3xl mx-auto flex items-start gap-4">
                <ShieldAlert className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-xs text-ink-muted font-light leading-relaxed">
                  Hartley and Sterling are independent concept studies created by Veltris to demonstrate strategic structure, interface quality, and user journey flow. They are not commissioned client work and do not represent existing companies.
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
