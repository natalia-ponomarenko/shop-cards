import React, { useState } from 'react';
import './Card.css';
import scales from '../../images/scales.png';
import firstItem from '../../images/1.png';
import checkGreen from '../../images/checkGreen.png';
import { ColorPicker } from '../Colorpicker/ColorPicker';
import { CheckBoxGroup } from '../Checkbox/Checkbox';
const imgs = { scales, checkGreen };


export const Card = () => {
  const [image, setImage] = useState(imgs.scales);

  return (
    <div className="card">
      <div className="card__heading">
        <div className="card__sign">
          New
        </div>
        <div className="card__image-container">
          <img src={firstItem} alt="Shampoo blue" className="card__image"/>
        </div>
        <div className="card__logo" >
          <img src={image} alt="scales-logo" className="card__figure" onClick={() => setImage(imgs.checkGreen)} />
        </div>
      </div>
      <div className="card__product-info">
        <p className="card__product-name">
          Шампунь
        </p>
        <p className="card__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio deleniti veniam voluptatum facilis consequuntur unde? Dolorem animi vel quia, soluta eum ipsa dolorum excepturi?
        </p>
      </div>
      <div className="card__container-price">
        <ColorPicker />
        <div className="card__price">
          200 грн
        </div>
      </div>
      <CheckBoxGroup />
    </div>
  )
}