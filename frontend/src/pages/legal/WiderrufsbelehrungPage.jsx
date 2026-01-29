import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { siteConfig } from '../../data/mock';

const WiderrufsbelehrungPage = () => {
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Widerrufsbelehrung</h1>
          
          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            {/* Important Notice */}
            <section className="p-6 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30">
              <h2 className="text-xl font-semibold text-[#FFD700] mb-4">Erloschen des Widerrufsrechts bei sofortigem Beginn</h2>
              <p className="text-zinc-300 leading-relaxed">
                Mit Buchung des Coachings kannst du ausdrucklich verlangen, dass wir vor Ablauf der gesetzlichen Widerrufsfrist mit der Leistungserbringung beginnen.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Du bestatigst, dass du dein Widerrufsrecht verlierst, sobald wir mit der Erbringung der vereinbarten Leistungen beginnen.
              </p>
              <p className="text-[#FFD700] font-semibold mt-4">
                Das bedeutet: Sobald das Coaching gestartet ist, kannst du den Vertrag nicht mehr widerrufen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">Widerrufsrecht</h2>
              <p className="text-zinc-300 leading-relaxed">
                Du hast das Recht, binnen <strong>vierzehn Tagen</strong> ohne Angabe von Grunden diesen Vertrag zu widerrufen.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Die Widerrufsfrist betragt vierzehn Tage ab dem Tag des Vertragsabschlusses.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Um dein Widerrufsrecht auszuuben, musst du uns
              </p>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 mt-4">
                <p className="text-white font-medium">
                  Arseni Lasnov, Primezeit System<br />
                  Eibenweg 14, 84508 Burgkirchen a. d. Alz<br />
                  E-Mail: arseni@primezeitsystem.de
                </p>
              </div>
              <p className="text-zinc-300 leading-relaxed mt-4">
                mittels einer eindeutigen Erklarung (z. B. per Post oder E-Mail) uber deinen Entschluss, diesen Vertrag zu widerrufen, informieren.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung uber die Ausubung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">Folgen des Widerrufs</h2>
              <p className="text-zinc-300 leading-relaxed">
                Wenn du den Vertrag <strong>vor Beginn des Coachings</strong> widerrufst, erstatten wir dir alle Zahlungen spatestens binnen vierzehn Tagen nach Eingang deines Widerrufs.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Fur diese Ruckzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprunglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrucklich etwas anderes vereinbart. In keinem Fall werden dir wegen dieser Ruckzahlung Entgelte berechnet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">Besonderer Hinweis bei Abo-Modellen</h2>
              <p className="text-zinc-300 leading-relaxed">
                Bei fortlaufenden Dienstleistungen (z. B. Coaching im Monatsabo) gilt: Jeder bereits begonnene Leistungsmonat wird als erbracht betrachtet und ist anteilig zu verguten.
              </p>
            </section>

            {/* Download Section */}
            <section className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#4FC3F7]/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#4FC3F7]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Widerrufsformular</h3>
                  <p className="text-zinc-400 text-sm">
                    Du kannst den Widerruf auch formlos per E-Mail an arseni@primezeitsystem.de senden.
                  </p>
                </div>
              </div>
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

export default WiderrufsbelehrungPage;
