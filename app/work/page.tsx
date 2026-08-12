"use client";

import Link from "next/link";
import { ArrowRight, Lock, Sparkles, FolderGit2 } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden text-white pt-32 pb-24 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-white/10 text-[10px] sm:text-xs uppercase font-semibold text-amber-400 mb-6 tracking-[0.2em] shadow-lg">
              <Lock className="w-3.5 h-3.5" />
              CONFIDENTIAL CLIENT PORTFOLIO
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-medium tracking-tight mb-6 leading-tight text-white">
              Design & Client Work Coming Soon.
            </h1>
            
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Due to strict non-disclosure agreements (NDAs) with our founder partners, live client pitch decks remain private during active fundraising rounds.
            </p>
          </FadeInUp>
        </div>

        {/* TEASER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <FadeInUp delay={0.1}>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-between h-64 relative overflow-hidden group hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>SERIES A</span>
                <span className="inline-flex items-center gap-1 text-amber-400/80"><Lock className="w-3 h-3" /> NDA Protected</span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-medium mb-2 text-white">AI Enterprise Infrastructure</h3>
                <p className="text-zinc-500 text-sm font-light">$18M Raise — 16 Custom Slides</p>
              </div>
              <div className="text-xs font-medium text-zinc-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Case Study Publishing Q3
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-between h-64 relative overflow-hidden group hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>SEED DECK</span>
                <span className="inline-flex items-center gap-1 text-amber-400/80"><Lock className="w-3 h-3" /> NDA Protected</span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-medium mb-2 text-white">Fintech Protocol & Paytech</h3>
                <p className="text-zinc-500 text-sm font-light">$4.5M Raise — 14 Custom Slides</p>
              </div>
              <div className="text-xs font-medium text-zinc-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Case Study Publishing Q3
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-between h-64 relative overflow-hidden group hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>SERIES B</span>
                <span className="inline-flex items-center gap-1 text-amber-400/80"><Lock className="w-3 h-3" /> NDA Protected</span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-medium mb-2 text-white">BioTech & Health Intelligence</h3>
                <p className="text-zinc-500 text-sm font-light">$32M Raise — 20 Custom Slides</p>
              </div>
              <div className="text-xs font-medium text-zinc-400 flex items-center gap-2">
                <FolderGit2 className="w-3.5 h-3.5 text-amber-400" /> Breakdown Coming Soon
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* CTA SECTION */}
        <section className="py-12 relative z-10">
          <FadeInUp>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden text-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-zinc-500/5 to-amber-500/10 blur-3xl pointer-events-none opacity-60" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/90 mb-4 inline-block">
                  Private Portfolio
                </span>
                
                <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-medium mb-6 text-white leading-tight">
                  Our work is shared privately.
                </h2>
                
                <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed mb-4 max-w-2xl mx-auto">
                  Due to NDAs and active fundraising rounds, we share our work privately with prospective clients. If you&apos;d like to see our portfolio, just ask &mdash; we&apos;ll set up a short intro call.
                </p>

                <p className="text-zinc-500 text-sm mb-10">
                  Reach us directly at{" "}
                  <a
                    href="mailto:muhammad@veltris.uk"
                    className="text-amber-400/90 hover:text-amber-300 transition-colors underline underline-offset-2"
                  >
                    muhammad@veltris.uk
                  </a>
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-200 transition-colors shadow-lg"
                  >
                    Start Your Deck <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center bg-zinc-900 border border-white/10 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors"
                  >
                    View Services &amp; Pricing
                  </Link>
                </div>
              </div>
            </div>
          </FadeInUp>
        </section>

      </div>
    </main>
  );
}
