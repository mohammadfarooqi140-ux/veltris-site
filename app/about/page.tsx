'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, CheckCircle2, Lock } from 'lucide-react'
import FadeInUp from '@/components/FadeInUp'

const About3D = dynamic(() => import('@/components/ui/About3D'), { ssr: false })

export default function AboutPage() {
  return (
    <main className="bg-paper min-h-screen text-ink overflow-hidden pb-24 selection:bg-surface-raised selection:text-ink">
      {/* Hero Section */}
      <section className="relative w-full min-h-[78vh] flex items-center pt-32 pb-16 border-b border-border-subtle/60">
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-border-subtle text-[10px] md:text-[11px] font-mono tracking-widest text-ink-dim uppercase mb-6 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                STUDIO PHILOSOPHY // THE VELTRIS PRINCIPLE
              </div>
              <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl leading-[1.08] font-medium tracking-tight mb-8 text-ink">
                Engineered for Prestige.
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.1}>
              <div className="space-y-6 text-base sm:text-lg md:text-xl text-ink-muted max-w-2xl font-light leading-relaxed">
                <p>
                  Veltris was founded to bridge the gap between aesthetic excellence and technical performance. We specialize exclusively in the private healthcare and luxury property sectors.
                </p>
                <p>
                  High-ticket private clients make instant trust assessments within seconds of opening a digital experience. When viewports break, cookie overlays block appointment triggers, or reservation workflows glitch, brand equity evaporates.
                </p>
                <p className="text-ink text-base md:text-lg font-normal">
                  We enforce <span className="font-medium text-accent">The Veltris Standard</span>—building zero-compromise, bespoke digital flagships that protect high-value conversions.
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* 3D Visual Asset */}
          <div className="w-full lg:w-[40%] h-[350px] lg:h-[480px] relative rounded-3xl overflow-hidden border border-border-subtle bg-surface/40 flex items-center justify-center">
            <About3D />
          </div>
        </div>
      </section>

      {/* Philosophy Pillars Section */}
      <section className="py-28 bg-paper relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <FadeInUp>
            <div className="flex items-center justify-between border-b border-border-subtle pb-6 mb-12">
              <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-ink">
                Operating Mandates
              </h2>
              <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase">
                Studio Standards
              </span>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Primary Column */}
            <div className="lg:col-span-6">
              <FadeInUp delay={0.1}>
                <div className="bg-surface border border-border-subtle rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between hover:bg-surface-raised/40 transition-colors">
                  <div>
                    <span className="text-xs font-mono text-accent font-semibold block mb-6 tracking-widest">
                      01 · ABSOLUTE PRECISION
                    </span>
                    <h3 className="font-playfair text-3xl font-medium mb-4 text-ink">
                      No Templates. No Mass Volume.
                    </h3>
                    <p className="text-ink-muted text-base md:text-lg leading-relaxed font-light mb-8">
                      Every interface is authored from first principles in Next.js and Tailwind CSS. We do not use bloated page builders or pre-packaged themes that introduce hidden technical debt.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border-subtle/80 flex items-center justify-between text-xs font-mono text-ink-dim">
                    <span>Clean Code Hygiene</span>
                    <span>Production Grade</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
            
            {/* Stacked Columns */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <FadeInUp delay={0.2}>
                <div className="bg-surface/60 border border-border-subtle rounded-3xl p-8 hover:bg-surface-raised/40 transition-colors flex-1">
                  <span className="text-xs font-mono text-ink-dim block mb-3 font-semibold tracking-widest">
                    02 · EXCLUSIVITY
                  </span>
                  <h3 className="font-playfair text-2xl font-medium mb-3 text-ink">
                    1 Engagement Per Month
                  </h3>
                  <p className="text-ink-muted text-sm md:text-base leading-relaxed font-light">
                    Our strict capacity quota guarantees complete principal focus on your platform architecture, ensuring every viewport is audited and refined without compromise.
                  </p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <div className="bg-surface/60 border border-border-subtle rounded-3xl p-8 hover:bg-surface-raised/40 transition-colors flex-1">
                  <span className="text-xs font-mono text-ink-dim block mb-3 font-semibold tracking-widest">
                    03 · CONFIDENTIALITY
                  </span>
                  <h3 className="font-playfair text-2xl font-medium mb-3 text-ink">
                    Discretion &amp; NDA Protocol
                  </h3>
                  <p className="text-ink-muted text-sm md:text-base leading-relaxed font-light">
                    We treat all patient data flows, conversion architectures, and high-ticket development plans under strict confidentiality agreements.
                  </p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10 bg-paper">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="bg-surface border border-border-subtle rounded-3xl p-8 sm:p-12 md:p-16 text-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-dim mb-4 block">
                Veltris Studio Allocation
              </span>
              
              <h2 className="font-playfair text-3xl sm:text-5xl font-medium mb-6 text-ink leading-tight">
                Partner with Veltris.
              </h2>
              
              <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                Secure the next available calendar slot to audit and re-architect your clinic or luxury development presence.
              </p>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-ink text-paper font-semibold px-9 py-4 rounded-full text-xs uppercase tracking-[0.18em] hover:bg-zinc-200 transition-all duration-300 shadow-lg"
              >
                Check Studio Availability
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  )
}

