import React, { memo, useMemo, useState } from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from './elements';

const Password = (props) => {
  const locale = useLocale();

  const { value, onChange, label, error, ...otherProps } = props;

  const [hidden, setHidden] = useState(true);

  const toggleVisible = () => {
    setHidden(!hidden);
  };

  const buttonText = useMemo(() => locale(hidden ? 'open' : 'hide'), [
    hidden,
    locale,
  ]);

  return (
    <S.FieldWrapper>
      <S.FieldLabel>{label}:</S.FieldLabel>
      <S.InputWrapper isError={error}>
        <S.Input
          type={hidden ? 'password' : 'text'}
          value={value}
          onChange={onChange}
          {...otherProps}
        />
        {Boolean(value.length) && (
          <S.Hidden>
            <S.HiddenButton onClick={toggleVisible} tabIndex="-1">
              {buttonText}
            </S.HiddenButton>
          </S.Hidden>
        )}
      </S.InputWrapper>
    </S.FieldWrapper>
  );
};

export default memo(Password);
