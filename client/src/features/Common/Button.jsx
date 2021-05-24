import React, { memo } from 'react';
import * as S from './elements';

const Button = (props) => {
  const { onClick, text, disabled } = props;

  return (
    <S.Button disabled={disabled} onClick={onClick}>
      {text}
    </S.Button>
  );
};

export default memo(Button);
