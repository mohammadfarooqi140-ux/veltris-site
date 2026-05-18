"use client";
import { motion } from "framer-motion";

const wireframes = [
  { width: 120, height: 160, x: "10%", y: "20%", duration: 25 },
  { width: 200, height: 120, x: "70%", y: "15%", duration: 30 },
  { width: 160, height: 220, x: "85%", y: "55%", duration: 28 },
  { width: 140, height: 100, x: "5%", y: "60%", duration: 35 },
  { width: 180, height: 140, x: "25%", y: "75%", duration: 22 },
  { width: 150, height: 180, x: "55%", y: "85%", duration: 26 },
];

export default function FloatingWebsiteCards() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {wireframes.map((wf, i) => (
        <motion.div
          key={i}
          className="absolute border border-[#333] bg-[#050505] rounded-none p-4 flex flex-col gap-2"
          style={{
            width: wf.width,
            height: wf.height,
            left: wf.x,
            top: wf.y,
          }}
          animate={{
            y: ["0%", "-20%", "0%"],
          }}
          transition={{
            duration: wf.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Fake Header */}
          <div className="w-full h-2 border-b border-[#222] pb-2 flex gap-1">
            <div className="w-2 h-2 rounded-full border border-[#222]" />
            <div className="w-2 h-2 rounded-full border border-[#222]" />
          </div>
          {/* Fake Content lines */}
          <div className="w-3/4 h-2 bg-[#111] mt-2" />
          <div className="w-1/2 h-2 bg-[#111]" />
          <div className="w-full h-12 border border-[#111] mt-auto" />
        </motion.div>
      ))}
    </div>
  );
}
