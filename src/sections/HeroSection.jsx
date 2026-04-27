import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const scrollWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    
    let rafId;
    const updateScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollWrapperRef.current) {
        const scale = Math.max(0.94, 1 - scrollY * 0.0003);
        scrollWrapperRef.current.style.transform = `translate3d(0, 0, 0) scale(${scale})`;
      }
      
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(0, ${scrollY * -0.1}px, 0) scale(1.05)`;
      }

      if (overlayRef.current) {
        const opacity = Math.max(0, 1 - scrollY * 0.002);
        const yPos = scrollY * -0.6;
        overlayRef.current.style.opacity = opacity;
        overlayRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      rafId = requestAnimationFrame(updateScroll);
    };
    
    rafId = requestAnimationFrame(updateScroll);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[140vh] w-full bg-[#f4f4f2] overflow-hidden font-body">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Playfair+Display:italic,wght@400&family=Space+Grotesk:wght@300;400&display=swap');
        .font-heading { font-family: 'Syne', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
      
      <div 
        ref={scrollWrapperRef}
        className="fixed top-0 left-0 w-full h-[100dvh] p-4 md:p-6 z-0 origin-center transition-opacity duration-1000"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-[30px] md:rounded-[50px] bg-black shadow-2xl">
          
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0">
            <img 
              ref={imageRef}
              src="/images/g.jpeg" 
              alt="Hero Background" 
              className="w-full h-full object-cover object-right md:object-center brightness-[0.75] contrast-[1.1]"
            />
            {/* Subtle Gradient Veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* CONTENT OVERLAY */}
          <div ref={overlayRef} className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6">
            
            <div className="flex flex-col items-center text-center">
              {/* Minimal Top Label */}
              <span className="text-[9px] tracking-[1.5em] uppercase opacity-40 mb-6 font-light">
                Molecular Synergy
              </span>

              {/* Distilled Logo */}
              <div className="relative">
                <h1 className="font-heading text-[22vw] md:text-[180px] tracking-[-0.08em] leading-[0.75] uppercase flex items-center drop-shadow-xl">
                  Kin<span className="text-[0.35em] font-serif italic lowercase opacity-30 tracking-tight ml-2">ship</span>
                </h1>
              </div>

              {/* Shortest Tagline */}
              <p className="mt-8 font-serif italic text-[18px] md:text-[22px] opacity-70 tracking-wide drop-shadow-md">
                "Liquid Ritual."
              </p>
            </div>

            {/* BOTTOM INFO: SLEEK & LIGHTWEIGHT */}
            <div className="absolute bottom-12 md:bottom-20 w-full max-w-[1400px] flex flex-col md:flex-row justify-between items-end px-10 gap-10">
               
               {/* Left: Distilled Narrative */}
               <div className="flex flex-col gap-4 max-w-[320px]">
                  <div className="w-8 h-px bg-white/30" />
                  <p className="text-[13px] leading-[1.6] text-white/60 font-body uppercase tracking-[0.3em] font-light">
                    Stripping noise to leave <br/> only the essential.
                  </p>
               </div>

               {/* Right: Technical Versioning */}
               <div className="flex flex-col items-end text-right gap-1">
                  <span className="text-[8px] font-bold uppercase tracking-[0.6em] opacity-30">Series Ref</span>
                  <p className="font-heading text-[24px] md:text-[34px] tracking-tighter opacity-80">
                    2026 <span className="font-serif italic opacity-30 text-[0.7em]">v1</span>
                  </p>
               </div>
            </div>

          </div>
        </div>
      </div>

      <div className="h-[140vh] pointer-events-none" />
    </section>
  );
}