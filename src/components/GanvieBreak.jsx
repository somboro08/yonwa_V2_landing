import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

export default function GanvieBreak() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-center justify-center">
      {/* Image background with parallax feel */}
      <img
        src="/ganviercoucherDuSoleil.jpg"
        alt="Coucher de soleil sur Ganvié, le Venise d'Afrique"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-brand-bg/30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <MapPin className="w-3.5 h-3.5 text-brand-primary" />
            <span className="font-mono text-xs text-white/90 tracking-widest uppercase">Ganvié, Bénin</span>
          </div>

          <h2
            className="text-4xl md:text-6xl text-white font-black leading-tight"
            style={{ fontFamily: 'Kanit, sans-serif' }}
          >
            Le Venise de <span className="text-brand-primary">l'Afrique</span>
          </h2>

          <p className="font-sans text-white/75 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            À 15 km de Cotonou, un village lacustre habité depuis le XVII<sup>e</sup> siècle. Yonwa vous y emmène.
          </p>

          <a
            href="#concept"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white font-sans font-semibold transition-all transform hover:scale-[1.03] shadow-xl shadow-brand-primary/25 mt-2"
          >
            <span>Découvrir les expériences</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
