import React from 'react';
import { Search, MapPin, Building2, Euro, SlidersHorizontal, RefreshCcw } from 'lucide-react';
import { FilterCriteria } from '../types';
import { CITIES, PROPERTY_TYPES } from '../data';

interface SearchFiltersProps {
  filters: FilterCriteria;
  onFilterChange: (filters: FilterCriteria) => void;
  onResetFilters: () => void;
  totalFiltered: number;
}

export default function SearchFilters({
  filters,
  onFilterChange,
  onResetFilters,
  totalFiltered
}: SearchFiltersProps) {
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value
    });
  };

  const priceOptions = [
    { value: '', label: 'Indifférent' },
    { value: '100000', label: '100 000 €' },
    { value: '250000', label: '250 000 €' },
    { value: '500000', label: '500 000 €' },
    { value: '750000', label: '750 000 €' },
    { value: '1000000', label: '1 000 000 €' },
    { value: '1500000', label: '1 500 000 €' },
    { value: '2000000', label: '2 000 000 €' }
  ];

  const rentPriceOptions = [
    { value: '', label: 'Indifférent' },
    { value: '500', label: '500 €' },
    { value: '1000', label: '1 000 €' },
    { value: '1500', label: '1 500 €' },
    { value: '2000', label: '2 000 €' },
    { value: '3000', label: '3 000 €' }
  ];

  const isRentalSelected = filters.status === 'A Louer';
  const selectedPriceOptions = isRentalSelected ? rentPriceOptions : priceOptions;

  return (
    <div
      id="search-component"
      className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-blue-900/5 p-6 sm:p-8 space-y-6 max-w-7xl mx-auto font-sans"
    >
      {/* Header section with total result count */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center">
            <SlidersHorizontal size={22} className="text-blue-500 mr-2.5 stroke-[2]" />
            Moteur de recherche avancé
          </h2>
          <p className="text-gray-400 text-xs mt-0.5">
            Ajustez vos filtres d’achat ou de location en temps réel
          </p>
        </div>
        
        <div id="results-pill" className="flex items-center space-x-3 self-start sm:self-auto">
          <span className="text-xs bg-blue-50 text-blue-700 font-bold px-3.5 py-1.5 rounded-full border border-blue-100">
            {totalFiltered === 0 ? 'Aucun bien trouvé' : `${totalFiltered} bien(s) correspondant(s)`}
          </span>
          <button
            onClick={onResetFilters}
            className="flex items-center text-xs text-blue-950 hover:text-blue-600 font-semibold cursor-pointer py-1.5 px-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <RefreshCcw size={13} className="mr-1.5" /> Réinitialiser
          </button>
        </div>
      </div>

      {/* Primary Row Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Keyword Textbox */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider">
            Recherche par mot-clé
          </label>
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              name="searchQuery"
              value={filters.searchQuery}
              onChange={handleSelectChange}
              placeholder="Ex: piscine, haussmannien, jardin..."
              className="w-full bg-gray-50/50 hover:bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl py-3 pl-11 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-100 transition-all font-sans"
            />
          </div>
        </div>

        {/* City Filter */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider">
            Localisation (Ville)
          </label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
            <select
              name="city"
              value={filters.city}
              onChange={handleSelectChange}
              className="w-full bg-gray-50/50 hover:bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl py-3 pl-11 pr-10 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer appearance-none font-sans"
            >
              {CITIES.map((city) => (
                <option key={city} value={city === 'Tous' ? '' : city}>
                  {city === 'Tous' ? 'Toutes les villes' : city}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-4.5 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400 w-0 h-0" />
          </div>
        </div>

        {/* Property Type Filter */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider">
            Type de Bien
          </label>
          <div className="relative">
            <Building2 className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
            <select
              name="type"
              value={filters.type}
              onChange={handleSelectChange}
              className="w-full bg-gray-50/50 hover:bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl py-3 pl-11 pr-10 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer appearance-none font-sans"
            >
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type === 'Tous' ? '' : type}>
                  {type === 'Tous' ? 'Tout type de bien' : type}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-4.5 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400 w-0 h-0" />
          </div>
        </div>

        {/* Transaction Type Filter (Louer / Vendre) */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider">
            Transaction
          </label>
          <div className="grid grid-cols-2 gap-2 bg-gray-50/50 border border-gray-200 rounded-xl p-1">
            <button
              onClick={() => onFilterChange({ ...filters, status: 'A Vendre', minPrice: '', maxPrice: '' })}
              className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filters.status === 'A Vendre'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-blue-950 hover:bg-gray-100/50'
              }`}
            >
              Achat
            </button>
            <button
              onClick={() => onFilterChange({ ...filters, status: 'A Louer', minPrice: '', maxPrice: '' })}
              className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filters.status === 'A Louer'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-blue-950 hover:bg-gray-100/50'
              }`}
            >
              Location
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Price Sliding Criteria */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1 border-t border-gray-50">
        {/* Min Price selection */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center">
            <Euro size={14} className="text-gray-400 mr-1.5" />
            Budget Minimum
          </label>
          <div className="relative">
            <select
              name="minPrice"
              value={filters.minPrice}
              onChange={handleSelectChange}
              className="w-full bg-gray-50/50 hover:bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl py-3 px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer appearance-none font-sans"
            >
              <option value="">Tous budgets</option>
              {selectedPriceOptions.filter(o => o.value !== '').map((opt) => (
                <option key={`min-${opt.value}`} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-4.5 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400 w-0 h-0" />
          </div>
        </div>

        {/* Max Price selection */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center">
            <Euro size={14} className="text-gray-400 mr-1.5" />
            Budget Maximum
          </label>
          <div className="relative">
            <select
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleSelectChange}
              className="w-full bg-gray-50/50 hover:bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl py-3 px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer appearance-none font-sans"
            >
              <option value="">Tous budgets</option>
              {selectedPriceOptions.filter(o => o.value !== '').map((opt) => (
                <option key={`max-${opt.value}`} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-4.5 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400 w-0 h-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
