import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useParallax from '../hooks/useParallax';

export default function KinProductSection() {
  const { ref: imgRef, y: imgY, scale: imgScale } = useParallax({ speed: 0.1, scale: 0.02 });

  return (
    <section id="about" className="bg-[var(--color-bg)] py-16 md:py-40 px-6 md:px-12 lg:px-20 font-body antialiased overflow-x-hidden">
      
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- TOP ROW: Eyebrow + Main Heading --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-48">
          
          {/* Eyebrow */}
          <div className="lg:col-span-3 pt-4">
            <div className="flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[var(--color-text)] uppercase tracking-widest">
              <span className="w-[18px] h-[18px] bg-[var(--color-primary)] text-[var(--color-surface)] rounded-full flex items-center justify-center shrink-0">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </span>
              The New Ritual
            </div>
          </div>
          
          {/* Kin Brand Heading */}
          <div className="lg:col-span-9">
            <h2 className="text-[32px] md:text-[72px] lg:text-[92px] font-semibold tracking-[-0.05em] leading-[1] text-[var(--color-text)] max-w-[1100px] lowercase">
              All bliss, no booze. <br className="hidden md:block" />
              <span className="text-[var(--color-text-muted)]">Experience the lift without <br className="hidden md:block" /> the morning letdown.</span>
            </h2>
          </div>
        </div>

        {/* --- BOTTOM ROW: Image + Content/Stats --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
          
          {/* LEFT: Drink Bottle Image (Parallax) */}
          <div className="lg:col-span-5 relative" ref={imgRef}>
            <motion.div 
              style={{ y: imgY, scale: imgScale }}
              className="rounded-[40px] overflow-hidden bg-[var(--color-surface)] aspect-[4/5] relative w-full max-w-[500px] mx-auto lg:mx-0 shadow-2xl"
            >
              <img 
                src="/images/e.png" 
                alt="KIN Functional Mushroom Syrup" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* RIGHT: Kin Content & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-end w-full">
            
            {/* Kin Description */}
            <div className="flex justify-start lg:justify-end mb-12 lg:mb-32">
              <p className="max-w-[480px] text-[16px] md:text-[22px] leading-[1.6] text-[var(--color-text-muted)] font-normal text-left lg:text-right">
                <strong className="text-[var(--color-text)] font-semibold">A functional botanical elixir.</strong> 
                Mix 1 part KIN with 3 parts water, soda, or spirits. A versatile drink in itself, crafted for focus and a mindful lift.
              </p>
            </div>

            {/* Stats Grid (B2B Value Props) */}
            <div className="grid grid-cols-2 gap-2 w-full bg-[var(--color-surface)] border border-[var(--color-surface)] rounded-[36px] overflow-hidden">
              
              {/* Stat 01: Yield */}
              <div className="bg-[var(--color-bg)] p-6 md:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[260px] relative">
                <span className="text-[10px] font-bold text-[var(--color-text-muted)] absolute top-5 right-5 md:top-7 md:right-8 uppercase tracking-widest">Yield</span>
                <div>
                  <span className="text-[52px] md:text-[72px] font-semibold tracking-tighter leading-none text-[var(--color-primary)]">4x</span>
                </div>
                <p className="text-[13px] md:text-[14px] text-[var(--color-text-muted)] font-medium leading-tight mt-4 max-w-[160px]">
                  Servings per bottle vs. ready-to-drink alternatives.
                </p>
              </div>

              {/* Stat 02: Cost Savings */}
              <div className="bg-[var(--color-bg)] p-6 md:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[260px] relative">
                <span className="text-[10px] font-bold text-[var(--color-text-muted)] absolute top-5 right-5 md:top-7 md:right-8 uppercase tracking-widest">Savings</span>
                <div>
                  <span className="text-[52px] md:text-[72px] font-semibold tracking-tighter leading-none text-[var(--color-primary)] italic">65%</span>
                </div>
                <p className="text-[13px] md:text-[14px] text-[var(--color-text-muted)] font-medium leading-tight mt-4 max-w-[160px]">
                  Cheaper per serve. Higher margins for your business.
                </p>
              </div>

              {/* Stat 03: Storage */}
              <div className="bg-[var(--color-bg)] p-6 md:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[260px] relative">
                <span className="text-[10px] font-bold text-[var(--color-text-muted)] absolute top-5 right-5 md:top-7 md:right-8 uppercase tracking-widest">Storage</span>
                <div>
                  <span className="text-[52px] md:text-[72px] font-semibold tracking-tighter leading-none text-[var(--color-primary)]">75%</span>
                </div>
                <p className="text-[13px] md:text-[14px] text-[var(--color-text-muted)] font-medium leading-tight mt-4 max-w-[160px]">
                  Less fridge and warehouse space needed.
                </p>
              </div>

              {/* Stat 04: Dilution Ratio */}
              <div className="bg-[var(--color-bg)] p-6 md:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[260px] relative">
                <span className="text-[10px] font-bold text-[var(--color-text-muted)] absolute top-5 right-5 md:top-7 md:right-8 uppercase tracking-widest">Ratio</span>
                <div>
                  <span className="text-[52px] md:text-[72px] font-semibold tracking-tighter leading-none text-[var(--color-primary)]">1:3</span>
                </div>
                <p className="text-[13px] md:text-[14px] text-[var(--color-text-muted)] font-medium leading-tight mt-4 max-w-[160px]">
                  Recommended dilution. Adjustable to your venue's signature taste.
                </p>
              </div>

            </div>

            {/* Secondary CTA */}
            <div className="mt-12 flex justify-center">
              <Link to="/partner" className="inline-flex items-center gap-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-full font-body text-[12px] font-bold uppercase tracking-[0.3em] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-500">
                Partner With Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}