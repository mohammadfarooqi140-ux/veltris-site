"use client";

import Link from "next/link";
import FadeInUp from "@/components/FadeInUp";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-paper text-ink pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* HERO SECTION */}
        <section className="mb-32">
          <FadeInUp className="text-center md:text-left">
            <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-4">
              Services & Pricing
            </span>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold tracking-tight mb-8 max-w-4xl leading-[1.1] text-ink">
              The deck that gets the meeting.
            </h1>
            <p className="text-ink-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              We design pitch decks for founders raising Pre-Seed through Series C. Every deck is built from scratch around your story, your numbers, and your raise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16 md:justify-start justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-ink text-paper font-medium min-h-[52px] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-zinc-200 active:scale-[0.98] w-full sm:w-auto"
              >
                Start Your Deck
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center bg-surface border border-border-subtle text-ink font-medium min-h-[52px] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-surface-raised active:scale-[0.98] w-full sm:w-auto"
              >
                View Our Work
              </Link>
            </div>
          </FadeInUp>

          {/* THE VELTRIS DIFFERENCE - CLEAN EDITORIAL ARCHITECTURE (NO FAKE WINDOW CHROME) */}
          <FadeInUp delay={0.15} className="relative mx-auto rounded-2xl overflow-hidden border border-border-subtle bg-surface/60 max-w-5xl">
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-between border-b border-border-subtle pb-6 mb-8">
                <h3 className="font-playfair text-xl md:text-2xl text-ink font-medium">The Veltris Standard</h3>
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase">Core Pillars</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { num: "01", label: "Narrative-First", description: "We architect your story before designing a single slide." },
                  { num: "02", label: "Zero Templates", description: "Every deck is built from scratch for your specific audience." },
                  { num: "03", label: "Bespoke Design", description: "Precision-crafted visuals that reflect the quality of your vision." },
                  { num: "04", label: "Founder Speed", description: "High-velocity execution without compromising on craft." },
                ].map((item) => (
                  <div key={item.label} className="border border-border-subtle/80 bg-paper/60 rounded-xl p-6 flex flex-col gap-2">
                    <span className="text-xs font-mono text-ink-dim">{item.num}</span>
                    <div className="text-accent font-playfair font-semibold text-base">{item.label}</div>
                    <div className="text-ink-muted text-xs leading-relaxed">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* SERVICES GRID */}
        <section className="mb-32">
          <FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Seed Decks */}
              <div className="bg-surface/50 border border-border-subtle rounded-3xl p-8 flex flex-col hover:bg-surface-raised/40 transition duration-300">
                <div className="text-ink-dim font-mono text-sm mb-4">01</div>
                <h3 className="text-3xl font-playfair font-bold text-ink mb-4">Seed Decks</h3>
                <p className="text-ink-muted mb-8 leading-relaxed">
                  For founders at the earliest stage, building conviction from scratch.
                </p>
                <div className="mb-10 flex-grow">
                  <h4 className="text-[11px] uppercase tracking-widest text-ink-dim mb-4 font-semibold">Deliverables</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> Up to 15 slides</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> PPTX and PDF formats</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> 2 revision rounds</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> Market research inclusion</li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-border-subtle pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-lg text-ink font-medium tabular-nums">From £1,499</span>
                  <Link href="/contact" className="text-xs font-semibold uppercase tracking-widest text-ink-muted hover:text-ink transition">
                    Get a Quote →
                  </Link>
                </div>
              </div>

              {/* Series A Decks */}
              <div className="bg-surface/50 border border-border-subtle rounded-3xl p-8 flex flex-col hover:bg-surface-raised/40 transition duration-300">
                <div className="text-ink-dim font-mono text-sm mb-4">02</div>
                <h3 className="text-3xl font-playfair font-bold text-ink mb-4">Series A Decks</h3>
                <p className="text-ink-muted mb-8 leading-relaxed">
                  For founders scaling up who need a deck that matches their traction.
                </p>
                <div className="mb-10 flex-grow">
                  <h4 className="text-[11px] uppercase tracking-widest text-ink-dim mb-4 font-semibold">Deliverables</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> Up to 20 slides</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> PPTX and PDF formats</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> 3 revision rounds</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> Financial data visualization</li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-border-subtle pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-lg text-ink font-medium tabular-nums">From £2,999</span>
                  <Link href="/contact" className="text-xs font-semibold uppercase tracking-widest text-ink-muted hover:text-ink transition">
                    Get a Quote →
                  </Link>
                </div>
              </div>

              {/* Sales Decks */}
              <div className="bg-surface/50 border border-border-subtle rounded-3xl p-8 flex flex-col hover:bg-surface-raised/40 transition duration-300">
                <div className="text-ink-dim font-mono text-sm mb-4">03</div>
                <h3 className="text-3xl font-playfair font-bold text-ink mb-4">Sales Decks</h3>
                <p className="text-ink-muted mb-8 leading-relaxed">
                  Turn your pitch into a weapon for enterprise deals and partnerships.
                </p>
                <div className="mb-10 flex-grow">
                  <h4 className="text-[11px] uppercase tracking-widest text-ink-dim mb-4 font-semibold">Deliverables</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> Up to 15 slides</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> PPTX and PDF formats</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> 2 revision rounds</li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-border-subtle pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-lg text-ink font-medium tabular-nums">From £1,499</span>
                  <Link href="/contact" className="text-xs font-semibold uppercase tracking-widest text-ink-muted hover:text-ink transition">
                    Get a Quote →
                  </Link>
                </div>
              </div>

              {/* Investor Updates */}
              <div className="bg-surface/50 border border-border-subtle rounded-3xl p-8 flex flex-col hover:bg-surface-raised/40 transition duration-300">
                <div className="text-ink-dim font-mono text-sm mb-4">04</div>
                <h3 className="text-3xl font-playfair font-bold text-ink mb-4">Investor Updates</h3>
                <p className="text-ink-muted mb-8 leading-relaxed">
                  Keep your current investors informed and future investors interested.
                </p>
                <div className="mb-10 flex-grow">
                  <h4 className="text-[11px] uppercase tracking-widest text-ink-dim mb-4 font-semibold">Deliverables</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> Up to 10 slides</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> PPTX and PDF formats</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> 1 revision round</li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-border-subtle pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-lg text-ink font-medium tabular-nums">From £999</span>
                  <Link href="/contact" className="text-xs font-semibold uppercase tracking-widest text-ink-muted hover:text-ink transition">
                    Get a Quote →
                  </Link>
                </div>
              </div>

              {/* Premium Websites */}
              <div className="bg-surface/50 border border-border-subtle rounded-3xl p-8 flex flex-col hover:bg-surface-raised/40 transition duration-300 md:col-span-2">
                <div className="text-ink-dim font-mono text-sm mb-4">05</div>
                <h3 className="text-3xl font-playfair font-bold text-ink mb-4">Premium Websites</h3>
                <p className="text-ink-muted mb-8 leading-relaxed max-w-2xl">
                  Clean, high-end websites for startups and real estate developments. Focused on design quality, speed, and conversion.
                </p>
                <div className="mb-10 flex-grow">
                  <h4 className="text-[11px] uppercase tracking-widest text-ink-dim mb-4 font-semibold">Deliverables</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> Bespoke Responsive Web Design</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> Next.js & Modern Tech Stack</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> Speed & SEO Optimization</li>
                    <li className="flex items-start text-sm text-ink-muted"><span className="text-ink-dim mr-3">•</span> Conversion Architecture</li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-border-subtle pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-lg text-ink font-medium">Bespoke Quote</span>
                  <Link href="/contact" className="text-xs font-semibold uppercase tracking-widest text-ink-muted hover:text-ink transition">
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
            <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-8">
              The Process
            </span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "You share the brief", desc: "Tell us about your company, raise target, and who you are pitching." },
                { step: "02", title: "We shape the narrative", desc: "We build the story arc, slide structure, and financial data layout." },
                { step: "03", title: "We design the deck", desc: "Every slide crafted perfectly, then exported to PPTX and PDF." },
                { step: "04", title: "You pitch and raise", desc: "Delivered in 10 days. You pitch with confidence." }
              ].map((process, i) => (
                <div key={i} className="flex flex-col border-l border-border-subtle pl-6 py-2">
                  <span className="text-xs font-mono text-ink-dim mb-4">{process.step}</span>
                  <h4 className="text-lg font-playfair font-bold text-ink mb-2">{process.title}</h4>
                  <p className="text-sm text-ink-muted leading-relaxed">{process.desc}</p>
                </div>
              ))}
            </div>
          </FadeInUp>
        </section>

        {/* FINAL CTA */}
        <section className="text-center pt-16 border-t border-border-subtle relative">
          <FadeInUp>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-ink mb-8">Let us build your deck.</h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-ink text-paper font-medium min-h-[52px] px-10 py-4 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-zinc-200 active:scale-[0.98]"
            >
              Start a Project
            </Link>
          </FadeInUp>
        </section>

      </div>
    </main>
  );
}

