import React from 'react';
import { useProductContext } from '../useProductContext';
import * as S from '../elements';

const ProductBrand = () => {
  const { brand } = useProductContext();

  return <S.ProductBrand>{brand}</S.ProductBrand>;
};

export default ProductBrand;
