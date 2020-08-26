import React from 'react';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.img`
`;
// E - Styled Component

interface IProps {
  src: string;
  name: string;
  alt?: string;
  refs: React.RefObject<HTMLImageElement>;
  afterLoadingImg: React.ReactEventHandler;
}

const Image: React.SFC<IProps> = ({ src, name, alt, refs, afterLoadingImg }) => {
  return (
    <Container
      src={src}
      name={name}
      alt={alt}
      ref={refs}
      onLoad={afterLoadingImg}
    />
  );
};

export default Image;
