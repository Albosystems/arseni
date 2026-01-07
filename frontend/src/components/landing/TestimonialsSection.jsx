import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { testimonialsData } from '../../data/mock';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog';

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-20 lg:py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
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

        {/* Swipeable Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Desktop */}
          <button 
            onClick={scrollPrev}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 items-center justify-center text-white hover:bg-zinc-800 hover:border-[#00c6ff]/50 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 items-center justify-center text-white hover:bg-zinc-800 hover:border-[#00c6ff]/50 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {testimonialsData.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_85%] lg:flex-[0_0_80%] px-2 md:px-4"
                >
                  <div 
                    className={`rounded-3xl overflow-hidden bg-zinc-900/50 border transition-all duration-300 cursor-pointer ${
                      index === selectedIndex 
                        ? 'border-[#00c6ff]/30 scale-100' 
                        : 'border-zinc-800/50 scale-95 opacity-60'
                    }`}
                    onClick={() => setSelectedTestimonial(testimonial)}
                  >
                    {/* Card Content */}
                    {testimonial.imageBefore && testimonial.imageAfter ? (
                      /* Visual Testimonial with Images */
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Images Side */}
                        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
                          <div className="absolute inset-0 grid grid-cols-2 gap-1 p-2">
                            <div className="relative overflow-hidden rounded-xl">
                              <img 
                                src={testimonial.imageBefore}
                                alt="Vorher"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-black/70 text-xs font-medium text-zinc-300">
                                Vorher
                              </div>
                            </div>
                            <div className="relative overflow-hidden rounded-xl">
                              <img 
                                src={testimonial.imageAfter}
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
                        <div className="p-6 lg:p-8 flex flex-col justify-center">
                          {/* Stars */}
                          <div className="flex items-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-[#e8a032] text-[#e8a032]" />
                            ))}
                          </div>

                          {/* Headline */}
                          <h3 className="text-lg lg:text-xl font-bold text-white mb-3">
                            "{testimonial.headline}"
                          </h3>

                          {/* Quote */}
                          <p className="text-zinc-300 leading-relaxed mb-4 italic line-clamp-3">
                            "{testimonial.quote}"
                          </p>

                          {/* Results Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {testimonial.results.slice(0, 3).map((result, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 rounded-full bg-[#00c6ff]/10 text-[#00c6ff] text-xs font-medium"
                              >
                                {result}
                              </span>
                            ))}
                          </div>

                          {/* Author + Read More */}
                          <div className="mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-white">{testimonial.name}</p>
                              <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                            </div>
                            <span className="text-[#00c6ff] text-sm font-medium hover:underline">
                              Mehr lesen →
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Text-only Testimonial */
                      <div className="p-6 lg:p-8">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00c6ff]/20 to-[#e8a032]/20 flex items-center justify-center flex-shrink-0">
                            <Quote className="w-5 h-5 text-[#00c6ff]" />
                          </div>
                          <div className="flex-1">
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-[#e8a032] text-[#e8a032]" />
                              ))}
                            </div>
                            
                            <h3 className="text-lg font-bold text-white mb-2">
                              "{testimonial.headline}"
                            </h3>
                            <p className="text-zinc-300 leading-relaxed mb-4 line-clamp-3">
                              {testimonial.fullStory}
                            </p>
                            
                            {/* Results */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {testimonial.results.map((result, idx) => (
                                <span 
                                  key={idx}
                                  className="px-2 py-1 rounded-full bg-[#00c6ff]/10 text-[#00c6ff] text-xs font-medium"
                                >
                                  {result}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                              <div>
                                <p className="font-semibold text-white">{testimonial.name}</p>
                                <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                              </div>
                              <span className="text-[#00c6ff] text-sm font-medium hover:underline">
                                Mehr lesen →
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'w-8 bg-[#00c6ff]' 
                    : 'w-2 bg-zinc-700 hover:bg-zinc-600'
                }`}
              />
            ))}
          </div>

          {/* Swipe Hint - Mobile */}
          <p className="text-center text-zinc-500 text-sm mt-4 lg:hidden">
            ← Wische für mehr →
          </p>
        </div>
      </div>

      {/* Full Story Dialog */}
      <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedTestimonial && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00c6ff]/20 to-[#e8a032]/20 flex items-center justify-center">
                    <Quote className="w-4 h-4 text-[#00c6ff]" />
                  </div>
                  {selectedTestimonial.name}
                </DialogTitle>
                <DialogDescription className="text-zinc-400">
                  {selectedTestimonial.role}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                {/* Images if available */}
                {selectedTestimonial.imageBefore && selectedTestimonial.imageAfter && (
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                      <img 
                        src={selectedTestimonial.imageBefore}
                        alt="Vorher"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-black/70 text-xs font-medium">
                        Vorher
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                      <img 
                        src={selectedTestimonial.imageAfter}
                        alt="Nachher"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-[#00c6ff]/90 text-xs font-medium text-black">
                        Nachher
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Headline */}
                <h3 className="text-lg font-semibold text-[#00c6ff] mb-4">
                  "{selectedTestimonial.headline}"
                </h3>
                
                {/* Full Story */}
                <p className="text-zinc-300 leading-relaxed mb-6">
                  {selectedTestimonial.fullStory}
                </p>
                
                {/* Quote */}
                <blockquote className="border-l-2 border-[#e8a032] pl-4 py-2 mb-6 italic text-zinc-400">
                  "{selectedTestimonial.quote}"
                </blockquote>
                
                {/* Results */}
                <div>
                  <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Ergebnisse</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedTestimonial.results.map((result, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-[#00c6ff]/10 text-[#00c6ff] text-sm font-medium"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialsSection;
