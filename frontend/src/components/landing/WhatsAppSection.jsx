import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { siteConfig } from '../../data/mock';

const WhatsAppSection = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section className="relative py-12 lg:py-16 px-6 bg-black border-y border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900/50 border border-zinc-800 p-6 lg:p-8">
          {/* Green accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Content */}
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="hidden sm:flex w-14 h-14 rounded-xl bg-[#25D366]/10 items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7 text-[#25D366]" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                  Noch unsicher? Frag mich direkt.
                </h3>
                <p className="text-zinc-400 text-sm lg:text-base">
                  Kein Verkaufsgespräch. Nur ehrliche Antworten auf deine Fragen.
                </p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button 
              asChild
              size="lg"
              className="w-full lg:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] flex-shrink-0"
            >
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp schreiben</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="relative flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 pt-6 border-t border-zinc-800">
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Antwortet meistens innerhalb von 2h</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-zinc-800" />
            <div className="text-zinc-500 text-sm">
              Keine Chatbots, nur Arseni persönlich
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
