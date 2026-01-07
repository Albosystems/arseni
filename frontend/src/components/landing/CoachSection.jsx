import React from 'react';
import { Award, Dumbbell, Brain, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { coachData, siteConfig } from '../../data/mock';

const CoachSection = () => {
  const credentialIcons = [Award, Brain, Dumbbell, Trophy, Trophy, Dumbbell];

  return (
    <section className="relative py-20 lg:py-32 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#e8a032] text-sm font-medium uppercase tracking-wider mb-4">
            Dein Coach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {coachData.name}
          </h2>
          <p className="text-zinc-400 text-lg mt-2">
            {coachData.title}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
              <img 
                src={coachData.image}
                alt={coachData.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Tagline overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xl lg:text-2xl font-bold text-white">
                  {coachData.tagline}
                </p>
              </div>
            </div>

            {/* Small image gallery */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {coachData.images.map((img, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 border-zinc-800 hover:border-[#00c6ff]/50 transition-colors cursor-pointer"
                >
                  <img 
                    src={img}
                    alt={`${coachData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div>
            {/* Bio */}
            <div className="mb-8">
              <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                {coachData.bio}
              </p>
              <p className="text-white font-medium italic text-lg">
                "{coachData.approach}"
              </p>
            </div>

            {/* Credentials */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                Qualifikationen
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {coachData.credentials.map((credential, index) => {
                  const Icon = credentialIcons[index % credentialIcons.length];
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#00c6ff]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#00c6ff]" />
                      </div>
                      <span className="text-zinc-300 text-sm leading-tight">
                        {credential}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <Button 
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#00c6ff] hover:bg-[#00b4e6] text-black font-bold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <a href={siteConfig.stripeCheckoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Mit Arseni arbeiten
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
