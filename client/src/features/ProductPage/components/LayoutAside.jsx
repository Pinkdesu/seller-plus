import React, { useState } from 'react';
import { addProduct } from '~/features/Basket/store/events';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const LayoutAside = (props) => {
  const locale = useLocale();

  const { product } = props;
  const { name, count, price, id, image } = product;

  const [productCount, setProductCount] = useState(1);

  const changeCount = (value) => {
    if (!isNaN(value) && value < count && value > 0) {
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
    addProduct({ id, name, image, price, quantity: productCount });
  };

  return (
    <S.LayoutAside>
      <S.AsideContent>
        <S.ProductHero>
          <S.ProductName>{name}</S.ProductName>
          <S.ProductPrice>
            <span>{price} rub</span>
          </S.ProductPrice>
          <S.Delivery>
            <span>{locale('freeDelivery')}</span>
          </S.Delivery>
        </S.ProductHero>
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
        <S.ButtonWrapper>
          <S.AddButton onClick={handleClick}>
            {locale('addToBasket')}
          </S.AddButton>
        </S.ButtonWrapper>
      </S.AsideContent>
    </S.LayoutAside>
  );
};

export default LayoutAside;
