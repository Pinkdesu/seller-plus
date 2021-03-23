import React from 'react';
import { useLocale } from '~/utils/useLocale';
import Header from '~/features/Common/Header';
import Product from './components/Product';
import './style.scss';

const Shop = () => {
  const locale = useLocale();

  return (
    <div className="header-page">
      <Header title={locale('shop')} />
      <div className="header-page__content-step">
        <Product name="Товар 1sssssssssssssssssssssss" price={1000} />
        <Product name="Товар 1" price={1000000000000000} />
        <Product name="Товар 1" price={1000} />
        <Product name="Товар 1" price={1000} />
        <Product name="Товар 1" price={1000} />
        <Product name="Товар 1" price={1000} />
        <Product name="Товар 1" price={1000} />
        <Product name="Товар 1" price={1000} />
        <Product name="Товар 1" price={1000} />
        <Product name="Товар 1" price={1000} />
        <Product name="Товар 1" price={1000} />
        <Product name="Товар 1" price={1000} />
      </div>
    </div>
  );
};

export default Shop;
