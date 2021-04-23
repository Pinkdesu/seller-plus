import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const AdvantageCard = (props) => {
  const locale = useLocale();

  const { image, title, description } = props;

  return (
    <S.AdvantageCard>
      <S.CardImageThumb>
        <S.CardImage src={image} alt={locale(title)} />
      </S.CardImageThumb>
      <S.CardTitle>{locale(title)}</S.CardTitle>
      <S.CardDescription>{locale(description)}</S.CardDescription>
    </S.AdvantageCard>
  );
};

export default AdvantageCard;
