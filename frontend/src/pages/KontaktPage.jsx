import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Send, Check } from 'lucide-react';
import { siteConfig } from '../data/mock';
import { Button } from '../components/ui/button';

const KontaktPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Arseni, kurze Frage zum Primezeit-System:\n\n- Ziel: ...\n- Problem: ...\n- Zeit pro Tag: ...\n\nKannst du kurz einschatzen, ob das bei mir Sinn macht?"
  )}`;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual endpoint)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open mailto as fallback
    const mailtoUrl = `mailto:arseni@primezeitsystem.de?subject=${encodeURIComponent(formData.subject || 'Anfrage von der Website')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="py-6 px-6 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
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

      {/* Main Content */}
      <main className="relative py-14 px-5">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[760px] h-[280px] bg-[#4FC3F7]/10 rounded-full blur-[120px]" />
          <div className="absolute top-[35%] right-[15%] w-[520px] h-[240px] bg-[#4FC3F7]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 w-[640px] h-[260px] bg-[#25D366]/15 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm tracking-wide text-zinc-400 uppercase">Kontakt</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold">Schreib mir</h1>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Wenn du mir kurz dein Thema schickst, kann ich dir sagen, ob das Primezeit-System zu dir passt.
            </p>
          </div>

          {/* WhatsApp - Primary Option */}
          <section className="mb-8 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-6 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#25D366]">
                  Am schnellsten
                </p>
                <h2 className="mt-1 text-xl font-semibold text-white">WhatsApp</h2>
                <p className="mt-1 text-sm text-zinc-200">
                  Schreib mir 1-2 Satze. Ziel + Problem + Zeit pro Tag reichen.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#20c05c] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp offnen
              </a>
            </div>

            <p className="mt-4 text-xs text-[#25D366]/80">
              Hinweis: Keine medizinische Beratung.
            </p>
          </section>

          {/* Grid: Form + Sidebar */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Email Form */}
            <section className="lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur">
              <h2 className="text-lg font-semibold">Oder per E-Mail</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Wenn du es ausfuhrlicher schreiben willst, nutz das Formular.
              </p>

              {isSubmitted ? (
                <div className="mt-6 p-6 rounded-xl bg-[#4FC3F7]/10 border border-[#4FC3F7]/30 text-center">
                  <Check className="w-12 h-12 text-[#4FC3F7] mx-auto mb-3" />
                  <p className="text-lg font-semibold">E-Mail Client geoffnet</p>
                  <p className="text-zinc-400 text-sm mt-2">
                    Dein E-Mail-Programm sollte sich geoffnet haben. Falls nicht, schreib direkt an arseni@primezeitsystem.de
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  {/* Honeypot */}
                  <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm text-zinc-300" htmlFor="name">Name</label>
                      <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="Max"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:border-[#4FC3F7]/50 transition-colors placeholder:text-zinc-600" 
                      />
                    </div>
                    <div>
                      <label className="text-sm text-zinc-300" htmlFor="email">E-Mail *</label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="max@email.de"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:border-[#4FC3F7]/50 transition-colors placeholder:text-zinc-600" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-zinc-300" htmlFor="subject">Betreff</label>
                    <input 
                      id="subject" 
                      name="subject" 
                      type="text" 
                      placeholder="z.B. Passt das Coaching zu mir?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:border-[#4FC3F7]/50 transition-colors placeholder:text-zinc-600" 
                    />
                  </div>

                  <div>
                    <label className="text-sm text-zinc-300" htmlFor="message">Nachricht *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="6" 
                      required
                      placeholder="Ziel, Problem, Zeit pro Tag, was du schon versucht hast."
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:border-[#4FC3F7]/50 transition-colors placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      id="privacy" 
                      name="privacy" 
                      type="checkbox" 
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-950/60 accent-[#4FC3F7]" 
                    />
                    <label htmlFor="privacy" className="text-sm text-zinc-400">
                      Ich habe die <Link to="/datenschutz" className="text-[#4FC3F7] hover:underline">Datenschutzerklarung</Link> gelesen.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 text-white font-semibold py-6 transition-colors"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Wird gesendet...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        E-Mail senden
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </section>

            {/* Sidebar */}
            <aside className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur h-fit">
              <h2 className="text-lg font-semibold">Was ich kurz brauche</h2>
              <p className="mt-2 text-sm text-zinc-400">Dann kann ich dir besser antworten:</p>

              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                  Ziel
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                  Problem
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                  Zeit pro Tag
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                  Was du schon probiert hast
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                <p className="text-sm font-semibold text-[#FFD700]">Beispiel</p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  "Ziel: mehr Energie. Problem: Schlaf schlecht. Zeit: 30 Minuten/Tag. Ich trainiere 3x/Woche."
                </p>
              </div>

              {/* Direct Contact Info */}
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 uppercase tracking-wide mb-3">Direkt erreichen</p>
                <div className="space-y-2 text-sm">
                  <a 
                    href="tel:+491725985145" 
                    className="block text-zinc-400 hover:text-white transition-colors"
                  >
                    0172 5985145
                  </a>
                  <a 
                    href="mailto:arseni@primezeitsystem.de" 
                    className="block text-zinc-400 hover:text-white transition-colors"
                  >
                    arseni@primezeitsystem.de
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>© 2026 Primezeit System. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KontaktPage;
