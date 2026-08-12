"use client";

import Link from "next/link";
import FadeInUp from "@/components/FadeInUp";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <FadeInUp>
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] uppercase font-mono tracking-widest text-zinc-400 mb-6">
            LEGAL & COMPLIANCE
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-medium mb-6">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm mb-12 font-mono">Last updated: August 2026</p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="space-y-10 text-zinc-300 font-light leading-relaxed text-base md:text-lg border-t border-white/10 pt-10">
            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                At Veltris Pitch Deck Studio, we respect your privacy and process data in strict accordance with applicable data privacy regulations (including GDPR).
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-base">
                <li><strong className="text-white font-normal">Contact Information:</strong> Name, professional email address, company name, and pitch stage provided when submitting project inquiries.</li>
                <li><strong className="text-white font-normal">Project Briefs:</strong> Non-confidential background details submitted via our contact forms. All client materials shared post-engagement are governed by mutual Non-Disclosure Agreements (NDAs).</li>
                <li><strong className="text-white font-normal">Usage & Telemetry:</strong> Standard non-identifiable web analytics (IP address, browser type, device details) used solely to ensure security and site optimization.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">2. How We Use Your Information</h2>
              <p>
                Your information is used strictly to communicate regarding deck engagements, scope proposals, and studio deliverables. We never sell, rent, or trade founder information to third parties or marketing platforms.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">3. Data Protection & Confidentiality</h2>
              <p>
                All investor presentations, financial models, and strategic narratives shared with Veltris are treated with institutional-grade confidentiality. Data transmission occurs via encrypted channels (TLS 1.3).
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">4. Cookies & Tracking</h2>
              <p>
                We use minimal, essential cookies necessary for site security, navigation, and performance. We do not use intrusive third-party cross-site advertising cookies.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">5. Contact Us</h2>
              <p>
                For data access requests or privacy inquiries, contact us directly at{" "}
                <a href="mailto:hello@veltris.uk" className="text-amber-400 underline underline-offset-4">hello@veltris.uk</a>.
              </p>
            </section>
          </div>
        </FadeInUp>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link href="/" className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            ← Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
