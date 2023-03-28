import React, { ChangeEvent } from 'react';

export interface ISelect {
  childRef: React.RefObject<HTMLSelectElement>;
  errorSelect?: string;
}

export class InputSelect extends React.Component<ISelect> {
  state = { value: '' };

  handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ value: event.target.value });
  };

  options = [
    { id: 0, name: '-- List of languages --', value: '' },
    { id: 1, name: 'English', value: 'English' },
    { id: 2, name: 'German', value: 'German' },
    { id: 3, name: 'Ukranian', value: 'Ukranian' },
    { id: 4, name: 'Russian', value: 'Russian' },
    { id: 5, name: 'Polish', value: 'Polish' },
  ];

  render() {
    const { childRef, errorSelect } = this.props;
    return (
      <>
        <select onChange={this.handleChange} ref={childRef}>
          {this.options.map((option) => {
            return <option key={option.id}>{option.name}</option>;
          })}
        </select>
        <div className="error-input">{errorSelect && <div>{errorSelect}</div>}</div>
      </>
    );
  }
}
