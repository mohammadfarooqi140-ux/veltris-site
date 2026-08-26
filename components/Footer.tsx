"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mainPages = ["/", "/services", "/work", "/contact", "/about", "/privacy", "/terms", "/privacy-policy", "/cookie-policy"];

export default function Footer() {
  const pathname = usePathname();
  const isConceptPage = !mainPages.includes(pathname);

  if (isConceptPage) {
    return null;
  }

  return (
    <footer className="bg-paper border-t border-border-subtle pt-20 pb-12 text-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-16">
          <div>
            <Link href="/" className="inline-block text-2xl font-bold tracking-tighter mb-4 text-ink">
              VELTRIS
            </Link>
            <p className="text-ink-muted text-sm md:text-base max-w-sm leading-relaxed font-light">
              Digital architecture and conversion optimization for private aesthetic clinics and luxury property developers. Built strictly to The Veltris Standard.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:justify-self-end">
            <div>
              <h4 className="text-[11px] font-mono font-semibold text-ink-dim mb-6 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-3.5 text-xs uppercase tracking-wider font-medium">
                <li>
                  <Link href="/" className="text-ink-muted hover:text-ink transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-ink-muted hover:text-ink transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-ink-muted hover:text-ink transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-mono font-semibold text-ink-dim mb-6 uppercase tracking-widest">Portfolio</h4>
              <ul className="space-y-3.5 text-xs uppercase tracking-wider font-medium">
                <li>
                  <Link href="/work" className="text-ink-muted hover:text-ink transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-ink-muted hover:text-ink transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-subtle text-xs text-ink-dim font-mono gap-4">
          <p>© 2025 Veltris Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ink-muted transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink-muted transition-colors">
              Terms & Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

