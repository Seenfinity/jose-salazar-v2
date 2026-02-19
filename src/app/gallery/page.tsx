"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    galleryTitle: "Gallery",
    videos: "Videos",
    photos: "Photos",
  },
  es: {
    about: "Sobre Mí",
    education: "Educación",
    gallery: "Galería",
    performances: "Actuaciones",
    contact: "Contacto",
    galleryTitle: "Galería",
    videos: "Videos",
    photos: "Fotos",
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="font-display text-xl md:text-2xl font-bold text-white">José Salazar</Link>
        
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} className="text-sm text-[#6b6b6b] hover:text-[#d4a72c] transition-colors uppercase tracking-wider">
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
    <footer className="py-6 md:py-8 px-4 md:px-6 bg-[#1a1a1a] border-t border-[#333]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[#6b6b6b]">© 2026 José Salazar. Photo by Lope Valles.</p>
      </div>
    </footer>
  );
}

export default function GalleryPage({ searchParams }: { searchParams: { lang?: string } }) {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

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
  
  const photos = [
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80",
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80",
    "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
  ];

  const videos = [
    { thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80", title: "Concert Performance 2024" },
    { thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80", title: "Ballet Conducting" },
    { thumbnail: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80", title: "El Sistema Greece" },
    { thumbnail: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80", title: "Masterclass" },
    { thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80", title: "Orchestra Rehearsal" },
    { thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80", title: "Summer Festival" },
  ];

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navigation t={t} lang={lang} onLangChange={handleLangChange} />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-end justify-between mb-8 md:mb-12">
              <div>
                <h1 className="font-display text-5xl md:text-7xl text-white mb-3 md:mb-4">{t.galleryTitle}</h1>
                <div className="w-16 md:w-24 h-[2px] bg-[#d4a72c]" />
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab("photos")}
                  className={`text-sm uppercase tracking-wider transition-colors ${activeTab === "photos" ? "text-[#d4a72c]" : "text-[#6b6b6b] hover:text-white"}`}
                >
                  {t.photos}
                </button>
                <button
                  onClick={() => setActiveTab("videos")}
                  className={`text-sm uppercase tracking-wider transition-colors ${activeTab === "videos" ? "text-[#d4a72c]" : "text-[#6b6b6b] hover:text-white"}`}
                >
                  {t.videos}
                </button>
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              {activeTab === "photos" ? (
                <motion.div
                  key="photos"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                >
                  {photos.map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="aspect-[3/4] overflow-hidden"
                    >
                      <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="videos"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                >
                  {videos.map((video, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="relative group cursor-pointer"
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-[#d4a72c] rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <p className="mt-2 text-white text-sm">{video.title}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
