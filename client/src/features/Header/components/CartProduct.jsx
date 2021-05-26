import React, { memo } from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStringNumber } from '~/utils/useStringNumber';
import { deleteProduct } from '~/features/Basket/store/events';
import * as S from '../elements';
import { ReactComponent as DeleteSVG } from '~/assets/images/common/delete.svg';

const CartMenuProduct = (props) => {
  const locale = useLocale();

  const { id, name, price, quantity, image } = props;

  const formatedPrice = useStringNumber(price);

  const handleClick = () => {
    deleteProduct(id);
  };

  return (
    <S.ProductItem>
      <S.ProductContent>
        <S.ProductLink to={`/shop/product/${id}`}>
          <img src={image} alt={name} />
          <S.ProductInfo>
            <S.ProductPrice>
              {locale('priceWithCurrency', { price: formatedPrice })}
            </S.ProductPrice>
            <S.ProductName>{name}</S.ProductName>
            <S.ProductCount>
              {`${locale('quantity')}: ${quantity}`}
            </S.ProductCount>
          </S.ProductInfo>
        </S.ProductLink>
        <S.DeleteButton onClick={handleClick}>
          <DeleteSVG />
        </S.DeleteButton>
      </S.ProductContent>
    </S.ProductItem>
  );
};

export default memo(CartMenuProduct);
