import styled from 'styled-components';
import { DefaultMain } from '~/features/DefaultView/elements';
import { FieldWrapper, Button } from '~/features/Common/elements';

export const ServicesMain = styled(DefaultMain)`
  background-color: ${({ theme }) => theme.gray1};
`;

export const Content = styled.div`
  max-width: 1318px;
  margin: 0 auto;
`;

export const ServiceWrapper = styled.article`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
`;

export const ServiceInfoWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 2 1 60%;
  background-color: ${({ theme }) => theme.white};
  padding: 40px;
`;

export const ServiceInfoName = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  font-weight: 700;
`;

export const ServiceDescriptionWrapper = styled.div`
  margin-top: 40px;
  padding-right: 20px;
`;

export const ServiceDescription = styled.p`
  line-height: 1.5rem;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  margin: 0;
`;

export const ServiceApplicationWrapper = styled.div`
  flex: 1 1 40%;
  background-color: ${({ theme }) => theme.white};
`;

export const ServiceApplication = styled.div`
  padding: 40px;
  text-align: center;
  min-width: 450px;
`;

export const ApplicationHeader = styled.span`
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: 0.05rem;
  font-weight: 700;
`;

export const ApplicationForm = styled.div`
  text-align: left;
  margin-top: 50px;
  padding: 0 40px;

  & ${FieldWrapper} {
    margin-bottom: 25px;
  }

  & ${Button} {
    margin-top: 25px;
  }
`;
