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
  Quote
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HartleyConceptPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#111] font-sans selection:bg-[#c75b2a] selection:text-white pt-24 pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center bg-[#0f0f0f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* REPLACE WITH CLIENT REAL PHOTO: construction site wide shot */}
          <Image
            src="/images/gab-audiovisuel-hhXTjR9RrqY-unsplash.jpg"
            alt="Construction Site Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          {/* Dark gradient overlay from bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center mt-10">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 max-w-4xl leading-tight"
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
            <Link
              href="#quote"
              className="bg-[#c75b2a] hover:bg-[#a64920] text-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-widest transition-colors shadow-lg"
            >
              Get a Price for Your Project
            </Link>
            <p className="text-sm text-gray-400">Free, no-obligation quote within 24 hours</p>
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
              { icon: <Calendar className="w-8 h-8 mx-auto mb-3 text-[#111]" />, text: "15+ Years Experience" },
              { icon: <HardHat className="w-8 h-8 mx-auto mb-3 text-[#111]" />, text: "200+ Projects Completed" },
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
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#111]">What We Do</h2>
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
                {/* REPLACE WITH CLIENT REAL PHOTO: exposed brick, insulation, real renovation work */}
                <Image 
                  src="/images/olek-buzunov-hnwkK0lQwBw-unsplash (1).jpg" 
                  alt="Renovation & Refurbishment" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-playfair font-bold text-[#111] mb-3">Renovation & Refurbishment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transforming existing spaces with full structural updates, modern finishes, and careful attention to heritage details.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group">
              <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden">
                {/* REPLACE WITH CLIENT REAL PHOTO: modern office interior with concrete pillar */}
                <Image 
                  src="/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg" 
                  alt="Commercial Fit-Out" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-playfair font-bold text-[#111] mb-3">Commercial Fit-Out</h3>
                <p className="text-gray-600 leading-relaxed">
                  Office, retail, and warehouse interiors built to specification — from shell to fully operational workspace.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group">
              <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden">
                {/* REPLACE WITH CLIENT REAL PHOTO: workers on rebar grid, foundation work */}
                <Image 
                  src="/images/pexels-tkirkgoz-37733178 (1).jpg" 
                  alt="New Build Residential" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-playfair font-bold text-[#111] mb-3">New Build Residential</h3>
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
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#111]">Why Clients Choose Us</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: <ClipboardList className="w-10 h-10 text-[#c75b2a] mb-4" />, text: "Fixed-price quotes — no hidden costs" },
              { icon: <UserCog className="w-10 h-10 text-[#c75b2a] mb-4" />, text: "Dedicated project manager on every job" },
              { icon: <Shield className="w-10 h-10 text-[#c75b2a] mb-4" />, text: "Full insurance and warranty cover" },
              { icon: <Clock className="w-10 h-10 text-[#c75b2a] mb-4" />, text: "On-time delivery, every time" },
            ].map((point, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex flex-col items-center text-center p-6">
                {point.icon}
                <h3 className="text-xl font-bold text-[#111]">{point.text}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="flex flex-col items-center text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#111] mb-4">Recent Work</h2>
            <p className="text-gray-500 max-w-2xl">Representative projects — your actual work will be featured here</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Project 1 */}
            <motion.div variants={fadeIn} className="group cursor-pointer">
              <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden mb-6 rounded-xl">
                {/* REPLACE WITH CLIENT REAL PHOTO: Commercial Fit-Out */}
                <Image 
                  src="/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg" 
                  alt="Commercial Fit-Out" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#c75b2a] mb-2">Commercial Fit-Out, Midlands</p>
              <p className="text-[#111] font-medium leading-relaxed">
                Full office fit-out for a 40-person commercial team. Complete interior build, electrics, and finishes.
              </p>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={fadeIn} className="group cursor-pointer">
              <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden mb-6 rounded-xl">
                {/* REPLACE WITH CLIENT REAL PHOTO: Residential New Build */}
                <Image 
                  src="/images/pexels-tkirkgoz-37733178 (1).jpg" 
                  alt="Residential New Build" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#c75b2a] mb-2">Residential New Build, South East</p>
              <p className="text-[#111] font-medium leading-relaxed">
                Ground-up family home with 4 bedrooms, integrated garage, and landscaped garden.
              </p>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={fadeIn} className="group cursor-pointer">
              <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden mb-6 rounded-xl">
                {/* REPLACE WITH CLIENT REAL PHOTO: Office Renovation */}
                <Image 
                  src="/images/pexels-kindelmedia-8488031.jpg" 
                  alt="Office Renovation" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#c75b2a] mb-2">Office Renovation, London</p>
              <p className="text-[#111] font-medium leading-relaxed">
                Full strip-out and rebuild of a 3-storey office, including structural modifications and modern services.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Link href="#projects" className="inline-block border-b border-[#111] pb-1 font-bold text-[13px] uppercase tracking-widest text-[#111] hover:text-[#c75b2a] hover:border-[#c75b2a] transition-colors">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIAL SECTION */}
      <section className="bg-[#f8f9fa] py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#111]">What Our Clients Say</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Testimonial 1 */}
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col">
              <Quote className="w-10 h-10 text-gray-200 mb-6" />
              <p className="text-xl md:text-2xl text-[#111] leading-relaxed font-playfair mb-8 flex-1">
                "Hartley & Co. delivered our office fit-out two weeks ahead of schedule. Professional from start to finish."
              </p>
              <p className="font-bold text-[#111] uppercase tracking-widest text-[11px]">— Sarah T., Facilities Manager</p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col">
              <Quote className="w-10 h-10 text-gray-200 mb-6" />
              <p className="text-xl md:text-2xl text-[#111] leading-relaxed font-playfair mb-8 flex-1">
                "The renovation on our family home was stress-free. Clear communication and quality work throughout."
              </p>
              <p className="font-bold text-[#111] uppercase tracking-widest text-[11px]">— James R., Homeowner</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section id="quote" className="bg-[#0f0f0f] py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
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
            Tell us what you need. We'll send a clear, fixed-price quote within 24 hours.
          </motion.p>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="#quote"
              className="inline-block bg-[#c75b2a] hover:bg-[#a64920] text-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-widest transition-colors shadow-lg"
            >
              Get a Price for Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#0a0a0a] text-gray-400 py-16 border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
          
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-playfair font-bold text-white">Hartley & Co. Builders</h3>
            <p className="text-[11px] tracking-widest uppercase">Building What Matters</p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">hello@hartleybuilders.co.uk</p>
            <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">01234 567 890</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-[11px] font-semibold tracking-widest uppercase text-gray-400">
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#quote" className="hover:text-white transition-colors">Contact</Link>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Hartley & Co. Builders</p>
          <p className="uppercase tracking-widest text-[#555]">Concept direction created by Veltris</p>
        </div>
      </footer>

    </main>
  );
}
