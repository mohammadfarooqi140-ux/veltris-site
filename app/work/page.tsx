"use client";
import Link from "next/link";
import Image from "next/image";

export default function WorkPage() {
  const projects = [
    {
      title: "Ancoats Lunchbox",
      label: "Local cafe concept / proof of work",
      desc: "A personalised concept for a long-running Manchester cafe, focused on breakfast, matchday visitors, menu clarity, opening hours, reviews, and call-ahead convenience.",
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
      label: "Sandwich shop concept / proof of work",
      desc: "A modern sandwich shop concept built around menu discovery, opening hours, location, reviews, and a stronger customer experience than Instagram-only.",
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
      label: "Tattoo studio concept / proof of work",
      desc: "A fictional London tattoo studio concept built around artist profiles, booking clarity, FAQs, and a premium first impression.",
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
    },
    {
      title: "Aethalgard",
      label: "E-commerce concept / proof of work",
      desc: "A dark luxury e-commerce concept showing premium product presentation and high-end brand atmosphere.",
      link: "/aethalgard",
      cta: "View Concept",
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
      title: "Noir Atelier",
      label: "Fashion concept / proof of work",
      desc: "A premium fashion concept focused on editorial visuals, brand atmosphere, and polished product presentation.",
      link: "/noir-atelier",
      cta: "Coming Soon",
      preview: (
        <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden flex items-end justify-start border border-[#1a1a1a]">
          <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5" />
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <div className="border border-white/10 px-6 py-3">
              <p className="text-white text-sm tracking-[0.3em] uppercase">Noir</p>
            </div>
            <p className="text-[#444] text-[10px] uppercase tracking-widest">Coming soon</p>
          </div>
          <div className="relative z-10 p-6">
            <p className="text-xs text-white/40 uppercase tracking-widest">Fashion</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] overflow-hidden text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="mb-12 md:mb-14">
          <p className="text-xs uppercase tracking-widest text-[#555] font-mono mb-3">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Concepts &amp; Builds</h1>
          <p className="text-[#888] text-base max-w-2xl leading-relaxed">
            Proof-of-work concepts designed to show local businesses how a proper website looks, feels, and converts. We build these to set the standard before writing a single line of code for a client.
          </p>
        </div>

        {/* 2x2 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col group">
              {/* Preview */}
              <Link href={project.link} className="block w-full aspect-[4/3] mb-5 overflow-hidden relative">
                {project.preview}
              </Link>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <p className="text-xs uppercase tracking-widest text-[#555] font-mono mb-2">{project.label}</p>
                <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
                <p className="text-[#888] text-sm leading-relaxed mb-5 flex-grow">{project.desc}</p>
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

        {/* CTA */}
        <div className="mt-16 border border-white/10 bg-[#0A0A0A] p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want a concept built for your business?</h2>
          <p className="text-[#888] mb-6 leading-relaxed max-w-lg mx-auto text-sm">
            We build free homepage concepts where there is a clear fit. Tell us about your business and we will show you what&apos;s possible.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#e0e0e0] transition-colors"
          >
            Request Free Concept
          </Link>
        </div>

      </div>
    </main>
  );
}
