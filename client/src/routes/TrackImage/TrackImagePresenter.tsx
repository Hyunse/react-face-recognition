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
// E - Styled Component

interface IProps {
  image: React.RefObject<HTMLImageElement>;
  rect: any;
  afterLoadingImg: React.ReactEventHandler<HTMLImageElement>;
}

const TrackImagePresenter: React.SFC<IProps> = ({
  image,
  rect,
  afterLoadingImg
}) => {
  return (
    <Container>
      <Image
        refs={image}
        src="friends"
        name="trackingImg"
        afterLoadingImg={afterLoadingImg}
      />
      {rect}
    </Container>
  );
};

export default TrackImagePresenter;
