import { SelectInput } from '../SelectInput/SelectInput';
import React, { ChangeEvent } from 'react';
import './FormsTableStyles.css';

export class FormsTable extends React.Component {
  state = { value: '' };

  onInputChange = (event: ChangeEvent) => {
    this.setState({ value: (event.target as HTMLInputElement).value });
  };

  render() {
    return (
      <form className="form-table">
        <label className="label-form">
          Name:&nbsp;
          <input
            className="name-input"
            type="text"
            aria-label="input"
            value={this.state.value}
            onChange={this.onInputChange}
          />
          <br />
          Date of birth:&nbsp;
          <input
            className="date-input"
            type="date"
            aria-label="input"
            value={this.state.value}
            onChange={this.onInputChange}
          />
          <br />
          Languages you know:&nbsp;
          <SelectInput />
        </label>
      </form>
    );
  }
}
