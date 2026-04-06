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
    nav: {
      about: "About",
      education: "Education",
      gallery: "Gallery",
      performances: "Performances",
      contact: "Contact",
    },
    title: "Gallery",
    videos: "Videos",
    photos: "Photos",
    actionPictures: "Action Pictures",
    studioPictures: "Studio Pictures",
    moreVideos: "If you are interested in watching more videos, contact us for further material.",
    youtubeChannel: "YouTube Channel",
  },
  es: {
    nav: {
      about: "Sobre Mí",
      education: "Educación",
      gallery: "Galería",
      performances: "Actuaciones",
      contact: "Contacto",
    },
    title: "Galería",
    videos: "Videos",
    photos: "Fotos",
    actionPictures: "Fotos de Acción",
    studioPictures: "Fotos de Estudio",
    moreVideos: "Si estás interesado en ver más videos, contáctanos para más material.",
    youtubeChannel: "Canal de YouTube",
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

export default function GalleryPage({ searchParams }: { searchParams: { lang?: string } }) {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"videos" | "photos">("videos");
  const [activePhotoCategory, setActivePhotoCategory] = useState<"action" | "studio">("action");

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
  
  // YouTube video IDs from document
  const videos = [
    { id: "VU6jnpDvT1k", title: "Performance 4" },
    { id: "Hq8BmWUL5hg", title: "Performance 5" },
    { id: "3S_XDRBQduo", title: "Performance 6" },
    { id: "97_IlMryI-A", title: "Performance 1" },
    { id: "b5wP8Y-M4Qs", title: "Performance 2" },
    { id: "SIRyXG1Mmck", title: "Performance 3" },
  ];

  // Gallery photos with generic credits (to be updated)
  const actionPhotos = [
    { src: "/gallery-15.jpg", credit: "Photo by Elly Welford", objectPosition: "center" },
    { src: "/gallery-16.jpg", credit: "Photo by Elly Welford", objectPosition: "center" },
    { src: "/gallery-1.jpg", credit: "Photo by Ivan Gonzales", objectPosition: "center" },
    { src: "/gallery-2.jpg", credit: "Photo by Chris Roe", objectPosition: "center" },
    { src: "/gallery-3.jpg", credit: "Photo by Mariza Kapsabeli", objectPosition: "center" },
    { src: "/gallery-4.jpg", credit: "Photo by Mariza Kapsabeli", objectPosition: "30% 30%" },
    { src: "/gallery-5.jpg", credit: "Photo by Giannis Antonoglou", objectPosition: "35% 25%" },
    { src: "/gallery-6.jpg", credit: "Photo by Clive Barda", objectPosition: "center" },
  ];

  const studioPhotos: { src: string; credit: string; objectPosition: string }[] = [
    { src: "/gallery-7.jpg", credit: "Photo by Lope Valles", objectPosition: "center" },
    { src: "/gallery-8.jpg", credit: "Photo by Lope Valles", objectPosition: "center" },
    { src: "/gallery-9.jpg", credit: "Photo by Lope Valles", objectPosition: "center" },
    { src: "/gallery-10.jpg", credit: "Photo by Lope Valles", objectPosition: "center" },
    { src: "/gallery-11.jpg", credit: "Photo by Lope Valles", objectPosition: "center" },
    { src: "/gallery-12.jpg", credit: "Photo by Lope Valles", objectPosition: "center" },
    { src: "/gallery-13.jpg", credit: "Photo by Giannis Antonoglou", objectPosition: "center" },
    { src: "/gallery-14.jpg", credit: "Photo by Giannis Antonoglou", objectPosition: "center" },
  ];

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
            <div className="flex items-end justify-between mb-8 md:mb-12">
              <div>
                <h1 className="font-display text-5xl md:text-7xl text-[#1a1a1a] mb-3 md:mb-4">{t.title}</h1>
                <div className="w-16 md:w-24 h-[2px] bg-[#d4a72c]" />
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab("videos")}
                  className={`text-sm uppercase tracking-wider transition-colors ${activeTab === "videos" ? "text-[#d4a72c]" : "text-[#6b6b6b] hover:text-[#1a1a1a]"}`}
                >
                  {t.videos}
                </button>
                <button
                  onClick={() => setActiveTab("photos")}
                  className={`text-sm uppercase tracking-wider transition-colors ${activeTab === "photos" ? "text-[#d4a72c]" : "text-[#6b6b6b] hover:text-[#1a1a1a]"}`}
                >
                  {t.photos}
                </button>
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              {activeTab === "videos" ? (
                <motion.div
                  key="videos"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {videos.map((video, i) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="aspect-video w-full overflow-hidden bg-[#1a1a1a]">
                          <iframe 
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-8">
                    <p className="text-[#6b6b6b] mb-4">{t.moreVideos}</p>
                    <a 
                      href="https://youtube.com/@jasalazarconductor" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#d4a72c] text-white hover:bg-[#b8962e] transition-colors uppercase tracking-wider text-sm"
                    >
                      {t.youtubeChannel}
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="photos"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {/* Category selector for photos */}
                  <div className="flex justify-center gap-8 mb-8">
                    <button
                      onClick={() => setActivePhotoCategory("action")}
                      className={`text-sm uppercase tracking-wider transition-colors ${activePhotoCategory === "action" ? "text-[#d4a72c] border-b-2 border-[#d4a72c]" : "text-[#6b6b6b] hover:text-[#1a1a1a]"} pb-1`}
                    >
                      {t.actionPictures}
                    </button>
                    <button
                      onClick={() => setActivePhotoCategory("studio")}
                      className={`text-sm uppercase tracking-wider transition-colors ${activePhotoCategory === "studio" ? "text-[#d4a72c] border-b-2 border-[#d4a72c]" : "text-[#6b6b6b] hover:text-[#1a1a1a]"} pb-1`}
                    >
                      {t.studioPictures}
                    </button>
                  </div>

                  {/* Photo grid with white frame and credits */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {(activePhotoCategory === "action" ? actionPhotos : studioPhotos).map((photo, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white p-3 shadow-md"
                      >
                        <div className="aspect-[3/4] overflow-hidden">
                          <img src={photo.src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" style={{ objectPosition: photo.objectPosition || 'center' }} />
                        </div>
                        <p className="text-center text-xs text-[#6b6b6b] mt-3 uppercase tracking-wider">{photo.credit}</p>
                      </motion.div>
                    ))}
                  </div>
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
