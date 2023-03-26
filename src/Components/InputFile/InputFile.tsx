import React from 'react';
import { IInput } from '../InputText/InputText';

export class InputFile extends React.Component<IInput> {
  render() {
    const { childRef } = this.props;
    return <input type="file" ref={childRef} />;
  }
}
