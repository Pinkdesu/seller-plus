import React from 'react';
import { useStore } from 'effector-react';
import { $user } from '~/features/AppBootstrap/store';
import { useLocale } from '~/utils/useLocale';
import { updateUser } from '~/features/AppBootstrap/store/events';
import {
  useName,
  useField,
  useEmailError,
  useNameError,
  usePhoneError,
} from '~/utils/fields';
import * as S from '../elements';
import TextField from '~/features/Common/TextField';
import Button from '~/features/Common/Button';

const Personal = () => {
  const locale = useLocale();

  const { user } = useStore($user);

  const {
    email: curEmail,
    phone: curPhone,
    firstName: curFirstName,
    secondName: curSecName,
  } = user;

  const [email, onEmail] = useField(curEmail);
  const [phone, onPhone] = useField(curPhone ?? '');
  const [firstName, onFirstName] = useName(curFirstName);
  const [secondName, onSecondName] = useName(curSecName);

  const [emailError, onEmailBlur] = useEmailError(email);
  const [phoneError, onPhoneBlur] = usePhoneError(phone);
  const [firstNameError, onFirstNameBlur] = useNameError(firstName);
  const [secondNameError, onSecondNameBlur] = useNameError(secondName);

  const hasError =
    emailError || firstNameError || secondNameError || phoneError;

  const hasChange =
    email !== curEmail ||
    firstName !== curFirstName ||
    secondName !== curSecName ||
    phone !== curPhone;

  const handleClick = (e) => {
    e.preventDefault();

    if (!hasError && hasChange) {
      updateUser({
        email,
        phone,
        firstName,
        secondName,
      });
    }
  };

  return (
    <S.PageContainer>
      <S.PersonalData>
        <S.PersonalDataEdit>
          <TextField
            value={firstName}
            onBlur={onFirstNameBlur}
            onChange={onFirstName}
            label={locale('firstName')}
            error={firstNameError}
            required
          />
          <TextField
            value={secondName}
            onChange={onSecondName}
            onBlur={onSecondNameBlur}
            label={locale('secondName')}
            error={secondNameError}
            required
          />
          <TextField
            type="email"
            value={email}
            onBlur={onEmailBlur}
            onChange={onEmail}
            label={locale('email')}
            error={emailError}
            required
          />
          <TextField
            type="tel"
            value={phone}
            onChange={onPhone}
            onBlur={onPhoneBlur}
            error={phoneError}
            label={locale('telephone')}
          />
        </S.PersonalDataEdit>
        <S.SubmitButtonWrapper>
          <Button
            onClick={handleClick}
            disabled={hasError || !hasChange}
            text={locale('account.personal.saveChanges')}
          />
        </S.SubmitButtonWrapper>
      </S.PersonalData>
    </S.PageContainer>
  );
};

export default Personal;
