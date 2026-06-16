"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-zinc-950/80 backdrop-blur-md ${
        isScrolled ? "border-b border-white/5 py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wider text-white hover:opacity-80 transition-opacity">
          Veltris
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-[11px] tracking-[0.2em] uppercase font-medium transition-colors ${
                  isActive ? "bg-white/5 text-white" : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>



        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-neutral-400 transition-colors p-2 -mr-2"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 z-[60] bg-zinc-950 flex flex-col px-6 py-6 overflow-y-auto"
          >
            {/* Top row inside menu */}
            <div className="flex items-center justify-between mb-16">
              <span className="text-xl font-bold tracking-wider text-white">Veltris</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-neutral-400 transition-colors p-2 -mr-2"
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 flex-grow pl-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-4 py-2"
                    >
                      <span className="text-[10px] font-mono text-[#555] group-hover:text-[#888] transition-colors">
                        0{index + 1}
                      </span>
                      <span className={`text-2xl tracking-wide uppercase font-semibold transition-colors ${
                        isActive ? "text-white" : "text-neutral-400 group-hover:text-white"
                      }`}>
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              className="mt-12 w-full pt-8 border-t border-[#1a1a1a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >

              <div className="flex justify-between items-center mt-12 text-[#555] text-[10px] font-mono uppercase tracking-widest">
                <span>© 2025 Veltris</span>
                <a href="mailto:hello@veltris.uk" className="hover:text-[#888] transition-colors">hello@veltris.uk</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
