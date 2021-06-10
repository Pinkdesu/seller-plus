import React, { useEffect } from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStore, useList } from 'effector-react';
import { getOrders } from '../../store/events';
import { $orders } from '../../store';
import pluralize from '~/utils/pluralize';
import * as S from '../../elements';
import Order from './Order';

const Orders = () => {
  const locale = useLocale();

  const orders = useStore($orders);

  const ordersList = useList($orders, (order) => (
    <Order
      id={order.id}
      status={order.status}
      createdAt={order.createdAt}
      doneDate={order.doneDate}
      sentAt={order?.deliveryAt}
      products={order.products}
    />
  ));

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <S.PageContainer>
      <S.OrdersCount>
        {pluralize(
          orders.length,
          [
            'account.orders.order1',
            'account.orders.order2',
            'account.orders.order3',
          ],
          locale,
        )}
      </S.OrdersCount>
      <S.OrdersWrapper>{ordersList}</S.OrdersWrapper>
    </S.PageContainer>
  );
};

export default Orders;
