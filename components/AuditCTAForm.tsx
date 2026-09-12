"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Loader2, ArrowRight, CheckCircle2, Clock, Sparkles, ShieldCheck } from "lucide-react";

const FRUSTRATION_OPTIONS = [
  "Outdated or doesn't match our real standard",
  "Layout feels cramped or broken on mobile",
  "Visitors browse but bounce before enquiring",
  "Re-positioning for higher-value clients",
];

export default function AuditCTAForm() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [contactHandle, setContactHandle] = useState("");
  const [primaryFrustration, setPrimaryFrustration] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!websiteUrl.trim()) {
      setErrorMessage("Please enter your website URL.");
      setStatus("error");
      return;
    }
    if (!contactHandle.trim()) {
      setErrorMessage("Please enter your email address or Instagram handle.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      let response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          type: "audit",
          websiteUrl: websiteUrl.trim(),
          contactHandle: contactHandle.trim(),
          primaryFrustration: primaryFrustration || "Not specified",
        }),
      });

      if (!response.ok && response.status === 404) {
        response = await fetch("https://formspree.io/f/mdajonkr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "Free 2-Point Mobile Spacing & Layout Audit Request",
            websiteUrl: websiteUrl.trim(),
            contactHandle: contactHandle.trim(),
            primaryFrustration: primaryFrustration || "Not specified",
            requestType: "Free 2-Point Mobile Spacing & Layout Audit",
          }),
        });
      }

      if (response.ok) {
        setStatus("success");
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(data?.error || "Unable to submit audit request. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      console.error("Audit submission error:", err);
      try {
        const fallbackRes = await fetch("https://formspree.io/f/mdajonkr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "Free 2-Point Mobile Spacing & Layout Audit Request",
            websiteUrl: websiteUrl.trim(),
            contactHandle: contactHandle.trim(),
            primaryFrustration: primaryFrustration || "Not specified",
          }),
        });
        if (fallbackRes.ok) {
          setStatus("success");
          return;
        }
      } catch {
        // ignore
      }
      setErrorMessage("Network error occurred. Please try again or reach out directly to muhammad@veltris.uk.");
      setStatus("error");
    }
  };

  const resetForm = () => {
    setWebsiteUrl("");
    setContactHandle("");
    setPrimaryFrustration("");
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-surface/90 border border-border-subtle max-w-xl mx-auto text-left space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/40 text-accent flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase block">
              Diagnostic Confirmed
            </span>
            <h3 className="font-playfair text-2xl font-medium text-ink">
              Audit Request Received
            </h3>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-paper/60 border border-border-subtle space-y-3 text-xs text-ink-muted">
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-ink font-medium">Delivery Timing:</strong> Within 24–48 hours directly to your inbox or DM.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-ink font-medium">Delivery Format:</strong> A single high-resolution red-line markup screenshot detailing the 2 primary spacing &amp; layout points hurting conversion.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-ink font-medium">Zero Sales Pressure:</strong> Conducted personally by Muhammad, Founder and Principal. No unsolicited sales calls, no automated reports.
            </p>
          </div>
        </div>

        <p className="text-ink-muted text-xs font-light leading-relaxed">
          If the diagnosis is helpful, you are welcome to invite a conversation about a complete 10-day rebuild. If not, the diagnostic red-lines are entirely yours to keep.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-subtle">
          <Link
            href="/work"
            className="text-xs font-mono uppercase tracking-wider text-accent hover:underline underline-offset-4"
          >
            Explore Selected Work While Waiting →
          </Link>
          <button
            type="button"
            onClick={resetForm}
            className="text-[11px] font-mono uppercase tracking-wider text-ink-dim hover:text-ink transition-colors"
          >
            Submit Another URL
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl mx-auto space-y-5 text-left">
      <div>
        <label
          htmlFor="auditWebsiteUrl"
          className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2 font-medium"
        >
          Your Website URL <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="auditWebsiteUrl"
          name="websiteUrl"
          required
          aria-required="true"
          autoCapitalize="none"
          autoCorrect="off"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          placeholder="yourcompany.co.uk"
          className="w-full bg-paper border border-border-subtle text-ink px-4 py-3.5 rounded-xl text-base sm:text-sm placeholder:text-ink-dim/60 focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 transition-all outline-none min-h-[48px]"
        />
      </div>

      <div>
        <label
          htmlFor="auditContactHandle"
          className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2 font-medium"
        >
          Your Email Address or Instagram Handle <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="auditContactHandle"
          name="contactHandle"
          required
          aria-required="true"
          autoCapitalize="none"
          autoCorrect="off"
          value={contactHandle}
          onChange={(e) => setContactHandle(e.target.value)}
          placeholder="name@company.com or @yourhandle"
          className="w-full bg-paper border border-border-subtle text-ink px-4 py-3.5 rounded-xl text-base sm:text-sm placeholder:text-ink-dim/60 focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 transition-all outline-none min-h-[48px]"
        />
      </div>

      {/* Move 3: Optional Qualification Context */}
      <div>
        <span className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2 font-medium">
          Primary Current Frustration <span className="text-ink-dim font-normal lowercase">(optional)</span>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {FRUSTRATION_OPTIONS.map((option) => {
            const isSelected = primaryFrustration === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setPrimaryFrustration(isSelected ? "" : option)}
                className={`text-left p-3 rounded-xl border text-xs transition-all leading-snug min-h-[44px] flex items-center justify-between ${
                  isSelected
                    ? "bg-accent/15 border-accent text-ink font-medium"
                    : "bg-paper/80 border-border-subtle text-ink-muted hover:border-border hover:text-ink"
                }`}
                aria-pressed={isSelected}
              >
                <span>{option}</span>
                <span
                  className={`w-2 h-2 rounded-full flex-shrink-0 ml-2 ${
                    isSelected ? "bg-accent" : "bg-border-subtle"
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
      </div>

      {status === "error" && errorMessage && (
        <div
          className="p-3.5 rounded-xl bg-red-950/40 border border-red-900/50 text-xs text-red-300 font-mono"
          role="alert"
          aria-live="assertive"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-accent text-zinc-950 font-semibold min-h-[52px] py-4 px-8 rounded-xl text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:bg-amber-400 active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Request...</span>
          </>
        ) : (
          <>
            <span>Request Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Move 4: Repaired Privacy Sentence */}
      <p className="text-[11px] text-ink-dim font-light text-center leading-relaxed pt-2">
        Your details are used solely to deliver your visual audit. See our{" "}
        <Link
          href="/privacy-policy"
          className="text-ink-muted hover:text-ink underline underline-offset-2 transition-colors"
        >
          Privacy Policy
        </Link>{" "}
        for details.
      </p>
    </form>
  );
}
