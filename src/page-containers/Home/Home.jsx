import React from 'react';
import { Link } from 'wouter';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import Container from '../../components/block-components/NES/Container/Container';
import HabitsGroup from '../../components/domain-components/HabitsGroup/HabitsGroup';
import LoginButton from '../../components/domain-components/LoginButton/LoginButton';
import LogoutButton from '../../components/domain-components/LogoutButton/LogoutButton';
import UserProfile from '../../components/domain-components/UserProfile/UserProfile';

dayjs.locale('pt-br');

const habitsMock = [
  { id: 1, name: 'Ler', status: 'standard' },
  { id: 2, name: 'Escrever', status: 'standard' },
  { id: 3, name: 'Caminhar', status: 'failed' },
  { id: 4, name: 'Programar', status: 'completed' },
  { id: 5, name: 'Meditar', status: 'completed' },
];

function Home() {
  const currentDate = dayjs().format('YYYY-MM-DD');

  return (
    <div>
      <br />

      <Container
        title={'User Info'}
        centered
      >
        <div style={{ display: 'flex' }}>
          <UserProfile />
          <LoginButton />
          <LogoutButton />
        </div>
      </Container>
      <br />
      <Container
        title={'Hoje - Quarta'}
        centered
      >
        <div
          className="nes-field"
          style={{ display: 'flex' }}
        >
          <input
            id="time_field"
            className="nes-input"
            type="date"
            value={currentDate}
            style={{ width: '', marginRight: '8px' }}
          />
        </div>
      </Container>
      <br />
      <Container
        centered
        rounded
      >
        <Link to="/categories">
          <button
            type="button"
            className="nes-btn is-primary"
          >
            Novo Hábito
          </button>
        </Link>
      </Container>
      <br />
      <HabitsGroup
        title={'Hábitos'}
        habits={habitsMock}
      />
      <br />
      <HabitsGroup
        title={'Manhã'}
        habits={habitsMock}
      />
      <br />
      <HabitsGroup
        title={'Tarde'}
        habits={habitsMock}
      />
      <br />
      <HabitsGroup
        title={'Noite'}
        habits={habitsMock}
      />
      <br />
    </div>
  );
}

export default Home;
