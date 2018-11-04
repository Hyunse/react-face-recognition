import React from 'react';
import Head from '../../components/Head';
import Image from '../../components/Image';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  position: relative;
  height: 100%;
  box-sizing: border-box;
  margin-bottom: 100px;
  
  > img {
    display: block;
    width: 40%;
    margin: auto;
  }

  @media (max-width: 600px) {
    min-height: 100vh;
    margin-bottom: 0px;
    > img {
      width: 100%;
    }
  }
`;
// E - Styled Component

interface IProps {
  image: React.RefObject<HTMLImageElement>;
  canvasElements: any;
  afterLoadingImg: React.ReactEventHandler;
}

const TrackImagePresenter: React.SFC<IProps> = ({
  image,
  canvasElements,
  afterLoadingImg
}) => {
  return (
    <Container>
      <Head title="Tracking Image" />
      <Image
        refs={image}
        src="friends"
        name="trackingImg"
        afterLoadingImg={afterLoadingImg}
      />
      {...canvasElements}
    </Container>
  );
};

export default TrackImagePresenter;
