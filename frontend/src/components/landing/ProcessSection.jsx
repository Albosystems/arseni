import React from 'react';
import { ClipboardCheck, Rocket, HeartHandshake, GraduationCap, ArrowRight } from 'lucide-react';
import { processData, siteConfig } from '../../data/mock';
import { Button } from '../ui/button';

const ProcessSection = () => {
  const icons = [ClipboardCheck, Rocket, HeartHandshake, GraduationCap];

  return (
    <section className="relative py-20 lg:py-32 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[#FFD700] text-sm font-medium uppercase tracking-wider mb-4">
            {processData.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {processData.title}
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {processData.subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {processData.steps.map((step, index) => {
              const Icon = icons[index];
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`relative lg:flex lg:items-center lg:gap-8 ${
                    index !== processData.steps.length - 1 ? 'lg:mb-16' : ''
                  }`}
                >
                  {/* Desktop Layout */}
                  <div className={`hidden lg:flex lg:w-1/2 ${
                    isEven ? 'lg:justify-end lg:pr-12' : 'lg:order-2 lg:pl-12'
                  }`}>
                    <div className={`max-w-md p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-[#4FC3F7]/20 transition-all duration-500 ${
                      isEven ? 'text-right' : 'text-left'
                    }`}>
                      {/* Phase Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-medium mb-4 ${
                        isEven ? 'flex-row-reverse' : ''
                      }`}>
                        <span>{step.phase}</span>
                        <span className="text-[#FFD700]/50">|</span>
                        <span className="text-zinc-500">{step.duration}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon - Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-700 items-center justify-center z-10">
                    <Icon className="w-7 h-7 text-[#4FC3F7]" />
                  </div>

                  {/* Spacer - Desktop */}
                  <div className={`hidden lg:block lg:w-1/2 ${
                    isEven ? 'lg:order-2' : ''
                  }`} />

                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#4FC3F7]" />
                        </div>
                        {index !== processData.steps.length - 1 && (
                          <div className="w-px h-full bg-zinc-800 mt-4" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        {/* Phase Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-medium mb-3">
                          <span>{step.phase}</span>
                          <span className="text-[#FFD700]/50">|</span>
                          <span className="text-zinc-500">{step.duration}</span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-sm mb-4">{processData.footerText}</p>
          <Button 
            asChild
            variant="outline"
            className="border-zinc-700 text-white hover:bg-white/5 px-6 py-3 rounded-xl"
          >
            <a href={siteConfig.stripeCheckoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Jetzt starten
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
