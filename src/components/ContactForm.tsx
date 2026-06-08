import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, User, HelpCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Le nom complet est obligatoire';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L’adresse email est obligatoire';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Veuillez renseigner une adresse email valide';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est obligatoire';
    } else if (!/^[+0-9\s-]{6,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Veuillez saisir un numéro de téléphone valide';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Veuillez choisir ou saisir un sujet';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Veuillez saisir un message de 10 caractères minimum';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success Simulation
    setIsSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title and Intro */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-700 font-sans text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            <span>Nous Contacter</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Un projet immobilier ? Écrivez-nous
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Nos experts sont à votre disposition pour estimer votre bien, planifier une visite ou vous conseiller gratuitement.
          </p>
        </div>

        {/* Form and Contact cards split */}
        <div id="contact-split-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Agency Details Panel (4 columns) */}
          <div className="lg:col-span-5 bg-blue-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-blue-900/10 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-blue-600/10 rounded-full blur-2xl" />
            <div className="absolute -left-10 -top-10 w-44 h-44 bg-indigo-500/10 rounded-full blur-2xl" />

            <div className="space-y-8 relative z-10">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-blue-400 font-bold">
                  ImmoVision HQ
                </span>
                <h3 className="font-display text-2xl font-extrabold mt-1 tracking-tight">
                  Notre Agence
                </h3>
              </div>

              {/* Coordinates List */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-xl mr-4 flex-shrink-0">
                    <MapPin size={22} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-200">Adresse Physique</h4>
                    <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                      15 Avenue des Champs-Élysées <br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-xl mr-4 flex-shrink-0">
                    <Phone size={22} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-200">Téléphone Direct</h4>
                    <p className="text-sm text-gray-300 mt-1 hover:text-white transition-colors">
                      <a href="tel:+33123456789">+33 1 23 45 67 89</a>
                    </p>
                    <p className="text-xs text-gray-400">Appel gratuit - Lundi au Samedi</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-xl mr-4 flex-shrink-0">
                    <Mail size={22} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-200">Email Secrétariat</h4>
                    <p className="text-sm text-gray-300 mt-1 hover:text-white transition-colors">
                      <a href="mailto:contact@immovision.fr">contact@immovision.fr</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-xl mr-4 flex-shrink-0">
                    <Clock size={22} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-200">Heures d'Ouverture</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      Lundi - Vendredi: 09:00 à 19:30 <br />
                      Samedi: 10:00 à 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium service quote */}
            <div className="mt-12 pt-6 border-t border-blue-900/40 relative z-10">
              <p className="text-xs italic text-gray-300 font-sans">
                "Chaque projet d'acquisition mérite une intégrité absolue, une rigueur exemplaire et un dévouement total de notre part."
              </p>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-blue-400 mt-2">
                — Direction Générale
              </span>
            </div>
          </div>

          {/* Form Panel (7 columns) */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-100/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
            
            {isSubmitted ? (
              <div id="contact-success-notification" className="text-center p-8 space-y-4 max-w-md mx-auto">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto shadow-inner">
                  <CheckCircle2 size={36} className="stroke-[2.5]" />
                </div>
                <h3 className="font-display text-xl font-extrabold text-blue-950">
                  Votre message a bien été envoyé !
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  ImmoVision vous remercie pour votre intérêt. Un conseiller spécialisé traitera votre dossier et prendra contact avec vous d'ici les prochaines heures.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center">
                      <User size={13} className="text-gray-400 mr-1.5" /> Nom complet
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Ex: Alexandre Dubois"
                      className={`w-full bg-white px-4 py-3.5 text-sm rounded-xl border outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.fullName ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[10px] text-red-500 font-bold mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center">
                      <Mail size={13} className="text-gray-400 mr-1.5" /> Adresse email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Ex: alexandre@exemple.com"
                      className={`w-full bg-white px-4 py-3.5 text-sm rounded-xl border outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-500 font-bold mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center">
                      <Phone size={13} className="text-gray-400 mr-1.5" /> Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ex: 06 12 34 56 78"
                      className={`w-full bg-white px-4 py-3.5 text-sm rounded-xl border outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.phone ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[10px] text-red-500 font-bold mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center">
                      <HelpCircle size={13} className="text-gray-400 mr-1.5" /> Sujet du message
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full bg-white px-4 py-3.5 text-sm rounded-xl border outline-none focus:ring-2 focus:border-transparent transition-all cursor-pointer appearance-none ${
                        errors.subject ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100'
                      }`}
                    >
                      <option value="">-- Choisissez un sujet --</option>
                      <option value="Achat de bien">Je souhaite acheter un bien</option>
                      <option value="Mise en location de bien">Je souhaite louer/faire louer mon bien</option>
                      <option value="Estimation gratuite de valeur">Demande d'estimation de ma propriété</option>
                      <option value="Renseignements cabinet d'experts">Renseignements généraux</option>
                    </select>
                    {errors.subject && (
                      <p className="text-[10px] text-red-500 font-bold mt-1">{errors.subject}</p>
                    )}
                  </div>
                </div>

                {/* Message body field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                    Votre Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Écrivez ici l'ensemble des détails de votre projet immobilier (secteur cherché, budget estimé, urgence...)"
                    className={`w-full bg-white px-4 py-3.5 text-sm rounded-xl border outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                      errors.message ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100'
                    }`}
                  />
                  {errors.message ? (
                    <p className="text-[10px] text-red-500 font-bold mt-1">{errors.message}</p>
                  ) : (
                    <p className="text-[10px] text-gray-400">10 caractères minimum</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl text-sm transition-all focus:ring-4 focus:ring-blue-100 cursor-pointer shadow-lg shadow-blue-500/10"
                >
                  <Send size={15} />
                  <span>Envoyer ma demande d'étude</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
