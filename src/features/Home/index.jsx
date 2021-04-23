import React from 'react';
import * as S from './elements';
import SliderSection from './components/SliderSection';
import Section from './components/Section';

const Home = () => {
  return (
    <S.Main>
      <SliderSection />
      <Section />
    </S.Main>
  );
};

export default Home;
