"use client";

import Link from "next/link";
import FadeInUp from "@/components/FadeInUp";
import { resetConsent } from "@/lib/cookieConsent";

export default function CookiePolicyPage() {
  const handleResetConsent = () => {
    resetConsent();
    window.location.reload();
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <FadeInUp>
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] uppercase font-mono tracking-widest text-amber-400 mb-6">
            PECR & COOKIES SPECIFICATION
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-medium mb-6">Cookie Policy</h1>
          <p className="text-zinc-500 text-sm mb-12 font-mono">Effective Date: August 2026 | Document Ref: UK-PECR-COOK-001</p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="space-y-12 text-zinc-300 font-light leading-relaxed text-base md:text-lg border-t border-white/10 pt-10">
            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your computer or mobile device when visiting <strong className="text-white">www.veltris.uk</strong>. Under PECR (Privacy and Electronic Communications Regulations), non-essential cookies require explicit, un-ticked opt-in consent before activation.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">2. Cookie Categories We Use</h2>
              
              <div className="space-y-6">
                {/* Category 1 */}
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-playfair text-xl font-medium text-white">Strictly Necessary Cookies</h3>
                    <span className="text-[10px] uppercase font-mono px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">Exempt from Consent</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">
                    Required for essential site security, session maintenance, CSRF protection, and storing your consent preferences.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-zinc-400 border-t border-white/5">
                      <thead>
                        <tr className="border-b border-white/5 text-zinc-300">
                          <th className="py-2 pr-4 font-semibold">Cookie Name</th>
                          <th className="py-2 pr-4 font-semibold">Purpose</th>
                          <th className="py-2 font-semibold">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4 font-mono text-white">veltris_cookie_consent_v1</td>
                          <td className="py-2 pr-4">Stores user privacy and consent preferences</td>
                          <td className="py-2">1 Year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Category 2 */}
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-playfair text-xl font-medium text-white">Analytics & Performance Cookies</h3>
                    <span className="text-[10px] uppercase font-mono px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">Opt-In Required</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">
                    Measures user journeys, page performance, and deck service interaction patterns (Google Analytics 4).
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-zinc-400 border-t border-white/5">
                      <thead>
                        <tr className="border-b border-white/5 text-zinc-300">
                          <th className="py-2 pr-4 font-semibold">Cookie Name</th>
                          <th className="py-2 pr-4 font-semibold">Purpose</th>
                          <th className="py-2 font-semibold">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4 font-mono text-white">_ga</td>
                          <td className="py-2 pr-4">Distinguishes unique site visitors</td>
                          <td className="py-2">2 Years</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4 font-mono text-white">_ga_*</td>
                          <td className="py-2 pr-4">Persists session state for Google Analytics 4</td>
                          <td className="py-2">2 Years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 text-center">
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">3. Withdraw or Change Consent</h2>
              <p className="text-zinc-400 text-sm mb-6 max-w-xl mx-auto">
                You can reset or adjust your cookie preferences at any time. Clicking the button below will clear saved preferences and reopen the consent selection banner.
              </p>
              <button
                onClick={handleResetConsent}
                className="px-6 py-3 rounded-full bg-amber-400 text-black text-xs font-semibold uppercase tracking-wider hover:bg-amber-300 transition-colors shadow-lg"
              >
                Reset Cookie Preferences Now
              </button>
            </section>
          </div>
        </FadeInUp>

        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            ← Return to Home
          </Link>
          <Link href="/privacy-policy" className="text-sm font-semibold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors">
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </main>
  );
}
