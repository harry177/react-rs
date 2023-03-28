import React, { ChangeEvent } from 'react';
import { IInput } from '../InputText/InputText';

export class InputCheckbox extends React.Component<IInput> {
  onInputChange = (event: ChangeEvent) => {
    this.setState({ value: (event.target as HTMLInputElement).value });
  };

  render() {
    const { childRef, errorCheckbox } = this.props;
    return (
      <>
        <input
          className="checkbox-input"
          type="checkbox"
          aria-label="input"
          onChange={this.onInputChange}
          ref={childRef}
        />
        <div className="error-input">{errorCheckbox && <div>{errorCheckbox}</div>}</div>
      </>
    );
  }
}
