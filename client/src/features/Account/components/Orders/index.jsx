import React, { useEffect } from 'react';
import { useStore, useList } from 'effector-react';
import { getOrders } from '../../store/events';
import { $orders } from '../../store';
import * as S from '../../elements';
import Order from './Order';

const Orders = () => {
  const orders = useStore($orders);

  const ordersList = useList($orders, (order) => (
    <Order
      id={order.id}
      createdAt={order.createdAt}
      status={order.status}
      products={order.products}
    />
  ));

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <S.PageContainer>
      <S.OrdersCount>Всего {orders.length} заказа</S.OrdersCount>
      <S.OrdersWrapper>{ordersList}</S.OrdersWrapper>
    </S.PageContainer>
  );
};

export default Orders;
