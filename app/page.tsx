"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, Variants, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Globe, ShoppingBag, RefreshCw } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Non-linear scroll progress mapping for the line to pause at each monument
  const lineScaleX = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.4, 0.5, 0.65, 0.75, 0.9],
    [0, 0.55, 0.55, 0.75, 0.75, 0.9, 0.9, 1]
  );

  // Label scroll transforms (fade in and translate up as scroll reaches it)
  const label1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.18, 0.35], [0, 0, 1, 1]);
  const label1Y = useTransform(scrollYProgress, [0, 0.12, 0.18, 0.35], [15, 15, 0, 0]);

  const label2Opacity = useTransform(scrollYProgress, [0, 0.37, 0.43, 0.6], [0, 0, 1, 1]);
  const label2Y = useTransform(scrollYProgress, [0, 0.37, 0.43, 0.6], [15, 15, 0, 0]);

  const label3Opacity = useTransform(scrollYProgress, [0, 0.62, 0.68, 0.85], [0, 0, 1, 1]);
  const label3Y = useTransform(scrollYProgress, [0, 0.62, 0.68, 0.85], [15, 15, 0, 0]);

  // Load animations
  const line1 = "We Build Websites".split(" ");
  const line2 = "That Work.".split(" ");

  const headlineContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: shouldReduceMotion ? 0 : 30,
      opacity: 0,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const subheadlineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.4,
        duration: shouldReduceMotion ? 0 : 0.6,
      },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.6,
        duration: shouldReduceMotion ? 0 : 0.4,
      },
    },
  };

  const monumentContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.8,
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const monumentVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
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
    <div className="bg-[#050505]">
      {/* Section 1 — Hero */}
      <section ref={containerRef} className="relative min-h-[100vh] w-full flex items-center justify-center bg-[#050505] overflow-hidden">
        {/* Scroll Line (Desktop only, scroll controlled) */}
        {!shouldReduceMotion && (
          <motion.div
            style={{ scaleX: lineScaleX, transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[60vh] h-[1px] bg-white/20 z-10 hidden md:block"
          />
        )}
        
        <div className="w-full max-w-7xl mx-auto px-6 pt-24 md:pt-0 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Column - 55% */}
          <div className="w-full md:w-[55%] flex flex-col z-20">
            <motion.h1 
              variants={headlineContainerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.05]"
            >
              <span className="block">
                {line1.map((word, i) => (
                  <span key={i} className="inline-block mr-[0.2em] whitespace-nowrap">
                    <motion.span variants={wordVariants} className="inline-block">
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
              <span className="block">
                {line2.map((word, i) => (
                  <span key={i} className="inline-block mr-[0.2em] whitespace-nowrap">
                    <motion.span variants={wordVariants} className="inline-block">
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            </motion.h1>
            
            <motion.p 
              variants={subheadlineVariants}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-gray-400 max-w-[500px] mb-10"
            >
              Cinematic websites built with AI speed and human taste. No templates. No fluff.
            </motion.p>
            
            <motion.div 
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="bg-white text-black px-8 py-4 font-semibold text-center hover:bg-neutral-200 transition-colors">
                Book a Free Call
              </Link>
              <Link href="/work" className="border border-white/20 text-white bg-transparent px-8 py-4 font-semibold text-center hover:bg-white/5 transition-colors">
                See Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right Column - 45% */}
          <div className="w-full md:w-[45%] mt-12 md:mt-0 z-20">
            <motion.div 
              variants={monumentContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-row overflow-x-auto snap-x snap-mandatory md:overflow-visible items-end gap-6 pb-8 md:pb-0 w-[100vw] -ml-6 px-6 md:w-auto md:ml-0 md:px-0 scrollbar-hide"
            >
              {/* Monument 1 */}
              <div className="relative group">
                {!shouldReduceMotion && (
                  <motion.div
                    style={{ opacity: label1Opacity, y: label1Y }}
                    className="absolute -top-12 left-0 w-full text-center text-xs font-mono text-white/60 tracking-wider hidden md:block"
                  >
                    Aethalgard — E-Commerce
                  </motion.div>
                )}
                <motion.div variants={monumentVariants} className="snap-center shrink-0 w-[180px] h-[280px] rounded-md border border-white/10 bg-[#0a0a0a] shadow-2xl flex flex-col overflow-hidden relative">
                  {/* Browser Chrome */}
                  <div className="h-8 border-b border-white/10 flex items-center px-3 gap-1.5 shrink-0 bg-[#0f0f0f]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    <div className="mx-auto text-[8px] text-gray-500 truncate px-2">aethalgard.com</div>
                  </div>
                  <div className="flex-1 overflow-hidden relative">
                    <img src="/aethelgard-preview.png" alt="Aethalgard" className="w-full h-full object-cover object-top" />
                  </div>
                </motion.div>
              </div>

              {/* Monument 2 */}
              <div className="relative group md:-translate-y-8">
                {!shouldReduceMotion && (
                  <motion.div
                    style={{ opacity: label2Opacity, y: label2Y }}
                    className="absolute -top-12 left-0 w-full text-center text-xs font-mono text-white/60 tracking-wider hidden md:block"
                  >
                    Noir Atelier — Fashion
                  </motion.div>
                )}
                <motion.div variants={monumentVariants} className="snap-center shrink-0 w-[180px] h-[320px] rounded-md border border-white/10 bg-[#f5f5f0] shadow-2xl flex flex-col overflow-hidden relative">
                  {/* Browser Chrome */}
                  <div className="h-8 border-b border-black/10 flex items-center px-3 gap-1.5 shrink-0 bg-[#ebebeb]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    <div className="mx-auto text-[8px] text-gray-500 truncate px-2">noiratelier.com</div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <span className="font-playfair text-[#111] text-sm tracking-widest font-serif">NOIR ATELIER</span>
                  </div>
                </motion.div>
              </div>

              {/* Monument 3 */}
              <div className="relative group">
                {!shouldReduceMotion && (
                  <motion.div
                    style={{ opacity: label3Opacity, y: label3Y }}
                    className="absolute -top-12 left-0 w-full text-center text-xs font-mono text-white/60 tracking-wider hidden md:block"
                  >
                    Coming Soon
                  </motion.div>
                )}
                <motion.div variants={monumentVariants} className="snap-center shrink-0 w-[180px] h-[280px] rounded-md border border-white/10 shadow-2xl flex flex-col overflow-hidden relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
                  {/* Browser Chrome */}
                  <div className="h-8 border-b border-white/10 flex items-center px-3 gap-1.5 shrink-0 bg-[#0f0f0f]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    <div className="mx-auto text-[8px] text-gray-500 truncate px-2">stealth.app</div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <span className="text-xs text-white/40 tracking-widest">COMING SOON</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
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

      {/* Section - Why Veltris? */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1a1a1a]">
        <div className="bg-[#0d0d0d] border border-white/15 shadow-[inset_0_0_30px_rgba(255,255,255,0.03)] p-8 md:p-12 rounded-none max-w-4xl mx-auto">
          <span className="text-[10px] font-semibold text-[#555] tracking-widest uppercase mb-4 block">
            Why Veltris?
          </span>
          <p className="text-[#888] text-base md:text-xl leading-relaxed font-light mb-6">
            Most agency sites look the same because they are the same — recycled templates, filler copy, no soul.
            <span className="text-white font-bold text-lg md:text-2xl block mt-4">Veltris is different.</span>
          </p>
          <p className="text-[#888] text-base md:text-xl leading-relaxed font-light">
            One operator with obsessive taste, using the best AI tools to build faster without sacrificing craft. If you want a site that actually feels like your brand, not a SaaS clone, we should talk.
          </p>
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
