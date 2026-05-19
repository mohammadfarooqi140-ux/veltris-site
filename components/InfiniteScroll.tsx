"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
];

const offsets = [0, -24, 16, -12, 28, -20, 8, -32,
                 12, -16, 24, -8, 20, -28, 4, -24];

function ScrollRow({ 
  direction = 1, 
  duration = 35,
  rowIndex = 0
}: { 
  direction?: number;
  duration?: number;
  rowIndex?: number;
}) {
  const items = [...images, ...images];
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-6 w-max items-start"
        animate={{ 
          x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] 
        }}
        transition={{ 
          duration, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {items.map((src, i) => (
          <motion.div
            key={i}
            style={{ 
              translateY: offsets[(i + rowIndex * 3) % offsets.length] 
            }}
            className="flex-shrink-0 w-64 h-40 relative rounded-none overflow-hidden border border-[#ffffff15]"
          >
            <Image
              src={src}
              alt="project scroll preview"
              fill
              sizes="256px"
              className="object-cover opacity-85 hover:opacity-95 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function InfiniteScroll() {
  return (
    <div className="flex flex-col gap-2 w-full py-4">
      <ScrollRow direction={1}  duration={40} rowIndex={0} />
      <ScrollRow direction={-1} duration={28} rowIndex={1} />
      <ScrollRow direction={1}  duration={34} rowIndex={2} />
    </div>
  );
}
