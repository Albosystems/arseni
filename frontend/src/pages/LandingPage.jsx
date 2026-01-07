import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import ProofStackSection from '../components/landing/ProofStackSection';
import TargetAudienceSection from '../components/landing/TargetAudienceSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import ProblemMechanismSection from '../components/landing/ProblemMechanismSection';
import ProcessSection from '../components/landing/ProcessSection';
import OfferSection from '../components/landing/OfferSection';
import CoachSection from '../components/landing/CoachSection';
import FaqSection from '../components/landing/FaqSection';
import Footer from '../components/landing/Footer';
import MarqueeSection from '../components/landing/MarqueeSection';
import StickyCta from '../components/landing/StickyCta';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ProofStackSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <MarqueeSection />
      <ProblemMechanismSection />
      <ProcessSection />
      <OfferSection />
      <CoachSection />
      <FaqSection />
      <Footer />
      <StickyCta />
    </div>
  );
};

export default LandingPage;
