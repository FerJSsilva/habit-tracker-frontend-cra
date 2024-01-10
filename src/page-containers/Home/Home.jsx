import React from 'react';
import { Link } from 'wouter';
import Container from '../../components/block-components/NES/Container/Container';
import Dashboard from '../../components/domain-components/Dashboard/Dashboard';
import HabitsGroup from '../../components/domain-components/HabitsGroup/HabitsGroup';

const habitsMock = [
  { id: 1, name: 'Reading', status: 'completed' },
  { id: 2, name: 'Writing', status: 'completed' },
  { id: 3, name: 'Jogging', status: 'failed' },
  { id: 4, name: 'Coding', status: 'standard' },
  { id: 5, name: 'Meditating', status: 'completed' },
];

function Home() {
  return (
    <div>
      <Dashboard />
      <br />

      <Container
        title={'Hoje - Domingo'}
        centered
      >
        <div
          className="nes-field"
          style={{ display: 'flex' }}
        >
          <input
            id="time_field"
            className="nes-input"
            type="date"
            style={{ width: '', marginRight: '8px' }}
          />
          <Link to="/categories">
            <button
              type="button"
              className="nes-btn is-primary"
            >
              Add
            </button>
          </Link>
        </div>
      </Container>
      <br />
      <HabitsGroup
        title={'Hábitos'}
        habits={habitsMock}
      />
      <br />
      <HabitsGroup
        title={'Manhã'}
        habits={habitsMock}
      />
      <br />
      <HabitsGroup
        title={'Tarde'}
        habits={habitsMock}
      />
      <br />
      <HabitsGroup
        title={'Noite'}
        habits={habitsMock}
      />
      <br />
    </div>
  );
}

export default Home;
