import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    CheckCircle2, Zap, MessageSquare, 
    Mail, BarChart3, ShieldCheck, Instagram, 
    ArrowRight, Crown, ExternalLink, CreditCard,
    AlertCircle
} from 'lucide-react';
import { siteConfig, coachData } from '../data/mock';

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
const StepCard = ({ icon, step, title, description, cta, link, primary, badge }) => (
    <div className={`
        relative p-8 rounded-3xl border transition-all duration-500 group
        ${primary 
            ? 'bg-gradient-to-br from-zinc-900 to-zinc-950 border-[#4FC3F7]/40 shadow-[0_0_50px_-10px_rgba(79,195,247,0.3)] lg:scale-105 z-10' 
            : 'bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700'
        }
        hover:-translate-y-2
    `}>
        {badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4FC3F7] text-black text-[10px] font-bold px-4 py-1 rounded-full tracking-wider uppercase shadow-lg">
                {badge}
            </div>
        )}
        <div className="flex justify-between items-start mb-8">
            <div className={`p-4 rounded-2xl border ${primary ? 'bg-[#4FC3F7]/10 border-[#4FC3F7]/20' : 'bg-zinc-800/50 border-zinc-700/50'}`}>
                {icon}
            </div>
            <span className="text-5xl font-black text-white/5 select-none tracking-widest">{step}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-[#4FC3F7] transition-colors">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            {description}
        </p>

        <a 
            href={link} 
            target={link.startsWith('http') ? "_blank" : "_self"}
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
    </div>
);

const ThankYouPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi Arseni! Ich habe gerade das Primezeit Coaching gebucht und bin ready! 🔥")}`;

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
                        href="https://billing.stripe.com/p/login/test_00g00000000000" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-white transition-colors"
                    >
                        <CreditCard size={14} /> Abo verwalten
                    </a>
                    <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-medium hover:bg-zinc-800 transition-all"
                    >
                        Support
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
                        SYSTEM-ZUGANG BESTÄTIGT
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Willkommen im<br/>
                        <span className="bg-gradient-to-r from-[#4FC3F7] to-[#FFD700] bg-clip-text text-transparent">Primezeit System.</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Glückwunsch! Ich habe dir gerade alle wichtigen Details und deinen Zugang per E-Mail gesendet. Schau jetzt in dein Postfach.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-2 text-amber-400/80 text-sm font-medium">
                        <AlertCircle size={16} />
                        Schau auch unbedingt im Spam-Ordner nach!
                    </div>
                </section>

                {/* Schritte-Grid */}
                <div className="grid lg:grid-cols-3 gap-6 mb-24 items-stretch">
                    <StepCard 
                        icon={<Mail className="w-7 h-7 text-[#4FC3F7]" />}
                        step="01"
                        title="E-Mail öffnen"
                        description="Dort findest du deine offizielle Willkommens-Mail von mir mit allen wichtigen Infos und Links."
                        cta="Zum Postfach"
                        link="https://mail.google.com"
                        primary
                        badge="JETZT ERLEDIGEN"
                    />
                    <StepCard 
                        icon={<MessageSquare className="w-7 h-7 text-[#4FC3F7]" />}
                        step="02"
                        title="WhatsApp Kontakt"
                        description="Schreib mir kurz auf WhatsApp 'Ich bin ready' – dann starten wir direkt mit deinem Onboarding."
                        cta="Arseni schreiben"
                        link={whatsappLink}
                    />
                    <StepCard 
                        icon={<BarChart3 className="w-7 h-7 text-[#4FC3F7]" />}
                        step="03"
                        title="System-Start"
                        description="Nach unserem ersten Kontakt schalte ich dein Performance-Onboarding frei und wir legen los."
                        cta="Mehr zum Ablauf"
                        link="/#process"
                    />
                </div>

                {/* Billing Link Section */}
                <div className="max-w-xl mx-auto mb-24 p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 text-center">
                    <p className="text-zinc-500 text-sm mb-3 font-medium">Abonnement & Rechnungen</p>
                    <a 
                        href="https://billing.stripe.com/p/login/test_00g00000000000" 
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
                                Unser Fokus<br/>
                                <span className="text-[#4FC3F7]">im System.</span>
                            </h2>
                            <ul className="space-y-5">
                                <FeatureItem text="Analyse deines Ist-Zustands (Hormone, Schlaf, Stress)." />
                                <FeatureItem text="Individueller Plan – 100% auf dich angepasst." />
                                <FeatureItem text="Direkter Draht zu Arseni via WhatsApp." />
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
                                "Ich freue mich extrem, dich auf deinem Weg zu begleiten. Wir werden eine Transformation hinlegen, die dein gesamtes System auf ein neues Level hebt. Schau jetzt in deine Mails, da steht alles drin. Let's go!"
                            </p>
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
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#4FC3F7] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(79,195,247,0.5)] active:scale-95 transition-all"
                >
                    Arseni auf WhatsApp <MessageSquare size={20} />
                </a>
            </div>

        </div>
    );
};

export default ThankYouPage;
