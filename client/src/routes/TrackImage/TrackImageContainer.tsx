import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import 'tracking';
import 'tracking/build/data/face';
import TrackImagePresenter from './TrackImagePresenter';

interface IProps extends RouteComponentProps<any> {}

class TrackImageContainer extends Component<IProps> {
  private tracker: any = null;
  private image: React.RefObject<HTMLImageElement>;
  private imageContainer: React.RefObject<HTMLDivElement>;
  private rect: any;

  constructor(props: IProps) {
    super(props);
    this.state = {
      'rect': ''
    };

    this.image = React.createRef();
    this.imageContainer = React.createRef();
  }

  public componentDidMount() {
    this.tracker = new (window as any).tracking.ObjectTracker('face');
    this.tracker.setStepSize(1.7);

    const img = this.image.current;
    // tslint:disable-next-line
    console.log('img', img);

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
          // left: `${x}px`,
          // top: `${y}px`,
          top: `${(img as any).offsetTop + y}px`,
          width: `${w}px`
        }
      });
      const container = this.imageContainer.current;
      // tslint:disable-next-line
      console.log('rect', rect);
      // tslint:disable-next-line
      console.log('container', container);

      this.rect = rect;
      this.setState({ 'rect': rect });

      // document.querySelector('.demo-container').appendChild(rect);
      //   rect.classList.add('rect');
      //   rect.style.width = w + 'px';
      //   rect.style.height = h + 'px';
      //   rect.style.left = img.offsetLeft + x + 'px';
      //   rect.style.top = img.offsetTop + y + 'px';
      // };
    };
  }

  public render() {
    return (
      <TrackImagePresenter
        image={this.image}
        container={this.imageContainer}
        rect={this.rect}
      />
    );
  }
}

export default TrackImageContainer;
