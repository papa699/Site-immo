import React from 'react';
import { Sparkles, ArrowRight, Building, Search } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onSearchClick: () => void;
}

export default function Hero({ onExploreClick, onSearchClick }: HeroProps) {
  return (
    <section
      id="accueil"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 overflow-hidden bg-blue-950 font-sans"
    >
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
          alt="Bannière ImmoVision"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_infinite_ease-in-out]"
          referrerPolicy="no-referrer"
        />
        {/* Deep blue color filters to guarantee high contrast accessibility */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/95 via-blue-950/80 to-blue-900/40 z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] z-10Opacity" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-md border border-blue-400/30 px-4.5 py-2 rounded-full text-blue-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 animate-[bounce_3s_infinite_alternate]">
          <Sparkles size={14} className="text-yellow-400" />
          <span>L’immobilier d’exception à votre portée</span>
        </div>

        <h1
          id="hero-title"
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8"
        >
          Trouvez le bien immobilier <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            de vos rêves
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed font-normal mb-10"
        >
          ImmoVision vous accompagne avec passion et expertise dans la recherche,
          l’achat, l’estimation ou la location de résidences d’exception et d’appartements haut de gamme.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="hero-btn-explore"
            onClick={onExploreClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4.5 rounded-2xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all active:scale-95 text-base group cursor-pointer"
          >
            <Building size={20} />
            <span>Voir les biens</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-btn-search"
            onClick={onSearchClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4.5 rounded-2xl border border-white/20 backdrop-blur-md hover:border-white/40 transition-all active:scale-95 text-base cursor-pointer"
          >
            <Search size={20} className="text-blue-300" />
            <span>Recherche avancée</span>
          </button>
        </div>
      </div>

      {/* Diagonal Bottom Cutout decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-25" />
    </section>
  );
}
