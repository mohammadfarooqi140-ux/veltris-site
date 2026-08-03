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
            Straightforward systems for businesses
          </h1>
          
          <div className="text-lg text-zinc-400 max-w-2xl leading-relaxed space-y-6">
            <p>I am Mohammad. I run Veltris.</p>
            <p>We focus on two things that actually cost businesses money:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Missed calls, especially after hours or while the team is on jobs.</li>
              <li>Websites that look outdated or make it hard for customers to get in touch.</li>
            </ol>
            <p>The AI voice agents answer every call, take the details, and book the job where they can. The websites are built to look professional and convert visitors into enquiries.</p>
            <p>No fluff. Just systems that stop you losing work.</p>
          </div>
        </FadeInUp>

      </div>
    </main>
  );
}
