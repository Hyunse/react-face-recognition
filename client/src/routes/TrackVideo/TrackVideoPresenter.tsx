import React from 'react';
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

// Interface Props
interface IProps {
  handleClick;
  cameraOutput: React.RefObject<HTMLInputElement>;
  canvas: React.RefObject<HTMLInputElement>;
}

const TrackVideoPresenter: React.SFC<IProps> = ({
  handleClick,
  cameraOutput,
  canvas
}) => (
  <Container>
    <Video ref={cameraOutput} autoPlay={true} loop={true} />
    <Canvas ref={canvas} width="375" height="812" />
    <Button name="start" onClick={handleClick}>
      Start
    </Button>
    <Button name="stop" onClick={handleClick}>
      Stop
    </Button>
  </Container>
);
export default TrackVideoPresenter;
