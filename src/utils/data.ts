import MagicLineIcon from '@/components/svg/MagicLineIcon.vue';
import SpeedIcon from '@/components/svg/SpeedIcon.vue';
import PrintIcon from '@/components/svg/PrintIcon.vue';
import DollarIcon from '@/components/svg/DollarIcon.vue';

export const features = [
  {
    Icon: SpeedIcon,
    title: 'Fast Delivery',
    description:
      'We deliver the best products as fast as possible between 2 - 4 business days'
  },
  {
    Icon: MagicLineIcon,
    title: 'Easy Customization',
    description:
      'Customize your merch to your taste from our varying list of selection'
  },
  {
    Icon: PrintIcon,
    title: 'Sustainable Printing',
    description:
      'We use the best partners and technology to print the merch you desire'
  },
  {
    Icon: DollarIcon,
    title: 'Affordable product',
    description:
      'We make it easy for you to purchase our Pick and Pay or Customizable merch.'
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
