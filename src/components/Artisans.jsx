import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye, Smartphone, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Eye,
    title: "Vitrine Culturelle",
    desc: "Exposez votre savoir-faire et racontez l'histoire de votre art à une audience nationale et internationale."
  },
  {
    icon: Calendar,
    title: "Gestion Simplifiée",
    desc: "Définissez vos horaires, bloquez des dates et gérez votre emploi du temps en toute autonomie via l'application."
  },
  {
    icon: DollarSign,
    title: "Revenus Justes & Directs",
    desc: "Recevez vos gains directement sur votre compte Mobile Money. Zéro frais caché, commission minimale."
  }
];

export default function Artisans() {
  return (
    <section id="artisans" className="relative py-24 px-6 bg-brand-surface overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Column */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-brand-primary/25 rounded-3xl" />
              
              {/* Photo showcase */}
              <div className="relative bg-brand-bg border border-brand-border p-4 rounded-3xl space-y-4 shadow-sm">
                
                {/* Artisan header */}
                <div className="flex items-center space-x-3 mb-2">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary/30 flex-shrink-0">
                    <img src="/guide.jpeg" alt="Artisan" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-base font-serif text-brand-ink">Koffi Gbaguidi</h4>
                    <p className="text-xs text-brand-primary font-mono">Guide Touristique · Abomey</p>
                  </div>
                  <span className="ml-auto text-[9px] font-mono bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full">ACTIF</span>
                </div>

                {/* Main showcase image */}
                <div className="relative h-52 w-full rounded-2xl overflow-hidden">
                  <img
                    src="/poterie.jpg"
                    alt="Artisanat béninois"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <p className="text-white text-xs font-semibold">De la poterie traditionnelle </p>
                      <p className="text-white/70 text-[9px] font-mono">Abomey, Bénin</p>
                    </div>
                    <span className="text-[9px] font-mono bg-brand-primary text-white px-2.5 py-1 rounded-full">15 000 FCFA</span>
                  </div>
                </div>

                {/* Secondary images row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative h-28 rounded-2xl overflow-hidden">
                    <img src="/musée.jpg" alt="Musée" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[9px] font-mono text-white">Musée Hist.</span>
                  </div>
                  <div className="relative h-28 rounded-2xl overflow-hidden">
                    <img src="/dance.jpeg" alt="Danse" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[9px] font-mono text-white">Danse traditionnelle</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-brand-surface border border-brand-border p-3 rounded-2xl">
                    <span className="text-[10px] text-brand-ink-faint font-mono block">RÉSERVATIONS</span>
                    <span className="text-lg font-serif text-brand-ink font-semibold">12</span>
                    <span className="text-[9px] text-brand-green block mt-0.5">+4 cette semaine</span>
                  </div>
                  <div className="bg-brand-surface border border-brand-border p-3 rounded-2xl">
                    <span className="text-[10px] text-brand-ink-faint font-mono block">REVENUS</span>
                    <span className="text-lg font-serif text-brand-ink font-semibold">180k FCFA</span>
                    <span className="text-[9px] text-brand-green block mt-0.5">100% direct</span>
                  </div>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-green text-white px-5 py-3 rounded-2xl shadow-xl font-sans text-xs flex items-center space-x-2">
                <Smartphone className="w-4 h-4" />
                <span>100% Mobile Offline-Ready</span>
              </div>
            </div>
          </div>

          {/* Text/Content Column */}
          <div className="flex-1 text-left order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-brand-primary tracking-[0.2em] uppercase">Espace Artisans</span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-ink leading-tight">
                Yonwa donne aux artisans une vitrine numérique pour partager leur savoir-faire
              </h2>
              <p className="font-sans text-brand-ink-soft text-lg leading-relaxed">
                Notre mission est d'assurer la préservation et la transmission des arts du Bénin. Nous fournissons aux maîtres locaux des outils pour gérer leur entreprise, tout en respectant leur temps et leur art.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0 text-brand-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-brand-ink text-base">{benefit.title}</h4>
                      <p className="font-sans text-brand-ink-soft text-sm mt-1">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
