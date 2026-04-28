import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import HeroSection from '../sections/HeroSection';
import ProductSection from '../sections/ProductSection';
import ParallaxSection from '../sections/ParallaxSection';
import CompareSection from '../sections/CompareSection';
import TestimonialSection from '../sections/TestimonialSection';
import HowItWorks from '../sections/HowItWorks';
import GridSection from '../sections/GridSection';
import CTASection from '../sections/CTASection';
import RecipeSection from '../sections/RecipeSection';
import BrochureSection from '../sections/BrochureSection';
import TrustBar from '../sections/TrustBar';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="page-root w-full overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Wrapper to scroll over the fixed HeroSection */}
      <div className="relative z-10 bg-[var(--color-bg)] w-full">
        <ProductSection />
        <TrustBar />
        <CompareSection />
        <HowItWorks />
        <ParallaxSection />
        <GridSection />
        <RecipeSection />
        <TestimonialSection />
        <BrochureSection />
        <CTASection />
        <WhatsAppButton />
        <Footer />
      </div>
    </div>
  );
}
