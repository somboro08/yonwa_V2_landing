import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail } from 'lucide-react';

/* ──────────────────────────────────────────────
   ÉQUIPE YONWA — Mets à jour les données ici
────────────────────────────────────────────── */
const team = [
  {
    id: 1,
    name: "Gaspard",
    role: "Fondateur & CEO",
    bio: "Visionnaire derrière Yonwa. Passionné par la culture béninoise et l'innovation technologique, il développe des ponts entre le patrimoine ancestral et le monde numérique.",
    avatar: "Fondateurs/Gaspard-CEO.jpg",
    initials: "G",
    accentColor: "#EF8E0E",
    social: {
      linkedin: "#",
    }
  },
  {
    id: 2,
    name: "Georges",
    role: "CTO",
    bio: "Architecte technique de l'application, Georges orchestre l'infrastructure et garantit des expériences utilisateurs fluides, robustes et performantes.",
    avatar: "Fondateurs/Georges-CTO.jpg",
    initials: "G",
    accentColor: "#2E9E5B",
    social: {
      linkedin: "#",
    }
  },
  {
    id: 3,
    name: "Christelle",
    role: "CDO (Chief Design Officer)",
    bio: "Créatrice d'identités visuelles fortes. Elle veille à ce que chaque pixel de Yonwa reflète la beauté et la richesse du patrimoine béninois.",
    avatar: "Fondateurs/Christelle-CDO.jpg",
    initials: "C",
    accentColor: "#E85D75",
    social: {
      linkedin: "#",
    }
  },
  {
    id: 4,
    name: "Giovani",
    role: "CMO",
    bio: "Stratège de la croissance, il connecte Yonwa aux voyageurs du monde entier et amplifie la voix des artisans béninois sur la scène internationale.",
    avatar: "Fondateurs/Giovani-CMO.jpg",
    initials: "G",
    accentColor: "#E8B93F",
    social: {
      linkedin: "#",
    }
  },
  {
    id: 5,
    name: "Modeste",
    role: "CPO",
    bio: "Garant du produit, Modeste s'assure que chaque fonctionnalité répond aux besoins réels des voyageurs et des artisans locaux.",
    avatar: "Fondateurs/Modeste-CPO.jpg",
    initials: "M",
    accentColor: "#EF8E0E",
    social: {
      linkedin: "#",
    }
  }
];

/* ── Container animation variants ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 90, damping: 18 }
  }
};

const socialIcons = {
  linkedin:  { Icon: Globe,  label: 'Web' },
  twitter:   { Icon: Globe,  label: 'Web' },
  github:    { Icon: Globe,  label: 'Web' },
  instagram: { Icon: Globe,  label: 'Web' },
};

export default function Team() {
  return (
    <section id="equipe" className="py-32 px-6 bg-brand-bg relative overflow-hidden">

      {/* ── Decorative background ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-border" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-brand-primary/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-brand-green/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <span className="font-mono text-xs text-brand-primary tracking-[0.25em] uppercase">
            L'Équipe
          </span>
          <h2
            className="text-4xl md:text-6xl font-black text-brand-ink mt-4 mb-6 leading-tight"
            style={{ fontFamily: 'Kanit, sans-serif' }}
          >
            Les bâtisseurs de{' '}
            <span className="text-gradient-primary">Yonwa</span>
          </h2>
          <p className="font-sans text-brand-ink-soft text-lg leading-relaxed">
            Une équipe soudée, animée par une même conviction : faire rayonner
            la culture béninoise à travers la technologie.
          </p>
        </motion.div>

        {/* ── Team Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap justify-center gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="group relative bg-brand-surface border border-brand-border rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer overflow-hidden w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              {/* Hover background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% -20%, ${member.accentColor}12 0%, transparent 65%)` }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full transition-all duration-300 group-hover:w-24"
                style={{ backgroundColor: member.accentColor }}
              />

              {/* ── Avatar ── */}
              <div className="relative mb-6 mt-2">
                {member.avatar ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      fontFamily: 'Kanit, sans-serif',
                      background: `linear-gradient(135deg, ${member.accentColor} 0%, ${member.accentColor}99 100%)`,
                    }}
                  >
                    {member.initials}
                  </div>
                )}

                {/* Online indicator */}
                <div
                  className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full border-2 border-white animate-pulse-glow"
                  style={{ backgroundColor: member.accentColor }}
                />
              </div>

              {/* ── Info ── */}
              <div className="space-y-2 mb-5 relative z-10">
                <h3 className="font-sans font-bold text-brand-ink text-base leading-tight">
                  {member.name}
                </h3>
                <span
                  className="inline-block font-mono text-[11px] tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{ color: member.accentColor, backgroundColor: `${member.accentColor}15` }}
                >
                  {member.role}
                </span>
              </div>

              {/* ── Bio ── */}
              <p className="text-brand-ink-soft text-xs leading-relaxed mb-8 relative z-10 flex-1">
                {member.bio}
              </p>

              {/* ── Social Links ── */}
              <div className="flex items-center justify-center space-x-2 relative z-10">
                {Object.entries(member.social).map(([platform, url]) => {
                  const s = socialIcons[platform];
                  if (!s) return null;
                  const { Icon } = s;
                  return (
                    <a
                      key={platform}
                      href={url}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-ink-faint hover:text-brand-ink hover:border-brand-ink-soft hover:shadow-sm transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-brand-ink-soft text-sm font-mono">
            Vous souhaitez rejoindre l'aventure ?
          </p>
          <a
            href="mailto:contact@yonwa.com"
            className="inline-flex items-center space-x-2 mt-3 px-6 py-3 rounded-full border border-brand-border hover:border-brand-primary hover:text-brand-primary font-sans text-sm font-semibold text-brand-ink-soft transition-all duration-200 hover:shadow-md"
          >
            <span>Rejoindre l'équipe</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
