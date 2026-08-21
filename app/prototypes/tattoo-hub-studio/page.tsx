"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Monitor, Smartphone } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";

export default function TattooHubStudioPrototypePage() {
  const [deviceView, setDeviceView] = useState<"desktop" | "mobile">("desktop");

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#B38E46] selection:text-black pt-28 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#B38E46]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* BACK LINK */}
        <div className="mb-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Work
          </Link>
        </div>

        {/* PAGE HEADER */}
        <div className="max-w-3xl mb-16">
          <FadeInUp>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C5A880] mb-4 inline-block">
              Website Prototype Showcase · Veltris Proof
            </span>
            <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6 text-white leading-tight">
              Tattoo Hub Studio Prototype
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed mb-8">
              A dark, editorial, cinematic landing page for Bogdan Vodă&apos;s private atelier at Woodend Mill, Mossley. Dedicated to large-scale black &amp; grey realism.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/tattoo-hub-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#B38E46] hover:text-white transition-all shadow-lg"
              >
                Open Fullscreen Prototype <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* View Toggle */}
              <div className="inline-flex items-center p-1 rounded-full bg-zinc-900 border border-white/10">
                <button
                  onClick={() => setDeviceView("desktop")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                    deviceView === "desktop" ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  Desktop
                </button>
                <button
                  onClick={() => setDeviceView("mobile")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                    deviceView === "mobile" ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  Mobile
                </button>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* PROTOTYPE MOCKUP CONTAINER */}
        <FadeInUp delay={0.2}>
          <div className="flex justify-center transition-all duration-300">
            {deviceView === "desktop" ? (
              /* Desktop Frame */
              <div className="w-full bg-[#0d0d0d] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser Bar */}
                <div className="flex items-center px-4 py-3 bg-[#141414] border-b border-white/5 gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto bg-zinc-900/80 border border-white/5 rounded-md px-4 py-1 text-[11px] font-mono text-zinc-500 max-w-sm w-full text-center truncate">
                    tattoohubstudio.veltris.uk
                  </div>
                </div>
                {/* Iframe content */}
                <div className="w-full h-[650px] md:h-[800px] bg-black">
                  <iframe
                    src="/tattoo-hub-studio"
                    title="Tattoo Hub Studio Prototype Preview"
                    className="w-full h-full border-none"
                  />
                </div>
              </div>
            ) : (
              /* Mobile Frame */
              <div className="w-[375px] bg-[#0d0d0d] border-[8px] border-[#262626] rounded-[40px] overflow-hidden shadow-2xl relative">
                {/* Phone Top Speaker Notch */}
                <div className="bg-[#141414] py-2 px-4 flex justify-center items-center border-b border-white/5">
                  <div className="w-16 h-4 bg-zinc-900 rounded-full flex items-center justify-center">
                    <div className="w-8 h-1 bg-zinc-700 rounded-full" />
                  </div>
                </div>
                {/* Mobile Iframe */}
                <div className="w-full h-[700px] bg-black">
                  <iframe
                    src="/tattoo-hub-studio"
                    title="Tattoo Hub Studio Mobile Prototype Preview"
                    className="w-full h-full border-none"
                  />
                </div>
              </div>
            )}
          </div>
        </FadeInUp>

        {/* FOOTER DISCLAIMER */}
        <div className="mt-28 pt-12 border-t border-white/5 text-center">
          <p className="text-xs text-zinc-500 font-mono tracking-wider">
            Live Prototype created by Veltris for Tattoo Hub Studio (Bogdan Vodă) · Portfolio Demonstration.
          </p>
        </div>

      </div>
    </main>
  );
}
