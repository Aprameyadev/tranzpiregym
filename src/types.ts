export interface Program {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: string;
  intensity: 'Medium' | 'High' | 'Extreme';
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface Transformation {
  id: string;
  name: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  description: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
