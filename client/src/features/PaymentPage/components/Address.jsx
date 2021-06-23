import React, { useState, useCallback, useEffect } from 'react';
import { useStore } from 'effector-react';
import { useLocale } from '~/utils/useLocale';
import { useAddress, useAddressError } from '~/utils/fields';
import { updateUser } from '~/features/AppBootstrap/store/events';
import Button from '~/features/Common/Button';
import TextField from '~/features/Common/TextField';
import { REGION, CITY } from '../constants';
import * as S from '../elements';

const EditButtin = (props) => {
  const locale = useLocale();

  const { toggleEdit, edit } = props;

  const text = edit ? 'cancel' : 'change';

  return (
    <S.ButtonWrapper>
      <Button onClick={toggleEdit} text={locale(text)} />
    </S.ButtonWrapper>
  );
};

export const CurrentAdress = (props) => {
  const { address } = props;

  return (
    <S.AddressValue>
      <S.Text>{REGION}</S.Text>
      <S.Text>{CITY}</S.Text>
      <S.Text>{address}</S.Text>
    </S.AddressValue>
  );
};

const EditForm = (props) => {
  const locale = useLocale();

  const { otherAddress } = props;

  const pending = useStore(updateUser.pending);

  const [currentAddress, onCurrentAddress] = useAddress(otherAddress);
  const [addressError, onCurrentAddressBlur] = useAddressError(currentAddress);

  const hasChages = currentAddress !== otherAddress;

  const disabled = pending || Boolean(addressError) || !hasChages;

  const handleClick = () => {
    !disabled &&
      updateUser({
        address: currentAddress,
      });
  };

  return (
    <S.AddressValue>
      <TextField value={REGION} readonly label={locale('region')} />
      <TextField value={CITY} readonly label={locale('city')} />
      <TextField
        value={currentAddress}
        onChange={onCurrentAddress}
        error={addressError}
        onBlur={onCurrentAddressBlur}
        label={locale('address')}
        placeholder="ул. Пушкина, дом 1, кв. 1"
      />
      <Button text={locale('save')} disabled={disabled} onClick={handleClick} />
    </S.AddressValue>
  );
};

const Address = (props) => {
  const { address, isAddress } = props;

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    isAddress && setEdit(false);
  }, [isAddress, address]);

  const toggleEdit = useCallback(() => {
    setEdit((prevState) => !prevState);
  }, []);

  return (
    <S.AddressPanel>
      {isAddress && !edit && <CurrentAdress address={address} />}
      {(!isAddress || edit) && <EditForm otherAddress={address} />}
      {isAddress && <EditButtin toggleEdit={toggleEdit} edit={edit} />}
    </S.AddressPanel>
  );
};

export default Address;
