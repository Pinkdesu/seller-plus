import React, { useEffect } from 'react';
import { useLocale } from '~/utils/useLocale';
import { useHistory } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $userData, $isAddress } from '~/features/AppBootstrap/store';
import { $isSuccess } from '~/features/Account/store';
import { $productsCount } from '~/features/Basket/store';
import { addOrder, resetIsSuccess } from '~/features/Account/store/events';
import * as S from './elements';
import * as SF from '~/features/Basket/elements';
import Address from './components/Address';
import Phone from './components/Phone';
import CardDetails from './components/CardDetails';
import RightSide from '~/features/Common/RightSide';
import Button from '~/features/Common/Button';
import Loader from '~/features/Common/Loader';

const PaymentPage = () => {
  const locale = useLocale();
  const history = useHistory();

  const isAddress = useStore($isAddress);
  const isSuccess = useStore($isSuccess);
  const pending = useStore(addOrder.pending);
  const productCount = useStore($productsCount);

  const { email, address, phone } = useStore($userData);

  useEffect(() => {
    if (isSuccess) {
      history.replace({
        pathname: '/payment/success',
        state: {
          isSuccess,
        },
      });
    }

    if (!productCount && !isSuccess) {
      history.replace('/basket');
    }

    return () => resetIsSuccess();
  }, [isSuccess, productCount, history]);

  const handleClick = () => {
    isAddress &&
      addOrder({
        address,
        phone,
      });
  };

  return (
    <S.Main>
      {pending && <Loader />}
      <SF.PageContentWrapper>
        <SF.Layout>
          <SF.PageContent>
            <SF.ContentHolders>
              <SF.LeftSideBlockWrapper>
                <SF.ContentHeader>{locale('emailAddress')}</SF.ContentHeader>
                <S.Text>{email}</S.Text>
              </SF.LeftSideBlockWrapper>
              <SF.LeftSideBlockWrapper>
                <SF.ContentHeader>
                  {locale('payment.phoneNumber')}
                </SF.ContentHeader>
                <Phone phone={phone} />
              </SF.LeftSideBlockWrapper>
              <SF.LeftSideBlockWrapper>
                <SF.ContentHeader>{locale('address')}</SF.ContentHeader>
                <Address address={address} isAddress={isAddress} />
              </SF.LeftSideBlockWrapper>
              <SF.LeftSideBlockWrapper>
                <SF.ContentHeader>{locale('paymentMethod')}</SF.ContentHeader>
                <CardDetails />
              </SF.LeftSideBlockWrapper>
            </SF.ContentHolders>
            <S.Footer>
              <Button
                text="????????????????"
                onClick={handleClick}
                disabled={!isAddress || !phone || pending}
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
    </S.Main>
  );
};

export default PaymentPage;
