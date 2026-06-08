import React, { useState } from 'react';
import { X, MapPin, BedDouble, Bath, Maximize2, Sparkles, Phone, Mail, CheckCircle2, Send, Tag } from 'lucide-react';
import { Property } from '../types';

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `Bonjour, je suis très intéressé(e) par votre bien "${property.title}" (${property.id}). Je souhaiterais obtenir plus d'informations ou planifier une visite.`
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Veuillez saisir votre nom';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Veuillez saisir un email valide';
    }
    if (!formData.phone.trim()) errors.phone = 'Veuillez saisir votre numéro de téléphone';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Success response simulator
    setFormSubmitted(true);
    setTimeout(() => {
      // Clean up after 4s
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 4500);
  };

  const formatPrice = (price: number, status: string) => {
    const formattedPrice = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(price);
    return status === 'A Louer' ? `${formattedPrice} / mois` : formattedPrice;
  };

  return (
    <div
      id={`property-modal-${property.id}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 overflow-y-auto bg-blue-950/70 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      {/* Background Overlay dismiss */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-5xl bg-white rounded-none sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-screen sm:max-h-[90vh]">
        {/* Header Ribbon bar */}
        <div className="bg-blue-950 px-6 py-4 flex items-center justify-between text-white flex-shrink-0">
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase font-mono tracking-widest text-blue-400 font-bold">
              ImmoVision Premium ID: {property.id}
            </span>
          </div>
          <button
            id="close-modal-btn"
            onClick={onClose}
            className="p-1 px-3 bg-white/10 hover:bg-white/20 hover:text-white text-blue-100 rounded-lg transition-colors flex items-center z-20 cursor-pointer text-xs"
          >
            <X size={16} className="mr-1.5" /> Fermer
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-grow">
          {/* Main Title and Quick Specs */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-blue-600 text-white font-sans text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {property.status}
                </span>
                <span className="bg-gray-100 text-gray-800 font-sans text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase">
                  {property.type}
                </span>
                <span className="bg-emerald-50 text-emerald-700 font-mono text-[11px] font-bold px-2.5 py-1 rounded-full">
                  DPE Classe {property.dpe}
                </span>
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-blue-950 tracking-tight leading-tight">
                {property.title}
              </h2>
              <div className="flex items-center space-x-1.5 text-gray-500 text-sm mt-2">
                <MapPin size={16} className="text-blue-500" />
                <span>{property.address}</span>
              </div>
            </div>
            {/* Price Box */}
            <div className="flex-shrink-0 bg-blue-50 border border-blue-100 px-6 py-4 rounded-2xl block text-center md:text-right">
              <span className="block text-xs text-blue-600/80 font-bold uppercase tracking-wider mb-1">
                Prix demandé
              </span>
              <span className="font-display text-2xl lg:text-3xl font-extrabold text-blue-950">
                {formatPrice(property.price, property.status)}
              </span>
            </div>
          </div>

          {/* Picture Grid & Mini Viewer */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={property.images[activeImageIndex] || property.image}
                alt={`${property.title} - Vue ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white font-mono text-xs px-3 py-1 rounded-full">
                Image {activeImageIndex + 1} sur {property.images.length}
              </span>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {property.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden cursor-pointer transition-all border-2 ${
                    activeImageIndex === idx ? 'border-blue-600 scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="Vignette" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Technical Specs Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl text-center flex flex-col justify-center border border-gray-100">
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">Surface</span>
              <div className="flex items-center justify-center text-blue-950 font-display text-lg font-bold">
                <Maximize2 size={18} className="mr-2 text-blue-500" />
                <span>{property.area} m²</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl text-center flex flex-col justify-center border border-gray-100">
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">Chambres</span>
              <div className="flex items-center justify-center text-blue-950 font-display text-lg font-bold">
                <BedDouble size={18} className="mr-2 text-blue-500" />
                <span>{property.bedrooms || 'Terrain'}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl text-center flex flex-col justify-center border border-gray-100">
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1 font-sans">Salles de Bains</span>
              <div className="flex items-center justify-center text-blue-950 font-display text-lg font-bold">
                <Bath size={18} className="mr-2 text-blue-500" />
                <span>{property.bathrooms || '0'}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl text-center flex flex-col justify-center border border-gray-100">
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">Ville</span>
              <div className="flex items-center justify-center text-blue-950 font-display text-lg font-bold">
                <MapPin size={18} className="mr-2 text-blue-500" />
                <span>{property.city}</span>
              </div>
            </div>
          </div>

          {/* Detail Description & Form split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description & Features left (2 columns) */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-blue-950 border-b border-gray-100 pb-2 mb-3">
                  Description du bien
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line font-sans">
                  {property.description}
                </p>
              </div>

              <div>
                <h4 className="font-display text-lg font-bold text-blue-950 border-b border-gray-100 pb-2 mb-4">
                  Prestations & Caractéristiques
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700 font-medium">
                      <div className="p-1.5 bg-blue-50 rounded-lg text-blue-600 mr-2.5">
                        <CheckCircle2 size={14} className="stroke-[2.5]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Agent Detail & Form right (1 column) */}
            <div className="space-y-6 bg-gray-50/50 p-6 rounded-3xl border border-gray-100 h-fit">
              {/* Agent Profile Card */}
              <div className="text-center pb-5 border-b border-gray-100">
                <img
                  src={property.agent.avatar}
                  alt={property.agent.name}
                  className="w-18 h-18 rounded-full object-cover mx-auto ring-4 ring-white shadow-md mb-3"
                  referrerPolicy="no-referrer"
                />
                <h4 className="font-display font-bold text-blue-950 leading-tight">
                  {property.agent.name}
                </h4>
                <p className="text-xs text-blue-600 font-semibold mt-0.5">
                  {property.agent.role}
                </p>
              </div>

              {/* Inquiry Form */}
              <div>
                <h5 className="font-display font-extrabold text-blue-950 text-sm mb-4 flex items-center">
                  <Sparkles size={16} className="text-yellow-500 mr-1.5" /> Estimer / Contacter
                </h5>

                {formSubmitted ? (
                  <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-100 text-xs text-center space-y-1">
                    <CheckCircle2 size={24} className="mx-auto text-emerald-500 stroke-[2] mb-1" />
                    <p className="font-bold">Demande envoyée avec succès !</p>
                    <p className="text-emerald-700/80">
                      {property.agent.name} vous recontactera sous 24h ouvrées.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Nom complet"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-white px-3.5 py-2.5 text-xs rounded-xl border ${
                          formErrors.name ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:ring-blue-500'
                        } outline-none focus:ring-2 focus:border-transparent transition-all`}
                      />
                      {formErrors.name && (
                        <p className="text-[10px] text-red-500 mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Adresse email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-white px-3.5 py-2.5 text-xs rounded-xl border ${
                          formErrors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:ring-blue-500'
                        } outline-none focus:ring-2 focus:border-transparent transition-all`}
                      />
                      {formErrors.email && (
                        <p className="text-[10px] text-red-500 mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Téléphone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-white px-3.5 py-2.5 text-xs rounded-xl border ${
                          formErrors.phone ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:ring-blue-500'
                        } outline-none focus:ring-2 focus:border-transparent transition-all`}
                      />
                      {formErrors.phone && (
                        <p className="text-[10px] text-red-500 mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Votre message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-white px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      id="submit-modal-inquiry"
                      className="w-full flex items-center justify-center space-x-2 bg-blue-950 hover:bg-blue-600 text-white font-bold py-3 rounded-xl text-xs transition-colors cursor-pointer shadow-md shadow-blue-900/10"
                    >
                      <Send size={13} />
                      <span>Envoyer la demande</span>
                    </button>
                  </form>
                )}

                {/* Direct agent contacts secondary options */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex justify-center gap-4 text-xs font-semibold">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center text-blue-950 hover:text-blue-600 transition-colors"
                  >
                    <Phone size={13} className="mr-1 text-blue-500" /> Appeler
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center text-blue-950 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={13} className="mr-1 text-blue-500" /> Écrire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
