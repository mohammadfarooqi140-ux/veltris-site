import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] text-neutral-400 py-10 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
          {/* Left Column */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-xl font-bold tracking-wider text-white">
              Veltris
            </Link>
            <p className="text-sm max-w-sm leading-relaxed">
              Premium websites for local businesses that need a clearer, more credible online presence.
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
        <div className="border-t border-[#1a1a1a]/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
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
