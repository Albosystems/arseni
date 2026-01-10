import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Button } from '../ui/button';
import { faqData, faqOutro, siteConfig } from '../../data/mock';

const FaqSection = () => {
  return (
    <section className="relative py-20 lg:py-32 px-6 bg-[#121212]">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Deine <span className="bg-gradient-to-r from-[#4FC3F7] to-[#FFD700] bg-clip-text text-transparent">Einwände</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Du hast Fragen – völlig normal. Hier sind klare Antworten, damit du weißt, worauf du dich einlässt.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="border border-zinc-800/50 rounded-2xl bg-zinc-900/30 px-6 overflow-hidden data-[state=open]:border-[#4FC3F7]/30 transition-colors"
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

        {/* Final CTA - nur ein Button, keine Instagram-Weiterleitung */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-6">
            {faqOutro.text}
          </p>
          <Button 
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[#4FC3F7] hover:bg-[#3AAFDF] text-black font-bold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,195,247,0.3)]"
          >
            <a href={siteConfig.stripeCheckoutUrl} target="_blank" rel="noopener noreferrer">
              {faqOutro.primaryCta}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
