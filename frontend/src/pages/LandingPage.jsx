import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import TargetAudienceSection from '../components/landing/TargetAudienceSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import MarqueeSection from '../components/landing/MarqueeSection';
import ProblemMechanismSection from '../components/landing/ProblemMechanismSection';
import OfferSection from '../components/landing/OfferSection';
import ProcessSection from '../components/landing/ProcessSection';
import CoachSection from '../components/landing/CoachSection';
import WhatsAppSection from '../components/landing/WhatsAppSection';
import FaqSection from '../components/landing/FaqSection';
import Footer from '../components/landing/Footer';
import StickyCta from '../components/landing/StickyCta';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 1. Hero + CTA */}
      <HeroSection />
      
      {/* 2. Für wen ist es? / Für wen nicht? */}
      <TargetAudienceSection />
      
      {/* 3. Case Studies / Testimonials */}
      <TestimonialsSection />
      {/* Mini section: Marquee Proof-Chips */}
      <MarqueeSection />
      
      {/* 4. Problem → Mechanismus */}
      <ProblemMechanismSection />
      
      {/* 5. Was du bekommst (Offer) */}
      <OfferSection />
      
      {/* 6. So läuft es ab */}
      <ProcessSection />
      
      {/* 7. Über den Coach */}
      <CoachSection />
      
      {/* Mini section: WhatsApp Contact */}
      <WhatsAppSection />
      
      {/* 8. FAQ + Garantie */}
      <FaqSection />
      
      <Footer />
      <StickyCta />
    </div>
  );
};

export default LandingPage;
