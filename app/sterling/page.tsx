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
  X
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SterlingFlooringPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] font-sans selection:bg-[#c75b2a] selection:text-white" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a1a1a] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#hero" className="font-serif text-2xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                STERLING.
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors">Projects</Link>
              <Link href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link>
              <a href="#contact" className="bg-[#c75b2a] hover:bg-[#b04f24] text-white px-5 py-2.5 rounded-sm text-sm font-medium transition-all">
                Get a Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-white/10">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link href="#services" className="block px-3 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="#projects" className="block px-3 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link href="#about" className="block px-3 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="#contact" className="block px-3 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <div className="pt-4 pb-2 px-3">
                <a href="#contact" className="block w-full text-center bg-[#c75b2a] text-white px-5 py-3 rounded-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-20 pb-32 md:pt-32 md:pb-48 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/download(1).jpg"
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Industrial Flooring Built to Last
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              Commercial epoxy, resin, and polished concrete for warehouses, factories, and retail spaces across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href="#contact" className="bg-[#c75b2a] hover:bg-[#b04f24] text-white px-8 py-4 rounded-sm text-lg font-medium transition-all flex items-center group">
                Get a Free Site Survey
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-400 sm:ml-4">
                Free, no-obligation assessment<br className="hidden sm:block" /> within 48 hours
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
              { icon: ShieldCheck, text: "CHAS Accredited" },
              { icon: BadgeCheck, text: "SafeContractor Approved" },
              { icon: Calendar, text: "10+ Years Experience" },
              { icon: HardHat, text: "500,000+ sq ft Installed" }
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
              Our Flooring Solutions
            </h2>
            <div className="w-20 h-1 bg-[#c75b2a] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Epoxy Flooring Systems",
                desc: "Seamless, chemical-resistant epoxy coatings for warehouses, factories, and production facilities.",
                img: "/images/images (2).jpg"
              },
              {
                title: "Resin Flooring",
                desc: "Heavy-duty polyurethane and methyl methacrylate systems for extreme temperature and traffic conditions.",
                img: "/images/download (1)(1).jpg"
              },
              {
                title: "Concrete Polishing",
                desc: "Diamond-polished concrete with high-gloss or matte finish. Low maintenance, long lifespan.",
                img: "/images/images (4).jpg"
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
                className="bg-white group cursor-pointer border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>{service.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{service.desc}</p>
                  <span className="text-[#c75b2a] font-medium flex items-center group-hover:underline">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STERLING SECTION */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Why Contractors Choose Sterling
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                We understand that closing your facility costs money. Our rapid-cure systems and flexible scheduling mean we get in, install a world-class floor, and get out—often over a single weekend.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Clock, text: "Fast turnaround — minimal downtime" },
                  { icon: Shield, text: "Slip-resistant and safety-compliant finishes" },
                  { icon: ClipboardList, text: "10-year warranty on all installations" },
                  { icon: UserCog, text: "Works around your production schedule" }
                ].map((point, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center border border-gray-100">
                      <point.icon className="w-5 h-5 text-[#c75b2a]" />
                    </div>
                    <div className="ml-4 pt-3">
                      <p className="text-gray-900 font-medium">{point.text}</p>
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
              className="relative h-[600px] w-full bg-gray-200"
            >
              <Image
                src="/images/download(1).jpg"
                alt="Sterling team at work"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#1a1a1a] p-8 text-white max-w-xs hidden md:block">
                <p className="font-playfair text-4xl font-bold text-[#c75b2a] mb-2">1M+</p>
                <p className="text-sm font-medium uppercase tracking-wider text-gray-300">Sq Ft of Flooring Installed Nationwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 md:py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Recent Installations
              </h2>
              <p className="text-gray-400">
                Representative projects — your actual installations will be featured here
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-[#c75b2a] hover:text-white transition-colors font-medium flex items-center">
                View all projects <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Warehouse Flooring, Midlands",
                desc: "35,000 sq ft epoxy coating for a distribution centre. Completed in 5 days with zero operational downtime.",
                img: "/images/download(1).jpg"
              },
              {
                title: "Factory Refurbishment, North West",
                desc: "Full resin floor system for a food production facility. Temperature-resistant and hygienically sealed.",
                img: "/images/download (1)(1).jpg"
              },
              {
                title: "Retail Showroom, London",
                desc: "Polished concrete with decorative aggregate exposure. High-traffic retail environment.",
                img: "/images/images (4).jpg"
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
                className="group cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden mb-6">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#c75b2a] transition-colors" style={{ fontFamily: 'var(--font-playfair), serif' }}>{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS SECTION */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Certifications & Standards</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
            {["CHAS", "SafeContractor", "Constructionline", "ISO 9001"].map((cert, i) => (
              <span key={i} className="text-xl md:text-2xl font-bold text-gray-800 tracking-wider">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-20 md:py-32 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-[#c75b2a] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                quote: "Sterling installed 20,000 sq ft of epoxy flooring in our warehouse. Professional, fast, and no disruption to our operations.",
                author: "Mark H., Operations Director"
              },
              {
                quote: "The polished concrete in our showroom gets compliments from every customer. Exactly what we needed.",
                author: "Priya K., Retail Manager"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.2 } }
                }}
                className="bg-white p-10 shadow-sm border border-gray-100 text-left relative"
              >
                <div className="text-[#c75b2a] text-6xl font-serif absolute top-6 left-6 opacity-20">&ldquo;</div>
                <p className="text-lg text-gray-700 italic mb-6 relative z-10 pt-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-bold text-gray-900 uppercase tracking-wider text-sm">
                  {testimonial.author}
                </p>
              </motion.div>
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
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              We&apos;ll assess your space, recommend the right system, and provide a fixed-price quote within 48 hours.
            </p>
            <button className="bg-[#c75b2a] hover:bg-[#b04f24] text-white px-10 py-5 rounded-sm text-lg font-medium transition-all shadow-lg shadow-[#c75b2a]/20">
              Get a Free Site Survey
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] text-gray-400 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="#hero" className="font-serif text-2xl font-bold tracking-wider text-white mb-4 block" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                STERLING.
              </Link>
              <p className="text-lg text-gray-500 max-w-sm">
                Flooring That Works as Hard as You Do
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Contact</h4>
              <ul className="space-y-3">
                <li><a href="mailto:hello@sterlingflooring.co.uk" className="hover:text-white transition-colors">hello@sterlingflooring.co.uk</a></li>
                <li><a href="tel:01234567890" className="hover:text-white transition-colors">01234 567 890</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Navigation</h4>
              <ul className="space-y-3">
                <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 Sterling Industrial Flooring</p>
            <p className="text-gray-600">Concept direction created by Veltris</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
