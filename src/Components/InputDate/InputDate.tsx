import React, { ChangeEvent } from 'react';

export class InputDate extends React.Component {
  state = { value: '' };

  onInputChange = (event: ChangeEvent) => {
    this.setState({ value: (event.target as HTMLInputElement).value });
  };

  render() {
    return (
      <input
        className="date-input"
        type="date"
        aria-label="input"
        value={this.state.value}
        onChange={this.onInputChange}
      />
    );
  }
}
