import MagicLineIcon from '@/components/svg/MagicLineIcon.vue';
import SpeedIcon from '@/components/svg/SpeedIcon.vue';
import PrintIcon from '@/components/svg/PrintIcon.vue';
import DollarIcon from '@/components/svg/DollarIcon.vue';
import AsteriskIcon from '@/components/svg/AsteriskIcon.vue';
import CaravanIcon from '@/components/svg/CaravanIcon.vue';
import CartIcon from '@/components/svg/CartIcon.vue';
import type {Component} from 'vue';
import roundneck from '@/assets/roundneck.png';
import v_neck from '@/assets/v-neck.png';
import sleeveless from '@/assets/sleeveless.png';
import roundneck_2 from '@/assets/roundneck-2.png';
import t_shirt from '@/assets/t-shirt.png';
import hoodie from '@/assets/hoodie.png';
import sweatshirt from '@/assets/sweatshirt.png';

export type Description = {title: string; desc: string; icon: Component};

export const features: Description[] = [
  {
    icon: SpeedIcon,
    title: 'Fast Delivery',
    desc: 'We deliver the best products as fast as possible between 2 - 4 business days'
  },
  {
    icon: MagicLineIcon,
    title: 'Easy Customization',
    desc: 'Customize your merch to your taste from our varying list of selection'
  },
  {
    icon: PrintIcon,
    title: 'Sustainable Printing',
    desc: 'We use the best partners and technology to print the merch you desire'
  },
  {
    icon: DollarIcon,
    title: 'Affordable product',
    desc: 'We make it easy for you to purchase our Pick and Pay or Customizable merch.'
  }
];

export const steps: Description[] = [
  {
    icon: AsteriskIcon,
    title: 'Choose merch type',
    desc: 'We deliver the best products as fast as possible between 2 - 4 business days'
  },
  {
    icon: MagicLineIcon,
    title: 'Customize your design',
    desc: 'Customize your merch to your taste from our varying list of selection'
  },
  {
    icon: CartIcon,
    title: 'Proceed to your cart',
    desc: 'We use the best partners and technology to print the merch you desire'
  },
  {
    icon: CaravanIcon,
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
