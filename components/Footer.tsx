import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-white/5 text-zinc-400 py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/5 pb-16 md:pb-24">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Want to see what your business could look like online?</h2>
            <p className="text-zinc-400 max-w-xl text-sm md:text-base leading-relaxed">
              Send your Instagram or current website link and I will review whether a free homepage concept makes sense for your business.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-zinc-950 min-h-[48px] px-6 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-[0.98] w-full md:w-auto"
            >
              Request Free Homepage Concept
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
          {/* Left Column */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-xl font-bold tracking-wider text-white">
              Veltris
            </Link>
            <p className="text-sm max-w-sm leading-relaxed">
              Premium websites and digital presence for local businesses that want to look clearer, sharper, and more established online.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:items-end space-y-4">
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-2">Navigation</h4>
            <div className="flex flex-col space-y-3 md:items-end">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2025 Veltris. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
