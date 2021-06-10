import React from 'react';
import { useStringNumber } from '~/utils/useStringNumber';
import { useProductContext } from '../useProductContext';
import * as S from '../elements';

const ProductPrice = () => {
  const { price, locale } = useProductContext();

  const formatedPrice = useStringNumber(price);

  return (
    <S.ProductPrice>
      {locale('priceWithCurrency', { price: formatedPrice })}
    </S.ProductPrice>
  );
};

export default ProductPrice;
