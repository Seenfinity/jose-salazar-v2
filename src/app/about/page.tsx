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
    nav: {
      about: "About",
      education: "Education",
      gallery: "Gallery",
      performances: "Performances",
      contact: "Contact",
    },
    title: "Biography",
    downloadPDF: "Download PDF",
    bio: `Featured as a Classic FM 2025 Rising Star and currently a Dudamel Fellow with the Los Angeles Philharmonic (2025/26), José Salazar is a dynamic young conductor with extensive experience and a flair for programming. From 2023 to 2025 he was a Jette Parker Artist at Covent Garden's Royal Opera House, working closely with the Royal Ballet, assisting on productions across two seasons, and conducting the renowned orchestra in several concert performances. Previously, as Artistic and Music Director of El Sistema Greece (2018–2023), he curated and conducted concerts in the country's leading venues and festivals while also appearing as a guest conductor internationally.

In the 2025/26 season José returns to the Royal Ballet for performances of La Fille mal gardée at Covent Garden and on tour in Tokyo, to Birmingham Royal Ballet for The Nutcracker, and makes his debut with the Greek National Opera Ballet (Giselle). As a Dudamel Fellow he will conduct and cover concerts at Walt Disney Concert Hall and the Hollywood Bowl, making his podium debut with the LA Philharmonic in March 2026 with a programme including Beethoven's Symphony No. 7, Mendelssohn's Violin Concerto in E minor, and Gabriela Ortiz's Kauyumari, commissioned by the orchestra.

Recent highlights include his US debut with the Symphony Orchestra of the YOLA National Festival at Walt Disney Concert Hall (July 2024), his debut with Birmingham Royal Ballet (La Fille mal gardée, October 2024), his debut with the Simón Bolívar Symphony Orchestra in Caracas (April 2025), and conducting Sing, Dance, Leap in June 2025 – a flagship project for Bradford City of Culture featuring the Orchestra and Chorus of Opera North, dancers from the Royal Ballet and Northern Ballet, and a choir of hundreds of local children.

Educated within El Sistema, José began his conducting studies with Felipe Izcaray before continuing under Gregory Carreño at the Special Program for Academic Development in Caracas. He has since taken part in international masterclasses with distinguished conductors including Riccardo Muti, Dick van Gasteren, Manfred Huss, Rüdiger Bohn, Alejandro Posada, Philippe Auguin, Eduardo Marturet, and Christoph Eschenbach. Recognised as an exceptional student, he was selected for an international exchange with the University of Göteborg, Sweden, to join its master's program in Orchestral Performance. In 2020, aged just 23, he was a finalist in the inaugural Arthur Nikisch Conducting Competition, and he has also served as assistant to Gustavo Dudamel and Christian Vasquez for major performances, recordings, and international tours.

Born in 1997 on Margarita Island, Venezuela, José first came to prominence as a teenager and has since conducted widely in Venezuela and abroad. His work has been profiled by Reuters, The Guardian, and China National TV. Born to a family of educators, he is also a passionate linguist, fluent in Spanish, English, Italian, and Greek, and currently learning French and German.

Promoters please note: We update our biographies regularly and ask that they are not altered without permission. For updated versions, please e-mail: Flora Dyson at fd@jamesbrownmanagement.com`,
    footer: {
      copyright: "© 2026 José Salazar.",
      allRights: "All rights reserved.",
      instagram: "Instagram",
      youtube: "YouTube",
    },
  },
  es: {
    nav: {
      about: "Sobre Mí",
      education: "Educación",
      gallery: "Galería",
      performances: "Actuaciones",
      contact: "Contacto",
    },
    title: "Biografía",
    downloadPDF: "Descargar PDF",
    bio: `Destacado como Rising Star de Classic FM 2025 y actualmente Dudamel Fellow con la Filarmónica de Los Ángeles (2025/26), José Salazar es un joven director dinámico con amplia experiencia y talento para la programación. De 2023 a 2025 fue Artista Jette Parker en el Royal Opera House de Covent Garden, trabajando estrechamente con el Royal Ballet, asistiendo en producciones durante dos temporadas y dirigiendo la reconocida orquesta en varios conciertos. Anteriormente, como Director Artístico y Musical de El Sistema Grecia (2018-2023), curó y dirigió conciertos en los principales escenarios y festivales del país, mientras actuaba como director invitado internacionalmente.

En la temporada 2025/26, José regresa al Royal Ballet para actuaciones de La Fille mal gardée en Covent Garden y de gira en Tokio, a Birmingham Royal Ballet para El Cascanueces, y debuta con el Ballet de la Ópera Nacional de Grecia (Giselle). Como Dudamel Fellow, dirigirá y cubrirá conciertos en Walt Disney Concert Hall y el Hollywood Bowl, haciendo su debut en el podio con la LA Philharmonic en marzo de 2026 con un programa que incluye la Sinfonía No. 7 de Beethoven, el Concierto para Violín en Mi menor de Mendelssohn, y Kauyumari de Gabriela Ortiz, encargado por la orquesta.

Highlights recientes incluyen su debut en EE.UU. con la Orquesta Sinfónica del YOLA National Festival en Walt Disney Concert Hall (julio 2024), su debut con Birmingham Royal Ballet (La Fille mal gardée, octubre 2024), su debut con la Orquesta Sinfónica Simón Bolívar en Caracas (abril 2025), y Sing, Dance, Leap en junio de 2025 – un proyecto insignia para Bradford City of Culture con la Orquesta y Coro de Opera North, bailarines del Royal Ballet y Northern Ballet, y un coro de cientos de niños locales.

Educado dentro de El Sistema, José comenzó sus estudios de dirección con Felipe Izcaray antes de continuar bajo Gregory Carreño en el Programa Especial de Desarrollo Académico en Caracas. Desde entonces ha participado en masterclasses internacionales con directores distinguidos incluyendo Riccardo Muti, Dick van Gasteren, Manfred Huss, Rüdiger Bohn, Alejandro Posada, Philippe Auguin, Eduardo Marturet y Christoph Eschenbach. Reconocido como un estudiante excepcional, fue seleccionado para un intercambio internacional con la Universidad de Göteborg, Suecia, para unirse a su programa de maestría en Interpretación Orquestal. En 2020, con solo 23 años, fue finalista en el Concurso de Dirección Arthur Nikisch, y también ha asistido a Gustavo Dudamel y Christian Vasquez para grandes actuaciones, grabaciones y giras internacionales.

Nacido en 1997 en la isla de Margarita, Venezuela, José llamó la atención por primera vez como adolescente y desde entonces ha dirigido ampliamente en Venezuela y en el extranjero. Su trabajo ha sido perfilado por Reuters, The Guardian y China National TV. Nacido en una familia de educadores, también es un apasionado lingüista, fluido en español, inglés, italiano y griego, y actualmente aprendiendo francés y alemán.

Promotores por favor_nota: Actualizamos nuestras biografías regularmente y solicitamos que no sean alteradas sin permiso. Para versiones actualizadas, por favor envíe un correo a: Flora Dyson en fd@jamesbrownmanagement.com`,
    footer: {
      copyright: "© 2026 José Salazar.",
      allRights: "Todos los derechos reservados.",
      instagram: "Instagram",
      youtube: "YouTube",
    },
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
        <Link href="/" className="flex items-center gap-2 font-display text-xl md:text-2xl font-bold text-[#d4a72c]">
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

function Footer({ t }: { t: any }) {
  return (
    <footer className="py-6 md:py-8 px-4 md:px-6 bg-[#faf9f7] border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[#6b6b6b] mb-4">{t.footer.copyright} {t.footer.allRights}</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/josesalazarconductor" target="_blank" rel="noopener noreferrer" className="text-[#d4a72c] hover:text-[#b8962e] transition-colors uppercase tracking-wider text-sm">{t.footer.instagram}</a>
          <a href="https://youtube.com/@jasalazarconductor" target="_blank" rel="noopener noreferrer" className="text-[#d4a72c] hover:text-[#b8962e] transition-colors uppercase tracking-wider text-sm">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

import { AnimatePresence } from "framer-motion";

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
                  src="/about-hero.jpg" 
                  alt="José Salazar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-start space-y-6 text-[#6b6b6b] leading-relaxed">
                {t.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg">{paragraph}</p>
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
