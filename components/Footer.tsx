import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10 text-white selection:bg-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-20">
          <div>
            <Link href="/" className="inline-block text-2xl font-bold tracking-tighter mb-6">
              VELTRIS
            </Link>
            <p className="text-zinc-400 text-lg max-w-sm leading-relaxed">
              A luxury pitch deck studio for founders who are serious about raising. Pre-Seed through Series C.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:justify-self-end">
            <div>
              <h4 className="text-sm font-semibold text-white/90 mb-6 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-4">
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
              <h4 className="text-sm font-semibold text-white/90 mb-6 uppercase tracking-wider">Work & Contact</h4>
              <ul className="space-y-4">
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
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-zinc-500">
          <p>© 2026 Veltris</p>
        </div>
      </div>
    </footer>
  );
}
