import React, { memo } from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStringNumber } from '~/utils/useStringNumber';
import { deleteProduct } from '~/features/Basket/store/events';
import * as S from './elements';
import ImageThumb from '~/features/Common/ImageThumb';
import { ReactComponent as DeleteSVG } from '~/assets/images/common/delete.svg';

const DeleteOneButton = (props) => {
  const { id } = props;

  const handleClick = () => {
    deleteProduct(id);
  };

  return (
    <S.DeleteButton onClick={handleClick}>
      <DeleteSVG />
    </S.DeleteButton>
  );
};

const CartProduct = memo((props) => {
  const locale = useLocale();

  const { id, name, price, quantity, brand, imageMain, children } = props;

  const formatedPrice = useStringNumber(price);

  return (
    <S.ProductItem>
      <S.ProductContent>
        <S.ProductLink to={`/shop/product/${id}`}>
          <ImageThumb src={imageMain} alt={name} />
          <S.ProductInfo>
            <S.ProductPrice>
              {locale('priceWithCurrency', { price: formatedPrice })}
            </S.ProductPrice>
            <S.ProductName>{brand}</S.ProductName>
            <S.ProductName>{name}</S.ProductName>
            <S.ProductCount>
              {`${locale('quantity')}: ${quantity}`}
            </S.ProductCount>
          </S.ProductInfo>
        </S.ProductLink>
        {children}
      </S.ProductContent>
    </S.ProductItem>
  );
});

CartProduct.DeleteOneButton = DeleteOneButton;

export default CartProduct;
