"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Compass, Layers, ShieldCheck } from "lucide-react";
import ConceptHeader from "@/components/claudia-concept/ConceptHeader";
import ConceptFooter from "@/components/claudia-concept/ConceptFooter";
import ConceptNarrativeCanvas from "@/components/claudia-concept/ConceptNarrativeCanvas";

export default function ClaudiaConceptClient() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNarrative = () => {
    const target = document.getElementById("narrative-start");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F5F1E9] text-[#332E28] font-sans selection:bg-[#AD9670]/30 selection:text-[#332E28] relative"
      style={{
        backgroundColor: "#F5F1E9",
        color: "#332E28",
      }}
    >
      {/* 1. Dedicated Concept Header */}
      <ConceptHeader />

      {/* 2. Sticky Background 3D Narrative Canvas */}
      <div className="fixed inset-0 top-[90px] w-full h-[calc(100vh-90px)] pointer-events-none z-0 overflow-hidden">
        <ConceptNarrativeCanvas progress={scrollProgress} />
      </div>

      {/* 3. Floating Architectural Progress Indicator */}
      <div className="fixed bottom-8 left-6 sm:left-10 z-30 pointer-events-auto hidden md:flex items-center gap-4 bg-[#E9E4DA]/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-[#332E28]/15 shadow-sm">
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#70785B] uppercase font-semibold">
          {scrollProgress < 0.14
            ? "01 / Threshold"
            : scrollProgress < 0.28
            ? "02 / Philosophy"
            : scrollProgress < 0.45
            ? "03 / City"
            : scrollProgress < 0.62
            ? "04 / Coast"
            : scrollProgress < 0.78
            ? "05 / Mountain"
            : scrollProgress < 0.90
            ? "06 / Materiality"
            : "07 / Dialogue"}
        </span>
        <div className="w-16 h-1 bg-[#332E28]/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#70785B] transition-all duration-150"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>
      </div>

      {/* 4. Foreground Semantic Narrative Journey */}
      <div className="relative z-10">
        {/* =========================================================================
            SCENE 1: THE THRESHOLD (0.00 - 0.14)
        ========================================================================== */}
        <section className="min-h-[90vh] flex flex-col justify-between px-6 sm:px-12 pt-16 pb-20 max-w-7xl mx-auto">
          {/* Top Label */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#E9E4DA] border border-[#332E28]/15 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#70785B] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#332E28]/90 font-medium">
                CONCEPT STUDY 01 &nbsp;|&nbsp; NOT COMMISSIONED
              </span>
            </div>
          </div>

          {/* Main Title & Hero Narrative */}
          <div className="max-w-3xl my-auto py-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#70785B] block mb-4">
              A Spatial Narrative Direction
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-medium tracking-tight text-[#332E28] leading-[1.06] mb-8">
              THREE WORLDS.<br />
              <span className="font-normal text-[#332E28]/80">ONE WAY OF LIVING.</span>
            </h1>
            <p className="text-[#332E28]/80 text-base sm:text-xl font-light leading-relaxed max-w-2xl mb-10">
              An independent digital reimagining for a residential interior design studio shaped by place, material, and the people who live within it.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToNarrative}
                className="inline-flex items-center gap-2 bg-[#332E28] text-[#F5F1E9] px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-[0.18em] hover:bg-[#292925] transition-all shadow-md active:scale-98"
              >
                <span>Explore the direction</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-[#332E28] border border-[#332E28]/30 px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-[0.18em] hover:bg-[#E9E4DA] transition-all"
              >
                <span>Discuss a project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#70785B]" />
              </Link>
            </div>
          </div>

          {/* Bottom helper prompt */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#332E28]/60 border-t border-[#332E28]/10 pt-4">
            <span>Scroll gently to traverse the spaces</span>
            <span className="hidden sm:inline">Tactile Architectural Model</span>
          </div>
        </section>

        {/* Anchor for smooth scroll */}
        <div id="narrative-start" />

        {/* =========================================================================
            SCENE 2: THE POINT OF VIEW (0.14 - 0.28)
        ========================================================================== */}
        <section className="min-h-[85vh] flex items-center px-6 sm:px-12 py-24 max-w-7xl mx-auto">
          <div className="max-w-2xl ml-auto bg-[#F5F1E9]/85 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-[#332E28]/15 shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#70785B] block mb-4">
              02 · The Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-medium text-[#332E28] leading-tight mb-6">
              A HOME SHOULD FEEL LIKE IT BELONGS TO THE LIFE INSIDE IT.
            </h2>
            <p className="text-sm sm:text-base text-[#332E28]/80 font-light leading-relaxed mb-6">
              The most lasting spaces are not assembled from a style guide. They grow from the people, places, rituals, and materials that give a home its character.
            </p>
            <div className="pt-4 border-t border-[#332E28]/10 flex items-center gap-3 text-xs font-mono text-[#70785B]">
              <Compass className="w-4 h-4 text-[#70785B]" />
              <span>Living architecture responding to light & movement</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SCENE 3: CITY (0.28 - 0.45)
        ========================================================================== */}
        <section className="min-h-[90vh] flex items-center px-6 sm:px-12 py-24 max-w-7xl mx-auto">
          <div className="max-w-xl mr-auto bg-[#F5F1E9]/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl border-l-4 border-l-[#6B3F3D] border border-[#332E28]/15 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B3F3D]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6B3F3D] font-bold">
                CITY ATMOSPHERE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-medium text-[#332E28] leading-tight mb-6">
              A MORE CONSIDERED RHYTHM FOR URBAN LIFE.
            </h2>
            <p className="text-sm sm:text-base text-[#332E28]/80 font-light leading-relaxed mb-6">
              Structured, layered, and quietly expressive. A city home can hold energy without feeling overwhelmed by it.
            </p>
            <div className="bg-[#E9E4DA]/60 p-4 rounded-xl text-xs font-mono text-[#332E28]/70 space-y-1">
              <div className="flex justify-between">
                <span>Materiality:</span>
                <span className="text-[#332E28] font-medium">Smoked Oak · Pietra Honed Stone</span>
              </div>
              <div className="flex justify-between">
                <span>Accent:</span>
                <span className="text-[#6B3F3D] font-medium">Deep Umber & Oxblood Line</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SCENE 4: COAST (0.45 - 0.62)
        ========================================================================== */}
        <section className="min-h-[90vh] flex items-center px-6 sm:px-12 py-24 max-w-7xl mx-auto">
          <div className="max-w-xl ml-auto bg-[#F5F1E9]/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl border-l-4 border-l-[#667D7B] border border-[#332E28]/15 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#667D7B]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#667D7B] font-bold">
                COAST ATMOSPHERE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-medium text-[#332E28] leading-tight mb-6">
              LIGHT, AIR, AND ROOM TO BREATHE.
            </h2>
            <p className="text-sm sm:text-base text-[#332E28]/80 font-light leading-relaxed mb-6">
              A softer relationship between inside and outside, shaped by changing light, texture, and the pace of the day.
            </p>
            <div className="bg-[#E9E4DA]/60 p-4 rounded-xl text-xs font-mono text-[#332E28]/70 space-y-1">
              <div className="flex justify-between">
                <span>Materiality:</span>
                <span className="text-[#332E28] font-medium">Chalk Plaster · Sun-Bleached Oak</span>
              </div>
              <div className="flex justify-between">
                <span>Accent:</span>
                <span className="text-[#667D7B] font-medium">Muted Sea Blue & Mineral Hues</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SCENE 5: MOUNTAIN (0.62 - 0.78)
        ========================================================================== */}
        <section className="min-h-[90vh] flex items-center px-6 sm:px-12 py-24 max-w-7xl mx-auto">
          <div className="max-w-xl mr-auto bg-[#F5F1E9]/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl border-l-4 border-l-[#70785B] border border-[#332E28]/15 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#70785B]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#70785B] font-bold">
                MOUNTAIN ATMOSPHERE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-medium text-[#332E28] leading-tight mb-6">
              WARMTH HELD IN MATERIAL.
            </h2>
            <p className="text-sm sm:text-base text-[#332E28]/80 font-light leading-relaxed mb-6">
              A sheltered atmosphere where timber, stone, proportion, and firelight create a slower kind of comfort.
            </p>
            <div className="bg-[#E9E4DA]/60 p-4 rounded-xl text-xs font-mono text-[#332E28]/70 space-y-1">
              <div className="flex justify-between">
                <span>Materiality:</span>
                <span className="text-[#332E28] font-medium">Rough Schist · Heavy Timber</span>
              </div>
              <div className="flex justify-between">
                <span>Accent:</span>
                <span className="text-[#70785B] font-medium">Olive Wool · Aged Brass Trim</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SCENE 6: THE MATERIAL LIBRARY (0.78 - 0.85)
        ========================================================================== */}
        <section className="min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 py-24 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 bg-[#F5F1E9]/80 backdrop-blur-md p-6 rounded-2xl border border-[#332E28]/10">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#70785B] block mb-3">
              Tactile Foundation
            </span>
            <h2 className="text-3xl sm:text-5xl font-playfair font-medium text-[#332E28] leading-tight">
              MATERIAL CHANGES HOW A ROOM IS FELT.
            </h2>
          </div>

          {/* Three Large Material Moments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#E9E4DA]/90 backdrop-blur-md border border-[#332E28]/15 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#70785B] block mb-3">
                  01 · Stone
                </span>
                <h3 className="font-playfair text-2xl text-[#332E28] font-medium mb-3">
                  Permanence & Light
                </h3>
                <p className="text-xs sm:text-sm text-[#332E28]/80 font-light leading-relaxed">
                  Holds natural daylight across the hours and gives the room structural permanence and quiet gravity.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#332E28]/10 flex items-center justify-between text-[11px] font-mono text-[#332E28]/60">
                <span>Honed Limestone</span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#D5CEBF] border border-[#332E28]/20" />
              </div>
            </div>

            <div className="bg-[#E9E4DA]/90 backdrop-blur-md border border-[#332E28]/15 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#70785B] block mb-3">
                  02 · Timber
                </span>
                <h3 className="font-playfair text-2xl text-[#332E28] font-medium mb-3">
                  Touch & Warmth
                </h3>
                <p className="text-xs sm:text-sm text-[#332E28]/80 font-light leading-relaxed">
                  Brings organic warmth, deep acoustic softening, and an immediate, inviting sense of tactile touch.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#332E28]/10 flex items-center justify-between text-[11px] font-mono text-[#332E28]/60">
                <span>Smoked & Bleached Oak</span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#68533F] border border-[#332E28]/20" />
              </div>
            </div>

            <div className="bg-[#E9E4DA]/90 backdrop-blur-md border border-[#332E28]/15 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#70785B] block mb-3">
                  03 · Linen & Plaster
                </span>
                <h3 className="font-playfair text-2xl text-[#332E28] font-medium mb-3">
                  Softness & Daily Life
                </h3>
                <p className="text-xs sm:text-sm text-[#332E28]/80 font-light leading-relaxed">
                  Softens the architectural boundary between rigid walls and daily rituals, filtering natural breezes.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#332E28]/10 flex items-center justify-between text-[11px] font-mono text-[#332E28]/60">
                <span>Raw Woven Linen</span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#F2EDE4] border border-[#332E28]/20" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SCENE 7: THE COMPOSED HOME (0.85 - 0.90)
        ========================================================================== */}
        <section className="min-h-[85vh] flex items-center justify-center px-6 sm:px-12 py-24 max-w-5xl mx-auto text-center">
          <div className="bg-[#F5F1E9]/95 backdrop-blur-lg p-10 sm:p-16 rounded-3xl border border-[#332E28]/20 shadow-md">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#70785B] block mb-4">
              07 · The Complete Synthesis
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-playfair font-medium text-[#332E28] leading-tight mb-8">
              DIFFERENT PLACES. THE SAME CARE IN HOW A HOME FEELS.
            </h2>
            <p className="text-base sm:text-lg text-[#332E28]/80 font-light leading-relaxed max-w-2xl mx-auto mb-8">
              The setting changes. The attention to proportion, texture, light, and the life inside the room remains.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#70785B] bg-[#E9E4DA] px-4 py-2 rounded-full border border-[#332E28]/10">
              <Layers className="w-3.5 h-3.5" />
              <span>City · Coast · Mountain united by singular design judgment</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SCENE 8: THE ENQUIRY MOMENT (0.90 - 1.00)
        ========================================================================== */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 sm:px-12 py-24 max-w-4xl mx-auto text-center">
          <div className="w-full bg-[#E9E4DA] border border-[#332E28]/20 rounded-3xl p-8 sm:p-14 shadow-lg space-y-8">
            {/* Top Badge */}
            <div className="inline-block bg-[#F5F1E9] border border-[#332E28]/15 px-4 py-1.5 rounded-full">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#332E28]/80 font-medium">
                CONCEPT STUDY 01 &nbsp;|&nbsp; NOT COMMISSIONED &nbsp;|&nbsp; VISUAL EXPLORATION BY VELTRIS
              </p>
            </div>

            {/* Heading & Subtitle */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="font-playfair text-3xl sm:text-5xl font-medium text-[#332E28] leading-tight">
                EVERY HOME BEGINS WITH A CONVERSATION.
              </h2>
              <p className="text-sm sm:text-base text-[#332E28]/80 font-light leading-relaxed">
                A considered project starts with understanding the place, the brief, and the life it needs to hold.
              </p>
            </div>

            {/* Action */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#332E28] text-[#F5F1E9] font-mono text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-full hover:bg-[#292925] transition-all shadow-md active:scale-98"
              >
                <span>Discuss a project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Clear Transparency Statement below action */}
            <div className="pt-6 border-t border-[#332E28]/15 text-xs text-[#332E28]/70 font-light max-w-xl mx-auto leading-relaxed flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#70785B] shrink-0" />
              <span>This is an independent Veltris concept study and is not commissioned, endorsed, or affiliated with Claudia Dorsch Interior Design.</span>
            </div>
          </div>
        </section>
      </div>

      {/* 5. Dedicated Concept Footer */}
      <ConceptFooter />
    </div>
  );
}
