import React, { useState } from 'react';
import { useLocale } from '~/utils/useLocale';
import { addProduct } from '~/features/Basket/store/events';
import { useCheckQuantity } from '~/utils/useCheckQuantity';
import { useStringNumber } from '~/utils/useStringNumber';
import * as S from '../elements';

const LayoutAside = (props) => {
  const locale = useLocale();

  const { name, count, price, id, imageMain, brand } = props;

  const [productCount, setProductCount] = useState(1);

  const formatedPrice = useStringNumber(price);
  const hasMore = useCheckQuantity(id, count - productCount + 1);

  const changeCount = (value) => {
    if (!isNaN(value) && value <= count && value > 0) {
      setProductCount(value);
    }
  };

  const increaseCount = () => {
    changeCount(productCount + 1);
  };

  const reduceCount = () => {
    changeCount(productCount - 1);
  };

  const handleChange = (e) => {
    const value = +e.target.value;
    changeCount(value);
  };

  const handleClick = () => {
    addProduct({
      id,
      name,
      price,
      imageMain,
      quantity: productCount,
    });
  };

  const isOut = count === 0;

  const buttonText = isOut ? 'outOfStock' : 'addToBasket';

  return (
    <S.LayoutAside>
      <S.AsideContent>
        <S.ProductHero>
          <S.ProductName>{name}</S.ProductName>
          <S.ProductBrand>{brand}</S.ProductBrand>
          <S.ProductPrice>
            <span>{locale('priceWithCurrency', { price: formatedPrice })}</span>
          </S.ProductPrice>
          <S.Delivery>
            <span>{locale('freeDelivery')}</span>
          </S.Delivery>
        </S.ProductHero>
        {!isOut && (
          <S.ProductSettings>
            <S.ProductCount>
              <S.CountLabel>
                <label>{locale('quantity')}:</label>
              </S.CountLabel>
              <S.CountSelect>
                <S.CountInput
                  type="number"
                  value={productCount}
                  onChange={handleChange}
                />
                <S.CountButton onClick={reduceCount}>-</S.CountButton>
                <S.CountButton onClick={increaseCount}>+</S.CountButton>
              </S.CountSelect>
            </S.ProductCount>
          </S.ProductSettings>
        )}
        <S.ButtonWrapper>
          <S.AddButton
            onClick={handleClick}
            disabled={!hasMore}
            text={locale(buttonText)}
          />
        </S.ButtonWrapper>
      </S.AsideContent>
    </S.LayoutAside>
  );
};

export default LayoutAside;
