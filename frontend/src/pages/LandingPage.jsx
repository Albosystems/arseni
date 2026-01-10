import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import DominoEffectSection from '../components/landing/DominoEffectSection';
import TargetAudienceSection from '../components/landing/TargetAudienceSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import ProblemMechanismSection from '../components/landing/ProblemMechanismSection';
import OfferSection from '../components/landing/OfferSection';
import ProcessSection from '../components/landing/ProcessSection';
import CoachSection from '../components/landing/CoachSection';
import MarqueeSection from '../components/landing/MarqueeSection';
import WhatsAppSection from '../components/landing/WhatsAppSection';
import FaqSection from '../components/landing/FaqSection';
import Footer from '../components/landing/Footer';
import StickyCta from '../components/landing/StickyCta';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* 1. Hero + CTA */}
      <HeroSection />
      
      {/* 2. Switchboard - Vergleich Durchschnitt vs. Primezeit */}
      <DominoEffectSection />
      
      {/* 3. Für wen ist es? / Für wen nicht? */}
      <TargetAudienceSection />
      
      {/* 4. Case Studies / Testimonials */}
      <TestimonialsSection />
      
      {/* 5. Problem → Mechanismus */}
      <ProblemMechanismSection />
      
      {/* 6. Was du bekommst (Offer) */}
      <OfferSection />
      
      {/* 7. So läuft es ab */}
      <ProcessSection />
      
      {/* Marquee Proof Section - direkt über Coach */}
      <MarqueeSection />
      
      {/* 8. Über den Coach */}
      <CoachSection />
      
      {/* Mini section: WhatsApp Contact */}
      <WhatsAppSection />
      
      {/* 9. FAQ + Garantie */}
      <FaqSection />
      
      <Footer />
      <StickyCta />
    </div>
  );
};

export default LandingPage;
