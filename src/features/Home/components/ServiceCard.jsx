import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const ServiceCard = (props) => {
  const locale = useLocale();

  const { image, title, description } = props;

  return (
    <S.ServiceCard>
      <S.CardImage src={image} alt="service" />
      <S.CardTextWrapper>
        <S.CardTitle as="h2">{locale(title)}</S.CardTitle>
        <S.CardDescription>{locale(description)}</S.CardDescription>
      </S.CardTextWrapper>
    </S.ServiceCard>
  );
};

export default ServiceCard;
