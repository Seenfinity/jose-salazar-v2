"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Language = "en" | "es";

function getStoredLang(): Language {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("jose-salazar-lang");
  return (stored === "es" || stored === "en") ? stored : "en";
}

function setStoredLang(lang: Language) {
  if (typeof window !== "undefined") {
    localStorage.setItem("jose-salazar-lang", lang);
  }
}

const translations = {
  en: {
    about: "About",
    education: "Education",
    gallery: "Gallery",
    performances: "Performances",
    contact: "Contact",
    contactTitle: "Get in Touch",
    contactDesc: "For bookings and inquiries",
    promoter: "Promoter inquiries: James Brown Management",
  },
  es: {
    about: "Sobre Mí",
    education: "Educación",
    gallery: "Galería",
    performances: "Actuaciones",
    contact: "Contacto",
    contactTitle: "Contacto",
    contactDesc: "Para reservas e inquiries",
    promoter: "Inquiries de promotores: James Brown Management",
  },
};

function Navigation({ t, lang, onLangChange }: { t: typeof translations.en; lang: Language; onLangChange: (l: Language) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "about", label: t.about, href: "/about" },
    { id: "education", label: t.education, href: "/education" },
    { id: "gallery", label: t.gallery, href: "/gallery" },
    { id: "schedule", label: t.performances, href: "/schedule" },
    { id: "contact", label: t.contact, href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a4d2e]/95 backdrop-blur-sm border-b border-[#1f5a3a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="font-display text-xl md:text-2xl font-bold text-white">José Salazar</Link>
        
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} className="text-sm text-white/70 hover:text-[#d4a72c] transition-colors uppercase tracking-wider">
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => onLangChange(lang === "en" ? "es" : "en")}
            className="ml-4 px-3 py-1 text-xs border border-[#d4a72c] text-[#d4a72c] hover:bg-[#d4a72c] hover:text-[#1a4d2e] transition-colors"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex items-center gap-2 p-2">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
    </nav>
  );
}

function Footer({ t }: { t: typeof translations.en }) {
  return (
    <footer className="py-6 md:py-8 px-4 md:px-6 bg-[#1a4d2e] border-t border-[#1f5a3a]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-white/60">© 2026 José Salazar. Photo by Lope Valles.</p>
      </div>
    </footer>
  );
}

export default function ContactPage({ searchParams }: { searchParams: { lang?: string } }) {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const urlLang = searchParams?.lang;
    if (urlLang === "es" || urlLang === "en") {
      setLang(urlLang);
      setStoredLang(urlLang);
    } else {
      setLang(getStoredLang());
    }
  }, [searchParams?.lang]);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    setStoredLang(newLang);
  };

  if (!mounted) return null;

  const t = translations[lang];

  return (
    <main className="min-h-screen bg-[#1a4d2e]">
      <Navigation t={t} lang={lang} onLangChange={handleLangChange} />
      
      <section className="min-h-screen pt-24 flex items-center justify-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl text-white mb-3 md:mb-4">{t.contactTitle}</h1>
          <div className="w-16 md:w-24 h-[2px] bg-[#d4a72c] mx-auto mb-6 md:mb-8" />
          
          <p className="text-white/80 text-lg md:text-xl mb-8 md:mb-12">
            {t.contactDesc}
          </p>
          
          <a 
            href="mailto:jose@joseangelsalazar.com"
            className="text-2xl md:text-4xl text-white hover:text-[#d4a72c] transition-colors inline-block mb-12"
          >
            jose@joseangelsalazar.com
          </a>

          <div className="pt-8 md:pt-12 border-t border-white/20">
            <p className="text-sm text-white/60">
              {t.promoter}
            </p>
          </div>
        </motion.div>
      </section>

      <Footer t={t} />
    </main>
  );
}
