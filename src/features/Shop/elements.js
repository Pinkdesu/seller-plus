import styled, { css } from 'styled-components';
import { MenuButton } from '~/features/Header/elements';
import { Link } from 'react-router-dom';

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
`;

export const SearchBar = styled.div`
  display: flex;
  padding: 6px 6px 6px 20px;
  background-color: #4a6ba0;
  border-radius: 4px;
  flex-flow: row nowrap;
  height: 52px;
  align-items: center;
  width: 100%;
`;

export const SearchField = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px 0 0 4px;
  font-size: 18px;
  height: 100%;
`;

export const SearchButton = styled.button`
  text-align: center;
  background: none;
  padding: 8px 14px 8px 18px;
  font-size: 0;
  height: 100%;

  svg {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    fill: #ffffff;
  }
`;

export const ClearButton = styled(SearchButton)`
  background-color: #ffffff;
  border-radius: 0 4px 4px 0;
  padding-right: 15px;

  svg {
    width: 15px;
    height: 15px;
    fill: #000000;
  }
`;

export const MobileSearchBar = styled.div`
  display: flex;
  width: 100%;
  background-color: #4a6ba0;
  padding: 10px;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const MobileSearchButton = styled(MenuButton)`
  position: relative;
  left: 0;
  top: 0;
`;

export const MobileBackArrow = styled(MenuButton)`
  position: static;

  svg {
    width: inherit;
    height: inherit;
    fill: #ffffff;
  }
`;

export const MobileTitle = styled.span`
  font-weight: 700;
  font-size: 22px;
  color: #ffffff;
  padding-left: 10px;
  margin: 0 10px;
`;

export const Categories = styled.section`
  ${rowContent}
`;

export const Category = styled.article`
  background-color: #fbc02d;
  height: 40vh;
  width: 50%;

  & span {
    color: #ffffff;
  }

  &:nth-child(even) {
    background-color: #b3e5fc;

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
  max-width: 180px;
  height: auto;
`;

export const CategoryName = styled.span`
  font-size: 1.8em;
`;

export const PopularProducts = styled.section``;

export const HeaderWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Header = styled.h1`
  margin: 0;
  color: #00000099;
  font-size: 2em;
`;

export const Products = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  overflow-x: scroll;
  padding-bottom: 20px;

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

export const Product = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  flex: 0 0 160px;
  height: 230px;
`;

export const ProductImageThumb = styled.img`
  width: 100%;
  height: 70%;
  margin-bottom: 10px;
`;

export const ProductName = styled.span`
  text-align: center;
  font-size: 14px;

  & > u {
    border-bottom: 1px solid #b5c1dc;
    text-decoration: none;
  }
`;

export const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #00000099;
`;
