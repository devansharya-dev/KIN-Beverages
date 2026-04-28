import { motion } from 'framer-motion';
import useParallax from '../hooks/useParallax';

export default function ParallaxSection() {
  const { ref: bgRef, y: bgY, scale: bgScale } = useParallax({ speed: 0.08, scale: 0.04, direction: 'down' });
  const { ref: contentRef, y: contentY } = useParallax({ speed: 0.04, direction: 'up' });

  return (
    <section className="relative w-full h-[100vh] md:h-[150vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] font-body">
      


      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" ref={bgRef}>
        <motion.div 
          className="relative w-full h-[130%] -top-[15%]"
          style={{ y: bgY, scale: bgScale }}
        >
          <img
            src="/images/parallax/botanicals.png" 
            alt="Kin Botanicals"
            className="w-full h-full object-cover opacity-30 grayscale-[60%] contrast-[1.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        </motion.div>
      </div>

      {/* --- NEW CONTENT DESIGN --- */}
      <motion.div
        className="relative z-10 w-full max-w-[1600px] h-full flex flex-col justify-center px-6 md:px-24"
        ref={contentRef}
        style={{ y: contentY }}
      >
        
        {/* Top Info Bar */}
        <div className="flex items-center gap-4 md:gap-10 mb-16 md:mb-24 opacity-30">
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[0.8em] uppercase text-white">The Botanical Edge</span>
            <div className="h-[1px] flex-grow bg-white/20" />
            
        </div>

        {/* MASSIVE NEW HEADLINE */}
        <div className="relative mb-20 md:mb-32">
            <h2 className="font-heading text-[11vw] sm:text-[12vw] md:text-[15vw] lg:text-[200px] tracking-[-0.05em] md:tracking-[-0.08em] text-white lowercase">
                Built <br /> <span className="opacity-30">For Volume.</span>
            </h2>
        </div>

        {/* BOTTOM SECTION: ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mt-10">
            
            {/* Left: Premium Statement */}
            <div className="md:col-span-7 lg:col-span-6">
                <h3 className="font-serif text-[24px] sm:text-[32px] md:text-[45px] lg:text-[54px] text-white leading-[1.2] md:leading-[1.1] italic">
                   “One bottle replaces <span className="not-italic font-heading text-white/30 lowercase text-[0.8em]">4 ready-to-drinks</span>. Your staff pours in 
                   <span className="text-white"> 10 seconds.</span>”
                </h3>
            </div>

            {/* Right: Technical Detail */}
            <div className="md:col-start-9 md:col-span-4 lg:col-start-10 lg:col-span-3 flex flex-col justify-end mt-8 md:mt-0">
                <div className="mb-6 md:mb-8 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white animate-pulse" />
                </div>
                <p className="font-body text-[11px] md:text-[13px] leading-relaxed text-white/40 uppercase tracking-[0.2em] mb-3 md:mb-4">
                   Our Process
                </p>
                <p className="font-body text-[14px] md:text-[15px] leading-relaxed text-white/60 font-light mb-8">
                   Our blend preserves the integrity of every functional botanical. Pure ingredients, designed for a mindful lift.
                </p>
                <p className="font-body text-[11px] md:text-[13px] leading-relaxed text-white/40 uppercase tracking-[0.2em] mb-3 md:mb-4">
                   The Umami Advantage
                </p>
                <p className="font-body text-[14px] md:text-[15px] leading-relaxed text-white/60 font-light">
                   Shiitake's natural umami stimulates appetite, driving food orders and increasing average spend per table.
                </p>
            </div>

        </div>

      </motion.div>



    </section>
  );
}