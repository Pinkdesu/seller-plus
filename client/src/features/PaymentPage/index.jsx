import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStore } from 'effector-react';
import { $userData, $isAddress } from '~/features/AppBootstrap/store';
import { addOrder } from '~/features/Account/store/events';
import * as S from './elements';
import * as SF from '~/features/Basket/elements';
import Address from './components/Address';
import CardDetails from './components/CardDetails';
import RightSide from '~/features/Common/RightSide';
import Button from '~/features/Common/Button';

const PaymentPage = () => {
  const locale = useLocale();

  const isAddress = useStore($isAddress);
  const { email, address } = useStore($userData);
  const pending = useStore(addOrder.pending);

  const handleClick = () => {
    isAddress &&
      addOrder({
        ...address,
      });
  };

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
                <Address address={address} isAddress={isAddress} />
              </SF.LeftSideBlockWrapper>
              <SF.LeftSideBlockWrapper>
                <SF.ContentHeader>Способ оплаты</SF.ContentHeader>
                <CardDetails />
              </SF.LeftSideBlockWrapper>
            </SF.ContentHolders>
            <S.Footer>
              <Button
                text="Заказать"
                onClick={handleClick}
                disabled={!isAddress || pending}
              />
            </S.Footer>
          </SF.PageContent>
          <RightSide>
            <RightSide.Header localeText="total" />
            <RightSide.Line />
            <RightSide.Products />
            <RightSide.Line />
            <RightSide.Footer>
              <RightSide.CurrentPrice />
              <RightSide.DeliveryPrice />
              <RightSide.TotalPrice />
            </RightSide.Footer>
          </RightSide>
        </SF.Layout>
      </SF.PageContentWrapper>
    </SF.PageMain>
  );
};

export default PaymentPage;
