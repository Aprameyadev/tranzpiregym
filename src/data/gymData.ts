import { Program, Trainer, Testimonial, PricingPlan, Transformation, Feature } from '../types';

export const programsData: Program[] = [
  {
    id: 'prog-1',
    name: 'Strength Training',
    description: 'Build absolute physical power. Focus on heavy compound lifts, squats, deadlifts, and military presses under elite oversight.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    duration: '60 Mins',
    intensity: 'High'
  },
  {
    id: 'prog-2',
    name: 'Weight Loss & Tone',
    description: 'Sculpt your physique and shred fat with dynamic metabolic circuits, custom lifestyle metrics, and calorie-burning engines.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    duration: '45 Mins',
    intensity: 'Medium'
  },
  {
    id: 'prog-3',
    name: 'Muscle Building',
    description: 'Optimize hypertrophy with volume training, specialized drop sets, mechanical tension guides, and targeted nutrition plans.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
    duration: '60 Mins',
    intensity: 'High'
  },
  {
    id: 'prog-4',
    name: 'CrossFit',
    description: 'High-intensity functional training designed to optimize cardiovascular endurance, agility, and absolute functional strength.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    duration: '50 Mins',
    intensity: 'Extreme'
  },
  {
    id: 'prog-5',
    name: 'HIIT & Circuit',
    description: 'Maximum calorie burn in minimum time. Push your lactic threshold with custom intervals, battle ropes, and explosive plyometrics.',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=800',
    duration: '30 Mins',
    intensity: 'Extreme'
  },
  {
    id: 'prog-6',
    name: 'Powerlifting Base',
    description: 'Unleash your true peak strength. Specialized bar paths, power racks, and micro-loading plates to shatter your personal records.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
    duration: '75 Mins',
    intensity: 'Extreme'
  }
];

export const trainersData: Trainer[] = [
  {
    id: 'train-1',
    name: 'Marcus Sterling',
    specialization: 'Powerlifting & Absolute Strength',
    experience: '9+ Years Experience',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=400',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 'train-2',
    name: 'Sarah Jenkins',
    specialization: 'HIIT, Kettlebell & Athletic Tone',
    experience: '6+ Years Experience',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'train-3',
    name: 'Vikram Rathore',
    specialization: 'Bodybuilding & Nutrition Science',
    experience: '11+ Years Experience',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=400',
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 'train-4',
    name: 'Elena Rostova',
    specialization: 'Mobility, Calisthenics & CrossFit',
    experience: '7+ Years Experience',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=400',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com'
    }
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aravind Sharma',
    role: 'Corporate Executive',
    review: 'Tranzpire Gym has completely transformed how I view fitness. The luxury aesthetic, top-tier coaches, and state-of-the-art hammer strength equipment make it feel like an absolute lifestyle club.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-2',
    name: 'Rohan Malhotra',
    role: 'Competitive Lifter',
    review: 'Unbelievable powerlifting setups. Heavy-duty plates, competition racks, and trainers who actually understand barbell physics. Shredded my personal records within 4 months of joining.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-3',
    name: 'Priya Patel',
    role: 'Marketing Director',
    review: 'The group energy here is electric. HIIT sessions with Sarah are intense but highly motivating, and the clean, premium locker room recovery amenities are unmatched in the city.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-4',
    name: 'Neha Roy',
    role: 'Tech Entrepreneur',
    review: 'The personalized nutrition support and customized fitness plans here have been absolute game changers. Tranzpire focuses on lifestyle metrics, not just workouts.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-5',
    name: 'Kabir Mehta',
    role: 'Software Architect',
    review: 'Fabulous experience. Open 24/7, ultra-clean environment, and excellent crowd. Joining Tranzpire Gym is hands down the best investment I have made in my physical well-being.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'price-1',
    name: 'Basic',
    price: '999',
    period: 'month',
    features: [
      'Standard Gym Access',
      'Locker & Shower Access',
      '1x Free Fitness Assessment',
      'Cardio & Strength Machines',
      'Mobile App Entry Key'
    ]
  },
  {
    id: 'price-2',
    name: 'Premium',
    price: '1999',
    period: 'month',
    features: [
      'Everything in Basic Plan',
      'Certified Trainer Guidance',
      'Monthly Diet Consultation',
      'Unlimited Group Fitness Classes',
      '24/7 Keyfob All-Hour Access',
      'Access to Steam & Sauna Room'
    ],
    popular: true
  },
  {
    id: 'price-3',
    name: 'Elite',
    price: '3999',
    period: 'month',
    features: [
      'Everything in Premium Plan',
      'Dedicated 1-on-1 Personal Trainer',
      'Bi-Weekly InBody Composition Analysis',
      'Unlimited Cryotherapy & Recovery Sessions',
      'Complimentary Fuel Bar Smoothies (4/mo)',
      'VIP Locker & Laundry Service'
    ]
  }
];

export const transformationsData: Transformation[] = [
  {
    id: 'trans-1',
    name: 'Vikram S.',
    beforeImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400&h=400',
    afterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400&h=400',
    duration: '12 Weeks',
    description: 'Lost 14kg of body fat and sculpted high muscular definition through custom metabolic pacing and structured calorie control.'
  },
  {
    id: 'trans-2',
    name: 'Aanya K.',
    beforeImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400&h=400',
    afterImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400&h=400',
    duration: '16 Weeks',
    description: 'Gained 5.5kg of lean athletic muscle mass and massively increased kinetic squat power using powerlifting principles.'
  },
  {
    id: 'trans-3',
    name: 'Rahul D.',
    beforeImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=400&h=400',
    afterImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400&h=400',
    duration: '24 Weeks',
    description: 'Complete lifestyle reset. Reclaimed spinal health, shredded visceral fat, and doubled total push-press lifting capacity.'
  }
];

export const featuresData: Feature[] = [
  {
    id: 'feat-1',
    title: '24/7 Absolute Access',
    description: 'Work out on your own terms. Our biometric access keys give you safe, premium entry to the facility 365 days a year, day or night.',
    iconName: 'Clock'
  },
  {
    id: 'feat-2',
    title: 'Biomechanical Equipment',
    description: 'Train on world-class, premium Hammer Strength and Life Fitness biomechanical rigs tuned precisely to support natural joints.',
    iconName: 'Dumbbell'
  },
  {
    id: 'feat-3',
    title: 'Elite Certified Coaches',
    description: 'Our coaching tier comprises certified athletic specialists, physiotherapists, and elite powerlifters committed to your safety.',
    iconName: 'Award'
  },
  {
    id: 'feat-4',
    title: 'Luxury Amenities',
    description: 'We offer executive lockers, private steam saunas, an active fuel bar, and curated recovery lounges designed for pure comfort.',
    iconName: 'Sparkles'
  }
];
