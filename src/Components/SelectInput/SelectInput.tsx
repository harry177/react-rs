import React, { ChangeEvent } from 'react';

interface ILanguages {
  label: string;
  value: number;
}

const Languages: ILanguages[] = [
  { label: 'JavaScript', value: 1 },
  { label: 'PHP', value: 2 },
  { label: 'Python', value: 3 },
  { label: 'Java', value: 4 },
  { label: 'C', value: 5 },
  { label: 'C++', value: 6 },
  { label: 'C#', value: 7 },
  { label: 'Kotlin', value: 8 },
  { label: 'Ruby', value: 9 },
  { label: 'Golang', value: 10 },
  { label: 'Scala', value: 11 },
  { label: 'others', value: 12 },
];

const yyy = ['JavaScript', 'PHP', 'Python'];

export class SelectInput extends React.Component {
  state = { language: '' };

  onInputChange = (event) => {
    this.setState({ language: (event.target as HTMLOptionElement).value });
  };
  render() {
    return (
      <select defaultValue={this.state.language}>
        <option value={yyy} onChange={this.onInputChange} />
      </select>
    );
  }
}
