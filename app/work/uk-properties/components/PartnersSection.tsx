import { FadeInUp } from "@/components/FadeInUp";

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="text-3xl font-bold text-gray-200 mb-4">Our Partners</h2>
          <div className="h-1 w-16 bg-yellow-600 mx-auto mb-12"></div>
        </FadeInUp>
        
        <FadeInUp delay={0.2} className="flex flex-wrap justify-center items-center gap-12 opacity-70">
           <div className="flex flex-col items-center border-4 border-dashed border-gray-300 rounded-full p-4 w-32 h-32 justify-center bg-white text-black">
             <span className="font-bold text-xs uppercase leading-tight">All Right<br/>Birmingham</span>
             <span className="border-t border-black w-8 my-1"></span>
             <span className="text-xs font-bold">ARB</span>
           </div>
           
           <div className="text-2xl font-sans text-gray-300">EXCIPIA</div>
           
           <div className="text-3xl font-serif text-white italic font-bold tracking-tight">Vide</div>
           
           <div className="text-xl tracking-widest text-gray-300">DEH<span className="text-xs align-top">O</span>TEL</div>
           
           <div className="flex items-center gap-2">
             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
             <div className="flex flex-col items-start leading-none text-white font-bold">
               <span className="text-sm">UMBER</span>
               <span className="text-xs">&amp; CO</span>
             </div>
           </div>
           
           <div className="text-2xl font-bold tracking-widest text-white">TIPOX</div>
        </FadeInUp>

        <FadeInUp delay={0.4} className="mt-12 flex justify-center">
          <div className="border border-blue-900 bg-[#1a2b4c] text-white px-6 py-2 flex flex-col items-center">
             <span className="text-xs text-blue-400 font-semibold tracking-wider">WE ARE RECOMMENDED ON</span>
             <span className="text-2xl font-black tracking-tighter"><span className="text-orange-500">my</span><span className="text-blue-500">workman</span></span>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
