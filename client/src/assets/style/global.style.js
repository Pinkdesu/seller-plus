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
  }

  input, button, textarea {
   font-family: inherit;
   outline: none;
   border: none;
  }

  li, ul {
    list-style: none;
    padding: 0;
  }

  button {
   cursor: pointer;
  }
`;
