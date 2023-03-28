import React from 'react';
import { IInput } from '../InputText/InputText';

export class InputDate extends React.Component<IInput> {
  render() {
    const { childRef, errorDate } = this.props;
    return (
      <div>
        <input className="date-input" type="date" aria-label="input" ref={childRef} required />
        {errorDate && <div>{errorDate}</div>}
      </div>
    );
  }
}
