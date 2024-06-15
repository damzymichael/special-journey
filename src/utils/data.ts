import MagicLineIcon from '@/components/svg/MagicLineIcon.vue';
import SpeedIcon from '@/components/svg/SpeedIcon.vue';
import PrintIcon from '@/components/svg/PrintIcon.vue';
import DollarIcon from '@/components/svg/DollarIcon.vue';
import type {Component} from 'vue';

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

export const steps: Description[] = [];

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
