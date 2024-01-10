import React from 'react';
import Container from '../../components/block-components/NES/Container/Container';

const Home = () => (
  <div>
    <Container
      title={'October - Week 1/4'}
      centered
    >
      <div className="nes-table-responsive">
        <table className="nes-table is-centered s">
          <thead>
            <tr>
              <th>Habit</th>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thd</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Drinking Water</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
              <td>❌</td>
              <td>❌</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Dancing</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
              <td>❌</td>
              <td>❌</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
    <br />
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          className="nes-btn is-primary"
          style={{ width: '45%' }}
        >
          {'<<'}
        </button>
        <button
          className="nes-btn is-primary"
          style={{ width: '45%' }}
        >
          {'>>'}
        </button>
      </div>
    </Container>
  </div>
);

export default Home;
