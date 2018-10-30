import React from 'react';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.img`
  width: 1000px;
  height: 500px;
`;
// E - Styled Component

interface IProps {
  src: string;
  name: string;
  alt?: string;
  refs: React.RefObject<HTMLImageElement>;
  afterLoadingImg: React.ReactEventHandler<HTMLImageElement>;
}

const Image: React.SFC<IProps> = ({ src, name, alt, refs, afterLoadingImg }) => {
  return (
    <Container
      src={require(`../../assets/img/${src}.jpg`)}
      name={name}
      alt={alt}
      ref={refs}
      onLoad={afterLoadingImg}
    />
  );
};

export default Image;
