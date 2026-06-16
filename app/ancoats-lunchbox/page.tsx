"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";

// --- STRUCTURED DATA ---

const images = {
  hero: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (2).jpeg", // Full English
  matchday: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.13 PM (1).jpeg", // Storefront corner
  trust: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (8).jpeg", // Interior with people
  featured: {
    fullEnglish: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (2).jpeg",
    cumberlandSausage: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.13 PM.jpeg", // Takeaway boxes
    steakMelt: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (6).jpeg", // Panini
    breakfastBap: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (4).jpeg"
  }
};

const businessInfo = {
  name: "Ancoats Lunchbox",
  phoneDisplay: "+44 161 274 3482",
  phoneLink: "tel:+441612743482",
  address: "17 Cambrian Street, Ancoats, Manchester M40 7EP",
  directionsLink: "https://maps.google.com/?q=17+Cambrian+Street+Ancoats+Manchester+M40+7EP",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 2:00 PM" },
    { day: "Saturday", time: "8:00 AM – 1:00 PM" },
    { day: "Sunday", time: "Closed" }
  ],
  socials: [
    { label: "Instagram", value: "@ancoatslunchbox" },
    { label: "Facebook", value: "Ancoats Lunchbox" },
  ]
};

const whyLocals = [
  { title: "Proper portions", desc: "Food that fills the plate without pretending to be fancy." },
  { title: "Fair prices", desc: "Good value breakfasts and lunches without “posh cafe” prices." },
  { title: "Friendly service", desc: "A small family-run place where regulars feel known." },
  { title: "Freshly cooked", desc: "Breakfasts and hot food made properly, not left sitting around." }
];

const featuredFood = [
  { name: "Full English Platter", desc: "Bacon, sausages, eggs, hash browns, beans, black pudding, tomato, mushrooms, and toast.", image: images.featured.fullEnglish },
  { name: "Cumberland Sausage Dinner", desc: "Coiled Cumberland sausage served with chips or mash, vegetables, and rich gravy.", image: images.featured.cumberlandSausage },
  { name: "Rump Steak Melt", desc: "Grilled rump steak with melted cheese and onions, served hot on toasted ciabatta.", image: images.featured.steakMelt },
  { name: "Breakfast Bap", desc: "Sausage, bacon, fried egg, and hash brown in a soft roll.", image: images.featured.breakfastBap }
];

const fullMenu = [
  {
    category: "Breakfast & Morning",
    items: [
      { name: "Full English Platter", desc: "Bacon, sausages, eggs, hash browns, beans, black pudding, tomato, mushrooms, and toast." },
      { name: "Three Generations Breakfast", desc: "A family-style breakfast plate inspired by the cafe’s long-running morning regulars." },
      { name: "Breakfast Bap", desc: "Sausage, bacon, fried egg, and hash brown in a soft roll." }
    ]
  },
  {
    category: "Lunch & Specials",
    items: [
      { name: "Cumberland Sausage Dinner", desc: "Coiled Cumberland sausage served with chips or mash, vegetables, and rich gravy." },
      { name: "Rump Steak Melt", desc: "Grilled rump steak with melted cheese and onions, served hot on toasted ciabatta." },
      { name: "The Classic Comfort", desc: "Thick-cut ham, double fried egg, and hot chips." },
      { name: "The Pork Special", desc: "Slow-cooked pork, sage and onion stuffing, and apple sauce on a fresh floured roll." }
    ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Builder’s Tea", desc: "A proper hot cup of tea." },
      { name: "Fresh Coffee", desc: "Freshly made hot coffee." },
      { name: "Soft Drinks", desc: "Cans and bottles from the fridge." }
    ]
  }
];

const reviews = [
  { name: "Will Simister", text: "Been coming here for 20 years. Food is cheap but top quality." },
  { name: "Kath Bracken", text: "Food the best. We call mainly for breakfasts. Wouldn’t go anywhere else." },
  { name: "Lee McElroy", text: "Excellent pit stop for breakfast. Great staff and food is excellent." },
  { name: "James Fairclough", text: "Amazing breaky. Very friendly staff. Fairly priced." },
  { name: "Caitlin Unsworth", text: "Incredible food. The quality is insane and the price is even better." },
  { name: "Dericko Patito", text: "Very nice English breakfast and good value too." }
];

