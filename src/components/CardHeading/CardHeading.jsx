import React, { useState } from 'react';
import scales from '../../images/scales.png';

import checkGreen from '../../images/checkGreen.png';
const imgs = { scales, checkGreen };

export const CardHeading = ({ picture }) => {
  const [image, setImage] = useState(imgs.scales);
  return (
    <div className="card__heading">
    <div className="card__sign">
      New
    </div>
    <div className="card__image-container">
      <img src={picture} alt="Shampoo blue" className="card__image"/>
    </div>
    <div className="card__logo" >
      <img src={image} alt="scales-logo" className="card__figure" onClick={() => setImage(imgs.checkGreen)} />
    </div>
  </div>
  )
}