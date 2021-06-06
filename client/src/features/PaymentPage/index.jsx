import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStore } from 'effector-react';
import { $userData } from '~/features/AppBootstrap/store';
import * as S from './elements';
import * as SF from '~/features/Basket/elements';
import Address from './components/Address';

const PaymentPage = () => {
  const locale = useLocale();

  const { email } = useStore($userData);

  return (
    <SF.PageMain>
      <SF.PageContentWrapper>
        <SF.Layout>
          <SF.PageContent>
            <SF.ContentHolders>
              <SF.LeftSideBlockWrapper>
                <SF.ContentHeader>АДРЕС ЭЛЕКТРОННОЙ почты</SF.ContentHeader>
                <S.Text>{email}</S.Text>
              </SF.LeftSideBlockWrapper>
              <SF.LeftSideBlockWrapper>
                <SF.ContentHeader>{locale('address')}</SF.ContentHeader>
                <Address />
              </SF.LeftSideBlockWrapper>
              <SF.LeftSideBlockWrapper>
                <SF.ContentHeader>Способ оплаты</SF.ContentHeader>
                <Address />
              </SF.LeftSideBlockWrapper>
            </SF.ContentHolders>
          </SF.PageContent>
          <SF.RightSideWrapper>
            <SF.RightSide></SF.RightSide>
          </SF.RightSideWrapper>
        </SF.Layout>
      </SF.PageContentWrapper>
    </SF.PageMain>
  );
};

export default PaymentPage;
