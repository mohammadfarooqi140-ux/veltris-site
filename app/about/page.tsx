import Link from "next/link";
import { FadeInUp } from "@/components/FadeInUp";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-zinc-950 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-24">
        
        <FadeInUp className="mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] uppercase font-semibold text-zinc-400 mb-8 tracking-[0.2em]">
            About Veltris
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-white mb-8 tracking-tight leading-[1.08]">
            Straightforward systems for local businesses.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            I'm Mohammad, and I run Veltris. We focus on two things: deploying AI voice agents that stop you losing jobs to missed calls, and building high-converting websites that make you look like the established professional you are.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <FadeInUp delay={0.1} className="bg-zinc-900/40 rounded-3xl p-8 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <h2 className="text-xl font-bold text-white mb-4">The Missed Call Penalty</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              When a local customer calls for a quote or a job and you don't answer, they immediately call your competitor. Our AI Voice Agents answer every call instantly, booking jobs and taking messages while your team stays focused on the work at hand.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-zinc-400" /> No more lost leads
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-zinc-400" /> 24/7 professional answering
              </li>
            </ul>
          </FadeInUp>

          <FadeInUp delay={0.2} className="bg-zinc-900/40 rounded-3xl p-8 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <h2 className="text-xl font-bold text-white mb-4">The Website Penalty</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              If your current site is broken on mobile, slow, or just looks outdated, customers will leave before they ever reach out. We build premium, custom websites that instantly build trust and guide visitors toward booking your services.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-zinc-400" /> Premium, custom design
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-zinc-400" /> Optimized for conversion
              </li>
            </ul>
          </FadeInUp>
        </div>

        <FadeInUp delay={0.3} className="text-center p-12 bg-zinc-900/30 rounded-3xl border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-4 relative z-10">Stop losing jobs.</h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8 relative z-10">Let's talk about how we can implement an AI voice agent or build a new website for your business.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-zinc-950 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98] relative z-10">
            Get in touch
          </Link>
        </FadeInUp>

      </div>
    </main>
  );
}
