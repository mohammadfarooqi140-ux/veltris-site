"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, Variants, useReducedMotion } from "framer-motion";
import HeroLine from "@/components/HeroLine";
import SkeletonImage from "@/components/SkeletonImage";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };
  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0, filter: "blur(12px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const monumentVariants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.8 + i * 0.2, duration: 0.7 },
    }),
  };

  return (
    <div className="bg-[#050505]">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden" id="hero">
        <div className="w-full max-w-7xl mx-auto px-6 pt-24 md:pt-0 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col z-20"
            variants={containerVariants}
            initial="hidden"
            animate={shouldReduceMotion ? "visible" : "visible"}
          >
            {/* Headline – 4 lines, gold period */}
            <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white mb-6" variants={itemVariants}>
              We
              <br />
              Build Websites
              <br />
              That
              <br />
              <span className="text-[#c9a96e]">Work.</span>
            </motion.h1>
            {/* Subheadline */}
            <motion.p className="text-lg md:text-xl text-gray-400 max-w-[500px] mb-10" variants={itemVariants}>
              Cinematic websites built with AI speed and human taste. No templates. No fluff.
            </motion.p>
            {/* CTAs – sharp corners */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Link href="/contact" className="bg-white text-black px-8 py-4 font-semibold transition-colors hover:bg-neutral-200">
                Book a Free Call
              </Link>
              <Link href="/work" className="border border-white/20 text-white bg-transparent px-8 py-4 font-semibold transition-colors hover:bg-white/5">
                See Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column – Monuments */}
          <motion.div
            className="w-full md:w-1/2 relative flex items-end justify-center mt-12 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate={shouldReduceMotion ? "visible" : "visible"}
          >
            {/* Monument 1 */}
            <motion.div
              className="absolute right-[-5%] top-[10%] w-[30%] h-[60%] shadow-2xl"
              custom={0}
              variants={monumentVariants}
              style={{ transform: "scale(0.9) rotate(-2deg)" }}
            >
              <SkeletonImage
                src="/monuments/aethalgard.png"
                alt="Aethalgard"
                className="w-full h-full object-cover"
                bgColor="#0a0a0a"
              />
            </motion.div>
            {/* Monument 2 */}
            <motion.div
              className="absolute right-[15%] top-[5%] w-[32%] h-[65%] shadow-2xl"
              custom={1}
              variants={monumentVariants}
              style={{ transform: "scale(1.0) rotate(0deg)" }}
            >
              <SkeletonImage
                src="/monuments/noir-atelier.png"
                alt="Noir Atelier"
                className="w-full h-full object-cover"
                bgColor="#0a0a0a"
              />
            </motion.div>
            {/* Monument 3 */}
            <motion.div
              className="absolute right-[35%] top-[15%] w-[30%] h-[60%] shadow-2xl"
              custom={2}
              variants={monumentVariants}
              style={{ transform: "scale(1.05) rotate(2deg)" }}
            >
              <SkeletonImage
                src="/monuments/coming-soon.png"
                alt="Coming Soon"
                className="w-full h-full object-cover"
                bgColor="#0a0a0a"
              />
            </motion.div>
            {/* Scroll line – desktop only */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
              <HeroLine />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Strip – unchanged */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1a1a1a]">
        {/* ... existing services content unchanged ... */}
      </section>

      {/* Why Veltris Section – new layout */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text side */}
          <div className="md:w-3/5 text-left space-y-6">
            <span className="text-[10px] font-semibold text-[#555] tracking-widest uppercase">Why Veltris?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Veltris is different.</h2>
            <p className="text-[#888] text-2xl md:text-3xl leading-relaxed">
              Most agency sites look the same because they are the same — recycled templates, filler copy, no soul.
            </p>
          </div>
          {/* Image side – placeholder with skeleton */}
          <div className="md:w-2/5 mt-8 md:mt-0 flex justify-center">
            <SkeletonImage
              src="/placeholder/why-veltris.png"
              alt="Why Veltris placeholder"
              className="w-full max-w-md h-auto object-cover"
              bgColor="#0a0a0a"
            />
          </div>
        </div>
      </section>

      {/* Remaining sections unchanged (Case Study, Trust Bar, CTA, etc.) */}
      {/* ... keep the rest of the file as is ... */}
    </div>
  );
}
