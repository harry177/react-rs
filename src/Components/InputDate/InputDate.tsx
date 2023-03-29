import React from 'react';
import { IInput } from '../InputText/InputText';

export class InputDate extends React.Component<IInput> {
  render() {
    const { childRef, errorDate } = this.props;
    return (
      <>
        <input className="date-input" type="date" aria-label="input" ref={childRef} required />
        <div className="error-input">{errorDate && <div>{errorDate}</div>}</div>
      </>
    );
  }
}
