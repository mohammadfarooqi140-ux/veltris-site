import Image from "next/image";
import { FadeInUp } from "@/components/FadeInUp";

const projects = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export const WorkSection = () => {
  return (
    <section id="work" className="py-24 bg-[#161616]">
      <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16 px-4 sm:px-0">
          <h2 className="text-4xl font-bold text-white uppercase tracking-widest">Projects</h2>
          <div className="h-1 w-20 bg-zinc-400 mx-auto mt-6"></div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-4">
          {projects.map((imgSrc, idx) => (
            <FadeInUp key={idx} delay={idx * 0.1}>
              <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden bg-black group">
                <Image 
                  src={imgSrc} 
                  alt={`Project ${idx + 1}`} 
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};
