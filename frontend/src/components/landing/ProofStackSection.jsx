import React from 'react';
import { proofStackData } from '../../data/mock';

const ProofStackSection = () => {
  return (
    <section className="relative py-12 lg:py-16 px-6 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Stats Grid - Compact Micro-Proof */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {proofStackData.stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group text-center"
            >
              <div className="p-4 lg:p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-[#00c6ff]/30 transition-all duration-300">
                {/* Value + Label inline */}
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00c6ff] to-[#e8a032] bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-lg sm:text-xl font-semibold text-white">
                    {stat.label}
                  </span>
                </div>
                
                {/* Suffix/Description */}
                <div className="text-zinc-500 text-xs lg:text-sm">
                  {stat.suffix}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Tags */}
        <div className="mt-8 text-center">
          <p className="text-zinc-600 text-xs uppercase tracking-wider mb-3">Vertraut von</p>
          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3">
            {proofStackData.socialProof.map((item, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofStackSection;
