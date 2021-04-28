import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  padding: 60px 20px 0 20px;
  z-index: 999;
  max-width: 320px;
  background-color: #2f4c78;
  transition: all 0.35s ease-in-out;
  width: ${(props) => (props.open ? '70%' : 0)};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transform: translateX(${(props) => (props.open ? 0 : '100%')});
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
  right: 15px;
  z-index: 1000;
  cursor: pointer;
`;

const lineStyle = css`
  width: 100%;
  height: 3px;
  border-radius: 10px;
  transition: all 0.35s ease-in-out;
`;

export const MenuHamburger = styled.span`
  ${lineStyle}
  background-color: ${(props) => (props.open ? 'transparent' : '#ffffff')};

  &::before,
  &::after {
    ${lineStyle}
    content: '';
    position: absolute;
    background-color: #ffffff;
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
  margin-bottom: 40px;

  & a {
    display: inline-block;
    text-decoration: none;
    font-size: 0;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  flex-flow: column nowrap;
`;

export const Link = styled(NavLink)`
  width: 100%;
  padding: 20px 0;
  font-size: 20px;
  text-align: left;
  color: #ffffff99;
  color: #ffffff99;
  border-style: solid;
  border-color: #ffffff99;
  border-width: 0 0 1px 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.35s ease-in-out;

  &.active {
    color: #ffffff;
  }

  &:last-child {
    border: none;
  }
`;
