import React from 'react';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.button`
  color: #ffffff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ffffff;
  border-radius: 3px;
  cursor: pointer;
  z-index: 3;
`;
// E - Styled Component

interface IProps {
  name: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.SFC<IProps> = ({ name, text, onClick }) => (
  <Container name={name} onClick={onClick}>
    {text}
  </Container>
);

export default Button;
