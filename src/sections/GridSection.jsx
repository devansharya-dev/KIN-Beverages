

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
    <section className="w-full bg-[#F2F3EC] py-24 md:py-48 px-6 md:px-12 lg:px-20 font-body overflow-hidden">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Space+Grotesk:wght@300;500;700&display=swap');
        .font-heading { font-family: 'Syne', sans-serif; }
        .font-body { font-family: 'Space Grotesk', sans-serif; }
        .text-outline-dark {
          -webkit-text-stroke: 1px rgba(12, 12, 12, 0.3);
          color: transparent;
        }
      `}</style>

      {/* --- HEADER --- */}
      <div className="max-w-[1800px] mx-auto mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="border-l-[1px] border-black/10 pl-6 md:pl-8">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.6em] text-black/30 block mb-6">Internal Profile</span>
          <h2 className="text-[10vw] md:text-[8vw] lg:text-[120px] font-extrabold tracking-[-0.07em] leading-[0.8] text-[#0C0C0C] lowercase font-heading">
            Molecular <br/> 
            <span className="text-outline-dark opacity-20">Composition.</span>
          </h2>
        </div>
        <div className="max-w-[300px] mb-4">
            <p className="text-[12px] md:text-[13px] leading-relaxed text-black/40 uppercase tracking-widest font-medium">
                A precise calibration of functional botanicals designed for high-frequency human performance.
            </p>
        </div>
      </div>

      {/* --- GRID: CLEAN SPEC CARDS --- */}
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
        {ingredients.map((item, idx) => (
          <div key={item.id} className={`flex flex-col ${idx === 1 ? 'lg:mt-32' : ''}`}>
            
            {/* 1. IMAGE POSTCARD (Subtle Scale Only) */}
            <div className="group relative w-full aspect-[4/5] overflow-hidden rounded-[24px] md:rounded-[32px] bg-[#EBECE4]">
              {/* Top Bar Labels */}
              <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-10">
                <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/60 font-body">ID // {item.id}</span>
                    <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/40 font-body">Verified Organic</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-[#ccff00] transition-colors duration-500"></div>
              </div>

              {/* Main Image */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />

              {/* Bottom Tag */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/90 font-body">
                  {item.tag}
                </p>
              </div>
            </div>

            {/* 2. SPEC-SHEET TYPOGRAPHY (Now Stable/No-Hover) */}
            <div className="mt-10 px-2">
              <div className="flex items-start justify-between mb-8">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.4em] mb-2 font-body">Spec. No {item.id}</span>
                  <h3 className="text-[54px] lg:text-[74px] font-extrabold tracking-[-0.06em] leading-[0.8] text-[#0C0C0C] font-heading lowercase">
                    {item.name}
                  </h3>
                </div>
                <div className="text-2xl font-light text-black/10">+</div>
              </div>
              
              <div className="relative pt-8 border-t border-black/[0.06]">
                  <p className="text-[15px] md:text-[17px] leading-[1.6] text-black/60 font-medium max-w-[90%] font-body">
                    <span className="text-black/90 font-bold uppercase text-[9px] tracking-widest block mb-3">Functional Log —</span>
                    {item.desc}
                  </p>
                  {/* Subtle Accent Line */}
                  <div className="absolute top-0 left-0 w-12 h-[2px] bg-black/10" />
              </div>

              {/* Bottom Detail (Visible by default for cleaner flow) */}
              <div className="mt-6 flex items-center gap-3">
                  <div className="w-1 h-1 bg-black/20 rounded-full" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/30 font-body">Molecular Integrity Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[1800px] mx-auto mt-40 pt-10 border-t border-black/5">
         <p className="text-[10px] tracking-[1em] uppercase text-black/20 text-center font-body">
            Kin Rituals // Pure Botanical Alchemy
         </p>
      </div>

    </section>
  );
}