import React from 'react';
import * as S from '../elements';

const ServiceCard = (props) => {
  const { image } = props;

  return (
    <S.ServiceCard>
      <S.CardImage src={image} alt="service" />
      <S.CardTextWrapper>
        <S.CardTitle as="h2">Helllow</S.CardTitle>
        <S.CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          impedit corporis quas minus reprehenderit ab. Nobis quibusdam fugit
          dolorem adipisci, optio amet error voluptate debitis, asperiores quas
          totam. Vero, et?
        </S.CardDescription>
      </S.CardTextWrapper>
    </S.ServiceCard>
  );
};

export default ServiceCard;
