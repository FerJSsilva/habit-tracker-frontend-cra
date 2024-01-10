import React from 'react';
import Container from '../../components/block-components/NES/Container/Container';
import { Link } from 'wouter';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsPersonWalking } from 'react-icons/bs';
import { FaGlassWaterDroplet } from 'react-icons/fa6';

const Habits = () => (
  <Container
    title={'Hábitos - Físico'}
    centered
  >
    <div>
      <Link href="/new">
        <label
          className="nes-btn"
          style={{ width: '100%' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <BsPersonWalking size={48} />
            <h3>Andar 15m</h3>
            <IoIosAddCircleOutline size={48} />
          </div>
        </label>
      </Link>
    </div>
    <br />
    <div>
      <Link href="/new">
        <label
          className="nes-btn"
          style={{ width: '100%' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <FaGlassWaterDroplet size={48} />
            <h3>Beber Água</h3>
            <IoIosAddCircleOutline size={48} />
          </div>
        </label>
      </Link>
    </div>
  </Container>
);

export default Habits;
