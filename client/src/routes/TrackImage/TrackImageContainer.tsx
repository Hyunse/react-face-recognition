import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TrackImagePresenter from './TrackImagePresenter';

interface IProps extends RouteComponentProps<any> {}

class TrackImageContainer extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <TrackImagePresenter />
    );
  }
}

export default TrackImageContainer;