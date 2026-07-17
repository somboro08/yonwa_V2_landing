import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Info } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Festival International de Porto-Novo",
    date: "Janvier (Annuel)",
    location: "Porto-Novo",
    info: "Célébration des masques Zangbéto, danses rituelles vaudoues et parades royales.",
    image: "/PatrimoineImages/FestivalDesMasque.jpg"
  },
  {
    id: 2,
    title: "Fête Nationale du Vaudou",
    date: "10 Janvier",
    location: "Ouidah (Plage)",
    info: "Rassemblement spirituel majeur, chants traditionnels, bénédictions au bord de l'océan.",
    image: "/PatrimoineImages/Vodun-days.jpg"
  },
  {
    id: 3,
    title: "La Fête de la Ganni",
    date: "Novembre (Annuel)",
    location: "Nikki",
    info: "Parades équestres de la cour royale Bariba, trompes traditionnelles et rituels.",
    image: "/dance.jpeg"
  },
  {
    id: 4,
    title: "Rencontre des Tisseurs d'Abomey",
    date: "Mars (Annuel)",
    location: "Abomey",
    info: "Exposition et démonstrations interactives de métiers à tisser le coton traditionnel.",
    image: "/poterie.jpg"
  }
];

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs text-brand-primary tracking-[0.2em] uppercase">Patrimoine</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-ink mt-4 mb-6 leading-tight">
            Les grands rendez-vous culturels
          </h2>
          <p className="font-sans text-brand-ink-soft text-lg">
            Découvrez le calendrier des festivités majeures du Bénin et vivez-les de l'intérieur avec nos guides locaux partenaires.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group bg-brand-bg border border-brand-border hover:border-brand-primary/40 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-brand-primary/5"
            >
              <div className="space-y-4">
                {/* Real image */}
                <div className="h-40 w-full rounded-2xl relative overflow-hidden border border-brand-border">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/85 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] font-mono text-brand-ink flex items-center space-x-1 shadow-sm">
                    <Calendar className="w-3 h-3 text-brand-primary" />
                    <span>{event.date}</span>
                  </div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono bg-white/85 backdrop-blur-sm px-2 py-0.5 rounded-full text-brand-ink flex items-center space-x-1 shadow-sm">
                    <MapPin className="w-3 h-3 text-brand-green" />
                    <span>{event.location}</span>
                  </span>
                </div>

                <h3 className="font-serif text-lg text-brand-ink group-hover:text-brand-primary transition-colors leading-snug">
                  {event.title}
                </h3>

                <p className="text-brand-ink-soft text-xs leading-relaxed">
                  {event.info}
                </p>
              </div>

              {/* Bottom action indicator */}
              <div className="pt-6 mt-6 border-t border-brand-border flex items-center justify-between text-[10px] font-mono text-brand-ink-faint group-hover:text-brand-ink-soft transition-colors">
                <span className="flex items-center space-x-1">
                  <Info className="w-3 h-3" />
                  <span>Réservation guidée</span>
                </span>
                <span>[ INFO ]</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
