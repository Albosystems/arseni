import React from 'react';
import { proofStackData } from '../../data/mock';

const ProofStackSection = () => {
  return (
    <section className="relative py-16 lg:py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {proofStackData.stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="p-6 lg:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-[#00c6ff]/30 transition-all duration-500">
                {/* Value */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#00c6ff] to-[#e8a032] bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                
                {/* Label */}
                <div className="text-white font-semibold text-sm lg:text-base mb-1">
                  {stat.label}
                </div>
                
                {/* Suffix */}
                <div className="text-zinc-500 text-xs lg:text-sm">
                  {stat.suffix}
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#00c6ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          ))}
        </div>

        {/* Social Proof Ticker */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-zinc-500 text-sm mb-4">Vertraut von</p>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
            {proofStackData.socialProof.map((item, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm font-medium"
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
