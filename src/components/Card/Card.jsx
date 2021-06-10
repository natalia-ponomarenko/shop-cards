import React from 'react';
import './Card.css';
import scales from '../../images/scales.png';
import firstItem from '../../images/1.png';
import checkGreen from '../../images/checkGreen.png';

export const Card = () => {

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
          <img src={scales} alt="scales-logo" className="card__figure" />
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
    </div>
  )
}