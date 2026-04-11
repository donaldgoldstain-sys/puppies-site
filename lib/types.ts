export type Puppy = {
  id: string;
  slug: string;
  name: string;
  gender: "Male" | "Female";
  color: string;
  colorSlug: string;
  birthDate: string;
  expectedAdultSize: string;
  sizeLabel: string;
  price: string;
  availabilityStatus: "Available" | "Reserved" | "Coming Soon";
  city: string;
  state: string;
  locationPath: string;
  imageSrc?: string;
  descriptor: string;
  shortDescription: string;
  personalityProfile: string;
  healthNote: string;
  temperament: string[];
  healthInfo: string[];
  galleryImages: string[];
  accentClass: string;
  featured: boolean;
};

export type LocationEntry = {
  state: string;
  stateSlug: string;
  city: string;
  citySlug: string;
  address: string;
  phone: string;
  heroTitle: string;
  heroDescription: string;
  metaDescription: string;
  intro: string;
  lifestyleNote: string;
  serviceDetails: string;
  deliveryInfo: string;
  appointmentNote: string;
  ctaTitle: string;
  ctaDescription: string;
  nearbyAreas: string[];
  featuredPuppySlugs: string[];
  popularColorSlugs: string[];
  faq: { question: string; answer: string }[];
};

export type ColorEntry = {
  slug: string;
  name: string;
  shortName: string;
  overview: string;
  pageDescription: string;
  personality: string;
  rarity: string;
  gallery: string[];
  accentClass: string;
};

export type Review = {
  name: string;
  location: string;
  title: string;
  quote: string;
  rating: number;
};

export type FAQ = {
  question: string;
  answer: string;
};
