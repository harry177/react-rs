import React, { ChangeEvent } from 'react';

export class InputSelect extends React.Component {
  state = { value: '' };

  handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ value: event.target.value });
  };

  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option>Please choose one option</option>
        {this.options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    );
  }
}
