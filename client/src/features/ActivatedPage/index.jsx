import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStore } from 'effector-react';
import { $userData } from '~/features/AppBootstrap/store';
import EmptyContent from '~/features/Common/EmptyContent';

const ActivatedPage = () => {
  const locale = useLocale();
  const { email } = useStore($userData);

  return (
    <EmptyContent
      title={locale('acount.confirmEmail')}
      subtitle={locale('acount.followLink')}
      linkText={locale('confirm')}
      email={email}
    >
      <EmptyContent.UserIcon />
    </EmptyContent>
  );
};

export default ActivatedPage;
