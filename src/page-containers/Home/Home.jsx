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
        class="nes-container with-title is-centered"
        style={{ textAlign: 'left' }}
      >
        <p class="title">Fer - Lvl 2</p>
        <div>
          <span class="nes-text">Health - </span>
          <i class="nes-icon is-small heart"></i>
          <i class="nes-icon is-small heart is-half"></i>
          <i class="nes-icon is-small heart is-transparent"></i>
          <i class="nes-icon is-small heart is-empty"></i>
          <i class="nes-icon is-small heart is-empty"></i>
        </div>
        <div>
          <span class="nes-text">Win Streak - 2x </span>
          <i class="nes-icon trophy is-small"></i>
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

      <div class="nes-container with-title is-centered">
        <p class="title">Hoje - Domingo</p>
        <div
          class="nes-field"
          style={{ display: 'flex' }}
        >
          <input
            id="time_field"
            class="nes-input"
            type="date"
            style={{ width: '', marginRight: '8px' }}
          />
          <button
            type="button"
            class="nes-btn is-primary"
          >
            Add
          </button>
        </div>
      </div>
      <br />
      <div class="nes-container with-title is-centered">
        <p class="title">Hábitos</p>
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                class="nes-checkbox"
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
      <div class="nes-container with-title is-centered">
        <p class="title">Manhã</p>
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                class="nes-checkbox"
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
      <div class="nes-container with-title is-centered">
        <p class="title">Tarde</p>
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                class="nes-checkbox"
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
      <div class="nes-container with-title is-centered">
        <p class="title">Noite</p>
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                class="nes-checkbox"
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
