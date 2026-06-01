"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Landing Pages",
    description: "High-converting single pages designed for ad campaigns and product launches.",
    features: ["Optimized for conversion", "Fast loading times", "Mobile responsive"],
    price: "From £800",
    large: true,
  },
  {
    number: "02",
    title: "Business Websites",
    description: "Professional multi-page presences establishing credibility and trust.",
    features: ["Multiple internal pages", "CMS integration", "SEO foundations"],
    price: "From £1,500",
    large: true,
  },
  {
    number: "03",
    title: "E-Commerce Stores",
    description: "Fully featured digital storefronts built to scale your revenue.",
    features: ["Secure checkout", "Inventory management", "Payment gateways"],
    price: "From £2,500",
    large: false,
  },
  {
    number: "04",
    title: "Website Redesigns",
    description: "Modernize your outdated site with better performance and contemporary aesthetics.",
    features: ["UI/UX overhaul", "Performance boost", "Content migration"],
    price: "Custom quote",
    large: false,
  },
  {
    number: "05",
    title: "Custom Website",
    description: "Unique, tailor-made digital solutions built from scratch for specific requirements.",
    features: ["Bespoke design", "Advanced functionality", "API integrations"],
    price: "Custom quote",
    large: false,
  },
];

const processSteps = [
  { num: "01", title: "Tell us what you need" },
  { num: "02", title: "We design the direction" },
  { num: "03", title: "We build the site" },
  { num: "04", title: "You launch and grow" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#080808] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-8 md:pt-40 md:pb-24 px-6 md:px-12 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Left Text */}
          <motion.div
            className="w-full md:w-[55%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-widest text-[#555] mb-4 md:mb-8 font-mono">
              SERVICES
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 md:mb-4 tracking-tight leading-[1.05]">
              What we build.
            </h1>
            <p className="text-base sm:text-lg text-[#555] font-medium mb-4 md:mb-6">
              Custom websites. Flat pricing.
            </p>
            <p className="text-base sm:text-xl text-[#888] max-w-2xl leading-relaxed mb-8 md:mb-12">
              We work directly with you to design and build your website. You receive a fully custom site tailored to your brand&apos;s goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-black font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded-none hover:bg-[#e0e0e0] transition-colors duration-300"
              >
                Start a Project &rarr;
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center border border-[#333] text-white font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded-none hover:bg-[#111] hover:border-[#555] transition-all duration-300"
              >
                See Our Work &rarr;
              </Link>
            </div>
          </motion.div>

          {/* Right Floating Visual (Desktop/Tablet) */}
          <div className="hidden md:block w-full md:w-[45%] pl-4">
            <div className="relative border border-[#1a1a1a] bg-[#050505] overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              {/* Fake browser header */}
              <div className="w-full h-8 border-b border-[#1f1f1f] flex items-center px-4 gap-2 bg-[#0a0a0a]">
                <div className="w-2 h-2 rounded-full bg-[#222]" />
                <div className="w-2 h-2 rounded-full bg-[#222]" />
                <div className="w-2 h-2 rounded-full bg-[#222]" />
              </div>
              {/* Preview image */}
              <div className="aspect-[16/10] relative w-full overflow-hidden">
                <img
                  src="/aethelgard-preview.png"
                  alt="Aethalgard Premium E-Commerce"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Mobile Simplified Preview (Mobile Only) */}
          <motion.div
            className="block md:hidden w-full max-w-sm mx-auto mt-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative border border-[#1a1a1a] bg-[#050505] overflow-hidden rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.3)]">
              {/* Fake browser header */}
              <div className="w-full h-6 border-b border-[#1f1f1f] flex items-center px-3 gap-1.5 bg-[#0a0a0a]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#222]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#222]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#222]" />
              </div>
              {/* Preview image */}
              <div className="aspect-video relative w-full overflow-hidden">
                <img
                  src="/aethelgard-preview.png"
                  alt="Aethalgard Premium E-Commerce Preview"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
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
              className={`group bg-black border border-[#1a1a1a] rounded-none p-5 md:p-10 flex flex-col justify-between hover:border-[#444] transition-all duration-500 hover:-translate-y-1 ${
                service.large ? "md:col-span-3" : "md:col-span-2"
              }`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <span className="text-xs font-mono text-[#555]">{service.number}</span>
                  {/* Subtle fake preview lines animation */}
                  <div className="w-16 h-12 flex flex-col gap-2 overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div className="w-full h-[2px] bg-[#333]" />
                    <motion.div 
                      className="w-3/4 h-[2px] bg-[#333]" 
                      initial={{ x: -10, opacity: 0.5 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="w-1/2 h-[2px] bg-[#333]" 
                      initial={{ x: -20, opacity: 0.5 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-[#888] text-sm mb-8 leading-relaxed max-w-md">{service.description}</p>
                
                <ul className="space-y-3 mb-8 md:mb-12">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-[#666] text-sm flex items-center gap-3">
                      <span className="w-1 h-1 bg-[#444] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <p className="text-xl font-bold text-white">{service.price}</p>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-block bg-[#111] border border-[#222] text-white text-[10px] uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 text-center rounded-none group-hover:border-white"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <p className="text-sm text-[#888] font-mono tracking-wide">
            Partner rate: <span className="text-white">40% off your project.</span>
          </p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1a1a1a]">
        <div className="mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-widest text-[#555] mb-4 font-mono">Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">How it works</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
          {/* Animated background line for desktop */}
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

      {/* FINAL CTA */}
      <section className="border-t border-[#1a1a1a] py-20 md:py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#555] mb-6 font-mono">Not sure what you need?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Tell me what you&apos;re building and I&apos;ll recommend the right approach.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-widest uppercase px-10 py-5 rounded-none hover:bg-[#e0e0e0] transition-all duration-300 hover:-translate-y-1"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
