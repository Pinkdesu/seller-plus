import amur from '~/assets/images/home/amur.jpg';
import syberia from '~/assets/images/home/syberia.jpg';
import gasification from '~/assets/images/home/gasification.jpg';

export const DELAY = 5000;

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

export const SLIDER_CONFIG = {
  loop: true,
  initial: 0,
  duration: 2000,
  dragSpeed: 0.5,
};
