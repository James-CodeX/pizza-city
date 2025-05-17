import { MenuItem, PromotionItem, TestimonialItem, GalleryItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'BBQ Chicken Pizza',
    description: 'Tender chicken, tangy BBQ sauce, red onions, and fresh cilantro',
    price: {
      small: 600,
      medium: 800,
      large: 1000,
      extraLarge: 1300
    },
    image: 'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pizza',
    popular: true
  },
  {
    id: 2,
    name: 'Peri Peri Chicken Pizza',
    description: 'Spicy peri-peri chicken, bell peppers, and red onion',
    price: {
      small: 600,
      medium: 800,
      large: 1000,
      extraLarge: 1300
    },
    image: 'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pizza',
    popular: true
  },
  {
    id: 3,
    name: 'Hawaiian Pizza',
    description: 'Sweet pineapple and savory ham on our signature sauce',
    price: {
      small: 600,
      medium: 800,
      large: 1000,
      extraLarge: 1300
    },
    image: 'https://images.pexels.com/photos/14391207/pexels-photo-14391207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pizza'
  },
  {
    id: 4,
    name: 'Margherita Pizza',
    description: 'Classic tomato sauce, fresh mozzarella cheese, and basil leaves',
    price: {
      small: 600,
      medium: 800,
      large: 1000,
      extraLarge: 1300
    },
    image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pizza'
  },
  {
    id: 5,
    name: 'Full Crispy Chicken Combo',
    description: 'Whole crispy chicken, chips, and a 2L soda',
    price: {
      large: 3000
    },
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'combo',
    popular: true
  }
];

export const PROMOTION_ITEMS: PromotionItem[] = [
  {
    id: 1,
    title: 'Mouthwatering Mondays',
    description: 'Buy any large pizza and get a medium pizza FREE! Valid only on Mondays.',
    day: 'Monday',
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Wild Wednesdays',
    description: 'Get any burger with fries at 30% OFF! Valid only on Wednesdays.',
    day: 'Wednesday',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Weekend Mega Deals',
    description: 'Family combo with 2 large pizzas, chicken, and soda at 15% OFF!',
    day: 'Weekend',
    image: 'https://images.pexels.com/photos/3762069/pexels-photo-3762069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    id: 1,
    name: 'James Kamau',
    rating: 5,
    comment: 'Best pizza in Juja! The BBQ Chicken pizza is absolutely incredible, and their service is always quick and friendly.',
    image: ''
  },
  {
    id: 2,
    name: 'Grace Njeri',
    rating: 5,
    comment: 'The crispy chicken combo is perfect for family dinners. We order from Pizza City almost every weekend!',
    image: ''
  },
  {
    id: 3,
    name: 'Brian Omondi',
    rating: 4,
    comment: 'Their Monday deals are a steal! Good food at great prices. The only reason for 4 stars is that delivery sometimes takes a bit long.',
    image: ''
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Delicious BBQ Chicken Pizza'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Crispy Chicken Meal'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Restaurant Interior'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Special Promotion Pizza'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Pizza Making Process'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/4004465/pexels-photo-4004465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Pizza City Experience'
  }
];