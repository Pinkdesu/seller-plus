import React from 'react';
import * as S from './elements';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';
import { ReactComponent as BagSVG } from '~/assets/images/shop/shopping-bag.svg';
import { ReactComponent as UserSVG } from '~/assets/images/common/user.svg';

const EmptyContent = (props) => {
  const { title, subtitle, linkText, path, email, children } = props;

  return (
    <S.EmptyMain>
      <S.EmptyContentWrapper>
        <S.EmptyContent>
          <S.EmptyBagTitleWrapper>
            <S.EmptyBagIcon>{children}</S.EmptyBagIcon>
            <S.EmptyBagTitle>{title}</S.EmptyBagTitle>
          </S.EmptyBagTitleWrapper>
          <S.EmptyBagText>{subtitle}</S.EmptyBagText>
          {email ? (
            <S.MailLink href={`mailto:${email}`}>{linkText}</S.MailLink>
          ) : (
            <S.EmptyLink to={path}>{linkText}</S.EmptyLink>
          )}
        </S.EmptyContent>
      </S.EmptyContentWrapper>
    </S.EmptyMain>
  );
};

EmptyContent.CartIcon = CartSVG;
EmptyContent.BagIcon = BagSVG;
EmptyContent.UserIcon = UserSVG;

export default EmptyContent;
