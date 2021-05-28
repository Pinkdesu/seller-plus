import React, { memo } from 'react';
import * as S from './elements';

const TextField = (props) => {
  const { type = 'text', value, onChange, label, error, ...otherProps } = props;

  return (
    <S.FieldWrapper>
      <S.FieldLabel>{`${label}:`}</S.FieldLabel>
      <S.InputWrapper>
        <S.Input
          type={type}
          value={value}
          isError={error}
          onChange={onChange}
          {...otherProps}
        />
      </S.InputWrapper>
    </S.FieldWrapper>
  );
};

export default memo(TextField);
