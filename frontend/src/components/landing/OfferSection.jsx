import React from 'react';
import { Check, ArrowRight, Shield, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { offerData, guaranteeData, siteConfig } from '../../data/mock';

const OfferSection = () => {
  return (
    <section className="relative py-20 lg:py-32 px-6 bg-black">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00c6ff]/5 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00c6ff] text-sm font-medium uppercase tracking-wider mb-4">
            Das Angebot
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {offerData.title}
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {offerData.subtitle}
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Border gradient effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00c6ff]/20 via-transparent to-[#e8a032]/20 p-px">
            <div className="w-full h-full rounded-3xl bg-zinc-950" />
          </div>

          <div className="relative p-8 lg:p-12">
            {/* Price Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8a032]/10 text-[#e8a032] text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Gesamtwert: {offerData.originalValue}€ / Monat</span>
              </div>

              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl lg:text-6xl font-bold text-white">
                  {offerData.price}
                </span>
                <span className="text-2xl text-white">{offerData.currency}</span>
                <span className="text-xl text-zinc-500">{offerData.period}</span>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                {offerData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-zinc-400">
                    <Check className="w-4 h-4 text-[#00c6ff]" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two Column Features */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-10">
              {/* Core Features */}
              <div>
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                  Im Coaching enthalten
                </h4>
                <ul className="space-y-3">
                  {offerData.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-between gap-4 py-2 border-b border-zinc-800/50">
                      <div className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-[#00c6ff] flex-shrink-0" />
                        <span className="text-white">{feature.name}</span>
                      </div>
                      <span className="text-zinc-500 text-sm">{feature.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonuses */}
              <div>
                <h4 className="text-sm font-semibold text-[#e8a032] uppercase tracking-wider mb-4">
                  Bonus – Gratis dazu
                </h4>
                <ul className="space-y-3">
                  {offerData.bonuses.map((bonus, index) => (
                    <li key={index} className="flex items-center justify-between gap-4 py-2 border-b border-zinc-800/50">
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-4 h-4 text-[#e8a032] flex-shrink-0" />
                        <span className="text-white">{bonus.name}</span>
                      </div>
                      <span className="text-zinc-500 text-sm line-through">{bonus.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#00c6ff] hover:bg-[#00b4e6] text-black font-bold text-lg px-12 py-7 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,198,255,0.4)]"
              >
                <a href={siteConfig.stripeCheckoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Jetzt Coaching starten
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <p className="mt-4 text-zinc-500 text-sm">
                Nur 10 Plätze pro Monat – jederzeit kündbar
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-12 p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-[#e8a032]/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-[#e8a032]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {guaranteeData.title}
              </h3>
              <p className="text-zinc-400 mb-4">
                {guaranteeData.description}
              </p>
              <ul className="space-y-2">
                {guaranteeData.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e8a032] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
