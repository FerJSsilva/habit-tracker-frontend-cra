import React from 'react';
import Container from '../../components/block-components/NES/Container/Container';
import { Link } from 'wouter';
import { useFetchHabitsQuery } from '../../redux/services/habitsService';

/* ---------------------------------- Icons --------------------------------- */
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsPersonWalking } from 'react-icons/bs';
import { FaGlassWaterDroplet } from 'react-icons/fa6';

function Habits() {
  const { data, error, isLoading } = useFetchHabitsQuery();

  console.log('isLoading:', isLoading);

  console.log('error:', error);

  console.log('data:', data);
  return (
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
}

export default Habits;
