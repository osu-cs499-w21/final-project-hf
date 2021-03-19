import React from 'react';
import { AppProps } from 'next/app';
import { wrapWithProvider } from 'src/redux/store';
import { GlobalStyle, defaultTheme } from 'src/global';
import { ThemeProvider } from 'styled-components';
import 'tailwindcss/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return wrapWithProvider(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>,
    pageProps.initialReduxState
  );
};

export default App;
