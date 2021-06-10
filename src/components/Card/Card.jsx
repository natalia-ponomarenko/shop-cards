import React from 'react';
import './Card.css';
import { ColorPicker } from '../Colorpicker/ColorPicker';
import { CheckBoxGroup } from '../Checkbox/Checkbox';
import { Counter } from '../Counter/Counter';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { Price } from '../Price/Price';
import { CardHeading } from '../CardHeading/CardHeading';
import { Button } from '../Button/Button';

export const Card = ( { image, price }) => {
  return (
    <div className="card">
      <CardHeading picture={image} />
      <ProductInfo />
      <div className="card__container-price">
        <ColorPicker />
        <Price price={price} />
      </div>
      <CheckBoxGroup />
      <div className="card__button-wrapper">
        <Counter />
        <Button>
          Купить
        </Button>
      </div>
    </div>
  )
}