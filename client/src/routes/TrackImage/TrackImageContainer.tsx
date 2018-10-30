import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import 'tracking';
import 'tracking/build/data/face';
import TrackImagePresenter from './TrackImagePresenter';

interface IProps extends RouteComponentProps<any> {}

class TrackImageContainer extends Component<IProps> {
  private tracker: any = null;
  private image: React.RefObject<HTMLImageElement>;
  private rect: any;

  constructor(props: IProps) {
    super(props);
    this.state = {
      rect: ''
    };

    this.image = React.createRef();
    this.handleImageLoaded.bind(this);
  }

  public handleImageLoaded: React.ReactEventHandler<HTMLImageElement> = () => {
    this.tracker = new (window as any).tracking.ObjectTracker('face');
    this.tracker.setStepSize(1.7);

    const img = this.image.current;

    (window as any).tracking.track(img, this.tracker);
    this.tracker.on('track', (event) => {
      event.data.forEach((rect) => {
        (window as any).plot(rect.x, rect.y, rect.width, rect.height);
      });
    });

    (window as any).plot = (x, y, w, h) => {
      const rect = React.createElement('div', {
        className: 'rect',
        style: {
          border: '2px solid #a64ceb',
          height: `${h}px`,
          left: `${(img as any).offsetLeft + x}px`,
          position: 'absolute',
          top: `${(img as any).offsetTop + y}px`,
          width: `${w}px`
        }
      });
      this.rect = rect;
      this.setState({ 'rect': rect });
    };
  };

  public render() {
    return (
      <TrackImagePresenter
        image={this.image}
        rect={this.rect}
        afterLoadingImg={this.handleImageLoaded}
      />
    );
  }
}

export default TrackImageContainer;
