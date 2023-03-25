import React, { ChangeEvent } from 'react';

export class InputSwitch extends React.Component {
  state = { name: 'React' };

  toggleState(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  render() {
    return (
      <input
        className="switch-input"
        type="radio"
        checked={this.state.name === 'hhh'}
        onChange={this.toggleState}
        value="Male"
      />
    );
  }
}
