"use client";
import { motion } from "framer-motion";

interface WebsiteTypeCardProps {
  category: string;
  title: string;
  description: string;
}

export default function WebsiteTypeCard({
  category,
  title,
  description,
}: WebsiteTypeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative border border-[#1a1a1a] hover:border-[#444] bg-[#050505] hover:bg-[#0a0a0a] transition-colors duration-300 p-8 flex flex-col justify-between h-full min-h-[280px] overflow-hidden rounded-none"
    >
      <div className="relative z-10">
        <span className="text-[10px] uppercase tracking-widest text-[#555] block mb-4">
          {category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-[#888] font-light leading-relaxed">
          {description}
        </p>
      </div>

      {/* Fake Website Preview Lines (Animates on hover) */}
      <div className="mt-8 flex flex-col gap-2 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div 
          className="h-[1px] bg-[#333] w-full"
          initial={{ scaleX: 0.5, originX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div 
          className="h-[1px] bg-[#333] w-3/4"
          initial={{ scaleX: 0.5, originX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        />
        <motion.div 
          className="h-[1px] bg-[#333] w-1/2"
          initial={{ scaleX: 0.5, originX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
      </div>
    </motion.div>
  );
}
