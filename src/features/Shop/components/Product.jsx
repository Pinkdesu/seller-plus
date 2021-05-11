import React from 'react';
import * as S from '../elements';

const Product = (props) => {
  const { image, name, price, id } = props;

  return (
    <S.Product to={`/shop/product/${id}`}>
      <S.ProductImageThumb src={image} />
      <S.ProductName>
        <u>{name}</u>
      </S.ProductName>
      <br />
      <S.ProductPrice>{price}</S.ProductPrice>
    </S.Product>
  );
};

export default Product;
