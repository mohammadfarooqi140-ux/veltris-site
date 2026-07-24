import Image from "next/image";
import { FadeInUp } from "@/components/FadeInUp";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-kitchen.png" 
          alt="Luxury Contemplation Kitchen" 
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <FadeInUp className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 sm:mb-8 drop-shadow-md">
            Birmingham&apos;s Premier <br className="hidden md:block" /> 
            <span className="text-zinc-300">Construction & Renovation</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 mb-10 sm:mb-12 max-w-xl mx-auto md:mx-0 drop-shadow">
            From stunning house extensions to comprehensive commercial property services across the West Midlands, we build your vision with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 sm:py-3 border border-transparent rounded-sm text-lg font-medium text-black bg-white hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
              Get a Free Quote
            </a>
            <a href="#work" className="inline-flex items-center justify-center px-8 py-4 sm:py-3 border border-white/30 rounded-sm text-lg font-medium text-white bg-black/40 hover:bg-black/60 backdrop-blur-md transition-colors">
              See Our Work
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
