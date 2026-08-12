'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react'
import FadeInUp from '@/components/FadeInUp'

const About3D = dynamic(() => import('@/components/ui/About3D'), { ssr: false })

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] flex items-center pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content (60% on desktop) */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            <FadeInUp>
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-medium tracking-tight mb-8">
                We Build the Decks That Get Founders Funded.
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.1}>
              <div className="space-y-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
                <p>
                  Most investors spend less than 3 minutes on a deck. At Veltris, we make every second count. I&apos;m Mohammad, and I lead a luxury pitch deck studio dedicated to the 1% of founders who refuse to blend in.
                </p>
                <p>
                  We partner with founders from Pre-Seed through Series C to transform raw data into a clear, confident, and visually compelling narrative. While others focus on slides, we focus on the storytelling that secures the meeting.
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* 3D Element (40% on desktop - HIDDEN ON MOBILE) */}
          <div className="hidden lg:block w-full lg:w-[40%] h-[500px] relative pointer-events-none overflow-hidden">
            <About3D />
          </div>
        </div>
      </section>

      {/* The Veltris Standard Section */}
      <section className="py-24 bg-black relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeInUp>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium mb-16 text-center text-white">
              The Veltris Standard
            </h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 h-full transition-colors hover:border-[#333333]">
                <h3 className="font-playfair text-2xl font-medium mb-4 text-white">Narrative Architecture</h3>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
                  We build your story before we touch a pixel.
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 h-full transition-colors hover:border-[#333333]">
                <h3 className="font-playfair text-2xl font-medium mb-4 text-white">Bespoke Design</h3>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
                  Zero templates. Every deck is a custom asset built for your specific audience.
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.3}>
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 h-full transition-colors hover:border-[#333333]">
                <h3 className="font-playfair text-2xl font-medium mb-4 text-white">Founder Speed</h3>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
                  High velocity execution without the agency jargon.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
        <div className="max-w-5xl mx-auto">
          <FadeInUp>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden text-center shadow-2xl">
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-zinc-500/5 to-amber-500/10 blur-3xl pointer-events-none opacity-60" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/90 mb-4 inline-block">
                  Veltris Pitch Deck Studio
                </span>
                
                <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-medium mb-6 text-white leading-tight">
                  Ready to raise?
                </h2>
                
                <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                  Partner with a dedicated studio to craft an investor-ready presentation that commands attention, clarifies your narrative, and drives meetings.
                </p>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left border-y border-white/5 py-6">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">5-7 Day Turnaround</div>
                      <div className="text-[11px] text-zinc-500">High-velocity execution</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">100% Custom Deck</div>
                      <div className="text-[11px] text-zinc-500">Zero templates used</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">Pre-Seed to Series C</div>
                      <div className="text-[11px] text-zinc-500">Tailored narrative arc</div>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-base sm:text-lg font-medium hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-white/10"
                >
                  Start Your Deck
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  )
}
