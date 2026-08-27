"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function ConceptFooter() {
  return (
    <footer className="w-full bg-[#E9E4DA] border-t border-[#332E28]/15 text-[#332E28] pt-16 pb-12 px-6 sm:px-12 relative z-30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#332E28]/15">
          {/* Col 1: Brand & Concept Statement */}
          <div className="md:col-span-6 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#70785B] uppercase block font-semibold">
              CONCEPT STUDY 01 · 720 FRAME SPATIAL SEQUENCE
            </span>
            <h3 className="font-playfair text-2xl sm:text-3xl font-medium tracking-tight text-[#332E28]">
              Claudia Dorsch Interior Design
            </h3>
            <p className="text-sm font-light text-[#332E28]/75 leading-relaxed max-w-md">
              A deterministic HTML5 Canvas spatial narrative exploration mapping viewport scroll to continuous interior camera movement across city, coastal, and mountain settings.
            </p>
          </div>

          {/* Col 2: Studio Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#332E28]/50 font-semibold">
              Veltris Studio
            </h4>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-[0.15em]">
              <li>
                <Link href="/" className="text-[#332E28]/80 hover:text-[#332E28] transition-colors flex items-center gap-1.5">
                  Veltris Home <ArrowUpRight className="w-3 h-3 text-[#70785B]" />
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[#332E28]/80 hover:text-[#332E28] transition-colors flex items-center gap-1.5">
                  Selected Work <ArrowUpRight className="w-3 h-3 text-[#70785B]" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#332E28]/80 hover:text-[#332E28] transition-colors flex items-center gap-1.5">
                  About Studio <ArrowUpRight className="w-3 h-3 text-[#70785B]" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#332E28]/80 hover:text-[#332E28] transition-colors flex items-center gap-1.5">
                  Discuss a Project <ArrowUpRight className="w-3 h-3 text-[#70785B]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Palette & Study Metadata */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#332E28]/50 font-semibold">
              Atmospheric System
            </h4>
            <div className="flex items-center gap-2 pt-1">
              <div className="w-4 h-4 rounded-full bg-[#F5F1E9] border border-[#332E28]/20" title="Warm Paper" />
              <div className="w-4 h-4 rounded-full bg-[#332E28]" title="Deep Umber" />
              <div className="w-4 h-4 rounded-full bg-[#70785B]" title="Olive" />
              <div className="w-4 h-4 rounded-full bg-[#667D7B]" title="Muted Sea" />
              <div className="w-4 h-4 rounded-full bg-[#6B3F3D]" title="Oxblood" />
              <div className="w-4 h-4 rounded-full bg-[#AD9670]" title="Aged Brass" />
            </div>
            <p className="text-[11px] font-mono text-[#332E28]/60 leading-normal pt-2">
              Palette: Paper · Chalk · Umber · Olive · Sea · Oxblood<br />
              Engine: 720-Frame HTML5 Canvas
            </p>
          </div>
        </div>

        {/* Legal Transparency Protocol Statement (Exact Required Text) */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#332E28]/80 font-light leading-relaxed">
          <p className="max-w-2xl text-[12px] sm:text-[13px] border-l-2 border-[#70785B] pl-3.5 py-1 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#70785B] shrink-0 mt-0.5" />
            <span>An independent Veltris concept study inspired by publicly available information. Not commissioned, endorsed, or affiliated with Claudia Dorsch Interior Design.</span>
          </p>
          <div className="text-[11px] font-mono text-[#332E28]/50 whitespace-nowrap">
            © {new Date().getFullYear()} Veltris
          </div>
        </div>
      </div>
    </footer>
  );
}
