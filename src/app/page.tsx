"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Language context
type Language = "en" | "es";

const translations = {
  en: {
    welcome: "Welcome",
    about: "About",
    education: "Education",
    gallery: "Gallery",
    performances: "Performances",
    contact: "Contact",
    discoverMore: "Discover More",
    classicalConductor: "Classical Conductor",
    conductingExcellence: "Conducting Excellence",
    heroDesc: "Jette Parker Ballet Conductor at the Royal Opera House, London. Former Artistic Director of El Sistema Greece.",
    aboutTitle: "About",
    aboutText1: "Born in 1997, on Margarita Island, Venezuela, José Salazar is a young conductor with considerable experience, a wide repertoire and a flair for programming.",
    aboutText2: "He has been appointed Jette Parker Ballet Conductor at the Royal Opera House in London, working with the Royal Ballet until 2025. From 2018 until 2023, he worked as Artistic and Music Director of El Sistema Greece.",
    aboutText3: "Having initially come to prominence at around 14 years old, José has conducted innumerable concerts in his native Venezuela and abroad. His work has received coverage on China National TV, Reuters and in The Guardian amongst others.",
    aboutText4: "Recent highlights include José's US debut at the Walt Disney Concert Hall with the Symphony Orchestra of the YOLA National Festival, working under the guidance of Gustavo Dudamel (July 2024) and his Birmingham Royal Ballet debut conducting Sir Frederick Ashton's La Fille Mal Gardée (October 2024).",
    educationTitle: "Music Education",
    aim: "Academy of Impact Through Music (AIM)",
    aimDesc: "Conductor, group leader, and teaching artist",
    itac: "International Teaching Artists Collaborative (ITAC)",
    itacDesc: "Global discussions for arts education improvement",
    sistemaGreece: "El Sistema Greece",
    sistemaDesc: "5 years as Artistic & Music Director",
    lectures: "Lectures",
    lecturesDesc: "Berklee Valencia, Vienna, Mumbai",
    galleryTitle: "Gallery",
    videos: "Videos",
    photos: "Photos",
    performancesTitle: "Upcoming Performances",
    contactTitle: "Get in Touch",
    contactDesc: "For bookings and inquiries",
    promoter: "Promoter inquiries: James Brown Management",
    footer: "© 2026 José Salazar. Photo by Lope Valles.",
    enter: "Enter",
  },
  es: {
    welcome: "Bienvenido",
    about: "Sobre Mí",
    education: "Educación",
    gallery: "Galería",
    performances: "Actuaciones",
    contact: "Contacto",
    discoverMore: "Descubre Más",
    classicalConductor: "Director de Orquesta Clásica",
    conductingExcellence: "Dirigiendo Excelencia",
    heroDesc: "Director del Ballet Jette Parker en el Royal Opera House, Londres. Ex Director Artístico de El Sistema Grecia.",
    aboutTitle: "Sobre Mí",
    aboutText1: "Nacido en 1997, en la isla de Margarita, Venezuela, José Salazar es un joven director con considerable experiencia, un amplio repertorio y un don para la programación.",
    aboutText2: "Ha sido nombrado Director del Ballet Jette Parker en el Royal Opera House de Londres, trabajando con el Royal Ballet hasta 2025. Desde 2018 hasta 2023, trabajó como Director Artístico y Musical de El Sistema Grecia.",
    aboutText3: "Habiendo irrumpido en escena alrededor de los 14 años, José ha dirigido innumerables conciertos en su Venezuela natal y en el extranjero. Su trabajo ha sido cubierto por China National TV, Reuters y The Guardian, entre otros.",
    aboutText4: "Highlights recientes incluyen el debut de José en EE.UU. en el Walt Disney Concert Hall con la Orquesta Sinfónica del YOLA National Festival, bajo la guía de Gustavo Dudamel (julio 2024) y su debut con el Birmingham Royal Ballet dirigiendo La Fille Mal Gardée de Sir Frederick Ashton (octubre 2024).",
    educationTitle: "Educación Musical",
    aim: "Academia de Impacto a Través de la Música (AIM)",
    aimDesc: "Director, líder de grupo y artista docente",
    itac: "Colaborativo Internacional de Artistas Docentes (ITAC)",
    itacDesc: "Discusiones globales para mejorar la educación artística",
    sistemaGreece: "El Sistema Grecia",
    sistemaDesc: "5 años como Director Artístico y Musical",
    lectures: "Conferencias",
    lecturesDesc: "Berklee Valencia, Viena, Mumbai",
    galleryTitle: "Galería",
    videos: "Videos",
    photos: "Fotos",
    performancesTitle: "Próximas Actuaciones",
    contactTitle: "Contacto",
    contactDesc: "Para reservas e inquiries",
    promoter: "Inquiries de promotores: James Brown Management",
    footer: "© 2026 José Salazar. Foto por Lope Valles.",
    enter: "Entrar",
  },
};

