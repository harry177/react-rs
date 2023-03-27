import React, { ChangeEvent } from 'react';

export interface ISelect {
  childRef: React.RefObject<HTMLSelectElement>;
}

export class InputSelect extends React.Component<ISelect> {
  state = { value: '' };

  handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ value: event.target.value });
  };

  options: string[] = ['English', 'German', 'Russian', 'Ukranian', 'Polish'];

  render() {
    const { childRef } = this.props;
    return (
      <select value={this.state.value} onChange={this.handleChange} ref={childRef}>
        <option>Please choose one option</option>
        {this.options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    );
  }
}
