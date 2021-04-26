import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';
import Card from './Card';

const Section = (props) => {
  const locale = useLocale();

  const { data, title, className } = props;

  return (
    <S.Section>
      <S.SectionHeader>{locale(title)}</S.SectionHeader>
      <S.SectionContent>
        {data.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.subtitle ?? card.description}
            className={`${className}__card`}
          />
        ))}
      </S.SectionContent>
    </S.Section>
  );
};

export default Section;
