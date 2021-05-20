import React from 'react';
import * as S from '../elements';
import test from '~/assets/images/shop/test-prod.jpg';
import { ReactComponent as DeleteSVG } from '~/assets/images/common/delete.svg';

const CartMenuProduct = () => {
  return (
    <S.ProductItem>
      <S.ProductContent>
        <S.ProductLink>
          <img src={test} alt="p" />
          <S.ProductInfo>
            <S.ProductPrice>123321 rub</S.ProductPrice>
            <S.ProductName>BASI 2123 </S.ProductName>
            <S.ProductCount>Count 1</S.ProductCount>
          </S.ProductInfo>
        </S.ProductLink>
        <S.DeleteButton>
          <DeleteSVG />
        </S.DeleteButton>
      </S.ProductContent>
    </S.ProductItem>
  );
};

export default CartMenuProduct;