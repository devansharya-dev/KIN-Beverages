import useParallax from '../hooks/useParallax';

export default function ParallaxSection() {
  const { ref: bgRef, y: bgY, scale: bgScale } = useParallax({ speed: 0.08, scale: 0.04, direction: 'down' });
  const { ref: contentRef, y: contentY } = useParallax({ speed: 0.04, direction: 'up' });

  return (
    <section className="relative w-full h-[150vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] font-body">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Playfair+Display:italic,wght@400;600&display=swap');
        .font-heading { font-family: 'Syne', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* --- BACKGROUND (Images Same) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" ref={bgRef}>
        <div 
          className="relative w-full h-[130%] -top-[15%]"
          style={{ transform: `translateY(${bgY}px) scale(${bgScale})` }}
        >
          <img
            src="/images/parallax/botanicals.png" 
            alt="Kin Botanicals"
            className="w-full h-full object-cover opacity-30 grayscale-[60%] contrast-[1.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        </div>
      </div>

      {/* --- NEW CONTENT DESIGN --- */}
      <div
        className="relative z-10 w-full max-w-[1600px] h-full flex flex-col justify-center px-6 md:px-24"
        ref={contentRef}
        style={{ transform: `translateY(${contentY}px)` }}
      >
        
        {/* Top Info Bar */}
        <div className="flex items-center gap-4 md:gap-10 mb-16 md:mb-24 opacity-30">
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[0.8em] uppercase text-white">Molecular Series</span>
            <div className="h-[1px] flex-grow bg-white/20" />
            
        </div>

        {/* MASSIVE NEW HEADLINE */}
        <div className="relative mb-20 md:mb-32">
            <h2 className="font-heading text-[11vw] sm:text-[12vw] md:text-[15vw] lg:text-[200px] leading-[0.85] md:leading-[0.8] tracking-[-0.05em] md:tracking-[-0.08em] text-white lowercase">
                Bio <br /> <span className="opacity-15">Intelligence.</span>
            </h2>
            <div className="relative mt-4 md:mt-0 md:absolute md:top-1/2 right-0 md:right-32 md:-translate-y-1/2 text-right md:text-left">
                <p className="font-serif italic text-[9vw] sm:text-[10vw] md:text-[8vw] lg:text-[110px] text-white/40 leading-none tracking-tighter">
                   The Alchemy
                </p>
            </div>
        </div>

        {/* BOTTOM SECTION: ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mt-10">
            
            {/* Left: Premium Statement */}
            <div className="md:col-span-7 lg:col-span-6">
                <h3 className="font-serif text-[28px] sm:text-[32px] md:text-[45px] lg:text-[54px] text-white leading-[1.2] md:leading-[1.1] italic">
                   “Translating the <span className="not-italic font-heading text-white/30 lowercase text-[0.8em]">silent logic</span> of shiitake into 
                   <span className="text-white"> liquid focus.</span>”
                </h3>
            </div>

            {/* Right: Technical Detail */}
            <div className="md:col-start-9 md:col-span-4 lg:col-start-10 lg:col-span-3 flex flex-col justify-end mt-8 md:mt-0">
                <div className="mb-6 md:mb-8 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white animate-pulse" />
                </div>
                <p className="font-body text-[11px] md:text-[13px] leading-relaxed text-white/40 uppercase tracking-[0.2em] mb-3 md:mb-4">
                   Methodology
                </p>
                <p className="font-body text-[14px] md:text-[15px] leading-relaxed text-white/60 font-light">
                   A triple-extraction process designed to preserve the functional integrity of every molecule. No noise, just ritual.
                </p>
            </div>

        </div>

      </div>

      {/* --- DECORATIVE ACCENTS --- */}
      <div className="absolute bottom-12 md:bottom-20 left-6 md:left-24 opacity-10 flex items-center gap-4 md:gap-6">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white" />
          <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-white">Stabilized Formula</span>
      </div>

    </section>
  );
}