import React from 'react';
import { Home, Users, MapPin, Award } from 'lucide-react';

export default function Stats() {
  const statsData = [
    {
      id: 'stat-listings',
      icon: <Home className="text-blue-500 stroke-[2]" size={36} />,
      value: '220+',
      label: 'Biens d’exception disponibles',
      desc: 'Maisons, villas, lofts et appartements',
    },
    {
      id: 'stat-clients',
      icon: <Users className="text-blue-500 stroke-[2]" size={36} />,
      value: '1 800+',
      label: 'Clients heureux et satisfaits',
      desc: 'Projets de vie concrétisés avec succès',
    },
    {
      id: 'stat-cities',
      icon: <MapPin className="text-blue-500 stroke-[2]" size={36} />,
      value: '12',
      label: 'Grandes métropoles couvertes',
      desc: 'Expertise dans les plus beaux secteurs',
    },
    {
      id: 'stat-awards',
      icon: <Award className="text-blue-500 stroke-[2]" size={36} />,
      value: '98%',
      label: 'Recommandation client',
      desc: 'Qualité d’accompagnement certifiée',
    }
  ];

  return (
    <section id="statistiques" className="relative z-30 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-blue-900/5 border border-gray-100">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            id={stat.id}
            className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 p-4 hover:bg-gray-50 rounded-2xl transition-all duration-300 group"
          >
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm">
              {stat.icon}
            </div>
            <div>
              <span className="font-display block text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
                {stat.value}
              </span>
              <h3 className="font-sans text-sm font-bold text-gray-900 mt-1">
                {stat.label}
              </h3>
              <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
