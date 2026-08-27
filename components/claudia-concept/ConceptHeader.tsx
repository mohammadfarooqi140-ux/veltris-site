"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function ConceptHeader() {
  return (
    <header className="w-full relative z-40 bg-[#F5F1E9]/90 backdrop-blur-md border-b border-[#332E28]/10 text-[#332E28] transition-all">
      {/* Top concept banner */}
      <div className="w-full bg-[#E9E4DA] border-b border-[#332E28]/10 px-4 sm:px-8 py-2 text-center">
        <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#332E28]/80 font-medium">
          CONCEPT STUDY 01 &nbsp;|&nbsp; NOT COMMISSIONED &nbsp;|&nbsp; VISUAL EXPLORATION BY VELTRIS
        </p>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
        {/* Left: Back to Veltris Work */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#332E28]/70 hover:text-[#332E28] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Veltris Work</span>
        </Link>

        {/* Center: Concept Wordmark */}
        <div className="text-center">
          <span className="font-playfair text-lg sm:text-2xl font-medium tracking-tight text-[#332E28] block">
            CLAUDIA DORSCH
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.28em] text-[#70785B] uppercase block -mt-0.5">
            INTERIOR DESIGN CONCEPT
          </span>
        </div>

        {/* Right: Discuss Project link */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-[#332E28] bg-[#E9E4DA] hover:bg-[#332E28] hover:text-[#F5F1E9] px-4 py-2 rounded-full transition-all border border-[#332E28]/15"
        >
          <span>Discuss Project</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </header>
  );
}
