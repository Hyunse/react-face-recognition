import React, { Component } from 'react';
import styled from 'styled-components';
import 'tracking';
import 'tracking/build/data/face';

// S - Styled Component
const Container = styled.div`
  background-color: #dfe6e9;
`;

const Video = styled.video`
  position: absolute;
`;

const Canvas = styled.canvas`
  position: absolute;
  z-index: 1;
`;
// E - Styled Component

class Main extends Component {
  private tracker: any = null;
  private cameraOutput: any;
  private canvas: any;

  public componentDidMount() {
    const cameraOuput: any = this.cameraOutput;

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
  }

  public componentWillUnmount() {
    this.tracker.removeAllListeners();
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
      </Container>
    );
  }
}

export default Main;
