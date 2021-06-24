import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { DefaultMain } from '~/features/DefaultView/elements';

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
  z-index: 800;
`;

export const LoaderSpinner = styled.div`
  position: relative;
  top: 50%;
  margin: -25px auto 0;
  width: 50px;
  height: 50px;
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

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
`;

export const Division = styled.hr`
  background-color: ${({ theme }) => theme.gray1};
  border: none;
  height: 1px;
  width: 100%;
`;

export const EmptyMain = styled(DefaultMain)`
  padding: 0;
`;

export const EmptyContentWrapper = styled.div`
  max-width: 960px;
  min-width: 500px;
  padding: 140px 10px 10px 10px;
  margin: 0 auto;
  display: flex;
  padding-top: 0;
  justify-content: center;
  align-items: center;
  min-height: inherit;
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

export const EmptyLink = styled(Link)`
  width: 288px;
  margin: 0 auto;
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
