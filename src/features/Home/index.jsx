import React from 'react';
import * as S from './elements';
import SliderSection from './components/SliderSection';
import Section from './components/Section';
import ServiceCard from './components/ServiceCard';
import AdvantageCard from './components/AdvantageCard';
import { SLIDES_INFO, ADVANTAGE_CARDS } from './constants';

const Home = () => {
  return (
    <S.Main>
      <SliderSection slides={SLIDES_INFO} />
      <Section title="services">
        {SLIDES_INFO.map((info) => (
          <ServiceCard
            key={info.id}
            image={info.image}
            title={info.title}
            description={info.subtitle}
          />
        ))}
      </Section>
      <Section title="services">
        {ADVANTAGE_CARDS.map((info) => (
          <AdvantageCard
            key={info.id}
            image={info.image}
            title={info.title}
            description={info.description}
          />
        ))}
      </Section>
    </S.Main>
  );
};

export default Home;
