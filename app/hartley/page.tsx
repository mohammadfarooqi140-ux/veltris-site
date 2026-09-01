"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  HardHat,
  ShieldCheck,
  BadgeCheck,
  ClipboardList,
  UserCog,
  Shield,
  Clock,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HartleyConceptPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#111] font-sans selection:bg-[#c75b2a] selection:text-white pb-0">
      {/* 0. PERSISTENT CONCEPT BANNER */}
      <div className="bg-[#0f0f0f] text-white py-2.5 px-4 text-xs font-mono border-b border-white/10 flex flex-wrap items-center justify-between gap-2 z-50 relative">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c75b2a]" />
          <span className="text-gray-300">
            Veltris Independent Concept Study • Construction &amp; Fit-Out
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/work/hartley"
            className="text-gray-400 hover:text-white underline underline-offset-2 transition-colors"
          >
            Read Concept Breakdown
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-[#c75b2a] hover:text-[#e0713e] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Veltris
          </Link>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center bg-[#0f0f0f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gab-audiovisuel-hhXTjR9RrqY-unsplash.jpg"
            alt="Construction Site Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center mt-10">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Building What Matters. On Time. On Budget.
          </motion.h1>
          <motion.p
            className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            Renovation, commercial fit-out, and new build services for homeowners and businesses across the UK.
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#quote"
              className="bg-[#c75b2a] hover:bg-[#a64920] text-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-widest transition-colors shadow-lg"
            >
              Get a Price for Your Project
            </a>
            <p className="text-sm text-gray-400">Fixed-price quote scope within 24 hours</p>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-[#f8f9fa] border-b border-gray-200 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: <Calendar className="w-8 h-8 mx-auto mb-3 text-[#111]" />, text: "Fixed-Price Proposals" },
              { icon: <HardHat className="w-8 h-8 mx-auto mb-3 text-[#111]" />, text: "Dedicated Site Management" },
              { icon: <ShieldCheck className="w-8 h-8 mx-auto mb-3 text-[#111]" />, text: "CHAS Accredited" },
              { icon: <BadgeCheck className="w-8 h-8 mx-auto mb-3 text-[#111]" />, text: "SafeContractor Approved" },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex flex-col items-center">
                {stat.icon}
                <span className="font-semibold text-sm md:text-base text-[#111]">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              What We Do
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Card 1 */}
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group">
              <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden">
                <Image
                  src="/images/olek-buzunov-hnwkK0lQwBw-unsplash (1).jpg"
                  alt="Renovation & Refurbishment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#111] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Renovation &amp; Refurbishment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transforming existing spaces with full structural updates, modern finishes, and careful attention to building regulations.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group">
              <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden">
                <Image
                  src="/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg"
                  alt="Commercial Fit-Out"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#111] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Commercial Fit-Out
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Office, retail, and warehouse interiors built to specification, from shell to fully operational workspace.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group">
              <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden">
                <Image
                  src="/images/pexels-tkirkgoz-37733178 (1).jpg"
                  alt="New Build Residential"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#111] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  New Build Residential
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete residential construction from groundworks to handover, including extensions and bespoke builds.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY HARTLEY SECTION */}
      <section className="bg-[#f8f9fa] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Operational Standard
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: <ClipboardList className="w-10 h-10 text-[#c75b2a] mb-4" />, text: "Fixed-price quotes with transparent itemisation" },
              { icon: <UserCog className="w-10 h-10 text-[#c75b2a] mb-4" />, text: "Dedicated project manager on every site" },
              { icon: <Shield className="w-10 h-10 text-[#c75b2a] mb-4" />, text: "Comprehensive insurance and warranty coverage" },
              { icon: <Clock className="w-10 h-10 text-[#c75b2a] mb-4" />, text: "Clear milestone scheduling and timeline reporting" },
            ].map((point, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                {point.icon}
                <h3 className="text-lg font-bold text-[#111]">{point.text}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="bg-white py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Project Capabilities
            </h2>
            <p className="text-gray-500 max-w-2xl">Representative build profiles illustrating commercial fit-out and residential structures</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Project 1 */}
            <motion.div variants={fadeIn} className="group">
              <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden mb-6 rounded-xl">
                <Image
                  src="/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg"
                  alt="Commercial Fit-Out"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#c75b2a] mb-2">Commercial Fit-Out Scope</p>
              <p className="text-[#111] font-medium leading-relaxed">
                Full interior build, M&amp;E coordination, acoustic partition walls, and high-traffic floor finishes.
              </p>
            </motion.div>
            {/* Project 2 */}
            <motion.div variants={fadeIn} className="group">
              <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden mb-6 rounded-xl">
                <Image
                  src="/images/pexels-tkirkgoz-37733178 (1).jpg"
                  alt="Residential New Build"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#c75b2a] mb-2">Residential New Build Scope</p>
              <p className="text-[#111] font-medium leading-relaxed">
                Groundworks to handover, structural steelwork, brick cladding, and energy-efficient building envelope.
              </p>
            </motion.div>
            {/* Project 3 */}
            <motion.div variants={fadeIn} className="group">
              <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden mb-6 rounded-xl">
                <Image
                  src="/images/pexels-kindelmedia-8488031.jpg"
                  alt="Office Renovation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#c75b2a] mb-2">Structural Refurbishment Scope</p>
              <p className="text-[#111] font-medium leading-relaxed">
                Full strip-out and structural reconfiguration, structural steel framing, and compliant egress pathways.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section id="quote" className="bg-[#0f0f0f] py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            Tell us what you need. We&apos;ll send a clear, fixed-price quote within 24 hours.
          </motion.p>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#quote"
              className="inline-block bg-[#c75b2a] hover:bg-[#a64920] text-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-widest transition-colors shadow-lg"
            >
              Get a Price for Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#0a0a0a] text-gray-400 py-16 border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Hartley &amp; Co. Builders
            </h3>
            <p className="text-[11px] tracking-widest uppercase">Building What Matters</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-[11px] font-semibold tracking-widest uppercase text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#quote" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Hartley &amp; Co. Builders</p>
          <p className="uppercase tracking-widest text-[#777]">Independent concept study created by Veltris</p>
        </div>
      </footer>

      {/* 8. TRANSPARENCY NOTICE */}
      <div className="bg-black py-4 px-6 text-center border-t border-white/5">
        <p className="text-[11px] text-zinc-500 font-mono tracking-wider">
          This is an independent concept study created by Veltris. It is not commissioned client work and does not represent an existing company.
        </p>
      </div>
    </main>
  );
}
