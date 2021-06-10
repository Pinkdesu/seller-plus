import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { ORDER_STATUSES, DISPLAYED_COUNT, DATE_OPTIONS } from '../../constants';
import ImageThumb from '~/features/Common/ImageThumb';
import Division from '~/features/Common/Division';
import * as S from '../../elements';

const Order = (props) => {
  const locale = useLocale();

  const { id, products, status, createdAt, doneDate, sentAt } = props;

  const count = products?.length;
  const otherCount = count > DISPLAYED_COUNT ? count - DISPLAYED_COUNT : 0;
  const displayedProducts =
    count > DISPLAYED_COUNT ? products.slice(0, DISPLAYED_COUNT) : products;

  const statusText = ORDER_STATUSES[status].status;
  const dateTitle = ORDER_STATUSES[status].dateTitle;
  const currentDate = new Date(doneDate || sentAt || createdAt);

  return (
    <S.OrderWrapper>
      <S.OrderStatus>{locale(statusText)}!</S.OrderStatus>
      <S.OrderMain>
        <S.OrderProducts>
          {displayedProducts.map((product, index) => (
            <S.ProductItem key={product.productId}>
              <S.OrderProductLink to={`/account/order/${id}`}>
                <ImageThumb image={product.image} />
                {otherCount !== 0 && index === 2 && (
                  <S.OtherCountWrapper>
                    <S.OtherCount>{`+${otherCount}`}</S.OtherCount>
                  </S.OtherCountWrapper>
                )}
              </S.OrderProductLink>
            </S.ProductItem>
          ))}
        </S.OrderProducts>
        <S.OrderLinkWrapper>
          <S.OrderLink to={`/account/order/${id}`}>Смотреть заказ</S.OrderLink>
        </S.OrderLinkWrapper>
      </S.OrderMain>
      <Division />
      <S.OrderFooter>
        <S.TextItem>
          <S.ItemTitle>{locale('account.orders.orderNumber')}:</S.ItemTitle>
          <S.ItemValue>{id}</S.ItemValue>
        </S.TextItem>
        <S.TextItem>
          <S.ItemTitle>{locale(dateTitle)}:</S.ItemTitle>
          <S.ItemValue>
            {currentDate.toLocaleString('ru', DATE_OPTIONS)}
          </S.ItemValue>
        </S.TextItem>
      </S.OrderFooter>
    </S.OrderWrapper>
  );
};

export default Order;
