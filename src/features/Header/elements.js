import styled, { css } from 'styled-components';

export const Header = styled.header``;

export const MenuButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 25px;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 11;
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
