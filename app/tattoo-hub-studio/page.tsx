"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Copy, Check, MapPin, Mail } from "lucide-react";

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function TattooHubStudioPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("info@tattoohubstudio.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#E8E8E6] font-sans antialiased selection:bg-[#B38E46] selection:text-black">
      
      {/* ── TOP ATELIER BAR ─────────────────────────────────────── */}
      <header className="border-b border-white/[0.08] bg-[#070707]/95 backdrop-blur-md sticky top-0 z-40 px-6 sm:px-10 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="#top" className="group">
            <span className="font-serif text-lg sm:text-xl tracking-[0.16em] uppercase text-white block">
              Tattoo Hub Studio
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#9E9E9C] uppercase">
              Bogdan Vodă · Mossley
            </span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-8">
            <nav className="hidden md:flex items-center space-x-6 text-xs font-mono uppercase tracking-[0.16em] text-[#9E9E9C]">
              <a href="#studio" className="hover:text-white transition-colors">The Studio</a>
              <a href="#work" className="hover:text-white transition-colors">The Work</a>
              <a href="#about" className="hover:text-white transition-colors">Bogdan</a>
            </nav>

            <a
              href="#booking"
              className="px-4 py-2 bg-white text-black text-xs font-mono uppercase tracking-[0.16em] font-semibold hover:bg-[#B38E46] hover:text-white transition-colors"
            >
              Enquire
            </a>
          </div>
        </div>
      </header>

      {/* ── 1. HERO SECTION ──────────────────────────────────────── */}
      <section id="top" className="border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-12 sm:pt-16 pb-16 sm:pb-24">
          
          {/* Tagline */}
          <div className="mb-6 flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B38E46]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#C5A880]">
              Private Studio · Woodend Mill, Level 3
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] text-white tracking-tight uppercase max-w-4xl mb-6">
            Large-Scale <br className="hidden sm:inline" />
            <span className="text-[#C5A880] italic font-serif">Black & Grey Realism.</span>
          </h1>

          {/* Subline */}
          <p className="text-sm sm:text-base md:text-lg text-[#9E9E9C] font-light leading-relaxed max-w-2xl mb-8">
            An appointment-only atelier dedicated to serious, anatomical pieces. No walk-in distractions—just quiet, focused craftsmanship with lead artist Bogdan Vodă.
          </p>

          {/* Quick Primary Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12">
            <a
              href="mailto:info@tattoohubstudio.com"
              className="px-6 py-3.5 bg-white text-black hover:bg-[#B38E46] hover:text-white transition-colors text-xs font-mono uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2"
            >
              <Mail size={15} />
              <span>Email Enquiry</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#121212] border border-white/15 text-white hover:border-[#B38E46] transition-colors text-xs font-mono uppercase tracking-[0.18em] flex items-center justify-center gap-2"
            >
              <InstagramIcon size={15} />
              <span>Instagram DM</span>
              <ArrowUpRight size={13} className="text-[#9E9E9C]" />
            </a>
          </div>

          {/* Hero Visual Container (Hero.studio.jpg) */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] bg-[#111111] border border-white/[0.1] overflow-hidden group">
            <Image
              src="/TattooHubStudio/Hero.studio.jpg"
              alt="Bogdan Vodă tattooing a large-scale back piece by the Woodend Mill window"
              fill
              priority
              className="object-cover filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/80">
                Bogdan at work · Natural North Light
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. THE STUDIO (SHORT & ATMOSPHERIC) ──────────────────── */}
      <section id="studio" className="border-b border-white/[0.08] py-16 sm:py-24 bg-[#090909]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Image (studio.webp) */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#121212] border border-white/[0.1] overflow-hidden">
                <Image
                  src="/TattooHubStudio/studio.webp"
                  alt="Tattoo Hub Studio interior at Woodend Mill Level 3"
                  fill
                  className="object-cover filter grayscale contrast-110"
                />
                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-white/10 text-[9px] font-mono uppercase tracking-widest text-[#C5A880]">
                  Yellow Door · Level 3
                </div>
              </div>
            </div>

            {/* Right Copy (2-3 lines max) */}
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#B38E46] block mb-2">
                The Environment
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white uppercase mb-4 leading-tight">
                Private. Quiet. <br />
                Woodend Mill.
              </h2>
              <p className="text-sm text-[#9E9E9C] font-light leading-relaxed mb-6">
                Located on Level 3 of the historic Woodend Mill in Mossley. Designed as a private, calm atelier flooded with natural northern daylight—calibrated entirely for undivided focus and full-day sessions.
              </p>
              
              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-[#C5A880]">
                <MapPin size={14} className="shrink-0" />
                <span>Woodend Mill, Level 3, Yellow Door, Mossley, OL5 9RR</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. SELECTED WORK (THREE PIECES ONLY) ─────────────────── */}
      <section id="work" className="border-b border-white/[0.08] py-16 sm:py-24 bg-[#070707]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 pb-6 border-b border-white/[0.08] gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#B38E46] block mb-1">
                Portfolio
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white uppercase font-normal">
                Selected Work
              </h2>
            </div>
            <p className="text-xs font-mono text-[#9E9E9C] uppercase tracking-widest">
              Black &amp; Grey Realism · Bogdan Vodă
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Piece 1: Sacred Devotion (fathand.jpg) */}
            <div className="md:col-span-6 flex flex-col bg-[#0D0D0D] border border-white/[0.08]">
              <div className="relative aspect-[3/4] w-full bg-black overflow-hidden">
                <Image
                  src="/TattooHubStudio/fathand.jpg"
                  alt="Sacred devotion religious sleeve detail by Bogdan Vodă"
                  fill
                  className="object-cover filter grayscale contrast-120 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#B38E46] mb-1">
                  <span>Piece 01</span>
                  <span className="text-[#9E9E9C]">Sleeve Detail</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white uppercase mb-2">
                  Sacred Devotion
                </h3>
                <p className="text-xs text-[#9E9E9C] font-light leading-relaxed">
                  Sculpted classical praying figure and crown of thorns with feathered smoke transitions and deep negative skin highlights.
                </p>
              </div>
            </div>

            {/* Piece 2: Ricky Hatton Tribute (thinhand.jpg) */}
            <div className="md:col-span-6 flex flex-col bg-[#0D0D0D] border border-white/[0.08]">
              <div className="relative aspect-[3/4] w-full bg-black overflow-hidden">
                <Image
                  src="/TattooHubStudio/thinhand.jpg"
                  alt="The Ricky Hatton boxing tribute portrait by Bogdan Vodă"
                  fill
                  className="object-cover filter grayscale contrast-120 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#B38E46] mb-1">
                  <span>Piece 02</span>
                  <span className="text-[#9E9E9C]">Portrait Sleeve</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white uppercase mb-2">
                  The Ricky Hatton Tribute
                </h3>
                <p className="text-xs text-[#9E9E9C] font-light leading-relaxed">
                  High-contrast black &amp; grey portrait capturing facial geometry, fight lighting, and British boxing heritage.
                </p>
              </div>
            </div>

            {/* Piece 3: Music Leg (leg.jpg) - Secondary Span */}
            <div className="md:col-span-12 bg-[#0D0D0D] border border-white/[0.08] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative aspect-square w-full sm:w-44 shrink-0 bg-black overflow-hidden">
                <Image
                  src="/TattooHubStudio/leg.jpg"
                  alt="Vintage analogue cassette and radio composition leg piece by Bogdan Vodă"
                  fill
                  className="object-cover filter grayscale contrast-120"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#B38E46] mb-1">
                  <span>Piece 03 · Secondary Study</span>
                  <span className="text-[#9E9E9C]">Leg Composition</span>
                </div>
                <h3 className="font-serif text-xl text-white uppercase mb-2">
                  Analogue Soundscape
                </h3>
                <p className="text-xs text-[#9E9E9C] font-light leading-relaxed max-w-2xl">
                  Vintage mechanical radio and cassette tape composition engineered with precision gradients for clean healed aging.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. BOGDAN (VERY SHORT & RESPECTFUL) ───────────────────── */}
      <section id="about" className="border-b border-white/[0.08] py-16 sm:py-20 bg-[#090909]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#B38E46] block mb-3">
            The Artist
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white uppercase font-normal mb-6">
            Bogdan Vodă
          </h2>
          <p className="text-sm sm:text-base text-[#9E9E9C] font-light leading-relaxed max-w-2xl mx-auto mb-8">
            15+ years refining large-scale black &amp; grey realism across the UK and US guest spots. Dedicated exclusively to bespoke, serious projects crafted to move naturally with the body and age with commanding contrast.
          </p>
          <div className="inline-flex items-center gap-6 text-[11px] font-mono uppercase tracking-widest text-[#C5A880] border-t border-white/[0.08] pt-6">
            <span>15+ Years Practice</span>
            <span>•</span>
            <span>UK &amp; US Guest Residencies</span>
            <span>•</span>
            <span>Private Atelier</span>
          </div>
        </div>
      </section>

      {/* ── 5. BOOKING & LOCATION (CLEAN & SIMPLE) ────────────────── */}
      <section id="booking" className="py-16 sm:py-24 bg-[#070707]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#B38E46] block mb-2">
              Private Enquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white uppercase font-normal mb-4">
              Book a Consultation
            </h2>
            <p className="text-sm text-[#9E9E9C] font-light max-w-md mx-auto leading-relaxed">
              Sessions are by appointment only. Contact Bogdan directly with your concept, reference ideas, and preferred placement.
            </p>
          </div>

          {/* Contact Direct Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            
            {/* Email Card */}
            <div className="p-6 bg-[#0D0D0D] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-[#B38E46] mb-2">
                  <Mail size={16} />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E9E9C]">Direct Email</span>
                </div>
                <p className="font-mono text-sm sm:text-base text-white break-all mb-4 select-all">
                  info@tattoohubstudio.com
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href="mailto:info@tattoohubstudio.com"
                  className="px-4 py-2 bg-white text-black hover:bg-[#B38E46] hover:text-white transition-colors text-[10px] font-mono uppercase tracking-widest font-semibold flex-1 text-center"
                >
                  Send Email
                </a>
                <button
                  onClick={copyEmail}
                  className="px-3 py-2 bg-white/[0.06] hover:bg-white/20 transition-colors text-[10px] font-mono uppercase tracking-widest flex items-center gap-1 text-white"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={13} className="text-[#B38E46]" /> : <Copy size={13} />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-6 bg-[#0D0D0D] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-[#B38E46] mb-2">
                  <InstagramIcon size={16} />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E9E9C]">Instagram</span>
                </div>
                <p className="font-mono text-sm sm:text-base text-white mb-4">
                  @tattoohubstudio
                </p>
              </div>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#141414] border border-white/20 hover:border-[#B38E46] text-white hover:text-[#B38E46] transition-colors text-[10px] font-mono uppercase tracking-widest flex items-center justify-center gap-1.5"
              >
                <span>Direct Message</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </div>

          {/* Location Details Box */}
          <div className="p-6 bg-[#0B0B0B] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#B38E46] shrink-0 mt-0.5" />
              <div>
                <p className="font-serif text-sm sm:text-base text-white">
                  Woodend Mill, Level 3, Yellow Door
                </p>
                <p className="text-xs font-mono text-[#9E9E9C]">
                  Manchester Road, Mossley, Greater Manchester, OL5 9RR
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Woodend+Mill+Manchester+Road+Mossley+OL5+9RR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-[#C5A880] hover:text-white flex items-center gap-1 whitespace-nowrap transition-colors"
            >
              <span>Google Maps</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.08] py-8 px-6 text-center text-xs font-mono text-white/40">
        <p>© {new Date().getFullYear()} Tattoo Hub Studio · Bogdan Vodă · Woodend Mill, Mossley</p>
      </footer>

    </div>
  );
}
