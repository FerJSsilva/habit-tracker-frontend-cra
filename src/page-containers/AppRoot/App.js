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
      {habits.map((habit, index) => (
        <div key={index}>
          <span className={habitStatusToClass(habit.status)}>
            {habit.name}
          </span>
          <button
            type='button'
            className='nes-btn'
            onClick={() => { /* removeTask(habit.id) */ }}
          >Remove</button>
        </div>
      ))}
      <button onClick={() => console.log("cliked") }>Add Task</button>
      <button type='button' className='nes-btn is-disabled'>Remove</button>
    </div>
  );
}

export default App;
