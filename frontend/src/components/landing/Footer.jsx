import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { footerData, siteConfig } from '../../data/mock';

const Footer = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
  const emailAddress = "arseni@primezeitsystem.de";

  const legalLinks = [
    { label: 'Impressum', path: '/impressum' },
    { label: 'Datenschutz', path: '/datenschutz' },
    { label: 'AGB', path: '/agb' },
    { label: 'Disclaimer', path: '/disclaimer' },
    { label: 'Widerrufsbelehrung', path: '/widerrufsbelehrung' },
    { label: 'Cookie-Richtlinie', path: '/cookie-richtlinie' },
  ];

  return (
    <footer className="relative py-12 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-10">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4 max-w-sm">
            <img 
              src={siteConfig.logo}
              alt="Primezeit"
              className="h-10 w-auto brightness-0 invert opacity-80"
            />
            <p className="text-zinc-500 text-sm leading-relaxed">
              1:1 Performance Coaching fur Manner, die ein komplettes System wollen - nicht noch mehr Informationen.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a 
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${emailAddress}`}
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#4FC3F7] hover:border-[#4FC3F7]/50 transition-all"
                title="E-Mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-wrap gap-12">
            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <nav className="flex flex-col gap-2">
                {footerData.links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    className="text-zinc-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Rechtliches</h4>
              <nav className="flex flex-col gap-2">
                {legalLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.path}
                    className="text-zinc-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontakt</h4>
              <div className="flex flex-col gap-2 text-zinc-500 text-sm">
                <p>Arseni Lasnov</p>
                <p>Eibenweg 14</p>
                <p>84508 Burgkirchen a. d. Alz</p>
                <a href="tel:+491725985145" className="hover:text-white transition-colors mt-2">
                  0172 5985145
                </a>
                <a href={`mailto:${emailAddress}`} className="hover:text-white transition-colors">
                  arseni@primezeitsystem.de
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-sm">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
