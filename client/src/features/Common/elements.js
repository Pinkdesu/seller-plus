import styled, { css } from 'styled-components';

const textStyle = css`
  font-size: 14px;
  line-height: 1.5;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

export const FieldLabel = styled.label`
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.gray4};
  letter-spacing: 2px;
  margin: 0 3% 11px 0;
  min-width: 20%;
  ${textStyle}
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  padding: 12px 10px;
  font-weight: 400;
  letter-spacing: 0.4px;
  width: 100%;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.gray4};
  ${textStyle}
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 2px;
  background: ${({ theme }) => theme.blue3};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;

  &:disabled {
    background: ${({ theme }) => theme.blue1};
  }
`;
