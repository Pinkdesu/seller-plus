import React from 'react';
import * as S from './elements';
import { useCheckQuantity } from '~/utils/useCheckQuantity';
import { addProduct } from '~/features/Basket/store/events';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';

const Product = (props) => {
  const { image, name, price, id, count } = props;

  const hasMore = useCheckQuantity(id, count);

  const handleClick = (e) => {
    e.preventDefault();

    addProduct({ id, name, price, image, quantity: 1, maxQuantity: count });
  };

  return (
    <S.Product>
      <S.ProductLink to={`/shop/product/${id}`}>
        <S.ProductImageThumb>
          <S.ProductImage src={image} />
          <S.CartButton onClick={handleClick} disabled={!hasMore}>
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
