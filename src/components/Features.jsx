import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Search, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';

const featureList = [
  {
    id: 1,
    title: "Explorer des expériences",
    description: "Parcourez des activités culturelles immersives conçues par des locaux : poterie de Sè, cuisine de Ouidah, danse Guèlèdè.",
    icon: Compass,
    accent: "#EF8E0E",
  },
  {
    id: 2,
    title: "Recherche intelligente",
    description: "Filtrez par localité, intérêt ou saisonnalité. Repérez-vous avec notre carte interactive intégrée.",
    icon: Search,
    accent: "#E8B93F",
  },
  {
    id: 3,
    title: "Réservation simplifiée",
    description: "Planifiez vos créneaux en toute sérénité avec les paiements locaux (Mobile Money) et internationaux.",
    icon: ShieldCheck,
    accent: "#2E9E5B",
  },
  {
    id: 4,
    title: "Profil Artisan",
    description: "Découvrez le parcours de chaque artisan, ses techniques ancestrales, et soutenez son travail directement.",
    icon: UserCheck,
    accent: "#EF8E0E",
  },
  {
    id: 5,
    title: "Assistant IA Grio",
    description: "Posez des questions vocales, découvrez des anecdotes locales et recevez des conseils personnalisés en temps réel.",
    icon: Sparkles,
    accent: "#E85D75",
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 18 }
  }
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6 bg-brand-bg overflow-hidden">

      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-24 max-w-xl"
        >
          <span className="font-mono text-xs text-brand-primary tracking-[0.25em] uppercase">
            Fonctionnalités
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-ink mt-4 leading-tight">
            Tout le Bénin culturel à portée de main
          </h2>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {featureList.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = index === 4;

            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className={`group relative p-8 rounded-3xl bg-brand-surface border border-brand-border hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  isLarge ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Hover gradient bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${feature.accent}08 0%, transparent 60%)` }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    backgroundColor: `${feature.accent}12`,
                    color: feature.accent,
                    boxShadow: `0 0 0 0 ${feature.accent}00`,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-sans font-bold text-brand-ink mb-3 group-hover:text-brand-ink transition-colors leading-snug">
                  {feature.title}
                </h3>
                <p className="text-brand-ink-soft text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Corner number */}
                <div
                  className="absolute bottom-6 right-6 font-mono text-[10px] text-brand-ink-faint group-hover:opacity-60 transition-opacity"
                >
                  [{String(feature.id).padStart(2, '0')}]
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
