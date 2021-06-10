import React, { useState } from 'react';
import './Counter.css';

export const Counter = () => {
  const [count, setCount] = useState(1);

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const subtract = () => {
    if (count === 1) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="counter">
      <button
        type="button"
        className="counter__button"
        onClick={subtract}
      >
        -
      </button>
      <span className="counter__number">{count}</span>
      <button
        type="button"
        className="counter__button"
        onClick={add}
      >
        +
      </button>
    </div>
  );
};
