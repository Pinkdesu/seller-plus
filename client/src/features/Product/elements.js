import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Product = styled.article`
  position: relative;
  flex: 1 0 calc((100% / 4) - 20px);
`;

export const CartButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 50%;
  text-align: center;
  border: none;
  background-color: #eeeeee;
  padding: 8px;

  svg {
    fill: #2d2d2d;
    height: 20px;
    width: 20px;
  }
`;

export const ProductLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

export const ProductImageThumb = styled.div`
  position: relative;
  font-size: 0;
  margin-bottom: 9px;
  background-color: #eee;
  display: block;

  &::before {
    content: '';
    display: block;
    width: 100%;
    position: relative;
    padding-top: 100%;
  }
`;

export const ProductImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
`;

export const ProductNameBlock = styled.div`
  display: block;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #2d2d2d;
  width: 100%;
  height: 44px;
  margin-bottom: 12px;
  line-height: 22px;
  word-wrap: break-word;
  overflow: hidden;
`;

export const ProductName = styled.p`
  margin: 0;
`;

export const ProductPrice = styled.p`
  height: 60px;
  margin: 0;

  span {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.8px;
    line-height: 20px;
    color: #666;
    white-space: nowrap;
  }
`;
