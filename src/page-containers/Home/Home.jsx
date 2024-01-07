import React from 'react';

import { useState } from 'react';

const habitsMock = [
  { id: 1, name: 'Reading', status: 'completed' },
  { id: 2, name: 'Writing', status: 'expiring' },
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
    case 'expiring':
      return 'nes-text is-warning';
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
      <div
        className="nes-container with-title is-centered"
        style={{ textAlign: 'left' }}
      >
        <p className="title">Fer - Lvl 2</p>
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
          ></progress>
        </div>
      </div>
      <br />

      <div className="nes-container with-title is-centered">
        <p className="title">Hoje - Domingo</p>
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
      </div>
      <br />
      <div className="nes-container with-title is-centered">
        <p className="title">Hábitos</p>
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox"
                checked
              />
              <span className={habitStatusToClass(habit.status)}>
                <del>{habit.name}</del>
              </span>
            </label>
          </div>
        ))}
      </div>
      <br />
      <div className="nes-container with-title is-centered">
        <p className="title">Manhã</p>
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox"
                checked
              />
              <span className={habitStatusToClass(habit.status)}>
                <del>{habit.name}</del>
              </span>
            </label>
          </div>
        ))}
      </div>
      <br />
      <div className="nes-container with-title is-centered">
        <p className="title">Tarde</p>
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox"
                checked
              />
              <span className={habitStatusToClass(habit.status)}>
                <del>{habit.name}</del>
              </span>
            </label>
          </div>
        ))}
      </div>
      <br />
      <div className="nes-container with-title is-centered">
        <p className="title">Noite</p>
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox"
                checked
              />
              <span className={habitStatusToClass(habit.status)}>
                <del>{habit.name}</del>
              </span>
            </label>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Home;
