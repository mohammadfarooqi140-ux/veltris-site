"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Veltris",
  "url": "https://www.veltris.uk/contact",
  "description":
    "Discuss your website project with Veltris. We review each enquiry for fit and respond within one working day.",
  "mainEntity": {
    "@type": "ProfessionalService",
    "name": "Veltris",
    "url": "https://www.veltris.uk/",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "muhammad@veltris.uk",
      "contactType": "customer support",
      "availableLanguage": "English",
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    websiteUrl: "",
    projectGoal: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage("Please provide your name.");
      setStatus("error");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please provide a valid email address.");
      setStatus("error");
      return;
    }
    if (!formData.businessName.trim()) {
      setErrorMessage("Please provide your business name.");
      setStatus("error");
      return;
    }
    if (!formData.projectGoal.trim()) {
      setErrorMessage("Please describe what you would like to improve.");
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
          name: formData.name.trim(),
          email: formData.email.trim(),
          businessName: formData.businessName.trim(),
          websiteUrl: formData.websiteUrl.trim() || "Not Provided",
          projectGoal: formData.projectGoal.trim(),
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
            name: formData.name.trim(),
            email: formData.email.trim(),
            businessName: formData.businessName.trim(),
            websiteUrl: formData.websiteUrl.trim() || "Not Provided",
            projectGoal: formData.projectGoal.trim(),
          }),
        });
      }

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          businessName: "",
          websiteUrl: "",
          projectGoal: "",
        });
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(
          data?.error || data?.errors?.[0]?.message || "Something went wrong. Please try again or email muhammad@veltris.uk directly."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again or email muhammad@veltris.uk directly.");
      setStatus("error");
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-paper text-ink pt-32 pb-24 relative selection:bg-surface-raised selection:text-ink">
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Context & Editorial Copy */}
            <div className="lg:col-span-6">
              <FadeInUp>
                <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase block mb-6">
                  START A CONVERSATION
                </span>

                <h1 className="text-4xl sm:text-6xl font-playfair font-medium tracking-tight mb-8 leading-[1.08] text-ink">
                  Discuss your website.
                </h1>

                <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-8">
                  Tell us what you are looking to improve. We review each enquiry to ensure a strong fit and respond within one working day.
                </p>

                <div className="space-y-4 text-xs text-ink-muted font-light border-t border-border-subtle pt-6 mb-8">
                  <p>
                    We work with a limited number of businesses at a time so each project receives focused attention.
                  </p>
                  <p>
                    Every engagement is led directly by Muhammad, Founder and Principal.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-surface/50 border border-border-subtle">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-ink-dim block mb-2">
                    Direct Email Contact
                  </span>
                  <a
                    href="mailto:muhammad@veltris.uk"
                    className="text-sm font-mono text-accent hover:underline underline-offset-2"
                  >
                    muhammad@veltris.uk
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right Column: Semantic Form */}
            <div className="lg:col-span-6">
              <FadeInUp delay={0.1}>
                <div className="bg-surface border border-border-subtle rounded-3xl p-8 md:p-10 shadow-2xl relative">
                  {status === "success" ? (
                    <div className="text-center py-12">
                      <div className="w-12 h-12 rounded-full bg-surface-raised border border-border-subtle flex items-center justify-center mx-auto mb-6 text-accent">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-playfair text-2xl md:text-3xl font-medium text-ink mb-4">
                        Enquiry Received
                      </h3>
                      <p className="text-ink-muted text-base max-w-md mx-auto leading-relaxed mb-8 font-light">
                        Thank you for reaching out. Muhammad will review your details for fit and respond within one working day.
                      </p>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="text-xs font-mono uppercase tracking-widest text-ink-muted hover:text-ink transition-colors border-b border-border-subtle pb-1"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="text-[11px] font-mono uppercase tracking-wider text-ink-dim block mb-2"
                        >
                          Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="bg-paper border border-border-subtle text-ink px-4 py-3.5 rounded-xl w-full text-sm placeholder:text-ink-dim/60 focus:border-border transition-colors outline-none"
                        />
                      </div>

                      {/* Work Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="text-[11px] font-mono uppercase tracking-wider text-ink-dim block mb-2"
                        >
                          Work email <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@business.co.uk"
                          className="bg-paper border border-border-subtle text-ink px-4 py-3.5 rounded-xl w-full text-sm placeholder:text-ink-dim/60 focus:border-border transition-colors outline-none"
                        />
                      </div>

                      {/* Business Name */}
                      <div>
                        <label
                          htmlFor="businessName"
                          className="text-[11px] font-mono uppercase tracking-wider text-ink-dim block mb-2"
                        >
                          Business name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          autoComplete="organization"
                          required
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="Company or brand name"
                          className="bg-paper border border-border-subtle text-ink px-4 py-3.5 rounded-xl w-full text-sm placeholder:text-ink-dim/60 focus:border-border transition-colors outline-none"
                        />
                      </div>

                      {/* Website URL (Optional) */}
                      <div>
                        <label
                          htmlFor="websiteUrl"
                          className="text-[11px] font-mono uppercase tracking-wider text-ink-dim block mb-2"
                        >
                          Current website URL{" "}
                          <span className="text-ink-dim font-normal lowercase">(optional)</span>
                        </label>
                        <input
                          type="url"
                          id="websiteUrl"
                          name="websiteUrl"
                          autoComplete="url"
                          value={formData.websiteUrl}
                          onChange={handleChange}
                          placeholder="https://yourwebsite.co.uk"
                          className="bg-paper border border-border-subtle text-ink px-4 py-3.5 rounded-xl w-full text-sm placeholder:text-ink-dim/60 focus:border-border transition-colors outline-none"
                        />
                      </div>

                      {/* Project Goal */}
                      <div>
                        <label
                          htmlFor="projectGoal"
                          className="text-[11px] font-mono uppercase tracking-wider text-ink-dim block mb-2"
                        >
                          What would you like to improve? <span className="text-accent">*</span>
                        </label>
                        <textarea
                          id="projectGoal"
                          name="projectGoal"
                          rows={4}
                          required
                          value={formData.projectGoal}
                          onChange={handleChange}
                          placeholder="Describe what your current website is falling short on, and what you are looking to achieve."
                          className="bg-paper border border-border-subtle text-ink px-4 py-3.5 rounded-xl w-full text-sm placeholder:text-ink-dim/60 focus:border-border transition-colors outline-none resize-none"
                        />
                      </div>

                      {/* Error State */}
                      {status === "error" && errorMessage && (
                        <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-900/50 text-xs text-red-300 font-mono">
                          {errorMessage}
                        </div>
                      )}

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full flex items-center justify-center gap-2 bg-ink text-paper font-semibold min-h-[52px] py-4 rounded-xl text-xs uppercase tracking-[0.18em] hover:bg-zinc-200 transition-colors disabled:opacity-50"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Project Enquiry</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      {/* Helper Privacy Note */}
                      <p className="text-[11px] text-ink-dim font-light text-center leading-relaxed pt-2">
                        Your details are used only to respond to this enquiry. Please see the{" "}
                        <Link
                          href="/privacy"
                          className="text-ink-muted hover:text-ink underline underline-offset-2"
                        >
                          Privacy Policy
                        </Link>{" "}
                        for more information.
                      </p>
                    </form>
                  )}
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

