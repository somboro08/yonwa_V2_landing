import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import GanvieBreak from './components/GanvieBreak';
import Demo from './components/Demo';
import Artisans from './components/Artisans';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-bg text-brand-ink min-h-screen selection:bg-brand-primary selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />

      {/* Sections avec dividers subtils */}
      <ProblemSolution />

      <div className="h-px w-full bg-brand-border" />
      <Features />

      {/* Break visuel : Ganvié coucher de soleil */}
      <GanvieBreak />

      <Demo />

      <div className="h-px w-full bg-brand-border" />
      <Artisans />

      <div className="h-px w-full bg-brand-border" />
      <Events />

      <div className="h-px w-full bg-brand-border" />
      <Testimonials />

      <div className="h-px w-full bg-brand-border" />
      <Team />

      <Footer />
    </div>
  );
}

export default App;