import React, { useState } from 'react';
import { ChevronDown, Quote, Star } from 'lucide-react';
import { testimonialsData } from '../../data/mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Testimonials with images for the swiper
  const visualTestimonials = testimonialsData.filter(t => t.imageBefore && t.imageAfter);
  // Text-only testimonials for accordion
  const textTestimonials = testimonialsData.filter(t => !t.imageBefore || !t.imageAfter);

  return (
    <section className="relative py-20 lg:py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00c6ff] text-sm font-medium uppercase tracking-wider mb-4">
            Echte Transformationen
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Echte Männer. <span className="bg-gradient-to-r from-[#00c6ff] to-[#e8a032] bg-clip-text text-transparent">Echte Resultate.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Keine Versprechen – nur Ergebnisse. Sieh selbst, was möglich ist.
          </p>
        </div>

        {/* Visual Testimonials - Swiper/Cards */}
        {visualTestimonials.length > 0 && (
          <div className="mb-16">
            {/* Main Featured Testimonial */}
            <div className="relative rounded-3xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Images Side */}
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <div className="absolute inset-0 grid grid-cols-2 gap-1 p-1">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={visualTestimonials[activeTestimonial].imageBefore}
                        alt="Vorher"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-black/70 text-xs font-medium text-zinc-300">
                        Vorher
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={visualTestimonials[activeTestimonial].imageAfter}
                        alt="Nachher"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-[#00c6ff]/90 text-xs font-medium text-black">
                        Nachher
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#e8a032] text-[#e8a032]" />
                    ))}
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    "{visualTestimonials[activeTestimonial].headline}"
                  </h3>

                  {/* Quote */}
                  <p className="text-zinc-300 text-lg leading-relaxed mb-6 italic">
                    "{visualTestimonials[activeTestimonial].quote}"
                  </p>

                  {/* Results Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {visualTestimonials[activeTestimonial].results.map((result, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-[#00c6ff]/10 text-[#00c6ff] text-sm font-medium"
                      >
                        {result}
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="mt-auto pt-6 border-t border-zinc-800">
                    <p className="font-semibold text-white">{visualTestimonials[activeTestimonial].name}</p>
                    <p className="text-zinc-500 text-sm">{visualTestimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation Dots */}
            {visualTestimonials.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                {visualTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'w-8 bg-[#00c6ff]' 
                        : 'bg-zinc-700 hover:bg-zinc-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Text Testimonials - Accordion */}
        {textTestimonials.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Mehr Erfolgsgeschichten</h3>
            <Accordion type="single" collapsible className="space-y-3">
              {textTestimonials.map((testimonial, index) => (
                <AccordionItem 
                  key={testimonial.id} 
                  value={`item-${testimonial.id}`}
                  className="border border-zinc-800/50 rounded-2xl bg-zinc-900/30 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="py-5 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00c6ff]/20 to-[#e8a032]/20 flex items-center justify-center flex-shrink-0">
                        <Quote className="w-5 h-5 text-[#00c6ff]" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-zinc-500 text-sm">{testimonial.headline}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-16">
                      <p className="text-zinc-300 leading-relaxed mb-4">
                        {testimonial.fullStory}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {testimonial.results.map((result, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 rounded-full bg-[#00c6ff]/10 text-[#00c6ff] text-sm font-medium"
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* Scrolling Testimonial Snippets */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-4 animate-marquee">
            {[
              "15 Kilo runter, Zigarette weg – und Muay-Thai-Kampf gewonnen.",
              "Ich kann endlich wieder durchschlafen. Mehr Energie am Morgen.",
              "Testosteronwert +40% – ohne Chemie, nur durch System.",
              "Mehr Fokus, mehr Energie – schon nach wenigen Wochen.",
              "Das erste Coaching, das nicht nur was verspricht – sondern wirklich wirkt.",
            ].map((text, index) => (
              <div 
                key={index}
                className="flex-shrink-0 px-6 py-3 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-zinc-400 text-sm whitespace-nowrap"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
