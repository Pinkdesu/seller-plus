import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ImageWrapper } from '~/features/Common/elements';

export const Product = styled.article`
  position: relative;
  flex: 0 0 calc((100% / 4) - 20px);
`;

export const CartButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 50%;
  text-align: center;
  border: none;
  background-color: ${({ theme }) => theme.gray1};
  padding: 8px;

  svg {
    fill: ${({ theme }) => theme.black3};
    height: 20px;
    width: 20px;
  }

  &:disabled svg {
    fill: ${({ theme }) => theme.gray4};
  }
`;

export const ProductLink = styled(Link)`
  display: block;
  text-decoration: none;

  & ${ImageWrapper} {
    padding-top: 100%;
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.white};
  }
`;

export const ProductInfoBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 6px;
  width: 100%;
  overflow: hidden;
`;

export const ProductBrand = styled.p`
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.8px;
  line-height: 20px;
  color: ${({ theme }) => theme.black2};
  margin: 0;
`;

export const ProductName = styled(ProductBrand)`
  word-wrap: break-word;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.black3};
`;

export const ProductPrice = styled(ProductBrand)`
  white-space: nowrap;
`;

export const ProductCount = styled(ProductName)`
  font-weight: 700;
`;
