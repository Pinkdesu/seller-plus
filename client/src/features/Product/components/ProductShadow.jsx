import React, { memo } from 'react';
import * as S from '../elements';

const ProductShadow = (props) => {
  const { text } = props;

  return (
    <S.ProductShadow>
      <S.ShadowText>{text}</S.ShadowText>
    </S.ProductShadow>
  );
};

export default memo(ProductShadow);
