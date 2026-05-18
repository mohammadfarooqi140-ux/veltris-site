"use client";

import { motion } from "framer-motion";

export default function FloatingWebsiteStack() {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center pointer-events-none mt-12 md:mt-0">
      
      {/* Frame 2 - Secondary Medium (Behind) */}
      <motion.div
        className="absolute w-[260px] md:w-[380px] h-[220px] md:h-[300px] border border-[#1a1a1a] bg-[#050505] rounded-lg overflow-hidden hidden md:block shadow-2xl"
        initial={{ opacity: 0, x: -60, y: -40, rotate: -4 }}
        animate={{ opacity: 0.2, x: -60, y: [-40, -55, -40], rotate: -4 }}
        transition={{
          opacity: { duration: 1.5, ease: "easeOut", delay: 0.2 },
          y: { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ zIndex: 1, left: "2%" }}
      >
        <FakeBrowserContent variant="grid" />
      </motion.div>

      {/* Frame 4 - Vertical Mobile (Offscreen Right) */}
      <motion.div
        className="absolute w-[160px] md:w-[220px] h-[300px] md:h-[440px] border border-[#1a1a1a] bg-[#080808] rounded-[24px] overflow-hidden shadow-2xl"
        initial={{ opacity: 0, x: 80, y: 20, rotate: 6 }}
        animate={{ opacity: 0.25, x: 80, y: [20, 5, 20], rotate: 6 }}
        transition={{
          opacity: { duration: 1.5, ease: "easeOut", delay: 0.4 },
          y: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
        style={{ zIndex: 2, right: "-8%" }}
      >
        <FakeMobileContent />
      </motion.div>

      {/* Frame 1 - Primary Desktop (Front Center) */}
      <motion.div
        className="absolute w-[280px] md:w-[480px] h-[220px] md:h-[340px] border border-[#333] bg-[#0c0c0c] rounded-lg overflow-hidden shadow-2xl"
        initial={{ opacity: 0, x: 10, y: 10, rotate: -1 }}
        animate={{ opacity: 0.5, x: 10, y: [10, -5, 10], rotate: -1 }}
        transition={{
          opacity: { duration: 1.5, ease: "easeOut", delay: 0.6 },
          y: { duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
        style={{ zIndex: 3 }}
      >
        <FakeBrowserContent variant="hero" />
      </motion.div>

      {/* Frame 3 - Small Accent (Bottom Left) */}
      <motion.div
        className="absolute w-[160px] md:w-[200px] h-[120px] md:h-[160px] border border-[#444] bg-[#111] rounded-lg overflow-hidden shadow-2xl hidden md:block"
        initial={{ opacity: 0, x: -80, y: 120, rotate: 4 }}
        animate={{ opacity: 0.7, x: -80, y: [120, 105, 120], rotate: 4 }}
        transition={{
          opacity: { duration: 1.5, ease: "easeOut", delay: 0.8 },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }
        }}
        style={{ zIndex: 4, left: "12%", bottom: "15%" }}
      >
        <FakeAccentContent />
      </motion.div>

    </div>
  );
}

function FakeBrowserContent({ variant }: { variant: "hero" | "grid" }) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Top Bar */}
      <div className="w-full h-6 md:h-8 border-b border-[#222] flex items-center px-3 gap-1.5 bg-[#050505]">
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#333]" />
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#333]" />
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#333]" />
      </div>
      
      {/* Body */}
      <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6">
        {/* Nav Skeleton */}
        <div className="flex justify-between items-center">
          <div className="w-12 md:w-16 h-2 bg-[#444] rounded-sm" />
          <div className="flex gap-2">
            <div className="w-6 md:w-8 h-1.5 bg-[#2a2a2a] rounded-sm" />
            <div className="w-6 md:w-8 h-1.5 bg-[#2a2a2a] rounded-sm" />
            <div className="w-6 md:w-8 h-1.5 bg-[#2a2a2a] rounded-sm" />
          </div>
        </div>

        {variant === "hero" ? (
          <>
            {/* Hero Skeleton */}
            <div className="flex flex-col gap-2 mt-2 md:mt-4">
              <div className="w-3/4 h-4 md:h-6 bg-[#444] rounded-sm" />
              <div className="w-1/2 h-4 md:h-6 bg-[#444] rounded-sm" />
              <div className="w-1/3 h-2 md:h-3 bg-[#2a2a2a] rounded-sm mt-1 md:mt-2" />
            </div>
            {/* CTA */}
            <div className="w-20 md:w-24 h-6 md:h-8 bg-[#222] border border-[#444] rounded-sm mt-2" />
          </>
        ) : (
          <>
            {/* Grid Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mt-auto">
              <div className="h-12 md:h-16 bg-[#111] rounded-sm border border-[#222]" />
              <div className="h-12 md:h-16 bg-[#111] rounded-sm border border-[#222]" />
              <div className="h-12 md:h-16 bg-[#111] rounded-sm border border-[#222] hidden md:block" />
              <div className="h-12 md:h-16 bg-[#111] rounded-sm border border-[#222]" />
              <div className="h-12 md:h-16 bg-[#111] rounded-sm border border-[#222]" />
              <div className="h-12 md:h-16 bg-[#111] rounded-sm border border-[#222] hidden md:block" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function FakeMobileContent() {
  return (
    <div className="w-full h-full flex flex-col p-3 md:p-4 gap-4">
      {/* Notch / Status Bar */}
      <div className="flex justify-between items-center px-2">
        <div className="w-6 h-1.5 bg-[#222] rounded-full" />
        <div className="flex gap-1">
          <div className="w-2 h-1.5 bg-[#222] rounded-full" />
          <div className="w-3 h-1.5 bg-[#222] rounded-full" />
        </div>
      </div>
      
      {/* Mobile Nav */}
      <div className="flex justify-between items-center mt-2">
        <div className="w-8 h-2 bg-[#444] rounded-sm" />
        <div className="w-4 h-3 flex flex-col justify-between">
          <div className="w-full h-[2px] bg-[#444]" />
          <div className="w-full h-[2px] bg-[#444]" />
          <div className="w-full h-[2px] bg-[#444]" />
        </div>
      </div>

      {/* Hero */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="w-full h-4 bg-[#444] rounded-sm" />
        <div className="w-3/4 h-4 bg-[#444] rounded-sm" />
        <div className="w-full h-2 bg-[#222] rounded-sm mt-2" />
        <div className="w-5/6 h-2 bg-[#222] rounded-sm" />
      </div>

      {/* Cards */}
      <div className="mt-auto flex flex-col gap-3">
        <div className="w-full h-14 md:h-16 bg-[#111] rounded-sm border border-[#222] flex items-center p-2 md:p-3">
           <div className="w-8 md:w-10 h-8 md:h-10 bg-[#222] rounded-sm" />
           <div className="ml-3 flex flex-col gap-1.5 flex-1">
             <div className="w-full h-2 bg-[#444] rounded-sm" />
             <div className="w-2/3 h-1.5 bg-[#222] rounded-sm" />
           </div>
        </div>
        <div className="w-full h-14 md:h-16 bg-[#111] rounded-sm border border-[#222] flex items-center p-2 md:p-3">
           <div className="w-8 md:w-10 h-8 md:h-10 bg-[#222] rounded-sm" />
           <div className="ml-3 flex flex-col gap-1.5 flex-1">
             <div className="w-full h-2 bg-[#444] rounded-sm" />
             <div className="w-2/3 h-1.5 bg-[#222] rounded-sm" />
           </div>
        </div>
      </div>
      
      {/* Home Indicator */}
      <div className="w-1/3 h-1 bg-[#222] rounded-full mx-auto mt-auto mb-1" />
    </div>
  );
}

function FakeAccentContent() {
  return (
    <div className="w-full h-full p-3 md:p-4 flex flex-col justify-between">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#333]" />
        <div className="w-12 h-2 bg-[#555] rounded-sm" />
      </div>
      
      <div className="flex flex-col gap-1.5">
        <div className="w-full h-1.5 bg-[#222] rounded-sm" />
        <div className="w-full h-1.5 bg-[#222] rounded-sm" />
        <div className="w-3/4 h-1.5 bg-[#222] rounded-sm" />
      </div>
      
      <div className="flex justify-end mt-2">
        <div className="w-8 h-4 bg-[#333] rounded-sm" />
      </div>
    </div>
  );
}
