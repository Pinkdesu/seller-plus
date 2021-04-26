import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const Card = (props) => {
  const locale = useLocale();

  const { className, image, title, description, imageAlt, cardText } = props;

  return (
    <S.Card className={className}>
      <S.CardImageThumb image={image}>
        <img src={image} alt={locale(imageAlt)} />
      </S.CardImageThumb>

      {cardText && (
        <S.CardTextWrapper>
          <S.CardTitle as="h2">{locale(title)}</S.CardTitle>
          <S.CardDescription>{locale(description)}</S.CardDescription>
        </S.CardTextWrapper>
      )}
    </S.Card>
  );
};

export default Card;
