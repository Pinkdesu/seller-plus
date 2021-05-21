import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductPage } from '~/features/ProductPage/elements';
import {
  ProductsList,
  ProductContent,
  DeleteButton,
  ProductPrice,
  ProductName,
} from '~/features/Header/elements';

const headerStyle = css`
  display: inline-block;
  margin: 0;
  font-size: 1.15em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  line-height: 22px;
`;

export const BasketMain = styled(ProductPage)`
  margin: 0;
  background-color: ${({ theme }) => theme.gray1};
`;

export const BasketContentWrapper = styled.div`
  max-width: 960px;
  min-width: 500px;
  padding: 140px 10px 10px 10px;
  margin: 0 auto;
`;

export const Layout = styled.div`
  position: relative;
`;

export const BasketContent = styled.div`
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

export const ContentHeader = styled.div`
  padding: 24px 30px;
  background-color: ${({ theme }) => theme.white};

  h2 {
    ${headerStyle}
  }
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

export const MoneySum = styled(ContentHeader)`
  text-align: right;

  h3 {
    ${headerStyle}
    font-size: 1em;
    letter-spacing: 2px;
    line-height: 1.375em;
  }
`;

export const LeftSideWrapper = styled(BasketContent)`
  top: 0;
  max-width: 370px;
  padding-left: 10px;
  transform: translate3d(0, 0, 0);
  width: 40%;
`;

export const LeftSide = styled.div`
  background-color: ${({ theme }) => theme.white};
`;

export const LeftSideTotal = styled.div`
  padding: 24px 30px 16px 30px;
`;

export const Totalheader = styled.h2`
  border-bottom: 1px solid ${({ theme }) => theme.gray1};
  padding-bottom: 24px;
  margin-bottom: 14px;
  width: 100%;
  ${headerStyle}
`;

export const Cost = styled.p`
  margin: 15px 0;

  & span {
    font-weight: 700;
    letter-spacing: 2px;

    &:last-child {
      float: right;
      font-weight: 400;
    }
  }
`;

export const PayLinkWrapper = styled.div`
  margin-top: 25px;
`;

export const PayLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  letter-spacing: 1.9px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue3};
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: block;
  font-size: 1em;
  line-height: 1.2em;
  padding: 1.0714285714em;
  text-align: center;
  text-transform: uppercase;
`;
