import React from 'react';
import * as S from './elements';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';
import { ReactComponent as BagSVG } from '~/assets/images/shop/shopping-bag.svg';

const CartIcon = () => <CartSVG />;
const BagIcon = () => <BagSVG />;

const EmptyContent = (props) => {
  const { title, subtitle, linkText, path, children } = props;

  return (
    <S.EmptyMain>
      <S.EmptyContentWrapper>
        <S.EmptyContent>
          <S.EmptyBagTitleWrapper>
            <S.EmptyBagIcon>{children}</S.EmptyBagIcon>
            <S.EmptyBagTitle>{title}</S.EmptyBagTitle>
          </S.EmptyBagTitleWrapper>
          <S.EmptyBagText>{subtitle}</S.EmptyBagText>
          <S.EmptyLink to={path}>{linkText}</S.EmptyLink>
        </S.EmptyContent>
      </S.EmptyContentWrapper>
    </S.EmptyMain>
  );
};

EmptyContent.CartIcon = CartIcon;
EmptyContent.BagIcon = BagIcon;

export default EmptyContent;
