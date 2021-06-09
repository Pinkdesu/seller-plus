import React from 'react';
import ImageThumb from '~/features/Common/ImageThumb';
import * as S from '../../elements';

const Order = (props) => {
  const { id, products } = props;
  return (
    <S.OrderWrapper>
      <S.OrderStatus>Отправлено!</S.OrderStatus>
      <S.OrderMain>
        <S.OrderProducts>
          {products.map((product) => (
            <S.ProductItem key={product.productId}>
              <S.OrderProductLink>
                <ImageThumb image={product.image} />
              </S.OrderProductLink>
            </S.ProductItem>
          ))}
        </S.OrderProducts>
        <S.OrderLinkWrapper>
          <S.OrderLink to={`/account/order/${id}`}>Смотреть заказ</S.OrderLink>
        </S.OrderLinkWrapper>
      </S.OrderMain>
    </S.OrderWrapper>
  );
};

export default Order;
