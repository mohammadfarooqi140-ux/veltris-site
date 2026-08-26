"use client";

import Link from "next/link";
import { ArrowRight, Smartphone, Eye, CalendarCheck, Terminal, Shield, ArrowUpRight } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("@/components/ui/Hero3D"), { ssr: false });

const pillars = [
  {
    number: "01",
    title: "Zero-Friction Viewports",
    subtitle: "Responsive Geometry & Layout Integrity",
    icon: Smartphone,
    body: "Eliminating legacy forced device rotations, uncalibrated aspect ratios, and clipped media grids. Every layout fluidly scales to match the precision of bespoke editorial print across all modern handheld screens.",
  },
  {
    number: "02",
    title: "Unobstructed Conversion Paths",
    subtitle: "Viewport Sovereignty & Compliance Flow",
    icon: Eye,
    body: "Reclaiming essential screen real estate where aggressive cookie banners, misplaced modals, and sticky banners physically mask primary reservation triggers. Your call to action remains permanently visible, unobstructed, and actionable.",
  },
  {
    number: "03",
    title: "Unified Booking Pipelines",
    subtitle: "Zero-Dropoff Consultation Scheduling",
    icon: CalendarCheck,
    body: "Ending fragmented client journeys across disjointed third-party engines and generic enquiry forms. We engineer seamless, end-to-end reservation architecture that preserves luxury brand equity from initial click to confirmed consultation.",
  },
  {
    number: "04",
    title: "Production-Grade Integrity",
    subtitle: "Live Header Hygiene & Strict Code Standards",
    icon: Terminal,
    body: "Total elimination of orphaned staging links, script collisions, and hardcoded legacy errors in live headers. We deliver clean, validated, production-grade builds that maintain zero console errors and rapid load times.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-surface-raised selection:text-ink">
      {/* =========================================================================
          1. HERO SECTION - GROUNDED EDITORIAL PRESTIGE
      ========================================================================== */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-border-subtle/60">
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20 md:pt-44 md:pb-32">
          <FadeInUp>
            {/* Status Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-border-subtle text-[10px] md:text-[11px] font-mono tracking-widest text-ink-dim uppercase mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              PRIVATE CLIENT ENGAGEMENTS // UK HIGH-TICKET SECTOR
            </div>

            {/* H1 Main Headline */}
            <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.08] text-ink">
              We Engineer the Digital Flagships of the UK’s Most Prestigious Brands.
            </h1>

            {/* Sub-Headline */}
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-ink-muted mb-10 font-light leading-relaxed">
              Veltris rebuilds digital architecture for private aesthetic clinics and luxury property developers. Operating strictly under <span className="text-ink font-normal">The Veltris Standard</span>, we eliminate hidden friction, elevate prestige perception, and protect high-value conversions on every mobile viewport.
            </p>

            {/* Primary CTA Block */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-full bg-ink text-paper px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-zinc-200 active:scale-95 flex items-center justify-center gap-3 shadow-xl"
              >
                Check Studio Availability <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Subtext below CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-ink-dim font-mono">
              <Link 
                href="/contact" 
                className="hover:text-ink transition-colors flex items-center gap-1 group font-medium"
              >
                <span>Request Private Audit</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
              <span className="hidden sm:inline text-border-subtle">·</span>
              <span className="text-accent/90">Limited to 1 Brand Engagement per Month.</span>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* =========================================================================
          2. THE METHODOLOGY ("THE VELTRIS STANDARD")
      ========================================================================== */}
      <section className="py-28 px-6 relative z-10 bg-paper">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <FadeInUp>
            <div className="max-w-3xl mb-16">
              <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-3">
                The Architectural Framework
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-ink leading-tight mb-6">
                The Veltris Standard: 4 Non-Negotiable Pillars of Digital Execution.
              </h2>
              <p className="text-ink-muted text-base md:text-lg font-light leading-relaxed">
                Most premium websites hemorrhage private client enquiries through invisible technical defects. We audit, architect, and deploy against four strict structural mandates.
              </p>
            </div>
          </FadeInUp>

          {/* 4-Pillar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <FadeInUp key={pillar.number} delay={idx * 0.1}>
                  <div className="bg-surface/50 border border-border-subtle rounded-3xl p-8 h-full flex flex-col justify-between hover:bg-surface-raised/50 hover:border-border-subtle/80 transition-all duration-300 group">
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between pb-6 mb-6 border-b border-border-subtle/70">
                        <span className="text-xs font-mono font-semibold text-accent tracking-widest">
                          PILLAR {pillar.number}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-ink-muted group-hover:text-ink transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-playfair font-medium mb-1.5 text-ink group-hover:text-accent transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-ink-dim mb-4">
                        {pillar.subtitle}
                      </p>

                      {/* Body */}
                      <p className="text-ink-muted font-light leading-relaxed text-sm">
                        {pillar.body}
                      </p>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-8 pt-4 border-t border-border-subtle/40 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-ink-dim">
                      <span>Standard Validated</span>
                      <span className="text-accent">100%</span>
                    </div>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. EXCLUSIVITY & APPLICATION SECTION
      ========================================================================== */}
      <section className="py-28 px-6 relative z-10 bg-paper-subtle border-y border-border-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Exclusivity Statement */}
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border-subtle text-[10px] font-mono tracking-widest text-accent uppercase mb-6">
                  <Shield className="w-3 h-3" />
                  CAPACITY ALLOCATION // STRICT QUOTA
                </div>

                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium mb-6 text-ink leading-tight">
                  One Client. Dedicated Focus. Absolute Precision.
                </h2>

                <div className="space-y-4 text-ink-muted font-light leading-relaxed text-base md:text-lg">
                  <p>
                    We are an elite boutique studio, not a high-volume agency. To protect production-grade integrity and maintain deep involvement in every build, the Veltris engine only accepts one exclusive brand engagement per calendar month.
                  </p>
                  <p>
                    We do not use pre-purchased templates, offshore execution, or work with low-ticket volume operations. Every interface is custom-architected for established private healthcare practices and premier luxury property groups requiring flawless digital prestige.
                  </p>
                </div>
              </FadeInUp>
            </div>

            {/* Right Column: Engagement Protocol Box */}
            <div className="lg:col-span-5">
              <FadeInUp delay={0.2}>
                <div className="bg-surface border border-border-subtle rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-ink-dim font-medium">
                      Engagement Protocol
                    </span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                  </div>

                  <div className="py-6 space-y-6">
                    {/* Metric 1 */}
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-ink-dim block mb-1">
                        Monthly Capacity
                      </span>
                      <p className="text-xl font-playfair font-medium text-ink flex items-center justify-between">
                        <span>1 / 1 Engagements Allocated</span>
                        <span className="text-xs font-mono text-accent bg-surface-raised px-2.5 py-1 rounded-full border border-border-subtle">
                          Strict
                        </span>
                      </p>
                    </div>

                    <div className="h-[1px] bg-border-subtle" />

                    {/* Metric 2 */}
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-ink-dim block mb-1">
                        Focus Sectors
                      </span>
                      <p className="text-sm font-medium text-ink leading-relaxed">
                        Private Healthcare, Aesthetics &amp; Luxury Architecture
                      </p>
                    </div>

                    <div className="h-[1px] bg-border-subtle" />

                    {/* Action CTA */}
                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="group flex items-center justify-between w-full py-4 px-6 rounded-2xl bg-ink text-paper text-xs font-semibold uppercase tracking-[0.16em] hover:bg-zinc-200 transition-all duration-300"
                      >
                        <span>Submit Brief for Next Open Slot</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-subtle/60 text-center">
                    <span className="text-[10px] font-mono text-ink-dim uppercase tracking-wider">
                      NDA &amp; Absolute Discretion Guaranteed
                    </span>
                  </div>
                </div>
              </FadeInUp>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FINAL CTA SECTION - PRIVATE AUDIT ENQUIRY
      ========================================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-paper">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="bg-surface/80 border border-border-subtle rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-dim mb-4 block">
                Veltris Private Client Studio
              </span>
              
              <h2 className="font-playfair text-3xl sm:text-5xl font-medium mb-6 text-ink leading-tight">
                Secure Your Brand’s Digital Sovereignty.
              </h2>
              
              <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                Partner with an elite boutique studio to audit, re-architect, and optimize your digital presence for maximum high-ticket conversion.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-ink text-paper font-semibold px-9 py-4 rounded-full text-xs uppercase tracking-[0.18em] hover:bg-zinc-200 transition-all duration-300 shadow-lg"
                >
                  Check Studio Availability
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-8 text-[11px] font-mono text-ink-dim">
                Direct Principal Contact:{" "}
                <a href="mailto:muhammad@veltris.uk" className="text-accent hover:underline underline-offset-2">
                  muhammad@veltris.uk
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}

