// src/types/index.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  education: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  text: string;
  image?: string;
}

