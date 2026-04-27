import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function CTASection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  // Massive Image Movement
  const bottleY = useTransform(smoothProgress, [0, 1], [100, -100]); 
  const bottleScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);
  
  // Text Movement
  const pureX = useTransform(smoothProgress, [0, 1], [-50, 50]);
  const zestX = useTransform(smoothProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[160vh] bg-[#F2F3EC] flex items-center justify-center overflow-hidden"
    >
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Playfair+Display:italic,wght@400&display=swap');
        .font-heading { font-family: 'Syne', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .text-outline-dark {
          -webkit-text-stroke: 1px rgba(12, 12, 12, 0.15);
          color: transparent;
        }
      `}</style>

      {/* --- BACKGROUND ARCHITECTURE (Empty space filler) --- */}
      <div className="absolute inset-0 flex justify-around px-20 opacity-[0.03] pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-black" />
        ))}
      </div>

      {/* 1. BACKGROUND TEXT (PURE) */}
      <motion.div 
        style={{ x: pureX, opacity: 0.08 }}
        className="absolute top-[20%] w-full flex justify-center z-0 select-none"
      >
        <h2 className="font-heading text-[25vw] font-extrabold text-[#0C0C0C] lowercase leading-none tracking-tighter">
          pure
        </h2>
      </motion.div>

      {/* 2. MASSIVE CENTER BOTTLE (D.PNG) */}
      <motion.div 
        style={{ y: bottleY, scale: bottleScale }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Postcard Container - Massive Size */}
        <div className="relative p-6 md:p-16 bg-white shadow-[0_120px_200px_-60px_rgba(0,0,0,0.15)] rounded-[40px] md:rounded-[80px] rotate-[-2deg]">
            <img 
              src="/images/d.png" 
              alt="Kin Bottle" 
              className="relative z-10 w-[240px] sm:w-[300px] md:w-[500px] lg:w-[650px] h-auto object-contain"
            />
            {/* Soft Shadow for Grounding */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[60%] h-5 bg-black/20 blur-3xl rounded-full scale-x-150 z-0" />
            
            {/* Top Micro-Metadata */}
            <div className="absolute top-6 left-6 md:top-10 md:left-14 flex flex-col sm:flex-row gap-2 sm:gap-10 opacity-20 font-body text-[10px] font-bold uppercase tracking-widest">
                <span>Ref. No. 2026_D</span>
                <span>Organic Extract</span>
            </div>
        </div>
      </motion.div>

      {/* 3. FOREGROUND CONTENT (ZEST & TAGLINE) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        
        <div className="mt-[60vh] md:mt-[75vh]">
          <motion.h2 
            style={{ x: zestX }}
            className="font-heading text-[20vw] lg:text-[280px] font-extrabold text-[#0C0C0C] lowercase leading-none tracking-tighter"
          >
            <span className="text-outline-dark italic">zest.</span>
          </motion.h2>
          
          <div className="mt-10 max-w-[900px] mx-auto">
              <p className="font-serif text-[28px] md:text-[45px] lg:text-[56px] text-[#0C0C0C]/90 leading-[1.1] italic">
                A mindful ritual for the <br /> 
                <span className="font-medium">high-frequency</span> soul
              </p>
              
              {/* Bottom Details Grid */}
              <div className="mt-16 flex justify-center gap-8 md:gap-24 font-body opacity-30">
                  <div className="text-left border-l border-black pl-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Terroir</p>
                      <p className="text-[14px] font-medium uppercase tracking-tighter">Sicily, Italy</p>
                  </div>
                  <div className="text-right border-r border-black pr-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Essence</p>
                      <p className="text-[14px] font-medium uppercase tracking-tighter">Sun-Drenched Citrus</p>
                  </div>
              </div>
          </div>
        </div>
      </div>

    </section>
  );
}