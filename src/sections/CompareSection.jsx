import { Link } from 'react-router-dom';

const compareData = [
  { feature: 'Cost per Serve', kin: '₹15–20', rtd: '₹80–120', mixer: '₹30–50' },
  { feature: 'Servings per Unit', kin: '16+ serves', rtd: '1 serve', mixer: '8–10 serves' },
  { feature: 'Storage Footprint', kin: 'Minimal (1 bottle)', rtd: 'Heavy (16 cans)', mixer: 'Moderate' },
  { feature: 'Prep Time', kin: '~10 seconds', rtd: 'Ready', mixer: '30–60 seconds' },
  { feature: 'Customization', kin: 'Full (ratio adjustable)', rtd: 'None', mixer: 'Limited' },
  { feature: 'Functional Botanicals', kin: '✓ Shiitake, Ginger, Lemon', rtd: '✗', mixer: '✗' },
  { feature: 'Shelf Life', kin: '45 days', rtd: '6–12 months', mixer: 'Varies' },
];

export default function CompareSection() {
  return (
    <section className="w-full bg-[var(--color-bg)] py-16 md:py-40 px-6 md:px-12 lg:px-20 font-body overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.6em] text-black/30 block mb-6">The Comparison</span>
          <h2 className="font-heading text-[32px] md:text-[64px] lg:text-[80px] font-extrabold tracking-[-0.06em] lowercase">
            Why KIN <span className="text-outline-dark">wins.</span>
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-[24px] border border-black/5">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-black/5">
                <th className="text-left p-5 md:p-8 text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 w-[30%]">Feature</th>
                <th className="text-left p-5 md:p-8 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-primary)] bg-[var(--color-primary)]/[0.04] w-[25%]">KIN Syrup</th>
                <th className="text-left p-5 md:p-8 text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 w-[25%]">Ready-to-Drink</th>
                <th className="text-left p-5 md:p-8 text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 w-[20%]">Traditional Mixer</th>
              </tr>
            </thead>
            <tbody>
              {compareData.map((row, idx) => (
                <tr key={row.feature} className={`border-b border-black/[0.04] ${idx % 2 === 0 ? 'bg-transparent' : 'bg-black/[0.01]'}`}>
                  <td className="p-5 md:p-8 text-[13px] md:text-[15px] font-semibold text-black/70">{row.feature}</td>
                  <td className="p-5 md:p-8 text-[13px] md:text-[15px] font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/[0.04] whitespace-nowrap">{row.kin}</td>
                  <td className="p-5 md:p-8 text-[13px] md:text-[15px] text-black/40 whitespace-nowrap">{row.rtd}</td>
                  <td className="p-5 md:p-8 text-[13px] md:text-[15px] text-black/40 whitespace-nowrap">{row.mixer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-12 bg-[var(--color-surface)] rounded-[24px]">
          <div>
            <p className="text-[16px] md:text-[20px] font-semibold text-black/80">Ready to see the difference?</p>
            <p className="text-[13px] md:text-[15px] text-black/40 mt-1">Request a sample and run the numbers for your venue.</p>
          </div>
          <Link 
            to="/partner" 
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-body text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[var(--color-primary)] transition-colors duration-500 shrink-0"
          >
            Request Samples
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
