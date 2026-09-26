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
    bio: `Recognised as a Classic FM 2025 Rising Star, José Salazar is a dynamic young conductor with extensive experience and a flair for programming. A Dudamel Fellow with the Los Angeles Philharmonic in the 2025/26 season, José made his podium debut with the orchestra at Walt Disney Concert Hall in March 2026, returning in August for his Hollywood Bowl debut, where he conducted alongside Gustavo Dudamel and prominent guest artists including Coldplay’s Chris Martin in a UNICEF fundraising concert supporting the Venezuela earthquake appeal. From 2023 to 2025, he was a Jette Parker Artist at Covent Garden’s Royal Opera House, working closely with the Royal Ballet, assisting on productions across two seasons, and conducting the renowned orchestra in several concert performances.

In the 2025/26 season, José returned to the Royal Ballet to lead performances of La Fille mal gardée at Covent Garden and on tour in Tokyo, and returned to Birmingham Royal Ballet for The Nutcracker. He also made debuts with New York City Ballet in a Triple Bill and the Greek National Opera Ballet conducting Giselle. Highlights of the 2026/27 season include debuts with Dutch National Ballet, La Scala Theatre Ballet, WDR Funkhausorchester, Sinfonia Smith Square, and the National Symphony Orchestra of Uzbekistan.

Other recent highlights include José’s US debut with the Symphony Orchestra of the YOLA National Festival at Walt Disney Concert Hall in July 2024 and his debut with the Simón Bolívar Symphony Orchestra in Caracas in April 2025.

Educated within the El Sistema programme, José held the position of Artistic and Music Director of El Sistema Greece between 2018 and 2023, where he curated and conducted concerts in the country’s leading venues and festivals. He continues to be a passionate advocate for music education, with recent projects including conducting Sing, Dance, Leap in June 2025 for Bradford City of Culture, featuring the Orchestra and Chorus of Opera North, dancers from the Royal Ballet and Northern Ballet, and a choir of hundreds of local children. He also led the Guildhall School of Music and Drama Symphony Orchestra in its recent The Orchestra Rocks performance at The Barbican, in partnership with Carnegie Hall’s acclaimed Link Up project. In the 2026/27 season, José will lead a project with the Edinburgh Youth Orchestra.

José began his conducting studies with Felipe Izcaray before continuing under Gregory Carreño at the Special Program for Academic Development in Caracas. He has since taken part in international masterclasses with distinguished conductors including Riccardo Muti, Dick van Gasteren, Manfred Huss, Rüdiger Bohn, Alejandro Posada, Rodolfo Saglimbeni, Eduardo Marturet, Christoph Eschenbach, and Michalis Economou. Recognised as an exceptional student, he was selected for an international exchange with the University of Göteborg, Sweden, to join its master’s programme in Orchestral Performance. In 2020, aged just 23, he was a finalist in the inaugural Arthur Nikisch Conducting Competition, and he has also served as assistant to Gustavo Dudamel and Christian Vasquez for major performances, recordings, and international tours.

Born in 1997 on Margarita Island, Venezuela, José first came to prominence as a teenager and has since conducted widely in Venezuela and abroad. His work has been profiled by Reuters, The Guardian, and China National TV. Born into a family of educators, he has a passion for languages, speaking Spanish, English, Italian and Greek fluently, and is currently learning French and German.

For more information contact Jessica Grime - jess@keynoteAM.com - + 44 (0) 7599 107 892

September 2026`,
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
    bio: `Reconocido por Classic FM como Rising Star 2025, José Salazar es un director de orquesta venezolano cuya trayectoria combina una sólida experiencia sinfónica y escénica con una especial inquietud por la creación de programas y por acercar la música a nuevos públicos. Su trabajo se caracteriza por una profunda curiosidad artística, una marcada versatilidad y el deseo de establecer conexiones entre repertorios, culturas y generaciones.

Durante la temporada 2025/26 fue Dudamel Fellow de la Filarmónica de Los Ángeles, una experiencia que culminó con su debut al frente de la orquesta en el Walt Disney Concert Hall en marzo de 2026. En agosto regresó a Los Ángeles para debutar en el Hollywood Bowl, donde dirigió junto a Gustavo Dudamel y destacados artistas invitados, entre ellos Chris Martin, de Coldplay, en un concierto benéfico de UNICEF destinado a apoyar la respuesta humanitaria tras el terremoto de Venezuela.

Su estrecha relación con el mundo de la danza ocupa un lugar central en su trayectoria. Entre 2023 y 2025 fue Jette Parker Artist en la Royal Opera House de Covent Garden, donde trabajó durante dos temporadas junto al Royal Ballet, colaborando en numerosas producciones y dirigiendo a la orquesta en varios conciertos. En la temporada 2025/26 regresó al Royal Ballet para dirigir La Fille mal gardée en Covent Garden y durante su gira por Tokio, además de El cascanueces con el Birmingham Royal Ballet. También debutó con el New York City Ballet en un programa triple y con el Ballet de la Ópera Nacional de Grecia, dirigiendo Giselle.

La temporada 2026/27 amplía su actividad internacional con debuts junto al Dutch National Ballet, el Ballet del Teatro alla Scala de Milán, la WDR Funkhausorchester, Smith Square Sinfonia y la Orquesta Sinfónica Nacional de Uzbekistán.

Entre sus recientes compromisos sinfónicos destacan su debut en Estados Unidos con la Orquesta Sinfónica del YOLA National Festival en el Walt Disney Concert Hall, en julio de 2024, y su debut con la Orquesta Sinfónica Simón Bolívar en Caracas, en abril de 2025. A lo largo de su carrera también ha trabajado como asistente de Gustavo Dudamel y Christian Vásquez en importantes conciertos, grabaciones y giras internacionales, manteniendo una estrecha relación con El Sistema en Venezuela, a su vez dirigiendo distintos ensambles de nivel profesional y juvenil.

La educación musical y el acceso a la música forman igualmente una parte esencial de su identidad artística. Formado en el programa El Sistema, José fue Director Artístico y Musical de El Sistema Greece entre 2018 y 2023, donde diseñó y dirigió conciertos en algunos de los principales teatros y festivales del país. Desde entonces, ha continuado desarrollando proyectos que sitúan la educación, la participación y la creación colectiva en el centro de la experiencia orquestal.

Entre estos proyectos destaca Sing, Dance, Leap, presentado en junio de 2025 en el marco de Bradford City of Culture, que reunió a la Orquesta y Coro de Opera North, bailarines del Royal Ballet y Northern Ballet, y cientos de niños de la comunidad local. También dirigió a la Orquesta Sinfónica de la Guildhall School of Music and Drama en The Orchestra Rocks, presentado en The Barbican en colaboración con el reconocido proyecto Link Up del Carnegie Hall. En la temporada 2026/27 continuará esta labor con un nuevo proyecto junto a la Edinburgh Youth Orchestra.

José inició sus estudios de dirección con Felipe Izcaray y posteriormente continuó su formación con Gregory Carreño en el Programa Especial de Desarrollo Académico de Caracas. Ha participado en clases magistrales con maestros como Riccardo Muti, Dick van Gasteren, Manfred Huss, Rüdiger Bohn, Alejandro Posada, Rodolfo Saglimbeni, Eduardo Marturet, Christoph Eschenbach y Michalis Economou. Seleccionado como estudiante destacado para un intercambio internacional con la Universidad de Gotemburgo, Suecia, participó en las clases del máster en Interpretación Orquestal y pedagogía musical. En 2020, con 23 años, fue finalista de la primera edición del Arthur Nikisch Conducting Competition.

Nacido en 1997 en la Isla de Margarita, Venezuela, José comenzó a destacar como director desde su adolescencia y desde entonces ha desarrollado una carrera internacional en los ámbitos sinfónico, operístico y coreográfico. Su trabajo ha sido recogido por Reuters, The Guardian y la televisión nacional de China.

Hijo de una familia de educadores y apasionado por los idiomas, José habla español, inglés, italiano y griego con fluidez, y actualmente estudia francés y alemán. Su trayectoria artística refleja una identidad formada entre distintas culturas y tradiciones, y una visión de la dirección de orquesta entendida no sólo como interpretación, sino también como una forma de conectar personas, repertorios y comunidades.`,
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
            
            <div className="clear-both">
              <img 
                src="/about-hero.jpg" 
                alt="José Salazar"
                className="float-left mr-8 mb-4 w-full md:w-1/2 max-w-md"
              />
              <div className="text-[#6b6b6b] leading-relaxed">
                {t.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg text-justify mb-4">{paragraph}</p>
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
