export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: {
    small?: number;
    medium?: number;
    large?: number;
    extraLarge?: number;
  };
  image: string;
  category: 'pizza' | 'chicken' | 'combo' | 'sides';
  popular?: boolean;
}

export interface PromotionItem {
  id: number;
  title: string;
  description: string;
  day: string;
  image: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  alt: string;
}