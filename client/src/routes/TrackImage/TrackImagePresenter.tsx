import React from 'react';
import Head from '../../components/Head';
import Image from '../../components/Image';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 100px;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 600px;
    height: 812px;
    background-color: #0984e3;
  }

  /* Nested Img */
  > img {
    display: block;
    width: 40%;
    margin auto;
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
