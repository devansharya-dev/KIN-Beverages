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
        scrollWrapperRef.current.style.transform = `scale(${scale})`;
      }
      
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrollY * 0.3}px) scale(1.1)`;
      }

      if (overlayRef.current) {
        const opacity = Math.max(0, 1 - scrollY * 0.002);
        const yPos = scrollY * -0.6;
        overlayRef.current.style.opacity = opacity;
        overlayRef.current.style.transform = `translateY(${yPos}px)`;
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
    <section className="relative min-h-[140vh] w-full bg-[#f4f4f2] overflow-hidden font-body">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Playfair+Display:italic,wght@400&family=Space+Grotesk:wght@300;500&display=swap');
        .font-heading { font-family: 'Syne', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
      
      <div 
        ref={scrollWrapperRef}
        className="fixed top-0 left-0 w-full h-[100dvh] p-4 md:p-6 z-0 origin-center transition-opacity duration-1000"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-[30px] md:rounded-[50px] bg-[#e5e5e0] shadow-2xl">
          
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0">
            <img 
              ref={imageRef}
              src="/images/g.jpeg" 
              alt="Hero Background" 
              className="w-full h-full object-cover object-right md:object-center brightness-[0.85] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
          </div>

          {/* CONTENT OVERLAY */}
          <div ref={overlayRef} className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6">
            
            <div className="flex flex-col items-center text-center relative">
              <span className="text-[10px] tracking-[1.2em] uppercase opacity-30 mb-4 ml-[1.2em]">
                Connection • Lineage • Spirit
              </span>

              <div className="relative">
                <h1 className="font-heading text-[22vw] md:text-[180px] tracking-[-0.08em] leading-[0.75] uppercase flex items-center">
                  Kin<span className="text-[0.4em] font-serif italic lowercase opacity-40 tracking-tight ml-2">ship</span>
                </h1>
              </div>

              <p className="mt-8 font-serif italic text-[18px] md:text-[24px] opacity-70 tracking-wide">
                "A shared frequency for the modern soul."
              </p>
            </div>

            {/* BOTTOM INFO: CLEAN & LOCATION-FREE */}
            <div className="absolute bottom-12 md:bottom-20 w-full max-w-[1400px] flex flex-col md:flex-row justify-between items-end px-10 gap-10">
               
               <div className="flex flex-col gap-6 max-w-[450px]">
                  <div className="w-12 h-px bg-white/40" />
                  <p className="text-[14px] md:text-[16px] leading-[1.6] opacity-80 font-body uppercase tracking-[0.2em] font-light">
                    stripping away the noise to leave only the ritual. 
                    pure botanical chemistry, designed to ground your morning 
                    and elevate your focus.
                  </p>
               </div>

               <div className="flex flex-col items-end text-right gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.6em] opacity-30">Quality Control</span>
                  <p className="font-heading text-[22px] md:text-[32px] tracking-tighter opacity-90">
                    Series <span className="font-serif italic opacity-40 text-[0.8em]">2026</span>
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