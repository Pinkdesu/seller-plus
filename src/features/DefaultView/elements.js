import styled, { createGlobalStyle } from 'styled-components';

export const PageOverflow = createGlobalStyle`
  body {
   overflow-y: ${(props) => (props.scroll ? 'auto' : 'hidden')} !important;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  background-color: #ffffff;
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
  background-color: ${(props) => (props.visible ? '#00000099' : '#00000000')};
`;
