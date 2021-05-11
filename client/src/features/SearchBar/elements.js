import styled from 'styled-components';
import { MenuButton } from '~/features/Header/elements';

export const SearchBarWrapper = styled.div``;

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

  @media screen and (min-width: 1024px) {
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
