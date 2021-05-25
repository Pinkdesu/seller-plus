import React from 'react';
import { useStore } from 'effector-react';
import { $servicesList } from '~/features/AppBootstrap/store';
import SliderSection from './components/SliderSection';
import Section from './components/Section';
import { SLIDES_INFO, ADVANTAGE_CARDS, COMPANIES, REVIEWS } from './constants';

const Home = () => {
  const services = useStore($servicesList);

  return (
    <main>
      <SliderSection slides={SLIDES_INFO} />
      <Section className="services-list" title="services" data={services} />
      <Section
        className="advantages-list"
        title="advantages"
        data={ADVANTAGE_CARDS}
        localize
      />
      <Section
        className="companies-list"
        title="partners"
        data={COMPANIES}
        cardText={false}
      />
      <Section
        className="reviews-list"
        title="home.title.customerReviews"
        data={REVIEWS}
      />
    </main>
  );
};

export default Home;
