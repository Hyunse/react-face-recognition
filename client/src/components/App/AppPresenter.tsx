import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import Main from '../../routes/Main';
import TrackVideo from '../../routes/TrackVideo';

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        <Route path={"/"} exact={true} component={Main} />
        <Route path={"/track-video"} component={TrackVideo} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppPresenter;
