import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 text-white selection:bg-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-16">
          <div>
            <Link href="/" className="inline-block text-2xl font-bold tracking-tighter mb-6">
              VELTRIS
            </Link>
            <p className="text-zinc-400 text-lg max-w-sm leading-relaxed font-light">
              A luxury pitch deck studio for founders who are serious about raising. Pre-Seed through Series C.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:justify-self-end">
            <div>
              <h4 className="text-xs font-semibold text-zinc-400 mb-6 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-4 text-sm font-light">
                <li>
                  <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-zinc-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-zinc-400 mb-6 uppercase tracking-widest">Work & Contact</h4>
              <ul className="space-y-4 text-sm font-light">
                <li>
                  <Link href="/work" className="text-zinc-400 hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-500 gap-4">
          <p>© 2026 Veltris Pitch Deck Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms & Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
