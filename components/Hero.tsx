import React from 'react';
import Button from './Button';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1620626012053-93f7c85e2b02?q=80&w=2070&auto=format&fit=crop"
          alt="Modern bathroom tiling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-hover text-sm font-semibold mb-6 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
             Kvaliteta na prvem mestu
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
            Profesionalno polaganje <span className="text-accent">keramike</span> in talnih oblog
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Simo Evdjić s.p. - Vaš zanesljiv partner za prenovo doma. Nudimo vrhunsko izvedbo keramičarskih del, polaganje vinila in laminata z dolgoročno garancijo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Pošlji povpraševanje
            </Button>
            <Button variant="outline" className="!text-white !border-white hover:!bg-white/10" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
              Poglejte reference
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300 border-t border-slate-700/50 pt-8">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-accent w-5 h-5" />
              <span>Dolgoletne izkušnje</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-accent w-5 h-5" />
              <span>Hitra izvedba</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-accent w-5 h-5" />
              <span>Konkurenčne cene</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 hidden md:block">
        <ChevronDown className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;