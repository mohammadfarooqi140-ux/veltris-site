"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import ConceptHeader from "@/components/claudia-concept/ConceptHeader";
import ConceptFooter from "@/components/claudia-concept/ConceptFooter";
import CinematicVideoSequence from "@/components/claudia-concept/CinematicVideoSequence";

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

      {/* 2. Pinned / Sticky Cinematic Video Sequence Background */}
      <div className="fixed inset-0 top-[88px] w-full h-[calc(100vh-88px)] pointer-events-none z-0 overflow-hidden">
        <CinematicVideoSequence progress={scrollProgress} />
      </div>

      {/* 3. Floating Architectural Progress Indicator */}
      <div className="fixed bottom-8 left-6 sm:left-10 z-30 pointer-events-auto hidden md:flex items-center gap-4 bg-[#E9E4DA]/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-[#332E28]/15 shadow-sm">
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#70785B] uppercase font-semibold">
          {scrollProgress < 0.2
            ? "01 / Threshold"
            : scrollProgress < 0.4
            ? "02 / City"
            : scrollProgress < 0.6
            ? "03 / Coast"
            : scrollProgress < 0.8
            ? "04 / Mountain"
            : "05 / Composed Home"}
        </span>
        <div className="w-16 h-1 bg-[#332E28]/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#70785B] transition-all duration-150"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>
      </div>

      {/* 4. Foreground Minimal Editorial Narrative Journey */}
      <div className="relative z-10">
        {/* =========================================================================
            SCENE 1: THE THRESHOLD (0.00 - 0.20)
        ========================================================================== */}
        <section className="min-h-[92vh] flex flex-col justify-between px-6 sm:px-12 pt-12 pb-16 max-w-7xl mx-auto">
          {/* Top Label */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E9E4DA]/90 backdrop-blur-md border border-[#332E28]/15 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#70785B] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#332E28]/90 font-medium">
                CONCEPT STUDY 01 &nbsp;|&nbsp; NOT COMMISSIONED &nbsp;|&nbsp; VISUAL EXPLORATION BY VELTRIS
              </span>
            </div>
          </div>

          {/* Main Title & Minimal Hero Narrative */}
          <div className="max-w-2xl my-auto py-10 bg-[#F5F1E9]/85 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#332E28]/10 shadow-sm">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#70785B] block mb-3 font-semibold">
              Spatial Narrative Experience
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-medium tracking-tight text-[#332E28] leading-[1.08] mb-6">
              THREE WORLDS.<br />
              <span className="font-normal text-[#332E28]/80">ONE WAY OF LIVING.</span>
            </h1>
            <p className="text-[#332E28]/80 text-sm sm:text-base font-light leading-relaxed mb-8">
              An independent digital reimagining for a residential interior design studio shaped by place, material, and the people who live within it.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToNarrative}
                className="inline-flex items-center gap-2 bg-[#332E28] text-[#F5F1E9] px-6 py-3 rounded-full text-xs font-mono uppercase tracking-[0.18em] hover:bg-[#292925] transition-all shadow-sm active:scale-98"
              >
                <span>Explore the direction</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E9E4DA]/80 text-[#332E28] border border-[#332E28]/20 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-[0.18em] hover:bg-[#E9E4DA] transition-all"
              >
                <span>Discuss a project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#70785B]" />
              </Link>
            </div>
          </div>

          {/* Bottom helper prompt */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#332E28]/70 bg-[#E9E4DA]/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#332E28]/10 max-w-fit">
            <span>Scroll gently to scrub the spatial transitions</span>
          </div>
        </section>

        {/* Anchor for smooth scroll */}
        <div id="narrative-start" />

        {/* =========================================================================
            SCENE 2: POINT OF VIEW (0.15 - 0.30)
        ========================================================================== */}
        <section className="min-h-[85vh] flex items-center justify-end px-6 sm:px-12 py-20 max-w-7xl mx-auto">
          <div className="max-w-xl bg-[#F5F1E9]/85 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#332E28]/15 shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#70785B] block mb-3 font-semibold">
              The Point of View
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-medium text-[#332E28] leading-snug mb-4">
              A HOME SHOULD FEEL LIKE IT BELONGS TO THE LIFE INSIDE IT.
            </h2>
            <p className="text-xs sm:text-sm text-[#332E28]/80 font-light leading-relaxed">
              The most lasting spaces are not assembled from a style guide. They grow from the people, places, rituals, and materials that give a home its character.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SCENE 3: CITY (0.30 - 0.50)
        ========================================================================== */}
        <section className="min-h-[90vh] flex items-center justify-start px-6 sm:px-12 py-20 max-w-7xl mx-auto">
          <div className="max-w-lg bg-[#F5F1E9]/85 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#6B3F3D] border border-[#332E28]/15 shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6B3F3D] font-bold block mb-2">
              CITY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-medium text-[#332E28] leading-snug mb-4">
              A MORE CONSIDERED RHYTHM FOR URBAN LIFE.
            </h2>
            <p className="text-xs sm:text-sm text-[#332E28]/80 font-light leading-relaxed">
              Structured, layered, and quietly expressive. A city home can hold energy without feeling overwhelmed by it.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SCENE 4: COAST (0.50 - 0.70)
        ========================================================================== */}
        <section className="min-h-[90vh] flex items-center justify-end px-6 sm:px-12 py-20 max-w-7xl mx-auto">
          <div className="max-w-lg bg-[#F5F1E9]/85 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#667D7B] border border-[#332E28]/15 shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#667D7B] font-bold block mb-2">
              COAST
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-medium text-[#332E28] leading-snug mb-4">
              LIGHT, AIR, AND ROOM TO BREATHE.
            </h2>
            <p className="text-xs sm:text-sm text-[#332E28]/80 font-light leading-relaxed">
              A softer relationship between inside and outside, shaped by changing light, texture, and the pace of the day.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SCENE 5: MOUNTAIN (0.70 - 0.85)
        ========================================================================== */}
        <section className="min-h-[90vh] flex items-center justify-start px-6 sm:px-12 py-20 max-w-7xl mx-auto">
          <div className="max-w-lg bg-[#F5F1E9]/85 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#70785B] border border-[#332E28]/15 shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#70785B] font-bold block mb-2">
              MOUNTAIN
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-medium text-[#332E28] leading-snug mb-4">
              WARMTH HELD IN MATERIAL.
            </h2>
            <p className="text-xs sm:text-sm text-[#332E28]/80 font-light leading-relaxed">
              A sheltered atmosphere where timber, stone, proportion, and firelight create a slower kind of comfort.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SCENE 6: COMPOSED HOME (0.85 - 0.95)
        ========================================================================== */}
        <section className="min-h-[85vh] flex items-center justify-center px-6 sm:px-12 py-20 max-w-4xl mx-auto text-center">
          <div className="bg-[#F5F1E9]/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-[#332E28]/15 shadow-md">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#70785B] block mb-3 font-semibold">
              The Composed Home
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-playfair font-medium text-[#332E28] leading-tight mb-4">
              DIFFERENT PLACES. THE SAME CARE IN HOW A HOME FEELS.
            </h2>
            <p className="text-xs sm:text-base text-[#332E28]/80 font-light leading-relaxed max-w-xl mx-auto">
              The setting changes. The attention to proportion, texture, light, and the life inside the room remains.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SCENE 7: THE ENQUIRY MOMENT (0.95 - 1.00)
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
