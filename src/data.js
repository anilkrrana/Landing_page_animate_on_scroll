// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/hero-img.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'Deliver',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Signup',
    href: '#',
  },
];

export const heroData = {
  title: ` Order Products Faster Easier`,
  subtitle:
    'Order your favorite foods at any time and we will deliver them right to where you are.',
  btnText: 'Get Started',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'Find Out A Little More About Us',
  subtitle:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio id modi repudiandae, est necessitatibus autem nulla, corrupti commodi perspiciatis quo assumenda pariatur, officia cum deleniti labore placeat velit expedita consectetur.',
};

export const featuresData = {
  title: 'Some Services We Offer',
  subtitle:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio id modi repudiandae, est necessitatibus autem nulla, corrupti commodi perspiciatis quo assumenda pariatur, officia cum deleniti labore placeat velit expedita consectetur.',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Payment Done',
      description:
        'Pay with a Visa or PayPal card and without much ado',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Find Your Product',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio id modi repudiandae, est necessitatibus autem nulla, corrupti commodi perspiciatis quo assumenda.',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Print Out',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio id modi repudiandae, est necessitatibus autem nulla, corrupti commodi perspiciatis quo assumenda.',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Product Received',
      description:
        'In our app you can see the delay time of your order...',
      linkText: 'Learn more',
      delay: '700',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Siri',
    web: 'siri.com',
    message:
    'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '200',
  },
  {
    image: Avatar2Img,
    name: 'Jalex',
    web: 'jalex.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '400',
  },
  {
    image: Avatar3Img,
    name: 'Vebin',
    web: 'vebin.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  logo: LogoV2,
  address: 'New market 215, bhopal',
  email: 'er.anilkrana@gmail.com',
  phone: '1234-1234-12',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© er.anilkrana, 2023. All rights reserved.',
  icon: <BsChatDotsFill />,
};