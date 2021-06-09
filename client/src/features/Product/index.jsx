import React from 'react';
import * as S from './elements';
import { useLocale } from '~/utils/useLocale';
import { useCheckQuantity } from '~/utils/useCheckQuantity';
import { useStringNumber } from '~/utils/useStringNumber';
import { addProduct } from '~/features/Basket/store/events';
import ImageThumb from '~/features/Common/ImageThumb';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';

const Product = (props) => {
  const locale = useLocale();

  const { image, name, price, id, count } = props;

  const hasMore = useCheckQuantity(id, count);
  const formatedPrice = useStringNumber(price);

  const handleClick = (e) => {
    e.preventDefault();

    addProduct({ id, name, price, image, quantity: 1 });
  };

  return (
    <S.Product>
      <S.ProductLink to={`/shop/product/${id}`}>
        <ImageThumb image={image}>
          <S.CartButton onClick={handleClick} disabled={!hasMore}>
            <CartSVG />
          </S.CartButton>
        </ImageThumb>
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
