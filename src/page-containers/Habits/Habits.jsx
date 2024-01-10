import React from 'react';
import Container from '../../components/block-components/NES/Container/Container';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsPersonWalking } from 'react-icons/bs';
import { FaGlassWaterDroplet } from 'react-icons/fa6';

const Home = () => (
  <Container
    title={'Habits - Physical'}
    centered
  >
    <div>
      <label
        className="nes-btn"
        style={{ width: '100%' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <BsPersonWalking size={48} />
          <h3>Walking 15m</h3>
          <IoIosAddCircleOutline size={48} />
        </div>
      </label>
    </div>
    <br />
    <div>
      <label
        className="nes-btn"
        style={{ width: '100%' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FaGlassWaterDroplet size={48} />
          <h3>Drinking Water</h3>
          <IoIosAddCircleOutline size={48} />
        </div>
      </label>
    </div>
  </Container>
);

export default Home;
