"use client";
import Link from "next/link";
import { conceptProjects } from "@/lib/data/concepts";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-zinc-950 overflow-hidden text-white pt-32 pb-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] uppercase font-semibold text-zinc-400 mb-6 tracking-[0.2em]">
            Selected concept work — real client case studies coming soon
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold tracking-tight mb-6 max-w-3xl leading-tight text-white">
            Proof of concept.
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
            These are concept projects created to show the kind of premium, mobile-first online presence Veltris can build for local businesses. Concept work is labelled clearly.
          </p>
        </div>

        {/* 2x2 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {conceptProjects.map((project, idx) => {
            const isLink = !!project.link;
            
            return (
              <div key={idx} className="flex flex-col group bg-zinc-900/30 rounded-3xl p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] perspective-[1000px]">
                {/* Preview */}
                <div className="relative transform-gpu transition-all duration-700 ease-out group-hover:rotate-x-[2deg] group-hover:-rotate-y-[2deg] group-hover:scale-[1.02]">
                {isLink ? (
                  <Link href={project.link as string} className="block w-full aspect-[4/3] mb-5 overflow-hidden rounded-2xl relative">
                    {project.preview}
                  </Link>
                ) : (
                  <div className="block w-full aspect-[4/3] mb-5 overflow-hidden rounded-2xl relative bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    {project.preview}
                  </div>
                )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow px-2 pb-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-3">{project.label}</p>
                  <h2 className="text-2xl font-playfair font-bold text-white mb-3">{project.title}</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-grow">{project.desc}</p>
                  {isLink ? (
                    <Link
                      href={project.link as string}
                      className="inline-block text-sm font-semibold uppercase tracking-widest text-white hover:text-zinc-400 transition-colors pb-1 self-start"
                    >
                      {project.cta}
                    </Link>
                  ) : (
                    <span className="inline-block text-sm font-semibold uppercase tracking-widest text-zinc-600 self-start">
                      {project.cta}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Trust Note */}
        <div className="mt-20 text-center border-t border-white/5 pt-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <p className="text-xs text-zinc-500 max-w-xl mx-auto leading-relaxed mb-10">
            These concepts are used to demonstrate direction, quality, and structure before a full website build. Real client work will be added as Veltris grows.
          </p>
          
          <h2 className="text-2xl md:text-4xl font-playfair font-bold text-white mb-8">Ready to upgrade your business?</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-zinc-950 min-h-[56px] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98] w-full sm:w-auto"
            >
              Get an AI Voice Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-zinc-900 border border-white/10 text-white min-h-[56px] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition hover:bg-zinc-800 active:scale-[0.98] w-full sm:w-auto"
            >
              Request Free Homepage Concept
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
