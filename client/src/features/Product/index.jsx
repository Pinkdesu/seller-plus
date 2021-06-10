import React from 'react';
import * as S from './elements';
import { useCheckQuantity } from '~/utils/useCheckQuantity';
import { addProduct } from '~/features/Basket/store/events';
import { useLocale } from '~/utils/useLocale';
import { CounterProvider } from './useProductContext';
import ImageThumb from '~/features/Common/ImageThumb';
import ProductBrand from './components/ProductBrand';
import ProductName from './components/ProductName';
import ProductPrice from './components/ProductPrice';
import ProductCount from './components/ProductCount';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';

const Product = (props) => {
  const locale = useLocale();

  const {
    image,
    name,
    price,
    id,
    count,
    brand = '',
    children,
    withButton = true,
  } = props;

  const hasMore = useCheckQuantity(id, count);

  const handleClick = (e) => {
    e.preventDefault();

    addProduct({ id, name, price, image, quantity: 1 });
  };

  return (
    <CounterProvider value={{ image, name, price, brand, locale, count }}>
      <S.Product>
        <S.ProductLink to={`/shop/product/${id}`}>
          <ImageThumb image={image}>
            {withButton && (
              <S.CartButton onClick={handleClick} disabled={!hasMore}>
                <CartSVG />
              </S.CartButton>
            )}
          </ImageThumb>
          <S.ProductInfoBlock>{children}</S.ProductInfoBlock>
        </S.ProductLink>
      </S.Product>
    </CounterProvider>
  );
};

Product.Brand = ProductBrand;
Product.Name = ProductName;
Product.Price = ProductPrice;
Product.Count = ProductCount;

export default Product;
