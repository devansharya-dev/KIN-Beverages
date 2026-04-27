import useParallax from '../hooks/useParallax';

export default function KinProductSection() {
  const { ref: imgRef, y: imgY, scale: imgScale } = useParallax({ speed: 0.1, scale: 0.02 });

  return (
    <section id="about" className="bg-[var(--color-bg)] py-24 md:py-40 px-6 md:px-12 lg:px-20 font-['Inter'] antialiased overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- TOP ROW: Eyebrow + Main Heading --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-32 md:mb-48">
          
          {/* Eyebrow */}
          <div className="lg:col-span-3 pt-4">
            <div className="flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[var(--color-text)] uppercase tracking-widest">
              <span className="w-[18px] h-[18px] bg-[var(--color-primary)] text-[var(--color-surface)] rounded-full flex items-center justify-center text-[14px] leading-none pb-[1px]">
                +
              </span>
              The New Ritual
            </div>
          </div>
          
          {/* Kin Brand Heading */}
          <div className="lg:col-span-9">
            <h2 className="text-[44px] md:text-[72px] lg:text-[92px] font-semibold tracking-[-0.05em] leading-[1] text-[var(--color-text)] max-w-[1100px]">
              All bliss, no booze. <br className="hidden md:block" />
              <span className="text-[var(--color-text-muted)]">Experience the lift without <br className="hidden md:block" /> the morning letdown.</span>
            </h2>
          </div>
        </div>

        {/* --- BOTTOM ROW: Image + Content/Stats --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
          
          {/* LEFT: Drink Bottle Image (Parallax) */}
          <div className="lg:col-span-5 relative" ref={imgRef}>
            <div 
              style={{ transform: `translateY(${imgY}px) scale(${imgScale})` }}
              className="rounded-[40px] overflow-hidden bg-[var(--color-surface)] aspect-[4/5] relative w-full max-w-[500px] mx-auto lg:mx-0 shadow-2xl transition-transform duration-300"
            >
              <span className="absolute top-8 right-8 w-10 h-10 bg-[var(--color-bg)]/90 backdrop-blur text-[var(--color-text)] rounded-full flex items-center justify-center font-light text-2xl z-10 cursor-pointer shadow-lg">
                +
              </span>
              {/* Kin Bottle Image Placeholder */}
              <img 
                src="/images/e.png" 
                alt="Kin Euphorics Bottle" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Kin Content & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-end w-full">
            
            {/* Kin Description (Right Aligned) */}
            <div className="flex justify-end mb-20 lg:mb-32">
              <p className="max-w-[480px] text-[18px] md:text-[22px] leading-[1.6] text-[var(--color-text-muted)] font-normal text-right">
                <strong className="text-[var(--color-text)] font-semibold">Brain care is self care.</strong> 
                Kin is a non-alcoholic functional beverage made with adaptogens and nootropics to help you unlock a higher state of mind.
              </p>
            </div>

            {/* Stats Grid (The "Alcohol-Free" Specs) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full bg-[var(--color-surface)] border border-[var(--color-surface)] rounded-[36px] overflow-hidden">
              
              {/* Stat 01: Alcohol Content */}
              <div className="bg-[var(--color-bg)] p-8 md:p-14 flex flex-col justify-between min-h-[280px] relative">
                <span className="text-[11px] font-bold text-[var(--color-text-muted)] absolute top-6 right-6 md:top-8 md:right-10 uppercase tracking-widest">01 / Pure</span>
                <div>
                  <span className="text-[64px] md:text-[80px] font-semibold tracking-tighter leading-none text-[var(--color-primary)] italic">0%</span>
                </div>
                <div className="flex justify-end mt-8">
                  <p className="text-[14px] md:text-base text-[var(--color-text-muted)] font-medium leading-tight text-right max-w-[150px]">
                    Alcohol by volume. Just pure botanical chemistry.
                  </p>
                </div>
              </div>

              {/* Stat 02: Ingredients */}
              <div className="bg-[var(--color-bg)] p-8 md:p-14 flex flex-col justify-between min-h-[280px] relative">
                <span className="text-[11px] font-bold text-[var(--color-text-muted)] absolute top-6 right-6 md:top-8 md:right-10 uppercase tracking-widest">02 / Power</span>
                <div>
                  <span className="text-[64px] md:text-[80px] font-semibold tracking-tighter leading-none text-[var(--color-primary)]">12+</span>
                </div>
                <div className="flex justify-end mt-8">
                  <p className="text-[14px] md:text-base text-[var(--color-text-muted)] font-medium leading-tight text-right max-w-[150px]">
                    Active botanicals for mood and focus.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}