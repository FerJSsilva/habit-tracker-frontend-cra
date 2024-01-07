import React, { useState } from 'react';
import './App.css';

const habitsMock = [
  { id: 1, name: 'Reading', status: 'completed' },
  { id: 2, name: 'Writing', status: 'expiring' },
  { id: 3, name: 'Jogging', status: 'failed' },
  { id: 4, name: 'Coding', status: 'standard' },
  { id: 5, name: 'Meditating', status: 'completed' }
];

function App() {
  const [habits, setHabits] = useState(habitsMock);
  const [answer, setAnswer] = useState('Yes');

  const handleChange = (event) => {
    setAnswer(event.target.value);
  }

  function habitStatusToClass(status) {
    switch (status) {
      case 'standard': return 'nes-text is-primary';
      case 'completed': return 'nes-text is-success';
      case 'expiring': return 'nes-text is-warning';
      case 'failed': return 'nes-text is-error';
      default: return 'nes-text is-disabled';
    }
  }

  return (
    <div className="App">
      <div class="nes-container with-title is-centered" style={{ textAlign: 'left' }}>
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

          <progress className="nes-progress is-primary" value="75" max="100"></progress>
        </div>
      </div>
      <br />

      <div class="nes-container with-title is-centered">
        <p class="title">Hoje - Domingo</p>
        <div class="nes-field" style={{ display: 'flex' }}>
          <input id="time_field" class="nes-input" type="date" style={{ width: '70%', marginRight: '8px' }} />
          <button type="button" class="nes-btn is-primary">Add</button>
        </div>
      </div>
      <br />
      <div class="nes-container with-title is-centered">
      <p class="title">Hábitos</p>
        {habits.map((habit, index) => (
          <div key={index}>
            <label>
              <input type="checkbox" class="nes-checkbox" checked />
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
              <input type="checkbox" class="nes-checkbox" checked />
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
              <input type="checkbox" class="nes-checkbox" checked />
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
              <input type="checkbox" class="nes-checkbox" checked />
              <span className={habitStatusToClass(habit.status)}>
                <del>{habit.name}</del>
              </span>
            </label>
          </div>
        ))}
      </div>
      <br />
      <div style={{ position: 'fixed', bottom: 0, width: '92.5%', backgroundColor: 'white' }}>
        <div class="nes-container is-rounded">
          <div>
            <label>
              <input type="radio" class="nes-radio" name="answer" value="Yes" checked={answer === 'Yes'} onChange={handleChange} />
              <span>Habits</span>
            </label>
          </div>

          <div>
            <label>
              <input type="radio" class="nes-radio" name="answer" value="No" checked={answer === 'No'} onChange={handleChange} />
              <span>History</span>
            </label>
          </div>

          <div>
            <label>
              <input type="radio" class="nes-radio" name="answer" value="Maybe" checked={answer === 'Maybe'} onChange={handleChange} />
              <span>Config</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
