"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Brand Direction",
    desc: "Dark luxury tone, sharp product positioning, and a serious visual identity.",
  },
  {
    num: "02",
    title: "Product Experience",
    desc: "Clear product-focused layouts designed around browsing and buying confidence.",
  },
  {
    num: "03",
    title: "Responsive Layout",
    desc: "Built to feel clean across desktop, tablet, and mobile screens.",
  },
  {
    num: "04",
    title: "Conversion Flow",
    desc: "Strong CTAs, simple navigation, and a structure that keeps users moving.",
  },
  {
    num: "05",
    title: "Launch Ready",
    desc: "Modern stack, fast pages, and a polished live deployment.",
  },
];

export default function BuildBreakdown() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-20 md:py-24 border-b border-[#1a1a1a]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
        
        {/* Left Sticky Title Block -> Project Snapshot */}
        <div className="w-full lg:w-1/3">
          <motion.div 
            className="lg:sticky lg:top-32 border border-[#1a1a1a] bg-[#050505] p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[#555] mb-8 font-mono">
              PROJECT SNAPSHOT
            </p>
            <h2 className="text-3xl font-bold text-white mb-8">Aethalgard</h2>
            
            <div className="flex flex-col gap-6 mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#555] mb-2 font-mono">Type</p>
                <p className="text-sm text-[#ccc]">E-Commerce Store</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#555] mb-2 font-mono">Stack</p>
                <p className="text-sm text-[#ccc]">Next.js, Tailwind CSS</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#555] mb-2 font-mono">Focus</p>
                <p className="text-sm text-[#ccc]">Product experience, brand identity, responsive design</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#555] mb-2 font-mono">Status</p>
                <p className="text-sm text-green-500">Live</p>
              </div>
            </div>

            <a
              href="https://athelgard.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black font-semibold text-xs tracking-widest uppercase px-6 py-4 rounded-none hover:bg-[#e0e0e0] transition-colors duration-300 w-full"
            >
              View Live Project &rarr;
            </a>
          </motion.div>
        </div>

        {/* Right Vertical Timeline */}
        <div className="w-full lg:w-2/3 relative pt-4 lg:pt-0">
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-0 lg:left-8 top-0 bottom-0 w-[1px] bg-[#222]"
            initial={{ scaleY: 0, transformOrigin: "top" }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="relative pl-6 lg:pl-20 group"
              >
                {/* Node on the line */}
                <motion.div 
                  className="absolute left-[-3.5px] lg:left-[28.5px] top-6 w-2 h-2 rounded-full bg-[#444] group-hover:bg-white transition-colors duration-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                />

                <div className="border border-[#1a1a1a] bg-[#050505] p-6 md:p-10 hover:-translate-y-2 hover:border-[#333] transition-all duration-500 group-hover:bg-[#0a0a0a]">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-xs font-mono text-[#555] mb-4 block group-hover:text-white transition-colors duration-500"
                  >
                    {step.num}
                  </motion.span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-[#888] leading-relaxed text-sm md:text-base group-hover:text-[#aaa] transition-colors duration-500">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
