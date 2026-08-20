"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

// ─── Shared field classes ─────────────────────────────────────────────────────

const fieldClass =
  "bg-surface border border-border-subtle text-ink p-4 md:p-5 rounded-2xl w-full focus:border-border outline-none transition-all duration-300 text-sm placeholder:text-ink-dim";

const selectClass =
  "bg-surface border border-border-subtle text-ink p-4 md:p-5 rounded-2xl w-full focus:border-border outline-none transition-all duration-300 text-sm cursor-pointer";

const labelClass =
  "text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-ink-dim block mb-3 pl-1";

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
    <main className="bg-paper min-h-screen relative text-ink">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-4">
            Direct Studio Inquiry
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-ink mb-6 tracking-tight leading-[1.08]">
            Start your deck.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
            Tell us about your raise and we will come back within 24 hours.
          </p>
          <p className="text-ink-dim text-xs font-mono mt-3">
            Or email us directly at{" "}
            <a href="mailto:muhammad@veltris.uk" className="text-accent hover:underline underline-offset-2">
              muhammad@veltris.uk
            </a>
          </p>
          <div className="mt-8 p-6 rounded-2xl bg-surface border border-border-subtle max-w-xl mx-auto inline-block">
             <p className="text-xs text-ink-muted leading-relaxed text-left">
               No commitment required. We will review your brief, and if it is a fit we will jump on a short call to align on scope and timeline before anything moves.
             </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="bg-surface border border-border-subtle rounded-3xl p-8 md:p-12 relative z-10">
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
                  <div className="w-14 h-14 bg-ink flex items-center justify-center mb-6 rounded-full">
                    <Check className="w-6 h-6 text-paper" />
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-ink mb-4">Brief received.</h3>
                  <p className="text-ink-muted text-base max-w-md mx-auto mb-10 leading-relaxed">
                    We will review your details and come back within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="border border-border-subtle rounded-full text-ink-muted text-[11px] font-mono tracking-widest uppercase px-8 py-3.5 hover:border-ink hover:text-ink transition-all duration-300"
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
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 md:space-y-8"
                >
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-red-950/30 border border-red-900/40 text-red-400 p-4 text-xs font-mono overflow-hidden rounded-xl"
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
                    className="flex items-center justify-center w-full text-center bg-ink text-paper min-h-[52px] px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition hover:bg-zinc-200 active:scale-[0.98] mt-8 disabled:opacity-60"
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

