import React from 'react';
import { Mail, Phone, MapPin, Shield, Download } from 'lucide-react';
import { APP_LINKS } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="download" className="relative bg-brand-surface border-t border-brand-border pt-24 pb-12 overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Final CTA Card */}
        <div className="bg-brand-ink rounded-[32px] p-8 md:p-16 text-center max-w-4xl mx-auto mb-20 relative overflow-hidden">
          
          {/* Decorative glows */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-primary/20 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-green/20 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <span className="font-mono text-xs text-brand-primary tracking-[0.2em] uppercase">Rejoignez l'aventure</span>
            
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
              Prêt à découvrir le Bénin autrement ?
            </h2>
            
            <p className="font-sans text-white/70 text-base md:text-lg">
              Téléchargez l'application Yonwa aujourd'hui et commencez à planifier vos rencontres avec les plus grands créateurs culturels locaux.
            </p>

            {/* Download Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              
              {/* App Store Badge */}
              <a 
                href="#app-store" 
                className="w-52 h-16 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-primary rounded-2xl flex items-center px-4 transition-all hover:scale-[1.02]"
              >
                <svg className="w-8 h-8 text-white mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.24 12.37,21.24C10.84,21.24 10.37,22 9.09,22.05C7.79,22.1 6.8,20.77 5.96,19.58C4.25,17.12 2.94,12.56 4.7,9.5C5.57,8 7.13,7.1 8.82,7.07C10.1,7.05 11.32,7.93 12.11,7.93C12.9,7.93 14.38,6.88 15.93,7.04C16.57,7.07 18.38,7.3 19.59,9.07C19.49,9.13 17.28,10.42 17.3,13C17.33,16.14 20,17.2 20.03,17.21C20.01,17.28 19.6,18.7 18.71,19.5M15.97,4.86C16.63,4.07 17.07,2.97 16.95,1.87C16,1.9 14.87,2.47 14.21,3.24C13.65,3.88 13.16,5 13.31,6.07C14.36,6.15 15.4,5.56 15.97,4.86Z"/>
                </svg>
                <div className="text-left">
                  <span className="text-[9px] font-mono text-white/50 block leading-none">TÉLÉCHARGER DANS L'</span>
                  <span className="text-sm font-sans font-semibold text-white leading-tight">App Store</span>
                </div>
              </a>

              {/* Google Play / Android APK Badge */}
              <a 
                href={APP_LINKS.ANDROID_APK}
                download
                className="w-52 h-16 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-primary rounded-2xl flex items-center px-4 transition-all hover:scale-[1.02]"
              >
                <svg className="w-8 h-8 text-white mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.5,12L7,6V18L17.5,12Z"/>
                </svg>
                <div className="text-left">
                  <span className="text-[9px] font-mono text-white/50 block leading-none">TÉLÉCHARGER L'APK</span>
                  <span className="text-sm font-sans font-semibold text-white leading-tight">Pour Android</span>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-brand-border text-left">
          
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-ink">
              YONWA<span className="text-brand-primary">.</span>
            </h3>
            <p className="font-sans text-brand-ink-soft text-sm leading-relaxed">
              Connecter les voyageurs aux artisans locaux et faire briller le patrimoine vivant béninois.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs text-brand-primary uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-brand-ink-soft">
              <li><a href="#concept" className="hover:text-brand-primary transition-colors">Le Concept</a></li>
              <li><a href="#features" className="hover:text-brand-primary transition-colors">Fonctionnalités</a></li>
              <li><a href="#demo" className="hover:text-brand-primary transition-colors">Démonstration</a></li>
              <li><a href="#artisans" className="hover:text-brand-primary transition-colors">Nos Artisans</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs text-brand-primary uppercase tracking-wider">Contact & Support</h4>
            <ul className="space-y-2 text-sm text-brand-ink-soft">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-ink-faint" />
                <span>georgeskorogone1@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-ink-faint" />
                <span>+229 01 94 45 57 20</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-ink-faint" />
                <span>Cotonou, Bénin</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs text-brand-primary uppercase tracking-wider">Légal</h4>
            <ul className="space-y-2 text-sm text-brand-ink-soft">
              <li><a href="#terms" className="hover:text-brand-primary transition-colors">Conditions d'Utilisation</a></li>
              <li><a href="#privacy" className="hover:text-brand-primary transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#charter" className="hover:text-brand-primary transition-colors">Charte Éthique & Artisanale</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-brand-ink-faint text-center gap-4">
          <p>© {currentYear} Yonwa. Tous droits réservés.</p>
          <div className="flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5 text-brand-green" />
            <span>Application éthique et équitable auditée</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
