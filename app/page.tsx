"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Globe } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("@/components/ui/Hero3D"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-zinc-800">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-36 md:pt-44">
          <FadeInUp>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
              Investor-ready pitch decks for founders raising capital.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 font-light leading-relaxed">
              We also design and build premium websites for startups and real estate projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="rounded-full bg-white text-black px-8 py-4 font-medium transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                Start Your Deck <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="rounded-full bg-transparent border border-zinc-700 text-white px-8 py-4 font-medium transition-colors hover:bg-zinc-800"
              >
                View Our Work
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              From £1,999. Delivered in 5 to 7 days.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* WHAT WE DO STRIP */}
      <section className="py-24 px-6 relative z-10 bg-black">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <h2 className="font-playfair text-3xl md:text-4xl mb-12 text-center">What we do</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInUp delay={0.1}>
              <div className="bg-zinc-900/40 p-8 md:p-10 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors h-full flex flex-col justify-between">
                <div>
                  <FileText className="w-8 h-8 text-zinc-400 mb-6" />
                  <h3 className="text-2xl font-playfair font-medium mb-3">Pitch Decks</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Premium pitch decks for founders raising Pre-Seed through Series C. Data-driven, narrative-first presentations built for conviction.
                  </p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-zinc-900/40 p-8 md:p-10 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors h-full flex flex-col justify-between">
                <div>
                  <Globe className="w-8 h-8 text-zinc-400 mb-6" />
                  <h3 className="text-2xl font-playfair font-medium mb-3">Premium Websites</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Clean, high-end websites for startups and real estate developments. Focused on design quality, speed, and conversion.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* WHY VELTRIS */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-zinc-900 blur-3xl opacity-20 rounded-full"></div>
          <FadeInUp>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-[2.5rem] p-10 md:p-16 text-center relative shadow-[inset_0_0_80px_rgba(255,255,255,0.02)]">
              <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-8">
                &ldquo;Most pitch decks look the same because they came from the same template. Investors see hundreds of decks a month. Yours needs to command attention immediately.&rdquo;
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Veltris is a boutique pitch deck studio. One designer. Deep market research. Every deck is built from scratch around your story, your numbers, and what makes your business worth betting on.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
        <div className="max-w-5xl mx-auto">
          <FadeInUp>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden text-center shadow-2xl">
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
  );
}
