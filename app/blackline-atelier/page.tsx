"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { useState } from "react";

export default function BlacklineAtelier() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    { q: "How do bookings work?", a: "Submit an enquiry form with your references and preferred artist. We will review and contact you with available dates." },
    { q: "Do you take deposits?", a: "Yes, a non-refundable deposit is required to secure all bookings. The deposit goes towards the final cost of your tattoo." },
    { q: "Can I bring reference images?", a: "Absolutely. Visual references help us understand your vision, though we always create custom pieces and do not copy other artists' exact work." },
    { q: "Do you accept walk-ins?", a: "We are a private, appointment-only studio to ensure our artists can focus entirely on their clients." },
    { q: "How should I prepare before an appointment?", a: "Get a good night's sleep, eat a solid meal beforehand, and avoid alcohol for 24 hours prior. Wear comfortable, loose clothing." },
    { q: "Do you provide aftercare instructions?", a: "Yes, you will be given a printed aftercare sheet and high-quality aftercare balm before you leave the studio." }
  ];

  return (
    <div className="bg-[#030303] text-[#F5F5F5] font-sans selection:bg-[#8B0000] selection:text-white min-h-screen">
      {/* Disclaimer Top Bar */}
      <div className="bg-[#0A0A0A] border-b border-white/5 py-2 px-4 text-center">
        <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono">
          Concept Build / Portfolio Demonstration by Veltris
        </p>
      </div>

      {/* Navigation */}
      <nav className="border-b border-white/10 px-6 py-6 md:px-12 flex justify-between items-center">
        <div className="font-playfair text-2xl tracking-widest uppercase">
          Blackline
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/60">
          <Link href="#artists" className="hover:text-white transition-colors">Artists</Link>
          <Link href="#styles" className="hover:text-white transition-colors">Styles</Link>
          <Link href="#booking" className="hover:text-white transition-colors">Booking</Link>
        </div>
        <div>
          <Link href="#booking" className="bg-white/5 border border-white/10 px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Book Session
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
        <div className="relative z-10 text-center max-w-4xl mx-auto py-24">
          <span className="text-[#8B0000] text-xs font-bold tracking-[0.3em] uppercase block mb-8">
            London
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] text-[#EBEBEB]">
            Your studio deserves more than an Instagram link.
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            A premium tattoo studio concept built to showcase artists, simplify enquiries, and make the business look established before a client even messages.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#booking" className="bg-[#EBEBEB] text-[#030303] px-8 py-4 uppercase tracking-[0.15em] text-sm font-semibold hover:bg-[#8B0000] hover:text-white transition-colors duration-300">
              Book a Consultation
            </Link>
            <Link href="#artists" className="border border-white/20 text-[#EBEBEB] px-8 py-4 uppercase tracking-[0.15em] text-sm font-semibold hover:bg-white/5 transition-colors duration-300">
              View Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-32 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-[#EBEBEB]">
              Instagram shows your work.<br />A website builds trust.
            </h2>
            <div className="w-12 h-[1px] bg-[#8B0000] mb-8" />
            <p className="text-white/50 leading-relaxed mb-6 font-light">
              Tattoo studios often rely entirely on Instagram. But a proper website helps clients understand artists, booking rules, FAQs, aftercare, consultation steps, and trust signals.
            </p>
            <p className="text-white/50 leading-relaxed font-light">
              It separates casual browsers from serious clients who respect your time and value your process.
            </p>
          </div>
          <div className="aspect-[4/3] bg-[#0A0A0A] border border-white/5 flex items-center justify-center relative">
            <div className="text-white/10 font-playfair text-4xl">STUDIO_IMG_01</div>
          </div>
        </div>
      </section>

      {/* Tattoo Styles */}
      <section id="styles" className="py-24 md:py-32 px-6 border-b border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl mb-16 text-center text-[#EBEBEB]">Our Disciplines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Blackwork", desc: "Heavy saturation, geometric patterns, and solid black illustrative designs." },
              { name: "Fine Line", desc: "Delicate, single-needle precision for elegant and minimalist pieces." },
              { name: "Realism", desc: "Highly detailed, lifelike portraiture and micro-realism." },
              { name: "Custom Pieces", desc: "Tailored designs built from scratch based on your vision and our expertise." }
            ].map((style, i) => (
              <div key={i} className="group border border-white/10 p-8 hover:border-white/30 transition-colors bg-[#0A0A0A]">
                <div className="aspect-square bg-[#111] mb-6 flex items-center justify-center">
                   <div className="text-white/10 font-playfair text-sm tracking-widest">{style.name.toUpperCase()}</div>
                </div>
                <h3 className="text-xl font-playfair text-[#EBEBEB] mb-3">{style.name}</h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Profiles */}
      <section id="artists" className="py-24 md:py-32 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#EBEBEB] mb-4">Resident Artists</h2>
            <p className="text-white/40 uppercase tracking-[0.2em] text-xs">Masters of their craft</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Elias Rowe", spec: "Blackwork & Geometric", bio: "With 8 years of experience, Elias focuses on large-scale blackwork and sacred geometry.", ig: "@eliasrowe_tattoo" },
              { name: "Mara Voss", spec: "Fine Line & Ornamental", bio: "Mara creates delicate, intricate designs inspired by classical architecture and botany.", ig: "@maravoss.ink" },
              { name: "Theo Kane", spec: "Realism & Portrait", bio: "Theo specializes in high-contrast realism, bringing photographic precision to the skin.", ig: "@theokane.art" }
            ].map((artist, i) => (
              <div key={i} className="flex flex-col">
                <div className="aspect-[3/4] bg-[#0A0A0A] border border-white/10 mb-6 flex items-center justify-center">
                   <div className="text-white/10 font-playfair text-sm">{artist.name.split(' ')[0].toUpperCase()}</div>
                </div>
                <h3 className="text-2xl font-playfair text-[#EBEBEB] mb-1">{artist.name}</h3>
                <p className="text-[#8B0000] text-xs font-bold tracking-[0.1em] uppercase mb-4">{artist.spec}</p>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6 flex-grow">{artist.bio}</p>
                <p className="text-white/30 text-xs font-mono mb-6">{artist.ig}</p>
                <button className="border-b border-white/30 text-[#EBEBEB] text-xs uppercase tracking-widest pb-2 text-left hover:border-white transition-colors inline-flex items-center gap-2">
                  Book with {artist.name.split(' ')[0]} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 px-6 border-b border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#EBEBEB]">Selected Work</h2>
            <div className="flex gap-4 text-xs uppercase tracking-widest text-white/50 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
              <span className="text-white whitespace-nowrap">Healed Work</span>
              <span className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">Studio Details</span>
              <span className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">Flash</span>
              <span className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">Custom</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-[#0A0A0A] border border-white/5" />
            <div className="aspect-square bg-[#0D0D0D] border border-white/5 md:row-span-2 md:aspect-auto" />
            <div className="aspect-square bg-[#0F0F0F] border border-white/5" />
            <div className="aspect-square bg-[#0A0A0A] border border-white/5" />
            <div className="aspect-square bg-[#0F0F0F] border border-white/5" />
            <div className="aspect-square bg-[#0A0A0A] border border-white/5 md:col-span-2 md:aspect-[2/1]" />
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section id="booking" className="py-24 md:py-32 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#EBEBEB] mb-4">A clearer way to handle enquiries</h2>
            <p className="text-white/50 font-light">We respect your time. Here is how we work.</p>
          </div>
          
          <div className="space-y-12">
            {[
              { num: "01", title: "Submit your idea", desc: "Client sends placement, size, references, and preferred artist via our secure form." },
              { num: "02", title: "Get matched", desc: "The studio reviews the request and recommends the right artist based on style and availability." },
              { num: "03", title: "Confirm your session", desc: "Client receives consultation details, deposit instructions, and preparation guidance." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start p-8 border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors">
                <div className="text-3xl font-playfair text-[#8B0000]">{step.num}.</div>
                <div>
                  <h3 className="text-xl font-playfair text-[#EBEBEB] mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 border-b border-white/10 bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#EBEBEB] mb-16 text-center">Frequently Asked Questions</h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="text-lg font-playfair text-[#EBEBEB]">{faq.q}</span>
                  <span className="text-white/50 text-2xl font-light ml-4">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="mt-4 text-white/50 text-sm font-light leading-relaxed pr-8">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: "Incredibly professional from start to finish. The booking process was clear, and Elias delivered a piece that exceeded my expectations.", author: "James T." },
            { text: "The studio is spotless and the atmosphere is so calming. Mara's fine line work is truly second to none in London.", author: "Sarah W." },
            { text: "Theo's realism work is unbelievable. They took the time to make sure the placement and size were perfect before starting.", author: "Marcus R." }
          ].map((testimonial, i) => (
            <div key={i} className="p-8 border border-white/10 bg-[#0A0A0A]">
              <div className="text-[#8B0000] mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-8 italic">&quot;{testimonial.text}&quot;</p>
              <p className="text-[#EBEBEB] text-sm tracking-widest uppercase">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#EBEBEB] mb-6">
            Give clients a better first impression before they ever walk in.
          </h2>
          <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
            A website like this helps a tattoo studio present its artists, explain the booking process, and turn casual interest into serious enquiries.
          </p>
          <Link href="/" className="inline-block bg-[#EBEBEB] text-[#030303] px-10 py-5 uppercase tracking-[0.15em] text-sm font-semibold hover:bg-[#8B0000] hover:text-white transition-colors duration-300">
            Start a Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center flex flex-col items-center">
        <p className="text-white/30 text-xs tracking-widest uppercase mb-4">
          © 2026 Blackline Atelier
        </p>
        <p className="text-white/20 text-[10px] tracking-widest uppercase font-mono max-w-xl leading-relaxed">
          This is a fictional concept build created by Veltris. It is not a real tattoo studio. Designed to demonstrate premium web development capabilities for local businesses.
        </p>
      </footer>
    </div>
  );
}
