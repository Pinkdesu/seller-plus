import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';
import Card from './Card';

const Section = (props) => {
  const locale = useLocale();

  const { data, title, className, localize = false } = props;

  const checkLocalization = (text) => {
    if (!text) return null;

    return localize ? locale(text) : text;
  };

  return (
    <S.Section className={className}>
      <S.SectionHeader>{locale(title)}</S.SectionHeader>
      <S.SectionContent>
        {data.map((card) => {
          const title = checkLocalization(card?.title);
          const imageAlt = checkLocalization(card?.name ?? card?.title);
          const description = checkLocalization(
            card?.subtitle ?? card?.description,
          );

          return (
            <Card
              key={card.id}
              title={title}
              image={card.image}
              imageAlt={imageAlt}
              description={description}
              className={`${className}__card`}
            />
          );
        })}
      </S.SectionContent>
    </S.Section>
  );
};

export default Section;
