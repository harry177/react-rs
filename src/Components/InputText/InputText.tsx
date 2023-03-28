import React from 'react';

export interface IInput {
  childRef: React.RefObject<HTMLInputElement>;
  errorText?: string;
  errorDate?: string;
  errorCheckbox?: string;
  errorSwitch?: string;
}

export class InputText extends React.Component<IInput> {
  render() {
    const { childRef, errorText } = this.props;
    return (
      <>
        <input className="name-input" type="text" ref={childRef} required />
        <div className="error-input">{errorText && <div>{errorText}</div>}</div>
      </>
    );
  }
}
