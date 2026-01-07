import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { heroData, siteConfig } from '../../data/mock';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-20 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

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
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
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
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {heroData.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[#00c6ff] hover:bg-[#00b4e6] text-black font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,198,255,0.3)]"
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
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
