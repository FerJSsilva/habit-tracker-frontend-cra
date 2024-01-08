import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
