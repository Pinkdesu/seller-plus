import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const LayoutAside = () => {
  const locale = useLocale();

  return (
    <S.LayoutAside>
      <S.AsideContent>
        <S.ProductHero>
          <S.ProductName>BAXIIIII 10203TF</S.ProductName>
          <S.ProductPrice>
            <span>1000022 rub</span>
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
              <S.CountInput type="number" />
              <S.CountButton>-</S.CountButton>
              <S.CountButton>+</S.CountButton>
            </S.CountSelect>
          </S.ProductCount>
        </S.ProductSettings>
        <S.ButtonWrapper>
          <S.AddButton>{locale('addToBasket')}</S.AddButton>
        </S.ButtonWrapper>
      </S.AsideContent>
    </S.LayoutAside>
  );
};

export default LayoutAside;
