"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import ConceptHeader from "@/components/claudia-concept/ConceptHeader";
import ConceptFooter from "@/components/claudia-concept/ConceptFooter";
import CanvasSequenceViewer from "@/components/claudia-concept/CanvasSequenceViewer";

export default function ClaudiaConceptClient() {
  const scrollToNarrative = () => {
    const target = document.getElementById("narrative-start");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative bg-[#F5F1E9] text-[#332E28] font-sans selection:bg-[#AD9670]/30 selection:text-[#332E28]"
      style={{
        backgroundColor: "#F5F1E9",
        color: "#332E28",
      }}
    >
      {/* 1. Sticky Concept Header with Exact Protocol Banner */}
      <ConceptHeader />

      {/* 2. Fixed Background Hardware-Accelerated Canvas Engine */}
      <div className="fixed inset-0 top-[90px] w-full h-[calc(100vh-90px)] pointer-events-none z-0 overflow-hidden">
        <CanvasSequenceViewer />
      </div>

      {/* 3. 500vh Scroll Narrative Track with Edge-Aligned Minimal Editorial Cards */}
      <div className="relative z-10 w-full" style={{ minHeight: "500vh" }}>
        
        {/* =========================================================================
            SECTION 1 (0-25% Scroll): THRESHOLD
        ========================================================================== */}
        <section className="min-h-[125vh] flex flex-col justify-between px-6 sm:px-12 pt-12 pb-24 max-w-7xl mx-auto">
          {/* Top Intro Notice */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E9E4DA]/90 backdrop-blur-md border border-[#332E28]/15 px-4 py-1.5 rounded-full shadow-sm">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#332E28]/90 font-medium">
                CONCEPT STUDY 01 &nbsp;|&nbsp; VISUAL EXPLORATION BY VELTRIS
              </span>
            </div>
          </div>

          {/* Minimal Editorial Card — Left Aligned */}
          <div className="max-w-xl my-auto py-8 bg-[#F5F1E9]/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#332E28]/15 shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#70785B] block mb-3 font-semibold">
              Section 01 · 0–25%
            </span>
            <h1 className="text-3xl sm:text-5xl font-playfair font-medium tracking-tight text-[#332E28] leading-[1.1] mb-4">
              Threshold
            </h1>
            <p className="text-[#332E28]/85 text-sm sm:text-base font-light leading-relaxed mb-6">
              Entering the spatial framework. A study exploring the balance of structural light and raw material boundaries.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToNarrative}
                className="inline-flex items-center gap-2 bg-[#332E28] text-[#F5F1E9] px-6 py-3 rounded-full text-xs font-mono uppercase tracking-[0.18em] hover:bg-[#292925] transition-all shadow-sm active:scale-98"
              >
                <span>Explore the journey</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E9E4DA] text-[#332E28] border border-[#332E28]/20 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-[0.18em] hover:bg-[#332E28] hover:text-[#F5F1E9] transition-all"
              >
                <span>Discuss a project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#332E28]/70 bg-[#E9E4DA]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#332E28]/10 max-w-fit">
            <Compass className="w-3.5 h-3.5 text-[#70785B]" />
            <span>Scroll smoothly to advance the 720-frame camera movement</span>
          </div>
        </section>

        {/* Anchor point */}
        <div id="narrative-start" />

        {/* =========================================================================
            SECTION 2 (25-50% Scroll): CITY
        ========================================================================== */}
        <section className="min-h-[125vh] flex items-center justify-end px-6 sm:px-12 py-24 max-w-7xl mx-auto">
          <div className="max-w-md bg-[#F5F1E9]/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#6B3F3D] border border-[#332E28]/15 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6B3F3D] font-bold">
                Section 02 · 25–50%
              </span>
              <span className="w-2 h-2 rounded-full bg-[#6B3F3D]" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-playfair font-medium text-[#332E28] leading-tight mb-4">
              City
            </h2>
            <p className="text-xs sm:text-sm text-[#332E28]/85 font-light leading-relaxed">
              Moving past structured dark timber cabinetry and narrow urban lines, anchored by a pale stone console.
            </p>
            <div className="mt-6 pt-4 border-t border-[#332E28]/10 flex items-center justify-between text-[11px] font-mono text-[#332E28]/60">
              <span>Palette: Deep Umber · Oxblood</span>
              <span className="text-[#6B3F3D] font-semibold">Urban Rhythm</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3 (50-75% Scroll): COAST
        ========================================================================== */}
        <section className="min-h-[125vh] flex items-center justify-start px-6 sm:px-12 py-24 max-w-7xl mx-auto">
          <div className="max-w-md bg-[#F5F1E9]/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#667D7B] border border-[#332E28]/15 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#667D7B] font-bold">
                Section 03 · 50–75%
              </span>
              <span className="w-2 h-2 rounded-full bg-[#667D7B]" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-playfair font-medium text-[#332E28] leading-tight mb-4">
              Coast
            </h2>
            <p className="text-xs sm:text-sm text-[#332E28]/85 font-light leading-relaxed">
              Transitions unfold toward expansive terrace openings, muted mineral blue layers, and daylight filtered through sheer linen.
            </p>
            <div className="mt-6 pt-4 border-t border-[#332E28]/10 flex items-center justify-between text-[11px] font-mono text-[#332E28]/60">
              <span>Palette: Muted Sea · Mineral Blue</span>
              <span className="text-[#667D7B] font-semibold">Air & Light</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4 (75-100% Scroll): THE COMPOSED HOME & ENQUIRY
        ========================================================================== */}
        <section className="min-h-[125vh] flex flex-col justify-center items-center px-6 sm:px-12 py-24 max-w-4xl mx-auto text-center space-y-12">
          {/* Resolved Perspective Card */}
          <div className="w-full bg-[#F5F1E9]/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl border-l-4 border-l-[#70785B] border border-[#332E28]/15 shadow-md">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#70785B] block mb-3 font-semibold">
              Section 04 · 75–100%
            </span>
            <h2 className="text-3xl sm:text-5xl font-playfair font-medium text-[#332E28] leading-tight mb-4">
              The Composed Home
            </h2>
            <p className="text-xs sm:text-base text-[#332E28]/85 font-light leading-relaxed max-w-xl mx-auto">
              The retreat pulls back into a singular resolved perspective—balancing wood, stone, olive, and shadow into deep residential calm.
            </p>
          </div>

          {/* Enquiry Call to Action Box */}
          <div className="w-full bg-[#E9E4DA] border border-[#332E28]/20 rounded-3xl p-8 sm:p-12 shadow-lg space-y-6">
            <div className="inline-block bg-[#F5F1E9] border border-[#332E28]/15 px-4 py-1.5 rounded-full">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#332E28]/80 font-medium">
                CONCEPT STUDY 01 &nbsp;|&nbsp; VISUAL EXPLORATION BY VELTRIS [NOT COMMISSIONED]
              </p>
            </div>

            <h3 className="font-playfair text-2xl sm:text-4xl font-medium text-[#332E28] leading-tight">
              Every Home Begins with a Conversation.
            </h3>

            <p className="text-xs sm:text-sm text-[#332E28]/75 font-light leading-relaxed max-w-md mx-auto">
              A considered residential project starts with understanding the place, the architectural brief, and the rituals it needs to hold.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#332E28] text-[#F5F1E9] font-mono text-xs uppercase tracking-[0.2em] px-9 py-3.5 rounded-full hover:bg-[#292925] transition-all shadow-md active:scale-98"
              >
                <span>Discuss a project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-4 border-t border-[#332E28]/15 text-xs text-[#332E28]/70 font-light max-w-lg mx-auto leading-relaxed flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#70785B] shrink-0" />
              <span>An independent Veltris concept study inspired by publicly available information. Not commissioned, endorsed, or affiliated with Claudia Dorsch Interior Design.</span>
            </div>
          </div>
        </section>

      </div>

      {/* 4. Fixed Global Page Footer */}
      <ConceptFooter />
    </div>
  );
}
