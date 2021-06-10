import React from 'react';
import './Checkbox.css';
export class CheckBoxGroup extends React.Component {
  state = {
      oneHundred: false,
      twoHundred: false,
      threeHundred: false
    }

  handleCheckBoxChange = (event) => {
    const {name, checked} = event.target
      this.setState({
        [name]: checked
      });
  };

  render () {
  return (
    <div className="checkbox__checkbox-container">
      <div className="checkbox__checkbox-group">
          <input
            type="checkbox"
            id="oneHundred"
            name="oneHundred"
            checked={this.oneHundred}
            onChange={this.handleCheckBoxChange}
            className="checkbox__checkmark"
            defaultChecked={this.oneHundred}
          />
          <label htmlFor="oneHundred" className="checkbox__label">
            100 мл
          </label>
        </div>
        <div className="checkbox__checkbox-group">
          <input
            type="checkbox"
            id="twoHundred"
            name="twoHundred"
            checked={this.twoHundred}
            onChange={this.handleCheckBoxChange}
            className="checkbox__checkmark"
          />
          <label htmlFor="twoHundred" className="checkbox__label">
            200 мл
          </label>
        </div>
        <div className="checkbox__checkbox-group">
          <input
            type="checkbox"
            id="threeHundred"
            name="threeHundred"
            checked={this.threeHundred}
            onChange={this.handleCheckBoxChange}
            className="checkbox__checkmark"
            />
          <label htmlFor="threeHundred" className="checkbox__label">
            300 мл
          </label>
        </div>
    </div>
  )
  }
}