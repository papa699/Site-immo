import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Extract unique categories dynamically
  const categories = ['Tous', ...Array.from(new Set(GALLERY_ITEMS.map(item => item.category)))];

  // Filter local items
  const filteredItems = selectedCategory === 'Tous'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (id: string) => {
    const idx = GALLERY_ITEMS.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIdx = (lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      setLightboxIndex(prevIdx);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIdx = (lightboxIndex + 1) % GALLERY_ITEMS.length;
      setLightboxIndex(nextIdx);
    }
  };

  return (
    <section id="galerie" className="py-24 bg-gray-50 font-sans border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title and Intro */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-1 bg-blue-100 text-blue-700 font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles size={12} className="text-blue-600 animate-spin" />
            <span>Galerie ImmoVision</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Immersion dans nos plus beaux intérieurs
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Parcourez les détails de nos sélections exclusives de prestige à travers l’œil de nos photographes professionnels.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : 'bg-white text-gray-600 hover:text-blue-950 hover:bg-white border border-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-lg shadow-gray-200/50 cursor-pointer border border-white"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Hover Dark Overlay and Metadata */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-bold mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-display font-extrabold text-sm mb-1 leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center text-blue-200 text-xs">
                  <MapPin size={12} className="mr-1" />
                  <span>{item.location}</span>
                </div>
                
                {/* Maximize Icon Indicator */}
                <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          id="lightbox-frame"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close lightbox controls */}
          <button
            id="close-lightbox"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors cursor-pointer"
            aria-label="Fermer la galerie photo"
          >
            <X size={24} />
          </button>

          {/* Previous image slider */}
          <button
            id="lightbox-prev"
            onClick={handlePrev}
            className="absolute left-4 p-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer z-10"
            aria-label="Photo précédente"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Current image displaying */}
          <div className="max-w-4xl max-h-[75vh] relative flex flex-col items-center justify-center p-2 rounded-2xl bg-zinc-900 border border-zinc-800">
            <img
              src={GALLERY_ITEMS[lightboxIndex].url}
              alt={GALLERY_ITEMS[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
            {/* Metadata overlay beneath the photography */}
            <div className="w-full text-center mt-4 text-white space-y-1">
              <span className="font-mono text-[10px] uppercase text-blue-400 font-extrabold tracking-widest">
                {GALLERY_ITEMS[lightboxIndex].category}
              </span>
              <h4 className="font-display font-extrabold text-base">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h4>
              <p className="text-gray-400 text-xs flex items-center justify-center">
                <MapPin size={12} className="mr-1 text-blue-500" />
                {GALLERY_ITEMS[lightboxIndex].location}
              </p>
            </div>
          </div>

          {/* Next image slider */}
          <button
            id="lightbox-next"
            onClick={handleNext}
            className="absolute right-4 p-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer z-10"
            aria-label="Photo suivante"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
