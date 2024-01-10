import React from 'react';
import Container from '../../../components/block-components/NES/Container/Container';

const Dashboard = () => (
  <Container
    title={'User - Lvl XX'}
    centered
  >
    <div>
      <span className="nes-text">Health - </span>
      <i className="nes-icon is-small heart"></i>
      <i className="nes-icon is-small heart is-half"></i>
      <i className="nes-icon is-small heart is-transparent"></i>
      <i className="nes-icon is-small heart is-empty"></i>
      <i className="nes-icon is-small heart is-empty"></i>
    </div>
    <div>
      <span className="nes-text">Win Streak - 2x </span>
      <i className="nes-icon trophy is-small"></i>

      <br />
      <br />

      <progress
        className="nes-progress is-primary"
        value="75"
        max="100"
      />
    </div>
  </Container>
);

export default Dashboard;
