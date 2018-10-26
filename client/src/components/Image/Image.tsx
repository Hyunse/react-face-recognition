import React from 'react';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.img`
  width: 500px;
  height: 500px;
`;
// E - Styled Component

interface IProps {
  src: string;
  alt?: string;
}

const Image: React.SFC<IProps> = ({ src, alt }) => {
  return <Container src={require(`../../assets/img/${src}.jpg`)} alt={1} />;
};

export default Image;
