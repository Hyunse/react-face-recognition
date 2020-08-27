import React from 'react';
import Head from '../../components/Head';
import Image from '../../components/Image';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ImgInput = styled.input`
  width: 70%;
  height: 40px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ImgButton = styled.button`
  background-color: #791E94;
  border: none;
  color: white;
  padding: 15px 32px;
  margin-bottom: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  
  :hover {
    cursor: pointer;
  }
`;
// E - Styled Component

interface IProps {
  image: React.RefObject<HTMLImageElement>;
  canvasElements: any;
  afterLoadingImg: React.ReactEventHandler;
  uploadImg: () => void;
  imageInputRef: React.RefObject<HTMLInputElement>;
  url: string;
}

const TrackImagePresenter: React.SFC<IProps> = ({
  image,
  canvasElements,
  afterLoadingImg,
  uploadImg,
  imageInputRef,
  url
}) => {
  return (
    <Container>
      <Head title="Tracking Image" />
      <ImgInput ref={imageInputRef} type="text" placeholder="Upload an image file through url" />
      <ImgButton onClick={uploadImg}>Upload</ImgButton>
      <Image
        refs={image}
        src={url}
        name="trackingImg"
        afterLoadingImg={afterLoadingImg}
      />
      {...canvasElements}
    </Container>
  );
};

export default TrackImagePresenter;
