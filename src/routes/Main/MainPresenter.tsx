import React from 'react';
import Card from '../../components/Card';
import Head from '../../components/Head';
import styled from '../../typed-components';

// S - Styled Component
const Container = styled.div`
  position: relative;
  max-width: 1135px;
  height: 100vh;
  padding-left: 30px;
  padding-right: 30px;
  margin: auto;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
// E - Styled Component

const MainPresenter: React.SFC = () => (
  <Container>
    <Head title="Face Recognition" />
    <CardContainer>
      <Card to="track-video" title="Tracking Video" desc="using tarcking js" />
      <Card to="track-image" title="Tracking Image" desc="using tracking js" />
    </CardContainer>
  </Container>
);
export default MainPresenter;
