import React from 'react';
import Image from '../../components/Image';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 600px;
    height: 812px;
    background-color: #0984e3;
  }
`;

interface IProps {
  image: React.RefObject<HTMLImageElement>;
  container: React.RefObject<HTMLDivElement>;
  rect: any;
}

const TrackImagePresenter: React.SFC<IProps> = ({ image, container, rect }) => {
  
  return (
    <Container ref={container}>
      <Image refs={image} src="friends" name="trackingImg" />
      {rect}
    </Container>
  );
};

export default TrackImagePresenter;
