import React from 'react';

export interface IInput {
  childRef: React.RefObject<HTMLInputElement>;
  errorText?: string;
  errorDate?: string;
}

export class InputText extends React.Component<IInput> {
  render() {
    const { childRef, errorText } = this.props;
    return (
      <div>
        <input className="name-input" type="text" ref={childRef} required />
        {errorText && <div>{errorText}</div>}
      </div>
    );
  }
}
