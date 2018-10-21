import React, { Component } from 'react';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  max-width: 1135px;
  margin: auto;
`;

const Header = styled.header`
  padding-top: 100px;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 65px;
  font-weight: 700;
  line-height: 1.2em;
  text-align: center;
`;
// E - Styled Component

class Head extends Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Container>
        <Header>
          <Title>Main Page</Title>
        </Header>
      </Container>
    );
  }
}

export default Head;