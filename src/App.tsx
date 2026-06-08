import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ArrowUp, Info, ShieldCheck, Heart, UserCheck } from 'lucide-react';
import { Property, FilterCriteria } from './types';
import { PROPERTIES } from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SearchFilters from './components/SearchFilters';
import PropertyCard from './components/PropertyCard';
import PropertyModal from './components/PropertyModal';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Filter Criteria State
  const [filters, setFilters] = useState<FilterCriteria>({
    searchQuery: '',
    city: '',
    type: '',
    status: 'A Vendre', // Defaults to 'A Vendre' (Achat)
    minPrice: '',
    maxPrice: ''
  });

  // Track active section and scroll height for the ScrollTop button
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back-to-top floating button status
      if (window.scrollY > 450) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Live viewport navigation tracking
      const sections = ['accueil', 'biens', 'recherche', 'galerie', 'contact'];
      const currentScroll = window.scrollY + 220; // safe padding offset for menu heights

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth browser client scroll
      const offsetTop = element.offsetTop - 85; // space for absolute header spacing
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      city: '',
      type: '',
      status: filters.status, // Preserve current Vendre / Louer tab status
      minPrice: '',
      maxPrice: ''
    });
  };

  // Perform dynamic JavaScript client-side filtering on database in real-time
  const filteredProperties = PROPERTIES.filter((property) => {
    // 1. Filter by buy/rent status
    if (property.status !== filters.status) return false;

    // 2. Filter by city location
    if (filters.city && property.city.toLowerCase() !== filters.city.toLowerCase()) return false;

    // 3. Filter by property type
    if (filters.type && property.type !== filters.type) return false;

    // 4. Min Price Condition
    if (filters.minPrice) {
      const minVal = parseInt(filters.minPrice, 10);
      if (property.price < minVal) return false;
    }

    // 5. Max Price Condition
    if (filters.maxPrice) {
      const maxVal = parseInt(filters.maxPrice, 10);
      if (property.price > maxVal) return false;
    }

    // 6. Generic textual lookups in titles, addresses, features or descriptions
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase().trim();
      const inTitle = property.title.toLowerCase().includes(query);
      const inDesc = property.description.toLowerCase().includes(query);
      const inAddress = property.address.toLowerCase().includes(query);
      const inFeatures = property.features.some(f => f.toLowerCase().includes(query));

      if (!inTitle && !inDesc && !inAddress && !inFeatures) return false;
    }

    return true;
  });

  const featuredProperties = PROPERTIES.filter(p => p.featured).slice(0, 3);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Fixed Header */}
      <Header activeSection={activeSection} onNavigate={handleSectionNavigation} />

      {/* Hero Header Section */}
      <Hero
        onExploreClick={() => handleSectionNavigation('biens')}
        onSearchClick={() => handleSectionNavigation('recherche')}
      />

      {/* Key Real Estate Stats Panel */}
      <Stats />

      {/* Featured Properties Spotlights */}
      <section id="biens" className="py-24 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header titles */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-1 bg-blue-50 text-blue-700 font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <span>Collection Privée</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              Nos Biens immobiliers à la Une
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Sélection rigoureuse de nos propriétés résidentielles les plus spectaculaires disposant de prestations exceptionnelles.
            </p>
          </div>

          {/* Properties Grid view */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={(prop) => setSelectedProperty(prop)}
              />
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => handleSectionNavigation('recherche')}
              className="inline-flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-950 font-bold px-6 py-3 rounded-xl text-sm border border-blue-100 cursor-pointer"
            >
              <span>Accéder à l’intégralité du pack catalogue</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Trust guarantees badge row */}
      <section className="bg-gray-50 border-t border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="p-3.5 bg-blue-100 text-blue-700 rounded-2xl flex-shrink-0">
                <ShieldCheck size={24} className="stroke-[2.5]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-blue-950 text-sm">Garantie Légale Intégrale</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">Toutes nos transactions sont visées par un protocole juridique d’assurance totale.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="p-3.5 bg-blue-100 text-blue-700 rounded-2xl flex-shrink-0">
                <Heart size={24} className="stroke-[2.5]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-blue-950 text-sm">Coup de Cœur Vérifié</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">Nos conseillers visitent et expertisent chaque lot sur plus de 95 points de contrôle d'usage.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="p-3.5 bg-blue-100 text-blue-700 rounded-2xl flex-shrink-0">
                <UserCheck size={24} className="stroke-[2.5]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-blue-950 text-sm">Conseiller Unique Dédié</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">Un interlocuteur de transaction disponible 6j/7 pour piloter votre projet global.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Interactive Search Engine & Complete Catalog Results */}
      <section id="recherche" className="py-24 bg-white/70 backdrop-blur-sm border-b border-gray-100 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Introduction */}
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs uppercase font-mono tracking-widest text-blue-600 font-extrabold block">
              Catalogue Interactif
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight leading-none">
              Explorez et Filtrez nos résidences de prestige
            </h2>
          </div>

          {/* Search filter toolbar */}
          <SearchFilters
            filters={filters}
            onFilterChange={(newFilters) => setFilters(newFilters)}
            onResetFilters={handleResetFilters}
            totalFiltered={filteredProperties.length}
          />

          {/* Grid dynamic results */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onViewDetails={(prop) => setSelectedProperty(prop)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-3xl p-12 text-center max-w-lg mx-auto border border-gray-100 space-y-4">
              <Info size={40} className="text-blue-500 mx-auto" />
              <h3 className="font-display text-lg font-bold text-blue-950">
                Aucun bien ne correspond à ces critères
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed font-sans">
                Nous vous suggérons d’élargir vos fourchettes de budgets financiers, de réinitialiser vos requêtes textuelles ou de basculer entre les modes Vente (Achat) et Location.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Premium Photo Gallery and Lightbox zoom capabilities */}
      <Gallery />

      {/* Customer feedback and reviews testimonies */}
      <Testimonials />

      {/* Project Contact form and validated inputs */}
      <ContactForm />

      {/* Dynamic detailed Property Modal details info */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      {/* Bottom Footer segment */}
      <Footer onNavigate={handleSectionNavigation} />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-floating"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 transition-all z-40 cursor-pointer animate-[bounce_3s_infinite_alternate]"
          aria-label="Retourner en haut de la page"
        >
          <ArrowUp size={20} className="stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}
