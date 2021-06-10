import React from 'react';
import './ProductInfo.css';
import PropTypes from 'prop-types';

export const ProductInfo = ({ name, info }) => (
  <div className="product">
    <p className="product__name">
      {name}
    </p>
    <p className="product__description">
      {info}
    </p>
  </div>
);

ProductInfo.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
};

ProductInfo.defaultProps = {
  name: 'Product is unknown',
  info: 'No info, sorry',
};
