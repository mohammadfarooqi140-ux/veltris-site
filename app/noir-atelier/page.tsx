'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function NoirAtelier() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f5f5f0] text-gray-900 min-h-screen font-sans selection:bg-gray-300">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
      `}</style>
      
      <div 
        ref={containerRef}
        className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          
          {/* 1. HERO */}
          <section className="min-h-[100vh] flex flex-col justify-center py-20">
            <h1 className="text-7xl md:text-8xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
              Silence Wears Better
            </h1>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Clothing cut for those who understand restraint before luxury.
            </p>
          </section>

          {/* 2. MANIFESTO */}
          <section className="py-32">
            <h2 className="text-2xl max-w-3xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Noir Atelier was built against the rhythm of trends. We believe permanence is the final form of elegance — garments that outlive seasons, algorithms, and spectacle.
            </h2>
            <p className="text-xl text-gray-600 mt-8 max-w-3xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Every silhouette is deliberate. Every fabric chosen to age with dignity rather than relevance.
            </p>
          </section>

          {/* 3. COLLECTIONS */}
          <section className="py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-200 overflow-hidden mb-6">
                  <img 
                    src="/images/black-wool.png" 
                    alt="Obsidian Coat" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Obsidian Coat</h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">£340</p>
                <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                  A long black wool overcoat with sharp shoulders and a quiet drape.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-200 overflow-hidden mb-6">
                  <img 
                    src="/images/camel-blazer.png" 
                    alt="Dune Structure Blazer" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Dune Structure Blazer</h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">£285</p>
                <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Camel-toned tailoring with architectural lines and a softened interior.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-200 overflow-hidden mb-6">
                  <img 
                    src="/images/ivory-cashmere.png" 
                    alt="Ivory Cashmere Wrap" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1434389678232-0230f51538c2?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Ivory Cashmere Wrap</h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">£390</p>
                <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                  A cream cashmere layer with weightless softness and understated volume.
                </p>
              </div>
            </div>
          </section>

          {/* 4. EMAIL CTA */}
          <section className="py-32 text-center max-w-2xl mx-auto">
            <p className="text-xl italic mb-10 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              &quot;Private releases and rare arrivals, reserved for those already paying attention.&quot;
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-6 py-4 bg-transparent border-b border-gray-400 focus:border-black outline-none w-full sm:w-96 transition-colors text-black"
                style={{ fontFamily: "'Inter', sans-serif" }}
                required
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors w-full sm:w-auto"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Request Access
              </button>
            </form>
          </section>

          {/* Back link */}
          <footer className="py-12 flex justify-center">
            <Link 
              href="/" 
              className="text-gray-500 hover:text-black transition-colors text-sm tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Back to veltris.uk
            </Link>
          </footer>

        </div>
      </div>
    </div>
  );
}
