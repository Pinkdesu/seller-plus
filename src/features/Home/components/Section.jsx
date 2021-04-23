import React from 'react';
import * as S from '../elements';
import Card from './ServiceCard';

import syberia from '~/assets/images/home/syberia.jpg';

const Section = (props) => {
  return (
    <S.Section>
      <S.SectionHeader>Наши услуги</S.SectionHeader>
      <S.SectionContent>
        <Card image={syberia} />
        <Card image={syberia} />
        <Card image={syberia} />
      </S.SectionContent>
    </S.Section>
  );
};

export default Section;
