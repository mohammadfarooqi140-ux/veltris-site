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

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-medium tracking-tight mb-6 leading-[1.1] text-ink">
                  Request a Free 2-Point Mobile Spacing &amp; Layout Audit
                </h1>

                <p className="text-ink-muted text-base sm:text-lg font-light leading-relaxed mb-8">
                  Muhammad will personally review your current website&apos;s mobile presentation. We will email or DM you a single, annotated red-line markup image showing exactly where layout or spacing bugs are causing premium clients to bounce before booking.
                </p>

                {/* Move 2: Expectation Block (Scope, Format, Timing, Next Step) */}
                <div className="space-y-4 rounded-2xl bg-surface/60 border border-border-subtle p-6 mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold block">
                    Audit Expectations &amp; Route
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-paper/70 border border-border-subtle">
                      <span className="font-mono text-[10px] text-ink-dim uppercase block mb-1">01 / Scope</span>
                      <strong className="text-ink block font-medium mb-1">Two Critical Mobile Friction Points</strong>
                      <p className="text-ink-muted font-light leading-relaxed">
                        Pinpoints layout crowding, baseline misalignment, or tap-target issues. No 40-page fluff.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-paper/70 border border-border-subtle">
                      <span className="font-mono text-[10px] text-ink-dim uppercase block mb-1">02 / Format</span>
                      <strong className="text-ink block font-medium mb-1">Annotated Red-Line Markup</strong>
                      <p className="text-ink-muted font-light leading-relaxed">
                        A single clear screenshot showing precisely what is broken and why it hurts trust.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-paper/70 border border-border-subtle">
                      <span className="font-mono text-[10px] text-ink-dim uppercase block mb-1">03 / Timing</span>
                      <strong className="text-ink block font-medium mb-1">Within 24–48 Hours</strong>
                      <p className="text-ink-muted font-light leading-relaxed">
                        Delivered straight to your inbox or DM. Quick turnaround, zero waiting in sales queues.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-paper/70 border border-border-subtle">
                      <span className="font-mono text-[10px] text-ink-dim uppercase block mb-1">04 / Route After</span>
                      <strong className="text-ink block font-medium mb-1">Zero Obligation</strong>
                      <p className="text-ink-muted font-light leading-relaxed">
                        If aligned, discuss a 10-day rebuild. If not, the diagnostic markup is entirely yours to keep.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-ink-muted font-light mb-8">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <p>
                      Every audit is performed directly by Muhammad, Founder and Principal.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <p>
                      Zero spam, zero sales pressure. Pure visual diagnostics without unsolicited phone calls.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-surface/40 border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ink-dim block">
                      Prefer direct discussion?
                    </span>
                    <span className="text-xs text-ink-muted font-light">
                      Send project briefs or RFP materials directly
                    </span>
                  </div>
                  <a
                    href="mailto:muhammad@veltris.uk"
                    className="text-xs font-mono text-accent hover:underline underline-offset-2"
                  >
                    muhammad@veltris.uk →
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right Column: Branded 2-Point Audit Form */}
            <div className="lg:col-span-6">
              <FadeInUp delay={0.1}>
                <div className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative">
                  <div className="mb-6 pb-4 border-b border-border-subtle">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold block mb-1">
                      Step 1 of 1
                    </span>
                    <h2 className="font-playfair text-xl sm:text-2xl text-ink font-medium">
                      Enter Your Details
                    </h2>
                    <p className="text-ink-dim text-xs font-light mt-1">
                      No password, credit card, or commitment required.
                    </p>
                  </div>
                  <AuditCTAForm />
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
