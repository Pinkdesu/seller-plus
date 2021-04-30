import React from 'react';
import * as S from './elements';
import SliderSection from './components/SliderSection';
import Section from './components/Section';
import { SLIDES_INFO, ADVANTAGE_CARDS, COMPANIES, REVIEWS } from './constants';

const Home = () => {
  return (
    <S.Main>
      <SliderSection slides={SLIDES_INFO} />
      <Section
        className="services-list"
        title="services"
        data={SLIDES_INFO}
        localize
      />
      <Section
        className="advantages-list"
        title="services"
        data={ADVANTAGE_CARDS}
        localize
      />
      <Section
        className="companies-list"
        title="services"
        data={COMPANIES}
        cardText={false}
      />
      <Section
        className="reviews-list"
        title="home.title.customerReviews"
        data={REVIEWS}
      />
    </S.Main>
  );
};

export default Home;
