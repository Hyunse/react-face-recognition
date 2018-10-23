import React from 'react';
import styled from '../../typed-components';

const Container = styled.div`
  max-width: 400px;
  min-width: 300px;
  height: 100%;
  padding: 20px 15px 20px 15px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #000000;
  box-shadow: 5px 5px 10px #cccccc;
`;

const Title = styled.div`
  max-width: 400px;
`;

const Desc = styled.div`
  max-width: 400px;
`;

const Card = ({ title, desc}) => (
  <Container>
    <Title>{title}</Title>
    <Desc>{desc}</Desc>
  </Container>
);

export default Card;