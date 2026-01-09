import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../../data/mock';

const AGBPage = () => {
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Allgemeine Geschaftsbedingungen (AGB)</h1>
          <p className="text-zinc-400 mb-8">fur das Primezeit System - 1:1 Performance Coaching von Arseni Lasnov<br />Stand: September 2025</p>
          
          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">1. Geltungsbereich</h2>
              <p className="text-zinc-300 leading-relaxed">
                Diese Allgemeinen Geschaftsbedingungen (AGB) gelten fur alle Vertrage zwischen Arseni Lasnov, Primezeit System (nachfolgend "Anbieter") und dessen Kunden (nachfolgend "Kunde") uber die Teilnahme am 1:1 Performance Coaching.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrucklich schriftlich zu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">2. Vertragsgegenstand</h2>
              <p className="text-zinc-300 leading-relaxed">
                Der Anbieter bietet ein individuelles Coaching-Programm an, das folgende Leistungen enthalten kann:
              </p>
              <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                <li>individuelle Trainings- und Ernahrungsplanung</li>
                <li>Supplementberatung</li>
                <li>Mindset-Impulse</li>
                <li>Schlaf- und Regenerationsoptimierung</li>
                <li>wochentliche Check-ins</li>
                <li>personlicher Support via WhatsApp</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Der genaue Leistungsumfang ergibt sich aus der jeweiligen Angebotsbeschreibung auf der Website oder in individuellen Vereinbarungen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">3. Vertragsschluss</h2>
              <p className="text-zinc-300 leading-relaxed">
                Der Vertrag kommt zustande, sobald der Kunde uber die Bezahlseite (z. B. via Stripe oder PayPal) den Kauf abschliesst und die Zahlung bestatigt wird. Der Kunde erhalt eine Bestatigung per E-Mail.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">4. Preise und Zahlung</h2>
              <p className="text-zinc-300 leading-relaxed">
                Alle Preise sind in Euro angegeben und enthalten die jeweils gultige gesetzliche Umsatzsteuer. Die Zahlung erfolgt monatlich im Voraus uber das gewahlte Zahlungsmittel.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Bei Zahlungsverzug behalt sich der Anbieter vor:
              </p>
              <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                <li>Mahngebuhren zu erheben,</li>
                <li>den Zugang zum Coaching vorubergehend zu sperren,</li>
                <li>den Vertrag nach zwei erfolglosen Mahnungen fristlos zu kundigen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">5. Vertragslaufzeit und Kundigung</h2>
              <p className="text-zinc-300 leading-relaxed">
                Der Vertrag wird auf unbestimmte Zeit geschlossen und verlangert sich automatisch um jeweils einen weiteren Monat, sofern er nicht gekundigt wird.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                <strong>Kundigung:</strong>
              </p>
              <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                <li>Der Kunde kann den Vertrag jederzeit mit einer Frist von 7 Tagen zum Monatsende in Textform (E-Mail) kundigen.</li>
                <li>Der Anbieter kann den Vertrag mit gleicher Frist kundigen, z. B. bei fehlender Mitarbeit oder Verstossen gegen Pflichten.</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Eine anteilige Ruckerstattung bereits gezahlter Beitrage erfolgt nicht, es sei denn, eine gesetzliche Verpflichtung besteht.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">6. Widerrufsrecht</h2>
              <p className="text-zinc-300 leading-relaxed">
                Verbraucher haben ein gesetzliches Widerrufsrecht von 14 Tagen.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                <strong>Verlust des Widerrufsrechts:</strong> Der Anbieter beginnt mit der Leistungserbringung unmittelbar nach Vertragsschluss, wenn der Kunde dem ausdrucklich zugestimmt hat. Mit Beginn der Leistungserbringung erlischt das Widerrufsrecht (Paragraph 356 Abs. 4 BGB).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">7. Leistungsumfang und Verfugbarkeit</h2>
              <p className="text-zinc-300 leading-relaxed">
                Der Anbieter erbringt die vereinbarten Coaching-Leistungen nach bestem Wissen und Gewissen. Ein bestimmter Erfolg (z. B. Gewichtsverlust, Muskelaufbau, Hormonoptimierung) wird nicht garantiert.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Der Anbieter behalt sich vor, Inhalte und technische Plattformen (z. B. Notion, WhatsApp) zu andern, wenn dies zur Verbesserung oder Aufrechterhaltung der Leistung erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">8. Pflichten des Kunden</h2>
              <p className="text-zinc-300 leading-relaxed">Der Kunde verpflichtet sich,</p>
              <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                <li>die bereitgestellten Empfehlungen eigenverantwortlich umzusetzen,</li>
                <li>gesundheitliche Einschrankungen vorab mit einem Arzt abzuklaren,</li>
                <li>richtige Angaben im Onboarding und wahrend des Coachings zu machen.</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Falsche oder unvollstandige Angaben konnen zum Ausschluss vom Coaching fuhren.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">9. Nutzungsrechte</h2>
              <p className="text-zinc-300 leading-relaxed">
                Alle bereitgestellten Inhalte (PDFs, Videos, Trainingsplane) sind urheberrechtlich geschutzt. Der Kunde erhalt ein einfaches, nicht ubertragbares Nutzungsrecht fur die Dauer des Coachings. Eine Weitergabe oder Veroffentlichung ist nicht gestattet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">10. Haftung</h2>
              <p className="text-zinc-300 leading-relaxed">
                Der Anbieter haftet nur fur Schaden, die auf einer vorsatzlichen oder grob fahrlassigen Pflichtverletzung beruhen.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Bei einfacher Fahrlassigkeit haftet der Anbieter nur fur Schaden aus der Verletzung des Lebens, des Korpers oder der Gesundheit, oder fur Schaden aus der Verletzung wesentlicher Vertragspflichten ("Kardinalpflichten"). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Das Coaching ersetzt keine medizinische oder therapeutische Behandlung. Der Kunde hat eigenverantwortlich sicherzustellen, dass keine gesundheitlichen Bedenken bestehen. Der Anbieter ubernimmt keine Haftung fur Erfolge des Coachings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">11. Datenschutz</h2>
              <p className="text-zinc-300 leading-relaxed">
                Es gelten die Bestimmungen der <Link to="/datenschutz" className="text-[#4FC3F7] hover:underline">Datenschutzerklarung</Link> auf der Website des Anbieters.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">12. Streitbeilegung & OS-Plattform</h2>
              <p className="text-zinc-300 leading-relaxed">
                Die Europaische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:<br />
                <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-[#4FC3F7] hover:underline">https://ec.europa.eu/odr</a>
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                Der Anbieter ist nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#4FC3F7] mb-4">13. Gerichtsstand & Anwendbares Recht</h2>
              <p className="text-zinc-300 leading-relaxed">
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist der Sitz des Anbieters, sofern gesetzlich zulassig.
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

export default AGBPage;
