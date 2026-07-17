import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle, Search, Users, Calendar } from 'lucide-react';

const challenges = [
  {
    id: 1,
    problemTitle: "Expériences authentiques introuvables",
    problemDesc: "Les voyageurs cherchent en vain de vrais ateliers culturels parmi des offres touristiques standardisées.",
    solutionTitle: "Découverte personnalisée",
    solutionDesc: "Notre algorithme et l'assistant Grio vous guident vers les expériences qui résonnent avec vos passions.",
    icon: Search,
    color: "#EF8E0E",
  },
  {
    id: 2,
    problemTitle: "Manque de visibilité des artisans",
    problemDesc: "Les détenteurs de savoir-faire ancestraux n'ont pas accès aux outils numériques pour promouvoir leur art.",
    solutionTitle: "Connexion directe",
    solutionDesc: "Une vitrine équitable qui valorise le patrimoine et reverse la majorité des revenus directement aux locaux.",
    icon: Users,
    color: "#2E9E5B",
  },
  {
    id: 3,
    problemTitle: "Parcours complexe à planifier",
    problemDesc: "Coordonner réservations, déplacements et logistique dans un pays étranger peut décourager les plus motivés.",
    solutionTitle: "Réservation simplifiée",
    solutionDesc: "Une planification de bout en bout en quelques clics : dates, tarifs clairs, guides et itinéraires optimisés.",
    icon: Calendar,
    color: "#E8B93F",
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 18 }
  }
};

export default function ProblemSolution() {
  return (
    <section id="concept" className="relative py-32 px-6 bg-brand-surface overflow-hidden">

      {/* Subtle decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/4 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <span className="font-mono text-xs text-brand-primary tracking-[0.25em] uppercase">
            Le Concept
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-ink mt-4 mb-6 leading-tight">
            Redéfinir le voyage au cœur du Bénin
          </h2>
          <p className="font-sans text-brand-ink-soft text-lg leading-relaxed">
            Yonwa est né d'un constat simple : le plus beau du voyage réside
            dans la rencontre avec ceux qui font vivre la culture au quotidien.
          </p>
        </motion.div>

        {/* ── Challenge Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-brand-bg border border-brand-border hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5 transition-colors duration-300 overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <div>
                  {/* Problem */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 text-brand-ink-faint mb-4 font-mono text-[10px] tracking-wider">
                      <HelpCircle className="w-3.5 h-3.5 text-red-400" />
                      <span>PROBLÈME</span>
                    </div>
                    <h3 className="text-xl font-sans font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors duration-300 leading-snug">
                      {item.problemTitle}
                    </h3>
                    <p className="text-brand-ink-soft text-sm leading-relaxed">
                      {item.problemDesc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-brand-border my-6" />

                  {/* Solution */}
                  <div className="mb-6">
                    <div
                      className="flex items-center space-x-2 mb-4 font-mono text-[10px] tracking-wider"
                      style={{ color: item.color }}
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>LA RÉPONSE YONWA</span>
                    </div>
                    <h4 className="text-lg font-serif text-brand-ink mb-3 font-bold">
                      {item.solutionTitle}
                    </h4>
                    <p className="text-brand-ink-soft text-sm leading-relaxed">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-brand-ink-faint tracking-widest">
                    0{item.id} / 03
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
