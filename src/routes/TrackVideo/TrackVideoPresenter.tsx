import React from 'react';
import Button from '../../components/Button';
import Head from '../../components/Head';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 600px;
    height: 812px;
  }
`;

const VideoContainer = styled.div`
  width: 640px;
  height: 480px;
  object-fit: cover;
  background-color: #dfe6e9;
`;

const Video = styled.video`
  position: absolute;
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
  z-index: 1;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 100%;
    height: 812px;
    max-width: 600px;
    overflow: hidden;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  > button[name="face"] {
    background-color: green;
  }

  > button[name="color"] {
    background-color: magenta;
  }

  > button[name="stop"] {
    background-color: red;
  }
`;
// E - Styled Component

// Interface Props
interface IProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  cameraOutput: React.RefObject<HTMLInputElement>;
  canvas: React.RefObject<HTMLInputElement>;
}

const TrackVideoPresenter: React.SFC<IProps> = ({
  handleClick,
  cameraOutput,
  canvas
}) => (
  <Container>
    <Head title="Tracking Video" />
    <VideoContainer>
      <Video ref={cameraOutput} autoPlay={true} loop={true} width="640" height="480" />
      <Canvas ref={canvas} width="640" height="480" />
    </VideoContainer>
    <ButtonContainer>
      <Button name="face" text="face" onClick={handleClick} />
      <Button name="color" text="yellow color" onClick={handleClick} />
      <Button name="stop" text="stop" onClick={handleClick} />
    </ButtonContainer>
  </Container>
);
export default TrackVideoPresenter;
