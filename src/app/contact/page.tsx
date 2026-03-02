"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

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
    nav: {
      about: "About",
      education: "Education",
      gallery: "Gallery",
      performances: "Performances",
      contact: "Contact",
    },
    title: "Contact",
    intro: "If you want to get in touch, have any questions or proposals, contact us.",
    generalManagement: "General Management",
    website: "Website",
    email: "Email",
    phone: "Phone",
  },
  es: {
    nav: {
      about: "Sobre Mí",
      education: "Educación",
      gallery: "Galería",
      performances: "Actuaciones",
      contact: "Contacto",
    },
    title: "Contacto",
    intro: "Si quieres ponerte en contacto, tienes alguna pregunta o propuesta, contáctanos.",
    generalManagement: "Gestión General",
    website: "Sitio Web",
    email: "Correo",
    phone: "Teléfono",
  },
};

function Navigation({ t, lang, onLangChange }: { t: typeof translations.en; lang: Language; onLangChange: (l: Language) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "about", label: t.nav.about, href: "/about" },
    { id: "education", label: t.nav.education, href: "/education" },
    { id: "gallery", label: t.nav.gallery, href: "/gallery" },
    { id: "schedule", label: t.nav.performances, href: "/schedule" },
    { id: "contact", label: t.nav.contact, href: "/contact" },
  ];

  const toggleLang = () => {
    const newLang = lang === "en" ? "es" : "en";
    onLangChange(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="font-display text-xl md:text-2xl font-bold text-[#8b2635]">José Salazar</Link>
        
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-sm text-[#6b6b6b] hover:text-[#8b2635] transition-colors uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="ml-4 px-3 py-1 text-xs border border-[#8b2635] text-[#8b2635] hover:bg-[#8b2635] hover:text-white transition-colors"
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
                  className="text-left text-lg text-[#6b6b6b] hover:text-[#8b2635] transition-colors uppercase tracking-wider py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button onClick={toggleLang} className="text-left text-lg text-[#8b2635] py-2">
                {lang === "en" ? "Español" : "English"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer({ t }: { t: typeof translations.en }) {
  return (
    <footer className="py-6 md:py-8 px-4 md:px-6 bg-[#faf9f7] border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[#6b6b6b] mb-4">© 2026 José Salazar. Photo by Lope Valles.</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/josesalazarconductor" target="_blank" rel="noopener noreferrer" className="text-[#8b2635] hover:text-[#a83246] transition-colors uppercase tracking-wider text-sm">Instagram</a>
          <a href="https://youtube.com/@jasalazarconductor" target="_blank" rel="noopener noreferrer" className="text-[#8b2635] hover:text-[#a83246] transition-colors uppercase tracking-wider text-sm">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

// Contact info from document
const management = {
  company: "James Brown Management",
  website: "https://www.jamesbrownmanagement.com/artists/jose-salazar/",
  managers: [
    { name: "James Brown", title: "Artist Manager", email: "jb@jamesbrownmanagement.com", phone: "+44 (0) 1223 641750" },
    { name: "Jessica Grime", title: "Artist Manager", email: "jmg@jamesbrownmanagement.com", phone: "+44 (0) 7599 107 892" },
    { name: "Flora Dyson", title: "Assistant Artist Manager", email: "fd@jamesbrownmanagement.com", phone: "+44 (0) 1223 641753" },
  ],
};

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
    <main className="min-h-screen bg-[#faf9f7]">
      <Navigation t={t} lang={lang} onLangChange={handleLangChange} />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl text-[#1a1a1a] mb-6 md:mb-8">{t.title}</h1>
            <div className="w-16 md:w-24 h-[2px] bg-[#8b2635] mb-8 md:mb-12" />
            
            <p className="text-lg text-[#6b6b6b] mb-12 md:mb-16">
              {t.intro}
            </p>

            {/* General Management */}
            <div className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-[#1a1a1a] mb-6">{t.generalManagement}</h2>
              
              <div className="bg-white p-6 md:p-8 border border-[#e5e5e5]">
                <h3 className="font-display text-xl text-[#8b2635] mb-4">{management.company}</h3>
                
                <a 
                  href={management.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#6b6b6b] hover:text-[#8b2635] transition-colors mb-6"
                >
                  {management.website}
                </a>

                <div className="space-y-6">
                  {management.managers.map((manager, i) => (
                    <div key={i} className="pb-6 border-b border-[#e5e5e5] last:border-0 last:pb-0">
                      <h4 className="font-medium text-[#1a1a1a]">{manager.name}</h4>
                      <p className="text-sm text-[#8b2635] mb-2">{manager.title}</p>
                      <div className="space-y-1">
                        <a 
                          href={`mailto:${manager.email}`}
                          className="block text-sm text-[#6b6b6b] hover:text-[#8b2635] transition-colors"
                        >
                          {manager.email}
                        </a>
                        <a 
                          href={`tel:${manager.phone}`}
                          className="block text-sm text-[#6b6b6b] hover:text-[#8b2635] transition-colors"
                        >
                          {manager.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
