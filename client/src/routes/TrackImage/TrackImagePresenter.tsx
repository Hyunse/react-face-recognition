import React from 'react';
import Image from '../../components/Image';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 500px;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 600px;
    height: 812px;
    background-color: #0984e3;
  }
`;

const TrackImage: React.SFC = () => (
  <Container>
    <Image src="friends" />
  </Container>
);

export default TrackImage;
