import React from 'react';

export interface IInput {
  childRef: React.RefObject<HTMLInputElement>;
}

export class InputText extends React.Component<IInput> {
  render() {
    const { childRef } = this.props;
    return <input className="name-input" type="text" ref={childRef} />;
  }
}
