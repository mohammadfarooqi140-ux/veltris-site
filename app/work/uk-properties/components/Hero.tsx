import Image from "next/image";
import { FadeInUp } from "@/components/FadeInUp";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-48 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-kitchen.png" 
          alt="Luxury Contemplation Kitchen" 
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp className="text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8 drop-shadow-md">
            Birmingham&apos;s Premier <br className="hidden md:block" /> 
            <span className="text-blue-600">Construction & Renovation</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 mb-10 max-w-xl drop-shadow">
            From stunning house extensions to comprehensive commercial property services across the West Midlands, we build your vision with precision and excellence.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
              Get a Free Quote
            </a>
            <a href="#work" className="inline-flex items-center justify-center px-8 py-3 border border-white/30 rounded-sm text-lg font-medium text-white bg-black/40 hover:bg-black/60 backdrop-blur-md transition-colors">
              See Our Work
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
