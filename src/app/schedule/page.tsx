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
    title: "Performances",
    upcoming: "2025/26 Season",
    past2024: "2024/2025",
    past2023: "2023/2024",
  },
  es: {
    nav: {
      about: "Sobre Mí",
      education: "Educación",
      gallery: "Galería",
      performances: "Actuaciones",
      contact: "Contacto",
    },
    title: "Actuaciones",
    upcoming: "Temporada 2025/26",
    past2024: "2024/2025",
    past2023: "2023/2024",
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

// Performance data from document
interface Performance {
  date: string;
  event: string;
  venue: string;
  location: string;
  role: string;
  notes?: string;
}

const upcomingPerformances: Performance[] = [
  { date: "Sep 2025", event: "Márquez's Fandango & Shostakovich's Fifth", venue: "Los Angeles Philharmonic", location: "Walt Disney Concert Hall", role: "Cover Conductor" },
  { date: "Sep 2025", event: "Mozart's Requiem", venue: "Los Angeles Philharmonic", location: "Walt Disney Concert Hall", role: "Cover Conductor" },
  { date: "Sep 5-6 2025", event: "Josh Groban with the LA Phil", venue: "Los Angeles Philharmonic", location: "Walt Disney Concert Hall", role: "Cover Conductor" },
  { date: "Sep 2025", event: "Dvořák & Marsalis", venue: "Los Angeles Philharmonic", location: "Walt Disney Concert Hall", role: "Cover Conductor" },
  { date: "Sep 2025", event: "Romeo, Juliet & Dance Theatre of Harlem", venue: "Los Angeles Philharmonic", location: "Walt Disney Concert Hall", role: "Cover Conductor" },
  { date: "Oct-Nov 2025", event: "La Fille mal gardée", venue: "Royal Ballet", location: "Covent Garden, London", role: "Conductor" },
  { date: "Nov 30 2025", event: "Inspirational Folk Music from the Americas", venue: "Bardi Symphony Orchestra", location: "London, UK", role: "Conductor" },
  { date: "Dec 2025-Jan 2026", event: "Giselle", venue: "Greek National Ballet", location: "Athens, Greece", role: "Conductor" },
  { date: "Jan-Feb 2026", event: "Balanchine + Ratmansky", venue: "New York City Ballet", location: "NY, USA", role: "Conductor" },
  { date: "Jan-Feb 2026", event: "Masters at Work", venue: "New York City Ballet", location: "NY, USA", role: "Cover Conductor" },
  { date: "Feb 12-15 2026", event: "Dudamel Conducts Beethoven and Lorenz", venue: "Los Angeles Philharmonic", location: "Walt Disney Concert Hall", role: "Cover Conductor" },
  { date: "Feb 20-22 2026", event: "Gustavo Conducts Beethoven: Missa Solemnis", venue: "Los Angeles Philharmonic", location: "Walt Disney Concert Hall", role: "Cover Conductor" },
  { date: "Mar 13-16 2026", event: "John Williams & Rachmaninoff", venue: "Los Angeles Philharmonic", location: "Walt Disney Concert Hall", role: "Cover Conductor" },
  { date: "Apr 17-19 2026", event: "Shostakovich & Sibelius", venue: "Los Angeles Philharmonic", location: "Walt Disney Concert Hall", role: "Cover Conductor" },
  { date: "Apr 25-26 2026", event: "John Adams & Víkingur Ólafsson", venue: "Los Angeles Philharmonic", location: "Walt Disney Concert Hall", role: "Cover Conductor" },
  { date: "May-Jun 2026", event: "La Fille mal gardée", venue: "Royal Ballet", location: "Covent Garden, London", role: "Conductor" },
  { date: "Jun-Jul 2026", event: "Royal Ballet on Tour: Japan", venue: "The Royal Ballet", location: "Tokyo, Japan", role: "Conductor" },
];

const pastPerformances2024: Performance[] = [
  { date: "Jul 2024", event: "YOLA National Festival", venue: "Symphony Orchestra of the YOLA National Festival", location: "Walt Disney Concert Hall, Los Angeles", role: "Conductor", notes: "US Debut" },
  { date: "Oct 2024", event: "La Fille Mal Gardée", venue: "Birmingham Royal Ballet", location: "Birmingham Hippodrome", role: "Conductor", notes: "UK Debut" },
  { date: "Apr 2025", event: "Simón Bolívar Symphony Orchestra", venue: "Sala Simón Bolívar", location: "Caracas, Venezuela", role: "Guest Conductor", notes: "Debut" },
  { date: "Jun 2025", event: "Sing, Dance, Leap", venue: "Orchestra and Chorus of Opera North", location: "Bradford City of Culture", role: "Conductor", notes: "" },
  { date: "Mar-Apr 2025", event: "Romeo and Juliet", venue: "Royal Opera House", location: "Covent Garden", role: "Off-stage/ Cover Conductor" },
  { date: "Feb-Mar 2025", event: "Light of Passage", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
  { date: "Jan-Feb 2025", event: "Oneguin", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
  { date: "Dec 2024-Jan 2025", event: "Cinderella", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
  { date: "Nov-Dec 2024", event: "Tosca", venue: "Royal Opera House", location: "Covent Garden", role: "Off-stage Conductor" },
  { date: "Nov 2024", event: "Maddaddam", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
  { date: "Oct-Nov 2024", event: "Encounters: 4 Contemporary Ballets", venue: "Royal Opera House", location: "Covent Garden", role: "Off-stage/ Cover Conductor" },
  { date: "Sep-Oct 2024", event: "Alice in Wonderland", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
];

const pastPerformances2023: Performance[] = [
  { date: "Jul 2024", event: "Jette Parker Artists Summer Performance", venue: "Royal Opera House", location: "London", role: "Conductor" },
  { date: "Jun 2024", event: "Strauss, Wagner, Copland", venue: "Paul Hymlyn Hall, Royal Opera House", location: "London", role: "Conductor" },
  { date: "Apr 2024", event: "Tchaikovsky Program", venue: "Sala Simón Bolívar", location: "Caracas, Venezuela", role: "Guest Conductor" },
  { date: "Apr 2024", event: "Beethoven Program", venue: "Simon Bolivar Chamber Orchestra", location: "Caracas, Venezuela", role: "Guest Conductor" },
  { date: "Mar 2024", event: "Danse Concertante/Different Drummer/Requiem", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
  { date: "Mar 2024", event: "Mendelssohn, Haydn, J.B. Plaza", venue: "Wessex Sinfonietta", location: "Royal Victoria Chapel, Netley", role: "Conductor" },
  { date: "Mar-Jun 2024", event: "Swan Lake", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
  { date: "Feb 2024", event: "Festival of New Choreography", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
  { date: "Feb 2024", event: "Manon", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
  { date: "Dec 2023-Jan 2024", event: "The Nutcracker", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
  { date: "Nov 2023", event: "The Dante Project", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
  { date: "Oct-Nov 2023", event: "Anemoi/The Cellist", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
  { date: "Sep-Oct 2023", event: "Don Quixote", venue: "Royal Opera House", location: "Covent Garden", role: "Cover Conductor" },
];

function PerformanceItem({ performance, isPast = false }: { performance: typeof upcomingPerformances[0]; isPast?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`py-4 md:py-6 border-b border-[#e5e5e5] ${isPast ? 'opacity-75' : ''}`}
    >
      <div className="flex flex-col md:flex-row md:gap-6">
        <div className="w-full md:w-32 flex-shrink-0 mb-2 md:mb-0">
          <span className={`text-sm ${isPast ? 'text-[#6b6b6b]' : 'text-[#d4a72c]'} font-medium`}>
            {performance.date}
          </span>
        </div>
        <div className="flex-grow mb-2 md:mb-0">
          <h3 className="font-display text-lg md:text-xl text-[#1a1a1a]">{performance.event}</h3>
          <p className="text-sm md:text-base text-[#6b6b6b]">{performance.venue}</p>
          {performance.notes && (
            <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-[#d4a72c]/10 text-[#d4a72c]">
              {performance.notes}
            </span>
          )}
        </div>
        <div className="w-full md:w-48 md:text-right">
          <p className="text-sm text-[#6b6b6b]">{performance.location}</p>
          <p className="text-xs text-[#d4a72c] mt-1">{performance.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SchedulePage({ searchParams }: { searchParams: { lang?: string } }) {
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
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl text-[#1a1a1a] mb-6 md:mb-8">{t.title}</h1>
            <div className="w-16 md:w-24 h-[2px] bg-[#d4a72c] mb-10 md:mb-16" />
            
            {/* Upcoming */}
            <div className="mb-12 md:mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-[#1a1a1a] mb-6">{t.upcoming}</h2>
              {upcomingPerformances.map((perf, i) => (
                <PerformanceItem key={i} performance={perf} />
              ))}
            </div>

            {/* Past 2024/2025 */}
            <div className="mb-12 md:mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-[#1a1a1a] mb-6">{t.past2024}</h2>
              {pastPerformances2024.map((perf, i) => (
                <PerformanceItem key={i} performance={perf} isPast />
              ))}
            </div>

            {/* Past 2023/2024 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-[#1a1a1a] mb-6">{t.past2023}</h2>
              {pastPerformances2023.map((perf, i) => (
                <PerformanceItem key={i} performance={perf} isPast />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
