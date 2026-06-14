import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkPage() {
  const projects = [
    {
      id: "blackline-atelier",
      title: "Blackline Atelier",
      label: "Tattoo studio concept / proof of work",
      description: "A fictional London tattoo studio concept built to show how studios can move beyond Instagram-only enquiries with artist profiles, FAQs, booking clarity, and a premium first impression.",
      image: "/blackline-atelier-preview.png", // We will use a placeholder or assume this exists, wait I'll use a black block if the image doesn't exist
      link: "/blackline-atelier",
      isExternal: false,
      color: "bg-[#050505]"
    },
    {
      id: "aethalgard",
      title: "Aethalgard",
      label: "E-commerce concept / proof of work",
      description: "A dark luxury e-commerce concept showing premium visual direction, product presentation, and high-end brand atmosphere.",
      image: "/aethelgard-preview.png",
      link: "https://athelgard.vercel.app",
      isExternal: true,
      color: "bg-[#0A0A0A]"
    },
    {
      id: "noir-atelier",
      title: "Noir Atelier",
      label: "Fashion concept / proof of work",
      description: "Luxury fashion concept demonstrating high-end typography and clean grid layouts.",
      image: "/images/black-wool.png",
      link: "/noir-atelier",
      isExternal: false,
      color: "bg-[#111]"
    },
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        
        {/* PAGE HEADER */}
        <header className="mb-24 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Concept builds and proof of work
          </h1>
          <p className="text-lg text-[#888] max-w-2xl leading-relaxed">
            These are concept builds created to show the level of visual direction, structure, and execution Veltris can deliver. They are not presented as real client projects.
          </p>
        </header>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-24">
          {projects.map((project) => {
            const LinkComponent = project.isExternal ? "a" : Link;
            const linkProps = project.isExternal 
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } 
              : { href: project.link };

            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className={`aspect-[16/10] w-full border border-[#1a1a1a] overflow-hidden ${project.color} relative group`}>
                    <LinkComponent {...linkProps} className="block w-full h-full relative">
                      {project.id === 'blackline-atelier' ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
                          <h3 className="font-playfair text-4xl text-white tracking-wider">BLACKLINE</h3>
                        </div>
                      ) : (
                         /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                      )}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </LinkComponent>
                  </div>
                </div>

                <div className="lg:col-span-5 order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-semibold text-white bg-[#1a1a1a] px-3 py-1.5 tracking-widest uppercase border border-[#333]">
                      {project.label}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-[#888] text-base leading-relaxed mb-8">{project.description}</p>
                  <LinkComponent 
                    {...linkProps}
                    className="inline-flex items-center gap-2 text-sm text-white font-semibold uppercase tracking-widest hover:text-[#A0A0A0] transition-colors pb-1 border-b border-white hover:border-[#A0A0A0]"
                  >
                    View Concept <ArrowRight className="w-4 h-4" />
                  </LinkComponent>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
