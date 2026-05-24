"use client";

import { motion } from "framer-motion";
import { Scissors, Clock, UserCheck, Star, MapPin, Phone, Clock3 } from "lucide-react";
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

export default function KinshipPage() {
  const [formState, setFormState] = useState({ name: '', phone: '', service: '', date: '', notes: '' });
  const [showError, setShowError] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone || !formState.service || !formState.date) {
      setShowError(true);
      return;
    }
    // Form submission logic would go here
    alert("Booking requested successfully!");
    setFormState({ name: '', phone: '', service: '', date: '', notes: '' });
    setShowError(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setShowError(false);
  };

  return (
    <main className="bg-[#1A1A1A] text-[#D4C5B0] font-sans selection:bg-[#B85C38] selection:text-[#F5F0EB]">
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/kinship_hero.png" 
            alt="Dark moody barbershop interior" 
            fill 
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/40 via-transparent to-[#1A1A1A]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[#F5F0EB] tracking-tight mb-6"
          >
            The Cut That Keeps Them Coming Back
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-[#D4C5B0] max-w-2xl mx-auto mb-10 font-light"
          >
            KINSHIP. Northern Quarter, Manchester.<br />
            Walk-ins welcome, appointments preferred.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#book" className="px-8 py-4 bg-[#B85C38] hover:bg-[#a04e2d] text-[#F5F0EB] transition-colors duration-300 font-medium tracking-wide w-full sm:w-auto text-center">
              Book Now
            </a>
            <a href="#menu" className="px-8 py-4 border border-[#D4C5B0] text-[#D4C5B0] hover:bg-[#D4C5B0] hover:text-[#1A1A1A] transition-colors duration-300 font-medium tracking-wide w-full sm:w-auto text-center">
              See the Menu
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. The Difference */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center md:text-left group">
              <Clock className="w-10 h-10 text-[#B85C38] mb-6 mx-auto md:mx-0 transition-transform duration-500 group-hover:-translate-y-2" />
              <h3 className="font-playfair text-2xl text-[#F5F0EB] mb-4">No rushed fades</h3>
              <p className="text-[#D4C5B0]/80 leading-relaxed">
                Every cut gets a 45-minute minimum slot. We take the time required for proper detail work, ensuring a flawless finish that grows out naturally.
              </p>
            </div>
            <div className="text-center md:text-left group">
              <Scissors className="w-10 h-10 text-[#B85C38] mb-6 mx-auto md:mx-0 transition-transform duration-500 group-hover:-translate-y-2" />
              <h3 className="font-playfair text-2xl text-[#F5F0EB] mb-4">No mystery pricing</h3>
              <p className="text-[#D4C5B0]/80 leading-relaxed">
                Our menu is straightforward and presented upfront. You&apos;ll never be surprised by hidden costs, mandatory products, or last-minute upsells at the till.
              </p>
            </div>
            <div className="text-center md:text-left group">
              <UserCheck className="w-10 h-10 text-[#B85C38] mb-6 mx-auto md:mx-0 transition-transform duration-500 group-hover:-translate-y-2" />
              <h3 className="font-playfair text-2xl text-[#F5F0EB] mb-4">No strangers</h3>
              <p className="text-[#D4C5B0]/80 leading-relaxed">
                When you book with a barber, that&apos;s who cuts your hair. We believe in building consistency so your barber understands exactly how your hair sits.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. The Menu */}
      <section id="menu" className="py-24 px-6 bg-[#1A1A1A] relative">
        <div className="absolute inset-0 bg-[url('/images/black-wool.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#F5F0EB] mb-16 text-center">The Menu</h2>
            <div className="space-y-8">
              {[
                { name: "Skin Fade", price: "£28", desc: "Precision zero fade to the bone, expertly blended into the top." },
                { name: "Classic Cut", price: "£22", desc: "Traditional scissor and clipper work, tailored to your head shape." },
                { name: "Beard Sculpt", price: "£15", desc: "Clipper trim, sharp foil lineup, and conditioning beard oil finish." },
                { name: "Hot Towel & Razor", price: "£18", desc: "Traditional wet shave with pre-shave oil, hot towel, and open razor." },
                { name: "The Full Works", price: "£45", desc: "The ultimate package: precision cut, beard sculpt, and hot towel finish." }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col sm:flex-row justify-between items-baseline border-b border-[#D4C5B0]/20 pb-4 hover:border-[#B85C38] transition-colors duration-300">
                  <div className="w-full">
                    <div className="flex justify-between items-end w-full mb-2">
                      <h4 className="font-playfair text-xl md:text-2xl text-[#F5F0EB]">{item.name}</h4>
                      <span className="text-xl md:text-2xl text-[#B85C38] font-playfair">{item.price}</span>
                    </div>
                    <p className="text-[#D4C5B0]/70 text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-8 flex flex-col md:flex-row justify-between items-center bg-[#D4C5B0]/5 p-6 rounded-sm border border-[#D4C5B0]/10">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                  <h4 className="font-playfair text-lg text-[#F5F0EB] mb-1">Add eyebrow shape</h4>
                  <p className="text-[#D4C5B0]/70 text-sm">Clean up the strays with a quick trim and razor line.</p>
                </div>
                <span className="text-xl text-[#B85C38] font-playfair">£5</span>
              </div>
              
              <div className="text-center pt-4">
                <p className="text-sm text-[#D4C5B0]/60 italic">Student discount available — 15% off (Mon–Thu before 4pm)</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. The Space */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[250px]">
            <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1600&auto=format&fit=crop" alt="Barbershop interior" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            </div>
            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden">
              <Image src="/images/straight-razor.png" alt="Straight razor detail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            </div>
            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden">
              <Image src="/images/hot-towel.png" alt="Hot towel treatment" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#B85C38]/20 mix-blend-multiply group-hover:bg-[#B85C38]/40 transition-colors duration-500"></div>
            </div>
          </div>
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-playfair text-[#F5F0EB] italic leading-relaxed">
              &quot;4 chairs. No waiting music we didn&apos;t choose. Coffee from a local roaster.&quot;
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 5. The Barbers */}
      <section className="py-24 px-6 bg-[#222222]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#F5F0EB] mb-16 text-center">The Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { name: "Marcus", role: "Fades & texture, 8 years", img: "/images/barber_marcus.png" },
                { name: "Leo", role: "Classic cuts, straight razor, 12 years", img: "/images/barber_leo.png" },
                { name: "Ava", role: "Beard sculpting, pattern work, 5 years", img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop" }
              ].map((barber, idx) => (
                <div key={idx} className="group text-center">
                  <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-[#1A1A1A]">
                    <Image src={barber.img} alt={`Portrait of ${barber.name}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                  </div>
                  <h3 className="font-playfair text-2xl text-[#F5F0EB] mb-2">{barber.name}</h3>
                  <p className="text-[#D4C5B0]/80 mb-4 h-12">{barber.role}</p>
                  <a href="#" className="inline-block text-sm text-[#B85C38] hover:text-[#F5F0EB] transition-colors border-b border-[#B85C38] pb-1 uppercase tracking-widest">
                    @kinship.{barber.name.toLowerCase()}
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Proof */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-[#F5F0EB] mb-4">The Verdict</h2>
            <div className="flex justify-center gap-1 text-[#B85C38]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { text: "Been coming to Marcus for 3 years. Never had a bad cut. The attention to detail is unmatched in the Northern Quarter.", author: "Jamie R.", time: "2 weeks ago" },
              { text: "Finally found a place that doesn't rush. Worth every penny. They actually listen to what you want before touching the clippers.", author: "Sarah K.", time: "1 month ago" },
              { text: "Leo's hot towel shave is a ritual. Proper old-school technique but in a space that feels entirely modern. Book ahead, they're busy.", author: "David M.", time: "2 months ago" },
              { text: "Ava sorted my beard out perfectly before my wedding. The vibe in the shop is relaxed, no pretension, just good music and great cuts.", author: "Tom H.", time: "3 months ago" }
            ].map((review, idx) => (
              <div key={idx} className="bg-[#222222] p-8 md:p-10 border border-[#D4C5B0]/5 hover:border-[#B85C38]/30 transition-colors duration-300">
                <p className="text-[#F5F0EB] font-playfair text-lg md:text-xl leading-relaxed mb-6 italic">&quot;{review.text}&quot;</p>
                <div className="flex justify-between items-center border-t border-[#D4C5B0]/10 pt-4">
                  <span className="font-bold tracking-wide text-[#D4C5B0]">{review.author}</span>
                  <span className="text-sm text-[#D4C5B0]/50">{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 7. Book / Contact */}
      <section id="book" className="py-24 px-6 bg-[#151515] border-t border-[#D4C5B0]/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Form Side */}
              <div>
                <h2 className="font-playfair text-4xl md:text-5xl text-[#F5F0EB] mb-8">Claim Your Chair</h2>
                <form onSubmit={handleBook} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#D4C5B0]/80 mb-2 uppercase tracking-wider">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className={`w-full bg-[#1A1A1A] border ${showError && !formState.name ? 'border-red-500' : 'border-[#D4C5B0]/20'} p-4 text-[#F5F0EB] focus:outline-none focus:border-[#B85C38] transition-colors`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#D4C5B0]/80 mb-2 uppercase tracking-wider">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-[#1A1A1A] border ${showError && !formState.phone ? 'border-red-500' : 'border-[#D4C5B0]/20'} p-4 text-[#F5F0EB] focus:outline-none focus:border-[#B85C38] transition-colors`}
                        placeholder="07700 900000"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#D4C5B0]/80 mb-2 uppercase tracking-wider">Service</label>
                      <select 
                        name="service"
                        value={formState.service}
                        onChange={handleInputChange}
                        className={`w-full bg-[#1A1A1A] border ${showError && !formState.service ? 'border-red-500' : 'border-[#D4C5B0]/20'} p-4 text-[#F5F0EB] focus:outline-none focus:border-[#B85C38] transition-colors appearance-none`}
                      >
                        <option value="">Select a service</option>
                        <option value="skin_fade">Skin Fade</option>
                        <option value="classic_cut">Classic Cut</option>
                        <option value="beard_sculpt">Beard Sculpt</option>
                        <option value="hot_towel">Hot Towel & Razor</option>
                        <option value="full_works">The Full Works</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-[#D4C5B0]/80 mb-2 uppercase tracking-wider">Preferred Date</label>
                      <input 
                        type="date" 
                        name="date"
                        value={formState.date}
                        onChange={handleInputChange}
                        className={`w-full bg-[#1A1A1A] border ${showError && !formState.date ? 'border-red-500' : 'border-[#D4C5B0]/20'} p-4 text-[#F5F0EB] focus:outline-none focus:border-[#B85C38] transition-colors [color-scheme:dark]`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#D4C5B0]/80 mb-2 uppercase tracking-wider">Notes (Optional)</label>
                    <textarea 
                      name="notes"
                      value={formState.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-[#1A1A1A] border border-[#D4C5B0]/20 p-4 text-[#F5F0EB] focus:outline-none focus:border-[#B85C38] transition-colors resize-none"
                      placeholder="Any specific barber request or details?"
                    ></textarea>
                  </div>

                  {showError && <p className="text-red-500 text-sm">Please fill in all required fields.</p>}

                  <button type="submit" className="w-full bg-[#B85C38] hover:bg-[#a04e2d] text-[#F5F0EB] p-4 font-medium tracking-wide uppercase transition-colors duration-300">
                    Request Appointment
                  </button>
                </form>
              </div>

              {/* Info Side */}
              <div className="space-y-10 lg:pl-10 lg:border-l border-[#D4C5B0]/10 flex flex-col justify-center">
                <div className="flex items-start gap-4 group">
                  <MapPin className="w-6 h-6 text-[#B85C38] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-playfair text-xl text-[#F5F0EB] mb-2">Location</h4>
                    <p className="text-[#D4C5B0]/80 leading-relaxed">
                      14 Tib Street<br />
                      Northern Quarter<br />
                      Manchester, M4 1LA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <Clock3 className="w-6 h-6 text-[#B85C38] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-playfair text-xl text-[#F5F0EB] mb-2">Hours</h4>
                    <ul className="text-[#D4C5B0]/80 space-y-1">
                      <li className="flex justify-between w-48"><span>Mon–Fri</span> <span>9am–7pm</span></li>
                      <li className="flex justify-between w-48"><span>Sat</span> <span>9am–5pm</span></li>
                      <li className="flex justify-between w-48 text-[#D4C5B0]/50"><span>Sun</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <Phone className="w-6 h-6 text-[#B85C38] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-playfair text-xl text-[#F5F0EB] mb-2">Contact</h4>
                    <a href="tel:01618349281" className="text-[#D4C5B0]/80 hover:text-[#B85C38] transition-colors">
                      0161 834 9281
                    </a>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="relative w-full h-48 bg-[#222222] mt-4 overflow-hidden border border-[#D4C5B0]/10 group">
                  <Image 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                    alt="Map of Northern Quarter" 
                    fill 
                    className="object-cover opacity-50 grayscale transition-transform duration-700 group-hover:scale-105 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="bg-[#1A1A1A] text-[#F5F0EB] px-4 py-2 text-sm uppercase tracking-widest border border-[#B85C38]/50 shadow-lg">
                      View on Map
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-[#0A0A0A] py-12 px-6 border-t border-[#D4C5B0]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <a href="#" className="text-[#D4C5B0]/60 hover:text-[#B85C38] transition-colors uppercase tracking-widest text-sm">Instagram</a>
            <a href="#" className="text-[#D4C5B0]/60 hover:text-[#B85C38] transition-colors uppercase tracking-widest text-sm">TikTok</a>
          </div>
          <div className="text-[#D4C5B0]/40 text-sm text-center md:text-right">
            <p>© 2026 KINSHIP Barber Co.</p>
            <p className="mt-1">
              Website by <Link href="/" className="hover:text-[#F5F0EB] transition-colors border-b border-transparent hover:border-[#D4C5B0]/30 pb-0.5">Veltris</Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
