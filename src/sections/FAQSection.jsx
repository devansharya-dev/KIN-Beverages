import { useState } from 'react';

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "We start with a sample kit of 2 bottles for you to test with your team. After that, our minimum order is just 6 bottles — designed to be low-risk for pilot programs."
  },
  {
    q: "What is the shelf life of KIN Syrup?",
    a: "Unopened, KIN lasts 45 days at room temperature. Once opened, refrigerate and use within 30 days for optimal freshness. The concentrated format means less waste compared to RTD alternatives."
  },
  {
    q: "Do you deliver outside of Delhi/NCR?",
    a: "We currently deliver across major metros in India — Delhi, Mumbai, Bangalore, and Hyderabad. We're expanding rapidly. Reach out and we'll confirm availability for your city."
  },
  {
    q: "What if my bartenders don't know how to use it?",
    a: "We provide a complete onboarding kit — recipe cards, a mixing guide, and video tutorials. We can also arrange a virtual training session for your bar team at no extra cost."
  },
  {
    q: "Can I customize the dilution ratio for my venue?",
    a: "Absolutely. The 1:3 ratio is our recommendation, but many of our partners adjust it to suit their signature drinks. Stronger for cocktails, lighter for mocktails — it's designed to be flexible."
  },
  {
    q: "Is KIN certified? Do you have FSSAI approval?",
    a: "FSSAI certification is currently in progress. KIN is made with 100% natural ingredients — Shiitake, Ginger, Lemon, and other functional botanicals — with no artificial additives or preservatives."
  },
  {
    q: "What makes KIN different from regular syrups?",
    a: "KIN is not a flavoring syrup — it's a functional botanical elixir. Each ingredient is chosen for its functional properties: Shiitake for cognitive support, Ginger for digestive warmth, and Lemon for vitality. It's a drink in itself, not just an ingredient."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 px-6 md:px-20 max-w-[900px] mx-auto">
      <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-black/30 block mb-6">Common Questions</span>
      <h2 className="font-heading text-[28px] md:text-[48px] font-extrabold tracking-[-0.04em] leading-none lowercase mb-12">
        Frequently asked<br />
        <span className="text-outline-dark">questions.</span>
      </h2>

      <div className="flex flex-col">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-black/[0.06]">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
            >
              <span className="text-[15px] md:text-[18px] font-semibold text-black/80 pr-8 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {faq.q}
              </span>
              <span className={`shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'rotate-45 bg-black text-white border-black' : 'text-black/30'}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </span>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] ${openIndex === idx ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-[14px] md:text-[16px] leading-[1.7] text-black/50 font-medium max-w-[700px]">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
