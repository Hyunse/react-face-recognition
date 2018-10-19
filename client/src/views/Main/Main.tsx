// tslint:disable:no-console
import React, { Component } from 'react';
import 'tracking';
import 'tracking/build/data/face';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 600px;
    height: 812px;
    background-color: #0984e3;
  }
`;

const Video = styled.video`
  position: relative;
  top: 0;
  left: 0;
  object-fit: cover;
  @media (max-width: 600px) {
    width: 100%;
    height: 812px;
    max-width: 600px;
    overflow: hidden;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 100%;
    height: 812px;
    max-width: 600px;
    overflow: hidden;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ffffff;
  border-radius: 3px;
  cursor: pointer;
  z-index: 3;
  ${(props) => {
    const { name } = props;
    let style;
    switch (name) {
      case 'start':
        style = `
          left: 35%;
          background: #4CAF50;
        `;
        return style;
        break;
      case 'stop':
        style = `
          left: 65%;
          background: #f44336;
        `;
        return style;
        break;
      default:
        return 'background: #555555;';
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

          console.log(context);
          event.data.forEach((rect) => {
            console.log(rect);
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
    return (
      <Container>
        <Video
          ref={(ref) => (this.cameraOutput = ref)}
          autoPlay={true}
          loop={true}
        />
        <Canvas ref={(ref) => (this.canvas = ref)} width="375" height="812" />
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
