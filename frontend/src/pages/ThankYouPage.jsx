import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    CheckCircle2, Zap, 
    Download, Send, BarChart3, ShieldCheck, Instagram, 
    ArrowRight, Crown, ExternalLink, CreditCard,
    Smartphone
} from 'lucide-react';
import { siteConfig, coachData } from '../data/mock';

// Telegram Icon Component
const TelegramIcon = ({ size = 24, className = "" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className={className}
    >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
);

// Unterkomponente für die Checkliste
const FeatureItem = ({ text }) => (
    <li className="flex items-start gap-3 text-white/70">
        <div className="mt-1 w-5 h-5 rounded-full bg-[#4FC3F7]/20 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 size={12} className="text-[#4FC3F7]" />
        </div>
        <span className="text-sm md:text-base leading-snug">{text}</span>
    </li>
);

// Unterkomponente für die Aktions-Karten
const StepCard = ({ icon, step, title, description, cta, link, primary, badge, children }) => (
    <div className={`
        relative p-8 rounded-3xl border transition-all duration-500 group
        ${primary 
            ? 'bg-gradient-to-br from-zinc-900 to-zinc-950 border-[#4FC3F7]/40 shadow-[0_0_50px_-10px_rgba(79,195,247,0.3)] lg:scale-105 z-10' 
            : 'bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700'
        }
        hover:-translate-y-2
    `}>
        {badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4FC3F7] text-black text-[10px] font-bold px-4 py-1 rounded-full tracking-wider uppercase shadow-lg whitespace-nowrap">
                {badge}
            </div>
        )}
        <div className="flex justify-between items-start mb-6">
            <div className={`p-4 rounded-2xl border ${primary ? 'bg-[#4FC3F7]/10 border-[#4FC3F7]/20' : 'bg-zinc-800/50 border-zinc-700/50'}`}>
                {icon}
            </div>
            <span className="text-5xl font-black text-white/5 select-none tracking-widest">{step}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-[#4FC3F7] transition-colors">{title}</h3>
        <div className="text-zinc-400 text-sm leading-relaxed mb-6">
            {description}
            {children}
        </div>

        {link && cta && (
            <a 
                href={link} 
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95
                    ${primary 
                        ? 'bg-[#4FC3F7] text-black hover:bg-[#3AAFDF]' 
                        : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                    }
                `}
            >
                {cta} <ArrowRight size={18} />
            </a>
        )}
    </div>
);

const ThankYouPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        window.scrollTo(0, 0);
    }, []);

    const telegramLink = "https://t.me/arseniprimezeit";
    const billingLink = "https://billing.stripe.com/p/login/28E4gzbcrgM74ITdSO0gw00";

    return (
        <div className={`min-h-screen bg-[#0a0a0a] text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 lg:px-8 flex justify-between items-center bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent">
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800">
                        <Zap className="w-6 h-6 text-[#4FC3F7]" fill="currentColor" />
                    </div>
                    <span className="font-bold text-xl tracking-wide">PRIMEZEIT</span>
                </Link>
                <div className="hidden md:flex items-center gap-6">
                    <a 
                        href={telegramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-medium hover:bg-zinc-800 transition-all flex items-center gap-2"
                    >
                        <TelegramIcon size={14} /> Support
                    </a>
                </div>
            </header>

            <main className="pt-32 pb-32 px-6 max-w-6xl mx-auto">
                
                {/* Hero Bereich */}
                <section className="text-center mb-20 relative">
                    {/* Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4FC3F7]/5 rounded-full blur-[120px] -z-10"></div>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4FC3F7]/10 border border-[#4FC3F7]/20 text-[#4FC3F7] text-xs font-bold tracking-wider mb-8">
                        <Crown size={14} />
                        WILLKOMMEN IM PRIMETIME-SYSTEM™️
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                        Glückwunsch!<br/>
                        <span className="bg-gradient-to-r from-[#4FC3F7] to-[#FFD700] bg-clip-text text-transparent">Jetzt check deine E-Mails.</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Ich habe dir gerade alle wichtigen Details per E-Mail geschickt. 
                        Schau jetzt in dein Postfach (auch im Spam-Ordner!) – dort findest du alles, was du brauchst.
                    </p>

                    <p className="mt-6 text-white font-medium text-lg">
                        Danach erledigst du diese 3 Schritte:
                    </p>
                </section>

                {/* Schritte-Grid */}
                <div className="grid lg:grid-cols-3 gap-6 mb-24 items-stretch">
                    <StepCard 
                        icon={<Download className="w-7 h-7 text-[#4FC3F7]" />}
                        step="01"
                        title="Telegram herunterladen"
                        description="Lade dir die App 'Telegram' aus dem Google Play Store oder App Store herunter."
                        cta="App Store öffnen"
                        link="https://telegram.org/apps"
                        primary
                        badge="SCHRITT 1"
                    >
                        <div className="flex gap-2 mt-4">
                            <a 
                                href="https://apps.apple.com/app/telegram-messenger/id686449807" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-xs bg-zinc-800 px-3 py-1.5 rounded-lg hover:bg-zinc-700 transition-colors"
                            >
                                <Smartphone size={12} /> iOS
                            </a>
                            <a 
                                href="https://play.google.com/store/apps/details?id=org.telegram.messenger" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-xs bg-zinc-800 px-3 py-1.5 rounded-lg hover:bg-zinc-700 transition-colors"
                            >
                                <Smartphone size={12} /> Android
                            </a>
                        </div>
                    </StepCard>
                    
                    <StepCard 
                        icon={<Send className="w-7 h-7 text-[#4FC3F7]" />}
                        step="02"
                        title="Schreib mir auf Telegram"
                        description=""
                        cta="Arseni kontaktieren"
                        link={telegramLink}
                    >
                        <p className="mb-3">Schreib mir einfach:</p>
                        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 mb-3">
                            <p className="text-white font-medium">"Ich bin ready"</p>
                            <p className="text-zinc-500 text-xs mt-1">+ Screenshot deiner Zahlung</p>
                        </div>
                        <div className="text-xs text-zinc-500 space-y-1">
                            <p><span className="text-zinc-400">Benutzername:</span> @arseniprimezeit</p>
                            <p><span className="text-zinc-400">Telefon:</span> +49 172 598 5145</p>
                        </div>
                    </StepCard>
                    
                    <StepCard 
                        icon={<BarChart3 className="w-7 h-7 text-[#4FC3F7]" />}
                        step="03"
                        title="Performance-Onboarding"
                        description="Ich schalte dein Performance-Onboarding frei. Wir starten direkt mit der Analyse deines Ist-Zustands: Schlaf, Ernährung, Training, Hormone usw. Ab da beginnt dein individueller Plan – 100% auf dich angepasst."
                    />
                </div>

                {/* Billing Link Section */}
                <div className="max-w-xl mx-auto mb-24 p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 text-center">
                    <p className="text-zinc-500 text-sm mb-3 font-medium">Abonnement & Rechnungen</p>
                    <a 
                        href={billingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#4FC3F7] hover:underline font-medium"
                    >
                        Hier kannst du dein Abo jederzeit verwalten <ExternalLink size={14} />
                    </a>
                </div>

                {/* Vertrauensbereich / Motivation */}
                <div className="bg-zinc-900/50 rounded-3xl p-8 md:p-12 lg:p-16 border border-zinc-800/50 relative overflow-hidden">
                    {/* Background Icon */}
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                        <ShieldCheck size={250} className="text-[#4FC3F7]" />
                    </div>
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                                Was dich<br/>
                                <span className="text-[#4FC3F7]">erwartet.</span>
                            </h2>
                            <ul className="space-y-5">
                                <FeatureItem text="Analyse deines Ist-Zustands (Schlaf, Ernährung, Training, Hormone)." />
                                <FeatureItem text="Individueller Plan – 100% auf dich angepasst." />
                                <FeatureItem text="Direkter Draht zu Arseni via Telegram." />
                                <FeatureItem text="Wöchentliche Check-ins für maximale Ergebnisse." />
                                <FeatureItem text="Echte Transformation, auf die wir stolz sein können." />
                            </ul>
                        </div>
                        
                        {/* Coach Card */}
                        <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-zinc-800 shadow-xl">
                            <div className="flex items-center gap-5 mb-6">
                                <img 
                                    src={coachData.image}
                                    alt="Arseni" 
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover border-2 border-[#4FC3F7]"
                                />
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold">{coachData.name}</h3>
                                    <p className="text-[#4FC3F7] text-sm font-medium">Performance Coach</p>
                                </div>
                            </div>
                            <p className="text-zinc-400 leading-relaxed italic mb-6">
                                "Ich freue mich brutal, dich auf deinem Weg zu begleiten – und verspreche dir: 
                                Wir werden das gemeinsam komplett rasieren und eine Transformation hinlegen, 
                                auf die wir beide stolz sein können. Let's go!"
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a 
                                    href={telegramLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-[#4FC3F7] transition-colors"
                                >
                                    <TelegramIcon size={16} /> @arseniprimezeit
                                </a>
                                <a 
                                    href={siteConfig.instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-[#4FC3F7] transition-colors"
                                >
                                    <Instagram size={16} /> @arsenibiohacking
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-24 pt-12 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-xs">
                    <p>© 2025 Primezeit. Alle Rechte vorbehalten.</p>
                    <div className="flex gap-8">
                        <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                        <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                        <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
                    </div>
                </footer>

            </main>

            {/* Mobile Floating Button */}
            <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
                <a 
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#4FC3F7] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(79,195,247,0.5)] active:scale-95 transition-all"
                >
                    Arseni auf Telegram <TelegramIcon size={20} />
                </a>
            </div>

        </div>
    );
};

export default ThankYouPage;
