"use client";

import Link from "next/link";
import FadeInUp from "@/components/FadeInUp";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <FadeInUp>
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] uppercase font-mono tracking-widest text-amber-400 mb-6">
            UK GDPR &amp; PECR COMPLIANCE
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-medium mb-6">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm mb-12 font-mono">Effective Date: August 2026 | Document Ref: UK-GDPR-PRIV-002</p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="space-y-12 text-zinc-300 font-light leading-relaxed text-base md:text-lg border-t border-white/10 pt-10">
            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">1. Data Controller &amp; Overview</h2>
              <p className="mb-4">
                Veltris Studio (&quot;Veltris&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) acts as Data Controller for personal data collected through <strong className="text-white">www.veltris.uk</strong>. We operate in full alignment with the United Kingdom Data Protection Act 2018, UK General Data Protection Regulation (UK GDPR), the Privacy and Electronic Communications Regulations (PECR), and international privacy frameworks spanning the United States, Canada, and Australia.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">2. Information We Collect &amp; Sources</h2>
              <div className="space-y-4">
                <div className="bg-zinc-900/40 p-6 rounded-2xl border border-white/5">
                  <h3 className="font-medium text-white text-base mb-2">A. Contact Form Submissions</h3>
                  <p className="text-zinc-400 text-sm">
                    When you submit a project enquiry via our contact form, we collect your name, work email address, business name, current website URL (if provided), and your project improvement notes.
                  </p>
                </div>
                <div className="bg-zinc-900/40 p-6 rounded-2xl border border-white/5">
                  <h3 className="font-medium text-white text-base mb-2">B. Technical &amp; Device Analytics</h3>
                  <p className="text-zinc-400 text-sm">
                    IP address (anonymized), browser user agent, operating system, referrer URL, and interaction metrics. Analytics scripts are strictly blocked until explicit consent is granted.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">3. Lawful Basis for Processing</h2>
              <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-base">
                <li><strong className="text-white font-medium">Legitimate Interests (Art 6(1)(f) UK GDPR):</strong> To respond to inbound project enquiries, evaluate website scope, and protect against security abuse.</li>
                <li><strong className="text-white font-medium">Consent (Art 6(1)(a) UK GDPR / PECR):</strong> For non-essential analytics and performance tracking, activated only via our Cookie Preference Banner.</li>
                <li><strong className="text-white font-medium">Contractual Necessity (Art 6(1)(b) UK GDPR):</strong> To perform custom website design and build engagements upon agreed terms.</li>
              </ul>
            </section>

            <section className="bg-zinc-900/50 p-8 rounded-3xl border border-amber-500/20">
              <h2 className="font-playfair text-2xl font-medium text-amber-400 mb-4">4. International Data Transfers</h2>
              <p className="text-zinc-300 text-base leading-relaxed mb-4">
                In operating our boutique studio, founder communications, project briefs, and technical reviews may be processed outside the United Kingdom and European Economic Area (EEA), including secure processing facilities in <strong className="text-white font-semibold">Pakistan</strong>.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Pursuant to Article 46 of the UK GDPR, all international transfers are protected using Standard Contractual Clauses (SCCs), International Data Transfer Agreements (IDTA), strict TLS 1.3 encryption in transit, and AES-256 encryption at rest to guarantee that data receives equivalent legal protection as within the UK.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">5. Your Legal Rights (UK GDPR)</h2>
              <p className="mb-4">You have the following statutory rights regarding your personal data:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-zinc-900/30 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">Right to Access</strong>
                  Request a copy of all personal records held about you.
                </div>
                <div className="p-4 bg-zinc-900/30 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">Right to Erasure (&quot;Right to be Forgotten&quot;)</strong>
                  Request complete deletion of your personal records.
                </div>
                <div className="p-4 bg-zinc-900/30 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">Right to Rectification</strong>
                  Correct inaccurate or incomplete contact records.
                </div>
                <div className="p-4 bg-zinc-900/30 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">Right to Withdraw Consent</strong>
                  Revoke cookie or tracking consent instantly via our cookie banner.
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">6. Contact Data Protection Officer</h2>
              <p>
                To exercise any privacy rights or submit inquiries, contact our studio directly at{" "}
                <a href="mailto:muhammad@veltris.uk" className="text-amber-400 underline underline-offset-4">
                  muhammad@veltris.uk
                </a>. You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">ico.org.uk</a>.
              </p>
            </section>
          </div>
        </FadeInUp>

        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            ← Return to Home
          </Link>
          <Link href="/cookie-policy" className="text-sm font-semibold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors">
            View Cookie Policy →
          </Link>
        </div>
      </div>
    </main>
  );
}
