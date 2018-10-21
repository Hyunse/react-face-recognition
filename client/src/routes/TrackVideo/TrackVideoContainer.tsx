import React, { Component } from 'react';
import 'tracking';
import 'tracking/build/data/face';
import TrackVideoPresenter from './TrackVideoPresenter';

class TrackVideo extends Component {
  private tracker: any = null;
  private cameraOutput: any;
  private canvas: any;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick({ currentTarget: { name } }) {
    const cameraOutput = this.cameraOutput;

    switch (name) {
      case 'start':
        this.tracker = new (window as any).tracking.ObjectTracker('face');
        // this.tracker.setInitialScale(4);
        // this.tracker.setStepSize(2);
        // this.tracker.setEdgesDensity(0.1);

        (window as any).tracking.track(cameraOutput, this.tracker, {
          camera: true
        });

        this.tracker.on('track', (event) => {
          const canvas: any = this.canvas;
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
      case 'stop':
        this.tracker.removeAllListeners();
        // tackerTask.stop();
        break;
      default:
        break;
    }
  }

  public render() {
    return <TrackVideoPresenter handleClick={this.handleClick} />;
  }
}

export default TrackVideo;
