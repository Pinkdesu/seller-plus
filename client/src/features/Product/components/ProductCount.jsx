import React from 'react';
import * as S from '../elements';
import { useProductContext } from '../useProductContext';

const ProductCount = () => {
  const { locale, count } = useProductContext();

  return <S.ProductCount>{`${locale('quantity')}: ${count}`}</S.ProductCount>;
};

export default ProductCount;
