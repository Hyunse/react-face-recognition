import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
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
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;

const StyledLink = styled(Link)`
  max-width: 50%;
  margin-top: 20px;
`;
// E - Styled Component

interface IProps {
  to: string;
  title: string;
  desc: string;
}

const Card: React.SFC<IProps> = ({ to, title, desc }) => (
  <StyledLink to={`/${to}`}>
    <Container>
      <Title>{title}</Title>
    </Container>
  </StyledLink>
);

export default Card;
