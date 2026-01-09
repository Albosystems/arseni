import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { footerData, siteConfig } from '../../data/mock';

const Footer = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
  const emailAddress = "arseni@primezeitsystem.de";

  return (
    <footer className="relative py-12 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img 
              src={siteConfig.logo}
              alt="Primezeit"
              className="h-8 w-auto brightness-0 invert opacity-70"
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
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

          {/* Social & Contact */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a 
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            
            {/* WhatsApp */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            
            {/* Email */}
            <a 
              href={`mailto:${emailAddress}`}
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#4FC3F7] hover:border-[#4FC3F7]/50 transition-all"
              title="E-Mail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-sm">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
