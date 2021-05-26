import React from 'react';
import * as S from './elements';
import GallerySlider from './components/GallerySlider';
import LayoutAside from './components/LayoutAside';
import ProductDetails from './components/ProductDetails';
import { PRODUCTS } from '../Shop/constants';

const ProductPage = () => {
  return (
    <S.ProductPage>
      <S.ProductSection>
        <S.ProductLayout>
          <GallerySlider images={[PRODUCTS[1].image, PRODUCTS[1].image]} />
          <LayoutAside product={PRODUCTS[1]} />
        </S.ProductLayout>
      </S.ProductSection>
      <S.ProductSection>
        <S.ProductLayout>
          <ProductDetails />
        </S.ProductLayout>
      </S.ProductSection>
    </S.ProductPage>
  );
};

export default ProductPage;
