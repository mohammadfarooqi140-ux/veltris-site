"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Calendar,
  HardHat,
  Clock,
  Shield,
  ClipboardList,
  UserCog,
  ChevronRight,
  Menu,
  X,
  ArrowLeft
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SterlingFlooringPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] font-sans selection:bg-[#c75b2a] selection:text-white" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      {/* 0. PERSISTENT CONCEPT BANNER */}
      <div className="bg-[#0f0f0f] text-white py-2.5 px-4 text-xs font-mono border-b border-white/10 flex flex-wrap items-center justify-between gap-2 z-50 relative">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c75b2a]" />
          <span className="text-gray-300">
            Veltris Independent Concept Study • Industrial Trade
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/work/sterling"
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

      {/* NAVIGATION */}
      <nav className="sticky top-0 w-full z-40 bg-[#1a1a1a] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#hero" className="font-serif text-xl sm:text-2xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                STERLING.
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">Systems</a>
              <a href="#capabilities" className="text-sm text-gray-300 hover:text-white transition-colors">Capabilities</a>
              <a href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors">Applications</a>
              <a href="#contact" className="bg-[#c75b2a] hover:bg-[#b04f24] text-white px-5 py-2.5 rounded-sm text-sm font-medium transition-all">
                Book Site Survey
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-white/10">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#services" className="block px-3 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>Systems</a>
              <a href="#capabilities" className="block px-3 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>Capabilities</a>
              <a href="#projects" className="block px-3 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>Applications</a>
              <div className="pt-4 pb-2 px-3">
                <a href="#contact" className="block w-full text-center bg-[#c75b2a] text-white px-5 py-3 rounded-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Book Site Survey
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-16 pb-28 md:pt-28 md:pb-40 flex items-center min-h-[85vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Warehouse interior with polished concrete floor"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/95 via-[#0f0f0f]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#c75b2a] font-semibold block mb-4">
              High-Specification Industrial Flooring
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Industrial Flooring Built to Last
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
              Commercial epoxy, polyurethane resin, and polished concrete for warehouses, manufacturing plants, and logistics facilities across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href="#contact" className="bg-[#c75b2a] hover:bg-[#b04f24] text-white px-8 py-4 rounded-sm text-base font-medium transition-all flex items-center group">
                Get a Free Site Survey
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-xs text-gray-400 font-mono">
                Technical assessment &amp; substrate testing within 48 hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
            {[
              { icon: ShieldCheck, text: "CHAS Accredited Contractor" },
              { icon: BadgeCheck, text: "SafeContractor Approved" },
              { icon: Calendar, text: "Weekend Fast-Cure Scheduling" },
              { icon: HardHat, text: "BS 8204-6 Compliance" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
                }}
                className={`flex flex-col items-center text-center px-4 ${i === 0 || i === 2 ? 'border-none md:border-solid' : 'border-none'}`}
              >
                <stat.icon className="w-8 h-8 text-[#c75b2a] mb-3" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-gray-900">{stat.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 md:py-32 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Industrial Flooring Solutions
            </h2>
            <div className="w-20 h-1 bg-[#c75b2a] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Epoxy Flooring Systems",
                desc: "Seamless, chemical-resistant high-build epoxy coatings engineered for warehouses, distribution hubs, and automotive workshops.",
                img: "/images/epoxy-worker.jpg",
                spec: "High Chemical & Impact Resistance"
              },
              {
                title: "Polyurethane Resin Systems",
                desc: "Heavy-duty thermal shock resistant polyurethane screeds for food production, chemical processing, and wet processing environments.",
                img: "/images/warehouse.jpg",
                spec: "Operating Range -40°C to +120°C"
              },
              {
                title: "Diamond-Polished Concrete",
                desc: "Industrial mechanical grinding and liquid hardener sealing for durable, dust-proof logistics and commercial retail floors.",
                img: "/images/concrete.jpg",
                spec: "Low Lifecycle Maintenance"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }
                }}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#c75b2a] block mb-2 font-semibold">
                      {service.spec}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-0">
                  <a href="#contact" className="text-xs font-semibold uppercase tracking-wider text-[#c75b2a] flex items-center hover:underline">
                    Request Specification Sheet <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section id="capabilities" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Engineered Around Operational Continuity
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed font-light">
                Facility shutdowns directly impact output. Sterling specifies rapid-cure resin chemistries and phased project scheduling to execute high-specification installations with minimal disruption to logistics and production cycles.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Clock, title: "Rapid Turnaround", text: "Fast-cure methyl methacrylate (MMA) and polyaspartic systems ready for foot traffic within hours." },
                  { icon: Shield, title: "Safety & Slip Resistance", text: "Custom aggregate profiles tailored to meet specific HSE Pendulum Test Value (PTV) wet slip ratings." },
                  { icon: ClipboardList, title: "Substrate Moisture Testing", text: "Comprehensive on-site relative humidity (RH) testing and damp-proof membrane (DPM) application." },
                  { icon: UserCog, title: "Phased Execution", text: "Zone-by-zone installation allowing continuous facility operations throughout the installation window." }
                ].map((point, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#f8f9fa] flex items-center justify-center border border-gray-100">
                      <point.icon className="w-5 h-5 text-[#c75b2a]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">{point.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed mt-1">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[540px] w-full rounded-2xl overflow-hidden border border-gray-200"
            >
              <Image
                src="/images/hero.jpg"
                alt="Sterling industrial installation"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#1a1a1a]/95 backdrop-blur-md p-6 rounded-xl border border-white/10 text-white">
                <p className="text-xs font-mono uppercase tracking-widest text-[#c75b2a] mb-1 font-semibold">Technical Standard</p>
                <p className="text-sm font-light text-gray-200">
                  Substrate preparation via captive shot-blasting and diamond planetary grinding to guarantee mechanical keying.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS SECTION */}
      <section id="projects" className="py-20 md:py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Facility Applications
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light">
              System specifications matched to distinct mechanical loads, chemical exposures, and thermal cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "High-Bay Logistics & Distribution",
                desc: "High-abrasion resistance, aisle line-marking, and joint sealant treatments designed for continuous heavy forklift traffic.",
                img: "/images/hero.jpg"
              },
              {
                title: "Food & Pharmaceutical Processing",
                desc: "Hygienic polyurethane screeds with integral perimeter coving, hot-water washdown resistance, and antimicrobial properties.",
                img: "/images/warehouse.jpg"
              },
              {
                title: "Commercial Showrooms & Retail Hubs",
                desc: "Diamond-polished architectural concrete combining high aesthetic lustre with durable, low-maintenance surface resilience.",
                img: "/images/concrete.jpg"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }
                }}
                className="bg-black/40 border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS SECTION */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
              Compliance &amp; Accreditation Standards
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["CHAS Accredited", "SafeContractor", "Constructionline Gold", "ISO 9001 Quality Certified"].map((cert, i) => (
              <span key={i} className="text-sm md:text-base font-mono font-semibold text-gray-700 tracking-wider">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-24 bg-[#0f0f0f] text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Request Your Free Site Survey
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              We&apos;ll assess your facility substrate, test for moisture, specify the appropriate resin or concrete system, and provide a fixed-price proposal within 48 hours.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#c75b2a] hover:bg-[#b04f24] text-white px-10 py-5 rounded-sm text-sm font-semibold uppercase tracking-widest transition-all shadow-lg"
            >
              Book Free Site Survey
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] text-gray-400 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-white/10 pb-12">
            <div>
              <a href="#hero" className="font-serif text-2xl font-bold tracking-wider text-white mb-2 block" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                STERLING.
              </a>
              <p className="text-xs text-gray-500 max-w-sm font-mono">
                High-specification industrial epoxy, resin, and polished concrete solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-xs font-semibold tracking-widest uppercase text-gray-400">
              <a href="#services" className="hover:text-white transition-colors">Systems</a>
              <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
              <a href="#projects" className="hover:text-white transition-colors">Applications</a>
              <a href="#contact" className="hover:text-white transition-colors">Survey</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs mt-8">
            <p>© {new Date().getFullYear()} Sterling Industrial Flooring</p>
            <p className="uppercase tracking-widest text-[#666]">Independent concept study created by Veltris</p>
          </div>
        </div>
      </footer>

      {/* TRANSPARENCY NOTICE */}
      <div className="bg-black py-4 px-6 text-center border-t border-white/5">
        <p className="text-[11px] text-zinc-500 font-mono tracking-wider">
          This is an independent concept study created by Veltris. It is not commissioned client work and does not represent an existing company.
        </p>
      </div>
    </div>
  );
}
