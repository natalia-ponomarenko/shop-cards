import React, { useState } from 'react';
import './ColorPicker.css';

const colors = [{ id: 1, name: 'Желтый' }, { id: 2, name: 'Красный' }, { id: 3, name: 'Зеленый' }];

export const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div className="colorPicker" onMouseLeave={() => setIsOpen(false)}>
      <button
        type="submit"
        className="colorPicker__button"
        onClick={toggling}
      >
        Цвет
      </button>
      {isOpen && (
      <ul className="colorPicker__dropdown">
        {colors.map((color) => (
          <li
            key={color.id}
            className="colorPicker__item"
            onClick={onOptionClicked(color)}
            role="presentation"
          >
            {color.name}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};
