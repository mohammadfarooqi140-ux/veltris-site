"use client";

import Link from "next/link";
import FadeInUp from "@/components/FadeInUp";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <FadeInUp>
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] uppercase font-mono tracking-widest text-zinc-400 mb-6">
            TERMS & COOKIES
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-medium mb-6">Terms of Service & Cookies</h1>
          <p className="text-zinc-500 text-sm mb-12 font-mono">Last updated: August 2026</p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="space-y-10 text-zinc-300 font-light leading-relaxed text-base md:text-lg border-t border-white/10 pt-10">
            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">1. Scope of Engagement</h2>
              <p>
                Veltris is a digital studio. Services encompass website strategy, positioning clarity, responsive interface design, and front end development for businesses where trust and conversion matter. Final digital assets and codebases are transferred to the client upon full payment.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">2. Intellectual Property</h2>
              <p>
                Clients retain full ownership of all proprietary data, brand assets, and trade secrets provided. Upon completion, full copyright and code ownership of the customized web architecture passes to the client.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">3. Cookie Policy</h2>
              <p className="mb-4">
                Our site uses essential technical cookies to ensure safe navigation, CSRF protection, and responsive session performance:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-base">
                <li><strong className="text-white font-normal">Essential Cookies:</strong> Required for page routing, security tokens, and state preservation.</li>
                <li><strong className="text-white font-normal">No Ad Tracking:</strong> We do not deploy third-party advertising cookies or sell browsing behavior.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-medium text-white mb-4">4. Limitation of Liability</h2>
              <p>
                Veltris provides digital strategy and website design services. While our builds follow strict clarity, conversion, and layout standards, individual commercial results and enquiry volumes depend on the client&apos;s broader market operations.
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
