import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStore } from 'effector-react';
import { $user } from '~/features/AppBootstrap/store';
import * as S from '../elements';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';

const EmptyContent = () => {
  const locale = useLocale();

  const { isAuth } = useStore($user);

  const textLocale = isAuth ? 'basket.addProductsToBag' : 'basket.logInToView';
  const linkLocale = isAuth ? 'shop' : 'signIn';
  const linkPath = isAuth ? '/shop' : '/account/login';

  return (
    <S.BasketMain isEmpty>
      <S.BasketContentWrapper isEmpty>
        <S.EmptyContent>
          <S.EmptyBagTitleWrapper>
            <S.EmptyBagIcon>
              <CartSVG />
            </S.EmptyBagIcon>
            <S.EmptyBagTitle>{locale('basket.yourBagIsEmpty')}</S.EmptyBagTitle>
          </S.EmptyBagTitleWrapper>
          <S.EmptyBagText>{locale(textLocale)}</S.EmptyBagText>
          <S.AuthLink to={linkPath}>{locale(linkLocale)}</S.AuthLink>
        </S.EmptyContent>
      </S.BasketContentWrapper>
    </S.BasketMain>
  );
};

export default EmptyContent;
