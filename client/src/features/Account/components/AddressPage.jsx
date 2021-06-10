import React from 'react';
import { useStore } from 'effector-react';
import { $userData, $isAddress } from '~/features/AppBootstrap/store';
import * as S from '../elements';
import Address from '~/features/PaymentPage/components/Address';

const AddressPage = () => {
  const isAddress = useStore($isAddress);
  const { address } = useStore($userData);

  return (
    <S.PageContainer>
      <S.PersonalData>
        <S.PersonalDataEdit>
          <Address address={address} isAddress={isAddress} />
        </S.PersonalDataEdit>
      </S.PersonalData>
    </S.PageContainer>
  );
};

export default AddressPage;
