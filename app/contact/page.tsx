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
  const [companyName, setCompanyName] = useState("");
  const [raiseStage, setRaiseStage] = useState("Seed");
  const [raiseAmount, setRaiseAmount] = useState("£1M to £3M");
  const [deckType, setDeckType] = useState("Seed Deck");
  const [details, setDetails] = useState("");
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (!name.trim()) { setErrorMessage("Please enter your name."); setStatus("error"); return; }
    if (!email.trim() || !email.includes("@")) { setErrorMessage("Please enter a valid email address."); setStatus("error"); return; }
    if (!companyName.trim()) { setErrorMessage("Please enter your company name."); setStatus("error"); return; }
    if (!details.trim()) { setErrorMessage("Please tell us about your company."); setStatus("error"); return; }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mdajonkr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, companyName, raiseStage, raiseAmount, deckType, details }),
      });

      if (response.ok) {
        setStatus("success");
        setName(""); setEmail(""); setCompanyName(""); setRaiseStage("Seed");
        setRaiseAmount("£1M to £3M"); setDeckType("Seed Deck"); setDetails("");
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
    <main className="bg-black min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-white mb-6 tracking-tight leading-[1.08]">
            Start your deck.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Tell us about your raise and we will come back within 24 hours.
          </p>
          <div className="mt-12 p-6 rounded-3xl bg-zinc-900/30 max-w-xl mx-auto inline-block shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
             <p className="text-xs text-zinc-400 leading-relaxed text-left">
               No commitment required. We will review your brief, and if it is a fit we will jump on a short call to align on scope and timeline before anything moves.
             </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="bg-zinc-900/40 rounded-3xl p-8 md:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative z-10 overflow-hidden backdrop-blur-xl">
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
                  <div className="w-16 h-16 bg-white flex items-center justify-center mb-8 rounded-full">
                    <Check className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-white mb-4">Brief received.</h3>
                  <p className="text-zinc-400 text-base max-w-md mx-auto mb-10 leading-relaxed">
                    We will review your details and come back within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="border border-white/10 rounded-full text-zinc-400 text-[11px] tracking-widest uppercase px-8 py-4 hover:border-white hover:text-white transition-all duration-300"
                  >
                    Submit Another Brief
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 md:space-y-8"
                >
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-red-950/40 border border-red-900/50 text-red-400 p-4 text-xs font-mono overflow-hidden rounded-xl"
                      >
                        {errorMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <label className={labelClass}>Name</label>
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
                      <label className={labelClass}>Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@startup.com"
                        disabled={status === "submitting"}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Company Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Your Startup"
                      disabled={status === "submitting"}
                      className={fieldClass}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <label className={labelClass}>Raise Stage</label>
                      <select
                        value={raiseStage}
                        onChange={(e) => setRaiseStage(e.target.value)}
                        disabled={status === "submitting"}
                        className={selectClass}
                      >
                        <option value="Pre-Seed">Pre-Seed</option>
                        <option value="Seed">Seed</option>
                        <option value="Series A">Series A</option>
                        <option value="Series B">Series B</option>
                        <option value="Series C">Series C</option>
                        <option value="Not Raising Yet">Not Raising Yet</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Target Raise Amount</label>
                      <select
                        value={raiseAmount}
                        onChange={(e) => setRaiseAmount(e.target.value)}
                        disabled={status === "submitting"}
                        className={selectClass}
                      >
                        <option value="Under £500k">Under £500k</option>
                        <option value="£500k to £1M">£500k to £1M</option>
                        <option value="£1M to £3M">£1M to £3M</option>
                        <option value="£3M to £10M">£3M to £10M</option>
                        <option value="£10M+">£10M+</option>
                        <option value="Not Applicable">Not Applicable</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Deck Type Needed</label>
                    <select
                      value={deckType}
                      onChange={(e) => setDeckType(e.target.value)}
                      disabled={status === "submitting"}
                      className={selectClass}
                    >
                      <option value="Seed Deck">Seed Deck</option>
                      <option value="Series A Deck">Series A Deck</option>
                      <option value="Sales Deck">Sales Deck</option>
                      <option value="Investor Update">Investor Update</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Tell us about your company</label>
                    <textarea
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="We are building..."
                      disabled={status === "submitting"}
                      className={`${fieldClass} resize-none`}
                      rows={5}
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
                      "Send Brief →"
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
