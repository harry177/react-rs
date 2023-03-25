import React, { ChangeEvent } from 'react';

export class InputSwitch extends React.Component {
  state = { gender: '' };

  radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: event.target.value });
  };

  render() {
    return (
      <>
        Male
        <input
          className="switch-input"
          type="radio"
          name="gender"
          value="Male"
          onChange={this.radioHandler}
        />
        Female
        <input
          className="switch-input"
          type="radio"
          name="gender"
          value="Female"
          onChange={this.radioHandler}
        />
      </>
    );
  }
}
