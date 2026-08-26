"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers, CalendarCheck, ShieldCheck, CheckCircle2 } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

const services = [
  {
    num: "01",
    tag: "LUXURY ARCHITECTURE & INTERIORS",
    title: "Immersive Portfolio Systems",
    desc: "Built for luxury interior designers and architects. Ultra-high-resolution image delivery engineered for flawless mobile rendering without speed loss or text clipping.",
    icon: Layers,
    deliverables: [
      "Sub-second asset compression & adaptive retina loading",
      "Dynamic aspect-ratio locking across all mobile viewports",
      "Editorial print typography & typographic hierarchy",
      "Zero layout shifts (CLS < 0.01) during dynamic scrolling",
    ],
    status: "Active Practice",
  },
  {
    num: "02",
    tag: "PRIVATE HEALTHCARE & AESTHETICS",
    title: "Unified Booking Architecture",
    desc: "Custom Patient Intake & Reservation pipelines built for private aesthetics and medical clinics. Replaces fragmented forms and messy WhatsApp redirections with a luxury dashboard.",
    icon: CalendarCheck,
    deliverables: [
      "Frictionless patient reservation & consultation intake",
      "Direct calendar & EHR-compatible pipeline routing",
      "Elimination of broken third-party iframe overlays",
      "HIPAA/GDPR compliance-first UI architecture",
    ],
    status: "Active Practice",
  },
  {
    num: "03",
    tag: "TECHNICAL DIAGNOSTIC",
    title: "The Veltris Standard Audit",
    desc: "Deep technical evaluation of active digital assets to isolate layout collisions, compliance overlay blocks, and hidden code-integrity leaks.",
    icon: ShieldCheck,
    deliverables: [
      "Live viewport sovereignty & cookie wall occlusion analysis",
      "Codebase header hygiene & console error verification",
      "Conversion drop-off bottleneck mapping",
      "Executive remediation blueprint within 48 hours",
    ],
    status: "Diagnostic Protocol",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-paper text-ink pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* HERO SECTION */}
        <section className="mb-24 md:mb-32">
          <FadeInUp className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-border-subtle text-[10px] md:text-[11px] font-mono tracking-widest text-ink-dim uppercase mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              BESPOKE STUDIO CAPABILITIES // UK
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-medium tracking-tight mb-8 max-w-4xl leading-[1.08] text-ink">
              Specialized Conversion Architecture.
            </h1>
            <p className="text-ink-muted text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 font-light">
              We do not build generic template sites or operate at agency volume. Veltris engineers bespoke digital infrastructure exclusively for UK private clinics and luxury property developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16 md:justify-start justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold min-h-[52px] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-zinc-200 active:scale-[0.98] w-full sm:w-auto shadow-lg"
              >
                Check Studio Availability <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center bg-surface border border-border-subtle text-ink font-semibold min-h-[52px] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-surface-raised active:scale-[0.98] w-full sm:w-auto"
              >
                Private Engagements
              </Link>
            </div>
          </FadeInUp>
        </section>

        {/* SERVICES EXPANDED GRID */}
        <section className="mb-32">
          <FadeInUp>
            <div className="flex items-center justify-between border-b border-border-subtle pb-6 mb-12">
              <h2 className="font-playfair text-2xl sm:text-4xl font-medium text-ink">
                Practice Areas
              </h2>
              <span className="text-[11px] font-mono tracking-widest text-ink-dim uppercase">
                Strict Technical Standards
              </span>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <FadeInUp key={service.num} delay={idx * 0.1}>
                  <div className="bg-surface/50 border border-border-subtle rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full hover:bg-surface-raised/40 transition-all duration-300 group">
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between pb-6 mb-6 border-b border-border-subtle/70">
                        <span className="text-xs font-mono font-semibold text-accent tracking-widest">
                          {service.num}
                        </span>
                        <span className="text-[10px] font-mono text-ink-dim uppercase tracking-wider bg-surface px-3 py-1 rounded-full border border-border-subtle">
                          {service.status}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-widest text-ink-dim block mb-2">
                        {service.tag}
                      </span>
                      
                      <h3 className="text-2xl font-playfair font-medium text-ink mb-4 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-ink-muted text-sm leading-relaxed font-light mb-8">
                        {service.desc}
                      </p>

                      {/* Deliverables List */}
                      <div className="mb-8 pt-6 border-t border-border-subtle/40">
                        <h4 className="text-[10px] font-mono uppercase tracking-widest text-ink-dim mb-4 font-semibold">
                          Technical Specifications
                        </h4>
                        <ul className="space-y-3">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start text-xs text-ink-muted font-light">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent mr-2.5 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                      <span className="text-xs font-mono text-ink-dim">Strict Quota</span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-ink hover:text-accent transition group"
                      >
                        <span>Enquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="text-center pt-20 border-t border-border-subtle relative">
          <FadeInUp>
            <div className="bg-surface/80 border border-border-subtle rounded-3xl p-8 sm:p-12 md:p-16 max-w-4xl mx-auto">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-dim mb-4 block">
                Capacity Allocation
              </span>
              <h2 className="text-3xl sm:text-5xl font-playfair font-medium text-ink mb-6 leading-tight">
                Secure Studio Availability.
              </h2>
              <p className="text-ink-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                We accept only 1 exclusive brand engagement per month to protect uncompromising code integrity and direct principal involvement.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold min-h-[52px] px-10 py-4 rounded-full text-xs uppercase tracking-[0.18em] transition hover:bg-zinc-200 active:scale-[0.98] shadow-lg"
              >
                Check Availability <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInUp>
        </section>

      </div>
    </main>
  );
}

