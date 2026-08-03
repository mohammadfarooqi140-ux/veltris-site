"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, X, Home } from "lucide-react";

const mainPages = ["/", "/services", "/work", "/contact", "/about"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Check if current page is a concept site
  const isConceptPage = !mainPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "AI Voice Agents", href: "/services#automation" },
    { name: "Web Development", href: "/services#web-dev" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  // If we are on a concept page, we render a floating button so it doesn't clash with the concept's own navbar.
  if (isConceptPage) {
    return (
      <>
        {/* Floating Toggle Button for Concept Sites */}
        <button
          ref={toggleRef}
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-zinc-950 border border-white/10 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-zinc-900 transition-all active:scale-95"
          aria-label={isOpen ? "Close Veltris Menu" : "Open Veltris Menu"}
        >
          {isOpen ? <X size={24} /> : <MoreHorizontal size={24} />}
        </button>

        {/* Mobile / Floating Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-24 right-6 w-64 z-[100] bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-4 bg-white/5 border-b border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold text-center">Back to Veltris</p>
              </div>
              <div className="p-2 flex flex-col">
                {navLinks.map((link) => {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-sm uppercase tracking-[0.15em] font-medium rounded-lg transition-colors text-zinc-300 hover:bg-white/5 hover:text-white flex items-center gap-3"
                    >
                      {link.name === "Home" && <Home size={16} />}
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // STANDARD NAVBAR FOR MAIN VELTRIS PAGES
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-zinc-950/90 backdrop-blur-xl ${
        isScrolled ? "border-b border-white/5 py-4 shadow-lg" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wider text-white hover:opacity-80 transition-opacity relative z-[101]">
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

        {/* Mobile Menu Toggle — Three Dots */}
        <button
          ref={toggleRef}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[101] flex items-center justify-center w-10 h-10 bg-white/5 rounded-full text-white hover:bg-white/10 hover:text-white transition-colors border border-white/5"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <MoreHorizontal size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-4 px-4 rounded-xl text-[13px] uppercase tracking-[0.2em] font-medium transition-colors flex items-center ${
                      isActive ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
