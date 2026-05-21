'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  style: ['normal', 'italic']
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600']
});

// Common animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function NoirAtelier() {
  return (
    <div className={`bg-[#f5f5f0] text-gray-900 min-h-screen ${inter.className} selection:bg-gray-300 selection:text-black`}>
      <div className="max-w-6xl mx-auto px-6 overflow-hidden">
        
        {/* 1. HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center py-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <motion.h1 
              variants={fadeInUp}
              className={`text-6xl md:text-8xl font-bold text-black ${playfair.className}`}
            >
              Silence Wears Better
            </motion.h1>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }
                }
              }}
              className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto"
            >
              Clothing cut for those who understand restraint before luxury.
            </motion.p>
          </motion.div>
        </section>

        {/* 2. MANIFESTO */}
        <section className="py-32 border-t border-black/[0.08]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl leading-relaxed text-black"
            >
              Noir Atelier was built against the rhythm of trends. We believe permanence is the final form of elegance — garments that outlive seasons, algorithms, and spectacle.
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mt-8 leading-relaxed"
            >
              Every silhouette is deliberate. Every fabric chosen to age with dignity rather than relevance.
            </motion.p>
          </motion.div>
        </section>

        {/* 3. COLLECTIONS */}
        <section className="py-32 border-t border-black/[0.08]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden mb-6 relative shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-500 ease-[0.25,0.1,0.25,1]">
                <Image 
                  src="/images/black-wool.png" 
                  alt="Obsidian Coat" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${playfair.className}`}>Obsidian Coat</h3>
              <p className="text-sm text-gray-500 mb-4 font-medium">£340</p>
              <p className="text-gray-600">
                A long black wool overcoat with sharp shoulders and a quiet drape.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden mb-6 relative shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-500 ease-[0.25,0.1,0.25,1]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574] to-[#c4956a] z-0" />
                <Image 
                  src="/images/camel-blazer.png" 
                  alt="Dune Structure Blazer" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-10 relative"
                />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${playfair.className}`}>Dune Structure Blazer</h3>
              <p className="text-sm text-gray-500 mb-4 font-medium">£285</p>
              <p className="text-gray-600">
                Camel-toned tailoring with architectural lines and a softened interior.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden mb-6 relative shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-500 ease-[0.25,0.1,0.25,1]">
                <Image 
                  src="/images/ivory-cashmere.png" 
                  alt="Ivory Cashmere Wrap" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${playfair.className}`}>Ivory Cashmere Wrap</h3>
              <p className="text-sm text-gray-500 mb-4 font-medium">£390</p>
              <p className="text-gray-600">
                A cream cashmere layer with weightless softness and understated volume.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* 4. EMAIL CTA */}
        <section className="py-32 border-t border-black/[0.08] text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl mx-auto"
          >
            <motion.p 
              variants={fadeInUp}
              className={`text-xl italic mb-10 text-gray-800 ${playfair.className}`}
            >
              &quot;Private releases and rare arrivals, reserved for those already paying attention.&quot;
            </motion.p>
            <motion.form 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-6 py-4 bg-transparent border-b border-gray-400 focus:border-black outline-none w-full sm:w-96 transition-colors text-black"
                required
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors w-full sm:w-auto"
              >
                Request Access
              </button>
            </motion.form>
          </motion.div>
        </section>

        {/* Back link */}
        <footer className="py-12 flex justify-center border-t border-black/[0.08]">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-black transition-colors text-sm tracking-widest uppercase"
          >
            Back to veltris.uk
          </Link>
        </footer>

      </div>
    </div>
  );
}
