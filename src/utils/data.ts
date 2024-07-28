import type {FunctionalComponent} from 'vue';
import type {LucideProps} from 'lucide-vue-next';
import roundneck from '@/assets/images/roundneck.png';
import v_neck from '@/assets/images/v-neck.png';
import sleeveless from '@/assets/images/sleeveless.png';
import roundneck_2 from '@/assets/images/roundneck-2.png';
import t_shirt from '@/assets/images/t-shirt.png';
import hoodie from '@/assets/images/hoodie.png';
import sweatshirt from '@/assets/images/sweatshirt.png';
import {Gauge, Paintbrush, Printer, BadgeDollarSign} from 'lucide-vue-next';
import {CircleDot, ShoppingCart, Caravan} from 'lucide-vue-next';

export type Description = {
  title: string;
  desc: string;
  icon: FunctionalComponent<LucideProps, {}, any, {}>;
};

export const features: Description[] = [
  {
    icon: Gauge,
    title: 'Fast Delivery',
    desc: 'We deliver the best products as fast as possible between 2 - 4 business days'
  },
  {
    icon: Paintbrush,
    title: 'Easy Customization',
    desc: 'Customize your merch to your taste from our varying list of selection'
  },
  {
    icon: Printer,
    title: 'Sustainable Printing',
    desc: 'We use the best partners and technology to print the merch you desire'
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable product',
    desc: 'We make it easy for you to purchase our Pick and Pay or Customizable merch.'
  }
];

export const steps: Description[] = [
  {
    icon: CircleDot,
    title: 'Choose merch type',
    desc: 'We deliver the best products as fast as possible between 2 - 4 business days'
  },
  {
    icon: Paintbrush,
    title: 'Customize your design',
    desc: 'Customize your merch to your taste from our varying list of selection'
  },
  {
    icon: ShoppingCart,
    title: 'Proceed to your cart',
    desc: 'We use the best partners and technology to print the merch you desire'
  },
  {
    icon: Caravan,
    title: 'Get your merch',
    desc: 'We make it easy for you to purchase our Pick and Pay or Customizable merch.'
  }
];

export type Product = {
  name: string;
  price?: number;
  quantity?: number;
  image?: string;
};

export const products: Product[] = [
  {
    name: 'Polo T-shirt',
    price: 10,
    quantity: 3,
    image: roundneck
  },
  {
    name: 'Polo T-shirt',
    price: 10,
    quantity: 3,
    image: v_neck
  },
  {
    name: 'Polo T-shirt',
    price: 10,
    quantity: 3,
    image: sleeveless
  },
  {
    name: 'Polo T-shirt',
    price: 10,
    quantity: 3,
    image: roundneck_2
  },
  {
    name: 'Polo T-shirt',
    price: 10,
    quantity: 3,
    image: t_shirt
  },
  {
    name: 'Polo T-shirt',
    price: 10,
    quantity: 3,
    image: hoodie
  },
  {
    name: 'Polo T-shirt',
    price: 10,
    quantity: 3,
    image: sweatshirt
  },
  {
    name: 'Polo T-shirt',
    price: 10,
    quantity: 3,
    image: roundneck
  }
];

//Scroll animation for Hero section
// gsap.to('h2 span', {
//   scrollTrigger: {
//     trigger: 'h2 span',
//     start: 'top 61px',
//     end: 'bottom top',
//     scrub: true
//   },
//   immediateRender: false,
//   opacity: 0,
//   left: '200px',
//   ease: 'power3.Out',
//   stagger: -0.1
// });
