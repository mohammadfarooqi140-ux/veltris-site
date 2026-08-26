"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Shield, ArrowRight } from "lucide-react";

// ─── Shared field classes ─────────────────────────────────────────────────────

const fieldClass =
  "bg-surface border border-border-subtle text-ink p-4 md:p-5 rounded-2xl w-full focus:border-border outline-none transition-all duration-300 text-sm placeholder:text-ink-dim";

const labelClass =
  "text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-ink-dim block mb-3 pl-1";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clinicStudioName, setClinicStudioName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [primaryMobileIssue, setPrimaryMobileIssue] = useState("");
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Get current month formatted (e.g., September)
  const currentMonth = useMemo(() => {
    return new Intl.DateTimeFormat("en-GB", { month: "long" }).format(new Date());
  }, []);

  const handleSubmit = async () => {
    if (!name.trim()) { setErrorMessage("Please enter your name."); setStatus("error"); return; }
    if (!email.trim() || !email.includes("@")) { setErrorMessage("Please enter a valid email address."); setStatus("error"); return; }
    if (!clinicStudioName.trim()) { setErrorMessage("Please enter your clinic or studio name."); setStatus("error"); return; }
    if (!primaryMobileIssue.trim()) { setErrorMessage("Please describe your primary mobile or conversion issue."); setStatus("error"); return; }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mdajonkr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ 
          name, 
          email, 
          clinicStudioName, 
          websiteUrl: websiteUrl.trim() || "Not Provided", 
          primaryMobileIssue 
        }),
      });

      if (response.ok) {
        setStatus("success");
        setName(""); 
        setEmail(""); 
        setClinicStudioName(""); 
        setWebsiteUrl(""); 
        setPrimaryMobileIssue("");
      } else {
        const data = await response.json();
        setErrorMessage(data?.errors ? data.errors.map((err: any) => err.message).join(", ") : "Failed to submit. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please check your connection.");
      setStatus("error");
    }
  };

  return (
    <main className="bg-paper min-h-screen relative text-ink selection:bg-surface-raised selection:text-ink">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16 md:pb-24">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-border-subtle text-[10px] md:text-[11px] font-mono tracking-widest text-accent uppercase mb-6 backdrop-blur-md">
            <Shield className="w-3 h-3" />
            STRICT CAPACITY ALLOCATION // 3 CLIENTS PER MONTH
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-medium text-ink mb-6 tracking-tight leading-[1.08]">
            Secure Studio Availability.
          </h1>
          
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto font-light">
            Submit your practice details below. We audit active mobile viewports and respond with availability within 24 hours.
          </p>

          {/* Waitlist Callout Note */}
          <div className="mt-8 p-4 md:p-5 rounded-2xl bg-surface border border-border-subtle max-w-lg mx-auto inline-block">
            <p className="text-xs font-mono text-ink leading-relaxed text-center">
              <span className="text-accent font-semibold">Current Waitlist:</span> 2 Slots Remaining for {currentMonth}.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="bg-surface border border-border-subtle rounded-3xl p-8 md:p-12 relative z-10 shadow-2xl">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-20 px-6 flex flex-col items-center justify-center"
                >
                  <div className="w-14 h-14 bg-ink flex items-center justify-center mb-6 rounded-full">
                    <Check className="w-6 h-6 text-paper" />
                  </div>
                  <h3 className="text-3xl font-playfair font-medium text-ink mb-4">Application Received.</h3>
                  <p className="text-ink-muted text-base max-w-md mx-auto mb-10 leading-relaxed font-light">
                    We will review your platform architecture and respond within 24 business hours regarding availability for {currentMonth}.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="border border-border-subtle rounded-full text-ink-muted text-[11px] font-mono tracking-widest uppercase px-8 py-3.5 hover:border-ink hover:text-ink transition-all duration-300"
                  >
                    Submit Another Inquiry
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
                        placeholder="Dr. Julian Vance / Robert Thorne"
                        disabled={status === "submitting"}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Work Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="julian@vanceclinic.co.uk"
                        disabled={status === "submitting"}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <label className={labelClass}>Clinic / Studio Name</label>
                      <input
                        type="text"
                        value={clinicStudioName}
                        onChange={(e) => setClinicStudioName(e.target.value)}
                        placeholder="Vance Aesthetics / Thorne Architecture"
                        disabled={status === "submitting"}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Current Website URL</label>
                      <input
                        type="text"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="https://www.yourdomain.co.uk"
                        disabled={status === "submitting"}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Primary Mobile Issue</label>
                    <textarea
                      value={primaryMobileIssue}
                      onChange={(e) => setPrimaryMobileIssue(e.target.value)}
                      placeholder="e.g. Booking drop-off on mobile, cookie wall blocking CTA button, broken portfolio layout on iPhone, or low-ticket brand perception..."
                      disabled={status === "submitting"}
                      className={`${fieldClass} resize-none`}
                      rows={5}
                    />
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    disabled={status === "submitting"}
                    className="flex items-center justify-center w-full text-center bg-ink text-paper min-h-[54px] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-zinc-200 active:scale-[0.98] mt-8 disabled:opacity-60 shadow-xl"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Validating &amp; Submitting...
                      </>
                    ) : (
                      <>
                        Submit Brief for Next Open Slot <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="mt-12 text-center text-xs font-mono text-ink-dim">
          Direct Principal Inquiries:{" "}
          <a href="mailto:muhammad@veltris.uk" className="text-accent hover:underline underline-offset-2">
            muhammad@veltris.uk
          </a>
        </div>

      </div>
    </main>
  );
}

