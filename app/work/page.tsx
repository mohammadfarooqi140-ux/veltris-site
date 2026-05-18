"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const timelineSteps = [
  {
    num: "01",
    title: "Brand Direction",
    desc: "Dark luxury tone, sharp product positioning, and a serious visual identity built for a knife brand.",
  },
  {
    num: "02",
    title: "Product Experience",
    desc: "Clear product-focused layouts designed around browsing and buying confidence.",
  },
  {
    num: "03",
    title: "Responsive Layout",
    desc: "Built to feel clean and intentional across desktop, tablet, and mobile screens.",
  },
  {
    num: "04",
    title: "Conversion Flow",
    desc: "Strong CTAs, simple navigation, and a page structure that keeps users moving toward purchase.",
  },
  {
    num: "05",
    title: "Launch Ready",
    desc: "Modern stack, optimized pages, and a polished live deployment on Vercel.",
  },
];

const proofCards = [
  {
    num: "01",
    title: "Premium Brand Direction",
    desc: "Aethalgard shows Veltris can create a sharp, serious brand atmosphere that carries a product's identity.",
  },
  {
    num: "02",
    title: "Product Presentation",
    desc: "The layout is built around making products feel clear, desirable, and easy to browse and buy.",
  },
  {
    num: "03",
    title: "Responsive Development",
    desc: "The experience is cleanly structured to work across desktop, tablet, and mobile without compromise.",
  },
  {
    num: "04",
    title: "Launch Capability",
    desc: "The project proves Veltris can take an idea from concept to a fully deployed, live website.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#080808]">

      {/* ── 1. COMPACT HERO INTRO ─────────────────────────────────────────── */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pt-24 md:pt-32 pb-8 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-5 font-mono">
            FEATURED WORK
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.08]">
            One project.<br />Built with intention.
          </h1>
          <p className="text-base md:text-lg text-[#777] leading-relaxed mb-8 max-w-xl">
            Aethalgard is a premium dark e-commerce experience designed to show how Veltris approaches visual identity, product presentation, and modern development.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://athelgard.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black font-semibold text-[11px] tracking-widest uppercase px-7 py-3.5 hover:bg-[#e8e8e8] transition-colors duration-300"
            >
              View Live Project &rarr;
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#2a2a2a] text-[#aaa] font-semibold text-[11px] tracking-widest uppercase px-7 py-3.5 hover:border-[#555] hover:text-white transition-all duration-300"
            >
              Start Your Project &rarr;
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── 2. FEATURED PROJECT SHOWCASE ─────────────────────────────────── */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="border border-[#1a1a1a] bg-[#050505] overflow-hidden"
        >
          {/* Split layout: left text / right visual */}
          <div className="flex flex-col lg:flex-row">

            {/* LEFT TEXT PANEL — 40% */}
            <div className="w-full lg:w-[40%] p-8 md:p-10 lg:p-12 flex flex-col justify-between gap-10 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-5 font-mono">
                  E-COMMERCE / BRAND EXPERIENCE
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                  Aethalgard
                </h2>
                <p className="text-[#777] text-sm leading-relaxed mb-8">
                  A premium dark-themed knife e-commerce store built with Next.js and Tailwind CSS. Designed around sharp visuals, product clarity, mobile responsiveness, and a serious brand identity.
                </p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Next.js", "Tailwind CSS", "E-Commerce", "Responsive", "Brand Identity"].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider border border-[#222] text-[#666] px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics grid inside card */}
                <div className="grid grid-cols-2 gap-px border border-[#1a1a1a] mb-10">
                  {[
                    { label: "Type", value: "E-Commerce" },
                    { label: "Stack", value: "Next.js + Tailwind" },
                    { label: "Deployment", value: "Vercel" },
                    { label: "Status", value: "Live" },
                  ].map((m) => (
                    <div key={m.label} className="bg-[#080808] p-4">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-[#444] mb-1">{m.label}</p>
                      <p className={`text-sm font-semibold ${m.value === "Live" ? "text-emerald-500" : "text-[#ccc]"}`}>{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://athelgard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-black font-semibold text-[11px] tracking-widest uppercase px-6 py-4 hover:bg-[#e8e8e8] transition-colors duration-300 w-full lg:w-auto"
              >
                View Live Project &rarr;
              </a>
            </div>

            {/* RIGHT VISUAL PANEL — 60% */}
            <div className="w-full lg:w-[60%] relative bg-[#040404] min-h-[320px] md:min-h-[480px] lg:min-h-0 overflow-hidden flex items-center justify-center p-8 lg:p-12">
              {/* Large desktop preview */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                className="w-full relative"
              >
                {/* Desktop frame */}
                <div className="w-full border border-[#1f1f1f] overflow-hidden shadow-2xl">
                  <div className="h-6 bg-[#111] border-b border-[#1a1a1a] flex items-center px-3 gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2a2a2a]" />
                    <span className="w-2 h-2 rounded-full bg-[#2a2a2a]" />
                    <span className="w-2 h-2 rounded-full bg-[#2a2a2a]" />
                  </div>
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src="/aethelgard-preview.png"
                      alt="Aethalgard desktop preview"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-transparent opacity-30 pointer-events-none" />
                  </div>
                </div>

                {/* Mobile frame overlay — bottom right corner */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 1 }}
                  className="hidden md:block absolute -bottom-6 -right-4 w-[22%] border border-[#2a2a2a] bg-[#080808] shadow-xl"
                  style={{ zIndex: 10 }}
                >
                  <div className="h-4 bg-[#111] border-b border-[#1a1a1a] flex items-center justify-center">
                    <span className="w-6 h-1 rounded-full bg-[#2a2a2a]" />
                  </div>
                  <div className="aspect-[9/16] overflow-hidden">
                    <img
                      src="/aethelgard-preview.png"
                      alt="Aethalgard mobile preview"
                      className="w-full h-full object-cover object-top scale-150 origin-top"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 3. BUILD BREAKDOWN TIMELINE ──────────────────────────────────── */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-20 md:py-28">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 md:mb-20 border-b border-[#1a1a1a] pb-8"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-4 font-mono">Build Breakdown</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            How Aethalgard was shaped from concept to launch.
          </h2>
        </motion.div>

        {/* Desktop: 3-column — snapshot | line | timeline. Mobile: stacked */}
        <div className="flex flex-col lg:flex-row gap-0 items-start">

          {/* SNAPSHOT PANEL — desktop 30%, mobile full above */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[30%] lg:sticky lg:top-28 mb-12 lg:mb-0"
          >
            <div className="border border-[#1a1a1a] bg-[#050505]">
              {/* Mini thumbnail */}
              <div className="aspect-video overflow-hidden border-b border-[#1a1a1a] relative">
                <img
                  src="/aethelgard-preview.png"
                  alt="Aethalgard snapshot"
                  className="w-full h-full object-cover object-top opacity-70"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Details */}
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-5 font-mono">Project Snapshot</p>
                <h3 className="text-xl font-bold text-white mb-6">Aethalgard</h3>
                <div className="flex flex-col gap-4 mb-7">
                  {[
                    { label: "Type", value: "E-Commerce" },
                    { label: "Stack", value: "Next.js / Tailwind" },
                    { label: "Focus", value: "Brand / Product / Conversion" },
                    { label: "Status", value: "Live" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-baseline gap-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#555] shrink-0">{row.label}</span>
                      <span className={`text-xs text-right ${row.value === "Live" ? "text-emerald-500" : "text-[#aaa]"}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://athelgard.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-widest text-[#555] hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
                >
                  View project <span>&rarr;</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* CENTER TIMELINE LINE — desktop only */}
          <div className="hidden lg:flex w-[8%] flex-col items-center pt-0 self-stretch">
            <motion.div
              className="w-[1px] bg-[#222] flex-1"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* TIMELINE CARDS — desktop 62%, mobile full */}
          <div className="w-full lg:w-[62%] flex flex-col gap-6 md:gap-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                className="group border border-[#1a1a1a] bg-[#050505] p-7 md:p-9 hover:border-[#2d2d2d] hover:-translate-y-1 transition-all duration-500"
              >
                <span className="text-[10px] font-mono text-[#444] mb-4 block group-hover:text-[#777] transition-colors duration-300">
                  {step.num}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed group-hover:text-[#888] transition-colors duration-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT THIS PROJECT DEMONSTRATES ───────────────────────────── */}
      <section className="border-t border-[#1a1a1a] bg-[#040404]">
        <div className="px-6 md:px-12 max-w-7xl mx-auto py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-4 font-mono">Proof of capability</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What this project demonstrates</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
          >
            {proofCards.map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="bg-[#040404] p-8 md:p-10 group hover:bg-[#070707] transition-colors duration-500"
              >
                <span className="text-[10px] font-mono text-[#444] mb-5 block">{card.num}</span>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed group-hover:text-[#888] transition-colors duration-300">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="border-t border-[#1a1a1a] py-16 md:py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Your project could be next.
          </h2>
          <p className="text-base text-[#666] mb-10 leading-relaxed">
            Tell us what you want to build and we'll shape the right website around your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-[11px] tracking-widest uppercase px-10 py-4 hover:bg-[#e8e8e8] transition-colors duration-300"
          >
            Start a Project
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
