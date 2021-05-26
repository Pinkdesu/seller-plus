import React from 'react';
import * as S from './elements';
import { useLocale } from '~/utils/useLocale';
import { useCheckQuantity } from '~/utils/useCheckQuantity';
import { useStringNumber } from '~/utils/useStringNumber';
import { addProduct } from '~/features/Basket/store/events';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';

const Product = (props) => {
  const locale = useLocale();

  const { image, name, price, id, count } = props;

  const hasMore = useCheckQuantity(id, count);
  const formatedPrice = useStringNumber(price);

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
          <span>{locale('priceWithCurrency', { price: formatedPrice })}</span>
        </S.ProductPrice>
      </S.ProductLink>
    </S.Product>
  );
};

export default Product;
