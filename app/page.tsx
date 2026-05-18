"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Globe, ShoppingBag, RefreshCw } from "lucide-react";
import InfiniteScroll from "@/components/InfiniteScroll";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-white mb-6" />,
      title: "Landing Pages",
      desc: "Fast, focused pages that convert visitors into customers.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-white mb-6" />,
      title: "E-Commerce Stores",
      desc: "Full online stores built to sell — beautifully.",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white mb-6" />,
      title: "Website Redesigns",
      desc: "Transform your outdated site into something you're proud of.",
    },
  ];

  return (
    <div className="bg-[#080808]">
      {/* Section 1 — Hero */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#080808]">

        {/* Scrolling cards background layer */}
        <div className="absolute inset-0 z-0 flex flex-col justify-center pointer-events-none select-none">
          <InfiniteScroll />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#080808]/90 via-[#080808]/50 to-[#080808] pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#555] mb-6">Web Design Studio</p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
            We Build Websites<br />That Work.
          </h1>
          <p className="text-base sm:text-xl text-[#888] mb-10 max-w-xl mx-auto">
            Premium web design for businesses ready to grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="/work"
              className="bg-white text-black px-8 py-4 font-semibold rounded-none hover:bg-[#e0e0e0] transition-colors duration-200">
              See Our Work
            </a>
            <a href="/contact"
              className="border border-[#333] text-white px-8 py-4 font-semibold rounded-none hover:border-[#666] transition-colors duration-200">
              Get a Free Quote
            </a>
          </div>

          <div className="flex flex-wrap gap-8 sm:gap-12 justify-center mt-14">
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-white">15+</p>
              <p className="text-xs uppercase tracking-widest text-[#555] mt-1">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-white">2 Weeks</p>
              <p className="text-xs uppercase tracking-widest text-[#555] mt-1">Avg Delivery Time</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-white">100%</p>
              <p className="text-xs uppercase tracking-widest text-[#555] mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>

      </section>

      {/* Section 2 — Services Strip */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1a1a1a]">
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-semibold text-[#555] tracking-widest uppercase mb-4 block">
            OUR CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We build everything. If it runs in a browser, we can build it.
          </h2>
          <p className="text-[#888] text-sm md:text-base leading-relaxed font-light">
            From simple high-performance marketing pages to robust SaaS applications and custom e-commerce engines, we deliver bespoke solutions tailored to all business models. Here are our core packages:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group border border-[#1a1a1a] bg-[#0d0d0d] p-6 sm:p-8 rounded-none transition-colors duration-200 hover:border-[#333] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  {service.icon}
                  <span className="text-xs text-[#333] font-mono">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed font-light">{service.desc}</p>
              </div>
              <div className="w-8 h-[1px] bg-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3 — Case Study Teaser */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-12 rounded-none">
          {/* Left Column */}
          <div className="flex flex-col items-start max-w-xl w-full">
            <span className="text-[10px] font-semibold text-[#555] tracking-widest uppercase mb-4">
              E-Commerce
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Aethalgard
            </h3>
            <p className="text-[#888] text-sm md:text-base leading-relaxed mb-8 font-light">
              A premium knife e-commerce store built for conversion. Dark aesthetic, fast load, mobile-first.
            </p>
            <Link
              href="/work"
              className="bg-white text-black font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-none hover:bg-neutral-200 transition-all duration-300"
            >
              View Case Study
            </Link>
          </div>

          {/* Right Column */}
          <div className="hidden sm:block w-full lg:max-w-md aspect-[16/10] border border-[#2a2a2a] rounded-none select-none overflow-hidden">
            <img
              src="/aethelgard-preview.png"
              alt="Aethelgard — Premium Knife E-Commerce Store"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Section 4 — Trust Bar */}
      <section className="py-16 text-center border-b border-[#1a1a1a]">
        <p className="text-[#555] text-xs md:text-sm tracking-widest uppercase">
          Fast delivery. Clean code. Real results.
        </p>
      </section>

      {/* Section 5 — CTA Section */}
      <section className="bg-[#0d0d0d] border-t border-[#1a1a1a] py-24 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to build something?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded-none hover:bg-neutral-200 transition-all duration-300 hover:scale-[1.02]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
