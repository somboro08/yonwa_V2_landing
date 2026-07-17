import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sophie Laurent",
    role: "Voyageuse · France",
    quote: "Une immersion inoubliable ! J'ai appris le tissage traditionnel à Abomey. L'application m'a permis de me connecter directement à l'artisan sans intermédiaires et de réserver en toute confiance.",
    avatarText: "SL",
    accent: "#EF8E0E"
  },
  {
    id: 2,
    name: "Koffi Gbaguidi",
    role: "Maître Sculpteur · Bénin",
    quote: "Yonwa a complètement changé ma façon de travailler. J'ai maintenant un calendrier en ligne pour planifier mes ateliers et je reçois mes paiements directement sur mon Mobile Money sans retard.",
    avatarText: "KG",
    accent: "#2E9E5B"
  },
  {
    id: 3,
    name: "Marc-André Moreau",
    role: "Voyageur · Canada",
    quote: "L'assistant vocal Grio m'a énormément aidé sur le terrain pour comprendre les rituels et l'histoire des divinités au festival de Nikki. C'est l'application indispensable pour tout voyageur curieux.",
    avatarText: "MM",
    accent: "#E85D75"
  }
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      {/* Banner image with feu de camp */}
      <div className="relative h-64 overflow-hidden">
        <img
          src="/feuCamping.jpeg"
          alt="Soirée autour du feu au Bénin"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-border/10 via-black/50 to-brand-surface" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center space-y-2">
          <span className="font-mono text-xs text-brand-primary tracking-[0.2em] uppercase">Témoignages</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight drop-shadow-lg">
            Ce qu'ils en disent
          </h2>
        </div>
      </div>

      {/* Cards section */}
      <div className="bg-brand-surface py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
                className="bg-brand-bg border border-brand-border rounded-3xl p-8 flex flex-col justify-between relative hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-brand-primary/15 absolute top-6 right-6" />
                
                <div className="space-y-5">
                  {/* Rating stars */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-primary fill-brand-primary" />
                    ))}
                  </div>

                  <p className="text-brand-ink-soft text-sm italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author info */}
                <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-brand-border">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-sans font-bold text-sm text-white flex-shrink-0"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-brand-ink">{item.name}</h4>
                    <span className="text-[11px] font-mono text-brand-ink-faint block mt-0.5">{item.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
