import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';
import { siteConfig } from '../../data/mock';

const CookieRichtliniePage = () => {
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
          <div className="flex items-center gap-3 mb-8">
            <Cookie className="w-8 h-8 text-[#FFD700]" />
            <h1 className="text-3xl sm:text-4xl font-bold">Cookie Richtlinie</h1>
          </div>
          
          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">1. Verwendung von Cookies</h2>
              <p className="text-zinc-300 leading-relaxed">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf deinem Endgerat gespeichert werden, wenn du unsere Website besuchst.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Einige Cookies sind technisch notwendig, damit die Website funktioniert. Andere dienen der Analyse, Personalisierung oder fur Marketingzwecke.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">2. Einwilligungspflichtige Cookies</h2>
              <p className="text-zinc-300 leading-relaxed">
                Alle Cookies, die nicht zwingend fur den Betrieb der Website erforderlich sind (z. B. Statistik-, Marketing- oder Tracking-Cookies), werden erst nach deiner ausdrucklichen Einwilligung gesetzt.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Dies geschieht uber ein Cookie-Consent-Tool. Dort kannst du jederzeit:
              </p>
              <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                <li>deine Einwilligung erteilen oder verweigern,</li>
                <li>bereits erteilte Einwilligungen widerrufen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">3. Arten von Cookies</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">Wir unterscheiden folgende Kategorien:</p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                  <h3 className="text-lg font-medium text-white mb-2">Technisch notwendige Cookies</h3>
                  <p className="text-zinc-400 text-sm">
                    Stellen die Grundfunktionen der Website sicher (z. B. Login, Warenkorb, Zahlungen). Werden ohne Einwilligung gesetzt.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                  <h3 className="text-lg font-medium text-white mb-2">Praferenz-Cookies</h3>
                  <p className="text-zinc-400 text-sm">
                    Speichern deine Einstellungen (z. B. Sprache, Layout). Einwilligungspflichtig, wenn nicht zwingend notwendig.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                  <h3 className="text-lg font-medium text-white mb-2">Statistik-Cookies</h3>
                  <p className="text-zinc-400 text-sm">
                    Erfassen anonyme Daten zur Nutzung der Website (z. B. Besucherzahlen, Klickpfade). Beispiel: Google Analytics. <span className="text-[#FFD700]">Einwilligung erforderlich.</span>
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                  <h3 className="text-lg font-medium text-white mb-2">Marketing-Cookies</h3>
                  <p className="text-zinc-400 text-sm">
                    Dienen personalisierter Werbung oder Retargeting. Beispiel: Facebook/Meta Pixel, Google Ads. <span className="text-[#FFD700]">Einwilligung erforderlich.</span>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">4. Rechtsgrundlage</h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li><strong>Technisch notwendige Cookies:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
                <li><strong>Alle anderen Cookies:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">5. Widerruf und Cookie-Einstellungen</h2>
              <p className="text-zinc-300 leading-relaxed">
                Du kannst deine Cookie-Einstellungen jederzeit uber das Cookie-Consent-Tool auf unserer Website andern.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Zudem kannst du Cookies in deinem Browser manuell loschen oder blockieren.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">6. Eingesetzte Cookies und Tools</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Je nach eingesetzten Tools konnen folgende Cookies genutzt werden:
              </p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li><strong>Stripe & PayPal:</strong> fur die Zahlungsabwicklung (technisch notwendig)</li>
                <li><strong>Google Analytics:</strong> fur Statistiken (einwilligungspflichtig)</li>
                <li><strong>Meta Pixel:</strong> fur Marketing (einwilligungspflichtig)</li>
                <li><strong>YouTube/Vimeo:</strong> fur Videoeinbettungen (einwilligungspflichtig)</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Die genaue Liste und Speicherdauer findest du im Cookie-Consent-Tool.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">7. Weitere Informationen</h2>
              <p className="text-zinc-300 leading-relaxed">
                Details zu unseren Datenschutzpraktiken findest du in unserer <Link to="/datenschutz" className="text-[#4FC3F7] hover:underline">Datenschutzerklarung</Link>.
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

export default CookieRichtliniePage;
