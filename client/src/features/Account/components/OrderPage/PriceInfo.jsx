import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStringNumber } from '~/utils/useStringNumber';
import Division from '~/features/Common/Division';
import * as S from '../../elements';

const PriceInfo = (props) => {
  const locale = useLocale();
  const { totalPrice, deliveryPrice } = props;

  const formatedDelivery = useStringNumber(deliveryPrice);
  const formatedAll = useStringNumber(totalPrice);
  const formatedTotal = useStringNumber(deliveryPrice + totalPrice);

  return (
    <S.ArticleWrapper>
      <S.ArticleHeader>{locale('totalOrderAmount')}</S.ArticleHeader>
      <Division />
      <S.PriceInfo>
        <S.ItemTitle>{locale('interimAmount')}:</S.ItemTitle>
        <S.ItemValue>
          {locale('priceWithCurrency', { price: formatedAll })}
        </S.ItemValue>
      </S.PriceInfo>
      <S.PriceInfo>
        <S.ItemTitle>{locale('delivery')}:</S.ItemTitle>
        <S.ItemValue>
          {locale('priceWithCurrency', { price: formatedDelivery })}
        </S.ItemValue>
      </S.PriceInfo>
      <Division />
      <S.PriceInfo>
        <S.TotalPrice as="p">{locale('total')}:</S.TotalPrice>
        <S.TotalPrice as="p">
          {locale('priceWithCurrency', { price: formatedTotal })}
        </S.TotalPrice>
      </S.PriceInfo>
    </S.ArticleWrapper>
  );
};

export default PriceInfo;
