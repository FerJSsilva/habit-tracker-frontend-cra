import React, { useState } from 'react';
import { Link } from 'wouter';

/* ----------------------------- NES Components ----------------------------- */
import RadioButton from '../../block-components/NES/RadioButton/RadioButton';
import Container from '../../block-components/NES/Container/Container';

function Navboard() {
  const [answer, setAnswer] = useState('Habits');

  const handleChange = (event) => {
    console.log(event.target.value);
    setAnswer(event.target.value);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: '92.5%',
        backgroundColor: 'white',
        maxWidth: '475px',
      }}
    >
      <Container rounded>
        <div>
          <RadioButton
            group="answer"
            label="Habits"
            checked={answer === 'Habits'}
            onChange={handleChange}
          >
            <Link href="/">
              <a className="link">Habits</a>
            </Link>
          </RadioButton>
        </div>

        <div>
          <RadioButton
            group="answer"
            label="History"
            checked={answer === 'History'}
            onChange={handleChange}
          >
            <Link href="/history">
              <a className="link">History</a>
            </Link>
          </RadioButton>
        </div>

        <div>
          <RadioButton
            group="answer"
            label="Settings"
            checked={answer === 'Settings'}
            onChange={handleChange}
          >
            <Link href="/settings">
              <a className="link">Settings</a>
            </Link>
          </RadioButton>
        </div>
      </Container>
    </div>
  );
}

export default Navboard;
