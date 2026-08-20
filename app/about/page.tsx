'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react'
import FadeInUp from '@/components/FadeInUp'

const About3D = dynamic(() => import('@/components/ui/About3D'), { ssr: false })

export default function AboutPage() {
  return (
    <main className="bg-paper min-h-screen text-ink overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] flex items-center pt-28 pb-12 border-b border-border-subtle/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content (60% on desktop) */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            <FadeInUp>
              <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-4">
                About Veltris
              </span>
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-medium tracking-tight mb-8 text-ink">
                We Build the Decks That Get Founders Funded.
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.1}>
              <div className="space-y-6 text-base sm:text-lg md:text-xl text-ink-muted max-w-2xl font-light leading-relaxed">
                <p>
                  Most investors spend less than 3 minutes on a deck. At Veltris, we make every second count. I&apos;m Mohammad, and I lead a luxury pitch deck studio dedicated to the 1% of founders who refuse to blend in.
                </p>
                <p>
                  We partner with founders from Pre-Seed through Series C to transform raw data into a clear, confident, and visually compelling narrative. While others focus on slides, we focus on the storytelling that secures the meeting.
                </p>
                <p className="text-ink-dim text-sm md:text-base font-normal">
                  Alongside pitch decks, we also design and build premium websites for select startups and real estate projects.
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* 3D Element (Appears behind text on mobile, 40% side column on desktop) */}
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden lg:relative lg:opacity-100 lg:w-[40%] lg:h-[500px] lg:z-auto">
            <About3D />
          </div>
        </div>
      </section>

      {/* The Veltris Standard Section - ASYMMETRIC EDITORIAL LAYOUT */}
      <section className="py-24 bg-paper relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <FadeInUp>
            <div className="flex items-center justify-between border-b border-border-subtle pb-6 mb-12">
              <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-ink">
                The Veltris Standard
              </h2>
              <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase">Design Discipline</span>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Primary Asymmetric Lead Column */}
            <div className="lg:col-span-6">
              <FadeInUp delay={0.1}>
                <div className="bg-surface border border-border-subtle rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between hover:bg-surface-raised transition-colors">
                  <div>
                    <span className="text-xs font-mono text-accent block mb-6">01 · ARCHITECTURE</span>
                    <h3 className="font-playfair text-3xl font-medium mb-4 text-ink">Narrative Architecture</h3>
                    <p className="text-ink-muted text-base md:text-lg leading-relaxed font-light mb-8">
                      We construct your fundraising narrative before touching a single slide. Every claim is substantiated, every slide is deliberate, and every insight commands investor conviction.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border-subtle/80 flex items-center justify-between text-xs font-mono text-ink-dim">
                    <span>Story First</span>
                    <span>Conviction Driven</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
            
            {/* Secondary Stacked Columns */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <FadeInUp delay={0.2}>
                <div className="bg-surface/60 border border-border-subtle rounded-3xl p-8 hover:bg-surface-raised transition-colors flex-1">
                  <span className="text-xs font-mono text-ink-dim block mb-3">02 · CRAFT</span>
                  <h3 className="font-playfair text-2xl font-medium mb-3 text-ink">Bespoke Design</h3>
                  <p className="text-ink-muted text-sm md:text-base leading-relaxed font-light">
                    Zero templates. Every presentation is a tailor-made asset crafted specifically for your stage and your audience.
                  </p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <div className="bg-surface/60 border border-border-subtle rounded-3xl p-8 hover:bg-surface-raised transition-colors flex-1">
                  <span className="text-xs font-mono text-ink-dim block mb-3">03 · VELOCITY</span>
                  <h3 className="font-playfair text-2xl font-medium mb-3 text-ink">Founder Speed</h3>
                  <p className="text-ink-muted text-sm md:text-base leading-relaxed font-light">
                    High-velocity execution without agency bureaucracy. Delivered in 10 days, designed around rapid fundraising momentum.
                  </p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - FLATTENED HIERARCHY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-paper">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="bg-surface border border-border-subtle rounded-3xl p-8 sm:p-12 md:p-16 text-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-dim mb-4 block">
                Veltris Pitch Deck Studio
              </span>
              
              <h2 className="font-playfair text-3xl sm:text-5xl font-medium mb-6 text-ink leading-tight">
                Ready to raise?
              </h2>
              
              <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                Partner with a dedicated studio to craft an investor-ready presentation that commands attention, clarifies your narrative, and drives meetings.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-ink-dim mb-10 tabular-nums">
                <span className="inline-flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-accent" /> Delivered in 10 Days</span>
                <span className="text-border-subtle">•</span>
                <span className="inline-flex items-center gap-1.5"><Layers className="w-3.5 h-3.5 text-accent" /> 100% Custom Decks</span>
                <span className="text-border-subtle">•</span>
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-accent" /> Pre-Seed to Series C</span>
              </div>

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
  )
}

