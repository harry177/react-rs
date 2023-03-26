import React from 'react';

export interface ICheckbox {
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
}

export class InputSwitch extends React.Component<ICheckbox> {
  render() {
    const { maleRef, femaleRef } = this.props;
    return (
      <>
        Male
        <input className="switch-input" type="radio" name="gender" value="Male" ref={maleRef} />
        Female
        <input className="switch-input" type="radio" name="gender" value="Female" ref={femaleRef} />
      </>
    );
  }
}
