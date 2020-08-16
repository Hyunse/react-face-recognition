import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  max-width: 400px;
  min-width: 300px;
  height: 100%;
  padding: 50px 30px 50px 30px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #000000;
  box-shadow: 5px 5px 10px #cccccc;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

const Title = styled.h3`
  max-width: 400px;
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;

const Desc = styled.div`
  max-width: 400px;
`;
// E - Styled Component

interface IProps {
  to: string;
  title: string;
  desc: string;
}

const Card: React.SFC<IProps> = ({ to, title, desc }) => (
  <Link to={`/${to}`}>
    <Container>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Container>
  </Link>
);

export default Card;
