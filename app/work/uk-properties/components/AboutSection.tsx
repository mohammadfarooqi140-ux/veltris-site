import { FadeInUp } from "@/components/FadeInUp";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#080808] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInUp>
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6 text-white">
              About UK Properties
            </h2>
            <div className="h-1 w-20 bg-yellow-600 mt-4 mb-6"></div>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                Based in Birmingham, West Midlands, UK Properties delivers premium construction services with over 20 years of experience. We proudly serve our local community and surrounding areas, including Sutton Coldfield, Solihull, Coventry, Leamington Spa, Redditch, and Worcestershire.
              </p>
              <p>
                Our fully qualified team of electricians, plumbers, builders, and architects offers a comprehensive, stress-free project management experience. From initial free consultations to working seamlessly with Council Building Inspectors, we ensure high-quality workmanship on time and within budget.
              </p>
              <p>
                Fully insured, competent, and professional—let&apos;s build your dream home together.
              </p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2} className="relative">
            <div className="aspect-video bg-black border border-gray-800 p-8 flex items-center justify-center">
               <div className="text-center">
                  <span className="block text-5xl font-bold text-yellow-600 mb-3">20+</span>
                  <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Years of Experience</span>
               </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
