import React from 'react';
import Container from '../../components/block-components/NES/Container/Container';
import { Link, useParams } from 'wouter';
import { useFetchHabitsQuery } from '../../redux/services/habitsService';

/* ---------------------------------- Icons --------------------------------- */
import { IoIosAddCircleOutline } from 'react-icons/io';
// Import { BsPersonWalking } from 'react-icons/bs';

function Habits() {
  const params = useParams();

  const { data, error, isLoading } = useFetchHabitsQuery();

  console.log('isLoading:', isLoading);
  console.log('error:', error);
  console.log('data:', data);

  if (isLoading) {
    return (
      <Container
        title={'Hábitos'}
        centered
      >
        <p>Loading...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        title={'Hábitos'}
        centered
      >
        <p className="nes-text is-error">
          Error loading habits: {error.message || 'Unknown error'}
        </p>
      </Container>
    );
  }

  if (!data) {
    return (
      <Container
        title={'Hábitos'}
        centered
      >
        <p>No habits found</p>
      </Container>
    );
  }

  const { ids, entities } = data;

  // Filter habits by category if needed
  const filteredIds = params.category
    ? ids.filter((id) => {
        const habit = entities[id];
        return (
          habit.categoryId?.identifier?.toLowerCase() ===
            params.category.toLowerCase() ||
          habit.category?.toLowerCase() === params.category.toLowerCase()
        );
      })
    : ids;

  return (
    <Container
      title={'Hábitos'}
      centered
    >
      <div>
        {filteredIds.length === 0 ? (
          <p>No habits found for this category</p>
        ) : (
          filteredIds.map((id) => (
            <div key={id}>
              <Link href={`/new/${id}`}>
                <label
                  className="nes-btn"
                  style={{ width: '100%' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    {/* <BsPersonWalking size={48} /> */}
                    <h3>
                      {entities[id].name ||
                        entities[id].identifier ||
                        'Unnamed Habit'}
                    </h3>
                    <IoIosAddCircleOutline size={48} />
                  </div>
                </label>
              </Link>
              <br />
              <br />
            </div>
          ))
        )}
      </div>
    </Container>
  );
}

export default Habits;
