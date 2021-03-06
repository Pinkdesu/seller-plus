import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  ProductName,
  ImageWrapper,
  ProductCount,
  ProductContent,
  linkStyle,
} from '../elements';

const headerStyle = css`
  display: inline-block;
  margin: 0;
  font-size: 1.15em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  line-height: 22px;
`;

export const RightSideWrapper = styled.div`
  position: sticky;
  display: inline-block;
  vertical-align: top;
  width: 40%;
  top: 94px;
  max-width: 370px;
  padding-left: 10px;
  transform: translate3d(0, 0, 0);
`;

export const RightSide = styled.div`
  background-color: ${({ theme }) => theme.white};
`;

export const RightSideTotal = styled.div`
  padding: 24px 30px 16px 30px;
`;

export const TotalHeader = styled.h2`
  padding-bottom: 24px;
  margin-bottom: 14px;
  width: 100%;
  ${headerStyle}
`;

export const Footer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  margin: 25px 0;
`;

export const ItemTitle = styled.span`
  letter-spacing: 2px;
`;

export const ItemValue = styled.span`
  float: right;
  letter-spacing: 2px;
`;

export const Cost = styled.p`
  margin: 0;

  & ${ItemTitle} {
    font-weight: 700;
  }

  & ${ItemValue} {
    font-weight: 400;
  }
`;

export const CurrentPrice = styled(Cost)`
  & ${ItemTitle} {
    font-weight: 400;
  }
`;

export const DeliveryPrice = styled(CurrentPrice)``;

export const TotalPrice = styled(Cost)`
  & ${ItemTitle} {
    font-weight: 700;
    text-transform: uppercase;
  }

  & ${ItemValue} {
    font-weight: 700;
  }
`;

export const PayLinkWrapper = styled.div`
  margin-top: 25px;
`;

export const PayLink = styled(Link)`
  ${linkStyle}
`;

export const ProductList = styled.ul`
  padding: 0 10px;
  max-height: 420px;
  overflow-y: auto;

  & ${ProductContent} {
    border: none;
    margin: 0;

    & ${ImageWrapper} {
      width: 85px;
      height: 110px;
    }

    & ${ProductName} {
      font-weight: 400;
    }

    & ${ProductCount} {
      font-weight: 700;
    }
  }
`;
