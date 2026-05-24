"use client";

import { motion } from "framer-motion";
import { Hourglass, LayoutTemplate, Scissors, Quote, MapPin, Clock3, CalendarHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function NoirAtelierPage() {
  const [formState, setFormState] = useState({ name: '', email: '', measurements: '', date: '', notes: '' });
  const [showError, setShowError] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.date) {
      setShowError(true);
      return;
    }
    alert("Fitting requested successfully!");
    setFormState({ name: '', email: '', measurements: '', date: '', notes: '' });
    setShowError(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setShowError(false);
  };

  return (
    <main className="bg-[#0A0A0A] text-[#C0C0C0] font-sans selection:bg-[#C0C0C0] selection:text-[#0A0A0A] font-light">
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/black-wool.png" 
            alt="Dark premium wool fabric texture" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-[#F0F0F0] tracking-widest mb-6 uppercase"
          >
            Clothes That Outlast Trends.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-[#C0C0C0] max-w-2xl mx-auto mb-10 tracking-[0.2em] uppercase font-thin"
          >
            Made in London.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#fitting" className="px-8 py-4 bg-[#F0F0F0] hover:bg-[#C0C0C0] text-[#0A0A0A] transition-colors duration-300 font-medium tracking-[0.1em] w-full sm:w-auto text-center uppercase text-sm">
              Book a Fitting
            </a>
            <a href="#collection" className="px-8 py-4 border border-[#C0C0C0]/50 text-[#C0C0C0] hover:bg-[#C0C0C0]/10 transition-colors duration-300 font-medium tracking-[0.1em] w-full sm:w-auto text-center uppercase text-sm">
              View Collection
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Philosophy */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-[#C0C0C0]/10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-[#F0F0F0] tracking-widest uppercase mb-4">Our Philosophy</h2>
            <div className="w-12 h-[1px] bg-[#C0C0C0]/50 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center group flex flex-col items-center">
              <Hourglass className="w-8 h-8 text-[#C0C0C0] mb-8 transition-transform duration-700 group-hover:rotate-180" strokeWidth={1} />
              <h3 className="font-cinzel text-xl text-[#F0F0F0] mb-4 tracking-widest uppercase">Slow Fashion</h3>
              <p className="text-[#C0C0C0]/70 leading-relaxed font-thin text-sm tracking-wide">
                We reject the seasonal rush. Every garment is crafted meticulously, designed to age gracefully and remain relevant across decades rather than seasons.
              </p>
            </div>
            <div className="text-center group flex flex-col items-center">
              <LayoutTemplate className="w-8 h-8 text-[#C0C0C0] mb-8 transition-transform duration-700 group-hover:scale-110" strokeWidth={1} />
              <h3 className="font-cinzel text-xl text-[#F0F0F0] mb-4 tracking-widest uppercase">3 Pieces Per Collection</h3>
              <p className="text-[#C0C0C0]/70 leading-relaxed font-thin text-sm tracking-wide">
                Focus over volume. By limiting our releases to three distinct silhouettes at a time, we ensure absolute perfection in cut, drape, and finishing.
              </p>
            </div>
            <div className="text-center group flex flex-col items-center">
              <Scissors className="w-8 h-8 text-[#C0C0C0] mb-8 transition-transform duration-700 group-hover:scale-110" strokeWidth={1} />
              <h3 className="font-cinzel text-xl text-[#F0F0F0] mb-4 tracking-widest uppercase">Made-to-Measure Only</h3>
              <p className="text-[#C0C0C0]/70 leading-relaxed font-thin text-sm tracking-wide">
                Off-the-rack is an illusion. We cut our patterns to your exact geometry, ensuring a fit that off-the-peg garments can never achieve.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. The Collection */}
      <section id="collection" className="py-32 px-6 bg-[#050505] relative border-y border-[#C0C0C0]/10">
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="font-cinzel text-4xl md:text-5xl text-[#F0F0F0] mb-4 tracking-widest uppercase">The Collection</h2>
              <p className="text-[#C0C0C0]/60 font-thin tracking-widest text-sm uppercase">Edition No. 04</p>
            </div>
            <div className="space-y-12">
              {[
                { name: "The Midnight Trench", price: "£1,450", fabric: "Heavyweight Italian Wool Gabardine, Silk Habotai Lining" },
                { name: "Obsidian Silk Slip", price: "£850", fabric: "40mm Double Georgette Silk, French Seams" },
                { name: "The Architect Blazer", price: "£1,200", fabric: "Structured British Wool Barathea, Horn Buttons" },
                { name: "Crucible Trousers", price: "£650", fabric: "High-Twist Worsted Wool, Unfinished Hem" },
                { name: "Ghost Chiffon Blouse", price: "£550", fabric: "Sheer Silk Chiffon, Elongated Cuffs" },
                { name: "Monolith Overcoat", price: "£1,850", fabric: "Double-Faced Cashmere, Hand-Finished Lapels" }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col md:flex-row justify-between items-baseline border-b border-[#C0C0C0]/10 pb-6 hover:border-[#C0C0C0]/50 transition-colors duration-500">
                  <div className="w-full md:w-3/4">
                    <h4 className="font-cinzel text-xl md:text-2xl text-[#F0F0F0] tracking-widest mb-2 uppercase group-hover:text-[#C0C0C0] transition-colors">{item.name}</h4>
                    <p className="text-[#C0C0C0]/60 font-thin text-sm tracking-wide">{item.fabric}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="text-lg md:text-xl text-[#F0F0F0] font-light tracking-wider">{item.price}</span>
                  </div>
                </div>
              ))}
              
              <div className="pt-12 text-center">
                <p className="text-sm text-[#C0C0C0]/60 font-thin tracking-widest uppercase">Please note: Every piece carries a strict 4-week made-to-order timeline.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. The Atelier */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-[#F0F0F0] tracking-widest uppercase mb-4">The Atelier</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 auto-rows-[300px]">
            <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden bg-[#111]">
              <Image src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1600&auto=format&fit=crop" alt="Tailor working on fabric" fill className="object-cover grayscale opacity-70 transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-[#111]">
              <Image src="/images/ivory-cashmere.png" alt="Cream silk fabric detail" fill className="object-cover grayscale opacity-70 transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-[#111]">
              <Image src="/images/camel-blazer.png" alt="Camel cashmere fabric detail" fill className="object-cover grayscale opacity-70 transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-cinzel text-[#F0F0F0] tracking-widest uppercase">
              &quot;From first fitting to final stitch — 4 weeks.&quot;
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 5. The Designer */}
      <section className="py-32 px-6 bg-[#050505] border-y border-[#C0C0C0]/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/elena_voss.png" alt="Elena Voss, Head Designer" fill className="object-cover grayscale" />
              </div>
              <div>
                <h2 className="font-cinzel text-4xl md:text-5xl text-[#F0F0F0] mb-2 tracking-widest uppercase">Elena Voss</h2>
                <p className="text-[#C0C0C0]/50 font-thin tracking-widest text-sm uppercase mb-8">Head Designer & Founder</p>
                
                <div className="space-y-6 text-[#C0C0C0]/80 font-thin leading-loose tracking-wide">
                  <p>
                    Trained on Savile Row before relocating to Paris to master soft draping, Elena Voss founded Noir Atelier in 2021 with a singular vision: to create an uncompromising wardrobe for the modern minimalist.
                  </p>
                  <p>
                    Voss approaches each garment as an architectural problem, stripping away superfluous details until only the structural essence and pure fabric remain.
                  </p>
                </div>

                <div className="mt-12 space-y-8 border-l border-[#C0C0C0]/20 pl-6">
                  <div>
                    <p className="font-cinzel text-lg text-[#F0F0F0] italic mb-2 tracking-wide">&quot;Voss is single-handedly redefining what modern luxury feels like in London.&quot;</p>
                    <p className="text-[#C0C0C0]/50 font-thin text-xs uppercase tracking-widest">— Vogue UK</p>
                  </div>
                  <div>
                    <p className="font-cinzel text-lg text-[#F0F0F0] italic mb-2 tracking-wide">&quot;A masterclass in restraint. The tailoring is sharp enough to cut glass.&quot;</p>
                    <p className="text-[#C0C0C0]/50 font-thin text-xs uppercase tracking-widest">— ES Magazine</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Press */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mb-12 opacity-70">
            <h4 className="font-cinzel text-2xl tracking-[0.3em] uppercase">Vogue</h4>
            <h4 className="font-cinzel text-2xl tracking-[0.3em] uppercase">GQ</h4>
            <h4 className="font-cinzel text-2xl tracking-[0.3em] uppercase">Tatler</h4>
          </div>
          <p className="text-[#C0C0C0]/80 font-thin text-sm uppercase tracking-[0.2em]">As featured in leading publications</p>
        </FadeIn>
      </section>

      {/* 7. Book a Fitting */}
      <section id="fitting" className="py-32 px-6 bg-[#050505] border-t border-[#C0C0C0]/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Form Side */}
              <div>
                <h2 className="font-cinzel text-3xl md:text-4xl text-[#F0F0F0] mb-12 tracking-widest uppercase">Request a Fitting</h2>
                <form onSubmit={handleBook} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className={`w-full bg-transparent border-b ${showError && !formState.name ? 'border-red-900' : 'border-[#C0C0C0]/30'} pb-3 text-[#F0F0F0] focus:outline-none focus:border-[#F0F0F0] transition-colors font-thin placeholder-[#C0C0C0]/30`}
                        placeholder="FULL NAME"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className={`w-full bg-transparent border-b ${showError && !formState.email ? 'border-red-900' : 'border-[#C0C0C0]/30'} pb-3 text-[#F0F0F0] focus:outline-none focus:border-[#F0F0F0] transition-colors font-thin placeholder-[#C0C0C0]/30`}
                        placeholder="EMAIL ADDRESS"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <input 
                        type="text" 
                        name="measurements"
                        value={formState.measurements}
                        onChange={handleInputChange}
                        className={`w-full bg-transparent border-b border-[#C0C0C0]/30 pb-3 text-[#F0F0F0] focus:outline-none focus:border-[#F0F0F0] transition-colors font-thin placeholder-[#C0C0C0]/30`}
                        placeholder="USUAL SIZE / MEASUREMENTS"
                      />
                    </div>
                    <div>
                      <input 
                        type="date" 
                        name="date"
                        value={formState.date}
                        onChange={handleInputChange}
                        className={`w-full bg-transparent border-b ${showError && !formState.date ? 'border-red-900' : 'border-[#C0C0C0]/30'} pb-3 text-[#C0C0C0]/70 focus:outline-none focus:border-[#F0F0F0] transition-colors font-thin uppercase [color-scheme:dark]`}
                      />
                    </div>
                  </div>

                  <div>
                    <textarea 
                      name="notes"
                      value={formState.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-transparent border-b border-[#C0C0C0]/30 pb-3 text-[#F0F0F0] focus:outline-none focus:border-[#F0F0F0] transition-colors resize-none font-thin placeholder-[#C0C0C0]/30"
                      placeholder="STYLE NOTES OR SPECIFIC GARMENTS OF INTEREST"
                    ></textarea>
                  </div>

                  {showError && <p className="text-red-900 text-xs tracking-widest uppercase">Please provide your name, email, and preferred date.</p>}

                  <button type="submit" className="w-full bg-[#F0F0F0] hover:bg-[#C0C0C0] text-[#0A0A0A] py-5 font-medium tracking-[0.2em] uppercase transition-colors duration-300 text-sm">
                    Submit Inquiry
                  </button>
                </form>
              </div>

              {/* Info Side */}
              <div className="space-y-12 lg:pl-16 lg:border-l border-[#C0C0C0]/10 flex flex-col justify-center">
                <div className="flex items-start gap-6">
                  <MapPin className="w-5 h-5 text-[#C0C0C0] mt-1 shrink-0" strokeWidth={1} />
                  <div>
                    <h4 className="font-cinzel text-lg text-[#F0F0F0] mb-3 tracking-widest uppercase">The Atelier</h4>
                    <p className="text-[#C0C0C0]/70 font-thin tracking-wider leading-relaxed text-sm">
                      42 Redchurch Street<br />
                      Shoreditch<br />
                      London, E2 7DP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CalendarHeart className="w-5 h-5 text-[#C0C0C0] mt-1 shrink-0" strokeWidth={1} />
                  <div>
                    <h4 className="font-cinzel text-lg text-[#F0F0F0] mb-3 tracking-widest uppercase">Appointments</h4>
                    <p className="text-[#C0C0C0]/70 font-thin tracking-wider leading-relaxed text-sm mb-2">
                      Strictly by appointment only.<br />
                      No walk-ins accepted.
                    </p>
                    <p className="text-[#C0C0C0]/50 font-thin text-xs tracking-widest uppercase">Mon – Sat: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-[#0A0A0A] py-16 px-6 border-t border-[#C0C0C0]/20 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-cinzel text-2xl text-[#F0F0F0] tracking-widest uppercase mb-2">Noir Atelier</h2>
            <p className="text-[#C0C0C0]/50 font-thin text-xs tracking-widest uppercase">London</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[#C0C0C0]/60 hover:text-[#F0F0F0] transition-colors font-thin text-xs uppercase tracking-widest">Instagram</a>
            <a href="#" className="text-[#C0C0C0]/60 hover:text-[#F0F0F0] transition-colors font-thin text-xs uppercase tracking-widest">Journal</a>
          </div>
          <div className="text-[#C0C0C0]/40 font-thin text-xs tracking-widest uppercase">
            <p>© 2026 NOIR ATELIER</p>
            <p className="mt-2">
              DESIGN BY <Link href="/" className="hover:text-[#F0F0F0] transition-colors">VELTRIS</Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
