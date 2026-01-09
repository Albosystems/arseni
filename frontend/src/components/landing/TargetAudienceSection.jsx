import React from 'react';
import { Check, X } from 'lucide-react';
import { targetAudienceData } from '../../data/mock';

const TargetAudienceSection = () => {
  return (
    <section id="for-whom" className="relative py-20 lg:py-32 px-6 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {targetAudienceData.sectionHeadline.split(' ').map((word, i) => 
              word === 'wieder?' ? (
                <span key={i} className="bg-gradient-to-r from-[#4FC3F7] to-[#FFD700] bg-clip-text text-transparent">{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {targetAudienceData.sectionSubheadline}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* For You */}
          <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 border border-zinc-800/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#4FC3F7]/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-[#4FC3F7]" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                {targetAudienceData.forYou.title}
              </h3>
            </div>
            
            <ul className="space-y-6">
              {targetAudienceData.forYou.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4FC3F7]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 text-[#4FC3F7]" />
                  </div>
                  <span className="text-zinc-300 leading-relaxed text-sm lg:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <X className="w-5 h-5 text-zinc-500" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-zinc-400">
                {targetAudienceData.notForYou.title}
              </h3>
            </div>
            
            <ul className="space-y-6">
              {targetAudienceData.notForYou.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-zinc-800/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-3 h-3 text-zinc-600" />
                  </div>
                  <span className="text-zinc-500 leading-relaxed text-sm lg:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
