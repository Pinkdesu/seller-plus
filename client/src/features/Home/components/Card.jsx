import React from 'react';
import * as S from '../elements';

const Card = (props) => {
  const { className, image, title, description, imageAlt } = props;

  return (
    <S.Card className={className}>
      <S.CardImageThumb image={image}>
        <img src={image} alt={imageAlt} />
      </S.CardImageThumb>

      {(title || description) && (
        <S.CardTextWrapper>
          <S.CardTitle as="h2">{title}</S.CardTitle>
          <S.CardDescription>{description}</S.CardDescription>
        </S.CardTextWrapper>
      )}
    </S.Card>
  );
};

export default Card;
