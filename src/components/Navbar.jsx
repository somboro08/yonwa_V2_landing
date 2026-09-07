import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { APP_LINKS } from '../config';
import { useDetectOS } from '../hooks/useDetectOS';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { os, getDownloadLink, getDownloadLabel } = useDetectOS();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-brand-border'
        : 'bg-transparent'
    }`}>
      {/* Floating pill container when not scrolled */}
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${
        scrolled ? 'py-0' : 'pt-4'
      }`}>
        <div className={`transition-all duration-500 flex items-center justify-between ${
          scrolled
            ? 'h-16'
            : 'h-16 bg-white/85 backdrop-blur-xl rounded-2xl px-6 shadow-lg shadow-black/5 border border-white/60'
        }`}>
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/y.png" 
              alt="Yonwa" 
              className="h-9 w-auto mix-blend-multiply"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            <a href="#concept" className="text-brand-ink-soft hover:text-brand-primary font-sans text-sm tracking-wide transition-colors">Le Concept</a>
            <a href="#features" className="text-brand-ink-soft hover:text-brand-primary font-sans text-sm tracking-wide transition-colors">Fonctionnalités</a>
            <a href="#demo" className="text-brand-ink-soft hover:text-brand-primary font-sans text-sm tracking-wide transition-colors">Démonstration</a>
            <a href="#artisans" className="text-brand-ink-soft hover:text-brand-primary font-sans text-sm tracking-wide transition-colors">Artisans</a>
            <a href="#events" className="text-brand-ink-soft hover:text-brand-primary font-sans text-sm tracking-wide transition-colors">Événements</a>
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="flex items-center space-x-1 text-sm font-mono text-brand-ink-soft hover:text-brand-ink transition-colors">
              <Globe className="w-4 h-4" />
              <span>FR</span>
            </button>
            <a
              href={getDownloadLink()}
              download={os !== 'ios'}
              className="px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-sans font-semibold transition-all transform hover:scale-[1.02] flex items-center space-x-2 shadow-md shadow-brand-primary/25"
            >
              <span>{getDownloadLabel()}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-ink hover:text-brand-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-brand-border py-6 px-6 space-y-4 flex flex-col shadow-lg mt-1 mx-3 rounded-2xl">
          <a href="#concept" onClick={() => setIsOpen(false)} className="text-brand-ink-soft hover:text-brand-primary text-base font-sans transition-colors">Le Concept</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="text-brand-ink-soft hover:text-brand-primary text-base font-sans transition-colors">Fonctionnalités</a>
          <a href="#demo" onClick={() => setIsOpen(false)} className="text-brand-ink-soft hover:text-brand-primary text-base font-sans transition-colors">Démonstration</a>
          <a href="#artisans" onClick={() => setIsOpen(false)} className="text-brand-ink-soft hover:text-brand-primary text-base font-sans transition-colors">Nos Artisans</a>
          <a href="#events" onClick={() => setIsOpen(false)} className="text-brand-ink-soft hover:text-brand-primary text-base font-sans transition-colors">Événements</a>
          <div className="pt-4 border-t border-brand-border flex flex-col space-y-3">
            <button className="flex items-center space-x-2 text-sm font-mono text-brand-ink-soft">
              <Globe className="w-4 h-4" />
              <span>Français (FR)</span>
            </button>
            <a
              href={getDownloadLink()}
              download={os !== 'ios'}
              onClick={() => setIsOpen(false)}
              className="py-3 rounded-xl bg-brand-primary text-white text-center font-sans font-semibold transition-all"
            >
              {getDownloadLabel()}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
