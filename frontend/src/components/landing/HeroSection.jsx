import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { heroData, siteConfig } from '../../data/mock';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-20 lg:py-32 overflow-hidden">
      {/* Background with new Arseni image - NO grid overlay */}
      <div className="absolute inset-0">
        {/* Dark base */}
        <div className="absolute inset-0 bg-[#121212]" />
        
        {/* New Arseni image - positioned right side on desktop */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3">
          <img 
            src="https://storage.googleapis.com/msgsndr/lSRBjSsWvvTEe9W0zWpI/media/695d8f92d5b4836e15d374ce.jpeg"
            alt="Arseni"
            className="w-full h-full object-cover object-center opacity-50 lg:opacity-60"
          />
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/40" />
        </div>
      </div>

      {/* Pulse animation styles */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(79, 195, 247, 0.4), 0 0 40px rgba(79, 195, 247, 0.2);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(79, 195, 247, 0.6), 0 0 60px rgba(79, 195, 247, 0.3);
            transform: scale(1.02);
          }
        }
        .pulse-button {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <img 
            src={siteConfig.logo} 
            alt="Primezeit" 
            className="h-10 lg:h-12 w-auto brightness-0 invert"
          />
          <div className="flex items-center gap-4">
            <a 
              href="/kontakt"
              className="hidden sm:inline-flex text-zinc-300 hover:text-white text-sm font-medium transition-colors"
            >
              Kontakt
            </a>
            <Button 
              asChild
              className="bg-[#4FC3F7] hover:bg-[#3AAFDF] text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <a href={siteConfig.stripeCheckoutUrl} target="_blank" rel="noopener noreferrer">
                Jetzt starten
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto lg:mx-0 lg:ml-[10%] mt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#4FC3F7] animate-pulse" />
          <span className="text-sm text-zinc-400 font-medium">{heroData.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          <span className="text-white">{heroData.headline}</span>
        </h1>
        
        {/* Subheadline with gradient */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          <span className="bg-gradient-to-r from-[#4FC3F7] to-[#FFD700] bg-clip-text text-transparent">
            {heroData.subheadline}
          </span>
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed">
          {heroData.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
          <Button 
            asChild
            size="lg"
            className="pulse-button w-full sm:w-auto bg-[#4FC3F7] hover:bg-[#3AAFDF] text-black font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <a href={siteConfig.stripeCheckoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {heroData.ctaText}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-zinc-700 text-white hover:bg-white/5 font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300"
            onClick={() => document.getElementById('for-whom')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {heroData.secondaryCta}
          </Button>
        </div>

        {/* Feature Pills - CENTERED */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {heroData.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-zinc-300">
              <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#FFD700]" />
              </div>
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
