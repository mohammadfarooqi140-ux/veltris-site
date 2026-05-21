"use client";

import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
};

const heroSubheadVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.3,
    }
  },
};

export default function KinshipPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white selection:bg-[#c9a96e] selection:text-black font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HERO */}
        <motion.section 
          className="min-h-[80vh] flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h1 
            className={`text-7xl md:text-8xl text-white font-bold tracking-tight ${spaceGrotesk.className}`}
            variants={itemVariants}
          >
            Discipline, Worn Daily
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 mt-6 max-w-2xl"
            variants={heroSubheadVariants}
          >
            For men who notice the line of a collar, the weight of a watch, the edge of a fade.
          </motion.p>
        </motion.section>

        {/* PHILOSOPHY */}
        <motion.section 
          className="py-32 border-l-4 border-[#c9a96e] pl-8 my-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p 
            className="text-2xl text-gray-300 leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
            KINSHIP treats grooming as maintenance of standards, not performance. Nothing rushed. Nothing ornamental.
          </motion.p>
          <motion.p 
            className="text-xl text-gray-400 mt-8 max-w-3xl"
            variants={itemVariants}
          >
            Every cut, shave, and contour is measured by balance, restraint, and the kind of precision that only becomes visible when it&apos;s absent.
          </motion.p>
        </motion.section>

        {/* SERVICES */}
        <motion.section 
          className="py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              className="rounded-sm border border-white/10 p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#c9a96e]/10 transition-all duration-300 bg-white/5 flex flex-col"
              variants={itemVariants}
            >
              <div className="h-48 w-full bg-black/50 mb-6 rounded flex items-center justify-center overflow-hidden relative">
                 <img src="/images/trimmer.png" alt="The Sculpt" className="object-cover w-full h-full opacity-80" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${spaceGrotesk.className} text-white`}>The Sculpt</h3>
              <p className="text-[#c9a96e] text-lg mb-4">£48</p>
              <p className="text-gray-400 leading-relaxed flex-grow">
                Beard shaping and contour work tailored to bone structure, density, and growth pattern. Clean edges without looking manufactured.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="rounded-sm border border-white/10 p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#c9a96e]/10 transition-all duration-300 bg-white/5 flex flex-col"
              variants={itemVariants}
            >
              <div className="h-48 w-full bg-black/50 mb-6 rounded flex items-center justify-center overflow-hidden relative">
                 <img src="/images/hot-towel.png" alt="Straight Razor Ritual" className="object-cover w-full h-full opacity-80" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${spaceGrotesk.className} text-white`}>Straight Razor Ritual</h3>
              <p className="text-[#c9a96e] text-lg mb-4">£62</p>
              <p className="text-gray-400 leading-relaxed flex-grow">
                Hot towel preparation followed by a traditional straight razor shave. Slow pressure, exact finish, no unnecessary theatre.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="rounded-sm border border-white/10 p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#c9a96e]/10 transition-all duration-300 bg-white/5 flex flex-col"
              variants={itemVariants}
            >
              <div className="h-48 w-full bg-black/50 mb-6 rounded flex items-center justify-center overflow-hidden relative">
                 <img src="/images/straight-razor.png" alt="Precision Cut" className="object-cover w-full h-full opacity-80" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${spaceGrotesk.className} text-white`}>Precision Cut</h3>
              <p className="text-[#c9a96e] text-lg mb-4">£76</p>
              <p className="text-gray-400 leading-relaxed flex-grow">
                Structured haircutting with attention to movement, profile, and longevity between appointments. Built to hold its shape weeks later.
              </p>
            </motion.div>

          </div>
        </motion.section>

        {/* BOOKING CTA */}
        <motion.section 
          className="py-32 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <p className="text-xl text-[#c9a96e] italic">
              &quot;Appointments are limited by design. Reserve your chair accordingly.&quot;
            </p>
          </motion.div>
          
          <motion.form className="space-y-6" variants={itemVariants} onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] transition-colors"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="sr-only" htmlFor="service">Service</label>
              <select 
                id="service" 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#c9a96e] transition-colors"
                required
                defaultValue=""
              >
                <option value="" disabled>Select a Service</option>
                <option value="sculpt">The Sculpt</option>
                <option value="shave">Straight Razor Ritual</option>
                <option value="cut">Precision Cut</option>
              </select>
            </div>
            
            <div>
              <label className="sr-only" htmlFor="date">Preferred Date</label>
              <input 
                type="date" 
                id="date" 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] transition-colors"
                required
                style={{ colorScheme: 'dark' }}
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#c9a96e] hover:bg-[#b5955a] text-black font-bold py-4 rounded-sm transition-colors mt-4"
            >
              Request Appointment
            </button>
          </motion.form>
        </motion.section>

        {/* FOOTER */}
        <motion.footer 
          className="pb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link href="/" className="text-sm text-gray-500 hover:text-white transition-colors">
              Back to veltris.uk
            </Link>
          </motion.div>
        </motion.footer>

      </div>
    </main>
  );
}
