"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

// ─── Shared field classes ─────────────────────────────────────────────────────

const fieldClass =
  "bg-transparent border border-[#1a1a1a] text-white p-3 md:p-4 rounded-none w-full focus:border-[#333] outline-none transition-colors duration-200 text-sm placeholder:text-[#444]";

const selectClass =
  "bg-[#080808] border border-[#1a1a1a] text-white p-3 md:p-4 rounded-none w-full focus:border-[#333] outline-none transition-colors duration-200 text-sm cursor-pointer";

const labelClass =
  "text-[10px] font-semibold uppercase tracking-widest text-[#555] block mb-1.5 md:mb-2";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("Corporate / Business");
  const [websiteLink, setWebsiteLink] = useState("");
  const [improvement, setImprovement] = useState("");
  const [budget, setBudget] = useState("");
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (!name.trim()) { setErrorMessage("Please enter your name."); setStatus("error"); return; }
    if (!email.trim() || !email.includes("@")) { setErrorMessage("Please enter a valid email address."); setStatus("error"); return; }
    if (!businessName.trim()) { setErrorMessage("Please enter your business name."); setStatus("error"); return; }
    if (!websiteLink.trim()) { setErrorMessage("Please enter your website or Instagram link."); setStatus("error"); return; }
    if (!improvement.trim()) { setErrorMessage("Please tell us what you want improved."); setStatus("error"); return; }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mdajonkr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, businessName, businessType, websiteLink, improvement, budget: budget || "Not provided" }),
      });

      if (response.ok) {
        setStatus("success");
        setName(""); setEmail(""); setBusinessName(""); setBusinessType("Corporate / Business");
        setWebsiteLink(""); setImprovement(""); setBudget("");
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
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-24 md:pt-40 pb-20 md:pb-32">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.08]">
            Request Free Concept
          </h1>
          <p className="text-base sm:text-lg text-[#888] leading-relaxed max-w-2xl mx-auto">
            We build free homepage concepts for businesses that are a good fit. Fill out the details below so we understand your current presence and what needs improving.
          </p>
          <div className="mt-8 p-4 border border-[#1a1a1a] bg-[#050505] max-w-xl mx-auto inline-block">
             <p className="text-xs text-[#555] font-mono leading-relaxed">
               <strong className="text-white">Note:</strong> Free concepts are offered where there is a clear fit and enough information to create a useful direction.
             </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="border border-[#1a1a1a] bg-[#050505]">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-24 px-10 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-white flex items-center justify-center mb-8">
                    <Check className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Request Sent</h3>
                  <p className="text-[#888] text-base max-w-md mx-auto mb-10 leading-relaxed">
                    Thank you. We&apos;ll review your business and get back to you within 24-48 hours with next steps.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="border border-[#333] text-[#888] text-[11px] tracking-widest uppercase px-8 py-4 hover:border-white hover:text-white transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 md:p-12 space-y-6 md:space-y-8"
                >
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
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
                    <div>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <label className={labelClass}>Business Name</label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Velvet Studio"
                        disabled={status === "submitting"}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Business Type</label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        disabled={status === "submitting"}
                        className={selectClass}
                      >
                        <option value="Tattoo Studio">Tattoo Studio</option>
                        <option value="Salon / Barber / Beauty">Salon / Barber / Beauty</option>
                        <option value="Photographer / Creative">Photographer / Creative</option>
                        <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                        <option value="Corporate / Business">Corporate / Business</option>
                        <option value="Other Local Service">Other Local Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Website or Instagram Link</label>
                    <input
                      type="url"
                      value={websiteLink}
                      onChange={(e) => setWebsiteLink(e.target.value)}
                      placeholder="https://instagram.com/yourbusiness"
                      disabled={status === "submitting"}
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>What do you want improved?</label>
                    <textarea
                      rows={4}
                      value={improvement}
                      onChange={(e) => setImprovement(e.target.value)}
                      placeholder="e.g. My current site looks outdated, I'm only using Instagram, I want to look more premium..."
                      disabled={status === "submitting"}
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Budget Range <span className="text-[#444] normal-case tracking-normal">(optional)</span>
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      disabled={status === "submitting"}
                      className={selectClass}
                    >
                      <option value="">Select a range...</option>
                      <option value="£600 - £900 (Landing Page)">£600 - £900 (Landing Page)</option>
                      <option value="£900 - £1,500 (Multi-Page)">£900 - £1,500 (Multi-Page)</option>
                      <option value="£1,500+ (Advanced)">£1,500+ (Advanced)</option>
                    </select>
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    disabled={status === "submitting"}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full bg-white text-black font-semibold text-[11px] tracking-widest uppercase py-5 mt-4 hover:bg-[#e8e8e8] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Request Free Concept"
                    )}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
