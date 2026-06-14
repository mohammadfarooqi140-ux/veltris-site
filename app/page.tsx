"use client";

import Link from "next/link";
import { Globe, Layers, LayoutTemplate, Search, ArrowRight } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-white mb-6" />,
      title: "Landing Pages",
      desc: "Fast, polished one-page sites for ad campaigns and product launches.",
    },
    {
      icon: <Layers className="w-8 h-8 text-white mb-6" />,
      title: "Business Websites",
      desc: "Professional multi-page presences establishing credibility and trust.",
    },
    {
      icon: <LayoutTemplate className="w-8 h-8 text-white mb-6" />,
      title: "Redesigns",
      desc: "Modern redesigns for outdated websites that need a functional upgrade.",
    },
    {
      icon: <Search className="w-8 h-8 text-white mb-6" />,
      title: "Simple E-Commerce & Advanced",
      desc: "Custom functionality and stores quoted strictly by scope.",
    },
  ];

  return (
    <div className="bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#F5F5F5] selection:text-[#050505]">
      {/* 1. Hero */}
      <section className="relative min-h-[85vh] w-full flex items-center bg-[#050505] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-40">
          <div className="max-w-4xl z-20 relative">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.05]">
              Websites for businesses that need more than Instagram.
            </h1>
            
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mb-12 leading-relaxed">
              Veltris builds premium-looking websites for tattoo studios, salons, barbers, photographers, cafes, and independent service brands — delivered fast, priced clearly, and built to make your business look established.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#F5F5F5] text-[#050505] px-8 py-4 font-semibold text-center hover:bg-[#E0E0E0] transition-colors uppercase text-sm tracking-widest">
                Request Free Concept
              </Link>
              <Link href="/work" className="border border-white/20 text-white bg-transparent px-8 py-4 font-semibold text-center hover:bg-white/5 transition-colors uppercase text-sm tracking-widest">
                See Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Instagram shows your work.<br />A website builds trust.
          </h2>
          <p className="text-lg text-[#A0A0A0] leading-relaxed">
            Many local businesses rely only on social media or a booking link. That works until a serious customer wants clear information, pricing, FAQs, and a professional first impression. A proper website makes your business easier to trust.
          </p>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-24 px-6 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              What we build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border border-white/10 bg-[#0F0F0F] p-8 rounded-none transition-colors duration-200 hover:border-white/20 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed font-light">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center sm:text-left">
             <Link href="/services" className="inline-flex items-center gap-2 text-sm text-white font-semibold uppercase tracking-widest hover:text-[#A0A0A0] transition-colors">
                View Services <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* 4. Work Preview */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Work</h2>
          <p className="text-[#A0A0A0] mt-4">Concepts and client projects built to standard.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Blackline Atelier Concept */}
          <div className="group">
            <div className="aspect-[16/10] bg-[#0A0A0A] border border-white/10 overflow-hidden mb-6 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
                <h3 className="font-playfair text-4xl text-white tracking-wider">BLACKLINE</h3>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold text-white bg-white/10 px-2 py-1 tracking-widest uppercase">
                  Tattoo studio concept / proof of work
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Blackline Atelier</h3>
              <p className="text-[#A0A0A0] text-sm mb-6">A premium, dark, modern tattoo studio website concept designed to build trust and streamline bookings.</p>
              <Link href="/blackline-atelier" className="inline-flex items-center gap-2 text-sm text-white font-semibold uppercase tracking-widest hover:text-[#A0A0A0] transition-colors">
                View Concept <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Aethalgard */}
          <div className="group">
            <div className="aspect-[16/10] bg-[#0A0A0A] border border-white/10 overflow-hidden mb-6 relative">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/aethelgard-preview.png" alt="Aethelgard Preview" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold text-white bg-white/10 px-2 py-1 tracking-widest uppercase">
                  E-commerce concept / proof of work
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Aethalgard</h3>
              <p className="text-[#A0A0A0] text-sm mb-6">A premium knife e-commerce store built for conversion. Dark aesthetic, fast load, mobile-first.</p>
              <Link href="https://athelgard.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white font-semibold uppercase tracking-widest hover:text-[#A0A0A0] transition-colors">
                View Concept <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center sm:text-left">
           <Link href="/work" className="inline-flex items-center gap-2 text-sm text-white font-semibold uppercase tracking-widest hover:text-[#A0A0A0] transition-colors">
              View All Work <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
      </section>

      {/* 5. Pricing Teaser */}
      <section className="py-16 px-6 bg-[#0A0A0A] border-b border-white/10 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <p className="text-xl text-white font-medium">
            Websites start from £600. Full pricing is available on the Services page.
          </p>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-white font-semibold uppercase tracking-widest hover:text-[#A0A0A0] transition-colors border border-white/20 px-6 py-3 hover:bg-white/5">
            View Services &amp; Pricing
          </Link>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10">
            Want to see what your business could look like?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#F5F5F5] text-[#050505] px-10 py-5 font-semibold uppercase tracking-widest text-sm hover:bg-[#E0E0E0] transition-transform hover:-translate-y-1"
          >
            Request Free Concept
          </Link>
        </div>
      </section>
    </div>
  );
}
