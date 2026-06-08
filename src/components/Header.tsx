import React, { useState, useEffect } from 'react';
import { Home, Menu, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'biens', label: 'Biens' },
    { id: 'recherche', label: 'Recherche' },
    { id: 'galerie', label: 'Galerie' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-blue-950/95 backdrop-blur-md shadow-lg py-3 border-b border-blue-900/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="nav-logo"
            onClick={() => handleLinkClick('accueil')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-xl shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
              <Home size={22} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="font-display text-xl font-extrabold text-white tracking-tight">
                Immo<span className="text-blue-400">Vision</span>
              </span>
              <p className="text-[9px] text-blue-200/70 uppercase tracking-widest font-semibold font-mono leading-none mt-0.5">
                Premium Real Estate
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-white bg-blue-800/60 font-semibold shadow-inner'
                    : 'text-blue-100 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <button
              id="header-cta"
              onClick={() => handleLinkClick('contact')}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all active:scale-95 cursor-pointer"
            >
              <PhoneCall size={15} />
              <span>Nous Appeler</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-100 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu-drawer"
        className={`md:hidden absolute top-full left-0 right-0 bg-blue-950/98 backdrop-blur-lg border-b border-blue-900/50 shadow-2xl transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              onClick={() => handleLinkClick(item.id)}
              className={`w-full text-left px-5 py-3 rounded-xl text-base font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-blue-600/30 text-white font-bold border-l-4 border-blue-500'
                  : 'text-blue-100 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-blue-900/30 px-5">
            <button
              id="mobile-menu-cta"
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/10 cursor-pointer"
            >
              <PhoneCall size={18} />
              <span>Estimer mon bien</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
