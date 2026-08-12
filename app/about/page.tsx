'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FadeInUp from '@/components/FadeInUp'

const About3D = dynamic(() => import('@/components/ui/About3D'), { ssr: false })

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content (60%) */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            <FadeInUp>
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl leading-tight font-medium tracking-tight mb-8">
                We Build the Decks That Get Founders Funded.
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.1}>
              <div className="space-y-6 text-lg md:text-xl text-zinc-400 max-w-2xl">
                <p>
                  Most investors spend less than 3 minutes on a deck. At Veltris, we make every second count. I&apos;m Mohammad, and I lead a luxury pitch deck studio dedicated to the 1% of founders who refuse to blend in.
                </p>
                <p>
                  We partner with founders from Pre-Seed through Series C to transform raw data into a clear, confident, and visually compelling narrative. While others focus on slides, we focus on the storytelling that secures the meeting.
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* 3D Element (40%) */}
          <div className="w-full lg:w-[40%] h-[400px] lg:h-[600px] relative pointer-events-none">
            <About3D />
          </div>
        </div>
      </section>

      {/* The Veltris Standard Section */}
      <section className="py-24 bg-black relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeInUp>
            <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-16 text-center text-white">
              The Veltris Standard
            </h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 h-full transition-colors hover:border-[#333333]">
                <h3 className="font-playfair text-2xl font-medium mb-4 text-white">Narrative Architecture</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  We build your story before we touch a pixel.
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 h-full transition-colors hover:border-[#333333]">
                <h3 className="font-playfair text-2xl font-medium mb-4 text-white">Bespoke Design</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Zero templates. Every deck is a custom asset built for your specific audience.
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.3}>
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 h-full transition-colors hover:border-[#333333]">
                <h3 className="font-playfair text-2xl font-medium mb-4 text-white">Founder Speed</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  High velocity execution without the agency jargon.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <FadeInUp>
            <h2 className="font-playfair text-5xl md:text-6xl font-medium mb-10 text-white">
              Ready to raise?
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors duration-300"
            >
              Start Your Deck
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInUp>
        </div>
      </section>
    </main>
  )
}
