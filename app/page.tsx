"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#F5F5F5] selection:text-[#050505]">

      {/* 1. Hero */}
      <section className="relative min-h-[80vh] w-full flex items-center bg-[#050505] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-4xl z-20 relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.05]">
              Make your business look established online
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mb-10 leading-relaxed">
              Veltris helps local businesses create a sharper online presence through premium websites, clear information, and fast, polished digital experiences built to earn trust before a customer ever contacts you.
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

      {/* 2. Value Section */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-b border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10">
          Your online presence should do more than exist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-white/10 bg-[#0A0A0A] p-6">
            <h3 className="text-base font-bold text-white mb-3">Look established</h3>
            <p className="text-sm text-[#888] leading-relaxed">
              A polished website gives customers a clearer first impression before they contact you.
            </p>
          </div>
          <div className="border border-white/10 bg-[#0A0A0A] p-6">
            <h3 className="text-base font-bold text-white mb-3">Make information easy to find</h3>
            <p className="text-sm text-[#888] leading-relaxed">
              Show services, menus, opening hours, locations, FAQs, prices, and contact details in one place.
            </p>
          </div>
          <div className="border border-white/10 bg-[#0A0A0A] p-6">
            <h3 className="text-base font-bold text-white mb-3">Turn interest into action</h3>
            <p className="text-sm text-[#888] leading-relaxed">
              Guide visitors toward booking, calling, visiting, enquiring, or buying.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-16 md:py-20 px-6 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              What we build
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Landing Pages", desc: "Fast, polished one-page sites for ad campaigns and product launches.", price: "From £600" },
              { title: "Business Websites", desc: "Professional multi-page presences establishing credibility and trust.", price: "From £900" },
              { title: "Redesigns", desc: "Modern redesigns for outdated websites that need a functional upgrade.", price: "From £900" },
              { title: "E-Commerce & Advanced", desc: "Custom functionality and stores quoted strictly by scope.", price: "Quoted after scope" },
            ].map((service, index) => (
              <div key={index} className="border border-white/10 bg-[#0F0F0F] p-6 flex flex-col justify-between hover:border-white/20 transition-colors duration-200">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{service.desc}</p>
                </div>
                <p className="text-sm font-semibold text-white mt-4 pt-4 border-t border-white/10">{service.price}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-white font-semibold uppercase tracking-widest hover:text-[#A0A0A0] transition-colors">
            View Services &amp; Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. Work Teaser */}
      <section className="py-16 md:py-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Concepts built to show what&apos;s possible</h2>
            <p className="text-[#888] leading-relaxed max-w-xl">
              See proof-of-work concepts for food shops, tattoo studios, e-commerce brands, and local service businesses.
            </p>
          </div>
          <Link href="/work" className="shrink-0 inline-flex items-center gap-2 bg-[#F5F5F5] text-[#050505] font-semibold uppercase tracking-widest text-sm hover:bg-[#E0E0E0] transition-colors px-8 py-4">
            View Work
          </Link>
        </div>
      </section>

    </div>
  );
}
