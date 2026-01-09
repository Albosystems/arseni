import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { heroData, siteConfig } from '../../data/mock';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-20 lg:py-32 overflow-hidden">
      {/* Background with Arseni image */}
      <div className="absolute inset-0">
        {/* Dark base */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Arseni image - positioned right side on desktop */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3">
          <img 
            src="https://cdn.prod.website-files.com/68e7b10b3976a460110ac4d3/690455a8688373aa683065fa_HJPG8201_Original.webp"
            alt="Arseni"
            className="w-full h-full object-cover object-center opacity-50 lg:opacity-60"
          />
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Pulse animation styles */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 198, 255, 0.4), 0 0 40px rgba(0, 198, 255, 0.2);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 198, 255, 0.6), 0 0 60px rgba(0, 198, 255, 0.3);
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
          <Button 
            asChild
            className="bg-[#00c6ff] hover:bg-[#00b4e6] text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <a href={siteConfig.stripeCheckoutUrl} target="_blank" rel="noopener noreferrer">
              Jetzt starten
            </a>
          </Button>
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto lg:mx-0 lg:ml-[10%] mt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#00c6ff] animate-pulse" />
          <span className="text-sm text-zinc-400 font-medium">{heroData.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          <span className="text-white">{heroData.headline}</span>
        </h1>
        
        {/* Subheadline with gradient */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          <span className="bg-gradient-to-r from-[#00c6ff] to-[#e8a032] bg-clip-text text-transparent">
            {heroData.subheadline}
          </span>
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed">
          {heroData.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
          <Button 
            asChild
            size="lg"
            className="pulse-button w-full sm:w-auto bg-[#00c6ff] hover:bg-[#00b4e6] text-black font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
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

        {/* Feature Pills */}
        <div className="flex flex-wrap items-start gap-4 sm:gap-6">
          {heroData.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-zinc-300">
              <div className="w-5 h-5 rounded-full bg-[#e8a032]/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#e8a032]" />
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
