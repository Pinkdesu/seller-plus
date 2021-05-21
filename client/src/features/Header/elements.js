import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const headerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const menuStyle = css`
  background-color: #2f4c78;
  transition: all 0.35s ease-in-out;
`;

const lineStyle = css`
  width: 100%;
  height: 3px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue1};
  transition: all 0.35s ease-in-out;
`;

export const Header = styled.header`
  ${(props) => props.open && headerStyle}
`;

export const LeftSideMenu = styled.div`
  ${headerStyle}
  ${menuStyle}
  width: 70%;
  max-width: 350px;
  height: 100vh;
  padding: 60px 20px 0 20px;
  transform: translateX(${(props) => (props.open ? 0 : '-100%')});
`;

export const TopSideMenu = styled.div`
  ${headerStyle}
  ${menuStyle}
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  width: 100%;
  height: 74px;
  transform: translateY(${(props) => (props.hidden ? '-100%' : 0)});

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const MenuButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 25px;
  position: fixed;
  top: 20px;
  left: 15px;
  z-index: 1000;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    left: 10px;
  }

  @media screen and (min-width: 992px) {
    position: absolute;
  }
`;

export const MenuHamburger = styled.span`
  ${lineStyle}
  ${(props) =>
    props.open &&
    css`
      background-color: transparent;
    `};

  &::before,
  &::after {
    ${lineStyle}
    content: '';
    position: absolute;
    left: 0;
  }

  &::before {
    top: 0;

    ${(props) =>
      props.open &&
      css`
        transform: translateY(-50%) rotate(45deg);
        top: 50%;
      `}
  }

  &::after {
    bottom: 0;

    ${(props) =>
      props.open &&
      css`
        transform: translateY(50%) rotate(-45deg);
        bottom: 50%;
      `}
  }
`;

export const LogoBar = styled.div`
  text-align: center;
  flex-basis: 180px;

  a {
    display: inline-block;
    text-decoration: none;
    font-size: 0;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 40px;

  ${TopSideMenu} & {
    margin-top: 0;
    flex-flow: row nowrap;
    flex-basis: 180px;
    justify-content: flex-end;
    align-items: center;
    height: 100%;

    &:last-child {
      gap: 10px;
    }
  }
`;

export const IconLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

export const IconButton = styled.button`
  background: none;
  padding: 0;
`;

export const NavItem = styled.div`
  position: relative;
  height: 100%;
  width: 58px;

  & ${IconLink}, ${IconButton} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
  }
`;

export const LinkIcon = styled.span`
  font-size: 0;

  svg {
    width: 26px;
    height: 26px;
    fill: ${({ theme }) => theme.white1};

    &:hover {
      fill: ${({ theme }) => theme.white};
    }
  }
`;

export const LinkAlert = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 12px;
  right: 2px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50%;
  color: ${({ theme }) => theme.blue4};
  background-color: ${({ theme }) => theme.white};
`;

const menuTransitionConfig = css`
  transition-duration: 0.4s;
  transition-delay: 0.1s;
`;

export const CartMenuWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 64px;
  left: -270px;
  width: 325px;
  max-height: ${(props) => (props.open ? '100vh' : 0)};
  transition-property: max-height;
  ${menuTransitionConfig}

  &::before {
    content: '';
    left: 285px;
    opacity: ${(props) => (props.open ? 1 : 0)};
    width: 0;
    position: absolute;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    border-bottom: 11px solid #eee;
    top: 0;
    right: 0;
    transition-property: opacity;
    ${menuTransitionConfig}
  }
`;

export const CartMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  left: 0;
  right: 0;
  top: 10px;

  * {
    font-size: 14px;
    color: ${({ theme }) => theme.black3};
  }
`;

export const CartMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 255px;
  max-height: calc(100vh - 200px);
  box-shadow: -2px 2px 4px 0 rgb(45 45 45 / 14%);
  transform: ${(props) =>
    props.open ? 'translateY(0)' : 'translateY(calc(-100% - 5px))'};
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.gray2};
  transition-property: transform;
  ${menuTransitionConfig}
`;

export const MenuTopSide = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.gray1};
  height: 50px;
  width: 100%;
`;

export const TopSideText = styled.div`
  font-size: 16px;
  flex-direction: column;
  align-self: center;
  padding-left: 1em;

  & > span:first-child {
    font-weight: 900;
    margin-right: 1ex;
  }
`;

export const TopSideCloseButton = styled.button`
  background-color: transparent;
  font-size: 0;
  line-height: 0;

  & > span {
    font-size: 1.25rem;
    cursor: pointer;
    margin: 0 5px;
    padding: 0 6px;

    svg {
      fill: ${({ theme }) => theme.black3};
      width: 1em;
      height: 1em;
    }
  }
`;

export const ProductsList = styled.ul`
  background-color: ${({ theme }) => theme.white};
  overflow: auto;
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

  & > img {
    margin-right: 1em;
    width: 109px;
    align-self: flex-start;
    flex-shrink: 0;
  }
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

export const MenuBottomSide = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.gray1};
  font-size: 1rem;
  width: 100%;
`;

export const MoneySum = styled.div`
  background-color: ${({ theme }) => theme.gray3};
  box-shadow: 0 -2px 3px 0 hsl(0deg 0% 60% / 20%);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  width: 100%;
  height: 50px;

  h1 {
    margin: 0;
    font-size: 1rem;
  }
`;

export const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0;
  font-size: 0.875rem;
  border: 2px solid ${({ theme }) => theme.gray2};
  box-sizing: border-box;
  height: 44px;
  letter-spacing: 0.8px;
  line-height: 17px;
  padding: 3px 12px;
  background-color: ${({ theme }) => theme.blue3};
  text-transform: uppercase;
  font-weight: 900;
  text-decoration: none;

  span {
    width: 100%;
    color: ${({ theme }) => theme.white};
  }

  &:first-child {
    background-color: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme.gray2};

    span {
      color: ${({ theme }) => theme.black3};
    }
  }
`;

export const ActionLinks = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  gap: 10px;
  color: ${({ theme }) => theme.black3};
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-top: 1px solid ${({ theme }) => theme.gray2};
  height: 70px;
`;

export const ActiveLink = styled(NavLink)`
  width: 100%;
  padding: 20px 0;
  font-size: 20px;
  text-align: left;
  color: ${({ theme }) => theme.white1};
  border-style: solid;
  border-color: ${({ theme }) => theme.white1};
  border-width: 0 0 1px 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 200ms ease-in-out;
  white-space: nowrap;

  &.active {
    color: ${({ theme }) => theme.white};
  }

  &:last-child {
    border: none;
  }

  ${TopSideMenu} & {
    padding: 0 20px;
    text-align: center;
    border-width: 0 1px 0 0;
  }
`;
