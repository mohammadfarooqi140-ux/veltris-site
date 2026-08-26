"use client";

import Link from "next/link";
import { ArrowRight, Lock, Shield, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-paper text-ink pt-32 pb-24 relative selection:bg-surface-raised selection:text-ink">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border-subtle text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-accent mb-6">
              <Lock className="w-3 h-3" />
              CONFIDENTIAL CLIENT ENGAGEMENTS // UK
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-medium tracking-tight mb-6 leading-[1.08] text-ink">
              Private Engagements.
            </h1>
            
            <p className="text-ink-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              To maintain absolute discretion and protect proprietary conversion mechanics, our active client builds for private healthcare and luxury developers operate under strict non-disclosure parameters.
            </p>
          </FadeInUp>
        </div>

        {/* ACTIVE CASE STUDIES PLACEHOLDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-stretch">
          
          {/* Case 01: Private Belgravia Clinic */}
          <FadeInUp delay={0.1}>
            <div className="bg-surface border border-border-subtle rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full hover:bg-surface-raised/40 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-ink-dim mb-8 pb-6 border-b border-border-subtle/70">
                  <span className="text-accent font-semibold tracking-widest">CASE 01 // HEALTHCARE</span>
                  <span className="inline-flex items-center gap-1.5 text-ink-dim bg-paper/60 px-3 py-1 rounded-full border border-border-subtle text-[10px]">
                    <Lock className="w-3 h-3 text-accent" /> NDA Parameter
                  </span>
                </div>
                
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-dim block mb-2">
                  AESTHETIC MEDICINE &amp; PRIVATE SURGERY
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl font-medium mb-4 text-ink group-hover:text-accent transition-colors">
                  Private Belgravia Clinic - Responsive UI System
                </h3>
                <p className="text-ink-muted text-sm md:text-base font-light leading-relaxed mb-8">
                  End-to-end mobile viewport overhaul and unified patient intake pipeline. Replaced fragmented third-party booking widgets with a bespoke zero-friction reservation flow.
                </p>

                <div className="space-y-2.5 pt-6 border-t border-border-subtle/40 mb-8">
                  <div className="flex items-center justify-between text-xs text-ink-muted font-light">
                    <span className="text-ink-dim font-mono text-[11px]">Architecture</span>
                    <span>Next.js · Headless Intake</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-ink-muted font-light">
                    <span className="text-ink-dim font-mono text-[11px]">Viewport Integrity</span>
                    <span>The Veltris Standard Validated</span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-ink-dim pt-6 border-t border-border-subtle flex items-center justify-between">
                <span>Production Status</span>
                <span className="text-accent font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Production-Grade Complete
                </span>
              </div>
            </div>
          </FadeInUp>

          {/* Case 02: Bespoke Mayfair Architectural Studio */}
          <FadeInUp delay={0.2}>
            <div className="bg-surface border border-border-subtle rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full hover:bg-surface-raised/40 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-ink-dim mb-8 pb-6 border-b border-border-subtle/70">
                  <span className="text-accent font-semibold tracking-widest">CASE 02 // ARCHITECTURE</span>
                  <span className="inline-flex items-center gap-1.5 text-ink-dim bg-paper/60 px-3 py-1 rounded-full border border-border-subtle text-[10px]">
                    <Lock className="w-3 h-3 text-accent" /> NDA Parameter
                  </span>
                </div>
                
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-dim block mb-2">
                  LUXURY RESIDENTIAL &amp; INTERIORS
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl font-medium mb-4 text-ink group-hover:text-accent transition-colors">
                  Bespoke Mayfair Architectural Studio - Portfolio Engine
                </h3>
                <p className="text-ink-muted text-sm md:text-base font-light leading-relaxed mb-8">
                  Sub-second high-resolution architectural portfolio engine engineered for high-net-worth mobile client presentations with zero layout shift or typographic distortion.
                </p>

                <div className="space-y-2.5 pt-6 border-t border-border-subtle/40 mb-8">
                  <div className="flex items-center justify-between text-xs text-ink-muted font-light">
                    <span className="text-ink-dim font-mono text-[11px]">Engine</span>
                    <span>Adaptive Retina Delivery</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-ink-muted font-light">
                    <span className="text-ink-dim font-mono text-[11px]">Mobile Performance</span>
                    <span>100 Core Web Vitals</span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-ink-dim pt-6 border-t border-border-subtle flex items-center justify-between">
                <span>Production Status</span>
                <span className="text-accent font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Deployment Complete
                </span>
              </div>
            </div>
          </FadeInUp>

        </div>

        {/* CONCEPT PROTOCOL / COMING SOON SECTION */}
        <section className="mb-24">
          <FadeInUp>
            <div className="bg-surface/50 border border-border-subtle rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="max-w-2xl mx-auto">
                <span className="text-[11px] font-mono uppercase tracking-widest text-ink-dim mb-3 block">
                  Studio Research &amp; Development
                </span>
                <h2 className="font-playfair text-2xl sm:text-4xl font-medium text-ink mb-4">
                  Private Medical Concept
                </h2>
                <p className="text-ink-muted text-sm sm:text-base font-light leading-relaxed mb-6">
                  Interactive case breakdown detailing conversion lift mechanics, viewport audit methodologies, and zero-drop intake architecture is currently being curated for public release.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-accent bg-paper px-4 py-2 rounded-full border border-border-subtle">
                  <Sparkles className="w-3.5 h-3.5" /> Coming Soon · Curated Case Breakdown
                </div>
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* CTA SECTION */}
        <section className="py-12 relative z-10">
          <FadeInUp>
            <div className="bg-surface border border-border-subtle rounded-3xl p-8 sm:p-12 md:p-16 text-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-dim mb-4 block">
                Direct Principal Access
              </span>
              
              <h2 className="font-playfair text-3xl sm:text-5xl font-medium mb-6 text-ink leading-tight">
                Request a Private Portfolio Review.
              </h2>
              
              <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                Due to client discretion, comprehensive live teardowns and architectural audits are conducted privately on a scheduled video consultation.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold px-9 py-4 rounded-full text-xs uppercase tracking-[0.18em] hover:bg-zinc-200 transition-colors shadow-lg"
                >
                  Check Studio Availability <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-surface border border-border-subtle text-ink font-semibold px-9 py-4 rounded-full text-xs uppercase tracking-[0.18em] hover:bg-surface-raised transition-colors"
                >
                  Explore Practice Areas
                </Link>
              </div>
            </div>
          </FadeInUp>
        </section>

      </div>
    </main>
  );
}

