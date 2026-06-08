export type PropertyType = 'Maison' | 'Appartement' | 'Villa' | 'Terrain';
export type PropertyStatus = 'A Vendre' | 'A Louer';

export interface Agent {
  name: string;
  role: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  city: string;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number; // in m²
  description: string;
  features: string[];
  image: string;
  images: string[]; // For gallery/lightbox and property details
  featured: boolean;
  dpe: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  agent: Agent;
}

export interface FilterCriteria {
  searchQuery: string;
  city: string;
  type: string;
  status: string;
  minPrice: string;
  maxPrice: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}
