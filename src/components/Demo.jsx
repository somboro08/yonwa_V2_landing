import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Vraies captures d'écran de l'application
const mockups = [
  {
    id: 'onboarding',
    title: "1. Onboarding Immersif",
    subtitle: "L'éveil culturel",
    image: "/images/onboarding1.png",
    desc: "L'accueil de l'application est conçu pour éveiller vos sens dès les premières secondes. Des visuels chauds et des typographies fines préparent le voyageur à une immersion authentique et respectueuse.",
    accent: "#EF8E0E",
  },
  {
    id: 'onboarding2',
    title: "2. Découverte Guidée",
    subtitle: "Trouvez votre expérience",
    image: "/images/onboarding2.png",
    desc: "Yonwa vous guide pas à pas vers les expériences qui vous correspondent. Choisissez vos passions culturelles et laissez l'application personnaliser votre parcours au Bénin.",
    accent: "#2E9E5B",
  },
  {
    id: 'accueil',
    title: "3. Accueil Inspirant",
    subtitle: "Recommandations locales",
    image: "/images/Acceuil.png",
    desc: "Un flux de recommandations intelligent basé sur vos centres d'intérêt. La page d'accueil affiche les ateliers les mieux notés, les artisans disponibles et les activités par univers culturel.",
    accent: "#EF8E0E",
  },
  {
    id: 'explorer',
    title: "4. Carte Interactive",
    subtitle: "À proximité de vous",
    image: "/images/Explorer.png",
    desc: "Une carte interactive stylisée et minimaliste vous aide à localiser les artisans. Pas de surcharge d'informations — simplement des points d'intérêt chaleureux et des itinéraires optimisés.",
    accent: "#E8B93F",
  },
  {
    id: 'details',
    title: "5. Détails Expérience",
    subtitle: "Immersion & Récits",
    image: "/images/detailExperience.png",
    desc: "Découvrez l'histoire de l'expérience, le profil détaillé du maître artisan, sa démarche de transmission de patrimoine, le tarif tout compris, et les détails pratiques de la session.",
    accent: "#EF8E0E",
  },
  {
    id: 'grio',
    title: "6. Assistant IA Grio",
    subtitle: "Votre griot digital",
    image: "/images/AssistantIAgrio.png",
    desc: "Votre compagnon de voyage vocal et textuel. Grio vous propose des contes traditionnels, vous explique les coutumes locales en temps réel et répond à toutes vos questions pratiques.",
    accent: "#E85D75",
  }
];

export default function Demo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % mockups.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + mockups.length) % mockups.length);

  const active = mockups[activeIndex];

  return (
    <section id="demo" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      
      {/* Background accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-30 transition-colors duration-700"
        style={{ backgroundColor: active.accent }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs text-brand-primary tracking-[0.2em] uppercase">Démonstration</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-ink mt-4 mb-6 leading-tight">
            L'expérience utilisateur en action
          </h2>
          <p className="font-sans text-brand-ink-soft text-lg">
            Découvrez comment l'application vous accompagne, de la préparation de votre séjour aux interactions sur le terrain.
          </p>
        </div>

        {/* Main Carousel Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">

          {/* ─── Phone Device ─── */}
          <div className="relative flex-shrink-0 flex items-center justify-center order-2 lg:order-1">
            
            {/* Glow ring behind phone */}
            <div
              className="absolute w-64 h-64 rounded-full blur-3xl opacity-20 transition-colors duration-700"
              style={{ backgroundColor: active.accent }}
            />

            {/* Phone shell */}
            <div className="w-[260px] h-[540px] rounded-[44px] bg-brand-ink border-[6px] border-brand-ink shadow-2xl relative overflow-hidden flex flex-col">
              
              {/* Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-brand-ink rounded-full z-30 flex items-center justify-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-black/50" />
                <div className="w-8 h-1 bg-black/30 rounded-full" />
              </div>

              {/* Screen with real app screenshots */}
              <div className="w-full h-full pt-7 rounded-[38px] overflow-hidden relative bg-[#0B1220]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.id}
                    src={active.image}
                    alt={active.title}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                    className="w-full h-full object-cover object-top"
                  />
                </AnimatePresence>
                {/* Glass reflet */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Dot indicators */}
            <div className="absolute -bottom-8 flex space-x-1.5">
              {mockups.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? 24 : 8,
                    backgroundColor: i === activeIndex ? active.accent : '#EAEAEC',
                  }}
                />
              ))}
            </div>
          </div>

          {/* ─── Text Column ─── */}
          <div className="flex-1 max-w-lg text-left space-y-8 order-1 lg:order-2">
            
            {/* Step badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + '-badge'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border"
                style={{ borderColor: `${active.accent}40`, backgroundColor: `${active.accent}10` }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: active.accent }} />
                <span className="font-mono text-xs" style={{ color: active.accent }}>
                  {active.subtitle}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={active.id + '-title'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="font-serif text-3xl md:text-4xl text-brand-ink leading-tight"
              >
                {active.title}
              </motion.h3>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={active.id + '-desc'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="font-sans text-brand-ink-soft text-base md:text-lg leading-relaxed"
              >
                {active.desc}
              </motion.p>
            </AnimatePresence>

            {/* Thumbnails row */}
            <div className="grid grid-cols-6 gap-2 pt-2">
              {mockups.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => setActiveIndex(i)}
                  className={`relative rounded-xl overflow-hidden transition-all duration-200 ${
                    i === activeIndex ? 'ring-2 scale-105' : 'opacity-50 hover:opacity-80'
                  }`}
                  style={{ ringColor: active.accent }}
                >
                  <img src={m.image} alt={m.title} className="w-full h-14 object-cover object-top" />
                  {i === activeIndex && (
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ backgroundColor: active.accent }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center space-x-4 pt-2">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-brand-border hover:border-brand-primary flex items-center justify-center text-brand-ink-soft hover:text-brand-primary transition-all hover:shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <span className="font-mono text-sm text-brand-ink-faint">
                {String(activeIndex + 1).padStart(2, '0')} / {String(mockups.length).padStart(2, '0')}
              </span>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-brand-primary hover:bg-brand-primary/90 flex items-center justify-center text-white transition-all shadow-md shadow-brand-primary/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
