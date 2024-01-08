import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RadioButton = ({ label, checked, group, dark, onChange, children }) => {
  const classes = classNames({
    'nes-radio': true,
    'is-dark': dark,
  });

  return (
    <label>
      <input
        type="radio"
        className={classes}
        name={group}
        checked={checked}
        onChange={onChange}
      />
      <span></span>
      {children || label}
    </label>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  group: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

RadioButton.defaultProps = {
  label: '',
  checked: false,
  group: '',
  dark: false,
  onChange() {},
  children: null,
};

export default RadioButton;
