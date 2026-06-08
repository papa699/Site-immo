import React from 'react';
import { MapPin, BedDouble, Bath, Maximize2, Tag, ChevronRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  key?: string;
  property: Property;
  onViewDetails: (property: Property) => void;
}

export default function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  // Format price in French style (e.g. 1 350 000 € or 1 200 € / mois)
  const formatPrice = (price: number, status: string) => {
    const formattedPrice = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(price);
    
    return status === 'A Louer' ? `${formattedPrice} / mois` : formattedPrice;
  };

  // Get color for DPE rating
  const getDpeColor = (dpe: string) => {
    switch (dpe) {
      case 'A': return 'bg-emerald-500 text-white';
      case 'B': return 'bg-green-500 text-white';
      case 'C': return 'bg-yellow-500 text-gray-900';
      case 'D': return 'bg-amber-500 text-white';
      default: return 'bg-orange-500 text-white';
    }
  };

  return (
    <div
      id={`property-card-${property.id}`}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-100/40 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col h-full font-sans"
    >
      {/* Property Image & Badges */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Status Badge */}
        <span
          className={`absolute top-4 left-4 z-10 font-sans text-xs font-bold px-3 py-1.5 rounded-full shadow-lg text-white ${
            property.status === 'A Vendre' ? 'bg-blue-600' : 'bg-green-600'
          }`}
        >
          {property.status}
        </span>
        
        {/* Type Badge */}
        <span className="absolute top-4 right-4 z-10 font-sans text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-950/80 backdrop-blur-md text-white border border-white/10">
          {property.type}
        </span>

        {/* DPE Assessment Indicator */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-xl shadow-sm">
          <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">DPE</span>
          <span className={`text-xs font-black px-1.5 py-0.5 rounded ${getDpeColor(property.dpe)}`}>
            {property.dpe}
          </span>
        </div>
      </div>

      {/* Property Description & Stats */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Price Tag */}
        <div className="flex items-center space-x-2 text-blue-600 font-display text-xl font-extrabold mb-2">
          <Tag size={18} className="stroke-[2]" />
          <span>{formatPrice(property.price, property.status)}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-base font-bold text-blue-950 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1.5">
          {property.title}
        </h3>

        {/* Location */}
        <div id={`property-address-${property.id}`} className="flex items-center space-x-1.5 text-gray-400 text-xs mb-4">
          <MapPin size={14} className="flex-shrink-0" />
          <span className="line-clamp-1">{property.address}</span>
        </div>

        {/* Core Specs Grid */}
        <div className="grid grid-cols-3 gap-2 border-t border-b border-gray-100 py-3.5 mb-5 text-gray-500 text-xs font-medium">
          <div className="flex items-center space-x-1.5 justify-center">
            <Maximize2 size={14} className="text-gray-400" />
            <span>{property.area} m²</span>
          </div>
          <div className="flex items-center space-x-1.5 justify-center border-l border-r border-gray-100">
            <BedDouble size={14} className="text-gray-400" />
            <span>{property.bedrooms ? `${property.bedrooms} ch` : 'Terrain'}</span>
          </div>
          <div className="flex items-center space-x-1.5 justify-center">
            <Bath size={14} className="text-gray-400" />
            <span>{property.bathrooms ? `${property.bathrooms} sdb` : 'N/A'}</span>
          </div>
        </div>

        {/* Description Snippet */}
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-6">
          {property.description}
        </p>

        {/* Action Button */}
        <div className="mt-auto pt-2">
          <button
            id={`property-btn-details-${property.id}`}
            onClick={() => onViewDetails(property)}
            className="w-full flex items-center justify-center space-x-1.5 bg-gray-50 hover:bg-blue-600 text-blue-950 hover:text-white font-bold py-3.5 px-4 rounded-xl border border-gray-100 hover:border-blue-600 transition-all cursor-pointer group-hover:shadow-[0_10px_20px_rgba(30,58,138,0.06)]"
          >
            <span>Voir détails</span>
            <ChevronRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
