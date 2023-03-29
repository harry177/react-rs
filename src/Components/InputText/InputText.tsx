import React from 'react';

export interface IInput {
  childRef: React.RefObject<HTMLInputElement>;
  errorText?: string;
  errorDate?: string;
  errorCheckbox?: string;
  errorSwitch?: string;
  errorFile?: string;
}

export class InputText extends React.Component<IInput> {
  render() {
    const { childRef, errorText } = this.props;
    return (
      <>
        <input className="name-input" type="text" ref={childRef} aria-label="input" required />
        <div className="error-input">{errorText && <div>{errorText}</div>}</div>
      </>
    );
  }
}
