import React from 'react';
import './Price.css';
import PropTypes from 'prop-types';

export const Price = ({ price }) => (
  <div className="price">
    {price}
  </div>
);

Price.propTypes = {
  price: PropTypes.string,
};

Price.defaultProps = {
  price: 'No price',
};
