import React from 'react';
import { Home, Facebook, Instagram, Linkedin, Twitter, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white font-sans border-t border-blue-900/40">
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand/Logo Card */}
          <div className="space-y-4">
            <div
              onClick={() => onNavigate('accueil')}
              className="flex items-center space-x-2 cursor-pointer group w-fit"
            >
              <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-lg transition-colors group-hover:bg-blue-500">
                <Home size={20} className="stroke-[2.5]" />
              </div>
              <span className="font-display text-lg font-extrabold text-white tracking-tight">
                Immo<span className="text-blue-400">Vision</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              ImmoVision est un cabinet d’experts et de négociateurs immobiliers spécialisé dans l’acquisition, la vente, et la location de résidences de prestige et d’appartements d’exception.
            </p>

            {/* Social channels */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 hover:bg-blue-600 rounded-lg text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 hover:bg-pink-600 rounded-lg text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 hover:bg-blue-700 rounded-lg text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Suivez-nous sur LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 hover:bg-sky-500 rounded-lg text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Suivez-nous sur Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-extrabold tracking-wider uppercase text-blue-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('accueil')}
                  className="hover:text-white hover:underline transition-all cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('biens')}
                  className="hover:text-white hover:underline transition-all cursor-pointer"
                >
                  Nos Biens d’Exception
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('recherche')}
                  className="hover:text-white hover:underline transition-all cursor-pointer"
                >
                  Recherche & Filtres
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galerie')}
                  className="hover:text-white hover:underline transition-all cursor-pointer"
                >
                  Galerie Photos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white hover:underline transition-all cursor-pointer"
                >
                  Contact & Étude de Projet
                </button>
              </li>
            </ul>
          </div>

          {/* Core listings sectors */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-extrabold tracking-wider uppercase text-blue-400">
              Secteurs Clés
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Nice — Front de mer & Hauteurs de Nice</li>
              <li>Paris — Rive Gauche & Triangle d’or</li>
              <li>Lyon — Presqu’Île & Mont d’Or</li>
              <li>Bordeaux — Centre historique & Côte landaise</li>
              <li>Marseille — Corniche & Roucas-Blanc</li>
            </ul>
          </div>

          {/* Direct agency coords */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-extrabold tracking-wider uppercase text-blue-400">
              Aide & Secrétariat
            </h4>
            <div className="space-y-3.5 text-xs text-gray-400">
              <div className="flex items-center">
                <Phone size={14} className="text-blue-500 mr-2.5 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="text-blue-500 mr-2.5 flex-shrink-0" />
                <span>contact@immovision.fr</span>
              </div>
              <div className="flex items-start">
                <MapPin size={14} className="text-blue-500 mr-2.5 flex-shrink-0" />
                <span>15 Avenue des Champs-Élysées, 75008 Paris, France</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer copyright segment + Back To Top */}
      <div className="bg-blue-950/80 border-t border-blue-900/50 py-6 text-center select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500 font-medium">
            &copy; {currentYear} ImmoVision SAS. Tous droits réservés. Mentions Légales | RGPD.
          </p>

          {/* Elegant Back to Top button */}
          <button
            id="back-to-top-footer"
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs font-semibold text-blue-400 hover:text-white bg-blue-900/30 hover:bg-blue-600 px-4.5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md border border-blue-900/30"
          >
            <span>Retour en haut</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
