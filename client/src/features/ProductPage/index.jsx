import React from 'react';
import * as S from './elements';
import GallerySlider from './components/GallerySlider';
import LayoutAside from './components/LayoutAside';
import ProductDetails from './components/ProductDetails';
import test from '~/assets/images/shop/test-prod.jpg';

const ProductPage = () => {
  return (
    <S.ProductPage>
      <S.ProductSection>
        <S.ProductLayout>
          <GallerySlider images={[test, test, test, test]} />
          <LayoutAside />
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
