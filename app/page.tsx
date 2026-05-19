"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { Globe, ShoppingBag, RefreshCw } from "lucide-react";
import InfiniteScroll from "@/components/InfiniteScroll";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

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
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden bg-[#080808]">

        {/* Scrolling cards background layer */}
        <div className="absolute inset-0 z-0 flex flex-col justify-center opacity-12 sm:opacity-15 md:opacity-32 pointer-events-none select-none transition-opacity duration-700">
          <InfiniteScroll />
        </div>

        {/* Soft blur overlay to soften background collage contrast */}
        <div className="absolute inset-0 z-[5] backdrop-blur-[0.8px] pointer-events-none" />

        {/* Deep, multi-layered dark cinematic gradient mask overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#080808]/92 via-[#080808]/45 to-[#080808]/95 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_30%,#080808_95%)] opacity-65 pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#555] mb-6 font-mono">Web Design Studio</p>
          <h1 className="text-3xl sm:text-5xl md:text-[clamp(44px,5.5vw,84px)] font-bold text-white mb-6 leading-[1.08] tracking-tight flex flex-col items-center">
            <span className="relative block overflow-hidden pt-2 pb-0.5 -mt-2 w-full text-center">
              <motion.span
                className="block"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Digital Flagships
              </motion.span>
            </span>
            <span className="relative block overflow-hidden pt-2 pb-0.5 -mt-2 w-full text-center">
              <motion.span
                className="block"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
              >
                Built Without
              </motion.span>
            </span>
            <span className="relative block overflow-hidden pt-2 pb-0.5 -mt-2 w-full text-center">
              <motion.span
                className="block"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
              >
                Compromise.
              </motion.span>
            </span>
          </h1>
          <motion.p 
            className="text-sm sm:text-base text-[#888] mb-8 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.46 }}
          >
            Premium web design for businesses ready to grow.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.58 }}
          >
            <a href="/work"
              className="bg-white text-black px-8 py-3.5 font-semibold rounded-none hover:bg-[#e0e0e0] transition-colors duration-200 w-full sm:w-auto text-center text-xs sm:text-sm tracking-wider uppercase font-mono">
              See Our Work
            </a>
            <a href="/contact"
              className="border border-[#333] text-white px-8 py-3.5 font-semibold rounded-none hover:border-[#666] hover:bg-white/5 transition-all duration-200 w-full sm:w-auto text-center text-xs sm:text-sm tracking-wider uppercase font-mono">
              Get a Free Quote
            </a>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-8 sm:gap-16 justify-center mt-20 md:mt-24 pb-8"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">15+</p>
              <p className="text-[10px] uppercase tracking-widest text-[#555] mt-1.5">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">2 Weeks</p>
              <p className="text-[10px] uppercase tracking-widest text-[#555] mt-1.5">Avg Delivery Time</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-[#555] mt-1.5">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Section 2 — Services Strip */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1a1a1a]">
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
              className="group border border-[#1a1a1a] bg-[#0d0d0d] p-6 md:p-8 rounded-none transition-colors duration-200 hover:border-[#333] flex flex-col justify-between"
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
      <section className="py-10 md:py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-12 rounded-none">
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
          <div className="hidden sm:block w-full lg:max-w-md aspect-[16/10] relative border border-[#2a2a2a] rounded-none select-none overflow-hidden">
            <Image
              src="/aethelgard-preview.png"
              alt="Aethelgard — Premium Knife E-Commerce Store"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-top"
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
      <section className="bg-[#0d0d0d] border-t border-[#1a1a1a] py-16 md:py-24 text-center px-6">
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
