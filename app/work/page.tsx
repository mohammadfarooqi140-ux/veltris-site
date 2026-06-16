"use client";
import Link from "next/link";
import Image from "next/image";

export default function WorkPage() {
  const projects = [
    {
      title: "Aethalgard",
      label: "Luxury ecommerce • Concept project",
      desc: "A premium ecommerce interface concept built to show polished product presentation, dark visual direction, and a high trust shopping experience.",
      link: null,
      cta: "Concept preview",
      preview: (
        <div className="w-full h-full bg-[#050505] relative overflow-hidden flex items-end justify-start border border-[#1a1a1a]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#020202]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <p className="text-white text-lg tracking-[0.4em] uppercase font-light">Aethalgard</p>
            <div className="w-12 h-[1px] bg-white/20" />
            <p className="text-[#555] text-[10px] uppercase tracking-[0.3em]">Dark luxury e-commerce</p>
          </div>
          <div className="relative z-10 p-6">
            <p className="text-xs text-white/40 uppercase tracking-widest">E-commerce</p>
          </div>
        </div>
      )
    },
    {
      title: "Ancoats Lunchbox",
      label: "Local cafe or lunch spot • Concept project",
      desc: "A mobile first homepage concept for a local food business that needs to show menu highlights, location, opening times, and enquiry options clearly.",
      link: "/ancoats-lunchbox",
      cta: "View Concept",
      preview: (
        <div className="w-full h-full bg-[#faf8f5] relative overflow-hidden flex items-end justify-start border border-[#e8e4db]">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 w-full px-6 text-center">
            <p className="font-sans text-2xl text-[#1a1a1a] font-bold">Ancoats Lunchbox</p>
            <div className="w-8 h-[2px] bg-[#8b1c1c]" />
            <p className="text-[#666] text-[10px] uppercase tracking-widest">Proper Manchester Breakfasts</p>
          </div>
          <div className="relative z-10 p-6">
            <p className="text-xs text-[#8b1c1c] uppercase tracking-widest font-bold">Cafe Concept</p>
          </div>
        </div>
      )
    },
    {
      title: "Marlow Deli",
      label: "Deli or cafe • Concept project",
      desc: "A clean local business concept focused on making the brand feel established, trustworthy, and easy to visit or contact.",
      link: "/marlow-deli",
      cta: "View Concept",
      preview: (
        <div className="w-full h-full relative overflow-hidden flex items-end justify-start border border-[#1a1a1a] bg-[#1a1a1a]">
          <Image
            src="/marlow/hero.png"
            alt="Marlow Deli Concept"
            fill
            className="object-cover opacity-70 hover:opacity-90 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="relative z-10 p-6">
            <p className="font-serif text-2xl text-white font-bold drop-shadow-md">Marlow Deli</p>
            <p className="text-xs text-white/60 uppercase tracking-widest mt-1">Sandwich shop</p>
          </div>
        </div>
      )
    },
    {
      title: "Blackline Atelier",
      label: "Tattoo studio • Concept project",
      desc: "A dark premium tattoo studio concept built around artist credibility, work previews, booking clarity, and a stronger first impression.",
      link: "/blackline-atelier",
      cta: "View Concept",
      preview: (
        <div className="w-full h-full bg-[#080808] relative overflow-hidden flex items-end justify-start border border-[#1a1a1a]">
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#080808] to-[#080808]" />
          <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
            <div className="w-8 h-8 border border-[#600000]/60 rotate-45" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <div className="w-14 h-14 border border-[#600000]/50 rounded-full flex items-center justify-center">
              <div className="w-7 h-7 border border-[#400000] rotate-45" />
            </div>
            <p className="font-serif text-lg text-white tracking-[0.25em] uppercase">Blackline</p>
            <p className="text-[#600000] text-[10px] uppercase tracking-[0.4em]">London</p>
          </div>
          <div className="relative z-10 p-6">
            <p className="text-xs text-white/40 uppercase tracking-widest">Tattoo studio</p>
          </div>
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#600000]/40" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#600000]/40" />
        </div>
      )
    }
  ];

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
          {projects.map((project, idx) => {
            const isLink = !!project.link;
            
            return (
              <div key={idx} className="flex flex-col group">
                {/* Preview */}
                {isLink ? (
                  <Link href={project.link as string} className="block w-full aspect-[4/3] mb-5 overflow-hidden relative">
                    {project.preview}
                  </Link>
                ) : (
                  <div className="block w-full aspect-[4/3] mb-5 overflow-hidden relative">
                    {project.preview}
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <p className="text-xs uppercase tracking-widest text-[#555] font-mono mb-2">{project.label}</p>
                  <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
                  <p className="text-[#888] text-sm leading-relaxed mb-5 flex-grow">{project.desc}</p>
                  {isLink ? (
                    <Link
                      href={project.link as string}
                      className="inline-block text-sm font-semibold uppercase tracking-widest text-white hover:text-[#888] transition-colors border-b border-white/20 pb-1 self-start"
                    >
                      {project.cta}
                    </Link>
                  ) : (
                    <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#555] self-start">
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
