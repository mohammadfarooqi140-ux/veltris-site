"use client";
import Link from "next/link";
import Image from "next/image";

export default function WorkPage() {
  const projects = [
    {
      title: "Blackline Atelier",
      label: "Tattoo studio concept / proof of work",
      desc: "A fictional London tattoo studio concept built around artist profiles, booking clarity, FAQs, and a premium first impression.",
      link: "/blackline-atelier",
      cta: "View Concept",
      preview: (
        <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center border border-[#1a1a1a]">
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <div className="relative z-10 flex flex-col items-center gap-6">
             <div className="w-16 h-16 border border-[#500000] rounded-full flex items-center justify-center bg-[#111]">
               <div className="w-8 h-8 border border-[#300000] rotate-45" />
             </div>
             <div className="text-center">
               <p className="font-serif text-2xl text-white tracking-widest uppercase">Blackline</p>
               <p className="text-[#500000] text-xs uppercase tracking-[0.3em] mt-2">London</p>
             </div>
          </div>

          {/* Accent corners */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#500000]/50" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#500000]/50" />
        </div>
      )
    },
    {
      title: "Marlow Deli",
      label: "Sandwich shop concept / proof of work",
      desc: "A modern sandwich shop concept built around menu discovery, opening hours, location, reviews, and a stronger customer experience than Instagram-only.",
      link: "/marlow-deli",
      cta: "View Concept",
      preview: (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center border border-[#1a1a1a] bg-[#1a1a1a]">
          <Image 
            src="/marlow/hero.png" 
            alt="Marlow Deli Concept" 
            fill 
            className="object-cover opacity-60 mix-blend-overlay grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="relative z-10 text-center mt-auto pb-12 w-full">
             <p className="font-serif text-3xl text-white font-bold drop-shadow-md">Marlow Deli</p>
          </div>
        </div>
      )
    },
    {
      title: "Aethalgard",
      label: "E-commerce concept / proof of work",
      desc: "A dark luxury e-commerce concept showing premium product presentation and high-end brand atmosphere.",
      link: "/aethalgard",
      cta: "View Concept",
      preview: (
        <div className="w-full h-full bg-[#050505] relative overflow-hidden flex items-center justify-center border border-[#1a1a1a]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#020202]" />
          <div className="relative z-10 flex flex-col items-center">
             <p className="text-white text-xl tracking-[0.4em] uppercase font-light">Aethalgard</p>
             <div className="w-12 h-[1px] bg-white/30 mt-6" />
          </div>
        </div>
      )
    },
    {
      title: "Noir Atelier",
      label: "Fashion concept / proof of work",
      desc: "A premium fashion concept focused on editorial visuals, brand atmosphere, and polished product presentation.",
      link: "/noir-atelier",
      cta: "Coming Soon",
      preview: (
        <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center border border-[#1a1a1a]">
           <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5" />
           <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5" />
           <div className="relative z-10 bg-[#0a0a0a] p-4 border border-white/10">
             <p className="text-white text-sm tracking-widest uppercase">Noir</p>
           </div>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] overflow-hidden text-white pt-24 pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Concepts & Builds</h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl leading-relaxed">
            Proof-of-work concepts designed to show local businesses how a proper website looks, feels, and converts. We build these to set the standard before writing a single line of code for a client.
          </p>
        </div>

        {/* 2x2 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col group">
              {/* Image / Preview Container (Equal aspect ratio) */}
              <Link href={project.link} className="block w-full aspect-[4/3] mb-8 overflow-hidden relative">
                {project.preview}
              </Link>
              
              {/* Content */}
              <div className="flex flex-col flex-grow">
                <p className="text-xs uppercase tracking-widest text-[#555] font-mono mb-3">{project.label}</p>
                <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
                <p className="text-[#888] leading-relaxed mb-8 flex-grow">{project.desc}</p>
                <Link 
                  href={project.link}
                  className="inline-block text-sm font-semibold uppercase tracking-widest hover:text-[#555] transition-colors border-b border-white/20 pb-1 self-start"
                >
                  {project.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
