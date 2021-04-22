import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
   box-sizing: border-box;
  }
 
  html {
   font-family: sans-serif;
   -ms-text-size-adjust: 100%;
   -webkit-text-size-adjust: 100%;
  }

  body {
   font-family: 'Roboto', sans-serif;
   margin: 0;
   padding: 0;
   max-width: 100%;
   overflow-x: hidden !important;
  }

  input, button, textarea {
   font-family: inherit;
  }

  button {
   cursor: pointer;
  }
`;
