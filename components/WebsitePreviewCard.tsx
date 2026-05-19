"use client";
import { motion } from "framer-motion";

const PREVIEW_IMAGES = [
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
];

export default function WebsitePreviewCard({ type, offset }: { type: number, offset: number }) {
  const isActive = offset === 0;
  
  return (
    <motion.div
      className={`relative md:absolute w-full md:w-[400px] aspect-video md:aspect-auto md:h-[300px] border border-[#1f1f1f] bg-[#050505] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.25)] flex-col rounded-sm ${offset > 0 ? 'hidden md:flex' : 'flex'}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : Math.max(0.35, 1 - offset * 0.4),
        y: offset * -25,
        x: offset * 30,
        scale: isActive ? 1 : Math.max(0.88, 1 - offset * 0.06),
        zIndex: 10 - offset
      }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div 
        className="w-full h-full relative"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <img 
          src={PREVIEW_IMAGES[type]} 
          alt={`Website preview concept`} 
          className={`w-full h-full object-cover ${type === 1 ? 'object-center' : 'object-top'}`}
        />
        {/* Subtle dark overlay to blend with the dark premium theme */}
        <div className={`absolute inset-0 bg-black ${isActive ? 'opacity-20' : 'opacity-60'} transition-opacity duration-700`} />
      </motion.div>
    </motion.div>
  );
}
