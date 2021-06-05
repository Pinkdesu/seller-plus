import React, { useState, useCallback, useMemo } from 'react';
import { useLocale } from '~/utils/useLocale';
import Button from '~/features/Common/Button';
import TextField from '~/features/Common/TextField';
import * as SF from '~/features/Basket/elements';
import * as S from '../elements';

const Address = (props) => {
  const locale = useLocale();

  const [edit, setEdit] = useState(false);

  const toggleEdit = useCallback(() => {
    setEdit((prevState) => !prevState);
  }, []);

  const buttonText = edit ? 'cancel' : 'change';

  const currentAddress = useMemo(
    () => (
      <>
        <S.Text>Тюменская область</S.Text>
        <S.Text>Тюмень</S.Text>
        <S.Text>ул. Широтная, дом. 96к3, кв 267</S.Text>
      </>
    ),
    [],
  );

  return (
    <SF.LeftSideBlockWrapper>
      <SF.ContentHeader>Адресс</SF.ContentHeader>
      <S.AddressPanel>
        <S.CurrentAddress>
          <S.AddressValue>
            {edit ? (
              <>
                <TextField label={locale('region')} />
                <TextField label={locale('city')} />
                <TextField label={locale('street')} />
                <TextField label={locale('house')} />
                <TextField label={locale('flat')} />
                <Button text={locale('save')} />
              </>
            ) : (
              currentAddress
            )}
          </S.AddressValue>
          <S.ButtonWrapper>
            <Button onClick={toggleEdit} text={locale(buttonText)} />
          </S.ButtonWrapper>
        </S.CurrentAddress>
      </S.AddressPanel>
    </SF.LeftSideBlockWrapper>
  );
};

export default Address;
