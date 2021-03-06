import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Product, ProductInfoBlock } from '~/features/Product/elements';
import { Loader } from '~/features/Common/elements';

const rowContent = css`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;
`;

export const Main = styled.main`
  margin-top: 120px;
  padding: 0 20%;

  & > section {
    margin-top: 60px;

    &:last-child {
      margin-bottom: 100px;
    }
  }

  @media screen and (max-width: 1366px) {
    padding: 0 10%;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 5%;
  }
`;

export const Categories = styled.section`
  ${rowContent}
`;

export const Category = styled.article`
  position: relative;
  background-color: #fbc02d;
  height: 40vh;
  width: 50%;

  & ${Loader} {
    background-color: #fbc02d;
  }

  & span {
    color: #ffffff;
  }

  &:nth-child(even) {
    background-color: #b3e5fc;

    & ${Loader} {
      background-color: #b3e5fc;
    }

    & span {
      color: #00000099;
    }
  }
`;

export const CategoryContent = styled(Link)`
  ${rowContent}
  text-decoration: none;
  padding: 10px;
  height: 100%;

  & > div {
    text-align: center;
    width: 50%;
  }
`;

export const CategoryImage = styled.img`
  max-width: 170px;
  height: auto;

  @media screen and (max-width: 1366px) {
    max-width: 150px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 140px;
  }
`;

export const CategoryName = styled.span`
  font-size: 1.8em;
  overflow-wrap: break-word;
`;

export const PopularProducts = styled.section``;

export const HeaderWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Header = styled.h1`
  margin: 0;
  color: #00000099;
  font-size: 2em;
  word-break: break-all;
`;

export const Products = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 20px;

  & > ${Product} {
    flex: 1 0 200px;

    & ${ProductInfoBlock} {
      text-align: center;
    }
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
    border-radius: 5px;
  }
`;
