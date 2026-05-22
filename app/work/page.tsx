/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function WorkPage() {
  const projects = [
    {
      id: "aethalgard",
      title: "Aethalgard",
      description: "Dark fantasy brand identity.",
      tag: "Brand Identity",
      image: "/aethelgard-preview.png",
      link: "https://athelgard.vercel.app",
      isExternal: true
    },
    {
      id: "noir-atelier",
      title: "Noir Atelier",
      description: "Luxury fashion concept.",
      tag: "Concept Site",
      image: "/images/black-wool.png",
      link: "/noir-atelier",
      isExternal: false
    },
    {
      id: "kinship",
      title: "KINSHIP",
      description: "Premium men's grooming.",
      tag: "Concept Site",
      image: "/images/trimmer.png",
      link: "/kinship",
      isExternal: false
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <div className="max-w-6xl mx-auto px-6 py-24">
        
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
                className="group block border border-white/10 rounded-sm overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-video w-full overflow-hidden bg-black">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                  <span className="text-xs uppercase tracking-wider text-gray-500 mt-4 block">{project.tag}</span>
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