// Landing page with language selection
function LandingPage({ onEnter, t }: { onEnter: () => void; t: typeof translations.en }) {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
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
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-4">
          José <span className="text-[#d4a72c] italic">Salazar</span>
        </h1>
        <p className="text-[#d4a72c] uppercase tracking-[0.3em] text-sm md:text-base mb-12">
          {t.classicalConductor}
        </p>
        
        <button
          onClick={onEnter}
          className="px-8 py-4 bg-[#1a4d2e] text-white hover:bg-[#1f5a3a] transition-colors uppercase tracking-wider text-lg"
        >
          {t.enter}
        </button>
        
        <div className="mt-16 flex justify-center gap-8 text-sm text-[#6b6b6b]">
          <span>English</span>
          <span className="text-[#d4a72c]">|</span>
          <span>Español</span>
        </div>
      </motion.div>
    </div>
  );
}

// Navigation - mobile responsive
function Navigation({ t }: { t: typeof translations.en }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { id: "about", label: t.about },
    { id: "education", label: t.education },
    { id: "gallery", label: t.gallery },
    { id: "schedule", label: t.performances },
    { id: "contact", label: t.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <span className="font-display text-xl md:text-2xl font-bold text-[#1a4d2e]">José Salazar</span>
        
        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-[#6b6b6b] hover:text-[#1a4d2e] transition-colors uppercase tracking-wider"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-[#1a1a1a] transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-[#1a1a1a] ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-[#1a1a1a] transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
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
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg text-[#6b6b6b] hover:text-[#1a4d2e] transition-colors uppercase tracking-wider py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Hero - Split layout, editorial style
function Hero({ t }: { t: typeof translations.en }) {
  return (
    <section className="min-h-screen pt-16 md:pt-20 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Text side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <p className="text-[#1a4d2e] uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4">{t.classicalConductor}</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-[#1a1a1a] leading-[0.95] mb-4 md:mb-6">
              {t.conductingExcellence.split(" ")[0]}<br />
              <span className="italic text-[#1a4d2e]">{t.conductingExcellence.split(" ")[1]}</span>
            </h1>
            <p className="text-base md:text-lg text-[#6b6b6b] max-w-md mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed">
              {t.heroDesc}
            </p>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 md:px-8 py-3 bg-[#1a4d2e] text-white hover:bg-[#1f5a3a] transition-colors uppercase tracking-wider text-sm"
            >
              {t.discoverMore}
            </button>
          </motion.div>
          
          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-[3/4] max-h-[50vh] md:max-h-none overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80" 
                alt="José Salazar conducting"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements - hidden on mobile */}
            <div className="hidden md:block absolute -top-6 -left-6 w-16 md:w-24 h-16 md:h-24 bg-[#1a4d2e]/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// About Section - Editorial layout
function About({ t }: { t: typeof translations.en }) {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-5xl text-[#1a1a1a] mb-6 md:mb-8">{t.aboutTitle}</h2>
            <div className="w-12 md:w-16 h-[2px] bg-[#1a4d2e] mb-6 md:mb-8" />
          </div>
          <div className="space-y-4 md:space-y-6 text-[#6b6b6b] leading-relaxed">
            <p className="text-lg md:text-xl text-[#1a1a1a] font-serif">{t.aboutText1}</p>
            <p className="text-sm md:text-base">{t.aboutText2}</p>
            <p className="text-sm md:text-base">{t.aboutText3}</p>
            <p className="text-sm md:text-base">{t.aboutText4}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Education - Cards grid
function Education({ t }: { t: typeof translations.en }) {
  const items = [
    { title: t.aim, desc: t.aimDesc },
    { title: t.itac, desc: t.itacDesc },
    { title: t.sistemaGreece, desc: t.sistemaDesc },
    { title: t.lectures, desc: t.lecturesDesc },
  ];

  return (
    <section id="education" className="py-16 md:py-24 px-4 md:px-6 bg-[#f5f4f1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-[#1a1a1a] mb-3 md:mb-4">{t.educationTitle}</h2>
          <div className="w-12 md:w-16 h-[2px] bg-[#1a4d2e] mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-5 md:p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-display text-lg md:text-xl text-[#1a1a1a] mb-2 md:mb-3">{item.title}</h3>
              <p className="text-sm text-[#6b6b6b]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery - Photos + Videos
function Gallery({ t }: { t: typeof translations.en }) {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  
  const photos = [
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80",
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80",
    "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
  ];

  // Sample videos - replace with actual video URLs
  const videos = [
    { thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80", title: "Concert Performance 2024" },
    { thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80", title: "Ballet Conducting" },
    { thumbnail: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80", title: "El Sistema Greece" },
    { thumbnail: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80", title: "Masterclass" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 md:px-6 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-3 md:mb-4">{t.galleryTitle}</h2>
            <div className="w-12 md:w-16 h-[2px] bg-[#d4a72c]" />
          </div>
          
          {/* Tab buttons */}
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
        
        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "photos" ? (
            <motion.div
              key="photos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:flex md:gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0"
            >
              {photos.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="col-span-1 md:flex-shrink-0 w-full aspect-[3/4] md:w-64 lg:w-80"
                >
                  <img 
                    src={src} 
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {videos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group cursor-pointer"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Play button overlay */}
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
      </div>
    </section>
  );
}

// Schedule - Timeline style
function Schedule({ t }: { t: typeof translations.en }) {
  const performances = [
    { date: "Feb 19, 2026", event: "Classic FM Hall of Fame", venue: "Royal Liverpool Philharmonic", city: "Liverpool" },
    { date: "Mar 2026", event: "Madama Butterfly", venue: "Lyric Opera Chicago", city: "Chicago" },
    { date: "Apr 2026", event: "New York Philharmonic", venue: "Lincoln Center", city: "New York" },
  ];

  return (
    <section id="schedule" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-[#1a1a1a] mb-3 md:mb-4">{t.performancesTitle}</h2>
          <div className="w-12 md:w-16 h-[2px] bg-[#1a4d2e] mx-auto" />
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {performances.map((perf, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
      </div>
    </section>
  );
}

// Contact - Simple, elegant
function Contact({ t }: { t: typeof translations.en }) {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-[#1a4d2e] text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl mb-3 md:mb-4">{t.contactTitle}</h2>
        <div className="w-12 md:w-16 h-[2px] bg-[#d4a72c] mx-auto mb-6 md:mb-8" />
        
        <p className="text-white/80 mb-6 md:mb-8">
          {t.contactDesc}
        </p>
        
        <a 
          href="mailto:jose@joseangelsalazar.com"
          className="text-lg md:text-2xl hover:text-[#d4a72c] transition-colors"
        >
          jose@joseangelsalazar.com
        </a>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
          <p className="text-sm text-white/60">
            {t.promoter}
          </p>
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
        <p className="text-sm text-[#6b6b6b]">
          {t.footer}
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [lang, setLang] = useState<Language>("en");

  const t = translations[lang];

  const handleEnter = () => {
    setShowLanding(false);
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "es" : "en");
  };

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
            <LandingPage onEnter={handleEnter} t={t} />
            {/* Language toggle */}
            <div className="fixed bottom-6 right-6 z-50">
              <button
                onClick={toggleLang}
                className="px-4 py-2 bg-[#1a1a1a]/80 text-white text-sm hover:bg-[#1a1a1a] transition-colors"
              >
                {lang === "en" ? "Español" : "English"}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation t={t} />
            <Hero t={t} />
            <About t={t} />
            <Education t={t} />
            <Gallery t={t} />
            <Schedule t={t} />
            <Contact t={t} />
            <Footer t={t} />
            {/* Language toggle */}
            <div className="fixed bottom-6 right-6 z-50">
              <button
                onClick={toggleLang}
                className="px-4 py-2 bg-[#1a4d2e] text-white text-sm hover:bg-[#1f5a3a] transition-colors"
              >
                {lang === "en" ? "Español" : "English"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
