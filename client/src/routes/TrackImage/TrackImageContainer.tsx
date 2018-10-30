import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import 'tracking';
import 'tracking/build/data/face';
import TrackImagePresenter from './TrackImagePresenter';

interface IProps extends RouteComponentProps<any> {}

class TrackImageContainer extends Component<IProps> {
  private tracker: any = null;
  private image: React.RefObject<HTMLImageElement>;
  private canvasElements: any;

  constructor(props: IProps) {
    super(props);
    this.state = {
      canvasElements: ''
    };

    this.image = React.createRef();
    this.handleImageLoaded.bind(this);
  }

  public componentDidMount() {
    this.plot();
  }
  public handleImageLoaded: React.ReactEventHandler = () => {
    this.tracker = new (window as any).tracking.ObjectTracker('face');
    this.tracker.setStepSize(1.7);

    const img = this.image.current;

    (window as any).tracking.track(img, this.tracker);

    this.trackFaceImage();
  };

  public plot = () => {
    const img = this.image.current;

    (window as any).plot = (x, y, w, h) => {
      const rect = React.createElement('div', {
        className: 'rect',
        key: x,
        style: {
          border: '2px solid #a64ceb',
          height: `${h}px`,
          left: `${(img as any).offsetLeft + x}px`,
          position: 'absolute',
          top: `${(img as any).offsetTop + y}px`,
          width: `${w}px`
        }
      });
      return rect;
    };

  };

  public trackFaceImage = () => {
    this.tracker.on('track', (event) => {
      const rectArray: HTMLDivElement[] = [];

      event.data.forEach((rect) => {
        const rectDiv: HTMLDivElement = (window as any).plot(rect.x, rect.y, rect.width, rect.height);
        rectArray.push(rectDiv);
      });

      this.canvasElements = rectArray;
      this.setState({ 'canvasElements': rectArray });
    });
  };

  public render() {
    return (
      <TrackImagePresenter
        image={this.image}
        canvasElements={this.canvasElements}
        afterLoadingImg={this.handleImageLoaded}
      />
    );
  }
}

export default TrackImageContainer;
