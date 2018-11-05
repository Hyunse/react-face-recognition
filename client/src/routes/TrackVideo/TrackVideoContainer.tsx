import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import 'tracking';
import 'tracking/build/data/face';
import TrackVideoPresenter from './TrackVideoPresenter';

interface IProps extends RouteComponentProps<any> {}

class TrackVideo extends Component<IProps> {
  private tracker: any = null;
  private cameraOutput: React.RefObject<HTMLInputElement>;
  private canvas: React.RefObject<HTMLInputElement>;

  constructor(props: IProps) {
    super(props);
    this.cameraOutput = React.createRef();
    this.canvas = React.createRef();
  }

  public handleClick: React.MouseEventHandler<HTMLButtonElement> = ({
    currentTarget: { name }
  }) => {
    const cameraOutput = this.cameraOutput.current;

    switch (name) {
      case 'face':
        this.tracker = new (window as any).tracking.ObjectTracker('face');
        this.tracker.setInitialScale(4);
        this.tracker.setStepSize(2);
        this.tracker.setEdgesDensity(0.1);

        (window as any).tracking.track(cameraOutput, this.tracker, {
          camera: true
        });

        this.tracker.on('track', (event) => {
          const canvas: any = this.canvas.current;
          const context = canvas.getContext('2d');
          context.clearRect(0, 0, canvas.width, canvas.height);

          event.data.forEach((rect) => {
            context.strokeStyle = '#a64ceb';
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = '#fff';
            context.fillText(
              'x: ' + rect.x + 'px',
              rect.x + rect.width + 5,
              rect.y + 11
            );
            context.fillText(
              'y: ' + rect.y + 'px',
              rect.x + rect.width + 5,
              rect.y + 22
            );
          });
        });
        break;
      case 'color':
        this.tracker = new (window as any).tracking.ColorTracker('magenta');

        (window as any).tracking.track(cameraOutput, this.tracker, {
          camera: true
        });

        this.tracker.on('track', (event) => {
          const canvas: any = this.canvas.current;
          const context = canvas.getContext('2d');
          context.clearRect(0, 0, canvas.width, canvas.height);

          event.data.forEach((rect) => {
            if (rect.color === 'custom') {
              rect.color = this.tracker.customColor;
            }
            
            context.strokeStyle = rect.color;
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = '#fff';
            context.fillText(
              'x: ' + rect.x + 'px',
              rect.x + rect.width + 5,
              rect.y + 11
            );
            context.fillText(
              'y: ' + rect.y + 'px',
              rect.x + rect.width + 5,
              rect.y + 22
            );
          });
        });
        break;
      case 'stop':
        this.tracker.removeAllListeners();
        // tackerTask.stop();
        break;
      default:
        break;
    }
  };

  public render() {
    return (
      <TrackVideoPresenter
        handleClick={this.handleClick}
        cameraOutput={this.cameraOutput}
        canvas={this.canvas}
      />
    );
  }
}

export default TrackVideo;
