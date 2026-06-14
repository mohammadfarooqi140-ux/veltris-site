"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Landing Pages & SEO Microsites",
    description: "Fast, polished one-page sites designed for ad campaigns and product launches.",
    features: ["Optimized for conversion", "Fast loading times", "Mobile responsive"],
    large: true,
  },
  {
    number: "02",
    title: "Multi-Page Business Websites",
    description: "3–5 page websites establishing credibility and trust for service brands.",
    features: ["Multiple internal pages", "CMS integration", "SEO foundations"],
    large: true,
  },
  {
    number: "03",
    title: "Website Redesigns",
    description: "Modernize your outdated, slow, or weak website with better performance and contemporary aesthetics.",
    features: ["UI/UX overhaul", "Performance boost", "Content migration"],
    large: false,
  },
  {
    number: "04",
    title: "Simple E-Commerce / Advanced Builds",
    description: "Custom functionality and stores. Only offered where requirements are crystal clear.",
    features: ["Secure checkout", "Inventory management", "Payment gateways"],
    large: false,
  },
];

const processSteps = [
  { num: "01", title: "Quick discovery" },
  { num: "02", title: "Free homepage concept" },
  { num: "03", title: "Full build" },
  { num: "04", title: "Launch & support" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#080808] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-8 md:pt-40 md:pb-24 px-6 md:px-12 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-widest text-[#555] mb-4 md:mb-8 font-mono">
              SERVICES &amp; PRICING
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
              Websites built for local businesses, not generic templates
            </h1>
            <p className="text-base sm:text-xl text-[#888] max-w-2xl leading-relaxed mb-12">
              We work directly with you to design and build your website. You receive a fully custom site tailored to your brand&apos;s goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-black font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded-none hover:bg-[#e0e0e0] transition-colors duration-300"
              >
                Request Free Concept &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES BENTO GRID */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group bg-[#050505] border border-[#1a1a1a] rounded-none p-5 md:p-10 flex flex-col hover:border-[#444] transition-all duration-500 hover:-translate-y-1 ${
                service.large ? "md:col-span-3" : "md:col-span-3"
              }`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-mono text-[#555]">{service.number}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-[#888] text-sm mb-8 leading-relaxed flex-grow">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-[#666] text-sm flex items-center gap-3">
                    <span className="w-1 h-1 bg-[#444] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1a1a1a]">
        <div className="mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-widest text-[#555] mb-4 font-mono">Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">How it works</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-[#1a1a1a] -z-10" />
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 h-[1px] bg-[#555] -z-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ originX: 0, width: "100%" }}
          />

          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-12 md:mb-0 relative bg-[#080808] px-4 md:px-6 mx-auto md:mx-0 text-center w-full md:w-auto">
              <span className="w-12 h-12 border border-[#333] flex items-center justify-center text-white font-mono text-sm mb-6 bg-[#080808] rounded-none">
                {step.num}
              </span>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">{step.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING GRID SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-[#1a1a1a]">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simple, clear pricing.</h2>
          <p className="text-lg text-[#888]">No hidden fees. You know exactly what to expect.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border border-[#1a1a1a] p-8 flex flex-col justify-between hover:border-[#444] transition-colors">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Landing Page / Microsite</h3>
              <p className="text-sm text-[#888] mb-8">Fast, polished one-page sites.</p>
            </div>
            <p className="text-2xl text-white font-light">from £600</p>
          </div>
          <div className="border border-[#1a1a1a] p-8 flex flex-col justify-between hover:border-[#444] transition-colors bg-[#050505]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">3–5 Page Business Website</h3>
              <p className="text-sm text-[#888] mb-8">For studios, salons, barbers, and service brands.</p>
            </div>
            <p className="text-2xl text-white font-light">from £900</p>
          </div>
          <div className="border border-[#1a1a1a] p-8 flex flex-col justify-between hover:border-[#444] transition-colors bg-[#050505]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Website Redesign</h3>
              <p className="text-sm text-[#888] mb-8">Modernize your outdated, slow website.</p>
            </div>
            <p className="text-2xl text-white font-light">from £900</p>
          </div>
          <div className="border border-[#1a1a1a] p-8 flex flex-col justify-between hover:border-[#444] transition-colors">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Simple E-Commerce / Advanced</h3>
              <p className="text-sm text-[#888] mb-8">Custom functionality and multi-product stores.</p>
            </div>
            <p className="text-2xl text-white font-light">Quoted after scope</p>
          </div>
        </div>
        <div className="mt-8 p-6 bg-[#111] border border-[#1a1a1a]">
          <p className="text-sm text-[#888]">
            <strong className="text-white">Note:</strong> Final pricing depends on pages, content, integrations, booking tools, e-commerce complexity, and revision scope.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[#1a1a1a] py-20 md:py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Want to see what your business could look like?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-widest uppercase px-10 py-5 rounded-none hover:bg-[#e0e0e0] transition-all duration-300 hover:-translate-y-1"
          >
            Request Free Concept
          </Link>
        </div>
      </section>
    </main>
  );
}
