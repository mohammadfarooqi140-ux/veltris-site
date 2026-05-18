"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import Link from "next/link";

// ─── Timeline Data ────────────────────────────────────────────────────────────

const timelineSteps = [
  {
    num: "01",
    title: "You send the brief",
    desc: "We review your business, goals, and what kind of website you need.",
  },
  {
    num: "02",
    title: "We shape the direction",
    desc: "We recommend the right structure, pages, and visual direction.",
  },
  {
    num: "03",
    title: "We build the site",
    desc: "Your website is designed, developed, tested, and prepared for launch.",
  },
  {
    num: "04",
    title: "You go live",
    desc: "Once approved, the site is deployed and ready for customers.",
  },
];

// ─── Shared field classes ─────────────────────────────────────────────────────

const fieldClass =
  "bg-transparent border border-[#1a1a1a] text-white p-3 md:p-4 rounded-none w-full focus:border-[#333] outline-none transition-colors duration-200 text-sm placeholder:text-[#444]";

const selectClass =
  "bg-[#080808] border border-[#1a1a1a] text-white p-3 md:p-4 rounded-none w-full focus:border-[#333] outline-none transition-colors duration-200 text-sm cursor-pointer";

const labelClass =
  "text-[10px] font-semibold uppercase tracking-widest text-[#555] block mb-1.5 md:mb-2";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("Corporate / Business");
  const [customBusiness, setCustomBusiness] = useState("");
  const [projectType, setProjectType] = useState("Landing Page");
  const [customProject, setCustomProject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Parse query params from /services cards
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const projectParam = params.get("project");
      const planParam = params.get("plan");

      if (projectParam) {
        if (projectParam.toLowerCase().includes("landing")) {
          setProjectType("Landing Page");
        } else if (projectParam.toLowerCase().includes("e-commerce")) {
          setProjectType("E-Commerce Store");
        } else if (projectParam.toLowerCase().includes("business")) {
          setProjectType("Business Website");
        } else if (projectParam.toLowerCase().includes("redesign")) {
          setProjectType("Website Redesign");
        } else if (projectParam.toLowerCase().includes("custom")) {
          setProjectType("Custom Website");
        }
      }

      if (planParam) {
        setMessage(`Hi, I would like to get a quote for the ${projectParam || "project"} (${planParam}).`);
      }
    }
  }, []);

  const handleSubmit = async () => {
    if (!name.trim()) { setErrorMessage("Please enter your name."); setStatus("error"); return; }
    if (!email.trim() || !email.includes("@")) { setErrorMessage("Please enter a valid email address."); setStatus("error"); return; }
    if (businessType === "Other" && !customBusiness.trim()) { setErrorMessage("Please specify your business type."); setStatus("error"); return; }
    if (projectType === "Other" && !customProject.trim()) { setErrorMessage("Please specify your project type."); setStatus("error"); return; }
    if (!message.trim()) { setErrorMessage("Please enter a message describing your project."); setStatus("error"); return; }

    setStatus("submitting");
    setErrorMessage("");

    const resolvedBusiness = businessType === "Other" ? `Other: ${customBusiness}` : businessType;
    const resolvedProject = projectType === "Other" ? `Other: ${customProject}` : projectType;

    try {
      const response = await fetch("https://formspree.io/f/mdajonkr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, phone: phone || "Not provided", businessType: resolvedBusiness, projectType: resolvedProject, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName(""); setEmail(""); setPhone(""); setBusinessType("Corporate / Business");
        setCustomBusiness(""); setProjectType("Landing Page");
        setCustomProject(""); setMessage("");
      } else {
        const data = await response.json();
        setErrorMessage(data?.errors ? data.errors.map((err: any) => err.message).join(", ") : "Failed to send. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please check your connection.");
      setStatus("error");
    }
  };

  return (
    <main className="bg-[#080808] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-10 md:pb-16">

        {/* ── DESKTOP: 2-col / MOBILE: stacked ── */}
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">

          {/* ── LEFT COLUMN: Intro + Timeline ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[38%] lg:sticky lg:top-28"
          >
            {/* Eyebrow + Heading */}
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-5 font-mono">
              CONTACT
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.08]">
              Start a project.
            </h1>
            <p className="text-base text-[#777] leading-relaxed mb-12 max-w-sm">
              Tell us what you need. We&apos;ll take it from there.
            </p>

            {/* Divider */}
            <div className="border-t border-[#1a1a1a] mb-10" />

            {/* What Happens Next */}
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-8 font-mono">
              What happens next
            </p>

            {/* Timeline */}
            <div className="relative">
              {/* Animated vertical spine */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#2a2a2a]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
                style={{ transformOrigin: "top" }}
              />

              <div className="flex flex-col gap-0">
                {timelineSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.5 + index * 0.1,
                    }}
                    className="relative pl-8 pb-6 last:pb-0 group"
                  >
                    {/* Node */}
                    <motion.div
                      className="absolute left-[-3.5px] top-1 w-2 h-2 rounded-full bg-[#444] group-hover:bg-white transition-colors duration-300"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.35, delay: 0.6 + index * 0.1 }}
                    />

                    <span className="text-[10px] font-mono text-[#555] mb-2 block group-hover:text-[#888] transition-colors duration-300">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-semibold text-white mb-1.5">{step.title}</h3>
                    <p className="text-xs text-[#888] leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Direct email */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#1a1a1a]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-3 font-mono">Prefer email?</p>
              <a
                href="mailto:hello@veltris.com"
                className="text-sm text-[#aaa] hover:text-white transition-colors duration-300 inline-flex items-center gap-1"
              >
                hello@veltris.com &rarr;
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Form Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="w-full lg:w-[62%]"
          >
            <div className="border border-[#1a1a1a] bg-[#050505]">
              <AnimatePresence mode="wait">
                {/* ── SUCCESS STATE ── */}
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-20 px-10 flex flex-col items-center justify-center"
                  >
                    <div className="w-14 h-14 bg-white flex items-center justify-center mb-7">
                      <Check className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent</h3>
                    <p className="text-[#666] text-sm max-w-sm mb-8 leading-relaxed">
                      Thank you for reaching out. We&apos;ll review your project details and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="border border-[#2a2a2a] text-[#888] text-[11px] tracking-widest uppercase px-6 py-3 hover:border-white hover:text-white transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  /* ── FORM STATE ── */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="p-4 md:p-10 space-y-4 md:space-y-7"
                  >
                    {/* Error Banner */}
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-red-950/40 border border-red-900/50 text-red-400 p-4 text-xs font-mono overflow-hidden"
                        >
                          {errorMessage}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Name + Email — staggered fade-up */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    >
                      <div className="w-full">
                        <label className={labelClass}>Your Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          disabled={status === "submitting"}
                          className={fieldClass}
                        />
                      </div>
                      <div className="w-full">
                        <label className={labelClass}>Your Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          disabled={status === "submitting"}
                          className={fieldClass}
                        />
                      </div>
                    </motion.div>

                    {/* Business Type + Project Type */}
                    {/* Phone / WhatsApp — optional */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    >
                      <label className={labelClass}>
                        Phone / WhatsApp <span className="text-[#444] normal-case tracking-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 234 567 8900"
                        disabled={status === "submitting"}
                        className={fieldClass}
                      />
                      <p className="text-[10px] text-[#444] mt-2 font-mono">So we can reach out on WhatsApp or call you directly.</p>
                    </motion.div>

                    {/* Business Type + Project Type */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      {/* Business Type */}
                      <div className="w-full">
                        <label className={labelClass}>Business Type</label>
                        <select
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          disabled={status === "submitting"}
                          className={selectClass}
                        >
                          <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                          <option value="Salon / Beauty">Salon / Beauty</option>
                          <option value="Fashion / Retail">Fashion / Retail</option>
                          <option value="Corporate / Business">Corporate / Business</option>
                          <option value="E-Commerce Brand">E-Commerce Brand</option>
                          <option value="Creative / Portfolio">Creative / Portfolio</option>
                          <option value="Local Service Business">Local Service Business</option>
                          <option value="Other">Other</option>
                        </select>
                        <AnimatePresence>
                          {businessType === "Other" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden mt-3"
                            >
                              <input
                                type="text"
                                value={customBusiness}
                                onChange={(e) => setCustomBusiness(e.target.value)}
                                placeholder="Specify your business type..."
                                className={fieldClass}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Project Type */}
                      <div className="w-full">
                        <label className={labelClass}>Project Type</label>
                        <select
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          disabled={status === "submitting"}
                          className={selectClass}
                        >
                          <option value="Landing Page">Landing Page</option>
                          <option value="Business Website">Business Website</option>
                          <option value="E-Commerce Store">E-Commerce Store</option>
                          <option value="Website Redesign">Website Redesign</option>
                          <option value="Custom Website">Custom Website</option>
                          <option value="Not Sure Yet">Not Sure Yet</option>
                        </select>
                        <AnimatePresence>
                          {projectType === "Other" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden mt-3"
                            >
                              <input
                                type="text"
                                value={customProject}
                                onChange={(e) => setCustomProject(e.target.value)}
                                placeholder="Specify your project type..."
                                className={fieldClass}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelClass}>Project Details</label>
                      <textarea
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your brand, goals, and what you'd like to build..."
                        disabled={status === "submitting"}
                        className={`${fieldClass} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      onClick={handleSubmit}
                      disabled={status === "submitting"}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full bg-white text-black font-semibold text-[11px] tracking-widest uppercase py-4 hover:bg-[#e8e8e8] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
