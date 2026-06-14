"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Landing Pages & SEO Microsites",
    description: "A focused page for businesses that need a clear, credible online presence around one offer, location, or service.",
    features: ["Optimized for conversion", "Fast loading times", "Mobile responsive"],
    price: "From £600",
  },
  {
    number: "02",
    title: "Multi-Page Business Websites",
    description: "A complete online home for service businesses that need pages for services, work, FAQs, contact, location, and trust-building.",
    features: ["Multiple internal pages", "CMS integration", "SEO foundations"],
    price: "From £900",
  },
  {
    number: "03",
    title: "Website Redesigns",
    description: "For businesses with outdated, unclear, slow, or weak websites that no longer reflect the quality of the business.",
    features: ["UI/UX overhaul", "Performance boost", "Content migration"],
    price: "From £900",
  },
  {
    number: "04",
    title: "Simple E-Commerce / Advanced Builds",
    description: "For businesses that need product presentation, simple selling flows, booking-ready layouts, or more advanced functionality.",
    features: ["Secure checkout", "Inventory management", "Payment gateways"],
    price: "Quoted after scope",
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
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-16 px-6 md:px-12 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-widest text-[#555] mb-4 md:mb-6 font-mono">
              SERVICES &amp; PRICING
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 tracking-tight leading-[1.05]">
              Websites built for local businesses, not generic templates
            </h1>
            <p className="text-base sm:text-lg text-[#888] max-w-2xl leading-relaxed mb-8">
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

      {/* SERVICES GRID WITH PRICING */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#1a1a1a]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
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
              className="group bg-[#050505] border border-[#1a1a1a] rounded-none p-6 md:p-8 flex flex-col justify-between hover:border-[#444] transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <span className="text-xs font-mono text-[#555]">{service.number}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-[#888] text-sm mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-[#666] text-sm flex items-center gap-3">
                      <span className="w-1 h-1 bg-[#444] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-[#1a1a1a] mt-auto">
                <p className="text-lg font-semibold text-white">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Scope Note */}
        <div className="mt-6 p-5 bg-[#111] border border-[#1a1a1a] max-w-2xl text-left">
          <p className="text-sm text-[#888]">
            <strong className="text-white">Note:</strong> Final pricing depends on pages, content, integrations, booking tools, e-commerce complexity, and revision scope.
          </p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#1a1a1a]">
        <div className="mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-widest text-[#555] mb-3 font-mono">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">How it works</h2>
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
            <div key={index} className="flex flex-col items-center mb-10 md:mb-0 relative bg-[#080808] px-4 md:px-6 mx-auto md:mx-0 text-center w-full md:w-auto">
              <span className="w-10 h-10 border border-[#333] flex items-center justify-center text-white font-mono text-sm mb-4 bg-[#080808] rounded-none">
                {step.num}
              </span>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">{step.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto border border-[#1a1a1a] bg-[#0A0A0A] p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Want to see what your business could look like?
          </h2>
          <p className="text-[#888] mb-8 leading-relaxed max-w-xl mx-auto">
            We build free homepage concepts for businesses that are a clear fit. Fill out the form and we will get back to you within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-widest uppercase px-10 py-4 rounded-none hover:bg-[#e0e0e0] transition-all duration-300 hover:-translate-y-1"
          >
            Request Free Concept
          </Link>
        </div>
      </section>
    </main>
  );
}
