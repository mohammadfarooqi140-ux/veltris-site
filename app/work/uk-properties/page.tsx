"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronRight, PhoneCall, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function UKPropertiesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Layer 1 (0% to 30%) - Architect Blueprint
  const layer1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);
  const layer1Scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.3]);
  const layer1Y = useTransform(scrollYProgress, [0, 0.3], ["0%", "-10%"]);

  // Layer 2 (30% to 60%) - Kitchens
  const layer2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.6], [0, 1, 1, 0]);
  const layer2Y = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.6], ["10%", "0%", "0%", "-10%"]);

  // Layer 3 (60% to 100%) - Loft Conversions
  const layer3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.9, 1], [0, 1, 1, 1]);
  const layer3Y = useTransform(scrollYProgress, [0.55, 0.65], ["10%", "0%"]);

  return (
    <div className="bg-[#111111] text-[#f3f0ea] min-h-screen font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Minimal Logo */}
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white uppercase">UK Properties</span>
              <span className="text-[10px] tracking-widest text-[#d4af37] uppercase">Quality Construction</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link href="#about" className="hover:text-[#d4af37] transition-colors">About</Link>
            <Link href="#services" className="hover:text-[#d4af37] transition-colors">Services</Link>
            <Link href="#regions" className="hover:text-[#d4af37] transition-colors">Regions</Link>
            <button className="bg-[#d4af37] text-black px-5 py-2.5 hover:bg-white transition-colors uppercase text-xs font-bold tracking-wider">
              Get an Appointment
            </button>
          </div>

          <button 
            className="md:hidden text-white hover:text-[#d4af37] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#111111] pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            <Link onClick={() => setIsMobileMenuOpen(false)} href="#about" className="text-2xl font-light border-b border-white/10 pb-4">About</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="#services" className="text-2xl font-light border-b border-white/10 pb-4">Services</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="#regions" className="text-2xl font-light border-b border-white/10 pb-4">Regions</Link>
            <button className="bg-[#d4af37] text-black px-6 py-4 mt-4 uppercase text-sm font-bold tracking-wider">
              Get an Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll-Driven Hero */}
      <div ref={containerRef} className="relative h-[300vh] w-full bg-[#0a0a0a]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* Layer 1: Architect Silhouette / Blueprint */}
          <motion.div 
            style={{ opacity: layer1Opacity, scale: layer1Scale, y: layer1Y }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white z-10">
              PREMIUM EXTENSIONS <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3f0ea]">& RENOVATIONS</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[#a0a0a0] max-w-2xl font-light tracking-wide z-10 mx-auto">
              Architectural excellence across Birmingham, Solihull, Sutton Coldfield, and Coventry.
            </p>
            <div className="mt-12 flex gap-4 z-10 flex-col sm:flex-row mx-auto items-center">
              <button className="bg-white text-black px-8 py-4 flex items-center justify-center gap-2 hover:bg-[#d4af37] transition-all group font-medium text-sm tracking-widest uppercase">
                Free Initial Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
              <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
          </motion.div>

          {/* Layer 2: Luxury Kitchens */}
          <motion.div 
            style={{ opacity: layer2Opacity, y: layer2Y }}
            className="absolute inset-0 flex items-center justify-center px-6"
          >
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block border border-[#d4af37]/30 px-3 py-1 mb-6 text-[#d4af37] text-xs font-mono tracking-widest uppercase">
                  Service 01
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                  Luxury Bespoke <br/> Kitchens
                </h2>
                <p className="text-[#a0a0a0] text-lg font-light leading-relaxed mb-8 max-w-lg">
                  State-of-the-art culinary spaces engineered with absolute precision. We blend high-end appliances with flawless architectural cabinetry.
                </p>
                <ul className="space-y-4 mb-10 border-l border-white/10 pl-6">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <ChevronRight className="w-4 h-4 text-[#d4af37]" /> Custom Cabinetry & Stonework
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <ChevronRight className="w-4 h-4 text-[#d4af37]" /> Premium Appliance Integration
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <ChevronRight className="w-4 h-4 text-[#d4af37]" /> Open-Plan Structural Alterations
                  </li>
                </ul>
              </div>
              <div className="relative aspect-[4/3] bg-[#1a1a1a] overflow-hidden group">
                <div className="absolute inset-0 border border-white/10 z-10 pointer-events-none group-hover:border-[#d4af37]/50 transition-colors duration-700"></div>
                {/* Simulated Image Placeholder for Kitchen */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"></div>
              </div>
            </div>
          </motion.div>

          {/* Layer 3: Loft & Extensions */}
          <motion.div 
            style={{ opacity: layer3Opacity, y: layer3Y }}
            className="absolute inset-0 flex items-center justify-center px-6 bg-[#050505]"
          >
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[3/4] bg-[#1a1a1a] overflow-hidden group hidden lg:block order-last lg:order-first">
                <div className="absolute inset-0 border border-white/10 z-10 pointer-events-none group-hover:border-[#d4af37]/50 transition-colors duration-700"></div>
                {/* Simulated Image Placeholder for Extension */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center opacity-60 scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"></div>
              </div>
              <div>
                <div className="inline-block border border-[#d4af37]/30 px-3 py-1 mb-6 text-[#d4af37] text-xs font-mono tracking-widest uppercase">
                  Service 02
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                  Premium Loft & <br/> Home Extensions
                </h2>
                <p className="text-[#a0a0a0] text-lg font-light leading-relaxed mb-8 max-w-lg">
                  Expand your living footprint seamlessly. We execute structural glass extensions, master suite loft conversions, and wraparound spaces.
                </p>
                <div className="bg-[#111111] p-6 border border-white/5 mb-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-white mb-2">Ready to expand?</p>
                  <p className="text-gray-400 text-sm mb-6">Send us your architectural drawings for a rapid, accurate estimate.</p>
                  <button className="bg-[#d4af37] text-black px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors w-full sm:w-auto">
                    Upload Project Plans
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Target Regions Section */}
      <section className="py-24 bg-[#111111] border-t border-white/5" id="regions">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light tracking-wide text-white mb-12">Operating Exclusively In</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Birmingham", "Solihull", "Sutton Coldfield", "Coventry", "Leamington Spa", "Redditch"].map((region) => (
              <div key={region} className="px-6 py-3 border border-white/10 text-gray-300 hover:border-[#d4af37] hover:text-[#d4af37] transition-colors cursor-default text-sm tracking-wider uppercase">
                {region}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-6">UK Properties</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Leaders in quality construction, delivering uncompromising standards across the West Midlands for residential extensions and high-end renovations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all">
                <PhoneCall size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all">
                <Mail size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all">
                <MapPin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Home Extensions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">New Bathrooms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Credentials</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-mono">
              <li className="flex flex-col gap-1">
                <span className="text-gray-400">Company Reg</span>
                <span>10371254</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-gray-400">Property Redress Scheme</span>
                <span>PRS009021</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-gray-400">Data Protection</span>
                <span>ZA157317</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} UK Property Development Ltd. All rights reserved.</p>
          <p>Designed and optimized for structural elegance.</p>
        </div>
      </footer>
    </div>
  );
}
