"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";

// --- STRUCTURED DATA ---

const images = {
  hero: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (2).jpeg",
  matchday: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.13 PM (1).jpeg",
  story: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (8).jpeg",
  gallery: [
    "/ancoat/WhatsApp Image 2026-06-15 at 12.01.13 PM (1).jpeg",
    "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (7).jpeg",
    "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (9).jpeg",
    "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (2).jpeg",
    "/ancoat/WhatsApp Image 2026-06-15 at 12.01.13 PM.jpeg",
    "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (4).jpeg",
    "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (1).jpeg",
    "/ancoat/WhatsApp Image 2026-06-15 at 12.01.13 PM (3).jpeg"
  ],
  menuItems: {
    fullEnglish: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (2).jpeg",
    breakfastBap: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (4).jpeg",
    cumberlandSausage: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.13 PM.jpeg",
    steakMelt: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (6).jpeg", // Updated to Panini
    teaToast: "/ancoat/WhatsApp Image 2026-06-15 at 12.01.12 PM (1).jpeg",
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

const trustItems = [
  "22+ years serving Manchester",
  "Family-run cafe",
  "7 minutes from the Etihad",
  "Proper food, fair prices"
];

const whyLocals = [
  {
    title: "Proper portions",
    desc: "Food that fills the plate without pretending to be fancy."
  },
  {
    title: "Fair prices",
    desc: "Good value breakfasts and lunches without “posh cafe” prices."
  },
  {
    title: "Friendly service",
    desc: "A small family-run place where regulars feel known."
  },
  {
    title: "Freshly cooked",
    desc: "Breakfasts and hot food made properly, not left sitting around."
  }
];

const menuData = [
  {
    category: "Breakfast Fry-Ups",
    items: [
      {
        name: "Full English Platter",
        desc: "Bacon, sausages, eggs, hash browns, beans, black pudding, tomato, mushrooms, and toast.",
        image: images.menuItems.fullEnglish
      },
      {
        name: "Three Generations Breakfast",
        desc: "A family-style breakfast plate inspired by the cafe’s long-running morning regulars.",
        image: null
      }
    ]
  },
  {
    category: "Morning Grab & Go",
    items: [
      {
        name: "Breakfast Bap",
        desc: "Sausage, bacon, fried egg, and hash brown in a soft roll.",
        image: images.menuItems.breakfastBap
      },
      {
        name: "The Pork Special",
        desc: "Slow-cooked pork, sage and onion stuffing, and apple sauce on a fresh floured roll.",
        image: null
      }
    ]
  },
  {
    category: "Lunch & Hot Dinners",
    items: [
      {
        name: "Cumberland Sausage Dinner",
        desc: "Coiled Cumberland sausage served with chips or mash, vegetables, and rich gravy.",
        image: images.menuItems.cumberlandSausage
      },
      {
        name: "Rump Steak Melt",
        desc: "Grilled rump steak with melted cheese and onions, served hot on toasted ciabatta.",
        image: images.menuItems.steakMelt
      },
      {
        name: "The Classic Comfort",
        desc: "Thick-cut ham, double fried egg, and hot chips.",
        image: null
      }
    ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Builder’s Tea", desc: "", image: images.menuItems.teaToast },
      { name: "Fresh Coffee", desc: "", image: null },
      { name: "Soft Drinks", desc: "", image: null }
    ]
  }
];

const reviews = [
  {
    name: "Kath Bracken",
    text: "Food the best. We call mainly for breakfasts. Wouldn’t go anywhere else."
  },
  {
    name: "Lee McElroy",
    text: "Excellent pit stop for breakfast. Great staff and food is excellent."
  },
  {
    name: "James Fairclough",
    text: "Amazing breaky. Very friendly staff. Fairly priced."
  },
  {
    name: "Dericko Patito",
    text: "Very nice English breakfast and good value too."
  },
  {
    name: "Caitlin Unsworth",
    text: "Incredible food. The quality is insane and the price is even better."
  },
  {
    name: "Will Simister",
    text: "Been coming here for 20 years. Food is cheap but top quality."
  }
];

// --- COMPONENTS ---

// Helper for image slots
function ImageSlot({ label, className = "" }: { label: string, className?: string }) {
  if (label === "Map Area Placeholder") {
    return (
      <div className={`bg-[#e8e4db] flex flex-col items-center justify-center border-2 border-dashed border-[#d0cac0] text-[#7a7369] p-4 text-center ${className}`}>
        <span className="text-sm font-medium uppercase tracking-wider block mb-1">Map Slot</span>
        <span className="text-xs">{label}</span>
      </div>
    );
  }

  // Remove the border and padding styling for actual images to allow full bleed
  const cleanClassName = className.replace(/border-2 border-dashed border-\[#d0cac0\]/g, "").replace(/p-1/g, "");

  return (
    <div className={`relative overflow-hidden bg-[#e8e4db] ${cleanClassName}`}>
      <Image 
        src={label} 
        alt="Ancoats Lunchbox" 
        fill 
        className="object-cover hover:scale-105 transition-transform duration-700" 
        sizes="(max-width: 768px) 100vw, 50vw" 
      />
    </div>
  );
}

export default function AncoatsLunchboxConcept() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d] selection:bg-[#8b1c1c] selection:text-white font-sans">
      
      {/* 1. HERO */}
      <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1]">
              Manchester breakfasts <span className="text-[#8b1c1c]">done right</span> for over 22 years.
            </h1>
            <p className="text-lg md:text-xl text-[#555] max-w-xl leading-relaxed">
              Family-run for three generations. Proper breakfasts, hot dinners, and takeaway favourites served from the heart of Ancoats.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={businessInfo.phoneLink}
              className="bg-[#8b1c1c] text-white px-8 py-4 font-bold text-center hover:bg-[#6b1414] transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Ahead & Collect
            </a>
            <a 
              href="#menu"
              className="bg-transparent border-2 border-[#2d2d2d] text-[#2d2d2d] px-8 py-4 font-bold text-center hover:bg-[#2d2d2d] hover:text-[#faf8f5] transition-colors"
            >
              View Menu
            </a>
          </div>

          <div className="pt-6 border-t border-[#d0cac0] flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#666]">
            {trustItems.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b1c1c]"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <ImageSlot label={images.hero} className="w-full aspect-square md:aspect-[4/3]" />
        </div>
      </section>

      {/* 2. MATCHDAY SECTION */}
      <section className="bg-[#1a1a1a] text-[#faf8f5] px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Heading to the Etihad?</h2>
            <p className="text-[#d0cac0] text-lg leading-relaxed max-w-lg">
              {businessInfo.name} is just a 7-minute walk from the Etihad Stadium. Drop in before the match for a proper breakfast, hot dinner, or takeaway roll.
            </p>
            <a 
              href={businessInfo.directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-white text-[#1a1a1a] px-6 py-3 font-bold hover:bg-[#d0cac0] transition-colors items-center gap-2"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
          <div className="flex-1 w-full">
            <ImageSlot label={images.matchday} className="w-full aspect-video border-[#333]" />
          </div>
        </div>
      </section>

      {/* 3. WHY LOCALS */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why locals keep coming back</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyLocals.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#e8e4db] p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-[#8b1c1c]">{item.title}</h3>
              <p className="text-[#666] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MENU SECTION */}
      <section id="menu" className="bg-[#f0ece1] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-[#4a5d23] text-white px-4 py-1 text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
              Today&apos;s home-cooked specials
            </div>
            <h2 className="text-4xl font-bold tracking-tight">The Ancoats Lunchbox menu</h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto">
              Breakfasts, hot dinners, rolls, drinks, and specials served fresh through the day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {menuData.map((category, idx) => (
              <div key={idx} className="space-y-8">
                <h3 className="text-2xl font-bold border-b-2 border-[#8b1c1c] pb-2 inline-block">
                  {category.category}
                </h3>
                <div className="space-y-8">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-4">
                      {item.image && (
                        <div className="w-20 h-20 shrink-0">
                          <ImageSlot label={item.image} className="w-full h-full text-[10px] p-1" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-lg text-[#1a1a1a]">{item.name}</h4>
                        {item.desc && <p className="text-[#555] text-sm mt-1 leading-relaxed">{item.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CAFE STORY SECTION */}
      <section className="px-6 py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 w-full order-2 md:order-1">
          <ImageSlot label={images.story} className="w-full aspect-square" />
        </div>
        <div className="flex-1 space-y-6 order-1 md:order-2">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Three generations. One local favourite.</h2>
          <p className="text-[#555] text-lg leading-relaxed">
            {businessInfo.name} has served the local Manchester community for more than 22 years. It is known for generous portions, fair prices, friendly service, and the kind of proper breakfast people keep coming back for.
          </p>
          <p className="text-[#8b1c1c] font-bold text-xl pt-4">
            No gimmicks. No overcomplication. Just simple food, done right.
          </p>
        </div>
      </section>

      {/* 6. REVIEWS SECTION */}
      <section className="bg-[#8b1c1c] text-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What our customers say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-[#7a1818] p-6 shadow-sm border border-[#9c2020]">
                <div className="flex gap-1 mb-3 text-[#f0ece1]">
                  ★★★★★
                </div>
                <p className="text-lg font-medium leading-snug mb-4">&quot;{review.text}&quot;</p>
                <p className="text-sm text-[#d0cac0]">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GALLERY SECTION */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Inside Ancoats Lunchbox</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.gallery.map((img, idx) => (
            <ImageSlot key={idx} label={img} className="w-full aspect-square" />
          ))}
        </div>
      </section>

      {/* 8. OPENING HOURS & CONTACT */}
      <section className="bg-[#f0ece1] px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 bg-white p-8 md:p-12 shadow-sm border border-[#e8e4db]">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl font-bold">Open early for breakfast and lunch</h2>
            
            <div className="space-y-4">
              <h3 className="font-bold text-[#8b1c1c] flex items-center gap-2">
                <Clock size={18} /> Opening Hours
              </h3>
              <ul className="space-y-2 text-[#555]">
                {businessInfo.hours.map((h, idx) => (
                  <li key={idx} className="flex justify-between max-w-xs">
                    <span>{h.day}</span>
                    <span className="font-medium text-[#1a1a1a]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-[#8b1c1c] flex items-center gap-2">
                <MapPin size={18} /> Location
              </h3>
              <p className="text-[#555] max-w-xs leading-relaxed">
                {businessInfo.address.split(", ").map((line, idx) => <span key={idx} className="block">{line}</span>)}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href={businessInfo.phoneLink}
                className="bg-[#8b1c1c] text-white px-6 py-3 font-bold text-center hover:bg-[#6b1414] transition-colors"
              >
                Call to Order: {businessInfo.phoneDisplay}
              </a>
              <a 
                href={businessInfo.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e8e4db] text-[#1a1a1a] px-6 py-3 font-bold text-center hover:bg-[#d0cac0] transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full min-h-[300px]">
             <ImageSlot label="Map Area Placeholder" className="w-full h-full min-h-[300px]" />
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#1a1a1a] text-[#888] px-6 py-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-xl font-bold text-white mb-2">{businessInfo.name}</p>
            <p className="text-sm">Serving Manchester for over 22 years.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {businessInfo.socials.map((social, idx) => (
              <span key={idx} className="flex flex-col">
                <span className="uppercase tracking-widest text-xs text-[#555] mb-1">{social.label}</span>
                <span className="text-white">{social.value}</span>
              </span>
            ))}
            <span className="flex flex-col">
              <span className="uppercase tracking-widest text-xs text-[#555] mb-1">Call</span>
              <a href={businessInfo.phoneLink} className="text-white hover:text-[#d0cac0] transition-colors">
                {businessInfo.phoneDisplay}
              </a>
            </span>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#333] text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          <p className="text-[#555] uppercase tracking-widest">Concept direction created by Veltris for demonstration.</p>
        </div>
      </footer>
    </main>
  );
}
