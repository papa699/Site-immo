import { Property, Testimonial } from './types';

export const CITIES = ['Tous', 'Paris', 'Nice', 'Lyon', 'Bordeaux', 'Marseille'];
export const PROPERTY_TYPES = ['Tous', 'Maison', 'Appartement', 'Villa', 'Terrain'];

export const AGENTS = [
  {
    name: 'Sophie Laurent',
    role: 'Directrice d\'Agence',
    phone: '+33 6 12 34 56 78',
    email: 'sophie.laurent@immovision.fr',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&h=250&q=80'
  },
  {
    name: 'Marc Dubois',
    role: 'Conseiller Immobilier Senior',
    phone: '+33 6 98 76 54 32',
    email: 'marc.dubois@immovision.fr',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&h=250&q=80'
  },
  {
    name: 'Amélie Petit',
    role: 'Spécialiste Locations et Appartements',
    phone: '+33 6 45 67 89 01',
    email: 'amelie.petit@immovision.fr',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&h=250&q=80'
  }
];

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Villa contemporaine avec piscine à débordement',
    type: 'Villa',
    status: 'A Vendre',
    price: 1350000,
    city: 'Nice',
    address: 'Mont Boron, 06300 Nice',
    bedrooms: 5,
    bathrooms: 4,
    area: 280,
    description: 'Bénéficiant d’une vue panoramique spectaculaire sur la Baie des Anges, cette somptueuse villa d’architecte de 280 m² offre des prestations haut de gamme. Elle se compose d’un vaste séjour lumineux ouvert sur une grande terrasse ensoleillée, une cuisine équipée haut de gamme de marque italienne, 5 suites spacieuses avec dressings et salles de bains privatives. Jardin paysager méditerranéen de 1200 m², grand garage double, piscine chauffée à débordement et domotique complète intégrée.',
    features: ['Vue Mer', 'Piscine chauffée', 'Climatisation', 'Garage double', 'Domotique', 'Alarme de sécurité', 'Terrasse'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    dpe: 'A',
    agent: AGENTS[0]
  },
  {
    id: 'prop-2',
    title: 'Superbe Appartement Haussmannien rénové',
    type: 'Appartement',
    status: 'A Vendre',
    price: 890000,
    city: 'Paris',
    address: 'Avenue de Wagram, 75017 Paris',
    bedrooms: 2,
    bathrooms: 1,
    area: 84,
    description: 'Au 3ème étage d’un bel immeuble en pierre de taille bien entretenu avec ascenseur et gardienne à demeure, appartement familial d’angle très lumineux ayant conservé tout le charme de l’ancien : moulures raffinées, parquets en point de Hongrie d’origine et cheminées en marbre en état de marche. Il offre une entrée galerie, un grand double séjour exposé Sud-Ouest avec balcon filant de 5 m², une cuisine dînatoire indépendante entièrement équipée, 2 chambres au calme sur cour arborée, et une salle de bains avec double vasque.',
    features: ['Ascenseur', 'Gardien', 'Cheminée', 'Parquet ancien', 'Balcon', 'Double vitrage', 'Cave privative'],
    image: 'https://images.unsplash.com/photo-1545464629-e4a76b7315ec?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1545464629-e4a76b7315ec?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    dpe: 'B',
    agent: AGENTS[1]
  },
  {
    id: 'prop-3',
    title: 'Maison Contemporaine d\'Architecte avec Jardin',
    type: 'Maison',
    status: 'A Vendre',
    price: 610000,
    city: 'Bordeaux',
    address: 'Quartier Nansouty, 33000 Bordeaux',
    bedrooms: 4,
    bathrooms: 2,
    area: 165,
    description: 'Cette maison d’architecte construite en 2021 propose des intérieurs lumineux aux finitions ultra soignées, aux portes de Bordeaux. Grand open-space de 65 m² intégrant salon, salle à manger et cuisine américaine de designer, le tout s’ouvrant sur une terrasse en bois thermotraité et un jardin paysager piscinable exposé Ouest, sans aucun vis-à-vis. L’étage intègre 4 chambres dont une suite parentale complète avec dressing fermé et douche à l’italienne intégrée.',
    features: ['Jardin clos', 'Performance Énergétique', 'Cuisine américaine', 'Suites parentales', 'Terrasse bois', 'Parking privatif'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    dpe: 'B',
    agent: AGENTS[1]
  },
  {
    id: 'prop-4',
    title: 'Appartement Traversant Lumineux type Loft',
    type: 'Appartement',
    status: 'A Louer',
    price: 1350,
    city: 'Lyon',
    address: 'Quai Saint-Antoine, 69002 Lyon',
    bedrooms: 1,
    bathrooms: 1,
    area: 68,
    description: 'Location meublée d’exception au cœur de Lyon (Presqu’île) avec vue directe sur la Saône et la colline de Fourvière. Cet ancien atelier de canut a été entièrement rénové en loft design par un architecte renommé. Il comprend un spacieux séjour sous 4 mètres de plafond avec d’élégantes pierres apparentes, une cuisine entièrement aménagée, et une mezzanine abritant un espace nuit douillet avec dressing et salle d’eau attenante.',
    features: ['Pierre Apparente', 'Vue Saône', 'Meublé Premium', 'Grande hauteur sous plafond', 'Metro à proximité', 'Climatisation réversible'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    dpe: 'C',
    agent: AGENTS[2]
  },
  {
    id: 'prop-5',
    title: 'Terrain Constructible Viabilisé Vue Dégagée',
    type: 'Terrain',
    status: 'A Vendre',
    price: 195000,
    city: 'Bordeaux',
    address: 'Bouliac, 33270 Bordeaux',
    area: 950,
    description: 'Dans le secteur privilégié et très recherché de Bouliac, superbe terrain à bâtir plat de 950 m², entièrement viabilisé (eau, électricité, téléphone, tout-à-l’égout). Proche du centre du village et des écoles à pied, ce terrain bénéficie d’une excellente exposition Sud-Ouest pour implanter votre future habitation à haute performance écologique sans contrainte de relief.',
    features: ['Entièrement viabilisé', 'Secteur calme', 'Plat', 'Libre constructeur', 'Exposition Sud-Ouest'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    dpe: 'A',
    agent: AGENTS[0]
  },
  {
    id: 'prop-6',
    title: 'Penthouse moderne d’exception & rooftop privé',
    type: 'Appartement',
    status: 'A Vendre',
    price: 1890000,
    city: 'Marseille',
    address: 'Le Roucas-Blanc, 13007 Marseille',
    bedrooms: 3,
    bathrooms: 3,
    area: 175,
    description: 'Niché au dernier étage d’un immeuble de grand standing ultra-sécurisé, ce somptueux duplex dispose d’une terrasse en toiture panoramique de 150 m² avec espace solarium convertible et salon extérieur. Séjour baigné de lumière de 70 m² grâce à des baies vitrées de pleine hauteur sans montant vertical, suite de maître avec baignoire balnéo surplombant l’horizon, ascenseur arrivant directement chez vous.',
    features: ['Rooftop privé', 'Vue panoramique', 'Ascenseur privatif', 'Jacuzzi', 'Garage triple', 'Prestations de luxe'],
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545464629-e4a76b7315ec?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    dpe: 'A',
    agent: AGENTS[0]
  },
  {
    id: 'prop-7',
    title: 'Appartement Cosy Idéal Investisseur Cluny',
    type: 'Appartement',
    status: 'A Vendre',
    price: 245000,
    city: 'Lyon',
    address: 'Rue de l\'Université, 69007 Lyon',
    bedrooms: 1,
    bathrooms: 1,
    area: 42,
    description: 'Immeuble ancien de caractère, au 2ème étage, cet appartement Type 2 est vendu loué avec un excellent rendement locatif. Rénovation de qualité effectuée récemment avec isolation thermique intérieure de premier ordre. Grand séjour avec cuisine ouverte moderne, chambre séparée disposant de grands placards de rangement, double vitrage total et charges de copropriété très basses.',
    features: ['Double vitrage', 'Isolation neuve', 'Investissement Locatif', 'Cuisine équipée', 'Rangements intégrés'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    dpe: 'C',
    agent: AGENTS[2]
  },
  {
    id: 'prop-8',
    title: 'Maison Traditionnelle Provençale rénovée',
    type: 'Maison',
    status: 'A Louer',
    price: 2600,
    city: 'Nice',
    address: 'Gairaut, 06100 Nice',
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    description: 'Location à l’année d’une très élégante villa provençale réhabilitée avec beaucoup de goût esthétique. Vous apprécierez son salon chaleureux abritant un poêle à bois scandinave performant, sa cuisine indépendante provençale haut de gamme, et sa grande varangue ombragée en ferronnerie d’art face à un jardin bucolique arboré d’oliviers centenaires. Place de stationnement privée intérieure pour 3 véhicules.',
    features: ['Poêle à bois', 'Varangue provençale', 'Jardin arboré', 'Stationnements privés', 'Environnement calme', 'Oliviers'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    dpe: 'D',
    agent: AGENTS[2]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Jean-Pierre & Françoise Meyer',
    role: 'Acheteurs de leur Villa à Nice',
    content: 'Un accompagnement irréprochable de la recherche de notre bien jusqu\'à la signature de l\'acte authentique. L\'équipe d\'ImmoVision a su comprendre nos exigences élevées en matière de calme et de luminosité pour nous présenter la résidence de nos rêves. Une transaction en toute sérénité.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Elise Gauthier',
    role: 'Vendeuse d\'un appartement à Lyon',
    content: 'J\'ai confié la vente exclusive de mon appartement haussmannien à l\'agence ImmoVision. Grâce à l\'utilisation de superbes photographies professionnelles et un ciblage d\'acheteurs rigoureux, le bien s\'est vendu au prix de l\'évaluation en seulement 9 jours ! Je recommande chaleureusement Marc.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Damien Viala',
    role: 'Locataire Loft Lyon',
    content: 'Locataire d\'un très bel atelier d’artiste à Lyon, la gestion d\'ImmoVision est un plaisir absolu au quotidien. Le dossier d\'accès s\'est fait en un clin d\'œil sur leur site moderne, les conseillers sont extrêmement réactifs et le service est d\'une politesse exquise.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 4
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    category: 'Maison',
    title: 'Façade contemporaine épurée',
    location: 'Bordeaux'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
    category: 'Piscine',
    title: 'Piscine sous éclairages nocturnes',
    location: 'Nice - Mont Boron'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=format&fit=crop&w=1000&q=80',
    category: 'Intérieur',
    title: 'Salon d\'angle moderne baigné de lumière',
    location: 'Paris'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
    category: 'Intérieur',
    title: 'Cuisine haut de gamme ergonomique',
    location: 'Nice'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    category: 'Chambre',
    title: 'Suite parentale style scandinave douillet',
    location: 'Lyon'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    category: 'Jardin / Extérieur',
    title: 'Vue bucolique sur le terrain arboré',
    location: 'Bordeaux - Bouliac'
  }
];
