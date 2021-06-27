import React, { useState, useCallback, useEffect } from 'react';
import { useStore } from 'effector-react';
import { useLocale } from '~/utils/useLocale';
import { useField, usePhoneError } from '~/utils/fields';
import { updateUser } from '~/features/AppBootstrap/store/events';
import Button from '~/features/Common/Button';
import TextField from '~/features/Common/TextField';
import { EditButton } from './Address';
import * as S from '../elements';

const CurrentPhone = (props) => {
  const { phone } = props;

  return (
    <S.PanelContent>
      <S.Text>{phone}</S.Text>
    </S.PanelContent>
  );
};

const EditForm = (props) => {
  const locale = useLocale();

  const { phone } = props;

  const pending = useStore(updateUser.pending);

  const [currentPhone, onCurrentPhone] = useField(phone);
  const [phoneError, onCurrentPhoneBlur] = usePhoneError(currentPhone);

  const hasChages = currentPhone !== phone;

  const disabled = pending || Boolean(phoneError) || !hasChages;

  const handleClick = () => {
    !disabled &&
      updateUser({
        phone: currentPhone,
      });
  };

  return (
    <S.PanelContent>
      <TextField
        value={currentPhone}
        onChange={onCurrentPhone}
        error={phoneError}
        onBlur={onCurrentPhoneBlur}
        label={locale('telephone')}
        placeholder="+79129999999"
      />
      <Button text={locale('save')} disabled={disabled} onClick={handleClick} />
    </S.PanelContent>
  );
};

const Prone = (props) => {
  const { phone } = props;

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    Boolean(phone) && setEdit(false);
  }, [phone]);

  const toggleEdit = useCallback(() => {
    setEdit((prevState) => !prevState);
  }, []);

  return (
    <S.Panel>
      {Boolean(phone) && !edit && <CurrentPhone phone={phone} />}
      {(!phone || edit) && <EditForm phone={phone} />}
      {Boolean(phone) && <EditButton toggleEdit={toggleEdit} edit={edit} />}
    </S.Panel>
  );
};

export default Prone;
