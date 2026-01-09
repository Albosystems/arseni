import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { siteConfig } from '../../data/mock';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="py-6 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Zuruck</span>
          </Link>
          <img 
            src={siteConfig.logo}
            alt="Primezeit"
            className="h-8 w-auto brightness-0 invert opacity-70"
          />
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-[#FFD700]" />
            <h1 className="text-3xl sm:text-4xl font-bold">Haftungsausschluss</h1>
          </div>
          <p className="text-zinc-400 mb-8">(Medical & Performance Disclaimer) fur das Primezeit System Coaching - Arseni Lasnov</p>
          
          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">1. Informationszweck & Kein medizinischer Ersatz</h2>
              <p className="text-zinc-300 leading-relaxed">
                Alle Inhalte und Empfehlungen im Rahmen des Coachings dienen ausschliesslich Informations- und Bildungszwecken.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Sie stellen <strong>keine medizinische Beratung, Diagnose oder Therapie</strong> dar und ersetzen keinen Arztbesuch, keine psychotherapeutische Behandlung und keine sonstige Heilbehandlung.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Teilnehmer werden ausdrucklich aufgefordert, bei gesundheitlichen Fragen, Symptomen oder Vorerkrankungen einen Arzt oder qualifiziertes medizinisches Fachpersonal zu konsultieren.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">2. Eigenverantwortung & Umsetzung auf eigenes Risiko</h2>
              <p className="text-zinc-300 leading-relaxed">
                Die Teilnahme am Coaching erfolgt freiwillig und eigenverantwortlich.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Alle Empfehlungen zu Training, Ernahrung, Nahrungserganzungsmitteln, Lebensstil, Schlaf, Stressmanagement und Mindset-Strategien sind unverbindlich.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                <strong>Die Umsetzung erfolgt auf eigenes Risiko des Teilnehmers.</strong> Der Anbieter ubernimmt keine Haftung fur Verletzungen, gesundheitliche Schaden oder negative Folgen, die aus der Umsetzung oder fehlerhaften Anwendung resultieren.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">3. Medikamente & Nahrungserganzungsmittel</h2>
              <p className="text-zinc-300 leading-relaxed">
                Teilnehmer, die verschreibungspflichtige oder frei verkaufliche Medikamente einnehmen, mussen vor Beginn eines Ernahrungs-, Supplement- oder Lifestyle-Programms <strong>unbedingt Rucksprache mit ihrem behandelnden Arzt</strong> halten.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Empfehlungen zu Nahrungserganzungsmitteln erfolgen nach bestem Wissen, jedoch ohne Gewahr fur Vertraglichkeit, Dosierung oder Wirkung.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Der Anbieter haftet nicht fur Unvertraglichkeiten, Nebenwirkungen oder Wechselwirkungen mit Medikamenten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">4. Keine Erfolgsgarantie</h2>
              <div className="p-4 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/30 mb-4">
                <p className="text-[#FFD700] font-medium">
                  Alle im Coaching genannten Ergebnisse (z. B. Fettabbau, Muskelaufbau, Hormonregulation, mentale Klarheit) sind individuell unterschiedlich und hangen von zahlreichen Faktoren ab.
                </p>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Diese Faktoren umfassen u.a. Genetik, Gesundheitszustand, Lebensstil und Umsetzung.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                <strong>Der Anbieter gibt kein Heilversprechen und keine Erfolgsgarantie.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">5. Psychische Belastungen & emotionale Reaktionen</h2>
              <p className="text-zinc-300 leading-relaxed">
                Das Coaching kann Themen wie Stress, Disziplin, emotionale Resilienz und Dopaminregulation umfassen.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                <strong>Es ersetzt keine Psychotherapie</strong> und ist nicht geeignet fur Teilnehmer in akuten psychischen Krisen.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Der Anbieter ubernimmt keine Haftung fur emotionale Krisen oder psychische Folgeschaden, die aus der Umsetzung der Inhalte entstehen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">6. Externe Empfehlungen & Drittanbieter</h2>
              <p className="text-zinc-300 leading-relaxed">
                Verweise auf Produkte, Marken, Webseiten, Studien oder Dienstleistungen erfolgen ohne Gewahr fur deren Richtigkeit, Qualitat oder Funktion.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Die Nutzung erfolgt auf eigene Verantwortung. Der Anbieter haftet nicht fur Schaden oder Nachteile, die durch Drittanbieter entstehen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">7. Haftungsbeschrankung</h2>
              <p className="text-zinc-300 leading-relaxed">
                Der Anbieter haftet nur fur Schaden, die auf vorsatzlichem oder grob fahrlassigem Verhalten beruhen.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Eine Haftung fur einfache Fahrlassigkeit ist ausgeschlossen, soweit gesetzlich zulassig.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Die Haftung fur Schaden an Leben, Korper oder Gesundheit bleibt unberuhrt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">8. Vertragsbestandteil</h2>
              <p className="text-zinc-300 leading-relaxed">
                Dieser Haftungsausschluss ist Bestandteil der Coachingvereinbarung. Mit Buchung des Coachings bestatigt der Teilnehmer, eigenverantwortlich zu handeln und diesen Disclaimer gelesen und akzeptiert zu haben.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center text-zinc-500 text-sm">
          <p>Copyright 2026 Primezeit System. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

export default DisclaimerPage;