export default function AncoatsLunchboxConcept() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d] selection:bg-[#8b1c1c] selection:text-white font-sans">
      
      {/* 1. HERO */}
      <section className="relative px-6 pt-28 pb-12 md:pt-40 md:pb-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 space-y-6 z-10 w-full">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold tracking-tight text-[#1a1a1a] leading-[1.05]">
              Manchester breakfasts <span className="text-[#8b1c1c]">done right</span> for over 22 years.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#555] max-w-xl leading-relaxed">
              Family-run for three generations. Proper breakfasts, hot dinners, and takeaway favourites served from the heart of Ancoats.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href={businessInfo.phoneLink}
              className="bg-[#8b1c1c] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-center hover:bg-[#6b1414] transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone size={16} />
              Call Ahead & Collect
            </a>
            <a 
              href="#menu"
              className="bg-transparent border border-[#2d2d2d] text-[#2d2d2d] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-center hover:bg-[#2d2d2d] hover:text-[#faf8f5] transition-colors"
            >
              View Menu
            </a>
          </div>

          <div className="pt-6 flex flex-wrap gap-x-4 gap-y-3">
            {["22+ years serving Manchester", "Family-run cafe", "7 mins from the Etihad"].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2 px-4 py-2 bg-[#8b1c1c]/[0.03] border border-[#8b1c1c]/10 rounded-full text-[10px] uppercase font-semibold tracking-widest text-[#8b1c1c]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b1c1c]/50"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="relative overflow-hidden bg-[#e8e4db] w-full aspect-[4/3]">
            <Image 
              src={images.hero} 
              alt="Full English Breakfast" 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, 50vw" 
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. MATCHDAY SECTION */}
      <section className="bg-[#1a1a1a] text-[#faf8f5] px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold tracking-tight text-white leading-tight">
              Heading to the <span className="italic text-[#d0cac0]">Etihad Stadium?</span>
            </h2>
            <p className="text-[#d0cac0] text-base sm:text-lg md:text-xl leading-relaxed max-w-lg">
              We are a quick <strong className="text-white">7-minute walk</strong> from the stadium. Drop in before the match for a proper breakfast, lunch, sandwiches, and hot food.
            </p>
            <div className="pt-2">
              <a 
                href={businessInfo.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto justify-center bg-white text-[#1a1a1a] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#e8e4db] transition-colors items-center gap-2"
              >
                <MapPin size={16} />
                Get Directions
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative overflow-hidden bg-[#333] w-full aspect-video border border-[#333]">
              <Image 
                src={images.matchday} 
                alt="Storefront" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAMILY RUN LOCAL TRUST */}
      <section className="px-6 py-12 md:py-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 w-full order-2 md:order-1">
          <div className="relative overflow-hidden bg-[#e8e4db] w-full aspect-square md:aspect-[4/3]">
            <Image 
              src={images.trust} 
              alt="Cafe Interior" 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, 50vw" 
            />
          </div>
        </div>
        <div className="flex-1 space-y-8 order-1 md:order-2 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold tracking-tight text-[#1a1a1a] leading-tight">
            Three generations. <br className="hidden md:block"/>One local favourite.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyLocals.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#e8e4db]/60">
                <h3 className="font-bold text-base mb-2 text-[#8b1c1c]">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REVIEWS SECTION */}
      <section className="bg-[#1a1a1a] text-white px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-white">What our customers say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-[#222] p-8 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-[#333] flex flex-col relative overflow-hidden group hover:bg-[#2a2a2a] transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
                <div className="flex gap-1 mb-4 text-[#d0cac0] text-sm">
                  ★★★★★
                </div>
                <p className="text-base font-medium leading-relaxed mb-6 flex-grow text-[#e8e4db]">&quot;{review.text}&quot;</p>
                <p className="text-[10px] text-[#888] uppercase tracking-[0.2em] font-semibold">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED FOOD */}
      <section id="menu" className="bg-[#f0ece1] px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#4a5d23]/10 text-[10px] uppercase font-semibold tracking-[0.2em] text-[#4a5d23] mb-4">
              Proper Portions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold tracking-tight text-[#1a1a1a]">Featured Favorites</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredFood.map((item, idx) => (
              <div key={idx} className="bg-white flex flex-col rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#e8e4db]/50 group perspective-[1000px]">
                <div className="relative w-full aspect-square bg-[#e8e4db] overflow-hidden transform-gpu transition-all duration-700 ease-out group-hover:rotate-x-[2deg] group-hover:-rotate-y-[2deg] group-hover:scale-[1.02]">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-playfair font-bold text-xl text-[#1a1a1a] mb-2">{item.name}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FULL MENU */}
      <section className="px-6 py-20 md:py-32 max-w-5xl mx-auto border-b border-[#d0cac0]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-[#1a1a1a]">Full Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {fullMenu.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-xl font-playfair font-bold border-b border-[#d0cac0] pb-3 text-[#1a1a1a]">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <h4 className="font-bold text-base text-[#1a1a1a]">{item.name}</h4>
                    {item.desc && <p className="text-[#555] text-sm mt-1 leading-relaxed">{item.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. OPENING HOURS & CONTACT */}
      <section className="bg-[#f0ece1] px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 bg-white p-8 md:p-12 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#e8e4db]/60">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold tracking-tight text-[#1a1a1a]">Open early for breakfast and lunch</h2>
            
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8b1c1c] flex items-center gap-2">
                <Clock size={14} /> Opening Hours
              </h3>
              <ul className="space-y-2.5 text-[#555] text-sm sm:text-base">
                {businessInfo.hours.map((h, idx) => (
                  <li key={idx} className="flex justify-between max-w-[320px]">
                    <span>{h.day}</span>
                    <span className="font-semibold text-[#1a1a1a]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8b1c1c] flex items-center gap-2">
                <MapPin size={14} /> Location
              </h3>
              <p className="text-[#555] text-sm sm:text-base leading-relaxed">
                {businessInfo.address.split(", ").map((line, idx) => <span key={idx} className="block">{line}</span>)}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href={businessInfo.phoneLink}
                className="w-full sm:w-auto bg-[#8b1c1c] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-center hover:bg-[#6b1414] transition-colors"
              >
                Call to Order
              </a>
              <a 
                href={businessInfo.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent border border-[#d0cac0] text-[#1a1a1a] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-center hover:bg-[#e8e4db] transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full min-h-[300px] md:min-h-full relative bg-[#e8e4db] rounded-2xl overflow-hidden border border-[#d0cac0]/50">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.3415309990815!2d-2.221586723223508!3d53.48025287232533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1a1bc6db961%3A0x6bba843b006c8ba8!2s17%20Cambrian%20St%2C%20Manchester%20M40%207EP!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for Ancoats Lunchbox"
             >
                {/* Fallback Location Card if iframe fails */}
                <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
                  <MapPin size={32} className="text-[#8b1c1c] mb-3" />
                  <p className="font-bold text-lg mb-1">{businessInfo.name}</p>
                  <p className="text-[#555] text-sm mb-4 max-w-[200px]">{businessInfo.address}</p>
                  <a href={businessInfo.directionsLink} className="text-sm font-bold border-b border-[#2d2d2d] pb-0.5">Open in Google Maps</a>
                </div>
             </iframe>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#1a1a1a] text-[#888] px-6 py-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-lg font-bold text-white mb-1">{businessInfo.name}</p>
            <p className="text-xs">Serving Manchester for over 22 years.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs">
            {businessInfo.socials.map((social, idx) => (
              <span key={idx} className="flex flex-col">
                <span className="uppercase tracking-widest text-[#555] mb-0.5">{social.label}</span>
                <span className="text-white">{social.value}</span>
              </span>
            ))}
            <span className="flex flex-col">
              <span className="uppercase tracking-widest text-[#555] mb-0.5">Call</span>
              <a href={businessInfo.phoneLink} className="text-white hover:text-[#d0cac0] transition-colors">
                {businessInfo.phoneDisplay}
              </a>
            </span>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#333] text-[10px] flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          <p className="text-[#555] uppercase tracking-widest text-center">Concept direction created by Veltris for demonstration.</p>
        </div>
      </footer>
    </main>
  );
}
