import React from 'react';
import * as S from './elements';
import GallerySlider from './components/GallerySlider';
import LayoutAside from './components/LayoutAside';
import ProductDetails from './components/ProductDetails';
import { PRODUCTS, DETAILS } from '../Shop/constants';

const ProductPage = () => {
  return (
    <S.ProductPage>
      <S.ProductSection>
        <S.ProductLayout>
          <GallerySlider images={[PRODUCTS[0].image, PRODUCTS[0].image]} />
          <LayoutAside product={PRODUCTS[0]} />
        </S.ProductLayout>
      </S.ProductSection>
      <S.ProductSection>
        <S.ProductLayout>
          <ProductDetails
            description={DETAILS.description}
            details={DETAILS.details}
          />
        </S.ProductLayout>
      </S.ProductSection>
    </S.ProductPage>
  );
};

export default ProductPage;
