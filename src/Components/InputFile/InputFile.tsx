import React from 'react';
import { IInput } from '../InputText/InputText';

export class InputFile extends React.Component<IInput> {
  render() {
    const { childRef, errorFile } = this.props;

    return (
      <>
        <input type="file" ref={childRef} aria-label="input" />
        <div className="error-input">{errorFile && <div>{errorFile}</div>}</div>
      </>
    );
  }
}
