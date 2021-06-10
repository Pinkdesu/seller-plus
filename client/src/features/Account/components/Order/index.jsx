import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocale } from '~/utils/useLocale';
import { getOrderById } from '../../store/events';
import * as S from '../../elements';

const OrderPage = () => {
  const locale = useLocale();
  const { id } = useParams();

  useEffect(() => {
    getOrderById(id);
  }, [id]);

  return (
    <S.PageContainer>
      <S.OrderPage>
        <S.OrderInfoWrapper>
          <S.TextItem>
            <S.ItemTitle>{locale('account.orders.orderNumber')}:</S.ItemTitle>
            <S.ItemValue>1</S.ItemValue>
          </S.TextItem>
          <S.TextItem>
            <S.ItemTitle>{locale('account.orders.creatingDate')}:</S.ItemTitle>
            <S.ItemValue></S.ItemValue>
          </S.TextItem>
        </S.OrderInfoWrapper>
      </S.OrderPage>
    </S.PageContainer>
  );
};

export default OrderPage;
