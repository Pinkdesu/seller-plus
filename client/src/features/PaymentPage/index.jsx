import React from 'react';
import * as S from './elements';
import * as SF from '~/features/Basket/elements';
import Address from './components/Address';

const PaymentPage = () => {
  return (
    <SF.PageMain>
      <SF.PageContentWrapper>
        <SF.Layout>
          <SF.PageContent>
            <SF.ContentHolders>
              <SF.LeftSideBlockWrapper>
                <SF.ContentHeader>АДРЕС ЭЛЕКТРОННОЙ почты</SF.ContentHeader>
                <S.Text>user_3@gmail.com</S.Text>
              </SF.LeftSideBlockWrapper>
              <Address />
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
