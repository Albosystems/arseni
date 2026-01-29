import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { siteConfig, whatsAppSectionData } from '../../data/mock';

const WhatsAppSection = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section className="py-16 px-6 bg-[#121212]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 border border-zinc-800/50">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            {whatsAppSectionData.headline}
          </h3>
          <p className="text-zinc-400 mb-6">
            {whatsAppSectionData.subheadline}
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              {whatsAppSectionData.buttonText}
            </a>
          </Button>
          
          <p className="text-zinc-500 text-sm mt-4">
            {whatsAppSectionData.bottomText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
