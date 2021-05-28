import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useField, usePasswordError } from '~/utils/fields';
import { changePassword } from '~/features/AppBootstrap/store/events';
import * as S from '../elements';
import PasswordField from '~/features/Common/PasswordField';
import Button from '~/features/Common/Button';

const ChangePassword = () => {
  const locale = useLocale();

  const [currentPassword, onCurrentPassword] = useField('');
  const [newPassword, onNewPassword] = useField('');
  const [repeatNewPassword, onRepeatNewPassword] = useField('');

  const [curPasError, onCurrentPasBlur] = usePasswordError(currentPassword);
  const [newPasError, onNewPasBlur] = usePasswordError(newPassword);
  const [repNewPasError, onRepNewPasBlur] = usePasswordError(repeatNewPassword);

  const passMatchError = newPassword !== repeatNewPassword;

  const disabled =
    curPasError || newPasError || repNewPasError || passMatchError;

  const handleClick = () => {
    !disabled &&
      changePassword({
        currentPassword,
        newPassword,
        repeatNewPassword,
      });
  };

  return (
    <S.PageContainer>
      <S.PersonalData>
        <S.PersonalDataEdit>
          <PasswordField
            value={currentPassword}
            error={curPasError}
            label={locale('currentPassword')}
            onChange={onCurrentPassword}
            onBlur={onCurrentPasBlur}
          />
          <PasswordField
            value={newPassword}
            error={newPasError}
            label={locale('newPassword')}
            onChange={onNewPassword}
            onBlur={onNewPasBlur}
          />
          <PasswordField
            value={repeatNewPassword}
            error={repNewPasError}
            label={locale('repeatNewPassword')}
            onChange={onRepeatNewPassword}
            onBlur={onRepNewPasBlur}
          />
        </S.PersonalDataEdit>
        <S.SubmitButtonWrapper>
          <Button
            onClick={handleClick}
            disabled={disabled}
            text={locale('account.personal.savePassword')}
          />
        </S.SubmitButtonWrapper>
      </S.PersonalData>
    </S.PageContainer>
  );
};

export default ChangePassword;
