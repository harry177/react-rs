import React, { ChangeEvent } from 'react';

export class InputText extends React.Component {
  state = { value: '' };

  onInputChange = (event: ChangeEvent) => {
    this.setState({ value: (event.target as HTMLInputElement).value });
  };

  render() {
    return (
      <input
        className="name-input"
        type="text"
        aria-label="input"
        value={this.state.value}
        onChange={this.onInputChange}
      />
    );
  }
}
