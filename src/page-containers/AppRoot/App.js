import React from 'react';
import { useState } from 'react';
import { Route, Link } from 'wouter';
import Home from '../Home/Home';
import History from '../History/History';
import Settings from '../Settings/Settings';
import './App.css';

function App() {
  const [answer, setAnswer] = useState('Yes');

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className="App">
      <Route
        path="/"
        component={Home}
      />
      <Route
        path="/history"
        component={History}
      />
      <Route
        path="/settings"
        component={Settings}
      />
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '92.5%',
          backgroundColor: 'white',
          maxWidth: '475px',
        }}
      >
        <div className="nes-container is-rounded">
          <div>
            <label>
              <input
                type="radio"
                className="nes-radio"
                name="answer"
                value="Yes"
                checked={answer === 'Yes'}
                onChange={handleChange}
              />
              <Link href="/">
                <a className="link">My daily habits</a>
              </Link>
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                className="nes-radio"
                name="answer"
                value="No"
                checked={answer === 'No'}
                onChange={handleChange}
              />
              <Link href="/history">
                <a className="link">History</a>
              </Link>
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                className="nes-radio"
                name="answer"
                value="Maybe"
                checked={answer === 'Maybe'}
                onChange={handleChange}
              />
              <Link href="/settings">
                <a className="link">Settings</a>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
