import styled from 'styled-components';
import { Button, FieldWrapper } from '~/features/Common/elements';

export const Text = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
`;

export const AddressPanel = styled.div``;

export const CurrentAddress = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;
`;

export const ButtonWrapper = styled.div`
  flex: 0 0 40%;
  text-align: right;

  & ${Button} {
    width: auto;
    height: 30px;
    padding: 5px 10px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.gray2};
    color: ${({ theme }) => theme.black3};
  }
`;

export const AddressValue = styled.div`
  flex: 0 1 60%;

  & ${Text}, ${FieldWrapper} {
    margin-top: 10px;
  }

  & ${Button} {
    margin-top: 20px;
  }
`;

export const EditAddressForm = styled.div``;
