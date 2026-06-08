import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-1 bg-yellow-50 text-amber-700 font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <span>Avis Clients</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Ils nous ont fait confiance
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Consultez les expériences authentiques d’acheteurs, vendeurs et locataires par l'intermédiaire de nos services premium.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              id={`testimonial-${test.id}`}
              className="bg-gray-50 border border-gray-100/50 p-8 rounded-3xl relative flex flex-col justify-between hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-6 text-blue-200/60 p-1">
                <Quote size={32} className="stroke-[3]" />
              </div>

              {/* Stars indicator */}
              <div className="flex items-center space-x-1 mb-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className={`${
                      idx < test.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>

              {/* Core Text content */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic mb-8 relative z-10">
                "{test.content}"
              </p>

              {/* Client Info metadata */}
              <div className="flex items-center space-x-3.5 border-t border-gray-200/60 pt-4 mt-auto">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover shadow-sm bg-gray-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-blue-950 leading-tight">
                    {test.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-blue-600 font-semibold mt-0.5">
                    {test.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
