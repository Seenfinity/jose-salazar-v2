"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Navigation - mobile responsive
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "gallery", label: "Gallery" },
    { id: "schedule", label: "Performances" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <span className="font-display text-xl md:text-2xl font-bold text-[#8b2635]">José Salazar</span>
        
        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-[#6b6b6b] hover:text-[#8b2635] transition-colors uppercase tracking-wider"
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
                  className="text-left text-lg text-[#6b6b6b] hover:text-[#8b2635] transition-colors uppercase tracking-wider py-2"
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
function Hero() {
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
            <p className="text-[#8b2635] uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4">Classical Conductor</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-[#1a1a1a] leading-[0.95] mb-4 md:mb-6">
              Conducting<br />
              <span className="italic text-[#8b2635]">Excellence</span>
            </h1>
            <p className="text-base md:text-lg text-[#6b6b6b] max-w-md mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed">
              Jette Parker Ballet Conductor at the Royal Opera House, London. 
              Former Artistic Director of El Sistema Greece.
            </p>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 md:px-8 py-3 bg-[#8b2635] text-white hover:bg-[#6b1d29] transition-colors uppercase tracking-wider text-sm"
            >
              Discover More
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
            <div className="hidden md:block absolute -top-6 -left-6 w-16 md:w-24 h-16 md:h-24 bg-[#8b2635]/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// About Section - Editorial layout
function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-5xl text-[#1a1a1a] mb-6 md:mb-8">About</h2>
            <div className="w-12 md:w-16 h-[2px] bg-[#8b2635] mb-6 md:mb-8" />
          </div>
          <div className="space-y-4 md:space-y-6 text-[#6b6b6b] leading-relaxed">
            <p className="text-lg md:text-xl text-[#1a1a1a] font-serif">
              Born in 1997, on Margarita Island, Venezuela, José Salazar is a young conductor with considerable experience, a wide repertoire and a flair for programming.
            </p>
            <p className="text-sm md:text-base">
              He has been appointed Jette Parker Ballet Conductor at the Royal Opera House in London, working with the Royal Ballet until 2025. From 2018 until 2023, he worked as Artistic and Music Director of El Sistema Greece.
            </p>
            <p className="text-sm md:text-base">
              Having initially come to prominence at around 14 years old, José has conducted innumerable concerts in his native Venezuela and abroad. His work has received coverage on China National TV, Reuters and in The Guardian amongst others.
            </p>
            <p className="text-sm md:text-base">
              Recent highlights include José's US debut at the Walt Disney Concert Hall with the Symphony Orchestra of the YOLA National Festival, working under the guidance of Gustavo Dudamel (July 2024) and his Birmingham Royal Ballet debut conducting Sir Frederick Ashton's La Fille Mal Gardée (October 2024).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Education - Cards grid
function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-4 md:px-6 bg-[#f5f4f1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-[#1a1a1a] mb-3 md:mb-4">Music Education</h2>
          <div className="w-12 md:w-16 h-[2px] bg-[#8b2635] mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              title: "Academy of Impact Through Music (AIM)",
              desc: "Conductor, group leader, and teaching artist"
            },
            {
              title: "International Teaching Artists Collaborative (ITAC)",
              desc: "Global discussions for arts education improvement"
            },
            {
              title: "El Sistema Greece",
              desc: "5 years as Artistic & Music Director"
            },
            {
              title: "Lectures",
              desc: "Berklee Valencia, Vienna, Mumbai"
            }
          ].map((item, i) => (
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

// Gallery - Grid on mobile, horizontal on desktop
function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80",
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80",
    "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 md:px-6 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-3 md:mb-4">Gallery</h2>
            <div className="w-12 md:w-16 h-[2px] bg-[#c9a66b]" />
          </div>
        </div>
        
        {/* Grid on mobile, horizontal on desktop */}
        <div className="grid grid-cols-2 md:flex md:gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
        </div>
      </div>
    </section>
  );
}

// Schedule - Timeline style
function Schedule() {
  const performances = [
    { date: "Feb 19, 2026", event: "Classic FM Hall of Fame", venue: "Royal Liverpool Philharmonic", city: "Liverpool" },
    { date: "Mar 2026", event: "Madama Butterfly", venue: "Lyric Opera Chicago", city: "Chicago" },
    { date: "Apr 2026", event: "New York Philharmonic", venue: "Lincoln Center", city: "New York" },
  ];

  return (
    <section id="schedule" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-[#1a1a1a] mb-3 md:mb-4">Upcoming Performances</h2>
          <div className="w-12 md:w-16 h-[2px] bg-[#8b2635] mx-auto" />
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
                <span className="text-[#8b2635] font-medium text-sm md:text-base">{perf.date}</span>
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
function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-[#8b2635] text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl mb-3 md:mb-4">Get in Touch</h2>
        <div className="w-12 md:w-16 h-[2px] bg-[#c9a66b] mx-auto mb-6 md:mb-8" />
        
        <p className="text-white/80 mb-6 md:mb-8">
          For bookings and inquiries
        </p>
        
        <a 
          href="mailto:jose@joseangelsalazar.com"
          className="text-lg md:text-2xl hover:text-[#c9a66b] transition-colors"
        >
          jose@joseangelsalazar.com
        </a>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
          <p className="text-sm text-white/60">
            Promoter inquiries: James Brown Management
          </p>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-6 md:py-8 px-4 md:px-6 bg-[#faf9f7] border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[#6b6b6b]">
          © 2026 José Salazar. Photo by Lope Valles.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Gallery />
      <Schedule />
      <Contact />
      <Footer />
    </main>
  );
}
