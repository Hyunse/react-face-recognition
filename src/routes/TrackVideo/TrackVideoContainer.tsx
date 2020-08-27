import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
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
    currentTarget: { name },
  }) => {
    const cameraOutput = this.cameraOutput.current;
    const canvasCurrent: any = this.canvas.current;
    const contextCurrent = canvasCurrent.getContext('2d');
    switch (name) {
      case 'face':
        const img = new Image();
        img.src = `${require(`../../assets/img/funny.png`)}`;

        this.tracker = new (window as any).tracking.ObjectTracker('face');
        this.tracker.setInitialScale(4);
        this.tracker.setStepSize(2);
        this.tracker.setEdgesDensity(0.1);

        (window as any).tracking.track(cameraOutput, this.tracker, {
          camera: true,
        });

        this.tracker.on('track', (event) => {
          contextCurrent.clearRect(
            0,
            0,
            canvasCurrent.width,
            canvasCurrent.height
          );

          event.data.forEach((rect) => {
            contextCurrent.drawImage(
              img,
              rect.x,
              rect.y,
              rect.width,
              rect.height
            );
            // context.strokeStyle = '#a64ceb';
            // context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            // context.font = '11px Helvetica';
            // context.fillStyle = '#fff';
            // context.fillText(
            //   'x: ' + rect.x + 'px',
            //   rect.x + rect.width + 5,
            //   rect.y + 11
            // );
            // context.fillText(
            //   'y: ' + rect.y + 'px',
            //   rect.x + rect.width + 5,
            //   rect.y + 22
            // );
          });
        });
        break;
      case 'color':
        this.tracker = new (window as any).tracking.ColorTracker('yellow');

        (window as any).tracking.track(cameraOutput, this.tracker, {
          camera: true,
        });

        this.tracker.on('track', (event) => {
          contextCurrent.clearRect(0, 0, canvasCurrent.width, canvasCurrent.height);

          event.data.forEach((rect) => {
            if (rect.color === 'custom') {
              rect.color = this.tracker.customColor;
            }

            contextCurrent.strokeStyle = rect.color;
            contextCurrent.strokeRect(rect.x, rect.y, rect.width, rect.height);
            contextCurrent.font = '11px Helvetica';
            contextCurrent.fillStyle = '#fff';
            contextCurrent.fillText(
              'x: ' + rect.x + 'px',
              rect.x + rect.width + 5,
              rect.y + 11
            );
            contextCurrent.fillText(
              'y: ' + rect.y + 'px',
              rect.x + rect.width + 5,
              rect.y + 22
            );
          });
        });
        break;
      case 'stop':
        this.tracker.removeAllListeners();
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
