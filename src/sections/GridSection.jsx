import { useState } from 'react';

const ingredients = [
  {
    id: "01",
    name: 'Shiitake',
    tag: 'Nootropic Fuel',
    desc: 'Enhances cognitive function and sharpens mental clarity for sustained high-frequency focus.',
    image: '/images/image1.jpg',
  },
  {
    id: "02",
    name: 'Lemon',
    tag: 'Zest & Vitality',
    desc: 'Natural electrolytes and vitamin C to brighten the palate and awaken the senses.',
    image: '/images/f.png',
  },
  {
    id: "03",
    name: 'Ginger',
    tag: 'Metabolic Heat',
    desc: 'Botanical spice that aids digestion and provides a grounding, warming energy flow.',
    image: '/images/image2.jpg',
  }
];

export default function IngredientsSection() {
  return (
    <section className="w-full bg-[#F2F3EC] py-32 md:py-48 px-6 md:px-12 lg:px-20 font-body">
      
      {/* --- EXTERNAL FONTS --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');
        
        .font-heading { font-family: 'Syne', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        
        .text-outline-dark {
          -webkit-text-stroke: 1px rgba(12, 12, 12, 0.3);
          color: transparent;
        }
      `}</style>

      {/* --- HEADER: MOLECULAR COMPOSITION --- */}
      <div className="max-w-[1800px] mx-auto mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="border-l-[1px] border-black/10 pl-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-black/30 block mb-6">Internal Profile</span>
          <h2 className="text-[12vw] md:text-[8vw] font-extrabold tracking-[-0.07em] leading-[0.8] text-[#0C0C0C] lowercase font-heading">
            Molecular <br/> 
            <span className="text-outline-dark opacity-20">Composition.</span>
          </h2>
        </div>
        
        <div className="max-w-[300px] mb-4">
            <p className="text-[13px] leading-relaxed text-black/40 uppercase tracking-widest font-medium">
                A precise calibration of functional botanicals designed for high-frequency human performance.
            </p>
        </div>
      </div>

      {/* --- GRID: PREMIUM SPEC CARDS --- */}
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
        {ingredients.map((item, idx) => (
          <div 
            key={item.id} 
            className={`group relative flex flex-col ${idx === 1 ? 'lg:mt-32' : ''}`}
          >
            {/* 1. IMAGE POSTCARD WRAPPER */}
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[24px] md:rounded-[32px] bg-[#EBECE4] transition-all duration-700 ease-in-out group-hover:shadow-[0_60px_100px_-30px_rgba(0,0,0,0.12)]">
              
              {/* Top Bar Labels */}
              <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-10">
                <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/60 font-body">ID // {item.id}</span>
                    <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/40 font-body">Verified Organic</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-[#ccff00] group-hover:scale-150 transition-all duration-500"></div>
              </div>

              {/* Main Image */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.05] group-hover:scale-110"
              />

              {/* Bottom Tag Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/90 font-body">
                  {item.tag}
                </p>
              </div>
            </div>

            {/* 2. SPEC-SHEET TYPOGRAPHY CONTENT */}
            <div className="mt-12 px-2">
              
              {/* Ingredient Name with Numbering */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.4em] mb-2 font-body">Spec. No {item.id}</span>
                  <h3 className="text-[54px] md:text-[74px] font-extrabold tracking-[-0.06em] leading-[0.8] text-[#0C0C0C] font-heading lowercase group-hover:italic transition-all duration-700">
                    {item.name}
                  </h3>
                </div>
                {/* Minimalist icon */}
                <div className="text-2xl font-light text-black/10 group-hover:text-black group-hover:rotate-90 transition-all duration-700">+</div>
              </div>
              
              {/* Redesigned Description Block */}
              <div className="relative pt-8 border-t border-black/[0.06]">
                  <p className="text-[15px] md:text-[17px] leading-[1.6] text-black/60 font-medium max-w-[90%] font-body">
                    <span className="text-black/90 font-bold uppercase text-[9px] tracking-widest block mb-3">Functional Log —</span>
                    {item.desc}
                  </p>
                  
                  {/* Animated line that fills on hover */}
                  <div className="absolute top-0 left-0 w-12 h-[2px] bg-black/10 group-hover:w-full group-hover:bg-black transition-all duration-1000" />
              </div>

              {/* Bottom Micro-Detail */}
              <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-1 h-1 bg-black rounded-full" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/30 font-body">Molecular Integrity Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- FOOTER ACCENT --- */}
      <div className="max-w-[1800px] mx-auto mt-40 pt-10 border-t border-black/5">
         <p className="text-[10px] tracking-[1em] uppercase text-black/20 text-center font-body">
            Kin Rituals // Pure Botanical Alchemy
         </p>
      </div>

    </section>
  );
}