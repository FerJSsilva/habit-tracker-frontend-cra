import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Container from '../../../components/block-components/NES/Container/Container';

const HabitGroup = ({ habits, title }) => (
  <Container
    title={title}
    centered
  >
    {habits.map((habit, index) => {
      const classes = classNames({
        'nes-text is-primary': habit.status === 'standard',
        'nes-text is-success': habit.status === 'completed',
        'nes-text is-error': habit.status === 'failed',
        'nes-text is-disabled': !habit.status,
      });

      return (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              className="nes-checkbox"
              defaultChecked
            />
            <span className={classes}>
              <del>{habit.name}</del>
            </span>
          </label>
        </div>
      );
    })}
  </Container>
);

HabitGroup.propTypes = {
  habits: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

HabitGroup.defaultProps = {
  habits: [],
  title: '',
};

export default HabitGroup;
