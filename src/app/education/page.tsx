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
    title: "Education",
    intro: "José believes in access to education and artistic quality as a powerful tool for social development. Coming from \"El Sistema\" in Venezuela, where he had full access to music education and performance opportunities, he has taken on the mission to ensure music learning of the highest quality is made accessible, considering also the holistic and personal development of every participant.",
    body: `He has been engaged as a conductor, group leader, and teaching artist in different global initiatives such as the Academy of Impact Through Music (AIM) and the International Teaching Artist Collaborative (ITAC), where he participated in global discussions to contribute solutions for the improvement and enhancement of the arts education field, especially related to music.

He has had the chance to collaborate and consult with different music education programs around the world such as Sounds of Palestine, Beirut Chants-El Sistema (Lebanon), Nucleo (UK), Dream Orchestra (Sweden), Orquesta Geração (Portugal), Acción por la música (Spain), El Sistema Cyprus, Liberamusica (Italy), Orchestras for All (UK), Saint Lucia School of Music, FOSJE (Ecuador), among others, and he was, for five years, the artistic and music director of El Sistema Greece, a music education program for social action, where he worked for the development of the artistic planning, the academic structure, and the delivery of the educational program.

As part of his work as a promoter for El Sistema Greece, José has conducted lectures on the topics of human rights, education, and music for social action in different institutions such as University of Berklee Valencia, University of Applied Arts in Vienna, Tata Institute of Social Sciences Mumbai, and Forward College Lisbon.

In his native Venezuela, José served as Music Director of the Nueva Esparta Youth Symphony Orchestra from 2012 to 2016, working hard on community engagement, management, and artistic planning. He continues to collaborate with El Sistema in Venezuela, where he is regularly invited to conduct professional and youth orchestras, and mentor young conductors.`,
  },
  es: {
    nav: {
      about: "Sobre Mí",
      education: "Educación",
      gallery: "Galería",
      performances: "Actuaciones",
      contact: "Contacto",
    },
    title: "Educación",
    intro: "José cree en el acceso a la educación y la calidad artística como una herramienta poderosa para el desarrollo social. Proveniente de \"El Sistema\" en Venezuela, donde tuvo acceso completo a la educación musical y oportunidades de actuación, ha asumido la misión de garantizar que el aprendizaje musical de la más alta calidad sea accesible, considerando también el desarrollo holístico y personal de cada participante.",
    body: `Ha participado como director, líder de grupo y artista docente en diferentes iniciativas globales como la Academy of Impact Through Music (AIM) y el International Teaching Artist Collaborative (ITAC), donde participó en discusiones globales para contribuir con soluciones para la mejora y el enriquecimiento del campo de la educación artística, especialmente relacionada con la música.

Ha tenido la oportunidad de colaborar y consultar con diferentes programas de educación musical alrededor del mundo como Sounds of Palestine, Beirut Chants-El Sistema (Líbano), Nucleo (UK), Dream Orchestra (Suecia), Orquesta Geração (Portugal), Acción por la música (España), El Sistema Cyprus, Liberamusica (Italia), Orchestras for All (UK), Saint Lucia School of Music, FOSJE (Ecuador), entre otros, y fue, durante cinco años, el director artístico y musical de El Sistema Grecia, un programa de educación musical para la acción social, donde trabajó en el desarrollo de la planificación artística, la estructura académica y la entrega del programa educativo.

Como parte de su trabajo como promotor en El Sistema Grecia, José ha impartido conferencias sobre los temas de derechos humanos, educación y música para la acción social en diferentes instituciones como la Universidad de Berklee Valencia, la Universidad de Artes Aplicadas de Viena, el Tata Institute of Social Sciences Mumbai y Forward College Lisboa.

En su Venezuela natal, José se desempeñó como Director Musical de la Orquesta Juvenil de Nueva Esparta desde 2012 hasta 2016, trabajando duro en la participación comunitaria, gestión y planificación artística. Continúa colaborar con El Sistema en Venezuela, donde regularmente es invitado a dirigir orquestas profesionales y juveniles, y mentorizar a jóvenes directores.`,
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
        <Link href="/intro" className="flex items-center gap-2 font-display text-xl md:text-2xl font-bold text-[#d4a72c]">
          <img src="/logo-nav.png" alt="Logo" className="w-6 h-6" />
          José Salazar
        </Link>
        
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-sm text-[#6b6b6b] hover:text-[#d4a72c] transition-colors uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="ml-4 px-3 py-1 text-xs border border-[#d4a72c] text-[#d4a72c] hover:bg-[#d4a72c] hover:text-white transition-colors"
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
                  className="text-left text-lg text-[#6b6b6b] hover:text-[#d4a72c] transition-colors uppercase tracking-wider py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button onClick={toggleLang} className="text-left text-lg text-[#d4a72c] py-2">
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
        <p className="text-sm text-[#6b6b6b] mb-4">© 2026 José Salazar. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/josesalazarconductor" target="_blank" rel="noopener noreferrer" className="text-[#d4a72c] hover:text-[#b8962e] transition-colors uppercase tracking-wider text-sm">Instagram</a>
          <a href="https://youtube.com/@jasalazarconductor" target="_blank" rel="noopener noreferrer" className="text-[#d4a72c] hover:text-[#b8962e] transition-colors uppercase tracking-wider text-sm">YouTube</a>
        </div>
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

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <Navigation t={t} lang={lang} onLangChange={handleLangChange} />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl text-[#1a1a1a] mb-6 md:mb-8">{t.title}</h1>
            <div className="w-16 md:w-24 h-[2px] bg-[#d4a72c] mb-8 md:mb-12" />
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden h-fit">
                <img 
                  src="/education-preview.jpg" 
                  alt="José Salazar - Education"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-start space-y-6 text-[#6b6b6b] leading-relaxed max-w-2xl">
                <p className="text-xl md:text-2xl text-[#1a1a1a] font-serif text-justify">{t.intro}</p>
                {t.body.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg text-justify">{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
