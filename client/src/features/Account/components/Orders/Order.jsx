import React from 'react';
import ImageThumb from '~/features/Common/ImageThumb';
import Division from '~/features/Common/Division';
import * as S from '../../elements';

const DISPLAYED_COUNT = 3;

const Order = (props) => {
  const { id, products } = props;

  const count = products?.length;
  const otherCount = count > DISPLAYED_COUNT ? count - DISPLAYED_COUNT : 0;
  const displayedProducts =
    count > DISPLAYED_COUNT ? products.slice(0, DISPLAYED_COUNT) : products;

  return (
    <S.OrderWrapper>
      <S.OrderStatus>Отправлено!</S.OrderStatus>
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
      <S.OrderFooter></S.OrderFooter>
    </S.OrderWrapper>
  );
};

export default Order;
