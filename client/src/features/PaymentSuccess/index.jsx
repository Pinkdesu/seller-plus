import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useLocale } from '~/utils/useLocale';
import EmptyContent from '~/features/Common/EmptyContent';

const PaymentSuccess = () => {
  const locale = useLocale();
  const history = useHistory();
  const { state } = useLocation();

  useEffect(() => {
    if (!state?.isSuccess) {
      history.replace('/shop');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EmptyContent
      title={locale('payment.wasCreated')}
      subtitle={locale('payment.seeOrderStatus')}
      linkText={locale('account.myOrders')}
      path="/account/orders"
    >
      <EmptyContent.BagIcon />
    </EmptyContent>
  );
};

export default PaymentSuccess;
