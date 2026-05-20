// components/HeroLine.tsx
"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Horizontal scroll line that draws inside the hero column.
 * - Appears only on desktop (`md:block`).
 * - Respects prefers‑reduced‑motion.
 * - Width grows from 0% to 100% as the hero column scrolls.
 * - Labels fade in when the line reaches each monument.
 */
export default function HeroLine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: lineRef });
  const reduceMotion = useReducedMotion();

  // Unconditional hook calls
  const animatedLineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const animatedLabel1Opacity = useTransform(scrollYProgress, [0, 0.33, 0.34], [0, 0, 1]);
  const animatedLabel2Opacity = useTransform(scrollYProgress, [0.33, 0.66, 0.67], [0, 0, 1]);
  const animatedLabel3Opacity = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  // If user prefers reduced motion, keep line static (full width) and show all labels.
  const lineWidth = reduceMotion ? "100%" : animatedLineWidth;
  const label1Opacity = reduceMotion ? 1 : animatedLabel1Opacity;
  const label2Opacity = reduceMotion ? 1 : animatedLabel2Opacity;
  const label3Opacity = reduceMotion ? 1 : animatedLabel3Opacity;

  return (
    <div
      ref={lineRef}
      className="relative mt-8 hidden md:block"
      style={{ height: "1px", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.3)" }}
    >
      {/* Animated line */}
      <motion.div
        className="absolute left-0 top-0 h-full bg-white"
        style={{ width: lineWidth }}
      />

      {/* Labels positioned roughly where each monument appears */}
      <motion.div
        className="absolute left-0 top-[-20px] whitespace-nowrap text-sm text-white"
        style={{ opacity: label1Opacity }}
      >
        Aethalgard — E‑Commerce
      </motion.div>
      <motion.div
        className="absolute left-1/3 top-[-20px] whitespace-nowrap text-sm text-white"
        style={{ opacity: label2Opacity, transform: "translateX(-50%)" }}
      >
        Noir Atelier — Fashion
      </motion.div>
      <motion.div
        className="absolute left-full top-[-20px] whitespace-nowrap text-sm text-white"
        style={{ opacity: label3Opacity, transform: "translateX(-100%)" }}
      >
        Coming Soon
      </motion.div>
    </div>
  );
}
