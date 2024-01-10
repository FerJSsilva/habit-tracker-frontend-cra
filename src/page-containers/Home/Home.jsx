import React from 'react';
import Container from '../../components/block-components/NES/Container/Container';
import Dashboard from '../../components/domain-components/Dashboard/Dashboard';

import { useState } from 'react';

const habitsMock = [
  { id: 1, name: 'Reading', status: 'completed' },
  { id: 2, name: 'Writing', status: 'completed' },
  { id: 3, name: 'Jogging', status: 'failed' },
  { id: 4, name: 'Coding', status: 'standard' },
  { id: 5, name: 'Meditating', status: 'completed' },
];

function habitStatusToClass(status) {
  switch (status) {
    case 'standard':
      return 'nes-text is-primary';
    case 'completed':
      return 'nes-text is-success';
    case 'failed':
      return 'nes-text is-error';
    default:
      return 'nes-text is-disabled';
  }
}

const Home = () => {
  const [habits] = useState(habitsMock);

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
          <button
            type="button"
            className="nes-btn is-primary"
          >
            Add
          </button>
        </div>
      </Container>
      <br />
      <Container
        title={'Hábitos'}
        centered
      >
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox"
                defaultChecked
              />
              <span className={habitStatusToClass(habit.status)}>
                <del>{habit.name}</del>
              </span>
            </label>
          </div>
        ))}
      </Container>
      <br />
      <Container
        title={'Manhã'}
        centered
      >
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox"
                defaultChecked
              />
              <span className={habitStatusToClass(habit.status)}>
                <del>{habit.name}</del>
              </span>
            </label>
          </div>
        ))}
      </Container>
      <br />
      <Container
        title={'Tarde'}
        centered
      >
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox"
                defaultChecked
              />
              <span className={habitStatusToClass(habit.status)}>
                <del>{habit.name}</del>
              </span>
            </label>
          </div>
        ))}
      </Container>
      <br />
      <Container
        title={'Noite'}
        centered
      >
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox"
                defaultChecked
              />
              <span className={habitStatusToClass(habit.status)}>
                <del>{habit.name}</del>
              </span>
            </label>
          </div>
        ))}
      </Container>
      <br />
    </div>
  );
};

export default Home;
