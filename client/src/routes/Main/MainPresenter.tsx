import React from 'react';
import Card from '../../components/Card';
import Head from '../../components/Head';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  max-width: 1135px;
  margin: auto;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
// E - Styled Component

const MainPresenter: React.SFC = () => (
  <Container>
    <Head title="Main" />
    <CardContainer>
      <Card to="track-video" title="Tracking Video" desc="using tarcking js" />
      <Card to="track-image" title="Tracking Image" desc="using tracking js" />
    </CardContainer>
  </Container>
);
export default MainPresenter;
