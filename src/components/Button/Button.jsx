import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export const Button = ({ children }) => (
  <button type="button" className="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
