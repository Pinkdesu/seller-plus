import React from 'react';
import { ReactComponent as LightningSVG } from '~/assets/images/common/flash.svg';
import { ReactComponent as ShopSVG } from '~/assets/images/common/shopping-cart.svg';

const Product = (props) => {
  const { name, price } = props;

  return (
    <div className="product">
      <div className="product__name">{name}</div>
      <div className="product__info">
        <span className="product__shopping-icon">
          <ShopSVG />
        </span>
        <span className="product__price">
          {price}
          <LightningSVG />
        </span>
      </div>
    </div>
  );
};

export default Product;
