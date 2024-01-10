import React from 'react';
import Container from '../../components/block-components/NES/Container/Container';
import { Link } from 'wouter';

const NewHabit = () => (
  <Container>
    <Container
      title={'Novo Hábito'}
      centered
    >
      <span className="nes-text is-primary">Beber água</span>
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
          <span>Domingo</span>
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
          <span>Segunda</span>
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
          <span>Terça</span>
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
          <span>Quarta</span>
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
          <span>Quinta</span>
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
          <span>Sexta</span>
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
          <span>Sábado</span>
        </label>
      </div>
    </Container>
    <br />

    <Container
      title={'Periods of Day'}
      centered
    >
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ marginRight: '10px' }}>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          <span style={{ marginRight: '10px' }}>Any Hour </span>
        </div>
        <span> x {5}</span>
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ marginRight: '10px' }}>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          <span style={{ marginRight: '10px' }}>Morning </span>
        </div>
        <span> x {5}</span>
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ marginRight: '10px' }}>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          <span style={{ marginRight: '10px' }}>Afternoon </span>
        </div>
        <span> x {5}</span>
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ marginRight: '10px' }}>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          <span style={{ marginRight: '10px' }}>Evening </span>
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
        Salvar
      </button>
    </Link>
  </Container>
);

export default NewHabit;
