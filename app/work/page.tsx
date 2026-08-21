"use client";

import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-paper text-ink pt-32 pb-24 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border-subtle text-[11px] font-mono uppercase tracking-widest text-accent mb-6">
              <Lock className="w-3 h-3" />
              Confidential Client Portfolio
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-medium tracking-tight mb-6 leading-tight text-ink">
              Design & Client Work Coming Soon.
            </h1>
            
            <p className="text-ink-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Due to strict non-disclosure agreements (NDAs) with our founder partners, live client pitch decks remain private during active fundraising rounds.
            </p>
          </FadeInUp>
        </div>

        {/* TEASER CARDS - ASYMMETRIC EDITORIAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24 items-stretch">
          {/* Primary Lead Case */}
          <div className="lg:col-span-6">
            <FadeInUp delay={0.1}>
              <div className="bg-surface border border-border-subtle rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full hover:bg-surface-raised transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-ink-dim mb-8">
                  <span>01 · SERIES A</span>
                  <span className="inline-flex items-center gap-1.5 text-accent"><Lock className="w-3 h-3" /> NDA Protected</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-medium mb-3 text-ink">AI Enterprise Infrastructure</h3>
                  <p className="text-ink-muted text-sm font-light mb-8 tabular-nums">$18M Raise · 16 Custom Slides</p>
                </div>
                <div className="text-xs font-mono text-ink-dim pt-6 border-t border-border-subtle/80 flex items-center justify-between">
                  <span>Case Study</span>
                  <span>Publishing Q3</span>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Secondary Stacked Cases */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <FadeInUp delay={0.2}>
              <div className="bg-surface/60 border border-border-subtle rounded-3xl p-8 flex flex-col justify-between hover:bg-surface-raised transition-colors flex-1">
                <div className="flex items-center justify-between text-xs font-mono text-ink-dim mb-4">
                  <span>02 · SEED DECK</span>
                  <span className="inline-flex items-center gap-1.5 text-accent"><Lock className="w-3 h-3" /> NDA Protected</span>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-medium mb-2 text-ink">Fintech Protocol & Paytech</h3>
                  <p className="text-ink-muted text-xs font-light tabular-nums">$4.5M Raise · 14 Custom Slides</p>
                </div>
                <div className="text-xs font-mono text-ink-dim pt-4 mt-4 border-t border-border-subtle/80 flex items-center justify-between">
                  <span>Case Study</span>
                  <span>Publishing Q3</span>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="bg-surface/60 border border-border-subtle rounded-3xl p-8 flex flex-col justify-between hover:bg-surface-raised transition-colors flex-1">
                <div className="flex items-center justify-between text-xs font-mono text-ink-dim mb-4">
                  <span>03 · SERIES B</span>
                  <span className="inline-flex items-center gap-1.5 text-accent"><Lock className="w-3 h-3" /> NDA Protected</span>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-medium mb-2 text-ink">BioTech & Health Intelligence</h3>
                  <p className="text-ink-muted text-xs font-light tabular-nums">$32M Raise · 20 Custom Slides</p>
                </div>
                <div className="text-xs font-mono text-ink-dim pt-4 mt-4 border-t border-border-subtle/80 flex items-center justify-between">
                  <span>Case Study</span>
                  <span>Breakdown Pending</span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* WEBSITE PROTOTYPES SECTION */}
        <section className="mb-24">
          <FadeInUp>
            <div className="flex items-center justify-between border-b border-border-subtle pb-6 mb-8">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-ink-dim block mb-1">
                  Design Architecture
                </span>
                <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-ink">
                  Website Prototypes
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Tattoo Hub Studio Prototype", desc: "Black & Grey Realism Atelier", href: "/prototypes/tattoo-hub-studio" },
                { name: "Noir Atelier Prototype", desc: "Luxury Bespoke Fashion", href: "/prototypes/noir-atelier" },
                { name: "Blackline Atelier Prototype", desc: "Private Tattoo Studio", href: "/prototypes/blackline-atelier" },
                { name: "Sterling Prototype", desc: "Architectural Flooring", href: "/prototypes/sterling" },
                { name: "Hartley Prototype", desc: "Commercial Construction", href: "/prototypes/hartley" },
              ].map((proto, idx) => (
                <Link
                  key={idx}
                  href={proto.href}
                  className="bg-surface border border-border-subtle rounded-2xl p-6 hover:bg-surface-raised transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-playfair text-lg font-medium text-ink group-hover:text-accent transition-colors mb-1">
                      {proto.name}
                    </h3>
                    <p className="text-ink-muted text-xs font-light">{proto.desc}</p>
                  </div>
                  <div className="mt-6 text-[11px] font-mono uppercase tracking-wider text-ink-dim flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Prototype &rarr;
                  </div>
                </Link>
              ))}
            </div>
          </FadeInUp>
        </section>

        {/* CTA SECTION */}
        <section className="py-12 relative z-10">
          <FadeInUp>
            <div className="bg-surface border border-border-subtle rounded-3xl p-8 sm:p-12 md:p-16 text-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-dim mb-4 block">
                Private Portfolio
              </span>
              
              <h2 className="font-playfair text-3xl sm:text-5xl font-medium mb-6 text-ink leading-tight">
                Our work is shared privately.
              </h2>
              
              <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-4 max-w-2xl mx-auto">
                Due to NDAs and active fundraising rounds, we share our work privately with prospective clients. If you&apos;d like to see our portfolio, just ask &mdash; we&apos;ll set up a short intro call.
              </p>

              <p className="text-ink-dim text-xs font-mono mb-10">
                Reach us directly at{" "}
                <a
                  href="mailto:muhammad@veltris.uk"
                  className="text-accent hover:underline underline-offset-2"
                >
                  muhammad@veltris.uk
                </a>
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.16em] hover:bg-zinc-200 transition-colors"
                >
                  Start Your Deck <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-surface border border-border-subtle text-ink font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.16em] hover:bg-surface-raised transition-colors"
                >
                  View Services &amp; Pricing
                </Link>
              </div>
            </div>
          </FadeInUp>
        </section>

      </div>
    </main>
  );
}

