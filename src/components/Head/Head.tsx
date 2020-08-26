import React from 'react';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.header`
  padding-top: 20px;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2em;
  text-align: center;
`;
// E - Styled Component

interface IProps {
  title: string;
}

const Head: React.SFC<IProps> = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

export default Head;
