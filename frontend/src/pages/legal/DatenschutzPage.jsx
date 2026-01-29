import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../../data/mock';

const DatenschutzPage = () => {
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Datenschutzerklarung</h1>
          <p className="text-zinc-400 mb-8">fur Primezeit System</p>
          
          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">1. Verantwortliche Stelle</h2>
              <p className="text-zinc-300 leading-relaxed">
                Verantwortlich fur die Datenverarbeitung auf dieser Website ist:<br /><br />
                Arseni Lasnov<br />
                Primezeit System - Arseni Lasnov<br />
                Eibenweg 14<br />
                84508 Burgkirchen a. d. Alz<br />
                E-Mail: arseni@primezeitsystem.de<br />
                Telefon: 0172 5985145
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">2. Allgemeines zur Datenverarbeitung</h2>
              <p className="text-zinc-300 leading-relaxed">
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklarung.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Personenbezogene Daten werden nur verarbeitet, wenn:
              </p>
              <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                <li>dies gesetzlich erlaubt ist (Art. 6 DSGVO) oder</li>
                <li>Sie in die Verarbeitung eingewilligt haben.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">3. Datenerfassung auf unserer Website</h2>
              
              <h3 className="text-lg font-medium text-white mt-6 mb-3">a) Cookies & Consent-Management</h3>
              <p className="text-zinc-300 leading-relaxed">
                Wir verwenden ein Cookie-Consent-Tool, um Ihre Einwilligung fur nicht notwendige Cookies (z. B. Analyse, Marketing) einzuholen.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse fur technisch notwendige Cookies).
              </p>

              <h3 className="text-lg font-medium text-white mt-6 mb-3">b) Server-Log-Dateien</h3>
              <p className="text-zinc-300 leading-relaxed">
                Der Hosting-Anbieter erhebt Daten uber Zugriffe (Browsertyp, Uhrzeit, IP-Adresse). Diese Daten sind nicht bestimmten Personen zuordenbar und dienen ausschliesslich der sicheren Bereitstellung der Website.
              </p>

              <h3 className="text-lg font-medium text-white mt-6 mb-3">c) Kontaktformular & E-Mail-Kontakt</h3>
              <p className="text-zinc-300 leading-relaxed">
                Bei Kontaktaufnahme werden Ihre Angaben zur Bearbeitung der Anfrage verarbeitet und gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">4. Datenverarbeitung bei Coaching-Abo & Zahlungsanbietern</h2>
              
              <h3 className="text-lg font-medium text-white mt-6 mb-3">a) Zahlungsabwicklung</h3>
              <p className="text-zinc-300 leading-relaxed">
                Fur die Abwicklung der Zahlungen nutzen wir folgende Anbieter:
              </p>
              <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-2">
                <li><strong>Stripe</strong> (Stripe Payments Europe, Ltd., Irland) - <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-[#4FC3F7] hover:underline">Datenschutzerklarung</a></li>
                <li><strong>PayPal</strong> (PayPal (Europe) S.a r.l. et Cie, S.C.A., Luxemburg) - <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer" className="text-[#4FC3F7] hover:underline">Datenschutzerklarung</a></li>
              </ul>
              <p className="text-zinc-300 leading-relaxed mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfullung).
              </p>

              <h3 className="text-lg font-medium text-white mt-6 mb-3">b) Vertragsabwicklung & Kundendaten</h3>
              <p className="text-zinc-300 leading-relaxed">
                Kundendaten (Name, E-Mail, Zahlungsinformationen) werden zur Vertragserfullung und Rechnungsstellung verarbeitet. Gesetzliche Aufbewahrungsfristen (z. B. GoBD) betragen 10 Jahre.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">5. Kommunikation & Coaching-Tools</h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li><strong>WhatsApp Business:</strong> Kommunikation mit Kunden</li>
                <li><strong>Notion:</strong> Bereitstellung von Coaching-Materialien</li>
                <li><strong>Zapier:</strong> Automatisierung von Prozessen</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Datenubermittlung erfolgt bei US-Diensten auf Basis von EU-Standardvertragsklauseln.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">6. Newsletter & Automatisierte E-Mails</h2>
              <p className="text-zinc-300 leading-relaxed">
                Bei Anmeldung zum Newsletter oder automatisierten E-Mails (z. B. Onboarding) verwenden wir ein Double-Opt-In-Verfahren.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie konnen die Einwilligung jederzeit widerrufen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">7. Analyse- & Marketing-Tools</h2>
              <p className="text-zinc-300 leading-relaxed">
                Optionale Tools wie Google Analytics oder Meta Pixel werden nur nach ausdrucklicher Einwilligung eingesetzt. Die Datenverarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">8. Ihre Rechte</h2>
              <p className="text-zinc-300 leading-relaxed">Sie haben das Recht auf:</p>
              <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Loschung (Art. 17 DSGVO)</li>
                <li>Einschrankung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenubertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Beschwerden konnen an die zustandige Datenschutzbehorde gerichtet werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">9. Speicherdauer</h2>
              <p className="text-zinc-300 leading-relaxed">
                Personenbezogene Daten werden nur so lange gespeichert, wie es fur den jeweiligen Zweck erforderlich ist oder gesetzliche Vorgaben dies verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">10. Datensicherheit</h2>
              <p className="text-zinc-300 leading-relaxed">
                Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre Daten gegen Manipulation, Verlust oder unbefugten Zugriff zu schutzen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">11. Aktualitat</h2>
              <p className="text-zinc-300 leading-relaxed">
                Diese Datenschutzerklarung wird regelmassig angepasst, um neue gesetzliche Vorgaben oder Anderungen unserer Dienstleistungen zu berucksichtigen.
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

export default DatenschutzPage;
