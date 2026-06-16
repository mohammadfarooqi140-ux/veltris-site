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
    <main className="bg-zinc-950 overflow-hidden min-h-screen relative">
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] uppercase font-semibold text-zinc-400 mb-8 tracking-[0.2em]">
              SERVICES &amp; PRICING
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-white mb-6 tracking-tight leading-[1.08]">
              Built for local businesses, <br className="hidden md:block"/>not generic templates.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0">
              We work directly with you to design and build your website. You receive a fully custom, premium site tailored to your brand&apos;s goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-zinc-950 min-h-[56px] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98] w-full sm:w-auto"
            >
              Request Free Homepage Concept
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID WITH PRICING */}
      <section className="pt-20 pb-20 md:pt-24 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
              className="group bg-zinc-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:bg-zinc-900/60 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Service {service.number}</span>
                </div>

                <h3 className="text-2xl font-playfair font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-zinc-500 text-sm flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/5 mt-auto">
                <p className="text-lg font-sans font-semibold tracking-normal text-white">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 p-6 rounded-2xl bg-zinc-900/30 max-w-2xl text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <p className="text-sm text-zinc-400 leading-relaxed">
            <strong className="text-white font-sans font-semibold">Note:</strong> Final pricing depends on pages, content, integrations, booking tools, e-commerce complexity, and revision scope.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS — BENTO GRID */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5">
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] uppercase font-semibold text-zinc-400 mb-6 tracking-[0.2em]">
            Process
          </div>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4">How it works</h2>
          <p className="text-lg text-zinc-400">A simple process from first look to launch.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-zinc-900/40 rounded-3xl p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-zinc-900/60 transition-all duration-300">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-mono text-zinc-400 mb-6">{step.num}</span>
              <h3 className="text-xl font-bold text-white mb-3 font-sans">{step.title}</h3>
              <p className="text-base text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>


    </main>
  );
}
