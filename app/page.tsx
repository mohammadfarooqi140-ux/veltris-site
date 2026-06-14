"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Globe, Layers, ArrowRight, LayoutTemplate, PenTool, Search } from "lucide-react";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-white mb-6" />,
      title: "Landing Pages & SEO Microsites",
      desc: "Fast, polished one-page sites for businesses that need a serious web presence quickly.",
    },
    {
      icon: <Layers className="w-8 h-8 text-white mb-6" />,
      title: "Multi-Page Business Websites",
      desc: "3–5 page websites for studios, salons, barbers, photographers, and service brands.",
    },
    {
      icon: <LayoutTemplate className="w-8 h-8 text-white mb-6" />,
      title: "Website Redesigns",
      desc: "Modern redesigns for outdated, slow, or weak websites that need a visual and functional upgrade.",
    },
    {
      icon: <Search className="w-8 h-8 text-white mb-6" />,
      title: "Simple E-Commerce & Advanced Builds",
      desc: "Custom functionality quoted by scope. Only offered where requirements and goals are crystal clear.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Quick discovery",
      desc: "We understand your business, goals, and current online presence."
    },
    {
      number: "02",
      title: "Free homepage concept",
      desc: "You see the visual direction before committing."
    },
    {
      number: "03",
      title: "Full build",
      desc: "We turn the approved direction into a responsive, polished website."
    },
    {
      number: "04",
      title: "Launch & support",
      desc: "We help prepare the site for launch, mobile, SEO basics, and future updates."
    }
  ];

  return (
    <div className="bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#F5F5F5] selection:text-[#050505]">
      {/* 1. Hero */}
      <section className="relative min-h-[90vh] w-full flex items-center bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-40">
          <div className="max-w-4xl z-20 relative">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.05]">
              Websites for local businesses that need more than Instagram.
            </h1>
            
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mb-12 leading-relaxed">
              Veltris builds premium-looking websites for tattoo studios, salons, barbers, photographers, cafes, and independent service brands — delivered fast, priced clearly, and built to make your business look established.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#F5F5F5] text-[#050505] px-8 py-4 font-semibold text-center hover:bg-[#E0E0E0] transition-colors uppercase text-sm tracking-widest">
                Request a Free Homepage Concept
              </Link>
              <Link href="#work" className="border border-white/20 text-white bg-transparent px-8 py-4 font-semibold text-center hover:bg-white/5 transition-colors uppercase text-sm tracking-widest">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Instagram shows your work.<br />A website builds trust.
            </h2>
          </div>
          <div>
            <p className="text-lg text-[#A0A0A0] leading-relaxed">
              Many local businesses rely only on Instagram, Fresha, or a booking link. That works until a serious customer wants clear information, artist profiles, prices, FAQs, proof, policies, or a professional first impression. A proper website makes the business easier to trust and easier to contact.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-24 md:py-32 px-6 bg-[#0A0A0A] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-semibold text-[#888] tracking-widest uppercase mb-4 block">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              What we build.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border border-white/10 bg-[#0F0F0F] p-8 md:p-10 rounded-none transition-colors duration-200 hover:border-white/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-[#A0A0A0] leading-relaxed font-light">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Veltris Section */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-semibold text-[#888] tracking-widest uppercase mb-4 block">
              The Veltris Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Human taste. AI speed. Client-ready execution.
            </h2>
            <ul className="space-y-6">
              {[
                "Premium visual direction that makes you look established.",
                "Fast AI-assisted development (we prompt, test, and clean up the code).",
                "Human design taste and strict quality control.",
                "Free homepage concept before any financial commitment."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-lg text-[#A0A0A0]">
                  <ArrowRight className="w-5 h-5 text-white shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-square bg-[#0A0A0A] border border-white/10 flex items-center justify-center p-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
             <div className="text-center relative z-10">
               <p className="font-cinzel text-3xl md:text-5xl text-white tracking-widest uppercase opacity-20">Veltris</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="py-24 md:py-32 px-6 bg-[#0A0A0A] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How it works.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-4xl font-bold text-white/10 mb-6 font-mono">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#A0A0A0] leading-relaxed text-sm">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent transform translate-x-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing Section */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Simple, clear pricing.</h2>
          <p className="text-lg text-[#A0A0A0]">No hidden fees. You know exactly what to expect.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border border-white/10 p-8 flex flex-col justify-between group hover:border-white/20 transition-colors">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Landing Page / Microsite</h3>
              <p className="text-sm text-[#A0A0A0] mb-8">Fast, polished one-page sites.</p>
            </div>
            <p className="text-2xl text-white font-light">from £600</p>
          </div>
          <div className="border border-white/10 p-8 flex flex-col justify-between group hover:border-white/20 transition-colors bg-[#0A0A0A]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">3–5 Page Business Website</h3>
              <p className="text-sm text-[#A0A0A0] mb-8">For studios, salons, barbers, and service brands.</p>
            </div>
            <p className="text-2xl text-white font-light">from £900</p>
          </div>
          <div className="border border-white/10 p-8 flex flex-col justify-between group hover:border-white/20 transition-colors bg-[#0A0A0A]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Website Redesign</h3>
              <p className="text-sm text-[#A0A0A0] mb-8">Modernize your outdated, slow website.</p>
            </div>
            <p className="text-2xl text-white font-light">from £900</p>
          </div>
          <div className="border border-white/10 p-8 flex flex-col justify-between group hover:border-white/20 transition-colors">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Simple E-Commerce / Advanced</h3>
              <p className="text-sm text-[#A0A0A0] mb-8">Custom functionality and multi-product stores.</p>
            </div>
            <p className="text-2xl text-white font-light">Quoted after scope</p>
          </div>
        </div>
        <div className="mt-8 p-6 bg-white/5 border border-white/10">
          <p className="text-sm text-[#A0A0A0]">
            <strong className="text-white">Note:</strong> Final pricing depends on pages, content, integrations, booking tools, e-commerce complexity, and revision scope.
          </p>
        </div>
      </section>

      {/* 7. Work / Portfolio Section */}
      <section id="work" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Work</h2>
          <p className="text-[#A0A0A0] mt-4">Concepts and client projects built to standard.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
               <img src="/aethelgard-preview.png" alt="Aethelgard Preview" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold text-white bg-white/10 px-2 py-1 tracking-widest uppercase">
                  Concept build / proof of work
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Aethalgard</h3>
              <p className="text-[#A0A0A0] text-sm mb-6">A premium knife e-commerce store built for conversion. Dark aesthetic, fast load, mobile-first.</p>
              <Link href="/work" className="inline-flex items-center gap-2 text-sm text-white font-semibold uppercase tracking-widest hover:text-[#A0A0A0] transition-colors">
                View Concept <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="bg-[#0A0A0A] border-t border-white/10 py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Want to see what your business could look like?
          </h2>
          <p className="text-lg text-[#A0A0A0] mb-12 leading-relaxed">
            Send your current website, Instagram, or booking link. We&apos;ll review it and, if there&apos;s a clear fit, create a free homepage concept before you commit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F5F5F5] text-[#050505] px-10 py-5 font-semibold uppercase tracking-widest text-sm hover:bg-[#E0E0E0] transition-transform hover:-translate-y-1"
          >
            Request a Free Homepage Concept
          </Link>
        </div>
      </section>
    </div>
  );
}
