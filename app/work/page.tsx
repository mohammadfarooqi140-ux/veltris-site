"use client";
import Link from "next/link";
import { conceptProjects } from "@/lib/data/concepts";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-hidden text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl leading-tight">
            Concepts built to show what your business could look like online
          </h1>
          <p className="text-[#888] text-base md:text-lg max-w-2xl leading-relaxed">
            These are concept projects created to show the kind of premium, mobile first online presence Veltris can build for local businesses. Concept work is labelled clearly.
          </p>
        </div>

        {/* 2x2 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {conceptProjects.map((project, idx) => {
            const isLink = !!project.link;
            
            return (
              <div key={idx} className="flex flex-col group">
                {/* Preview */}
                {isLink ? (
                  <Link href={project.link as string} className="block w-full aspect-[4/3] mb-5 overflow-hidden relative">
                    {project.preview}
                  </Link>
                ) : (
                  <div className="block w-full aspect-[4/3] mb-5 overflow-hidden relative border border-[#1a1a1a]">
                    {project.preview}
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <p className="text-xs uppercase tracking-widest text-[#A0A0A0] font-mono mb-2">{project.label}</p>
                  <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-5 flex-grow">{project.desc}</p>
                  {isLink ? (
                    <Link
                      href={project.link as string}
                      className="inline-block text-sm font-semibold uppercase tracking-widest text-white hover:text-[#A0A0A0] transition-colors border-b border-white/20 pb-1 self-start"
                    >
                      {project.cta}
                    </Link>
                  ) : (
                    <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#777] self-start">
                      {project.cta}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Trust Note */}
        <div className="mt-16 text-center border-t border-white/10 pt-16">
          <p className="text-xs text-[#555] max-w-xl mx-auto leading-relaxed mb-10">
            These concepts are used to demonstrate direction, quality, and structure before a full website build. Real client work will be added as Veltris grows.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Want to see a concept for your business?</h2>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#F5F5F5] text-[#050505] min-h-[48px] px-8 py-4 rounded-none text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition hover:bg-white active:scale-[0.98] w-full sm:w-auto"
          >
            Request Free Homepage Concept
          </Link>
        </div>

      </div>
    </main>
  );
}
