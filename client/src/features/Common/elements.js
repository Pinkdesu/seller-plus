import styled, { css } from 'styled-components';
import { spinner } from '~/assets/style/animation';
import { Link } from 'react-router-dom';

const textStyle = css`
  font-size: 14px;
  line-height: 1.5;
`;

const headerStyle = css`
  display: inline-block;
  margin: 0;
  font-size: 1.15em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  line-height: 22px;
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
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  border: 1px solid
    ${({ theme, isError }) => (!isError ? theme.gray4 : theme.red1)};
`;

export const Input = styled.input`
  padding: 12px 10px;
  font-weight: 400;
  letter-spacing: 0.4px;
  width: 100%;
  outline: 0;
  ${textStyle}
`;

export const Hidden = styled.span`
  display: flex;
  align-items: center;
  padding-right: 16px;
`;

export const HiddenButton = styled.button`
  display: block;
  background: none;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 700;
  height: 100%;
  letter-spacing: 0.15rem;
  padding: 0;
  text-transform: uppercase;
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

export const ProductContent = styled.div`
  position: relative;
  border-top: none;
  margin: 0 1em;
  padding: 1em 0;
`;

export const ProductItem = styled.li`
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: translateY(0);
  transition: transform 0.2s, height 0.2s;
  transition-delay: 2.3s;

  & ${ProductContent} {
    border-top: 1px solid ${({ theme }) => theme.gray1};
  }

  &:first-child ${ProductContent} {
    border-top: none;
  }
`;

export const ProductLink = styled(Link)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  flex-direction: row;
  line-height: 2.14;
  color: ${({ theme }) => theme.black2};
  font-size: 0.875rem;
  letter-spacing: 0.4px;
`;

export const ProductImage = styled.img`
  margin-right: 1em;
  width: 109px;
  align-self: flex-start;
  flex-shrink: 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1.2em;
  width: 100%;
`;

export const ProductPrice = styled.dd`
  width: 100%;
  margin: 0;
  font-weight: 900;
  line-height: 20px;
  margin-bottom: 3px;
  text-align: left;
`;

export const ProductName = styled(ProductPrice)`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.25em;
  color: ${({ theme }) => theme.black2};
`;

export const ProductCount = styled(ProductName)``;

export const DeleteButton = styled.button`
  position: absolute;
  right: -0.5rem;
  border: none;
  bottom: 1em;
  background: none;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
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

export const SideLine = styled.hr`
  background-color: ${({ theme }) => theme.gray1};
  border: none;
  height: 1px;
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

export const ProductList = styled.ul`
  padding: 0 10px;
  max-height: 280px;

  & ${ProductContent} {
    border: none;
    margin: 0;

    & ${ProductImage} {
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
