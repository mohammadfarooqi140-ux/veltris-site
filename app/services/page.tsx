"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeInUp from "@/components/FadeInUp";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-32 pb-24 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* HERO SECTION */}
        <section className="mb-32">
          <FadeInUp className="text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] uppercase font-semibold text-zinc-400 mb-6 tracking-[0.2em]">
              SERVICES & PRICING
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold tracking-tight mb-8 max-w-4xl leading-[1.1] text-white">
              The deck that gets the meeting.
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              We design pitch decks for founders raising Pre-Seed through Series C. Every deck is built from scratch around your story, your numbers, and your raise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16 md:justify-start justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-zinc-950 min-h-[56px] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98] w-full sm:w-auto"
              >
                Start Your Deck
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center bg-zinc-900 border border-white/10 text-white min-h-[56px] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition hover:bg-zinc-800 active:scale-[0.98] w-full sm:w-auto"
              >
                View Our Work
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2} className="relative mx-auto rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl max-w-4xl">
            <div className="flex items-center px-4 py-3 bg-[#0a0a0a] border-b border-white/5 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 flex items-center justify-center w-full pr-12">
                <span className="text-[10px] text-zinc-500 font-medium tracking-[0.2em] uppercase">Deck Performance Metrics</span>
              </div>
            </div>
            <div className="bg-[#0a0a0a] p-8 md:p-16">
              <div className="flex items-end justify-between h-48 md:h-64 gap-4 md:gap-8 border-b border-zinc-800 pb-4">
                {/* Bar 1 */}
                <div className="flex flex-col items-center justify-end flex-1 h-full">
                  <div className="text-[#c8a84e] font-playfair font-bold text-2xl md:text-4xl mb-3">+340%</div>
                  <div className="w-full max-w-[60px] bg-[#c8a84e] rounded-t-md shadow-[0_0_15px_rgba(200,168,78,0.2)]" style={{ height: '100%' }}></div>
                  <div className="text-zinc-500 text-[10px] md:text-xs text-center font-medium tracking-wider uppercase mt-4 h-8">Investor<br/>Meetings</div>
                </div>
                {/* Bar 2 */}
                <div className="flex flex-col items-center justify-end flex-1 h-full">
                  <div className="text-[#c8a84e] font-playfair font-bold text-2xl md:text-4xl mb-3">+67%</div>
                  <div className="w-full max-w-[60px] bg-[#c8a84e] rounded-t-md shadow-[0_0_15px_rgba(200,168,78,0.2)] opacity-80" style={{ height: '60%' }}></div>
                  <div className="text-zinc-500 text-[10px] md:text-xs text-center font-medium tracking-wider uppercase mt-4 h-8">Close<br/>Rate</div>
                </div>
                {/* Bar 3 */}
                <div className="flex flex-col items-center justify-end flex-1 h-full">
                  <div className="text-[#c8a84e] font-playfair font-bold text-2xl md:text-4xl mb-3">-40%</div>
                  <div className="w-full max-w-[60px] bg-[#c8a84e] rounded-t-md shadow-[0_0_15px_rgba(200,168,78,0.2)] opacity-60" style={{ height: '40%' }}></div>
                  <div className="text-zinc-500 text-[10px] md:text-xs text-center font-medium tracking-wider uppercase mt-4 h-8">Time to<br/>Term Sheet</div>
                </div>
                {/* Bar 4 */}
                <div className="flex flex-col items-center justify-end flex-1 h-full">
                  <div className="text-[#c8a84e] font-playfair font-bold text-2xl md:text-4xl mb-3">9.4/10</div>
                  <div className="w-full max-w-[60px] bg-[#c8a84e] rounded-t-md shadow-[0_0_15px_rgba(200,168,78,0.2)] opacity-90" style={{ height: '90%' }}></div>
                  <div className="text-zinc-500 text-[10px] md:text-xs text-center font-medium tracking-wider uppercase mt-4 h-8">Deck<br/>Score</div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* SERVICES GRID */}
        <section className="mb-32">
          <FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Seed Decks */}
              <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 flex flex-col hover:bg-zinc-900/60 transition duration-300">
                <div className="text-zinc-500 font-mono text-sm mb-4">01</div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-4">Seed Decks</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  For founders at the earliest stage, building conviction from scratch.
                </p>
                <div className="mb-10 flex-grow">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-semibold">Deliverables</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> Up to 15 slides</li>
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> PPTX and PDF formats</li>
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> 2 revision rounds</li>
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> Market research inclusion</li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-lg text-white font-medium">From £1,999</span>
                  <Link href="/contact" className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition">
                    Get a Quote →
                  </Link>
                </div>
              </div>

              {/* Series A Decks */}
              <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 flex flex-col hover:bg-zinc-900/60 transition duration-300">
                <div className="text-zinc-500 font-mono text-sm mb-4">02</div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-4">Series A Decks</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  For founders scaling up who need a deck that matches their traction.
                </p>
                <div className="mb-10 flex-grow">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-semibold">Deliverables</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> Up to 20 slides</li>
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> PPTX and PDF formats</li>
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> 3 revision rounds</li>
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> Financial data visualization</li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-lg text-white font-medium">From £2,999</span>
                  <Link href="/contact" className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition">
                    Get a Quote →
                  </Link>
                </div>
              </div>

              {/* Sales Decks */}
              <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 flex flex-col hover:bg-zinc-900/60 transition duration-300">
                <div className="text-zinc-500 font-mono text-sm mb-4">03</div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-4">Sales Decks</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Turn your pitch into a weapon for enterprise deals and partnerships.
                </p>
                <div className="mb-10 flex-grow">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-semibold">Deliverables</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> Up to 15 slides</li>
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> PPTX and PDF formats</li>
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> 2 revision rounds</li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-lg text-white font-medium">From £1,499</span>
                  <Link href="/contact" className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition">
                    Get a Quote →
                  </Link>
                </div>
              </div>

              {/* Investor Updates */}
              <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 flex flex-col hover:bg-zinc-900/60 transition duration-300">
                <div className="text-zinc-500 font-mono text-sm mb-4">04</div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-4">Investor Updates</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Keep your current investors informed and future investors interested.
                </p>
                <div className="mb-10 flex-grow">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-semibold">Deliverables</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> Up to 10 slides</li>
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> PPTX and PDF formats</li>
                    <li className="flex items-start text-sm text-zinc-300"><span className="text-zinc-600 mr-3">•</span> 1 revision round</li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-lg text-white font-medium">From £999</span>
                  <Link href="/contact" className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition">
                    Get a Quote →
                  </Link>
                </div>
              </div>

            </div>
          </FadeInUp>
        </section>

        {/* PROCESS STEPS */}
        <section className="mb-32">
          <FadeInUp>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] uppercase font-semibold text-zinc-400 mb-10 tracking-[0.2em]">
              THE PROCESS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "You share the brief", desc: "Tell us about your company, raise target, and who you are pitching." },
                { step: "02", title: "We shape the narrative", desc: "We build the story arc, slide structure, and financial data layout." },
                { step: "03", title: "We design the deck", desc: "Every slide crafted perfectly, then exported to PPTX and PDF." },
                { step: "04", title: "You pitch and raise", desc: "Delivered in 5 to 7 days. You pitch with confidence." }
              ].map((process, i) => (
                <div key={i} className="flex flex-col border-l border-white/10 pl-6 py-2">
                  <span className="text-xs font-mono text-zinc-500 mb-4">{process.step}</span>
                  <h4 className="text-lg font-playfair font-bold text-white mb-2">{process.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{process.desc}</p>
                </div>
              ))}
            </div>
          </FadeInUp>
        </section>

        {/* FINAL CTA */}
        <section className="text-center pt-16 border-t border-white/5 relative">
          <FadeInUp>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-10">Let us build your deck.</h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-zinc-950 min-h-[56px] px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98]"
            >
              Start a Project
            </Link>
          </FadeInUp>
        </section>

      </div>
    </main>
  );
}
