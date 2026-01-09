import React from 'react';
import { marqueeData } from '../../data/mock';

const MarqueeSection = () => {
  return (
    <section className="py-8 bg-black overflow-hidden border-y border-zinc-900 flex flex-col gap-4">
      {/* Custom styles for faster mobile animation */}
      <style>{`
        @media (max-width: 768px) {
          .marquee-row-1 {
            animation-duration: 15s !important;
          }
          .marquee-row-2 {
            animation-duration: 18s !important;
          }
          .marquee-row-3 {
            animation-duration: 16s !important;
          }
        }
      `}</style>

      {/* Row 1 - Left direction */}
      <div className="flex w-full relative">
        <div className="marquee-row-1 flex animate-marquee min-w-full gap-4 px-2" style={{ animationDuration: '30s' }}>
          {[...marqueeData.row1, ...marqueeData.row1].map((text, i) => (
            <div 
              key={`r1-${i}`} 
              className="flex-shrink-0 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800 text-xs md:text-sm text-zinc-300 font-medium whitespace-nowrap hover:border-[#00c6ff]/50 hover:text-white transition-colors cursor-default"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right direction */}
      <div className="flex w-full relative">
        <div className="marquee-row-2 flex animate-marquee-reverse min-w-full gap-4 px-2" style={{ animationDuration: '35s' }}>
          {[...marqueeData.row2, ...marqueeData.row2].map((text, i) => (
            <div 
              key={`r2-${i}`} 
              className="flex-shrink-0 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800 text-xs md:text-sm text-zinc-300 font-medium whitespace-nowrap hover:border-[#00c6ff]/50 hover:text-white transition-colors cursor-default"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
      
      {/* Row 3 - Left direction */}
      <div className="flex w-full relative">
        <div className="marquee-row-3 flex animate-marquee min-w-full gap-4 px-2" style={{ animationDuration: '32s' }}>
          {[...marqueeData.row3, ...marqueeData.row3].map((text, i) => (
            <div 
              key={`r3-${i}`} 
              className="flex-shrink-0 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800 text-xs md:text-sm text-zinc-300 font-medium whitespace-nowrap hover:border-[#00c6ff]/50 hover:text-white transition-colors cursor-default"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
