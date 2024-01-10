import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'wouter';

/* ----------------------------- NES Components ----------------------------- */
import RadioButton from '../../../components/block-components/NES/RadioButton/RadioButton';
import Container from '../../../components/block-components/NES/Container/Container';

function Navboard({ checked }) {
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
            checked={checked === 'habits'}
          >
            {checked === 'habits' ? (
              <span>Habits</span>
            ) : (
              <Link href="/">
                <a className="link">Habits</a>
              </Link>
            )}
          </RadioButton>
        </div>

        <div>
          <RadioButton
            group="answer"
            label="History"
            checked={checked === 'history'}
          >
            {checked === 'history' ? (
              <span>History</span>
            ) : (
              <Link href="/history">
                <a className="link">History</a>
              </Link>
            )}
          </RadioButton>
        </div>
        {/* 
        <div>
          <RadioButton
            group="answer"
            label="Settings"
            checked={checked === 'settings'}
          >
            {checked === 'settings' ? (
              <span>Settings</span>
            ) : (
              <Link href="/settings">
                <a className="link">Settings</a>
              </Link>
            )}
          </RadioButton>
        </div> */}
      </Container>
    </div>
  );
}

Navboard.propTypes = {
  checked: PropTypes.string.isRequired,
};

Navboard.defaultProps = {
  checked: '',
};

export default Navboard;
