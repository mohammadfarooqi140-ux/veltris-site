"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, PenTool, Rocket, Phone, MessageSquare, Calendar } from "lucide-react";
import Image from "next/image";
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
                AI Voice Agents & Premium Websites
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Never miss <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 italic">another job call.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                AI voice agents that answer your phone 24/7, take the details, and book the job so your team can stay on site without losing work. Built for cleaning companies, facilities teams, roofers and trades that lose jobs every time the phone goes unanswered.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 w-full sm:w-auto">
                <Link href="/contact" className="inline-flex items-center justify-center bg-white text-zinc-950 min-h-[56px] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98] w-full sm:w-auto">
                  See a live AI call demo
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center bg-white/[0.03] border border-white/10 text-white hover:bg-white/10 min-h-[56px] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition active:scale-[0.98] w-full sm:w-auto">
                  Request free homepage concept
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                <p>Designed for businesses that hate missing work because the team is already on site.</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 2. AI Voice Agents Section */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/5">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 max-w-3xl mx-auto leading-snug">
            Your phones answered properly, 24/7
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Missed calls cost real jobs. When a customer rings while you are on site or after hours, they usually just call the next company. These AI agents pick up every time, sound natural, and actually do the work.</p>
        </FadeInUp>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/40 rounded-3xl p-8 md:p-10 transition hover:bg-zinc-900/60 flex flex-col h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-zinc-400"><Phone size={20} /></div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Answers every call</h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Works with your existing number. Evenings, weekends, or while the team is already out, it picks up straight away.
            </p>
          </div>
          <div className="bg-zinc-900/40 rounded-3xl p-8 md:p-10 transition hover:bg-zinc-900/60 flex flex-col h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-zinc-400"><Calendar size={20} /></div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Books jobs and takes proper messages</h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              It does not just say leave a message. It asks the right questions, books the job where possible, or takes a clear detailed message.
            </p>
          </div>
          <div className="bg-zinc-900/40 rounded-3xl p-8 md:p-10 transition hover:bg-zinc-900/60 flex flex-col h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-zinc-400"><MessageSquare size={20} /></div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Sends you the info instantly</h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              As soon as the call ends you get a full summary by email, SMS or WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/5">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 max-w-3xl mx-auto leading-snug">
            Growing your business shouldn&apos;t mean dropping the ball
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">If you are losing leads to missed calls, an outdated website, or drowning in manual admin, you are hitting an artificial ceiling.</p>
        </FadeInUp>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/40 rounded-3xl p-8 md:p-10 transition hover:bg-zinc-900/60 flex flex-col h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-zinc-500 text-[10px] font-mono">01</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">The missed call penalty</h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              When a customer calls for an emergency fix or a quote and it goes to voicemail, they immediately call your competitor. 
            </p>
          </div>
          <div className="bg-zinc-900/40 rounded-3xl p-8 md:p-10 transition hover:bg-zinc-900/60 flex flex-col h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-zinc-500 text-[10px] font-mono">02</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Hard to find details</h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Burying your services, pricing, or location on a confusing website or Instagram bio makes it harder for customers to choose you.
            </p>
          </div>
          <div className="bg-zinc-900/40 rounded-3xl p-8 md:p-10 transition hover:bg-zinc-900/60 flex flex-col h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-zinc-500 text-[10px] font-mono">03</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Weak mobile experience</h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              If your current site is broken on mobile or slow to load, visitors will leave before they even attempt to call.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Value Section */}
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
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Scale without busywork</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                AI agents and custom automations cut out hours of daily admin tasks, taking calls and notes so you don&apos;t have to.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-zinc-900/30 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="w-14 h-14 bg-white/[0.03] rounded-full flex items-center justify-center mb-6">
                <div className="w-5 h-5 border-2 border-zinc-400 rotate-45" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Turn interest into action</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Strategic websites and intelligent phone agents guide your visitors exactly where you want them: booking, calling, or buying.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-zinc-900/30 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="w-14 h-14 bg-white/[0.03] rounded-full flex items-center justify-center mb-6">
                <div className="w-5 h-5 bg-zinc-400 rounded-sm" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Look established</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                A premium, modern web design gives customers immediate confidence in your business before they even interact with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Free Concept Section (Bento Grid) - Repositioned */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
            Need a digital refresh? See it before you commit
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Alongside AI, I create a free homepage concept for selected businesses so you can see how your brand could look online before paying for a full website.
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
          Stop losing jobs to missed calls.
        </h2>
        <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-2xl mx-auto relative z-10">
          Contact me to schedule a live demo of our AI voice agents tailored for your business, or request a free homepage design concept.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-zinc-950 min-h-[56px] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98] w-full sm:w-auto">
            Get an AI Voice Demo
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white/[0.03] border border-white/10 text-white hover:bg-white/10 min-h-[56px] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition active:scale-[0.98] w-full sm:w-auto">
            Request Homepage Concept
          </Link>
        </div>
      </section>

    </div>
  );
}
