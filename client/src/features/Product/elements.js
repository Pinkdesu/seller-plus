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

export const ProductShadow = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(33, 33, 33, 0.5);
  left: 0;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 1;
`;

export const ShadowText = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.white};
  letter-spacing: 0.3rem;
  line-height: 1.2;
  font-size: 1.6rem;
  font-weight: 700;
  right: 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
