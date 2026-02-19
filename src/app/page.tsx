"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Language context
type Language = "en" | "es";

const translations = {
  en: {
    welcome: "Welcome",
    about: "About",
    education: "Education",
    gallery: "Gallery",
    performances: "Performances",
    contact: "Contact",
    discoverMore: "Discover More",
    classicalConductor: "Classical Conductor",
    conductingExcellence: "Conducting Excellence",
    enter: "Enter",
    selectLanguage: "Select Language",
  },
  es: {
    welcome: "Bienvenido",
    about: "Sobre Mí",
    education: "Educación",
    gallery: "Galería",
    performances: "Actuaciones",
    contact: "Contacto",
    discoverMore: "Descubre Más",
    classicalConductor: "Director de Orquesta Clásica",
    conductingExcellence: "Dirigiendo Excelencia",
    enter: "Entrar",
    selectLanguage: "Seleccionar Idioma",
  },
};

// Landing page with language selection
function LandingPage({ onEnter, lang, onLangChange }: { onEnter: () => void; lang: Language; onLangChange: (l: Language) => void }) {
  const t = translations[lang];
  
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-[#d4a72c] rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-[#d4a72c] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#d4a72c] rounded-full opacity-30" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-4">
          José <span className="text-[#d4a72c] italic">Salazar</span>
        </h1>
        <p className="text-[#d4a72c] uppercase tracking-[0.3em] text-sm md:text-base mb-12">
          {t.classicalConductor}
        </p>
        
        <button
          onClick={onEnter}
          className="px-8 py-4 bg-[#1a4d2e] text-white hover:bg-[#1f5a3a] transition-colors uppercase tracking-wider text-lg"
        >
          {t.enter}
        </button>
        
        {/* Language selector */}
        <div className="mt-16 flex flex-col gap-3">
          <p className="text-[#6b6b6b] text-sm">{t.selectLanguage}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onLangChange("en")}
              className={`px-4 py-2 border transition-colors ${lang === "en" ? "border-[#d4a72c] text-[#d4a72c]" : "border-[#6b6b6b] text-[#6b6b6b] hover:border-white hover:text-white"}`}
            >
              English
            </button>
            <button
              onClick={() => onLangChange("es")}
              className={`px-4 py-2 border transition-colors ${lang === "es" ? "border-[#d4a72c] text-[#d4a72c]" : "border-[#6b6b6b] text-[#6b6b6b] hover:border-white hover:text-white"}`}
            >
              Español
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Navigation
function Navigation({ t, lang }: { t: typeof translations.en; lang: Language }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "about", label: t.about, href: "/about" },
    { id: "education", label: t.education, href: "/education" },
    { id: "gallery", label: t.gallery, href: "/gallery" },
    { id: "schedule", label: t.performances, href: "/schedule" },
    { id: "contact", label: t.contact, href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="font-display text-xl md:text-2xl font-bold text-[#1a4d2e]">José Salazar</Link>
        
        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-sm text-[#6b6b6b] hover:text-[#1a4d2e] transition-colors uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}
          {/* Language toggle */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/?lang=${lang === "en" ? "es" : "en"}`;
            }}
            className="ml-4 px-3 py-1 text-xs border border-[#d4a72c] text-[#d4a72c] hover:bg-[#d4a72c] hover:text-[#1a1a1a] transition-colors"
          >
            {lang === "en" ? "ES" : "EN"}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-[#1a1a1a] transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-[#1a1a1a] ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-[#1a1a1a] transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#faf9f7] border-t border-[#e5e5e5]"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-left text-lg text-[#6b6b6b] hover:text-[#1a4d2e] transition-colors uppercase tracking-wider py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  window.location.href = `/?lang=${lang === "en" ? "es" : "en"}`;
                }}
                className="text-left text-lg text-[#d4a72c] py-2"
              >
                {lang === "en" ? "Español" : "English"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Hero
function Hero({ t }: { t: typeof translations.en }) {
  return (
    <section className="min-h-screen pt-16 md:pt-20 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-80px)]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <p className="text-[#1a4d2e] uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4">{t.classicalConductor}</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-[#1a1a1a] leading-[0.95] mb-4 md:mb-6">
              {t.conductingExcellence.split(" ")[0]}<br />
              <span className="italic text-[#1a4d2e]">{t.conductingExcellence.split(" ")[1]}</span>
            </h1>
            <p className="text-base md:text-lg text-[#6b6b6b] max-w-md mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed">
              Jette Parker Ballet Conductor at the Royal Opera House, London. Former Artistic Director of El Sistema Greece.
            </p>
            <a 
              href="/about"
              className="inline-block px-6 md:px-8 py-3 bg-[#1a4d2e] text-white hover:bg-[#1f5a3a] transition-colors uppercase tracking-wider text-sm"
            >
              {t.discoverMore}
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-[3/4] max-h-[50vh] md:max-h-none overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80" 
                alt="José Salazar conducting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -top-6 -left-6 w-16 md:w-24 h-16 md:h-24 bg-[#d4a72c]/20 -z-10" />
            <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#d4a72c]/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer({ t }: { t: typeof translations.en }) {
  return (
    <footer className="py-6 md:py-8 px-4 md:px-6 bg-[#faf9f7] border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[#6b6b6b]">
          © 2026 José Salazar. Photo by Lope Valles.
        </p>
      </div>
    </footer>
  );
}

export default function Home({ searchParams }: { searchParams: { lang?: string } }) {
  const [showLanding, setShowLanding] = useState(true);
  const [lang, setLang] = useState<Language>((searchParams?.lang as Language) || "en");

  const t = translations[lang];

  const handleEnter = () => {
    setShowLanding(false);
  };

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onEnter={handleEnter} lang={lang} onLangChange={handleLangChange} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation t={t} lang={lang} />
            <Hero t={t} />
            <Footer t={t} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
