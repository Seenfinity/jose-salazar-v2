"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Language = "en" | "es";

const translations = {
  en: {
    about: "About",
    education: "Education",
    gallery: "Gallery",
    performances: "Performances",
    contact: "Contact",
    performancesTitle: "Upcoming Performances",
    pastPerformances: "Past Performances",
  },
  es: {
    about: "Sobre Mí",
    education: "Educación",
    gallery: "Galería",
    performances: "Actuaciones",
    contact: "Contacto",
    performancesTitle: "Próximas Actuaciones",
    pastPerformances: "Actuaciones Anteriores",
  },
};

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
        
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} className="text-sm text-[#6b6b6b] hover:text-[#1a4d2e] transition-colors uppercase tracking-wider">
              {item.label}
            </Link>
          ))}
          <Link href={`/schedule?lang=${lang === "en" ? "es" : "en"}`} className="ml-4 px-3 py-1 text-xs border border-[#d4a72c] text-[#d4a72c] hover:bg-[#d4a72c] hover:text-[#1a1a1a] transition-colors">
            {lang === "en" ? "ES" : "EN"}
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
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

export default function SchedulePage({ searchParams }: { searchParams: { lang?: string } }) {
  const lang: Language = (searchParams?.lang as Language) || "en";
  const t = translations[lang];

  const upcomingPerformances = [
    { date: "Feb 19, 2026", event: "Classic FM Hall of Fame", venue: "Royal Liverpool Philharmonic", city: "Liverpool" },
    { date: "Mar 2026", event: "Madama Butterfly", venue: "Lyric Opera Chicago", city: "Chicago" },
    { date: "Apr 2026", event: "New York Philharmonic", venue: "Lincoln Center", city: "New York" },
  ];

  const pastPerformances = [
    { date: "Oct 2024", event: "La Fille Mal Gardée", venue: "Birmingham Royal Ballet", city: "Birmingham" },
    { date: "Jul 2024", event: "YOLA National Festival", venue: "Walt Disney Concert Hall", city: "Los Angeles" },
    { date: "2023", event: "El Sistema Greece", venue: "Various Venues", city: "Greece" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation t={t} lang={lang} />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl text-[#1a1a1a] mb-3 md:mb-4">{t.performancesTitle}</h1>
            <div className="w-16 md:w-24 h-[2px] bg-[#d4a72c] mb-10 md:mb-16" />
            
            <div className="space-y-6 md:space-y-8 mb-16">
              {upcomingPerformances.map((perf, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col md:flex-row md:gap-8 items-start md:items-center pb-6 md:pb-8 border-b border-[#e5e5e5] last:border-0"
                >
                  <div className="w-full md:w-32 flex-shrink-0 mb-2 md:mb-0">
                    <span className="text-[#1a4d2e] font-medium text-sm md:text-base">{perf.date}</span>
                  </div>
                  <div className="flex-grow mb-2 md:mb-0">
                    <h3 className="font-display text-xl md:text-2xl text-[#1a1a1a]">{perf.event}</h3>
                    <p className="text-sm md:text-base text-[#6b6b6b]">{perf.venue}</p>
                  </div>
                  <div className="w-full md:w-32 flex-shrink-0 md:text-right">
                    <span className="text-sm md:text-base text-[#6b6b6b]">{perf.city}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-[#1a1a1a] mb-6">{t.pastPerformances}</h2>
            <div className="w-16 h-[2px] bg-[#d4a72c] mb-8" />
            
            <div className="space-y-4 md:space-y-6">
              {pastPerformances.map((perf, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 3) * 0.1 }}
                  className="flex flex-col md:flex-row md:gap-8 items-start md:items-center pb-4 border-b border-[#e5e5e5] last:border-0 opacity-70"
                >
                  <div className="w-full md:w-32 flex-shrink-0 mb-2 md:mb-0">
                    <span className="text-[#6b6b6b] text-sm md:text-base">{perf.date}</span>
                  </div>
                  <div className="flex-grow mb-2 md:mb-0">
                    <h3 className="font-display text-lg md:text-xl text-[#1a1a1a]">{perf.event}</h3>
                    <p className="text-sm text-[#6b6b6b]">{perf.venue}</p>
                  </div>
                  <div className="w-full md:w-32 flex-shrink-0 md:text-right">
                    <span className="text-sm text-[#6b6b6b]">{perf.city}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
