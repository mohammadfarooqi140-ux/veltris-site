"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function MarlowDeli() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitted">("idle");

  const sandwiches = [
    {
      name: "The Marlow Club",
      price: "£8.90",
      desc: "Roast chicken, smoked bacon, tomato, crisp lettuce, house mayo.",
      image: "/marlow/club.png",
    },
    {
      name: "Burrata Verde",
      price: "£9.50",
      desc: "Burrata, basil pesto, rocket, roasted peppers, olive oil.",
      image: "/marlow/burrata.png",
    },
    {
      name: "Hot Honey Chicken",
      price: "£8.75",
      desc: "Crispy chicken, hot honey, pickles, slaw, garlic aioli.",
      image: "/marlow/hot-honey.png",
    },
    {
      name: "Salt Beef Classic",
      price: "£9.25",
      desc: "Warm salt beef, mustard, pickles, rye-style bread.",
      image: "/marlow/salt-beef.png",
    },
    {
      name: "Tuna Melt",
      price: "£7.90",
      desc: "Tuna, cheddar, spring onion, cracked pepper, toasted sourdough.",
      image: "/marlow/tuna-melt.png",
    },
    {
      name: "Grilled Halloumi",
      price: "£8.40",
      desc: "Halloumi, chilli jam, cucumber, mint yoghurt, seeded roll.",
      image: "/marlow/halloumi.png",
    },
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1B3B2B] font-sans selection:bg-[#1B3B2B] selection:text-[#FDFBF7] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#FDFBF7]/90 backdrop-blur-md z-50 border-b border-[#1B3B2B]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight">
            Marlow Deli
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-[#D9381E] transition-colors">Menu</a>
            <a href="#about" className="hover:text-[#D9381E] transition-colors">About</a>
            <a href="#location" className="hover:text-[#D9381E] transition-colors">Location</a>
          </div>
          <div>
             <a href="#location" className="bg-[#1B3B2B] text-[#FDFBF7] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#D9381E] transition-colors">
               Find Us
             </a>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 mb-6">
               <span className="bg-[#D9381E]/10 text-[#D9381E] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                 Open Daily
               </span>
               <span className="text-sm font-medium opacity-80">Fresh bread · Local ingredients</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-[#1B3B2B]">
              Freshly Made.<br />Every Day.
            </h1>
            <p className="text-lg md:text-xl text-[#1B3B2B]/70 mb-10 leading-relaxed max-w-lg">
              Neighbourhood sandwiches, seasonal ingredients, proper coffee, and quick lunches made fresh from morning to close.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="bg-[#1B3B2B] text-[#FDFBF7] px-8 py-4 rounded-full font-medium text-center hover:bg-[#D9381E] transition-colors">
                View Menu
              </a>
              <a href="#location" className="border border-[#1B3B2B]/20 text-[#1B3B2B] px-8 py-4 rounded-full font-medium text-center hover:bg-[#1B3B2B]/5 transition-colors">
                Find Us
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/marlow/hero.png" 
              alt="Freshly made artisan sandwich" 
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Sandwiches Section */}
      <section id="menu" className="py-24 px-6 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Today’s favourites</h2>
            <p className="text-[#1B3B2B]/70 text-lg max-w-2xl mx-auto">
              Prepared fresh every morning. Once they&apos;re gone, they&apos;re gone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sandwiches.map((sandwich, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={sandwich.image} 
                    alt={sandwich.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-2xl font-bold">{sandwich.name}</h3>
                    <span className="font-medium text-[#D9381E]">{sandwich.price}</span>
                  </div>
                  <p className="text-[#1B3B2B]/70 leading-relaxed text-sm">
                    {sandwich.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Customers Love Us */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Built for the lunch rush,<br />made with care</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Fresh Ingredients", desc: "Bread, fillings, sauces, and sides prepared daily." },
              { title: "Fast Service", desc: "Easy menu, quick ordering, and lunch-ready service." },
              { title: "Local Favourite", desc: "A neighbourhood spot people remember and recommend." }
            ].map((feature, i) => (
              <div key={i} className="text-center md:text-left flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-[#1B3B2B]/5 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-[#D9381E]" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#1B3B2B]/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Customer Reviews */}
      <section className="py-24 px-6 bg-[#1B3B2B] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">What regulars say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Best lunch spot near the office. Fast, fresh, and always consistent.", author: "Amira K." },
              { quote: "The Hot Honey Chicken is dangerously good. Proper ingredients, not boring meal-deal sandwiches.", author: "James R." },
              { quote: "Clean branding, friendly staff, and the kind of place you actually want to come back to.", author: "Sophie M." }
            ].map((review, i) => (
              <div key={i} className="bg-[#244A37] p-8 rounded-3xl">
                <div className="flex gap-1 mb-6 text-[#D9381E]">
                  {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                </div>
                <p className="text-lg leading-relaxed mb-6 font-medium italic opacity-90">
                  &quot;{review.quote}&quot;
                </p>
                <p className="font-medium text-[#FDFBF7]/70">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Location & Opening Hours */}
      <section id="location" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Find us for breakfast,<br />lunch, and coffee</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#F5F2EB] rounded-3xl overflow-hidden p-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-[#D9381E] w-6 h-6" />
                  <h3 className="font-serif text-2xl font-bold">Address</h3>
                </div>
                <p className="text-lg text-[#1B3B2B]/80 leading-relaxed ml-9">
                  24 Market Lane<br />
                  Manchester M1 2AB<br />
                  United Kingdom
                </p>
              </div>
              
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-[#D9381E] w-6 h-6" />
                  <h3 className="font-serif text-2xl font-bold">Opening Hours</h3>
                </div>
                <div className="ml-9 space-y-2 text-[#1B3B2B]/80">
                  <p className="flex justify-between max-w-xs">
                    <span>Monday–Friday:</span>
                    <span className="font-medium">8:00am–5:00pm</span>
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00am–4:00pm</span>
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span>Sunday:</span>
                    <span className="font-medium text-[#D9381E]">Closed</span>
                  </p>
                </div>
              </div>

              <a href="#" className="inline-flex items-center justify-center gap-2 bg-[#1B3B2B] text-[#FDFBF7] px-8 py-4 rounded-full font-medium hover:bg-[#D9381E] transition-colors self-start ml-9">
                Get Directions <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="relative aspect-square lg:aspect-auto bg-[#E5DFD3] rounded-2xl overflow-hidden flex items-center justify-center">
               <div className="text-center">
                 <MapPin className="w-12 h-12 text-[#1B3B2B]/30 mx-auto mb-4" />
                 <p className="text-[#1B3B2B]/50 font-medium uppercase tracking-widest text-sm">Map Preview</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section className="py-24 px-6 border-t border-[#1B3B2B]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Questions, catering, or large orders?</h2>
            <p className="text-lg text-[#1B3B2B]/70 mb-10 leading-relaxed max-w-md">
              Drop us a message below or reach out directly. We require 48 hours notice for catering orders.
            </p>
            <div className="space-y-4">
              <p className="text-lg font-medium">0161 000 4821</p>
              <p className="text-lg font-medium hover:text-[#D9381E] transition-colors">
                <a href="mailto:hello@marlowdeli.co.uk">hello@marlowdeli.co.uk</a>
              </p>
            </div>
          </div>
          
          <div className="bg-[#F5F2EB] p-8 md:p-10 rounded-3xl">
            {formStatus === "submitted" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-[#1B3B2B]/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#1B3B2B]" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">Message Sent</h3>
                <p className="text-[#1B3B2B]/70 mb-8">We&apos;ll get back to you shortly.</p>
                <button onClick={() => setFormStatus("idle")} className="text-sm font-medium underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormStatus("submitted"); }} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Name</label>
                  <input type="text" required className="w-full bg-[#FDFBF7] border border-[#1B3B2B]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1B3B2B] transition-colors" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input type="email" required className="w-full bg-[#FDFBF7] border border-[#1B3B2B]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1B3B2B] transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea required rows={4} className="w-full bg-[#FDFBF7] border border-[#1B3B2B]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1B3B2B] transition-colors resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#1B3B2B] text-[#FDFBF7] font-medium py-4 rounded-xl hover:bg-[#D9381E] transition-colors">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. Final Veltris CTA */}
      <section className="py-24 px-6 bg-[#1B3B2B] text-[#FDFBF7] text-center border-t-8 border-[#D9381E]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
            A better first impression for every hungry customer.
          </h2>
          <p className="text-lg md:text-xl text-[#FDFBF7]/70 mb-12 leading-relaxed max-w-2xl mx-auto">
            A site like this helps a local sandwich shop show its menu, opening hours, location, reviews, and brand before the customer ever walks in.
          </p>
          <Link href="/" className="inline-block bg-[#FDFBF7] text-[#1B3B2B] px-10 py-5 rounded-full font-bold uppercase tracking-wide hover:bg-[#D9381E] hover:text-[#FDFBF7] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            Start a Project
          </Link>
          <div className="mt-16 text-center">
            <p className="text-[#FDFBF7]/40 text-[10px] uppercase tracking-widest font-mono">
              Concept build by Veltris.<br />Fictional brand created for demonstration.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-[#1B3B2B]/10">
         <p className="text-[#1B3B2B]/50 text-sm">© 2026 Marlow Deli. All rights reserved.</p>
      </footer>
    </div>
  );
}
