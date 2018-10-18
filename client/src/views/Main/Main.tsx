// tslint:disable:no-console
import React, { Component } from 'react';
import styled from 'styled-components';
import 'tracking';
import 'tracking/build/data/face';

// S - Styled Component
const Container = styled.div`
  background-color: #000000;
`;

const Video = styled.video`
  position: relative;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Button = styled.button`
  color: #ffffff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ffffff;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${(props) => {
    const { name } = props;
    switch (name) {
      case 'start':
        return '#4CAF50';
        break;
      case 'stop':
        return '#f44336';
        break;
      default:
        return '#555555';
        break;
    }
  }};
`;
// E - Styled Component

class Main extends Component {
  private tracker: any = null;
  private cameraOutput: any;
  private canvas: any;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick({ currentTarget: { name } }) {
    const cameraOuput = this.cameraOutput;

    switch (name) {
      case 'start':
        this.tracker = new (window as any).tracking.ObjectTracker('face');
        this.tracker.setInitialScale(4);
        this.tracker.setStepSize(2);
        this.tracker.setEdgesDensity(0.1);

        (window as any).tracking.track(cameraOuput, this.tracker, {
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
        this.cameraOutput.pause();
        break;
      default:
        break;
    }
  }

  public render() {
    return (
      <Container>
        <Video
          ref={(ref) => (this.cameraOutput = ref)}
          width="640"
          height="480"
          autoPlay={true}
          loop={true}
        />
        <Canvas ref={(ref) => (this.canvas = ref)} width="640" height="480" />
        <Button name="start" onClick={this.handleClick}>
          Start
        </Button>
        <Button name="stop" onClick={this.handleClick}>
          Stop
        </Button>
      </Container>
    );
  }
}

export default Main;
