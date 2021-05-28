import styled, { css } from 'styled-components';
import { spinner } from '~/assets/style/animation';

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
  border: 1px solid
    ${({ theme, isError }) => (!isError ? theme.gray4 : theme.red1)};
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
    cursor: default;
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.white};
`;

export const LoaderSpinner = styled.div`
  position: relative;
  top: 50%;
  margin: -25px auto 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.gray3} 10%,
    ${({ theme }) => theme.gray4} 50%
  );
  animation: ${spinner} 1.5s infinite linear;
  transform: translateZ(0);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.white};
  }

  &::before {
    width: 25px;
    height: 25px;
    border-radius: 100% 0 0 0;
  }

  &::after {
    bottom: 0;
    right: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
