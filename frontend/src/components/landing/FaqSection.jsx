import React from 'react';
import { ChevronDown, Shield, Check } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Button } from '../ui/button';
import { faqData, guaranteeData, siteConfig } from '../../data/mock';

const FaqSection = () => {
  return (
    <section className="relative py-20 lg:py-32 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Deine <span className="bg-gradient-to-r from-[#00c6ff] to-[#e8a032] bg-clip-text text-transparent">Einwände</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Ich kenne sie alle. Hier sind die Antworten.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="border border-zinc-800/50 rounded-2xl bg-zinc-900/30 px-6 overflow-hidden data-[state=open]:border-[#00c6ff]/30 transition-colors"
            >
              <AccordionTrigger className="py-5 hover:no-underline text-left">
                <span className="text-white font-semibold pr-4">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-zinc-400 leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-6">
            Noch unsicher? Dann bist du wahrscheinlich noch nicht bereit. Kein Problem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#00c6ff] hover:bg-[#00b4e6] text-black font-bold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,198,255,0.3)]"
            >
              <a href={siteConfig.stripeCheckoutUrl} target="_blank" rel="noopener noreferrer">
                Ich bin bereit – 297€/Monat
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-zinc-700 text-white hover:bg-white/5 px-8 py-6 rounded-xl"
            >
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                Erst mal Instagram checken
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
