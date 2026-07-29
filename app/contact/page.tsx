"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

// ─── Shared field classes ─────────────────────────────────────────────────────

const fieldClass =
  "bg-zinc-900/40 border border-transparent text-white p-4 md:p-5 rounded-2xl w-full focus:bg-white/[0.03] outline-none transition-all duration-500 text-sm placeholder:text-zinc-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]";

const selectClass =
  "bg-zinc-900/40 border border-transparent text-white p-4 md:p-5 rounded-2xl w-full focus:bg-white/[0.03] outline-none transition-all duration-500 text-sm cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]";

const labelClass =
  "text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 block mb-3 pl-1";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("Corporate / Business");
  const [websiteLink, setWebsiteLink] = useState("");
  const [improvement, setImprovement] = useState("");
  
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
        body: JSON.stringify({ name, email, businessName, businessType, websiteLink, improvement }),
      });

      if (response.ok) {
        setStatus("success");
        setName(""); setEmail(""); setBusinessName(""); setBusinessType("Corporate / Business");
        setWebsiteLink(""); setImprovement("");
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
    <main className="bg-zinc-950 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-white mb-6 tracking-tight leading-[1.08]">
            Start your project
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Send your details and I will review whether a free homepage concept or an AI automation demo makes sense for your business.
          </p>
          <div className="mt-12 p-6 rounded-3xl bg-zinc-900/30 max-w-xl mx-auto inline-block shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
             <p className="text-xs text-zinc-400 leading-relaxed text-left">
               <strong className="text-white font-semibold">Note:</strong> No pressure. No commitment. If the business is a good fit, I will create a custom concept or demo before you decide.
             </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="rounded-[2.5rem] bg-zinc-900/30 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.4)] relative z-10 overflow-hidden">
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
                  <h3 className="text-3xl font-playfair font-bold text-white mb-4">Request Sent</h3>
                  <p className="text-zinc-400 text-base max-w-md mx-auto mb-10 leading-relaxed">
                    Thank you. We&apos;ll review your business and get back to you within 24-48 hours with next steps.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="border border-white/10 rounded-full text-zinc-400 text-[11px] tracking-widest uppercase px-8 py-4 hover:border-white hover:text-white transition-all duration-300"
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
                    <label className={labelClass}>What do you want us to help with?</label>
                    <textarea
                      rows={4}
                      value={improvement}
                      onChange={(e) => setImprovement(e.target.value)}
                      placeholder="e.g. Look more established, get more enquiries, or automate my manual admin tasks..."
                      disabled={status === "submitting"}
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    disabled={status === "submitting"}
                    className="flex items-center justify-center w-full text-center bg-white text-zinc-950 min-h-[56px] px-6 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-[0.98] mt-8 disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      "Send Request"
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
