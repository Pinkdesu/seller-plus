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
  background-color: #c7cee1;
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
  padding: 8px 60px;
  width: 100%;
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
    flex-flow: row nowrap;
    margin-top: 0;
    margin-left: 40px;
  }
`;

export const IconLink = styled(Link)`
  position: relative;
  padding: 0 10px;
  cursor: pointer;
  margin-right: 15px;
  font-size: 0;

  &:last-child {
    margin-right: 0;
  }

  .icon {
    font-size: 0;

    svg {
      width: 26px;
      height: 26px;
      fill: #ffffffd9;

      &:hover {
        fill: #ffffff;
      }
    }
  }

  .alert {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -10px;
    right: -2px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 50%;
    color: #2f4c78;
    background-color: #ffffff;
  }
`;

export const ActiveLink = styled(NavLink)`
  width: 100%;
  padding: 20px 0;
  font-size: 20px;
  text-align: left;
  color: #ffffff99;
  border-style: solid;
  border-color: #ffffff99;
  border-width: 0 0 1px 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 200ms ease-in-out;
  white-space: nowrap;

  &.active {
    color: #ffffff;
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
