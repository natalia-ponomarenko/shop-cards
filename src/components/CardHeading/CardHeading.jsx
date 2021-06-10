import PropTypes from 'prop-types';
import React, { useState } from 'react';
import checkGreen from '../../images/checkGreen.png';
import scales from '../../images/scales.png';
import './CardHeading.css';

const imgs = { scales, checkGreen };

export const CardHeading = ({ picture }) => {
  const [image, setImage] = useState(imgs.scales);

  return (
    <div className="heading">
      <div className="heading__sign">
        New
      </div>
      <div className="heading__image-container">
        <img
          src={picture}
          alt="Shampoo blue"
          className="heading__image"
        />
      </div>
      <div className="heading__logo">
        <img
          src={image}
          alt="scales-logo"
          className="heading__figure"
          onClick={() => setImage(imgs.checkGreen)}
          role="presentation"
        />
      </div>
    </div>
  );
};

CardHeading.propTypes = {
  picture: PropTypes.string,
};

CardHeading.defaultProps = {
  picture: 'No image',
};
