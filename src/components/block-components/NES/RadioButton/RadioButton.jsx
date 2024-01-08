import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * RadioButton component
 * It is considered a block component because it can be used independently and has its own styling.
 * @param {string} label - Label of the radio button
 * @param {boolean} checked - Whether the radio button is checked
 * @param {string} group - Name of the group the radio button belongs to
 * @param {boolean} dark - Darken the radio button
 * @param {function} onChange - Function to call when the radio button is clicked
 * @param {node} children - Child elements
 * @return {jsx}
 */

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
