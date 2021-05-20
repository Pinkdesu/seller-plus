import React from 'react';
import AppBootstrap from './features/AppBootstrapp';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/style/global.style';
import { THEME } from './assets/style/theme';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <AppBootstrap />
    </ThemeProvider>
  );
};

export default App;
