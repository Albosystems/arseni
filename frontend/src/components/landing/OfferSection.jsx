import React, { useState } from 'react';
import { Check, ArrowRight, Shield, Sparkles, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { offerData, guaranteeData, siteConfig, availableSpotsData } from '../../data/mock';

const OfferSection = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [expandedBonus, setExpandedBonus] = useState(null);

  return (
    <section className="relative py-20 lg:py-32 px-6 bg-black">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00c6ff]/5 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00c6ff]/10 text-[#00c6ff] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>{offerData.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {offerData.title}
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {offerData.subtitle}
          </p>
        </div>

        {/* Trust Badges Top */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {offerData.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2 text-zinc-400">
              <Check className="w-4 h-4 text-[#00c6ff]" />
              <span className="text-sm">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Main Offer Card */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Border gradient effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00c6ff]/20 via-transparent to-[#e8a032]/20 p-px">
            <div className="w-full h-full rounded-3xl bg-zinc-950" />
          </div>

          <div className="relative p-8 lg:p-12">
            {/* Core Features */}
            <div className="mb-12">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
                Im Coaching enthalten
              </h4>
              <div className="space-y-3">
                {offerData.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="border border-zinc-800/50 rounded-2xl bg-zinc-900/30 overflow-hidden transition-all duration-300 hover:border-[#00c6ff]/20"
                  >
                    <button
                      onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-4 text-left"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 rounded-lg bg-[#00c6ff]/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-[#00c6ff]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-white font-medium">{feature.name}</span>
                          {feature.subtitle && (
                            <span className="text-zinc-500 text-sm ml-2 hidden sm:inline">– {feature.subtitle}</span>
                          )}
                          {/* Mobile: Always show price */}
                          <div className="sm:hidden mt-1">
                            <span className="text-[#00c6ff] text-sm font-medium">{feature.value}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {/* Desktop: Show price */}
                        <span className="text-zinc-500 text-sm hidden sm:block">{feature.value}</span>
                        {expandedFeature === index ? (
                          <ChevronUp className="w-5 h-5 text-zinc-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-zinc-500" />
                        )}
                      </div>
                    </button>
                    {expandedFeature === index && (
                      <div className="px-4 pb-4 pt-0">
                        <div className="pl-11">
                          <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bonuses */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <h4 className="text-sm font-semibold text-[#e8a032] uppercase tracking-wider">
                  Bonus – Gratis dazu
                </h4>
                <span className="px-2 py-1 rounded-full bg-[#e8a032]/10 text-[#e8a032] text-xs font-medium">
                  Exklusiv
                </span>
              </div>
              <p className="text-zinc-400 text-sm mb-6">
                Alles, was du brauchst, ist bereits im System. Diese Extras bekommst du on top, damit du nicht nur startest, sondern direkt maximale Ergebnisse bekommst.
              </p>
              <div className="space-y-3">
                {offerData.bonuses.map((bonus, index) => (
                  <div 
                    key={index}
                    className="border border-zinc-800/50 rounded-2xl bg-zinc-900/30 overflow-hidden transition-all duration-300 hover:border-[#e8a032]/20"
                  >
                    <button
                      onClick={() => setExpandedBonus(expandedBonus === index ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-4 text-left"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 rounded-lg bg-[#e8a032]/10 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-[#e8a032]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-white font-medium">{bonus.name}</span>
                          {/* Mobile: Always show price */}
                          <div className="sm:hidden mt-1">
                            <span className="text-[#e8a032] text-sm font-medium line-through">{bonus.value}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {/* Desktop: Show price */}
                        <span className="text-zinc-500 text-sm line-through hidden sm:block">{bonus.value}</span>
                        {expandedBonus === index ? (
                          <ChevronUp className="w-5 h-5 text-zinc-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-zinc-500" />
                        )}
                      </div>
                    </button>
                    {expandedBonus === index && (
                      <div className="px-4 pb-4 pt-0">
                        <div className="pl-11">
                          <p className="text-zinc-400 text-sm leading-relaxed">{bonus.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-zinc-500 text-sm mt-4 text-center">
                Gesamtwert der Boni: <span className="text-[#e8a032]">{offerData.bonusTotal}</span> – {offerData.bonusNote}
              </p>
            </div>

            {/* Price Section - Updated with strikethrough */}
            <div className="text-center py-8 border-t border-b border-zinc-800/50 mb-8">
              <div className="flex flex-col items-center gap-3 mb-4">
                <span className="text-lg text-zinc-500">Dein Preis:</span>
                <div className="flex items-center gap-4">
                  {/* Original price - crossed out in red */}
                  <span className="text-2xl lg:text-3xl font-bold text-red-500 line-through decoration-2">
                    {offerData.originalValue}€
                  </span>
                  {/* Actual price */}
                  <span className="text-5xl lg:text-6xl font-bold text-white">
                    {offerData.price}€
                  </span>
                </div>
                <span className="text-xl text-zinc-500">{offerData.period}</span>
              </div>

              <p className="text-[#00c6ff] font-medium mb-6">
                Das sind {offerData.savings}€ Ersparnis pro Monat.
              </p>

              {/* Scarcity - More prominent */}
              <div className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-[#e8a032]/10 border border-[#e8a032]/30">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#e8a032]" />
                  <span className="text-[#e8a032] font-bold text-lg">
                    Nur 10 Plätze pro Monat – jederzeit kündbar
                  </span>
                </div>
                <span className="text-zinc-400 text-sm">
                  Aktuell verfügbar: <span className="text-white font-semibold">{availableSpotsData.current}/{availableSpotsData.total} Plätze</span>
                </span>
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
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-12 p-8 lg:p-10 rounded-3xl bg-zinc-900/30 border border-zinc-800/50">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-[#e8a032]/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-[#e8a032]" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                {guaranteeData.title}
              </h3>
              <p className="text-zinc-400 mb-6">
                {guaranteeData.subtitle}
              </p>
              <ul className="space-y-4">
                {guaranteeData.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e8a032] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm leading-relaxed">{point}</span>
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
