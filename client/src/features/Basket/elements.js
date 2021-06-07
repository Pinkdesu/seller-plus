import styled, { css } from 'styled-components';
import { ProductPage } from '~/features/ProductPage/elements';
import { ProductsList } from '~/features/Header/elements';
import {
  ProductContent,
  DeleteButton,
  ProductPrice,
  ProductName,
} from '~/features/Common/elements';
import { PayLink } from '~/features/Common/RightSide/elements';

const headerStyle = css`
  display: inline-block;
  margin: 0;
  font-size: 1.15em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  line-height: 22px;
`;

export const PageMain = styled(ProductPage)`
  min-height: 100vh;
  margin: 0;
  background-color: ${({ theme, isEmpty }) =>
    isEmpty ? theme.white : theme.gray1};
`;

export const PageContentWrapper = styled.div`
  max-width: 960px;
  min-width: 500px;
  padding: 140px 10px 10px 10px;
  margin: 0 auto;

  ${(props) =>
    props.isEmpty &&
    css`
      display: flex;
      padding-top: 0;
      justify-content: center;
      align-items: center;
      min-height: inherit;
    `}
`;

export const Layout = styled.div`
  position: relative;
`;

export const PageContent = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 60%;
  position: relative;
`;

export const ContentHolders = styled.div`
  display: inline-block;
  padding: 0;
  vertical-align: top;
  width: 100%;

  & > * {
    margin-bottom: 8px;
  }
`;

export const LeftSideBlockWrapper = styled.div`
  padding: 24px 30px;
  background-color: ${({ theme }) => theme.white};
`;

export const ContentHeader = styled.h2`
  ${headerStyle}
`;

export const BasketProducts = styled(ProductsList)`
  background-color: ${({ theme }) => theme.white};
  margin-top: 0;

  & ${ProductContent} {
    padding: 20px 0;
    margin: 0 30px;
  }

  & ${DeleteButton} {
    bottom: 20px;
  }

  & ${ProductPrice} {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.1;
    letter-spacing: 1.7px;
    color: ${({ theme }) => theme.black3};
    margin-bottom: 10px;
  }

  & ${ProductName} {
    letter-spacing: 0.3px;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const MoneySum = styled(LeftSideBlockWrapper)`
  text-align: right;
`;

export const MoneyHeader = styled(ContentHeader)`
  font-size: 1em;
  letter-spacing: 2px;
  line-height: 1.375em;
`;

export const EmptyContent = styled.div`
  max-width: 394px;
  padding: 20px 25px;
  width: 100%;
  color: ${({ theme }) => theme.black3};
  text-align: center;
`;

export const EmptyBagTitleWrapper = styled.div`
  text-align: center;
`;

export const EmptyBagTitle = styled.h2`
  font-weight: 700;
  font-size: 1.3em;
  line-height: 22px;
  letter-spacing: 2.5px;
  padding-top: 24px;
  margin: 0;
`;

export const EmptyBagIcon = styled.span`
  font-size: 0;

  svg {
    fill: ${({ theme }) => theme.gray2};
    height: 60px;
    width: 60px;
  }
`;

export const EmptyBagText = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-top: 1em;
  margin-bottom: 1em;
  letter-spacing: 0.4px;
`;

export const AuthLink = styled(PayLink)`
  width: 288px;
  margin: 0 auto;
`;
