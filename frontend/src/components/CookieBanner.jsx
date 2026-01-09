import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie, Check, Settings } from 'lucide-react';
import { Button } from './ui/button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be changed
    statistics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      statistics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      statistics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFD700]/10 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Cookie-Einstellungen</h3>
                <p className="text-sm text-zinc-500">Deine Privatsphare ist uns wichtig</p>
              </div>
            </div>
            <button 
              onClick={handleRejectAll}
              className="text-zinc-500 hover:text-white transition-colors p-1"
              aria-label="Schliessen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-4">
          <p className="text-zinc-400 text-sm leading-relaxed">
            Wir nutzen Cookies, um dir die bestmogliche Erfahrung zu bieten. Einige sind notwendig, andere helfen uns, unsere Website zu verbessern.
          </p>
          
          {/* Settings Toggle */}
          {showSettings && (
            <div className="mt-4 space-y-3">
              {/* Necessary - Always on */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50">
                <div>
                  <p className="text-white text-sm font-medium">Notwendig</p>
                  <p className="text-zinc-500 text-xs">Erforderlich fur Grundfunktionen</p>
                </div>
                <div className="w-10 h-6 rounded-full bg-[#4FC3F7] flex items-center justify-end px-1 cursor-not-allowed">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
              </div>

              {/* Statistics */}
              <div 
                className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 cursor-pointer hover:bg-zinc-800 transition-colors"
                onClick={() => setPreferences(p => ({ ...p, statistics: !p.statistics }))}
              >
                <div>
                  <p className="text-white text-sm font-medium">Statistik</p>
                  <p className="text-zinc-500 text-xs">Hilft uns, die Website zu verbessern</p>
                </div>
                <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.statistics ? 'bg-[#4FC3F7] justify-end' : 'bg-zinc-700 justify-start'}`}>
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
              </div>

              {/* Marketing */}
              <div 
                className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 cursor-pointer hover:bg-zinc-800 transition-colors"
                onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
              >
                <div>
                  <p className="text-white text-sm font-medium">Marketing</p>
                  <p className="text-zinc-500 text-xs">Personalisierte Werbung</p>
                </div>
                <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.marketing ? 'bg-[#4FC3F7] justify-end' : 'bg-zinc-700 justify-start'}`}>
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
              </div>
            </div>
          )}

          {/* Links */}
          <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link to="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link>
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            className="flex-1 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            onClick={() => setShowSettings(!showSettings)}
          >
            <Settings className="w-4 h-4 mr-2" />
            {showSettings ? 'Weniger' : 'Einstellungen'}
          </Button>
          
          {showSettings ? (
            <Button
              className="flex-1 bg-[#4FC3F7] hover:bg-[#3AAFDF] text-black font-medium"
              onClick={handleAcceptSelected}
            >
              <Check className="w-4 h-4 mr-2" />
              Auswahl speichern
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                className="flex-1 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                onClick={handleRejectAll}
              >
                Nur Notwendige
              </Button>
              <Button
                className="flex-1 bg-[#4FC3F7] hover:bg-[#3AAFDF] text-black font-medium"
                onClick={handleAcceptAll}
              >
                <Check className="w-4 h-4 mr-2" />
                Alle akzeptieren
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
