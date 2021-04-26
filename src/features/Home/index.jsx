import React from 'react';
import * as S from './elements';
import SliderSection from './components/SliderSection';
import Section from './components/Section';
import { SLIDES_INFO, ADVANTAGE_CARDS } from './constants';

const Home = () => {
  return (
    <S.Main>
      <SliderSection slides={SLIDES_INFO} />
      <Section className="services-list" title="services" data={SLIDES_INFO} />
      <Section
        className="advantages-list"
        title="services"
        data={ADVANTAGE_CARDS}
      />
    </S.Main>
  );
};

export default Home;
