"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, TrendingUp, Briefcase } from "lucide-react";
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
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              We build pitch decks <br className="hidden md:block" />
              that get founders funded.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 font-light leading-relaxed">
              Premium pitch decks for founders raising Pre-Seed through Series C. We clarify your narrative, visualize your financial data, and design an investor-ready presentation.
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
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="font-playfair text-3xl md:text-4xl mb-12 text-center">What we make</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Seed Decks",
                desc: "Clear, compelling narratives for early-stage founders."
              },
              {
                icon: TrendingUp,
                title: "Series A Decks",
                desc: "Data-driven presentations built for conviction."
              },
              {
                icon: Briefcase,
                title: "Sales & Investor Update Decks",
                desc: "Professional updates to keep stakeholders engaged."
              }
            ].map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors h-full">
                  <item.icon className="w-8 h-8 text-zinc-400 mb-6" />
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-zinc-500 font-light">{item.desc}</p>
                </div>
              </FadeInUp>
            ))}
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

      {/* CASE STUDY TEASER */}
      <section className="py-24 px-6 relative z-10 bg-black">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="p-10 md:p-16 flex flex-col justify-center w-full md:w-1/2">
                <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-4">Case Study</span>
                <h3 className="font-playfair text-3xl md:text-4xl mb-6">Aethalgard. Series A Deck.</h3>
                <p className="text-zinc-400 mb-10 font-light leading-relaxed text-lg">
                  A premium Series A pitch deck built for conviction. Clear financial data visualization and a strong narrative flow.
                </p>
                <div>
                  <Link
                    href="/work/aethalgard"
                    className="inline-flex items-center gap-2 text-sm font-medium border-b border-zinc-700 pb-1 hover:border-white transition-colors"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-0 bg-[#0a0a0a] flex flex-col p-6 md:p-10 font-sans border-l border-[#1a1a1a]">
                <div className="text-zinc-500 text-xs font-semibold tracking-[0.2em] uppercase mb-8">Revenue Growth (2020-2027)</div>
                <div className="flex-1 relative flex">
                  {/* Y-axis labels */}
                  <div className="flex flex-col justify-between text-[10px] text-zinc-600 pb-8 pr-4 font-mono">
                    <span>$300M</span>
                    <span>$200M</span>
                    <span>$100M</span>
                    <span>$0M</span>
                  </div>
                  {/* Graph area */}
                  <div className="flex-1 relative border-l border-b border-zinc-800/50 mb-8">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      <div className="w-full border-t border-zinc-800/30"></div>
                      <div className="w-full border-t border-zinc-800/30"></div>
                      <div className="w-full border-t border-zinc-800/30"></div>
                      <div className="w-full border-t border-transparent"></div>
                    </div>
                    {/* SVG Line */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 300">
                      <polyline
                        points="0,288 100,272 200,236 300,195 400,140 500,92 600,65 700,55"
                        fill="none"
                        stroke="#c8a84e"
                        strokeWidth="4"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_rgba(200,168,78,0.4)]"
                      />
                      {/* Dots */}
                      <circle cx="0" cy="288" r="4" fill="#0a0a0a" stroke="#c8a84e" strokeWidth="2" />
                      <circle cx="100" cy="272" r="4" fill="#0a0a0a" stroke="#c8a84e" strokeWidth="2" />
                      <circle cx="200" cy="236" r="4" fill="#0a0a0a" stroke="#c8a84e" strokeWidth="2" />
                      <circle cx="300" cy="195" r="4" fill="#0a0a0a" stroke="#c8a84e" strokeWidth="2" />
                      <circle cx="400" cy="140" r="4" fill="#0a0a0a" stroke="#c8a84e" strokeWidth="2" />
                      <circle cx="500" cy="92" r="4" fill="#0a0a0a" stroke="#c8a84e" strokeWidth="2" />
                      <circle cx="600" cy="65" r="4" fill="#0a0a0a" stroke="#c8a84e" strokeWidth="2" />
                      <circle cx="700" cy="55" r="5" fill="#c8a84e" className="drop-shadow-[0_0_8px_rgba(200,168,78,0.8)]" />
                    </svg>
                    {/* X-axis labels */}
                    <div className="absolute left-0 right-0 -bottom-8 flex justify-between text-[10px] text-zinc-600 font-mono">
                      <span>&apos;20</span>
                      <span>&apos;21</span>
                      <span>&apos;22</span>
                      <span>&apos;23</span>
                      <span>&apos;24</span>
                      <span>&apos;25</span>
                      <span>&apos;26</span>
                      <span>&apos;27</span>
                    </div>
                  </div>
                </div>
              </div>
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
