import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';
import Card from './Card';

const Section = (props) => {
  const locale = useLocale();

  const { data, title, className, cardText = true } = props;

  return (
    <S.Section className={className}>
      <S.SectionHeader>{locale(title)}</S.SectionHeader>
      <S.SectionContent>
        {data.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            imageAlt={card.name ?? card.title}
            description={card.subtitle ?? card.description}
            className={`${className}__card`}
            cardText={cardText}
          />
        ))}
      </S.SectionContent>
    </S.Section>
  );
};

export default Section;
