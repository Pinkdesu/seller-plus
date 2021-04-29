import amur from '~/assets/images/home/amur.jpg';
import syberia from '~/assets/images/home/syberia.jpg';
import gasification from '~/assets/images/home/gasification.jpg';
import winner from '~/assets/images/home/winner.png';
import quality from '~/assets/images/home/quality.png';
import delivery from '~/assets/images/home/delivery.png';
import thumb from '~/assets/images/home/thumb-up.png';
import baxi from '~/assets/images/companies/baxi.png';
import bosch from '~/assets/images/companies/bosch.png';
import drazice from '~/assets/images/companies/drazice-logo.png';
import gorenje from '~/assets/images/companies/gorenje.png';
import protherm from '~/assets/images/companies/protherm.png';
import rusnit from '~/assets/images/companies/rusnit.png';
import vaillant from '~/assets/images/companies/vaillant.png';
import viadrus from '~/assets/images/companies/viadrus.png';
import viessmann from '~/assets/images/companies/viessmann.png';
import userFace from '~/assets/images/home/face.jpg';

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
  {
    id: 4,
    image: gasification,
    title: 'home.title.whoAreWe',
    subtitle: 'home.subtitle.theTSG',
  },
  {
    id: 5,
    image: amur,
    title: 'home.title.weOffer',
    subtitle: 'home.subtitle.wideRange',
  },
  {
    id: 6,
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

export const COMPANIES = [
  {
    id: 1,
    image: baxi,
    name: 'BAXI',
  },
  {
    id: 2,
    image: vaillant,
    name: 'Vaillant',
  },
  {
    id: 3,
    image: drazice,
    name: 'Drazice',
  },
  {
    id: 4,
    image: bosch,
    name: 'BOSCH',
  },
  {
    id: 5,
    image: viessmann,
    name: 'Viessmann',
  },
  {
    id: 6,
    image: rusnit,
    name: 'РусНит',
  },
  {
    id: 7,
    image: protherm,
    name: 'Protherm',
  },
  {
    id: 8,
    image: gorenje,
    name: 'Gorenje',
  },
  {
    id: 9,
    image: viadrus,
    name: 'Viadrus',
  },
];

export const REVIEWS = [
  {
    id: 1,
    title: 'client1.name',
    description: 'client1.description',
    image: null,
  },
  {
    id: 2,
    title: 'client2.name',
    description: 'client2.description',
    image: userFace,
  },
  {
    id: 3,
    title: 'client3.name',
    description: 'client3.description',
    image: null,
  },
];
