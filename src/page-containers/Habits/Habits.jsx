import React from 'react';
import Container from '../../components/block-components/NES/Container/Container';
import { Link, useParams } from 'wouter';
import { useFetchHabitsQuery } from '../../redux/services/habitsService';

/* ---------------------------------- Icons --------------------------------- */
import { IoIosAddCircleOutline } from 'react-icons/io';
// Import { BsPersonWalking } from 'react-icons/bs';

function Habits() {
  const params = useParams();

  const { data, error, isLoading } = useFetchHabitsQuery(params.category);

  console.log('isLoading:', isLoading);
  console.log('error:', error);
  console.log('data:', data);

  if (!data || isLoading) {
    return 'Loading...';
  }

  const { ids, entities } = data;

  return (
    <Container
      title={'Hábitos'}
      centered
    >
      <div>
        {ids.map((id) => (
          <div key={id}>
            <Link href={`/new/${id}`}>
              <label
                className="nes-btn"
                style={{ width: '100%' }}
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  {/* <BsPersonWalking size={48} /> */}
                  <h3>{entities[id].name}</h3>
                  <IoIosAddCircleOutline size={48} />
                </div>
              </label>
            </Link>
            <br />
            <br />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Habits;
