import amur from '~/assets/images/home/amur.jpg';
import syberia from '~/assets/images/home/syberia.jpg';
import gasification from '~/assets/images/home/gasification.jpg';
import winner from '~/assets/images/home/winner.png';
import quality from '~/assets/images/home/quality.png';
import delivery from '~/assets/images/home/delivery.png';
import thumb from '~/assets/images/home/thumb-up.png';

export const DELAY = 5000;

export const SLIDER_CONFIG = {
  loop: true,
  initial: 0,
  duration: 2000,
  dragSpeed: 0.5,
};

export const SLIDES_INFO = [
  {
    id: 1,
    image: gasification,
    title: 'home.title.whoAreWe',
    subtitle: 'home.subtitle.theTSG',
  },
  {
    id: 2,
    image: amur,
    title: 'home.title.weOffer',
    subtitle: 'home.subtitle.wideRange',
  },
  {
    id: 3,
    image: syberia,
    title: 'home.title.weGuarantee',
    subtitle: 'home.subtitle.allOurProducts',
  },
];

export const ADVANTAGE_CARDS = [
  {
    id: 1,
    image: winner,
    title: 'home.title.favorablePrices',
    description: 'home.description',
  },
  {
    id: 2,
    image: quality,
    title: 'home.title.qualityAssurance',
    description: 'home.description',
  },
  {
    id: 3,
    image: delivery,
    title: 'home.title.fastDelivery',
    description: 'home.description',
  },
  {
    id: 4,
    image: thumb,
    title: 'home.title.professionalService',
    description: 'home.description',
  },
];
