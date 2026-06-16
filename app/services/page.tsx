"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Landing Pages",
    description: "A focused page for turning online traffic and Instagram visitors into real enquiries with a single, clear offer.",
    features: ["Optimized for conversion", "Clear CTA paths", "Mobile first design"],
    price: "From £600",
  },
  {
    number: "02",
    title: "Business Websites",
    description: "A complete online home designed to help local businesses look credible, established, and easy to contact.",
    features: ["Service & menu clarity", "Trust-building layouts", "Fast loading times"],
    price: "From £900",
  },
  {
    number: "03",
    title: "Website Redesigns",
    description: "For businesses with outdated, unclear, slow, or weak mobile websites that are costing them enquiries.",
    features: ["Mobile usability overhaul", "Modern visual style", "Improved conversion paths"],
    price: "From £900",
  },
  {
    number: "04",
    title: "Ecommerce Websites",
    description: "For product-based businesses needing polished product presentation and a high-trust shopping experience.",
    features: ["Premium product display", "High-trust checkout", "Brand atmosphere"],
    price: "Quoted after scope",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Understand the business",
    desc: "We review your current website, Instagram, Google listing, and what customers need to know.",
  },
  {
    num: "02",
    title: "Create a homepage direction",
    desc: "You see a free concept showing how your business could look online before committing.",
  },
  {
    num: "03",
    title: "Build the full experience",
    desc: "We turn the approved direction into a polished, responsive website with clear structure.",
  },
  {
    num: "04",
    title: "Launch with clarity",
    desc: "Your business gets a cleaner online home with the key information customers need to take action.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#080808] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 px-6 md:px-12 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-widest text-[#555] mb-4 font-mono">
              SERVICES &amp; PRICING
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.08]">
              Websites built for local businesses, not generic templates
            </h1>
            <p className="text-base sm:text-lg text-[#888] max-w-2xl leading-relaxed mb-8">
              We work directly with you to design and build your website. You receive a fully custom site tailored to your brand&apos;s goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#F5F5F5] text-[#050505] min-h-[48px] px-8 py-4 rounded-none text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition hover:bg-white active:scale-[0.98] w-full sm:w-auto"
            >
              Request Free Homepage Concept
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID WITH PRICING */}
      <section className="pt-10 pb-12 md:pt-14 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#1a1a1a]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
              className="group bg-[#050505] border border-[#1a1a1a] p-5 md:p-7 flex flex-col justify-between hover:border-[#333] transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono text-[#555]">{service.number}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-sans">{service.title}</h3>
                <p className="text-[#888] text-sm mb-5 leading-relaxed">{service.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-[#666] text-sm flex items-center gap-2.5">
                      <span className="w-1 h-1 bg-[#444] rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#1a1a1a] mt-auto">
                <p className="text-base font-sans font-semibold tracking-normal text-white">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Scope Note */}
        <div className="mt-5 p-4 bg-[#111] border border-[#1a1a1a] max-w-2xl text-left">
          <p className="text-sm text-[#888]">
            <strong className="text-white font-sans font-semibold">Note:</strong> Final pricing depends on pages, content, integrations, booking tools, e-commerce complexity, and revision scope.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS — COMPACT CARDS */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#1a1a1a]">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-[#555] mb-2 font-mono">Process</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">How it works</h2>
          <p className="text-sm text-[#888]">A simple process from first look to launch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {processSteps.map((step, index) => (
            <div key={index} className="border border-[#1a1a1a] bg-[#050505] p-5 md:p-6">
              <span className="text-[10px] font-mono text-[#555] block mb-3">{step.num}</span>
              <h3 className="text-base font-bold text-white mb-2 font-sans">{step.title}</h3>
              <p className="text-sm text-[#888] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto border border-[#1a1a1a] bg-[#0A0A0A] p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Want to see what your business could look like?
          </h2>
          <p className="text-[#888] mb-6 leading-relaxed max-w-lg mx-auto text-sm">
            We build free homepage concepts for businesses that are a clear fit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#F5F5F5] text-[#050505] min-h-[48px] px-8 py-4 rounded-none text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition hover:bg-white active:scale-[0.98] w-full sm:w-auto mt-4"
          >
            Request Free Homepage Concept
          </Link>
        </div>
      </section>
    </main>
  );
}
