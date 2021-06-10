import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '../Button';
import { CardHeading } from '../CardHeading';
import { CheckBox } from '../Checkbox';
import { ColorPicker } from '../Colorpicker';
import { Counter } from '../Counter';
import { Price } from '../Price';
import { ProductInfo } from '../ProductInfo';
import './Card.css';

export const Card = ({
  image, price, name, info,
}) => (
  <div className="card">
    <CardHeading picture={image} />
    <ProductInfo name={name} info={info} />
    <div className="card__container-price">
      <ColorPicker />
      <Price price={price} />
    </div>
    <CheckBox />
    <div className="card__button-wrapper">
      <Counter />
      <Button>
        Купить
      </Button>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  info: PropTypes.string,
};

Card.defaultProps = {
  image: 'No image',
  price: 'No price',
  name: 'Product is unknown',
  info: 'No info, sorry',
};
