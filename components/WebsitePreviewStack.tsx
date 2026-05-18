"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WebsitePreviewCard from "./WebsitePreviewCard";

const servicesList = [
  { id: "01", name: "Landing Pages" },
  { id: "02", name: "Business" },
  { id: "03", name: "E-Commerce" },
  { id: "04", name: "Redesigns" },
  { id: "05", name: "Custom" },
];

export default function WebsitePreviewStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesList.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-auto md:h-[600px] flex items-center justify-end pointer-events-none mt-4 md:mt-0">
      
      {/* Service Indicator */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 hidden lg:flex pointer-events-auto">
        {servicesList.map((service, index) => (
          <div 
            key={service.id} 
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            <span className={`text-xs font-mono transition-colors duration-500 ${activeIndex === index ? 'text-white' : 'text-[#444]'}`}>
              {service.id}
            </span>
            <span className={`text-[10px] uppercase tracking-widest transition-colors duration-500 ${activeIndex === index ? 'text-white' : 'text-[#444]'}`}>
              {service.name}
            </span>
            {activeIndex === index && (
              <motion.div 
                layoutId="activeIndicator"
                className="w-8 h-[1px] bg-white ml-2"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Stack Area */}
      <div className="relative w-full lg:w-[85%] h-auto md:h-full flex items-center justify-center lg:justify-end lg:pr-12">
        <AnimatePresence mode="popLayout">
          {servicesList.map((service, index) => {
            const offset = (index - activeIndex + servicesList.length) % servicesList.length;
            
            // Only show up to 3 cards for performance & clean layout
            if (offset > 2) return null;

            return (
              <WebsitePreviewCard 
                key={service.id}
                type={index} 
                offset={offset} 
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
