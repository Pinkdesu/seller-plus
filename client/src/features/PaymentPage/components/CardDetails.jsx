import React from 'react';
import * as S from '../elements';
import TextField from '~/features/Common/TextField';

const CardDetails = () => {
  return (
    <S.CardDetails>
      <S.CardForm>
        <TextField value="" label="Номер  карты" onChange={() => {}} />
        <TextField value="" label="Имя владельца" onChange={() => {}} />
        <S.CardRow>
          <TextField value="" label="Срок действия" onChange={() => {}} />
          <TextField value="" label="CVV" onChange={() => {}} />
        </S.CardRow>
      </S.CardForm>
    </S.CardDetails>
  );
};

export default CardDetails;
