
export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F2F3EC] py-16 px-6 md:px-16 border-t border-black/10 overflow-hidden font-body" id="contact">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Space+Grotesk:wght@300;500;700&display=swap');
        .font-heading { font-family: 'Syne', sans-serif; }
        .font-body { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <div className="max-w-[1800px] mx-auto">
        
        {/* --- CLEAN CONTACT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20">
          
          {/* Left: Branding (Capital K) */}
          <div className="lg:col-span-6">
            <h2 className="font-heading text-[12vw] lg:text-[120px] leading-[0.8] tracking-[-0.06em] text-[#0C0C0C]">
              Kin<span className="opacity-10 italic">.</span>
            </h2>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.6em] text-black/20 max-w-[280px]">
              Molecular Synergy / 2026
            </p>
          </div>

          {/* Right: Contact Info with Icons */}
          <div className="lg:col-span-6 flex flex-col md:flex-row justify-between gap-12">
            
            {/* Direct Connect */}
            <div className="flex flex-col gap-6">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30">Connect</p>
              <div className="flex flex-col gap-4">
                <a href="mailto:kin.beverages@gmail.com" className="flex items-center gap-3 text-[18px] md:text-[22px] font-bold tracking-tight text-black hover:opacity-40 transition-opacity lowercase">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  kin.beverages@gmail.com
                </a>
                <a href="tel:+919412047564" className="flex items-center gap-3 text-[18px] md:text-[22px] font-bold tracking-tight text-black hover:opacity-40 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 9412 04 7564
                </a>
              </div>
            </div>

            {/* Social (No Hover Italic) */}
            <div className="flex flex-col gap-6">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30">Social</p>
              <a 
                href="https://www.instagram.com/kin_beverages/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[18px] md:text-[22px] font-bold tracking-tight text-black hover:opacity-40 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* --- MINIMAL SIGNATURE BAR --- */}
        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-3">
             <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/20 font-body">Architecture by</span>
             <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black border-b border-black/20 pb-0.5 font-body">Devansh Arya</span>
          </div>

          <div className="flex items-center gap-8 opacity-20 font-body">
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">© 2026 Kin Rituals</span>
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
               <span className="text-[9px] font-black uppercase tracking-[0.4em]">System Synced</span>
            </div>
          </div>

        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute -bottom-10 -right-10 font-heading text-[25vw] text-black/[0.01] pointer-events-none select-none uppercase">
        Kin
      </div>
    </footer>
  );
}