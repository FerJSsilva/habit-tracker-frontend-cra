import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../components/block-components/NES/Container/Container';

const USER_LEVEL = 'User - Lvl XX';
const HEALTH = 'Health - ';
const WIN_STREAK = 'Win Streak - 2x ';
const PROGRESS_VALUE = 75;
const PROGRESS_MAX = 100;

const Health = () => (
  <div>
    <span className="nes-text">{HEALTH}</span>
    <i className="nes-icon is-small heart"></i>
    <i className="nes-icon is-small heart is-half"></i>
    <i className="nes-icon is-small heart is-transparent"></i>
    <i className="nes-icon is-small heart is-empty"></i>
    <i className="nes-icon is-small heart is-empty"></i>
  </div>
);

const WinStreak = () => (
  <div>
    <span className="nes-text">{WIN_STREAK}</span>
    <i className="nes-icon trophy is-small"></i>
    <br />
    <br />
    <progress
      className="nes-progress is-primary"
      value={PROGRESS_VALUE}
      max={PROGRESS_MAX}
    />
  </div>
);

const Dashboard = () => (
  <Container
    title={USER_LEVEL}
    centered
  >
    <Health />
    <WinStreak />
  </Container>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  centered: PropTypes.bool.isRequired,
};

export default Dashboard;
