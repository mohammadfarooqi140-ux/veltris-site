"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, X, Home } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Check if current page is an isolated prototype route
  const isPrototypePage = pathname === "/hartley" || pathname === "/sterling";

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
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  // If we are on an isolated interactive prototype page, render a floating drawer button
  if (isPrototypePage) {
    return (
      <>
        {/* Floating Toggle Button for Prototype Pages */}
        <button
          ref={toggleRef}
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-surface border border-border-subtle rounded-full flex items-center justify-center text-ink shadow-2xl hover:bg-surface-raised transition-all active:scale-95"
          aria-label={isOpen ? "Close Veltris Menu" : "Open Veltris Menu"}
        >
          {isOpen ? <X size={22} /> : <MoreHorizontal size={22} />}
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
              className="fixed bottom-24 right-6 w-64 z-[100] bg-surface/95 backdrop-blur-xl border border-border-subtle rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-4 bg-paper/60 border-b border-border-subtle">
                <p className="text-[10px] font-mono uppercase tracking-widest text-ink-dim font-semibold text-center">Back to Veltris</p>
              </div>
              <div className="p-2 flex flex-col">
                {navLinks.map((link) => {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-xs uppercase tracking-[0.16em] font-medium rounded-lg transition-colors text-ink-muted hover:bg-surface-raised hover:text-ink flex items-center gap-3"
                    >
                      {link.name === "Home" && <Home size={15} />}
                      {link.name}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 mx-2 py-3 bg-ink text-paper text-center text-[11px] uppercase tracking-[0.18em] font-bold rounded-lg transition-colors hover:bg-zinc-200"
                >
                  Discuss your website
                </Link>
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-paper/85 backdrop-blur-xl ${
        isScrolled ? "border-b border-border-subtle py-4 shadow-lg" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wider text-ink hover:opacity-80 transition-opacity relative z-[101]">
          Veltris
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === "/work" && pathname.startsWith("/work"));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-[11px] tracking-[0.18em] uppercase font-medium transition-colors ${
                  isActive ? "bg-surface-raised text-ink border border-border-subtle" : "text-ink-muted hover:text-ink hover:bg-surface"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-semibold bg-ink text-paper hover:bg-zinc-200 transition-colors"
          >
            Discuss your website
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          ref={toggleRef}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[101] flex items-center justify-center w-10 h-10 bg-surface rounded-full text-ink hover:bg-surface-raised transition-colors border border-border-subtle"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <MoreHorizontal size={18} />}
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
            className="md:hidden absolute top-full left-0 right-0 bg-paper border-b border-border-subtle overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href === "/work" && pathname.startsWith("/work"));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-3.5 px-4 rounded-xl text-xs uppercase tracking-[0.18em] font-medium transition-colors flex items-center ${
                      isActive ? "bg-surface-raised text-ink border border-border-subtle" : "text-ink-muted hover:bg-surface hover:text-ink"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 py-3.5 px-4 rounded-xl text-xs uppercase tracking-[0.18em] font-semibold bg-ink text-paper text-center transition-colors hover:bg-zinc-200"
              >
                Discuss your website
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
