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
import userGril from '~/assets/images/home/girl.jpg';
import userMan from '~/assets/images/home/man.jpg';

export const DELAY = 5000;
export const PARALLAX_SPEED = 0.7;

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

export const SERVICES = [1, 2, 3, 4].map((id) => ({
  id: id,
  isEmpty: true,
}));

export const ADVANTAGE_CARDS = [
  {
    id: 1,
    image: winner,
    title: 'home.title.favorablePrices',
    description: 'home.description.advantage1',
  },
  {
    id: 2,
    image: quality,
    title: 'home.title.qualityAssurance',
    description: 'home.description.advantage2',
  },
  {
    id: 3,
    image: delivery,
    title: 'home.title.fastDelivery',
    description: 'home.description.advantage3',
  },
  {
    id: 4,
    image: thumb,
    title: 'home.title.professionalService',
    description: 'home.description.advantage4',
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
    title: 'Анна',
    description:
      'Огромное спасибо за консультацию по газосчетчику. Внимательно выслушали, вежливо и грамотно проконсультировали и даже перезвонили на следующий день, чтобы узнать как решилась проблема. Чему была ОЧЕНЬ приятно удивлена. Молодцы.!!! теперь знаю куда нужно обращаться за помощью.',
    image: userGril,
  },
  {
    id: 2,
    title: 'Иван',
    description:
      "В интернете долго искал компанию, которой можно было бы доверить монтаж котельной и отопления недавно построенного дома, и никак не мог сделать свой выбор. По великой случайности зашёл в фирму 'ТюменьСтройГаз'. Меня сразу подкупило то, что фирма работает материалами, которые я для себя выбрал приоритетными, а именно качественными, известных производителей и цена адекватная. Заключил договор по монтажу на удобное для меня время. Работы были выполнены в срок и качественно. Оставшиеся материалы после монтажа были сданы на склад и по оплате был сделан перерасчёт, что всегда приятно. Сотрудничеством с фирмой доволен, всем рекомендую эту компанию.",
    image: userFace,
  },
  {
    id: 3,
    title: 'Георгий',
    description:
      'Большое спасибо команде профессионалов. Всё подобрали и установили в срок',
    image: userMan,
  },
];
