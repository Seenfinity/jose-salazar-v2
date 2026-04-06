"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Language = "en" | "es";

const translations = {
  en: {
    welcomeTitle: "José Salazar",
    welcomeSubtitle: "Orchestral Conductor",
    welcomeText: "Dear Visitor, welcome to my webpage, and thank you for taking a look at my work.",
    enter: "Enter",
    selectLanguage: "Select Language",
    nav: {
      about: "About",
      education: "Education",
      gallery: "Gallery",
      performances: "Performances",
      contact: "Contact",
    },
    home: {
      heroTitle: "Conducting Excellence",
      dudamel: "Dudamel Fellow of the LAPhil (USA) (2025 - 2026)",
      jetteParker: "Jette Parker Ballet Conductor at the Royal Opera House (UK) 2023 - 2025",
      artisticDirector: "Artistic Director of El Sistema Greece (2018 - 2023)",
      aboutTitle: "About",
      aboutPreview: "Featured as a Classic FM 2025 Rising Star and currently a Dudamel Fellow with the Los Angeles Philharmonic (2025/26), José Salazar is a dynamic young conductor with extensive experience and a flair for programming...",
      educationTitle: "Education",
      educationPreview: "José believes in access to education and artistic quality as a powerful tool for social development. Coming from El Sistema in Venezuela...",
      galleryTitle: "Gallery",
      galleryPreview: "Watch performance videos and explore photos from concerts and rehearsals.",
      performancesTitle: "Performances",
      performancesPreview: "View the complete schedule of upcoming performances and past appearances.",
      contactTitle: "Contact",
      contactPreview: "Get in touch for bookings and inquiries.",
      viewMore: "View More",
    },
    footer: {
      copyright: "© 2026 José Salazar.",
      instagram: "Instagram",
      youtube: "YouTube",
    },
  },
  es: {
    welcomeTitle: "José Salazar",
    welcomeSubtitle: "Director de Orquesta",
    welcomeText: "Querido lector, gracias por visitar mi sitio web y echar un ojo a mi trabajo.",
    enter: "Entrar",
    selectLanguage: "Seleccionar Idioma",
    nav: {
      about: "Sobre Mí",
      education: "Educación",
      gallery: "Galería",
      performances: "Actuaciones",
      contact: "Contacto",
    },
    home: {
      heroTitle: "Excelencia en la Dirección",
      dudamel: "Dudamel Fellow de LAPhil (USA) (2025 - 2026)",
      jetteParker: "Director de Ballet Jette Parker en el Royal Opera House (UK) 2023 - 2025",
      artisticDirector: "Director Artístico de El Sistema Greece (2018 - 2023)",
      aboutTitle: "Sobre Mí",
      aboutPreview: "Destacado como Rising Star de Classic FM 2025 y actualmente Dudamel Fellow con la Filarmónica de Los Ángeles (2025/26), José Salazar es un director joven dinámico con amplia experiencia...",
      educationTitle: "Educación",
      educationPreview: "José cree en el acceso a la educación artística y la calidad como una herramienta poderosa para el desarrollo social. Proveniente de El Sistema en Venezuela...",
      galleryTitle: "Galería",
      galleryPreview: "Mira videos de actuaciones y explora fotos de conciertos y ensayos.",
      performancesTitle: "Actuaciones",
      performancesPreview: "Consulta el calendario completo de actuaciones próximas y pasadas.",
      contactTitle: "Contacto",
      contactPreview: "Ponte en contacto para reservas e inquiries.",
      viewMore: "Ver Más",
    },
    footer: {
      copyright: "© 2026 José Salazar.",
      instagram: "Instagram",
      youtube: "YouTube",
    },
  },
};

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

// Landing Page
function LandingPage({ onEnter, lang, onLangChange }: { onEnter: () => void; lang: Language; onLangChange: (l: Language) => void }) {
  const t = translations[lang];
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="/intro-bg.jpg" 
          alt="José Salazar conducting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2818]/50 via-[#0f2818]/30 to-[#0f2818]/50" />
      </div>
      
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
        <div className="flex items-center justify-center gap-4 mb-4">
          <img 
            src="/logo-salazar.png" 
            alt="Logo" 
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white">
            {t.welcomeTitle}
          </h1>
        </div>
        <p className="text-[#d4a72c] uppercase tracking-[0.3em] text-sm md:text-base mb-6">
          {t.welcomeSubtitle}
        </p>
        <p className="text-white text-lg mb-8 max-w-xl mx-auto italic">
          {t.welcomeText}
        </p>
        
        <button
          onClick={onEnter}
          className="px-8 py-4 bg-[#d4a72c] text-white hover:bg-[#b8962e] transition-colors uppercase tracking-wider text-lg"
        >
          {t.enter}
        </button>
        
        <div className="mt-16 flex flex-col gap-3">
          <p className="text-[white] text-sm">{t.selectLanguage}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onLangChange("en")}
              className={`px-4 py-2 border transition-colors ${lang === "en" ? "border-[#d4a72c] text-[#d4a72c]" : "border-[white] text-black bg-white hover:bg-gray-100"}`}
            >
              English
            </button>
            <button
              onClick={() => onLangChange("es")}
              className={`px-4 py-2 border transition-colors ${lang === "es" ? "border-[#d4a72c] text-[#d4a72c]" : "border-[white] text-black bg-white hover:bg-gray-100"}`}
            >
              Español
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Photo credits */}
      <div className="absolute bottom-4 right-4 text-white text-xs">
        Photo by Elly Welford
      </div>
    </div>
  );
}

