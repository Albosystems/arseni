import React from 'react';
import { X, Check, Zap } from 'lucide-react';
import { problemMechanismData } from '../../data/mock';

const ProblemMechanismSection = () => {
  return (
    <section className="relative py-20 lg:py-32 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Warum <span className="text-zinc-500">08/15</span> scheitert
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Und was das Primezeit-System anders macht.
          </p>
        </div>

        {/* Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Side */}
          <div className="relative">
            <div className="sticky top-8">
              {/* Problem Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <p className="text-red-400/80 text-sm font-medium uppercase tracking-wider">
                    Das Problem
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    {problemMechanismData.problem.subtitle}
                  </h3>
                </div>
              </div>

              {/* Problem Points */}
              <div className="space-y-4">
                {problemMechanismData.problem.points.map((point, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-red-500/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{point.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="relative">
            <div className="sticky top-8">
              {/* Solution Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#00c6ff]/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#00c6ff]" />
                </div>
                <div>
                  <p className="text-[#00c6ff]/80 text-sm font-medium uppercase tracking-wider">
                    Die Lösung
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    {problemMechanismData.solution.subtitle}
                  </h3>
                </div>
              </div>

              {/* Solution Points */}
              <div className="space-y-4">
                {problemMechanismData.solution.points.map((point, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-2xl bg-gradient-to-r from-zinc-900/80 to-zinc-900/40 border border-zinc-800/50 hover:border-[#00c6ff]/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#00c6ff]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00c6ff]/20 transition-colors">
                        <Check className="w-4 h-4 text-[#00c6ff]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{point.title}</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider with arrow */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
          <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center my-4">
            <Zap className="w-5 h-5 text-[#e8a032]" />
          </div>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ProblemMechanismSection;
