import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { siteConfig, stickyCtaData } from '../../data/mock';

const StickyCta = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      const scrolled = window.scrollY > 500;
      setIsVisible(scrolled);
      
      // Hide when near footer (last 300px of page)
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const nearBottom = window.scrollY + clientHeight > scrollHeight - 300;
      setIsAtBottom(nearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isAtBottom) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent pointer-events-none">
      <div className="max-w-lg mx-auto pointer-events-auto">
        <div className="bg-zinc-900/90 backdrop-blur-lg border border-zinc-800 rounded-2xl p-4 shadow-2xl shadow-black/50">
          <div className="flex items-center justify-between gap-4">
            {/* Price info */}
            <div className="flex-1 min-w-0">
              <p className="text-xs text-zinc-500 mb-1">{stickyCtaData.tagline}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-white">{stickyCtaData.price}€</span>
                <span className="text-sm text-zinc-500">{stickyCtaData.period}</span>
                <span className="text-xs text-zinc-600 hidden sm:inline">{stickyCtaData.suffix}</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button 
              asChild
              className="bg-[#4FC3F7] hover:bg-[#3AAFDF] text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(79,195,247,0.3)] flex-shrink-0"
            >
              <a href={siteConfig.stripeCheckoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span>{stickyCtaData.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCta;
