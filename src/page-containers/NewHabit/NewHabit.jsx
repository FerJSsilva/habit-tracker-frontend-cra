import React from 'react';
import Container from '../../components/block-components/NES/Container/Container';
import { Link } from 'wouter';

const NewHabit = () => (
  <Container>
    <Container
      title={'New Habit'}
      centered
    >
      <span className="nes-text is-primary">Drinking Water</span>
    </Container>
    <br />
    <Container
      title={'Days of Week'}
      centered
    >
      <div>
        <label>
          <input
            type="checkbox"
            className="nes-checkbox"
            value="Monday"
            defaultChecked
          />
          <span>Monday</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            className="nes-checkbox"
            value="Tuesday"
            defaultChecked
          />
          <span>Tuesday</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            className="nes-checkbox"
            value="Wednesday"
            defaultChecked
          />
          <span>Wednesday</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            className="nes-checkbox"
            value="Thursday"
            defaultChecked
          />
          <span>Thursday</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            className="nes-checkbox"
            value="Friday"
            defaultChecked
          />
          <span>Friday</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            className="nes-checkbox"
            value="Saturday"
            defaultChecked
          />
          <span>Saturday</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            className="nes-checkbox"
            value="Monday"
            defaultChecked
          />
          <span>Monday</span>
        </label>
      </div>
    </Container>
    <br />

    <Container
      title={'Periods of Day'}
      centered
    >
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ marginRight: '15px' }}>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          <span style={{ marginRight: '15px' }}>Any Hour </span>
        </div>
        <span> x {5}</span>
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ marginRight: '15px' }}>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          <span style={{ marginRight: '15px' }}>Morning </span>
        </div>
        <span> x {5}</span>
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ marginRight: '15px' }}>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          <span style={{ marginRight: '15px' }}>Afternoon </span>
        </div>
        <span> x {5}</span>
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ marginRight: '15px' }}>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          <span style={{ marginRight: '15px' }}>Evening </span>
        </div>
        <span> x {5}</span>
      </div>
      <hr />
    </Container>

    <br />
    <Link href="/">
      <button
        type="button"
        className="nes-btn is-success"
        style={{ width: '100%' }}
      >
        Save
      </button>
    </Link>
  </Container>
);

export default NewHabit;
