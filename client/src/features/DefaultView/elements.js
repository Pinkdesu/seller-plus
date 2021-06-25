import styled, { createGlobalStyle } from 'styled-components';

export const PageOverflow = createGlobalStyle`
`;

export const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.white};
`;

export const DefaultMain = styled.main`
  min-height: 100vh;
  padding-top: 150px;
  padding-bottom: 100px;

  * {
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 0.4px;
    color: ${({ theme }) => theme.black3};
    font-weight: 400;
  }
`;

export const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 900;
  transition: background-color 0.35s ease-in-out;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.black};
  opacity: ${(props) => (props.visible ? 0.5 : 0)};
`;
