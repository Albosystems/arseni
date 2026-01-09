import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../../data/mock';

const ImpressumPage = () => {
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Impressum</h1>
          
          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">Angaben gemass Paragraph 5 TMG</h2>
              <p className="text-zinc-300 leading-relaxed">
                <strong>Inhaber:</strong> Arseni Lasnov<br />
                <strong>Unternehmensbezeichnung:</strong> Primezeit System - Arseni Lasnov<br />
                <strong>Anschrift:</strong> Eibenweg 14, 84508 Burgkirchen a. d. Alz, Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">Kontakt</h2>
              <p className="text-zinc-300 leading-relaxed">
                <strong>Telefon:</strong> 0172 5985145<br />
                <strong>E-Mail:</strong> arseni@primezeitsystem.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">Umsatzsteuer-ID</h2>
              <p className="text-zinc-300 leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemass Paragraph 27 a Umsatzsteuergesetz: DE357445529
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">Verantwortlich fur den Inhalt</h2>
              <p className="text-zinc-300 leading-relaxed">
                Verantwortlich fur den Inhalt nach Paragraph 18 Abs. 2 MStV:<br />
                Arseni Lasnov, Eibenweg 14, 84508 Burgkirchen a. d. Alz
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">Plattform der EU-Kommission zur Online-Streitbeilegung</h2>
              <p className="text-zinc-300 leading-relaxed">
                Die Europaische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-[#4FC3F7] hover:underline">
                  https://ec.europa.eu/odr
                </a>
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">Haftung fur Inhalte</h2>
              <p className="text-zinc-300 leading-relaxed">
                Als Diensteanbieter sind wir gemass Paragraph 7 Abs. 1 TMG fur eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach Paragraphen 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, ubermittelte oder gespeicherte fremde Informationen zu uberwachen oder nach Umstanden zu forschen, die auf eine rechtswidrige Tatigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberuhrt. Eine diesbezugliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung moglich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir diese Inhalte umgehend.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">Haftung fur Links</h2>
              <p className="text-zinc-300 leading-relaxed">
                Unser Angebot enthalt ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb konnen wir fur diese fremden Inhalte auch keine Gewahr ubernehmen. Fur die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">Urheberrecht</h2>
              <p className="text-zinc-300 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beitrage Dritter sind als solche gekennzeichnet. Die Vervielfaltigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedurfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur fur den privaten, nicht kommerziellen Gebrauch gestattet, sofern nicht ausdrucklich anders angegeben.
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

export default ImpressumPage;
