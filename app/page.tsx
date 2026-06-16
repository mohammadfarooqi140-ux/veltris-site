"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { conceptProjects } from "@/lib/data/concepts";

export default function Home() {
  return (
    <div className="bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#F5F5F5] selection:text-[#050505]">

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center bg-[#050505] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-4xl z-20 relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.05]">
              Turn online visitors into real enquiries
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mb-10 leading-relaxed">
              Veltris builds clean, mobile first websites for local businesses relying on Instagram, broken links, or outdated sites, helping them look credible, show their services clearly, and make it easier for customers to enquire or book.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#F5F5F5] text-[#050505] min-h-[48px] px-8 py-4 rounded-none text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition hover:bg-white active:scale-[0.98] w-full sm:w-auto">
                Request Free Homepage Concept
              </Link>
              <Link href="/work" className="inline-flex items-center justify-center border border-white/20 text-white min-h-[48px] px-8 py-4 rounded-none text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition hover:border-white/50 hover:bg-white/5 active:scale-[0.98] w-full sm:w-auto">
                View Example Work
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#888]">
              <CheckCircle2 className="w-4 h-4 text-white/40" />
              <p>No pressure. No commitment. See the concept before deciding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto border-b border-white/10">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 max-w-3xl leading-snug">
          If your business only has Instagram, a broken link, or an outdated website, customers may hesitate before contacting you.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-white/10 bg-[#0A0A0A] p-8 md:p-10">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Customers cannot find key information</h3>
            <p className="text-sm md:text-base text-[#888] leading-relaxed">
              Burying your services, pricing, or location in an Instagram bio makes it harder for customers to make a quick decision.
            </p>
          </div>
          <div className="border border-white/10 bg-[#0A0A0A] p-8 md:p-10">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Instagram does not build enough trust alone</h3>
            <p className="text-sm md:text-base text-[#888] leading-relaxed">
              A social media profile shows what you do, but a professional website shows that you are an established, serious business.
            </p>
          </div>
          <div className="border border-white/10 bg-[#0A0A0A] p-8 md:p-10">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">A weak mobile experience feels less established</h3>
            <p className="text-sm md:text-base text-[#888] leading-relaxed">
              If your current site is broken on mobile or slow to load, visitors will leave before they ever reach out.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Value Section */}
      <section className="py-20 md:py-28 px-6 bg-[#080808] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 text-center">
            Your online presence should do more than exist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-white/40 rounded-full" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Look established</h3>
              <p className="text-[#888] leading-relaxed text-sm md:text-base">
                A premium, modern design gives customers immediate confidence in your business before they even speak to you.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-white/40 rounded-sm" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Make information easy to find</h3>
              <p className="text-[#888] leading-relaxed text-sm md:text-base">
                Clear menus, logical structure, and upfront details mean customers aren&apos;t left guessing about your services.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <div className="w-4 h-4 border-2 border-white/40 rotate-45" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Turn interest into action</h3>
              <p className="text-[#888] leading-relaxed text-sm md:text-base">
                Strategic calls-to-action guide your visitors exactly where you want them: booking, calling, or buying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Free Concept Section */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              See your homepage before you commit
            </h2>
            <p className="text-lg text-[#A0A0A0] leading-relaxed mb-10">
              I create a free homepage concept for selected local businesses so you can see how your brand could look online before paying for a full website.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="text-[#555] font-mono font-bold mt-1">01</div>
                <div>
                  <h4 className="text-white font-bold mb-2">I review your current online presence</h4>
                  <p className="text-sm text-[#888]">We look at your Instagram, old site, or business goals to understand what you need.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#555] font-mono font-bold mt-1">02</div>
                <div>
                  <h4 className="text-white font-bold mb-2">I design a homepage concept around your business</h4>
                  <p className="text-sm text-[#888]">You receive a custom, premium homepage direction designed specifically for you.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#555] font-mono font-bold mt-1">03</div>
                <div>
                  <h4 className="text-white font-bold mb-2">You decide if you want the full website built</h4>
                  <p className="text-sm text-[#888]">If you love it, we can build out the rest. If not, there is absolutely no pressure or cost.</p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="inline-flex items-center justify-center bg-[#F5F5F5] text-[#050505] min-h-[48px] px-8 py-4 rounded-none text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition hover:bg-white active:scale-[0.98] w-full sm:w-auto">
              Request Free Homepage Concept
            </Link>
          </div>
          <div className="hidden lg:block border border-white/10 bg-[#0A0A0A] aspect-[4/5] relative">
             <div className="absolute inset-0 flex items-center justify-center text-white/10 font-mono text-sm tracking-widest uppercase rotate-90 whitespace-nowrap">
               Concept Preview Interface
             </div>
          </div>
        </div>
      </section>

      {/* 5. Work and Concepts Section */}
      <section className="py-20 md:py-28 px-6 bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
              Concepts built to show what your business could look like online
            </h2>
            <p className="text-[#888] max-w-2xl leading-relaxed text-sm md:text-base">
              These are concept projects created to show the kind of premium, mobile first online presence Veltris can build for local businesses. Concept work is labelled clearly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {conceptProjects.map((project, idx) => {
              const isLink = !!project.link;
              return (
                <div key={idx} className="group flex flex-col">
                  {isLink ? (
                    <Link href={project.link as string} className="block w-full aspect-[4/3] mb-6 overflow-hidden relative">
                      {project.preview}
                    </Link>
                  ) : (
                    <div className="w-full aspect-[4/3] mb-6 overflow-hidden relative border border-[#1a1a1a]">
                      {project.preview}
                    </div>
                  )}
                  <p className="text-[10px] uppercase tracking-widest text-[#A0A0A0] font-mono mb-2">{project.label}</p>
                  <h3 className="text-xl font-bold text-white mb-4 flex-grow">{project.title}</h3>
                  {isLink ? (
                    <Link href={project.link as string} className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-white hover:text-[#A0A0A0] transition-colors border-b border-white/20 pb-1 self-start">
                      {project.cta} <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-[#777] self-start">
                      {project.cta}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="border-t border-white/10 pt-10 text-center">
            <p className="text-xs text-[#555] max-w-xl mx-auto leading-relaxed mb-8">
              These concepts are used to demonstrate direction, quality, and structure before a full website build. Real client work will be added as Veltris grows.
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Want to see a concept for your business?</h3>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#F5F5F5] text-[#050505] min-h-[48px] px-8 py-4 rounded-none text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition hover:bg-white active:scale-[0.98] w-full sm:w-auto">
              Request Free Homepage Concept
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Veltris Section */}
      <section className="py-20 md:py-28 px-6 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Built specifically for local businesses</h2>
              <p className="text-[#888] leading-relaxed mb-8 text-sm md:text-base">
                You don&apos;t need a massive corporate site, but you do need to look better than the competition. Veltris focuses on exactly what brings enquiries through the door.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-10">
              <div>
                <h4 className="text-white font-bold mb-2">Mobile first design</h4>
                <p className="text-sm text-[#888]">Most of your traffic comes from phones. The site is optimized for scrolling, tapping, and booking.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Clear CTA paths</h4>
                <p className="text-sm text-[#888]">Buttons and links are placed where they matter, guiding visitors directly to contact you.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Fast modern build</h4>
                <p className="text-sm text-[#888]">No clunky templates. Clean code means your site loads instantly and feels premium.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Premium visual style</h4>
                <p className="text-sm text-[#888]">A dark, structured, and polished look that sets your brand apart from local competitors.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Simple process</h4>
                <p className="text-sm text-[#888]">You run a business. We handle the design, structure, and launch without confusing jargon.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Built for local</h4>
                <p className="text-sm text-[#888]">Designed specifically to solve the problems of cafes, studios, salons, and local services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Want to see what your business could look like online?
        </h2>
        <p className="text-lg text-[#888] leading-relaxed mb-10 max-w-2xl mx-auto">
          Send your Instagram or current website link and I will review whether a free homepage concept makes sense for your business.
        </p>
        <Link href="/contact" className="inline-flex items-center justify-center bg-[#F5F5F5] text-[#050505] min-h-[48px] px-8 py-4 rounded-none text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition hover:bg-white active:scale-[0.98] w-full sm:w-auto">
          Request Free Homepage Concept
        </Link>
      </section>

    </div>
  );
}
