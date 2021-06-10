import React, { useState, useCallback, useEffect } from 'react';
import { useStore } from 'effector-react';
import { useLocale } from '~/utils/useLocale';
import {
  useName,
  useAddress,
  useNameError,
  useAddressError,
} from '~/utils/fields';
import { updateUser } from '~/features/AppBootstrap/store/events';
import Button from '~/features/Common/Button';
import TextField from '~/features/Common/TextField';
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
  const { region, city, otherAddress } = props;

  return (
    <S.AddressValue>
      <S.Text>{region}</S.Text>
      <S.Text>{city}</S.Text>
      <S.Text>{otherAddress}</S.Text>
    </S.AddressValue>
  );
};

const EditForm = (props) => {
  const locale = useLocale();

  const { region, city, otherAddress } = props;

  const pending = useStore(updateUser.pending);

  const [currentCity, onCurrentCity] = useName(city);
  const [currentRegion, onCurrentRegion] = useName(region);
  const [currentAddress, onCurrentAddress] = useAddress(otherAddress);

  const [cityError, onCurrentCityBlur] = useNameError(currentCity);
  const [regionError, onCurrentRegionBlur] = useNameError(currentRegion);
  const [addressError, onCurrentAddressBlur] = useAddressError(currentAddress);

  const hasChages =
    city !== currentCity ||
    region !== currentRegion ||
    currentAddress !== otherAddress;

  const disabled =
    pending ||
    Boolean(cityError) ||
    Boolean(regionError) ||
    Boolean(addressError) ||
    !hasChages;

  const handleClick = () => {
    !disabled &&
      updateUser({
        region: currentRegion,
        city: currentCity,
        otherAddress: currentAddress,
      });
  };

  return (
    <S.AddressValue>
      <TextField
        value={currentRegion}
        onChange={onCurrentRegion}
        error={regionError}
        onBlur={onCurrentRegionBlur}
        label={locale('region')}
      />
      <TextField
        value={currentCity}
        onChange={onCurrentCity}
        error={cityError}
        onBlur={onCurrentCityBlur}
        label={locale('city')}
      />
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
  const { address = {}, isAddress } = props;
  const { region = '', city = '', otherAddress = '' } = address;

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    isAddress && setEdit(false);
  }, [isAddress, address]);

  const toggleEdit = useCallback(() => {
    setEdit((prevState) => !prevState);
  }, []);

  return (
    <S.AddressPanel>
      {isAddress && !edit && (
        <CurrentAdress
          region={region}
          city={city}
          otherAddress={otherAddress}
        />
      )}
      {(!isAddress || edit) && (
        <EditForm egion={region} city={city} otherAddress={otherAddress} />
      )}
      {isAddress && <EditButtin toggleEdit={toggleEdit} edit={edit} />}
    </S.AddressPanel>
  );
};

export default Address;
