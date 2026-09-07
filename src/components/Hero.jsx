import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ArrowRight, Star } from 'lucide-react';
import { APP_LINKS } from '../config';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax: background image moves slower than scroll
  const bgY = useTransform(scrollY, [0, 700], [0, 200]);
  // Phone mockup tilts back as user scrolls
  const phoneRotate = useTransform(scrollY, [0, 800], [8, -4]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── BACKGROUND: Chute d'eau avec parallax ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[115%] -top-[7%]"
      >
        <img
          src="/ChuteD'eaux.jpeg"
          alt="Chute d'eau au Bénin"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay dégradé pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* ─── Colonne gauche : Texte ─── */}
        <div className="flex-1 text-left space-y-8 max-w-xl">

          {/* Badge disponibilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/25"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="font-mono text-xs text-white/90 tracking-wide">Disponible au Bénin</span>
          </motion.div>

          {/* Titre principal — Kanit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 80 }}
            className="space-y-3"
          >
            <h1
              className="text-5xl md:text-7xl text-white leading-[1.05] font-black"
              style={{ fontFamily: 'Kanit, sans-serif' }}
            >
              Découvrez le <br />
              Bénin{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #EF8E0E 0%, #F2994A 100%)' }}
              >
                autrement
              </span>
            </h1>
            <p className="font-sans text-white/80 text-lg md:text-xl leading-relaxed max-w-lg">
              Connectez-vous aux artisans locaux et vivez des expériences authentiques adaptées à vos envies.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href={APP_LINKS.ANDROID_APK}
              download
              className="px-8 py-4 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white font-sans font-bold text-center transition-all transform hover:scale-[1.03] flex items-center justify-center space-x-3 shadow-2xl shadow-brand-primary/30"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger l'app (APK)</span>
            </a>
            <a
              href="#concept"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/60 text-white font-sans font-semibold text-center transition-all flex items-center justify-center space-x-2"
            >
              <span>Explorer les expériences</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="pt-6 border-t border-white/15 flex items-center space-x-6"
          >
            <div className="flex -space-x-2.5">
              {/* Avatars avec images de profil symboliques */}
              <div className="w-10 h-10 rounded-full bg-brand-primary border-2 border-white flex items-center justify-center text-[11px] font-bold text-white">A</div>
              <div className="w-10 h-10 rounded-full bg-brand-green border-2 border-white flex items-center justify-center text-[11px] font-bold text-white">K</div>
              <div className="w-10 h-10 rounded-full bg-brand-yellow border-2 border-white flex items-center justify-center text-[11px] font-bold text-white">S</div>
              <div className="w-10 h-10 rounded-full bg-brand-rose border-2 border-white flex items-center justify-center text-[11px] font-bold text-white">M</div>
            </div>
            <div>
              <div className="flex items-center space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-brand-primary fill-brand-primary" />
                ))}
              </div>
              <span className="text-xs text-white/65 font-mono block mt-0.5">+150 artisans locaux partenaires</span>
            </div>
          </motion.div>
        </div>

        {/* ─── Colonne droite : Mockup téléphone avec vraie image app ─── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 70 }}
          className="flex-1 flex items-center justify-center relative"
        >
          {/* Halo lumineux derrière le téléphone */}
          <div className="absolute w-72 h-72 rounded-full bg-brand-primary/20 blur-[80px] pointer-events-none" />

          {/* Perspective container */}
          <div style={{ perspective: 1200 }}>
            <motion.div
              style={{
                rotateX: mousePos.y * -18,
                rotateY: mousePos.x * 22,
                rotateZ: phoneRotate,
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 250, damping: 25 }}
              className="relative select-none"
            >
              {/* Phone frame */}
              <div className="w-[270px] h-[560px] rounded-[44px] bg-brand-ink p-[10px] shadow-2xl border-4 border-brand-ink relative overflow-hidden">
                
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-brand-ink rounded-full z-30 flex items-center justify-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                  <div className="w-8 h-1 bg-black/40 rounded-full" />
                </div>

                {/* Screen — vraie capture d'écran de l'app */}
                <div className="w-full h-full rounded-[36px] overflow-hidden relative">
                  <img
                    src="/images/Acceuil.png"
                    alt="Écran d'accueil Yonwa"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtil reflet vitre */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-[36px]" />
                </div>
              </div>

              {/* Badge flottant : note */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -right-8 top-16 bg-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center space-x-2 border border-brand-border"
              >
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Star className="w-4 h-4 text-brand-primary fill-brand-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-ink block">4.9 / 5</span>
                  <span className="text-[9px] font-mono text-brand-ink-faint">42 avis</span>
                </div>
              </motion.div>

              {/* Badge flottant : réservation */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -left-10 bottom-24 bg-brand-primary rounded-2xl px-4 py-2.5 shadow-xl text-white"
              >
                <span className="text-[10px] font-mono block opacity-80">RÉSERVATION</span>
                <span className="text-xs font-bold">Confirmée ✓</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Bas de page — vague de transition vers le blanc */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  );
}
