import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import { useLocale } from '~/utils/useLocale';
import { $order, $orderProductsCount } from '../../store';
import { getOrderById } from '../../store/events';
import convertDate from '~/utils/convertDate';
import pluralize from '~/utils/pluralize';
import { CurrentAdress } from '~/features/PaymentPage/components/Address';
import { ORDER_STATUSES } from '../../constants';
import Division from '~/features/Common/Division';
import Product from '~/features/Product';
import PriceInfo from './PriceInfo';
import * as S from '../../elements';

const OrderPage = () => {
  const locale = useLocale();
  const { id } = useParams();

  const {
    createdAt,
    address,
    status,
    doneAt,
    sentAt,
    products,
    deliveryPrice,
    totalPrice,
  } = useStore($order);
  const productsCount = useStore($orderProductsCount);

  useEffect(() => {
    getOrderById(id);
  }, [id]);

  const orderStatus = ORDER_STATUSES?.[status];
  const currentDate = convertDate(doneAt || sentAt || createdAt);

  return (
    <S.PageContainer>
      <S.OrderPage>
        <S.OrderInfoWrapper>
          <S.TextItem>
            <S.ItemTitle>{locale('account.orders.orderNumber')}:</S.ItemTitle>
            <S.ItemValue>{id}</S.ItemValue>
          </S.TextItem>
          <S.TextItem>
            <S.ItemTitle>{locale('account.orders.creatingDate')}:</S.ItemTitle>
            <S.ItemValue>{convertDate(createdAt)}</S.ItemValue>
          </S.TextItem>
        </S.OrderInfoWrapper>
        <S.OrderAddress>
          <S.ArticleHeader>{locale('deliveryAddress')}</S.ArticleHeader>
          <Division />
          <CurrentAdress address={address} />
        </S.OrderAddress>
        <S.ArticleWrapper>
          <S.ArticleHeaderWrapper>
            <S.ArticleHeader>{locale(orderStatus?.status)}!</S.ArticleHeader>
            <span>
              {pluralize(
                productsCount,
                ['product', 'product1', 'product2'],
                locale,
              )}
            </span>
          </S.ArticleHeaderWrapper>
          <Division />
          <S.OrderProductsWrap>
            {products?.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.purchasePrice}
                imageMain={product.imageMain}
                count={product.purchaseCount}
                brand={product.brand}
                withButton={false}
              >
                <Product.Brand />
                <Product.Name />
                <Product.Count />
                <Product.Price />
              </Product>
            ))}
          </S.OrderProductsWrap>
          <Division />
          <S.OrderFooter>
            <S.TextItem>
              <S.ItemTitle>{locale(orderStatus?.dateTitle)}:</S.ItemTitle>
              <S.ItemValue>{currentDate}</S.ItemValue>
            </S.TextItem>
          </S.OrderFooter>
        </S.ArticleWrapper>
        <PriceInfo deliveryPrice={deliveryPrice} totalPrice={totalPrice} />
      </S.OrderPage>
    </S.PageContainer>
  );
};

export default OrderPage;
