"use client";

import Link from "next/link";
import { ArrowRight, FileText, Globe } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("@/components/ui/Hero3D"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-surface-raised selection:text-ink">
      {/* HERO SECTION - GROUNDED EDITORIAL RYTHM */}
      <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden border-b border-border-subtle/50">
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20 md:pt-40 md:pb-28">
          <FadeInUp>
            <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-6">
              Bespoke Pitch Decks & Web Studio
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-tight text-ink">
              Investor-ready pitch decks for founders raising capital.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-ink-muted mb-10 font-light leading-relaxed">
              We also design and build premium websites for startups and real estate projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="rounded-full bg-ink text-paper px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition hover:bg-zinc-200 active:scale-95 flex items-center gap-2"
              >
                Start Your Deck <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="rounded-full bg-surface border border-border-subtle text-ink px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition hover:bg-surface-raised active:scale-95"
              >
                View Our Work
              </Link>
            </div>
            <p className="text-xs text-ink-dim font-mono tabular-nums">
              From £1,499 · Delivered in 10 days
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* WHAT WE DO STRIP */}
      <section className="py-24 px-6 relative z-10 bg-paper">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <div className="flex items-center justify-between border-b border-border-subtle pb-6 mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-ink">What we do</h2>
              <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase">Core Practice</span>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInUp delay={0.1}>
              <div className="bg-surface/50 p-8 md:p-10 rounded-3xl border border-border-subtle hover:bg-surface-raised/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <FileText className="w-7 h-7 text-accent mb-6" />
                  <h3 className="text-2xl font-playfair font-medium mb-3 text-ink">Pitch Decks</h3>
                  <p className="text-ink-muted font-light leading-relaxed text-sm md:text-base">
                    Premium pitch decks for founders raising Pre-Seed through Series C. Data-driven, narrative-first presentations built for conviction.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border-subtle/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-ink-dim">Pre-Seed → Series C</span>
                  <Link href="/services" className="text-xs font-semibold uppercase tracking-widest text-ink-muted hover:text-ink transition">
                    Explore Decks →
                  </Link>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-surface/50 p-8 md:p-10 rounded-3xl border border-border-subtle hover:bg-surface-raised/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <Globe className="w-7 h-7 text-accent mb-6" />
                  <h3 className="text-2xl font-playfair font-medium mb-3 text-ink">Premium Websites</h3>
                  <p className="text-ink-muted font-light leading-relaxed text-sm md:text-base">
                    Clean, high-end websites for startups and real estate developments. Focused on design quality, speed, and conversion.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border-subtle/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-ink-dim">Bespoke Architecture</span>
                  <Link href="/services" className="text-xs font-semibold uppercase tracking-widest text-ink-muted hover:text-ink transition">
                    Explore Sites →
                  </Link>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* WHY VELTRIS - ARCHITECTURAL STATEMENT */}
      <section className="py-28 px-6 relative z-10 bg-paper-subtle border-y border-border-subtle">
        <div className="max-w-4xl mx-auto relative">
          <FadeInUp>
            <div className="bg-surface border border-border-subtle rounded-3xl p-10 md:p-16 text-center relative">
              <h2 className="font-playfair text-2xl md:text-4xl leading-relaxed mb-8 text-ink">
                &ldquo;Most pitch decks look the same because they came from the same template. Investors see hundreds of decks a month. Yours needs to command attention immediately.&rdquo;
              </h2>
              <p className="text-ink-muted text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Veltris is a boutique pitch deck studio. One designer. Deep market research. Every deck is built from scratch around your story, your numbers, and what makes your business worth betting on.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-paper">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="bg-surface/80 border border-border-subtle rounded-3xl p-8 sm:p-12 md:p-16 text-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-dim mb-4 block">
                Veltris Pitch Deck Studio
              </span>
              
              <h2 className="font-playfair text-3xl sm:text-5xl font-medium mb-6 text-ink leading-tight">
                Ready to raise?
              </h2>
              
              <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                Partner with a dedicated studio to craft an investor-ready presentation that commands attention, clarifies your narrative, and drives meetings.
              </p>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-ink text-paper font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.16em] hover:bg-zinc-200 transition-all duration-300"
              >
                Start Your Deck
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}