// Navigation
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

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center gap-2 p-2"
        >
          <span className="text-sm text-[#1a1a1a] uppercase font-medium">Menu</span>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-[#1a1a1a] transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-[#1a1a1a] ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-[#1a1a1a] transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
              <button
                onClick={toggleLang}
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

// Home Hero Slide
function HeroSlide({ t }: { t: typeof translations.en }) {
  return (
    <section className="min-h-screen pt-16 md:pt-20 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-120px)]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <p className="text-[#d4a72c] uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4">{t.welcomeSubtitle}</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-[0.95] mb-4 md:mb-6">
              {t.home.heroTitle.split(" ")[0]}<br />
              <span className="italic text-[#d4a72c]">{t.home.heroTitle.split(" ").slice(1).join(" ")}</span>
            </h1>
            <div className="space-y-2 text-base md:text-lg text-[#1a1a1a] max-w-md mx-auto md:mx-0 mb-6 md:mb-8">
              <p>{t.home.dudamel}</p>
              <p>{t.home.jetteParker}</p>
              <p>{t.home.artisticDirector}</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-[3/4] max-h-[50vh] md:max-h-none overflow-hidden">
              <img 
                src="/hero-main.jpg" 
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

// Preview Slide Component
function PreviewSlide({ 
  title, 
  preview, 
  image, 
  link, 
  lang 
}: { 
  title: string; 
  preview: string; 
  image: string;
  link: string;
  lang: Language;
}) {
  const t = translations[lang];
  
  return (
    <section className="py-16 md:py-24 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#f0f0f0]">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-4 md:mb-6">
              {title}
            </h2>
            <p className="text-[#6b6b6b] text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-md">
              {preview}
            </p>
            <Link
              href={link}
              className="inline-block px-6 md:px-8 py-3 bg-[#d4a72c] text-white hover:bg-[#b8962e] transition-colors uppercase tracking-wider text-sm"
            >
              {t.home.viewMore}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Alternate layout preview slide
function PreviewSlideAlt({ 
  title, 
  preview, 
  image, 
  link,
  lang,
  video 
}: { 
  title: string; 
  preview: string; 
  image: string;
  link: string;
  lang: Language;
  video?: string;
}) {
  const t = translations[lang];
  
  return (
    <section className="py-16 md:py-24 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-4 md:mb-6">
              {title}
            </h2>
            <p className="text-[#6b6b6b] text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-md">
              {preview}
            </p>
            <Link
              href={link}
              className="inline-block px-6 md:px-8 py-3 bg-[#d4a72c] text-white hover:bg-[#b8962e] transition-colors uppercase tracking-wider text-sm"
            >
              {t.home.viewMore}
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            {video ? (
              <div className="aspect-video overflow-hidden">
                <iframe 
                  src={video}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
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
        <p className="text-sm text-[#6b6b6b] mb-4">
          {t.footer.copyright} Photo by Lope Valles.
        </p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.instagram.com/jasalazarmarin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#d4a72c] hover:text-[#b8962e] transition-colors uppercase tracking-wider text-sm"
          >
            {t.footer.instagram}
          </a>
          <a 
            href="https://youtube.com/@jasalazarconductor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#d4a72c] hover:text-[#b8962e] transition-colors uppercase tracking-wider text-sm"
          >
            {t.footer.youtube}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home({ searchParams }: { searchParams: { lang?: string } }) {
  const router = useRouter();
  const [showLanding, setShowLanding] = useState(true);
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

  const handleEnter = () => {
    router.push("/intro");
  };

  if (!mounted) {
    return null;
  }

  const t = translations[lang];

  // Sample images - TODO: Replace with actual images from Drive
  const aboutImage = "/about-hero.jpg";
  const educationImage = "/education-preview.jpg";
  const galleryImage = "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80";
  const performancesImage = "/performances-preview.jpg";
  const contactImage = "/contact-preview.jpg";

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
            <Navigation t={t} lang={lang} onLangChange={handleLangChange} />
            
            {/* Hero Slide */}
            <HeroSlide t={t} />
            
            {/* About Preview */}
            <PreviewSlide 
              title={t.home.aboutTitle}
              preview={t.home.aboutPreview}
              image={aboutImage}
              link="/about"
              lang={lang}
            />
            
            {/* Education Preview - alternate layout */}
            <PreviewSlideAlt
              title={t.home.educationTitle}
              preview={t.home.educationPreview}
              image={educationImage}
              link="/education"
              lang={lang}
            />
            
            {/* Gallery Preview - with video */}
            <PreviewSlideAlt
              title={t.home.galleryTitle}
              preview={t.home.galleryPreview}
              image={galleryImage}
              link="/gallery"
              lang={lang}
              video="https://www.youtube.com/embed/97_IlMryI-A"
            />
            
            {/* Performances Preview */}
            <PreviewSlide
              title={t.home.performancesTitle}
              preview={t.home.performancesPreview}
              image={performancesImage}
              link="/schedule"
              lang={lang}
            />
            
            {/* Contact Preview */}
            <PreviewSlideAlt
              title={t.home.contactTitle}
              preview={t.home.contactPreview}
              image={contactImage}
              link="/contact"
              lang={lang}
            />
            
            <Footer t={t} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
