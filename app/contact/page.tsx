"use client";

import Link from "next/link";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";
import AuditCTAForm from "@/components/AuditCTAForm";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Free 2-Point Mobile Spacing & Layout Audit | Veltris",
  "url": "https://www.veltris.uk/contact",
  "description":
    "Request a free 2-point mobile spacing and layout audit from Veltris. Muhammad will personally review your website's mobile presentation.",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-paper text-ink pt-32 pb-24 relative selection:bg-surface-raised selection:text-ink">
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Context & Direct Contact */}
            <div className="lg:col-span-6">
              <FadeInUp>
                <span className="text-[11px] font-mono tracking-widest text-accent uppercase block mb-4">
                  Frictionless Visual Audit
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-medium tracking-tight mb-8 leading-[1.1] text-ink">
                  Request a Free 2-Point Mobile Spacing &amp; Layout Audit
                </h1>

                <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-8">
                  Muhammad will personally review your current website&apos;s mobile presentation. We will email or DM you a single, annotated red-line markup image showing exactly where layout or spacing bugs are causing premium clients to bounce before booking. No phone calls, no videos, no obligation.
                </p>

                <div className="space-y-4 text-xs text-ink-muted font-light border-t border-border-subtle pt-6 mb-8">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <p>
                      Every audit is performed directly by Muhammad, Founder and Principal.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <p>
                      Zero spam, zero sales pressure. Just pure visual diagnostics sent straight to your inbox or DM.
                    </p>
                  </div>
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

            {/* Right Column: Branded 2-Point Audit Form */}
            <div className="lg:col-span-6">
              <FadeInUp delay={0.1}>
                <div className="bg-surface border border-border-subtle rounded-3xl p-8 md:p-10 shadow-2xl relative">
                  <AuditCTAForm />

                  <p className="text-[11px] text-ink-dim font-light text-center leading-relaxed pt-6">
                    Your details are used solely to deliver your visual audit. See our{" "}
                    <Link
                      href="/privacy"
                      className="text-ink-muted hover:text-ink underline underline-offset-2"
                    >
                      Privacy Policy
                    </Link>{" "}
                    for details.
                  </p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
