import Image from "next/image";
import React from "react";

export const conceptProjects = [
  {
    title: "Aethalgard",
    businessType: "Luxury ecommerce",
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
    businessType: "Local cafe or lunch spot",
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
    businessType: "Deli or cafe",
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
    title: "Hartley & Co. Builders",
    businessType: "Construction company",
    label: "Construction company • Concept project",
    desc: "A robust, professional single-page concept for a UK construction firm. Dark hero, clear services, and high trust signals.",
    link: "/hartley",
    cta: "View Concept",
    preview: (
      <div className="w-full h-full bg-[#0f0f0f] relative overflow-hidden flex items-end justify-start border border-[#1a1a1a]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 w-full px-4 text-center">
          <p className="font-serif text-2xl text-white font-bold tracking-wide">Hartley & Co.</p>
          <div className="w-10 h-[2px] bg-[#c75b2a]" />
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">Building What Matters</p>
        </div>
        <div className="relative z-20 p-6 w-full flex justify-between items-end">
          <p className="text-[10px] text-[#c75b2a] font-bold uppercase tracking-widest">Construction</p>
        </div>
      </div>
    )
  },
  {
    title: "Sterling Industrial Flooring",
    businessType: "Industrial Flooring",
    label: "Industrial Flooring • Concept project",
    desc: "Concept homepage for a UK industrial flooring contractor specialising in epoxy, resin, and polished concrete systems.",
    link: "/sterling",
    cta: "View Concept",
    preview: (
      <div className="w-full h-full bg-[#1a1a1a] relative overflow-hidden flex items-end justify-start border border-[#333]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
            alt="Sterling Concept"
            fill
            className="object-cover opacity-50 hover:opacity-70 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 w-full px-4 text-center">
          <p className="font-serif text-2xl text-white font-bold tracking-wide">STERLING.</p>
          <div className="w-10 h-[2px] bg-[#c75b2a]" />
          <p className="text-gray-300 text-[10px] uppercase tracking-[0.2em]">Industrial Flooring</p>
        </div>
        <div className="relative z-20 p-6 w-full flex justify-between items-end">
          <p className="text-[10px] text-[#c75b2a] font-bold uppercase tracking-widest">Concept</p>
        </div>
      </div>
    )
  },
  {
    title: "UK Properties",
    businessType: "Construction & Renovation",
    label: "Construction & Renovation • Redesign",
    desc: "A premium local architectural aesthetic for high-end home extensions and bespoke kitchens, featuring dynamic scroll-driven interfaces.",
    link: "/work/uk-properties",
    cta: "View Redesign",
    preview: (
      <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden flex items-end justify-start border border-[#1a1a1a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 w-full px-4 text-center z-10">
          <p className="font-sans text-xl text-white font-bold tracking-tight uppercase">UK Properties</p>
          <div className="w-8 h-[1px] bg-[#d4af37]" />
          <p className="text-gray-400 text-[8px] uppercase tracking-[0.3em]">Quality Construction</p>
        </div>
        <div className="relative z-20 p-4 w-full flex justify-between items-end">
          <p className="text-[10px] text-[#d4af37] font-bold uppercase tracking-widest">Case Study</p>
        </div>
      </div>
    )
  }
];
