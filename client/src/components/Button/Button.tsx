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
  /* ${(props) => {
    const { className } = props;
    let style;
    switch (className) {
      case 'start':
        style = `
          left: 35%;
          background: #4CAF50;
        `;
        return style;
        break;
      case 'stop':
        style = `
          left: 65%;
          background: #f44336;
        `;
        return style;
        break;
      default:
        return 'background: #555555;';
        break;
    }
  }}; */
`;
// E - Styled Component

interface IProps {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.SFC<IProps> = ({ name, onClick }) => (
  <Container name={name} onClick={onClick}>
    {name}
  </Container>
);

export default Button;
