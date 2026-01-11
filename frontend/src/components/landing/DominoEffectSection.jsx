import React, { useState, useEffect } from 'react';
import { Battery, Zap, Brain, Dumbbell, Wind, Thermometer, Apple, AlertTriangle, CheckCircle2, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/mock';

const DominoEffectSection = () => {
  // Ursachen-Werte (0-100)
  const [levers, setLevers] = useState({
    hormone: 85,
    stress: 20,
    ernaehrung: 85,
    training: 90
  });

  const [score, setScore] = useState(85);

  // Berechnung des Gesamtzustands bei jeder Änderung
  useEffect(() => {
    const avg = (levers.hormone + (100 - levers.stress) + levers.ernaehrung + levers.training) / 4;
    setScore(avg);
  }, [levers]);

  const handleLevelChange = (key, val) => {
    setLevers(prev => ({ ...prev, [key]: parseInt(val) }));
  };

  // Vordefinierte Zustände (Toggles)
  const setPrime = () => {
    setLevers({ hormone: 85, stress: 20, ernaehrung: 85, training: 90 });
  };

  const setAverage = () => {
    setLevers({ hormone: 40, stress: 75, ernaehrung: 45, training: 35 });
  };

  const isPrime = score > 65;

  // Status-Texte für jeden Slider
  const getHormoneStatus = (val) => {
    if (val < 40) return { text: "Antrieb und Energie sind flach, auch wenn du alles machst.", color: "text-red-400" };
    if (val < 70) return { text: "Es geht voran, aber dein System bremst noch.", color: "text-[#FFD700]" };
    return { text: "Stabiler Antrieb, bessere Regeneration und mehr Drive.", color: "text-[#4FC3F7]" };
  };

  const getStressStatus = (val) => {
    if (val < 40) return { text: "Dein Körper kann aufbauen und sich erholen.", color: "text-[#4FC3F7]" };
    if (val < 70) return { text: "Fortschritt wird zäh, weil Erholung gebremst ist.", color: "text-[#FFD700]" };
    return { text: "Cortisol dominiert – Testosteron sinkt.", color: "text-red-400" };
  };

  const getErnaehrungStatus = (val) => {
    if (val < 40) return { text: "Nährstoffmangel bremst Hormone und Regeneration.", color: "text-red-400" };
    if (val < 70) return { text: "Grundversorgung da, aber noch Luft nach oben.", color: "text-[#FFD700]" };
    return { text: "Optimale Versorgung für maximale Performance.", color: "text-[#4FC3F7]" };
  };

  const getTrainingStatus = (val) => {
    if (val < 40) return { text: "Zu wenig Reize – dein Körper baut ab statt auf.", color: "text-red-400" };
    if (val < 70) return { text: "Du trainierst, aber nicht optimal für dein Ziel.", color: "text-[#FFD700]" };
    return { text: "Intelligentes Training mit klarer Progression.", color: "text-[#4FC3F7]" };
  };

  return (
    <section className="relative py-16 lg:py-24 px-6 bg-[#121212] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] transition-all duration-1000 ${
          isPrime ? 'bg-[#4FC3F7]/10' : 'bg-red-500/10'
        }`} />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Performance beginnt bei der <span className="bg-gradient-to-r from-[#4FC3F7] to-[#FFD700] bg-clip-text text-transparent">Basis</span>
          </h2>
          <p className="text-zinc-400">
            Dreh an der Basis und sieh, wie sich das Ergebnis verändert.
          </p>
        </div>

        {/* Switchboard Card */}
        <div className="bg-zinc-950/80 p-6 sm:p-8 rounded-3xl border border-zinc-800/50 text-white max-w-4xl mx-auto shadow-2xl backdrop-blur-sm">
          
          {/* Globaler Toggle-Bereich */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <button 
              onClick={setAverage}
              className={`px-5 sm:px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
                !isPrime 
                  ? 'bg-red-500/20 border-red-500/50 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]' 
                  : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
              }`}
            >
              Durchschnitt
            </button>
            <button 
              onClick={setPrime}
              className={`px-5 sm:px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
                isPrime 
                  ? 'bg-[#4FC3F7]/20 border-[#4FC3F7]/50 text-[#4FC3F7] shadow-[0_0_20px_rgba(79,195,247,0.2)]' 
                  : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
              }`}
            >
              Primezeit
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* LINKS: Die Steuerhebel (Ursache) */}
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-[#4FC3F7] uppercase tracking-wider">Die Basis</h3>
                <span className="flex items-center gap-1.5 text-[10px] bg-[#4FC3F7]/10 text-[#4FC3F7] px-2.5 py-1.5 rounded border border-[#4FC3F7]/20 whitespace-nowrap">
                  <SlidersHorizontal className="w-3 h-3" />
                  Regler bewegen
                </span>
              </div>
              
              <div className="space-y-4">
                {/* Hormonbalance - FIRST */}
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <Thermometer className="w-4 h-4 text-pink-400" /> 
                      Hormonbalance
                    </span>
                    <span className={`font-mono text-sm font-bold transition-colors ${
                      levers.hormone > 70 ? 'text-[#4FC3F7]' : levers.hormone > 40 ? 'text-[#FFD700]' : 'text-red-400'
                    }`}>
                      {levers.hormone}%
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="100" 
                    value={levers.hormone}
                    onChange={(e) => handleLevelChange('hormone', e.target.value)}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #FFD700 0%, #FFD700 ${levers.hormone}%, #27272a ${levers.hormone}%, #27272a 100%)`
                    }}
                  />
                  <p className={`text-xs transition-colors ${getHormoneStatus(levers.hormone).color}`}>
                    {getHormoneStatus(levers.hormone).text}
                  </p>
                </div>

                {/* Stress */}
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <Wind className="w-4 h-4 text-orange-400" /> 
                      Stress-Level
                    </span>
                    <span className={`font-mono text-sm font-bold transition-colors ${
                      levers.stress < 40 ? 'text-[#4FC3F7]' : levers.stress < 70 ? 'text-[#FFD700]' : 'text-red-400'
                    }`}>
                      {levers.stress}%
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="100" 
                    value={levers.stress}
                    onChange={(e) => handleLevelChange('stress', e.target.value)}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${levers.stress}%, #27272a ${levers.stress}%, #27272a 100%)`
                    }}
                  />
                  <p className={`text-xs transition-colors ${getStressStatus(levers.stress).color}`}>
                    {getStressStatus(levers.stress).text}
                  </p>
                </div>

                {/* Ernährung - NEW */}
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <Apple className="w-4 h-4 text-green-400" /> 
                      Ernährung
                    </span>
                    <span className={`font-mono text-sm font-bold transition-colors ${
                      levers.ernaehrung > 70 ? 'text-[#4FC3F7]' : levers.ernaehrung > 40 ? 'text-[#FFD700]' : 'text-red-400'
                    }`}>
                      {levers.ernaehrung}%
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="100" 
                    value={levers.ernaehrung}
                    onChange={(e) => handleLevelChange('ernaehrung', e.target.value)}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #22c55e 0%, #22c55e ${levers.ernaehrung}%, #27272a ${levers.ernaehrung}%, #27272a 100%)`
                    }}
                  />
                  <p className={`text-xs transition-colors ${getErnaehrungStatus(levers.ernaehrung).color}`}>
                    {getErnaehrungStatus(levers.ernaehrung).text}
                  </p>
                </div>

                {/* Training - NEW */}
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <Dumbbell className="w-4 h-4 text-blue-400" /> 
                      Training
                    </span>
                    <span className={`font-mono text-sm font-bold transition-colors ${
                      levers.training > 70 ? 'text-[#4FC3F7]' : levers.training > 40 ? 'text-[#FFD700]' : 'text-red-400'
                    }`}>
                      {levers.training}%
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="100" 
                    value={levers.training}
                    onChange={(e) => handleLevelChange('training', e.target.value)}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${levers.training}%, #27272a ${levers.training}%, #27272a 100%)`
                    }}
                  />
                  <p className={`text-xs transition-colors ${getTrainingStatus(levers.training).color}`}>
                    {getTrainingStatus(levers.training).text}
                  </p>
                </div>
              </div>
            </div>

            {/* RECHTS: Das Ergebnis-Panel (Folge) */}
            <div className="bg-zinc-900/30 p-5 sm:p-6 rounded-2xl border border-zinc-800/50 space-y-6 relative overflow-hidden">
              {/* Hintergrund-Animation für Prime-Status */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${isPrime ? 'opacity-20' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-[#4FC3F7] blur-[80px] animate-pulse" />
              </div>

              <h3 className="text-lg font-bold text-[#FFD700] uppercase tracking-wider relative z-10">Das Ergebnis</h3>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
                {[
                  { label: "Energie", val: Math.min(score * 1.1, 100), icon: <Battery className="w-5 h-5" />, color: "bg-[#4FC3F7]" },
                  { label: "Fokus", val: Math.min((levers.ernaehrung * 0.5 + (100-levers.stress) * 0.5), 100), icon: <Brain className="w-5 h-5" />, color: "bg-indigo-500" },
                  { label: "Korper", val: Math.min((levers.hormone * 0.4 + levers.training * 0.4 + levers.ernaehrung * 0.2), 100), icon: <Dumbbell className="w-5 h-5" />, color: "bg-orange-500" },
                  { label: "Drive", val: Math.min(score, 100), icon: <Zap className="w-5 h-5" />, color: "bg-[#FFD700]" }
                ].map(res => (
                  <div key={res.label} className="p-4 bg-zinc-950/80 rounded-xl border border-zinc-800/50 text-center">
                    <div className={`flex justify-center mb-2 transition-colors duration-500 ${res.val > 60 ? 'text-white' : 'text-zinc-600'}`}>
                      {res.icon}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">{res.label}</div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-700 ease-out rounded-full ${res.color}`}
                        style={{ width: `${Math.min(res.val, 100)}%` }}
                      />
                    </div>
                    <div className={`text-xs font-bold mt-2 transition-colors ${res.val > 60 ? 'text-white' : 'text-zinc-600'}`}>
                      {Math.round(res.val)}%
                    </div>
                  </div>
                ))}
              </div>

              {/* Zentrales Status-Icon */}
              <div className="flex flex-col items-center justify-center pt-4 relative z-10">
                <div className={`transition-all duration-500 transform ${isPrime ? 'scale-110 text-[#4FC3F7]' : 'scale-100 text-red-500'}`}>
                  {isPrime ? <CheckCircle2 size={48} /> : <AlertTriangle size={48} />}
                </div>
                <span className={`text-xs font-black mt-3 tracking-[0.1em] transition-colors ${isPrime ? 'text-[#4FC3F7]' : 'text-red-500'}`}>
                  {isPrime ? 'SYSTEM OPTIMIERT' : 'BASIS INSTABIL'}
                </span>
                <p className="text-zinc-500 text-xs mt-2 text-center max-w-xs">
                  {isPrime 
                    ? 'Deine Basis stimmt - Fortschritt ist unvermeidlich.' 
                    : 'Solange die Basis wackelt, bleibt Fortschritt unzuverlässig - egal wie "diszipliniert" du bist.'}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom-Bar */}
          <div className={`mt-8 p-4 rounded-xl text-center transition-all duration-500 ${
            isPrime 
              ? 'bg-[#4FC3F7]/10 border border-[#4FC3F7]/30' 
              : 'bg-red-500/10 border border-red-500/30'
          }`}>
            <p className={`text-sm font-medium ${isPrime ? 'text-[#4FC3F7]' : 'text-red-400'}`}>
              {isPrime 
                ? '→ Mit diesem Setup baust du auf - nicht ab.' 
                : '→ Wir stabilisieren zuerst die Basis - dann greifen Training und Ernährung.'}
            </p>
          </div>
        </div>
      </div>

      {/* Custom slider styles */}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid #4FC3F7;
          box-shadow: 0 0 10px rgba(79, 195, 247, 0.3);
          transition: all 0.2s;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(79, 195, 247, 0.5);
        }
        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid #4FC3F7;
          box-shadow: 0 0 10px rgba(79, 195, 247, 0.3);
        }
      `}</style>
    </section>
  );
};

export default DominoEffectSection;
