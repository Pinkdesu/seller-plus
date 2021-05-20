import React from 'react';
import AppBootstrap from './features/AppBootstrapp';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/css/global.style';
import { THEME } from './assets/css/theme';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <AppBootstrap />
    </ThemeProvider>
  );
};

export default App;
