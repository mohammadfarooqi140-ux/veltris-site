"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, PenTool, Rocket } from "lucide-react";
import Image from "next/image";
import { conceptProjects } from "@/lib/data/concepts";
import { FadeInUp } from "@/components/FadeInUp";

export default function Home() {
  return (
    <div className="font-sans selection:bg-zinc-200 selection:text-zinc-950 overflow-x-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center bg-zinc-950 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-4xl z-20 relative text-center mx-auto flex flex-col items-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] uppercase font-semibold text-zinc-400 mb-8 tracking-[0.2em]">
                Premium Websites & AI Automation
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Websites that convert.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 italic">Automations that scale.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Veltris builds high-converting websites and custom AI automation systems for local businesses—helping you look established, capture more enquiries, and run your daily operations without the manual busywork.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 w-full sm:w-auto">
                <Link href="/services" className="inline-flex items-center justify-center bg-white text-zinc-950 min-h-[56px] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98] w-full sm:w-auto">
                  View Our Services
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                <p>No pressure. No commitment. Built for your brand.</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/5">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 max-w-3xl mx-auto leading-snug">
            Growing your business shouldn&apos;t mean working longer hours
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">If you are losing leads to an outdated website or drowning in manual admin work, you are hitting an artificial ceiling.</p>
        </FadeInUp>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/40 rounded-3xl p-8 md:p-10 transition hover:bg-zinc-900/60 flex flex-col h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-zinc-500 text-[10px] font-mono">01</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Hard to find details</h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Burying your services, pricing, or location in an Instagram bio makes it harder for customers to make a quick decision.
            </p>
          </div>
          <div className="bg-zinc-900/40 rounded-3xl p-8 md:p-10 transition hover:bg-zinc-900/60 flex flex-col h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-zinc-500 text-[10px] font-mono">02</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Manual busywork</h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Typing up field notes, manually entering data, or chasing reports drains the energy you should be spending on growth.
            </p>
          </div>
          <div className="bg-zinc-900/40 rounded-3xl p-8 md:p-10 transition hover:bg-zinc-900/60 flex flex-col h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-zinc-500 text-[10px] font-mono">03</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Weak mobile experience</h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              If your current site is broken on mobile or slow to load, visitors will leave before they ever reach out.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Value Section */}
      <section className="py-20 md:py-32 px-6 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-16 text-center">
            Your business systems should do more than exist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-8 bg-zinc-900/30 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="w-14 h-14 bg-white/[0.03] rounded-full flex items-center justify-center mb-6">
                <div className="w-5 h-5 bg-zinc-400 rounded-full" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Look established</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                A premium, modern web design gives customers immediate confidence in your business before they even speak to you.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-zinc-900/30 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="w-14 h-14 bg-white/[0.03] rounded-full flex items-center justify-center mb-6">
                <div className="w-5 h-5 bg-zinc-400 rounded-sm" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Scale without busywork</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Custom AI automations turn your field voice notes into formatted PDFs instantly, cutting hours of daily admin tasks.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-zinc-900/30 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="w-14 h-14 bg-white/[0.03] rounded-full flex items-center justify-center mb-6">
                <div className="w-5 h-5 border-2 border-zinc-400 rotate-45" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Turn interest into action</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Strategic calls-to-action guide your visitors exactly where you want them: booking, calling, or buying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Free Concept Section (Bento Grid) */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
            See your homepage before you commit
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            I create a free homepage concept for selected local businesses so you can see how your brand could look online before paying for a full website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/30 rounded-3xl p-10 flex flex-col items-start relative overflow-hidden group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/5 rounded-full blur-2xl transition-colors duration-500" />
            <Search className="w-8 h-8 text-zinc-400 mb-6" />
            <h4 className="text-white font-bold text-xl mb-3">1. Discovery Review</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">We look at your Instagram, old site, or business goals to understand exactly what your brand needs to stand out.</p>
          </div>
          
          <div className="bg-zinc-900/30 rounded-3xl p-10 flex flex-col items-start relative overflow-hidden group md:mt-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/5 rounded-full blur-2xl transition-colors duration-500" />
            <PenTool className="w-8 h-8 text-zinc-400 mb-6" />
            <h4 className="text-white font-bold text-xl mb-3">2. Concept Design</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">You receive a custom, premium homepage direction designed specifically for you. No templates, tailored to your aesthetic.</p>
          </div>

          <div className="bg-zinc-900/30 rounded-3xl p-10 flex flex-col items-start relative overflow-hidden group md:mt-16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/5 rounded-full blur-2xl transition-colors duration-500" />
            <Rocket className="w-8 h-8 text-zinc-400 mb-6" />
            <h4 className="text-white font-bold text-xl mb-3">3. The Decision</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">If you love it, we can build out the rest of the site. If not, there is absolutely no pressure or cost to you.</p>
          </div>
        </div>
      </section>


      {/* 6. Final CTA Section */}
      <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />
        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 relative z-10">
          Ready to look established?
        </h2>
        <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-2xl mx-auto relative z-10">
          Send your Instagram or current website link and I will review whether a free homepage concept makes sense for your business.
        </p>
        <Link href="/contact" className="relative z-10 inline-flex items-center justify-center bg-white text-zinc-950 min-h-[56px] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98] w-full sm:w-auto">
          Request Free Homepage Concept
        </Link>
      </section>

    </div>
  );
}
