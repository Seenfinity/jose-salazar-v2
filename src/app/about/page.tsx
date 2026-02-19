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
    aboutTitle: "About",
    aboutText1: "Born in 1997, on Margarita Island, Venezuela, José Salazar is a young conductor with considerable experience, a wide repertoire and a flair for programming.",
    aboutText2: "He has been appointed Jette Parker Ballet Conductor at the Royal Opera House in London, working with the Royal Ballet until 2025. From 2018 until 2023, he worked as Artistic and Music Director of El Sistema Greece.",
    aboutText3: "Having initially come to prominence at around 14 years old, José has conducted innumerable concerts in his native Venezuela and abroad. His work has received coverage on China National TV, Reuters and in The Guardian amongst others.",
    aboutText4: "Recent highlights include José's US debut at the Walt Disney Concert Hall with the Symphony Orchestra of the YOLA National Festival, working under the guidance of Gustavo Dudamel (July 2024) and his Birmingham Royal Ballet debut conducting Sir Frederick Ashton's La Fille Mal Gardée (October 2024).",
  },
  es: {
    about: "Sobre Mí",
    education: "Educación",
    gallery: "Galería",
    performances: "Actuaciones",
    contact: "Contacto",
    aboutTitle: "Sobre Mí",
    aboutText1: "Nacido en 1997, en la isla de Margarita, Venezuela, José Salazar es un joven director con considerable experiencia, un amplio repertorio y un don para la programación.",
    aboutText2: "Ha sido nombrado Director del Ballet Jette Parker en el Royal Opera House de Londres, trabajando con el Royal Ballet hasta 2025. Desde 2018 hasta 2023, trabajó como Director Artístico y Musical de El Sistema Grecia.",
    aboutText3: "Habiendo irrumpido en escena alrededor de los 14 años, José ha dirigido innumerables conciertos en su Venezuela natal y en el extranjero. Su trabajo ha sido cubierto por China National TV, Reuters y The Guardian, entre otros.",
    aboutText4: "Highlights recientes incluyen el debut de José en EE.UU. en el Walt Disney Concert Hall con la Orquesta Sinfónica del YOLA National Festival, bajo la guía de Gustavo Dudamel (julio 2024) y su debut con el Birmingham Royal Ballet dirigiendo La Fille Mal Gardée de Sir Frederick Ashton (octubre 2024).",
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
            <Link
              key={item.id}
              href={item.href}
              className="text-sm text-[#6b6b6b] hover:text-[#1a4d2e] transition-colors uppercase tracking-wider"
            >
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

export default function AboutPage({ searchParams }: { searchParams: { lang?: string } }) {
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
    <main className="min-h-screen bg-white">
      <Navigation t={t} lang={lang} onLangChange={handleLangChange} />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl text-[#1a1a1a] mb-6 md:mb-8">{t.aboutTitle}</h1>
            <div className="w-16 md:w-24 h-[2px] bg-[#d4a72c] mb-8 md:mb-12" />
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80" 
                  alt="José Salazar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 text-[#6b6b6b] leading-relaxed">
                <p className="text-xl md:text-2xl text-[#1a1a1a] font-serif">{t.aboutText1}</p>
                <p className="text-base md:text-lg">{t.aboutText2}</p>
                <p className="text-base md:text-lg">{t.aboutText3}</p>
                <p className="text-base md:text-lg">{t.aboutText4}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
