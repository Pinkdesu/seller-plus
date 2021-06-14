import React, { useEffect } from 'react';
import AppBootstrap from './features/AppBootstrap';
import { useLocation } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/style/global.style';
import { THEME } from './assets/style/theme';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <AppBootstrap />
    </ThemeProvider>
  );
};

export default App;
