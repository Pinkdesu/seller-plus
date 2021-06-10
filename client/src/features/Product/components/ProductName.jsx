import React from 'react';
import { useProductContext } from '../useProductContext';
import * as S from '../elements';

const ProductName = (props) => {
  const { name } = useProductContext();

  return <S.ProductName>{name}</S.ProductName>;
};

export default ProductName;
