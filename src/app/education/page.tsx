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
    educationTitle: "Music Education",
    aim: "Academy of Impact Through Music (AIM)",
    aimDesc: "Conductor, group leader, and teaching artist",
    itac: "International Teaching Artists Collaborative (ITAC)",
    itacDesc: "Global discussions for arts education improvement",
    sistemaGreece: "El Sistema Greece",
    sistemaDesc: "5 years as Artistic & Music Director",
    lectures: "Lectures",
    lecturesDesc: "Berklee Valencia, Vienna, Mumbai",
  },
  es: {
    about: "Sobre Mí",
    education: "Educación",
    gallery: "Galería",
    performances: "Actuaciones",
    contact: "Contacto",
    educationTitle: "Educación Musical",
    aim: "Academia de Impacto a Través de la Música (AIM)",
    aimDesc: "Director, líder de grupo y artista docente",
    itac: "Colaborativo Internacional de Artistas Docentes (ITAC)",
    itacDesc: "Discusiones globales para mejorar la educación artística",
    sistemaGreece: "El Sistema Grecia",
    sistemaDesc: "5 años como Director Artístico y Musical",
    lectures: "Conferencias",
    lecturesDesc: "Berklee Valencia, Viena, Mumbai",
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="font-display text-xl md:text-2xl font-bold text-[#1a4d2e]">José Salazar</Link>
        
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} className="text-sm text-[#6b6b6b] hover:text-[#1a4d2e] transition-colors uppercase tracking-wider">
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => onLangChange(lang === "en" ? "es" : "en")}
            className="ml-4 px-3 py-1 text-xs border border-[#d4a72c] text-[#d4a72c] hover:bg-[#d4a72c] hover:text-[#1a1a1a] transition-colors"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex items-center gap-2 p-2">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-[#1a1a1a] ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-[#1a1a1a] ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-[#1a1a1a] ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
    </nav>
  );
}

function Footer({ t }: { t: typeof translations.en }) {
  return (
    <footer className="py-6 md:py-8 px-4 md:px-6 bg-[#faf9f7] border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[#6b6b6b]">© 2026 José Salazar. Photo by Lope Valles.</p>
      </div>
    </footer>
  );
}

export default function EducationPage({ searchParams }: { searchParams: { lang?: string } }) {
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

  const items = [
    { title: t.aim, desc: t.aimDesc },
    { title: t.itac, desc: t.itacDesc },
    { title: t.sistemaGreece, desc: t.sistemaDesc },
    { title: t.lectures, desc: t.lecturesDesc },
  ];

  return (
    <main className="min-h-screen bg-[#f5f4f1]">
      <Navigation t={t} lang={lang} onLangChange={handleLangChange} />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <h1 className="font-display text-5xl md:text-7xl text-[#1a1a1a] mb-3 md:mb-4">{t.educationTitle}</h1>
            <div className="w-16 md:w-24 h-[2px] bg-[#d4a72c] mx-auto" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-5 md:p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display text-lg md:text-xl text-[#1a1a1a] mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm text-[#6b6b6b]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
