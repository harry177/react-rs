import React, { ChangeEvent } from 'react';

export class InputCheckbox extends React.Component {
  state = { value: '' };

  onInputChange = (event: ChangeEvent) => {
    this.setState({ value: (event.target as HTMLInputElement).value });
  };

  render() {
    return (
      <input
        className="checkbox-input"
        type="checkbox"
        aria-label="input"
        value={this.state.value}
        onChange={this.onInputChange}
      />
    );
  }
}
