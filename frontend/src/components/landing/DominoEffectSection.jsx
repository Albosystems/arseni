import React, { useState } from 'react';
import { ArrowRight, Check, X, Zap } from 'lucide-react';
import { dominoEffectData } from '../../data/mock';

const DominoEffectSection = () => {
  const [activeMode, setActiveMode] = useState('primezeit'); // 'average' or 'primezeit'

  const currentData = activeMode === 'average' ? dominoEffectData.average : dominoEffectData.primezeit;
  const isAverage = activeMode === 'average';

  return (
    <section className="relative py-16 lg:py-24 px-6 bg-[#121212] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] transition-colors duration-700 ${
          isAverage ? 'bg-red-500/10' : 'bg-[#4FC3F7]/10'
        }`} />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            {dominoEffectData.title}
          </h2>
          <p className="text-zinc-400">
            {dominoEffectData.subtitle}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveMode('average')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isAverage 
                ? 'bg-red-500/20 text-red-400 border-2 border-red-500/50' 
                : 'bg-zinc-900/50 text-zinc-500 border-2 border-zinc-800 hover:border-zinc-700'
            }`}
          >
            {dominoEffectData.average.label}
          </button>
          <button
            onClick={() => setActiveMode('primezeit')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              !isAverage 
                ? 'bg-[#4FC3F7]/20 text-[#4FC3F7] border-2 border-[#4FC3F7]/50' 
                : 'bg-zinc-900/50 text-zinc-500 border-2 border-zinc-800 hover:border-zinc-700'
            }`}
          >
            {dominoEffectData.primezeit.label}
          </button>
        </div>

        {/* Domino Visual */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-1 -translate-y-1/2">
            <div className={`h-full rounded-full transition-all duration-700 ${
              isAverage 
                ? 'bg-gradient-to-r from-red-500/50 via-red-400/30 to-red-500/50' 
                : 'bg-gradient-to-r from-[#4FC3F7]/50 via-[#FFD700]/30 to-[#4FC3F7]/50'
            }`} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ArrowRight className={`w-8 h-8 transition-colors duration-700 ${
                isAverage ? 'text-red-500' : 'text-[#4FC3F7]'
              }`} />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* BASIS - Left Column */}
            <div className="text-center lg:text-left">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                {dominoEffectData.basis.title}
              </h4>
              <div className="space-y-3">
                {dominoEffectData.basis.items.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border transition-all duration-500 transform ${
                      isAverage 
                        ? 'bg-red-500/10 border-red-500/30 rotate-[-2deg] translate-x-1' 
                        : 'bg-[#4FC3F7]/10 border-[#4FC3F7]/30'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      transform: isAverage ? `rotate(${-2 - index}deg) translateX(${index * 2}px)` : 'rotate(0) translateX(0)'
                    }}
                  >
                    <span className={`font-semibold transition-colors duration-500 ${
                      isAverage ? 'text-red-400' : 'text-[#4FC3F7]'
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* EFFECTS - Middle Column */}
            <div className="lg:col-span-1">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4 text-center">
                Die Kettenreaktion
              </h4>
              <div className="space-y-3">
                {currentData.effects.map((effect, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border transition-all duration-500 ${
                      isAverage 
                        ? 'bg-zinc-900/80 border-red-500/20' 
                        : 'bg-zinc-900/80 border-[#4FC3F7]/20'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isAverage ? 'bg-red-500/20' : 'bg-[#4FC3F7]/20'
                      }`}>
                        {isAverage ? (
                          <X className="w-4 h-4 text-red-400" />
                        ) : (
                          <Check className="w-4 h-4 text-[#4FC3F7]" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-500">{effect.cause}</p>
                        <p className={`text-sm font-medium ${
                          isAverage ? 'text-red-400' : 'text-[#FFD700]'
                        }`}>
                          → {effect.result}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RESULT - Right Column */}
            <div className="text-center lg:text-right">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                {dominoEffectData.result.title}
              </h4>
              <div className="space-y-3">
                {dominoEffectData.result.items.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border transition-all duration-500 ${
                      isAverage 
                        ? 'bg-zinc-900/50 border-zinc-800 opacity-50' 
                        : 'bg-[#FFD700]/10 border-[#FFD700]/30'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    <span className={`font-semibold transition-colors duration-500 ${
                      isAverage ? 'text-zinc-600' : 'text-[#FFD700]'
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outcome Banner */}
          <div className={`mt-8 p-6 rounded-2xl text-center transition-all duration-700 ${
            isAverage 
              ? 'bg-red-500/10 border border-red-500/30' 
              : 'bg-gradient-to-r from-[#4FC3F7]/10 via-[#FFD700]/10 to-[#4FC3F7]/10 border border-[#4FC3F7]/30'
          }`}>
            <div className="flex items-center justify-center gap-3">
              {isAverage ? (
                <X className="w-6 h-6 text-red-400" />
              ) : (
                <Zap className="w-6 h-6 text-[#FFD700]" />
              )}
              <span className={`text-lg font-bold ${
                isAverage ? 'text-red-400' : 'text-white'
              }`}>
                {currentData.outcome}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DominoEffectSection;
