import amur from '~/assets/images/home/amur.jpg';
import yamal from '~/assets/images/home/yamal.jpg';
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
    image: yamal,
    title: 'home.title.whoAreWe',
    subtitle: 'home.subtitle.theTSG',
  },
  {
    id: 3,
    image: amur,
    title: 'home.title.whoAreWe',
    subtitle: 'home.subtitle.theTSG',
  },
];

export const SLIDER_CONFIG = {
  loop: true,
  initial: 0,
  duration: 2000,
  dragSpeed: 0.5,
};
