import styled from 'styled-components';
import { BasketMain } from '~/features/Basket/elements';
import { Link } from 'react-router-dom';
import { FieldWrapper, Button } from '~/features/Common/elements';

export const LoginMain = styled(BasketMain)`
  padding: 140px 0;
`;

export const FormWrapper = styled.div`
  margin: 0 auto;
  max-width: 650px;
  background-color: ${({ theme }) => theme.white};
`;

export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 20px 15px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  flex: 1 0 50%;
  padding: 20px 0 17px;
  text-align: center;
  border-bottom: 2px solid
    ${({ theme, active }) => (active ? theme.blue7 : theme.gray5)};

  &:first-child {
    &::after {
      content: ' ';
      height: 25px;
      width: 2px;
      position: absolute;
      right: 0;
      top: 14px;
      background: ${({ theme }) => theme.black3};
      opacity: 0.1;
    }
  }
`;

export const OptionsLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.7;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.gray4};
`;

export const FormFields = styled.div`
  margin: 0 auto;
  padding: 50px 5%;
  width: 90%;

  & ${FieldWrapper} {
    padding: 0 18.5%;
    margin-bottom: 19px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 15px 0 15px;
  text-align: center;

  & ${Button} {
    width: 63%;
  }
`;

export const ForgotPasWrapper = styled.div`
  margin-top: 22px;
  text-align: center;
`;

export const ForgotLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.4px;
  text-decoration: none;
  color: ${({ theme }) => theme.black4};

  &:visited {
    color: ${({ theme }) => theme.black4};
  }

  &:hover {
    padding-bottom: 4px;
    border-bottom: 1px solid ${({ theme }) => theme.black3};
    opacity: 0.65;
  }
`;
