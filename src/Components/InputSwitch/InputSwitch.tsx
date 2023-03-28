import React from 'react';

export interface ICheckbox {
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  errorSwitch: string;
}

export class InputSwitch extends React.Component<ICheckbox> {
  render() {
    const { maleRef, femaleRef, errorSwitch } = this.props;
    return (
      <>
        Male
        <input className="switch-input" type="radio" name="gender" value="Male" ref={maleRef} />
        Female
        <input className="switch-input" type="radio" name="gender" value="Female" ref={femaleRef} />
        <div className="error-input">{errorSwitch && <div>{errorSwitch}</div>}</div>
      </>
    );
  }
}
