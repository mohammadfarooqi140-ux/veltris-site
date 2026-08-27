"use client";

export default function ConceptFallback() {
  return (
    <div className="w-full bg-[#F5F1E9] text-[#332E28] py-12 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Subtle notice */}
        <div className="text-center py-3 px-6 bg-[#E9E4DA]/60 border border-[#332E28]/10 rounded-full max-w-lg mx-auto">
          <p className="text-[11px] font-mono tracking-widest text-[#70785B] uppercase">
            Editorial Still Mode Active (Accessible / Reduced Motion)
          </p>
        </div>

        {/* 3 Atmosphere Visual Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* City Card */}
          <div className="bg-[#E9E4DA] border border-[#332E28]/15 rounded-2xl p-8 flex flex-col justify-between h-96 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#332E28]/5 rounded-bl-full pointer-events-none" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6B3F3D] font-bold block mb-3">
                Atmosphere 01 · City
              </span>
              <h3 className="font-playfair text-2xl text-[#332E28] font-medium mb-3">
                Structured & Intimate
              </h3>
              <p className="text-xs font-light text-[#332E28]/80 leading-relaxed">
                Sharper architectural planes, dark smoked timber, pietra stone plinths, and controlled directional light for urban homes.
              </p>
            </div>

            {/* Architectural diagram snippet */}
            <div className="pt-6 border-t border-[#332E28]/10 flex items-center justify-between text-[11px] font-mono text-[#332E28]/60">
              <span>Palette: Deep Umber · Oxblood</span>
              <div className="flex gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#332E28]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#6B3F3D]" />
              </div>
            </div>
          </div>

          {/* Coast Card */}
          <div className="bg-[#E9E4DA] border border-[#332E28]/15 rounded-2xl p-8 flex flex-col justify-between h-96 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#667D7B]/10 rounded-bl-full pointer-events-none" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#667D7B] font-bold block mb-3">
                Atmosphere 02 · Coast
              </span>
              <h3 className="font-playfair text-2xl text-[#332E28] font-medium mb-3">
                Light, Air & Mineral
              </h3>
              <p className="text-xs font-light text-[#332E28]/80 leading-relaxed">
                Wider horizontal openings, sun-bleached pale oak, chalk plaster, and soft mineral sea tones opening toward the horizon.
              </p>
            </div>

            <div className="pt-6 border-t border-[#332E28]/10 flex items-center justify-between text-[11px] font-mono text-[#332E28]/60">
              <span>Palette: Muted Sea · Chalk</span>
              <div className="flex gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#667D7B]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#8FA4A0]" />
              </div>
            </div>
          </div>

          {/* Mountain Card */}
          <div className="bg-[#E9E4DA] border border-[#332E28]/15 rounded-2xl p-8 flex flex-col justify-between h-96 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#70785B]/10 rounded-bl-full pointer-events-none" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#70785B] font-bold block mb-3">
                Atmosphere 03 · Mountain
              </span>
              <h3 className="font-playfair text-2xl text-[#332E28] font-medium mb-3">
                Shelter & Deep Timber
              </h3>
              <p className="text-xs font-light text-[#332E28]/80 leading-relaxed">
                Heavy timber header beams, rough alpine hearth stone, aged brass details, and olive wool providing warmth and protection.
              </p>
            </div>

            <div className="pt-6 border-t border-[#332E28]/10 flex items-center justify-between text-[11px] font-mono text-[#332E28]/60">
              <span>Palette: Olive · Aged Brass</span>
              <div className="flex gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#70785B]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#AD9670]" />
              </div>
            </div>
          </div>
        </div>

        {/* Tactile Material Palette Strip */}
        <div className="bg-[#E9E4DA] border border-[#332E28]/15 rounded-2xl p-8">
          <h4 className="font-playfair text-xl text-[#332E28] font-medium mb-4">
            The Tactile Material System
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#332E28]/80 font-light">
            <div className="border-l-2 border-[#D8CFBE] pl-3">
              <strong className="block font-medium text-[#332E28] mb-1">Honed Stone</strong>
              Holds natural light and gives the room physical permanence.
            </div>
            <div className="border-l-2 border-[#332E28] pl-3">
              <strong className="block font-medium text-[#332E28] mb-1">Tactile Oak Timber</strong>
              Brings organic warmth, shadow definition, and a sense of touch.
            </div>
            <div className="border-l-2 border-[#8FA4A0] pl-3">
              <strong className="block font-medium text-[#332E28] mb-1">Linen & Lime Plaster</strong>
              Softens the architectural boundary between structure and daily living.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
