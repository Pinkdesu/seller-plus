import React from 'react';
import * as S from './elements';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';

const Product = (props) => {
  const { image, name, price, id } = props;

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <S.Product>
      <S.ProductLink to={`/shop/product/${id}`}>
        <S.ProductImageThumb>
          <S.ProductImage src={image} />
          <S.CartButton onClick={handleClick}>
            <CartSVG />
          </S.CartButton>
        </S.ProductImageThumb>
        <S.ProductNameBlock>
          <S.ProductName>{name}</S.ProductName>
        </S.ProductNameBlock>
        <S.ProductPrice>
          <span>{price} руб.</span>
        </S.ProductPrice>
      </S.ProductLink>
    </S.Product>
  );
};

export default Product;
