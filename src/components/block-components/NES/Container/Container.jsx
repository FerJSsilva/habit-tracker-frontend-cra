import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Container component
 * It is considered a composite component because it is composed of other components
 * and it has a purpose of its own.
 * @param {boolean} centered - Center the container
 * @param {boolean} dark - Darken the container
 * @param {boolean} rounded - Round the container
 * @param {string} title - Title of the container
 * @param {node} children - Child elements
 * @return {jsx}
 */

function Container({ centered, dark, rounded, title, children }) {
  const classes = classNames({
    'nes-container': true,
    'with-title': title,
    'is-centered': centered,
    'is-dark': dark,
    'is-rounded': rounded,
  });

  return (
    <div className={classes}>
      {title && <p className="title">{title}</p>}
      {children}
    </div>
  );
}

Container.propTypes = {
  centered: PropTypes.bool,
  dark: PropTypes.bool,
  rounded: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  centered: false,
  dark: false,
  rounded: false,
  title: '',
  children: null,
};

export default Container;
