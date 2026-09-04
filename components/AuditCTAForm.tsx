"use client";

import { useState, FormEvent } from "react";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AuditCTAForm() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [contactHandle, setContactHandle] = useState("");
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
          }),
        });
        if (fallbackRes.ok) {
          setStatus("success");
          return;
        }
      } catch {
        // ignore
      }
      setErrorMessage("Network error occurred. Please try again or reach out directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-surface/80 border border-border-subtle max-w-xl mx-auto text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mx-auto mb-2">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-playfair text-2xl font-medium text-ink">
          Audit Request Received
        </h3>
        <p className="text-ink-muted text-sm font-light leading-relaxed">
          Muhammad will personally review your current website&apos;s mobile presentation. We will email or DM you a single, annotated red-line markup image showing exactly where layout or spacing bugs are causing premium clients to bounce before booking. No phone calls, no videos, no obligation.
        </p>
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
          Your Website URL <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="auditWebsiteUrl"
          name="websiteUrl"
          required
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          placeholder="yourcompany.co.uk"
          className="w-full bg-paper border border-border-subtle text-ink px-4 py-3.5 rounded-xl text-sm placeholder:text-ink-dim/60 focus:border-accent/70 transition-colors outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="auditContactHandle"
          className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2 font-medium"
        >
          Your Email Address or Instagram Handle <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="auditContactHandle"
          name="contactHandle"
          required
          value={contactHandle}
          onChange={(e) => setContactHandle(e.target.value)}
          placeholder="name@company.com or @yourhandle"
          className="w-full bg-paper border border-border-subtle text-ink px-4 py-3.5 rounded-xl text-sm placeholder:text-ink-dim/60 focus:border-accent/70 transition-colors outline-none"
        />
      </div>

      {status === "error" && errorMessage && (
        <div
          className="p-3.5 rounded-xl bg-red-950/40 border border-red-900/50 text-xs text-red-300 font-mono"
          role="alert"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-accent text-zinc-950 font-semibold min-h-[52px] py-4 px-8 rounded-xl text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:bg-amber-400 active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-accent/10"
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
    </form>
  );
}
