/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function WorkPage() {
  const projects = [
    {
      id: "aethalgard",
      title: "Aethalgard",
      description: "Dark fantasy brand identity. Absolute edge, infinite darkness.",
      tag: "Brand Identity",
      image: "/aethelgard-preview.png",
      link: "https://athelgard.vercel.app/",
      isExternal: true
    },
    {
      id: "noir-atelier",
      title: "Noir Atelier",
      description: "Luxury fashion concept. Editorial minimalism, warm off-white palette.",
      tag: "Concept Site",
      image: "/images/black-wool.png",
      link: "/noir-atelier",
      isExternal: false
    },
    {
      id: "kinship",
      title: "KINSHIP",
      description: "Premium men's grooming. Warm charcoal, burnished gold accents.",
      tag: "Concept Site",
      image: "/images/trimmer.png",
      link: "/kinship",
      isExternal: false
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* PAGE HEADER */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Selected Work
          </h1>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl">
            Concept sites and client projects.
          </p>
        </header>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const LinkComponent = project.isExternal ? "a" : Link;
            const linkProps = project.isExternal 
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } 
              : { href: project.link };

            return (
              <LinkComponent 
                key={project.id} 
                {...linkProps}
                className="group block rounded-sm border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 hover:border-white/20"
              >
                {/* Image Area */}
                <div className="aspect-video w-full overflow-hidden bg-black/50 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
                
                {/* Content Area */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                      {project.tag}
                    </span>
                  </div>
                </div>
              </LinkComponent>
            );
          })}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            More projects coming.
          </p>
        </div>

      </div>
    </main>
  );
}
