import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import Main from '../../routes/Main';
import TrackImage from '../../routes/TrackImage';
import TrackVideo from '../../routes/TrackVideo';

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        <Route path={"/"} exact={true} component={Main} />
        <Route path={"/track-video"} component={TrackVideo} />
        <Route path={"/track-image"} component={TrackImage} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppPresenter;
