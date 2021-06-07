import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStore } from 'effector-react';
import { useStringNumber } from '~/utils/useStringNumber';
import { $basket } from '~/features/Basket/store';
import { useSideContext, CounterProvider } from './useSideContext';
import CartProduct from '~/features/Common/CartProduct';
import * as S from './elements';

const Header = (props) => {
  const { localeText } = props;
  const { locale } = useSideContext();

  return <S.TotalHeader>{locale(localeText)}</S.TotalHeader>;
};

const Footer = (props) => {
  const { children } = props;

  return <S.Footer>{children}</S.Footer>;
};

const Line = () => <S.SideLine />;

const Cost = () => {
  const { locale, totalPrice } = useSideContext();

  const formatedPrice = useStringNumber(totalPrice);

  return (
    <S.Cost>
      <S.ItemTitle>{locale('totalPrice')}</S.ItemTitle>
      <S.ItemValue>
        {locale('priceWithCurrency', { price: formatedPrice })}
      </S.ItemValue>
    </S.Cost>
  );
};

const CurrentPrice = () => {
  const { locale, totalPrice } = useSideContext();

  const formatedPrice = useStringNumber(totalPrice);

  return (
    <S.CurrentPrice>
      <S.ItemTitle>{locale('total')}</S.ItemTitle>
      <S.ItemValue>
        {locale('priceWithCurrency', { price: formatedPrice })}
      </S.ItemValue>
    </S.CurrentPrice>
  );
};

const DeliveryPrice = () => {
  const { locale, deliveryPrice = 0 } = useSideContext();

  const formatedPrice = useStringNumber(deliveryPrice);

  return (
    <S.DeliveryPrice>
      <S.ItemTitle>{locale('delivery')}</S.ItemTitle>
      <S.ItemValue>
        {locale('priceWithCurrency', { price: formatedPrice })}
      </S.ItemValue>
    </S.DeliveryPrice>
  );
};

const TotalPrice = () => {
  const { locale, totalPrice, deliveryPrice = 0 } = useSideContext();

  const formatedPrice = useStringNumber(totalPrice + deliveryPrice);

  return (
    <S.TotalPrice>
      <S.ItemTitle>{locale('totalToPay')}</S.ItemTitle>
      <S.ItemValue>
        {locale('priceWithCurrency', { price: formatedPrice })}
      </S.ItemValue>
    </S.TotalPrice>
  );
};

const PayLink = () => {
  const { locale } = useSideContext();

  return (
    <S.PayLinkWrapper>
      <S.PayLink to="/payment">{locale('placeOrder')}</S.PayLink>
    </S.PayLinkWrapper>
  );
};

const Products = () => {
  const { products } = useSideContext();

  return (
    <S.ProductList>
      {products.map((product) => (
        <CartProduct
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </S.ProductList>
  );
};

const RightSide = (props) => {
  const locale = useLocale();

  const { children } = props;

  const { totalPrice, products, productsCount } = useStore($basket);

  return (
    <CounterProvider value={{ locale, totalPrice, products, productsCount }}>
      <S.RightSideWrapper>
        <S.RightSide>
          <S.RightSideTotal>{children}</S.RightSideTotal>
        </S.RightSide>
      </S.RightSideWrapper>
    </CounterProvider>
  );
};

RightSide.Header = Header;
RightSide.Footer = Footer;
RightSide.Line = Line;
RightSide.Cost = Cost;
RightSide.TotalPrice = TotalPrice;
RightSide.CurrentPrice = CurrentPrice;
RightSide.DeliveryPrice = DeliveryPrice;
RightSide.PayLink = PayLink;
RightSide.Products = Products;

export default RightSide;
