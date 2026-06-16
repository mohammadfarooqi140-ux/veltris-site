export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-zinc-950 text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-12 h-12">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 rounded-full border-2 border-t-white animate-spin" />
          
          {/* Inner pulse */}
          <div className="absolute inset-3 rounded-full bg-white/20 animate-pulse" />
        </div>
        <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Loading Veltris</p>
      </div>
    </div>
  );
}
