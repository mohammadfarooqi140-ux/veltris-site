"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceSectionProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  price: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ServiceSection({
  number,
  title,
  description,
  tags,
  price,
}: ServiceSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[80vh] py-24 flex flex-col md:flex-row items-start justify-between border-t border-[#1a1a1a]"
    >
      {/* Background Huge Number (Absolute) */}
      <div className="absolute right-0 top-10 text-[20vw] font-bold text-white opacity-[0.02] leading-none select-none pointer-events-none z-0">
        {number}
      </div>

      {/* Left Side: Sticky Content */}
      <div className="w-full md:w-1/2 md:sticky top-32 z-10 pr-0 md:pr-12 mb-16 md:mb-0">
        <span className="text-xs font-mono text-[#555] mb-6 block">
          {number}
        </span>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-lg text-[#888] max-w-xl leading-relaxed mb-10">
          {description}
        </p>

        {/* Animated Tags */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              variants={tagVariants}
              className="text-xs text-[#666] border border-[#1a1a1a] px-4 py-2 hover:text-white hover:border-[#333] transition-colors duration-300 select-none"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Right Side: Pricing & CTA */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-end z-10 pt-0 md:pt-20">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-[#080808] border border-[#1a1a1a] p-10 md:p-14 w-full max-w-md flex flex-col items-start md:items-end text-left md:text-right"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#555] mb-2 block">
            Starting Price
          </span>
          <p className="text-4xl font-bold text-white mb-10">{price}</p>
          
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            <Link
              href={`/contact?project=${encodeURIComponent(title)}`}
              className="block w-full text-center border border-[#333] text-white text-xs uppercase tracking-widest px-8 py-5 hover:bg-white hover:text-black transition-all duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Divider */}
        <div className="w-full max-w-md mt-16 flex justify-end">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ originX: 1 }}
            className="h-[1px] bg-[#1a1a1a] w-full"
          />
        </div>
      </div>
    </motion.section>
  );
}
