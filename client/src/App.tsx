import React from 'react';
import GlobalStyle from './global-styles';
import theme from './theme';
import { ThemeProvider } from './typed-components';
import Main from './views/Main';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Main />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
