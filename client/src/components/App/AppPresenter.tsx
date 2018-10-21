import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import Main from '../../routes/Main';

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Main />
  </BrowserRouter>
);

export default AppPresenter;
